/*
 * React Fabric
 * @version: 1.0.0
 *
 *
 * The MIT License (MIT)
 * Copyright (c) 2024 Adarsh Pastakia
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 * and associated documentation files (the "Software"), to deal in the Software without restriction,
 * including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial
 * portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
 * TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import {
  autoUpdate,
  flip,
  FloatingFocusManager,
  FloatingList,
  FloatingNode,
  FloatingOverlay,
  FloatingPortal,
  FloatingTree,
  offset,
  safePolygon,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useFloatingNodeId,
  useFloatingParentNodeId,
  useFloatingTree,
  useHover,
  useInteractions,
  useListNavigation,
  useRole,
  useTypeahead,
} from "@floating-ui/react";
import { mergeRefs } from "@react-fabric/utilities";
import classNames from "classnames";
import {
  cloneElement,
  Fragment,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { HotKeyWrapper } from "../../hotkeys/HotKeyWrapper";
import { cloneChildren, nodeCheck } from "../../utils";
import { MenuItem } from "./MenuItem";
import { type MenuProps } from "./types";

// FIXME: refactor menu implementation to differentiate between static and floating menus, implement context wrapper for each menu level

const MenuComponent = ({
  children,
  minimal,
  menuClassName,
  onClick,
  // @ts-expect-error ignore
  trigger = "hover",
  // @ts-expect-error ignore
  ref,
  ...rest
}: Partial<MenuProps>) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const elementsRef = useRef<Array<HTMLElement | null>>([]);
  const labelsRef = useRef<Array<string | null>>([]);

  const tree = useFloatingTree();
  const nodeId = useFloatingNodeId();
  const parentId = useFloatingParentNodeId();

  const isNested = parentId !== null;

  const { floatingStyles, refs, context } = useFloating<HTMLButtonElement>({
    nodeId,
    open: !isNested || isOpen,
    onOpenChange(open, event, reason) {
      isNested && setIsOpen(open);
      if (reason === "outside-press" && trigger === "click")
        tree?.events.emit("close");
    },
    placement: isNested ? "right-start" : "bottom-start",
    middleware: [
      offset({ mainAxis: isNested ? 0 : 4, alignmentAxis: isNested ? -4 : 0 }),
      flip(),
      shift(),
    ],
    whileElementsMounted: autoUpdate,
  });

  const hover = useHover(context, {
    enabled: trigger === "hover",
    delay: { open: 75 },
    handleClose: safePolygon({ blockPointerEvents: true }),
  });
  const click = useClick(context, {
    event: "mousedown",
    toggle: trigger === "click" || !isNested,
    ignoreMouse: trigger === "hover" && !isNested,
  });
  const role = useRole(context, { role: "menu" });
  const dismiss = useDismiss(context, { bubbles: true });
  const listNavigation = useListNavigation(context, {
    listRef: elementsRef,
    activeIndex,
    nested: isNested,
    onNavigate: setActiveIndex,
  });
  const typeahead = useTypeahead(context, {
    listRef: labelsRef,
    onMatch: isOpen ? setActiveIndex : undefined,
    activeIndex,
  });

  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions(
    [click, hover, role, dismiss, listNavigation, typeahead],
  );

  // Event emitter allows you to communicate across tree components.
  // This effect closes all menus when an item gets clicked anywhere
  // in the tree.
  useEffect(() => {
    if (!tree || !parentId) return;

    function handleTreeClick() {
      setIsOpen(false);
    }

    function onSubMenuOpen(event: { nodeId: string; parentId: string }) {
      if (event.nodeId !== nodeId && event.parentId === parentId) {
        setIsOpen(false);
      }
    }

    tree.events.on("click", handleTreeClick);
    tree.events.on("close", handleTreeClick);
    tree.events.on("menuopen", onSubMenuOpen);

    return () => {
      tree.events.off("click", handleTreeClick);
      tree.events.off("close", handleTreeClick);
      tree.events.off("menuopen", onSubMenuOpen);
    };
  }, [tree, nodeId, parentId]);

  useEffect(() => {
    if (isOpen && tree) {
      tree.events.emit("menuopen", { parentId, nodeId });
    }
  }, [tree, isOpen, nodeId, parentId]);

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      const el = e.target as HTMLElement;
      if (el.dataset.id) {
        onClick?.(el.dataset.id as AnyObject);
      }
    },
    [onClick],
  );

  const Wrapper = isNested ? FloatingPortal : Fragment;
  const wrapperProps = isNested
    ? {
        root:
          refs.domReference.current?.closest<HTMLElement>(".theme-base") ??
          undefined,
      }
    : {};

  useEffect(() => {
    setTimeout(
      () =>
        refs.floating.current
          ?.querySelector(`[data-active="true"]`)
          ?.scrollIntoView({ block: "nearest" }),
      100,
    );
  }, [isOpen]);

  useEffect(() => {
    if ((!isNested || isOpen) && activeIndex) {
      setTimeout(() => {
        elementsRef.current[activeIndex]?.scrollIntoView({
          block: "nearest",
        });
      }, 100);
    }
  }, [isOpen, activeIndex]);

  return (
    <FloatingNode id={nodeId}>
      {isNested && (
        <MenuItem
          {...(getReferenceProps({
            ...rest,
            id: undefined,
            "data-dropdown-dismiss": false,
            onClick: (e: AnyObject) => {
              e.stopPropagation();
              return false;
            },
          } as AnyObject) as AnyObject)}
          data-open={isOpen}
          minimal={minimal}
          altIcon="icon-[mdi--menu-right]"
          ref={mergeRefs(refs.setReference, ref)}
        />
      )}
      <FloatingList elementsRef={elementsRef} labelsRef={labelsRef}>
        {(!isNested || isOpen) && (
          <Wrapper {...wrapperProps}>
            {isNested && <FloatingOverlay />}
            <HotKeyWrapper>
              <FloatingFocusManager
                context={context}
                modal={!isNested}
                initialFocus={isNested ? -1 : 0}
                returnFocus={!isNested}
              >
                <div
                  className={classNames(
                    menuClassName,
                    "flex flex-col bg-base p-1 menu-list",
                    isNested &&
                      "outline shadow-lg rounded-capped max-h-96 overflow-auto scroll-thin z-(--z-popover)",
                  )}
                  autoFocus
                  ref={mergeRefs(isNested ? refs.setFloating : ref)}
                  {...getFloatingProps({
                    onClick: isNested ? undefined : handleClick,
                  })}
                  // @ts-expect-error ignore
                  {...{ style: !isNested ? rest.style : floatingStyles }}
                >
                  {cloneChildren(children, (child: AnyObject, index) => {
                    labelsRef.current[index] = child.props.label;
                    return cloneElement(
                      child,
                      nodeCheck(child, MenuItem, Menu, MenuComponent)
                        ? {
                            minimal: !isNested && minimal,
                            "data-focus": activeIndex === index,
                            ref: (el: HTMLElement) =>
                              (elementsRef.current[index] = el),
                            ...getItemProps({
                              onClick: child.props.onClick,
                              tabIndex: activeIndex === index ? 0 : -1,
                            }),
                          }
                        : {},
                    );
                  })}
                </div>
              </FloatingFocusManager>
            </HotKeyWrapper>
          </Wrapper>
        )}
      </FloatingList>
    </FloatingNode>
  );
};

/**
 * A component that displays a menu with items, supports nested menus and various interactions.
 * It can be triggered by hover or click events, and allows for custom styling and behavior.
 * This component is designed to be used within a Floating UI context, allowing for dynamic positioning and interaction handling.
 * It can be nested within other menus to create complex menu structures.
 *
 * @param {MenuProps} props - The properties for the Menu component.
 * @returns {JSX.Element} The rendered Menu component.
 *
 * @example
 * ```jsx
 * <Menu
 *   className="my-menu"
 *   trigger="click"
 *   onClick={(id) => console.log(`Clicked item with id: ${id}`)}
 * >
 *   <MenuItem id="item1" label="Item 1" />
 *   <MenuItem id="item2" label="Item 2" />
 *   <MenuItem id="item3" label="Item 3">
 *     <Menu>
 *       <MenuItem id="subitem1" label="Sub Item 1" />
 *       <MenuItem id="subitem2" label="Sub Item 2" />
 *     </Menu>
 *   </MenuItem>
 * </Menu>
 * ```
 *
 * @see {@link https://adarshpastakia.github.io/react-fabric/?path=/docs/core-components-menu--docs} for more details.
 */
export const Menu = (props: MenuProps) => {
  const parentId = useFloatingParentNodeId();
  const tree = useFloatingTree();

  if (tree) {
    return (
      <MenuComponent
        {...(props as AnyObject)}
        className=""
        menuClassName={props.className}
      />
    );
  }

  if (parentId === null) {
    return (
      <FloatingTree>
        <MenuComponent
          {...(props as AnyObject)}
          className=""
          menuClassName={props.className}
        />
      </FloatingTree>
    );
  }

  return <MenuComponent {...props} />;
};
