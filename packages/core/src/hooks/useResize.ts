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

import { useCallback, useRef, type RefObject } from "react";
import { useIsRtl } from "./useIsRtl";

interface Options {
  /**
   * is vertical resize
   */
  isReverse?: boolean;
  /**
   * is vertical resize
   */
  isVertical?: boolean;
  /**
   * callback on drag start
   */
  onStart?: () => void;
  /**
   * callback on drag end
   */
  onEnd?: () => void;
}

/**
 * Custom hook to handle resizing of an element.
 * It provides a ref to the element and a mouse down event handler to initiate resizing.
 * The resizing is done by tracking mouse movements and calculating the difference in x and y coordinates.
 * It supports both horizontal and vertical resizing, and can be configured to reverse the direction based on RTL (Right-to-Left) layout.
 *
 * @param onResize - callback to handle resize event with the difference in x and y
 * @param options - options for resizing behavior
 * @returns ref to the element and a mouse down event handler to initiate resizing
 *
 * @example
 * ```jsx
 * const { ref, onMouseDown } = useResize((diff) => {
 *   console.log("Resize difference:", diff);
 * }, { isReverse: true, isVertical: false });
 * <div ref={ref} onMouseDown={onMouseDown}>Resize Me</div>
 * ```
 */
export const useResize = <T extends HTMLElement = HTMLDivElement>(
  onResize: (diff: { x: number; y: number }) => void,
  { isReverse = false, isVertical = false, onStart, onEnd }: Options,
): { ref: RefObject<T | null>; onMouseDown: React.MouseEventHandler } => {
  const refEl = useRef<T>(null);
  const isRtl = useIsRtl();

  const onResizing = useCallback(
    (evt: MouseEvent) => {
      if (refEl.current != null) {
        /** ***************** check if reverse enabled of RTL *******************/
        const reversed = ((isRtl ? 1 : 0) ^ (isReverse ? 1 : 0)) === 1;
        const box = refEl.current?.getBoundingClientRect();
        const x =
          (evt.clientX - (reversed ? box.left : box.right)) *
          (reversed ? -1 : 1);
        const y = evt.clientY - box.bottom;
        onResize({ x, y });
      }
    },
    [onResize, isRtl, isReverse],
  );

  /** ***************** dettach handlers on mouseup *******************/
  const onResizeEnd = useCallback(() => {
    document.body.style.cursor = "unset";
    document.removeEventListener("mousemove", onResizing);
    document.removeEventListener("mouseup", onResizeEnd);
    onEnd?.();
  }, [onEnd, onResizing]);

  /** ***************** attach handlers on mousedown *******************/
  const onResizeStart = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      document.body.style.cursor = isVertical ? "row-resize" : "col-resize";
      document.addEventListener("mousemove", onResizing);
      document.addEventListener("mouseup", onResizeEnd);
      onStart?.();
    },
    [onResizing, onResizeEnd, onStart],
  );

  return { ref: refEl, onMouseDown: onResizeStart };
};
