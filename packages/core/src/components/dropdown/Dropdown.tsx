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

import type { Placement } from "@floating-ui/react";
import {
  FloatingArrow,
  FloatingFocusManager,
  FloatingOverlay,
  FloatingPortal,
  FloatingTree,
  arrow,
  autoUpdate,
  flip,
  offset,
  safePolygon,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useFloatingNodeId,
  useFloatingTree,
  useHover,
  useInteractions,
} from "@floating-ui/react";
import { cn, mergeRefs } from "@react-fabric/utilities";
import { Children, cloneElement, useEffect, useMemo, useRef, useState } from "react";
import type { ChildProp, RefProp } from "../../types";

export interface DropdownProps extends RefProp {
  children: [React.ReactNode, React.ReactNode];
  /**
   * dropdown placement
   */
  placement?: Placement;
  /**
   * show dropdown arrow
   */
  showArrow?: boolean;
  /**
   * fit with to anchor' parent element
   */
  fitToParent?: boolean;
  /**
   * close dropdown on click
   */
  closeOnClick?: boolean;
  /**
   * disable dropdown
   */
  disabled?: boolean;
  /**
   * plain dropdown body
   */
  plainDropdown?: boolean;
  /**
   * dropdown body className
   */
  className?: string;
  /**
   * dropdown trigger event, default is click
   */
  trigger?: "click" | "hover";
  /**
   * portal root element
   */
  root?: HTMLElement;
  /**
   * open handler
   */
  onOpen?: () => void;
  /**
   * close handler
   */
  onClose?: () => void;
}

function DropdownComponent({
  ref,
  children,
  showArrow,
  closeOnClick,
  fitToParent = true,
  placement = "bottom",
  onClose,
  onOpen,
  root,
  disabled,
  plainDropdown,
  trigger = "click",
  className,
}: DropdownProps) {
  const arrowRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const tree = useFloatingTree();
  const nodeId = useFloatingNodeId();

  const [anchor, panel] = useMemo<Array<React.ReactElement<KeyValue>>>(() => {
    // eslint-disable-next-line @eslint-react/no-children-to-array
    return Children.toArray(children) as Array<React.ReactElement<KeyValue>>;
  }, [children]);

  const { refs, floatingStyles, context } = useFloating({
    nodeId: `dropdown-${nodeId}`,
    open: isOpen,
    onOpenChange: (open, _, reason) => {
      if (reason === "reference-press") return;
      setIsOpen(open);
      (open ? onOpen : onClose)?.();
    },
    strategy: "fixed",
    placement,
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(showArrow ? 9 : 4),
      shift({ padding: 8 }),
      flip(),
      showArrow &&
        arrow({
          element: arrowRef,
        }),
    ],
  });

  const handler = trigger === "hover" ? useHover : useClick;
  const click = handler(context, {
    enabled: !disabled,
    handleClose: safePolygon({ blockPointerEvents: true }),
  });

  const dismiss = useDismiss(context, {
    referencePress: true,
  });

  const { getReferenceProps, getFloatingProps } = useInteractions([dismiss, click]);

  const [minWidth, minHeight] = useMemo(() => {
    if (fitToParent) {
      const ref = refs.reference.current as HTMLElement;
      const el = (ref?.closest('[data-ref="buttonGroup"]') ?? refs.reference.current) as HTMLElement;
      return [el?.offsetWidth, el?.offsetHeight];
    }
    return [undefined, undefined];
    // eslint-disable-next-line @eslint-react/exhaustive-deps
  }, [refs, isOpen, fitToParent]);

  const tryClosing = (e: React.MouseEvent) => {
    if (
      !refs.floating.current?.contains((e.target as HTMLElement).closest("[data-dropdown-dismiss='false']")) &&
      (!!closeOnClick || refs.floating.current?.contains((e.target as HTMLElement).closest("[data-dropdown-dismiss='true']")))
    ) {
      setTimeout(() => {
        setIsOpen(false);
        onClose?.();
      }, 100);
    }
  };

  const innerRef = useMemo(
    () => mergeRefs(ref, anchor.props?.ref, (el: HTMLDivElement) => refs.setReference(el)),
    [ref, anchor.props.ref, refs],
  );

  useEffect(() => {
    // eslint-disable-next-line @eslint-react/set-state-in-effect
    if (disabled) setIsOpen(false);
  }, [disabled]);

  useEffect(() => {
    if (!tree) return;

    function handleTreeClick() {
      setIsOpen(false);
    }

    tree.events.on("close", handleTreeClick);

    return () => {
      tree.events.off("close", handleTreeClick);
    };
  }, [tree]);

  if (!anchor || !panel) throw Error("Dropdown requires two elements [Anchor, Panel]");

  return (
    <>
      {cloneElement(anchor, {
        ...getReferenceProps({
          onClick: (e) => {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-call
            anchor.props.onClick?.(e);
            e.stopPropagation();
            e.preventDefault();
          },
        }),
        "data-inner-clickable": "true",
        "data-dropdown-open": isOpen ? true : undefined,
        ref: innerRef,
      })}
      {isOpen && (
        <FloatingPortal root={root ?? refs.domReference.current?.closest<HTMLElement>(".theme-base") ?? undefined}>
          <FloatingOverlay />
          <FloatingFocusManager context={context} closeOnFocusOut>
            <div
              ref={(el) => refs.setFloating(el)}
              style={{
                zIndex: "var(--z-popover)",
                ...floatingStyles,
              }}
              data-ref="dropdownBody"
              {...getFloatingProps({
                onClick: (e) => e.stopPropagation(),
              })}
            >
              <div
                role="none"
                className={cn(
                  "fabric-dropdownBody",
                  className,
                  !plainDropdown && "shadow-lg bg-default ring-1 ring-tint-200",
                  "rounded-capped grid max-h-[60vh] scroll-thin",
                )}
                style={{
                  minWidth,
                  minHeight,
                }}
                onMouseUpCapture={tryClosing}
              >
                {panel}
              </div>
              {showArrow && (
                <FloatingArrow ref={arrowRef} context={context} strokeWidth={0.5} className="fill-default stroke-soft" />
              )}
            </div>
          </FloatingFocusManager>
        </FloatingPortal>
      )}
    </>
  );
}

/**
 * A component that displays a dropdown menu with an anchor and a panel.
 * It supports various features such as placement, arrow display, click handling,
 * and event handling for opening and closing the dropdown.
 *
 * @example
 * ```jsx
 * <Dropdown
 *   placement="bottom"
 *   showArrow
 *   closeOnClick
 *   fitToParent
 *   onOpen={() => console.log("Dropdown opened")}
 *   onClose={() => console.log("Dropdown closed")}
 * >
 *   <button>Open Dropdown</button>
 *   <div>
 *     <DropdownDismiss>
 *       <button>Dismiss</button>
 *     </DropdownDismiss>
 *     <p>Dropdown Content</p>
 *   </div>
 * </Dropdown>
 * ```
 */
export function Dropdown(props: DropdownProps) {
  return (
    <FloatingTree>
      <DropdownComponent {...props} />
    </FloatingTree>
  );
}

/**
 * A component that allows dismissing the dropdown when clicked.
 * It can be used inside the dropdown panel to provide a dismiss area.
 * It supports an optional `dismiss` prop to control whether the dropdown should be dismissed on click.
 */
export function DropdownDismiss({ children, dismiss = true }: ChildProp & { dismiss?: boolean }) {
  const tree = useFloatingTree();

  return (
    <div
      role="none"
      className="contents"
      data-dropdown-dismiss={dismiss}
      onMouseUp={() => dismiss && setTimeout(() => tree?.events.emit("close"), 50)}
    >
      {children}
    </div>
  );
}
