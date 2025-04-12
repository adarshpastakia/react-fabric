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
  useFloatingTree,
  useHover,
  useInteractions,
  type Placement,
} from "@floating-ui/react";
import { mergeRefs } from "@react-fabric/utilities";
import classNames from "classnames";
import {
  Children,
  Fragment,
  cloneElement,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { type ChildProp, type RefProp } from "../../types";

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
  dropdownClassName?: string;
  /**
   * dropdown event
   */
  dropdownEvent?: "click" | "hover";
  /**
   * open handler
   */
  onOpen?: () => void;
  /**
   * close handler
   */
  onClose?: () => void;
}

const DropdownElement = ({
  ref,
  children,
  showArrow,
  closeOnClick,
  fitToParent = true,
  placement = "bottom",
  onClose,
  onOpen,
  disabled,
  plainDropdown,
  dropdownEvent,
  dropdownClassName,
}: DropdownProps) => {
  const arrowRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const tree = useFloatingTree();

  const [anchor, panel] = useMemo<AnyObject[]>(
    () => Children.toArray(children as AnyObject),
    [children],
  );

  const { refs, floatingStyles, context } = useFloating({
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
      shift({ padding: 8 }),
      flip(),
      showArrow && offset(9),
      showArrow &&
        arrow({
          element: arrowRef,
        }),
    ],
  });

  const handler = dropdownEvent === "hover" ? useHover : useClick;
  const click = handler(context, {
    enabled: !disabled,
    handleClose: safePolygon({ blockPointerEvents: true }),
  });
  const dismiss = useDismiss(context, {
    referencePress: true,
  });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    dismiss,
    click,
  ]);

  const minWidth = useMemo(() => {
    if (fitToParent) {
      const el: HTMLElement =
        // @ts-expect-error ignore
        refs.reference.current?.closest('[data-ref="buttonGroup"]') ??
        refs.reference.current;
      return el?.offsetWidth;
    }
    return undefined;
  }, [refs, isOpen, fitToParent]);

  const tryClosing = useCallback(
    (e: React.MouseEvent) => {
      if (
        !refs.floating.current?.contains(
          (e.target as HTMLElement).closest("[data-dropdown-dismiss='false']"),
        ) &&
        (!!closeOnClick ||
          refs.floating.current?.contains(
            (e.target as HTMLElement).closest("[data-dropdown-dismiss='true']"),
          ))
      ) {
        setTimeout(() => {
          setIsOpen(false);
          onClose?.();
        }, 100);
      }
    },
    [closeOnClick, onClose],
  );

  const innerRef = useMemo(
    () => mergeRefs(ref, anchor.props.ref, refs.setReference),
    [ref, anchor.props.ref, refs.setReference],
  );

  useEffect(() => {
    disabled && setIsOpen(false);
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

  if (!anchor || !panel)
    throw Error("Dropdown requires two elements [Anchor, Panel]");

  return (
    <Fragment>
      {cloneElement(anchor, {
        ...getReferenceProps({
          onClick: (e) => {
            anchor.props.onClick?.(e);
            e.stopPropagation();
          },
        }),
        "data-inner-clickable": "true",
        "data-dropdown-open": isOpen ? true : undefined,
        ref: innerRef,
      })}
      {isOpen && (
        <FloatingPortal
          root={
            refs.domReference.current?.closest<HTMLElement>(".theme-base") ??
            undefined
          }
        >
          <FloatingOverlay />
          <FloatingFocusManager context={context} modal>
            <div
              ref={refs.setFloating}
              style={{
                minWidth,
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
                className={classNames(
                  "fabric-dropdownBody",
                  dropdownClassName,
                  !plainDropdown && "shadow-lg bg-base ring-1 ring-tint-100",
                  "rounded-capped overflow-auto scroll-thin grid max-h-[70vh]",
                )}
                onMouseUpCapture={tryClosing}
              >
                {panel}
              </div>
              {showArrow && (
                <FloatingArrow
                  ref={arrowRef}
                  context={context}
                  strokeWidth={0.5}
                  className="fill-base stroke-dimmed"
                />
              )}
            </div>
          </FloatingFocusManager>
        </FloatingPortal>
      )}
    </Fragment>
  );
};

export const Dropdown = (props: DropdownProps) => (
  <FloatingTree>
    <DropdownElement {...props} />
  </FloatingTree>
);

export const DropdownDismiss = ({
  children,
  dismiss = true,
}: ChildProp & { dismiss?: boolean }) => {
  const tree = useFloatingTree();

  return (
    <div
      role="none"
      className="contents"
      data-dropdown-dismiss={dismiss}
      onMouseUp={() =>
        dismiss && setTimeout(() => tree?.events.emit("close"), 50)
      }
    >
      {children}
    </div>
  );
};
