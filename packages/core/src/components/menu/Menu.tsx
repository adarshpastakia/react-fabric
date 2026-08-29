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
import { cn, mergeRefs } from "@react-fabric/utilities";
import { cloneElement, Fragment, isValidElement, useEffect, useRef, useState } from "react";
import { cloneChildren, nodeCheck } from "../../utils";
import { MenuItem } from "./MenuItem";
import type { MenuItemProps, MenuProps } from "./types";

// FIXME: refactor menu implementation to differentiate between static and floating menus, implement context wrapper for each menu level

function MenuComponent({
  children,
  minimal,
  className,
  forDropdown,
  onClick,
  // @ts-expect-error ignore
  trigger = "hover",
  // @ts-expect-error ignore
  ref,
  // @ts-expect-error ignore
  onMouseUp,
  // @ts-expect-error ignore
  onMouseDown,
  // @ts-expect-error ignore
  style,
  ...rest
}: Partial<MenuProps>) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const elementsRef = useRef<Array<HTMLElement | null>>([]);
  const labelsRef = useRef<Array<string | null>>([]);

  const tree = useFloatingTree();
  const nodeId = useFloatingNodeId();
  const parentId = useFloatingParentNodeId();

  const isNested = parentId !== null && !forDropdown;

  const { floatingStyles, refs, context } = useFloating<HTMLButtonElement>({
    nodeId: `menu-${nodeId}`,
    open: !isNested || isOpen,
    onOpenChange(open, event, reason) {
      if (isNested) setIsOpen(open);
      if (reason === "outside-press" && trigger === "click") tree?.events.emit("close");
    },
    placement: isNested ? "right-start" : "bottom-start",
    middleware: [offset({ mainAxis: isNested ? 0 : 4, alignmentAxis: isNested ? -4 : 0 }), flip(), shift()],
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

  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions([
    click,
    hover,
    role,
    dismiss,
    listNavigation,
    typeahead,
  ]);

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

  const handleClick = (e: React.MouseEvent) => {
    const el = e.target as HTMLElement;
    if (el.dataset.id) {
      onClick?.(el.dataset.id);
    }
  };

  const Wrapper = isNested ? FloatingPortal : Fragment;
  const wrapperProps = isNested
    ? {
        root: refs.domReference.current?.closest<HTMLElement>(".theme-base") ?? undefined,
      }
    : {};

  useEffect(() => {
    const tmr = setTimeout(() => {
      elementsRef.current[0]?.focus();
      refs.floating.current?.querySelector(`[data-active="true"]`)?.scrollIntoView({ block: "nearest" });
    }, 100);
    return () => {
      clearTimeout(tmr);
    };
  }, [isOpen, refs.floating]);

  useEffect(() => {
    if ((!isNested || isOpen) && activeIndex) {
      const tmr = setTimeout(() => {
        elementsRef.current[activeIndex]?.scrollIntoView({
          block: "nearest",
        });
      }, 100);
      return () => {
        clearTimeout(tmr);
      };
    }
  }, [isOpen, activeIndex, isNested]);

  return (
    <FloatingNode id={nodeId}>
      {isNested && (
        <MenuItem
          {...getReferenceProps({
            ...rest,
            id: undefined,
            // @ts-expect-error ignore
            "data-dropdown-dismiss": false,
            onClick: (e: React.MouseEvent) => {
              e.stopPropagation();
              return false;
            },
          })}
          data-open={isOpen}
          // @ts-expect-error ignore
          minimal={minimal}
          altIcon="icon-[mdi--menu-right]"
          ref={mergeRefs(refs.reference, ref)}
        />
      )}
      <FloatingList elementsRef={elementsRef} labelsRef={labelsRef}>
        {(!isNested || isOpen) && (
          <Wrapper {...wrapperProps}>
            {isNested && <FloatingOverlay />}
            <FloatingFocusManager context={context} closeOnFocusOut initialFocus={isNested ? -1 : 0} returnFocus={!isNested}>
              <div
                className={cn(
                  className,
                  "flex flex-col p-1 menu-list",
                  isNested && "outline shadow-lg rounded-capped max-h-[60vh] overflow-auto scroll-thin z-(--z-popover)",
                )}
                ref={mergeRefs(isNested ? refs.floating : ref)}
                {...getFloatingProps({
                  onClick: isNested ? undefined : handleClick,
                  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                  onMouseDown,
                  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                  onMouseUp,
                })}
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                {...{ style: !isNested ? style : floatingStyles }}
              >
                {cloneChildren(children)?.map((child, index) => {
                  if (isValidElement(child)) {
                    const childEl = child as React.ReactElement<MenuItemProps>;
                    labelsRef.current[index] = childEl.props.label;
                    return cloneElement(
                      childEl,
                      nodeCheck(child, MenuItem, Menu, MenuComponent)
                        ? {
                            // @ts-expect-error ignore
                            minimal: !isNested && minimal,
                            "data-focus": activeIndex === index,
                            ref: (el: HTMLElement) => (elementsRef.current[index] = el),
                            ...getItemProps({
                              onClick: childEl.props.onClick,
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
}

/**
 * A component that displays a menu with items, supports nested menus and various interactions.
 * It can be triggered by hover or click events, and allows for custom styling and behavior.
 * This component is designed to be used within a Floating UI context, allowing for dynamic positioning and interaction handling.
 * It can be nested within other menus to create complex menu structures.
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
 */
export function Menu(props: MenuProps) {
  const parentId = useFloatingParentNodeId();
  const tree = useFloatingTree();

  if (tree) {
    return <MenuComponent {...props} />;
  }

  if (parentId === null) {
    return (
      <FloatingTree>
        <MenuComponent {...props} />
      </FloatingTree>
    );
  }

  return <MenuComponent {...props} />;
}
