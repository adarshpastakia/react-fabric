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
  FloatingPortal,
  autoUpdate,
  flip,
  offset,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
} from "@floating-ui/react";
import { cloneElement, useRef, useState } from "react";
import { type ChildrenProp } from "../../types";
import { type Menu } from "./Menu";

export interface ContextMenuProps extends ChildrenProp {
  menu: React.ReactElement<typeof Menu>;
}

export const ContextMenu = ({ children, menu }: ContextMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    strategy: "fixed",
    placement: "bottom-start",
    whileElementsMounted: autoUpdate,
    middleware: [offset(8), flip()],
  });

  const click = useClick(context, {});
  const dismiss = useDismiss(context, {});

  const { getFloatingProps } = useInteractions([dismiss, click]);

  const handleClick = useRef((e: MouseEvent) => {
    const virtual = {
      getBoundingClientRect() {
        return {
          width: 0,
          height: 0,
          x: e.clientX,
          y: e.clientY,
          top: e.clientY,
          left: e.clientX,
          right: e.clientX,
          bottom: e.clientY,
        };
      },
    };
    refs.setReference(virtual);
    setIsOpen(true);
    e.stopImmediatePropagation();
    e.preventDefault();
    return false;
  });

  const wrapperRef = useRef((el: HTMLElement) => {
    el?.parentElement?.removeEventListener("contextmenu", handleClick.current);
    el?.parentElement?.addEventListener("contextmenu", handleClick.current);
  });

  const tryClosing = useRef((e: React.MouseEvent) => {
    if ((e.target as HTMLElement)?.closest("[data-dropdown-dismiss='true']"))
      setTimeout(() => setIsOpen(false), 50);
  });

  return (
    <div
      className="contents"
      ref={wrapperRef.current as AnyObject}
      onMouseUpCapture={tryClosing.current}
    >
      {children}
      {isOpen && (
        <FloatingPortal>
          {cloneElement(menu as AnyObject, {
            ...getFloatingProps(),
            style: {
              ...floatingStyles,
              borderRadius: "var(--rounding)",
              zIndex: "var(--z-popover)",
              fontSize: "0.875rem",
            },
            className: "bg-base outline rounded-capped shadow-lg",
            ref: refs.setFloating,
            onMouseUp: tryClosing.current,
          })}
        </FloatingPortal>
      )}
    </div>
  );
};
