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
  Children,
  cloneElement,
  Fragment,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { CoreIcons } from "../../types/icons";
import { nodeCheck } from "../../utils";
import { MenuItem } from "./MenuItem";
import { type MenuProps } from "./types";

// FIXME: refactor menu implementation to differentiate between static and floating menus, implement context wrapper for each menu level

const MenuComponent = ({
  children,
  minimal,
  menuClassName,
  onClick,
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
    delay: { open: 75 },
    handleClose: safePolygon({ blockPointerEvents: true }),
  });
  const click = useClick(context, {
    toggle: true,
    ignoreMouse: true,
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
        onClick?.(el.dataset.id);
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
          altIcon={CoreIcons.chevronRight}
          ref={mergeRefs(refs.setReference, ref)}
        />
      )}
      <FloatingList elementsRef={elementsRef} labelsRef={labelsRef}>
        {(!isNested || isOpen) && (
          <Wrapper {...wrapperProps}>
            {isNested && <FloatingOverlay />}
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
                    "outline shadow-lg rounded-capped max-h-96 overflow-auto scroll-thin z-[var(--z-popover)]",
                )}
                autoFocus
                ref={mergeRefs(refs.setFloating, isNested ? undefined : ref)}
                {...getFloatingProps({
                  onClick: isNested ? undefined : handleClick,
                })}
                // @ts-expect-error ignore
                {...{ style: !isNested ? rest.style : floatingStyles }}
              >
                {Children.map(children, (child: AnyObject, index) => {
                  if (child) {
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
                  }
                })}
              </div>
            </FloatingFocusManager>
          </Wrapper>
        )}
      </FloatingList>
    </FloatingNode>
  );
};

export const Menu = (props: MenuProps) => {
  const parentId = useFloatingParentNodeId();

  if (parentId === null) {
    return (
      <FloatingTree>
        <MenuComponent
          {...(props as AnyObject)}
          menuClassName={props.className}
        />
      </FloatingTree>
    );
  }

  return <MenuComponent {...props} />;
};
