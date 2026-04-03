/*
 * React Fabric
 * @version: 1.0.0
 *
 *
 * The MIT License (MIT)
 * Copyright (c) 2026 Adarsh Pastakia
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
  FloatingFocusManager,
  FloatingOverlay,
  FloatingPortal,
  autoUpdate,
  flip,
  offset,
  useClick,
  useDismiss,
  useFloating,
  useFloatingNodeId,
  useInteractions,
} from "@floating-ui/react";
import { cloneElement, useEffectEvent, useRef, useState } from "react";
import { type Menu } from "../components/menu/Menu";

/**
 * A hook that provides a context menu that appears on right-click.
 * It uses the Floating UI library to manage the positioning and interactions of the menu.
 * This hook is useful for creating custom context menus that can be triggered by right-clicking on elements.
 *
 * @param {ContextMenuProps} props - The properties for the ContextMenu hook.
 * @returns {[React.ReactElement | null, (e: MouseEvent) => void]} An array containing the rendered ContextMenu component (or null if not open) and the function to handle right-click events.
 */
export const useContextMenu = (
  menu: React.ReactElement<typeof Menu>,
): [Overlay: React.ReactNode, onContentMenu: (e: React.MouseEvent) => void] => {
  const [isOpen, setIsOpen] = useState(false);
  const nodeId = useFloatingNodeId();

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    nodeId,
    onOpenChange: (open, evt, reason) => {
      const target = evt?.target as HTMLElement;
      if (!target?.closest(".menu-list")) setIsOpen(open);
    },
    strategy: "fixed",
    placement: "bottom-start",
    whileElementsMounted: autoUpdate,
    middleware: [offset(8), flip()],
  });

  const click = useClick(context, {
    toggle: true,
    ignoreMouse: true,
  });
  const dismiss = useDismiss(context, { bubbles: true });

  const { getFloatingProps } = useInteractions([dismiss, click]);

  const handleClick = useEffectEvent((e: React.MouseEvent) => {
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
    e.nativeEvent.stopImmediatePropagation();
    e.preventDefault();
    return false;
  });

  const tryClosing = useRef((e: React.MouseEvent) => {
    if (!(e.target as HTMLElement)?.closest("[data-dropdown-dismiss='false']")) setTimeout(() => setIsOpen(false), 50);
  });

  return [
    isOpen && (
      <FloatingPortal root={refs.domReference.current?.closest<HTMLElement>(".theme-base") ?? undefined}>
        <FloatingOverlay
          lockScroll
          style={{
            zIndex: "var(--z-overlay-mask)",
            position: "absolute",
            overflow: "hidden",
          }}
        >
          <FloatingFocusManager context={context}>
            {cloneElement(menu as AnyObject, {
              ...getFloatingProps(),
              style: {
                ...floatingStyles,
                borderRadius: "var(--rounding)",
                zIndex: "var(--z-popover)",
                fontSize: "0.875rem",
              },
              className: "bg-default outline rounded-capped shadow-lg",
              ref: refs.setFloating,
              onMouseUp: tryClosing.current,
            })}
          </FloatingFocusManager>
        </FloatingOverlay>
      </FloatingPortal>
    ),
    handleClick,
  ];
};
