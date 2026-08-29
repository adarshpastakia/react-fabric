/**
 * React Fabric
 * @version 1.0.0
 * @license MIT
 * @copyright 2024 Adarsh Pastakia
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import { useCallback, useRef, useState } from "react";
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
 * @param onResize - Callback function to handle the resize difference.
 * @param options - Options for the resizing behavior.
 * @returns An object containing the ref to the element, a boolean indicating if resizing is in progress, and a mouse down event handler.
 *
 * @example
 * ```jsx
 * const { ref, onMouseDown } = useResize((diff) => {
 *   console.log("Resize difference:", diff);
 * }, { isReverse: true, isVertical: false });
 * <div ref={ref} onMouseDown={onMouseDown}>Resize Me</div>
 * ```
 */
export function useResize<T extends HTMLElement = HTMLDivElement>(
  onResize: (diff: { x: number; y: number }) => void,
  { isReverse = false, isVertical = false, onStart, onEnd }: Options,
): { ref: React.RefObject<T | null>; isResizing: boolean; onMouseDown: React.MouseEventHandler } {
  const elRef = useRef<T>(null);
  const isRtl = useIsRtl();
  const [isResizing, setIsResizing] = useState(false);

  const onResizingRef = useRef((evt: MouseEvent) => {
    if (elRef.current != null) {
      /** ***************** check if reverse enabled of RTL *******************/
      const reversed = ((isRtl ? 1 : 0) ^ (isReverse ? 1 : 0)) === 1;
      const box = elRef.current?.getBoundingClientRect();
      const diffX = isReverse ? box.left : box.right;
      const diffY = isReverse ? box.top : box.bottom;
      const x = (evt.clientX - diffX) * (reversed ? -1 : 1);
      const y = (evt.clientY - diffY) * (isReverse ? -1 : 1);
      onResize({ x, y });
    }
  });

  /** ***************** dettach handlers on mouseup *******************/
  const onResizeEndRef = useRef(() => {
    document.body.style.cursor = "unset";
    document.body.style.userSelect = "unset";
    document.removeEventListener("mousemove", onResizingRef.current);
    document.removeEventListener("mouseup", onResizeEndRef.current);
    setIsResizing(false);
    onEnd?.();
  });

  /** ***************** attach handlers on mousedown *******************/
  const onResizeStart = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      document.body.style.userSelect = "none";
      document.body.style.cursor = isVertical ? "row-resize" : "col-resize";
      document.addEventListener("mousemove", onResizingRef.current);
      document.addEventListener("mouseup", onResizeEndRef.current);
      setIsResizing(true);
      onStart?.();
    },
    [isVertical, onStart],
  );

  return { ref: elRef, isResizing, onMouseDown: onResizeStart };
}
