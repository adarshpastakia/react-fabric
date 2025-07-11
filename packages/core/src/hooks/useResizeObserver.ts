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

import { useEffect, useRef, useTransition, type RefObject } from "react";
import ResizeObserver from "resize-observer-polyfill";
import { type SizeObject } from "../types";
import { useDebounce } from "./useDebounce";

/**
 * Custom hook to observe size changes of an element using ResizeObserver.
 * It returns a ref that can be attached to the element you want to observe.
 * The hook will call the provided `onResize` callback with the new size of the element
 * whenever it changes.
 * * This is useful for responsive designs where you need to adjust the layout or styles
 * based on the size of an element.
 *
 * @param onResize Callback function that receives the new size of the element.
 * @returns A ref object to be attached to the element you want to observe.
 *
 * @example
 * ```jsx
 * const ref = useResizeObserver((size) => {
 *   console.log("Element resized:", size);
 * });
 * <div ref={ref}>Resize me!</div>
 * ```
 */
export const useResizeObserver = <T extends HTMLElement = HTMLDivElement>(
  onResize?: (size: SizeObject) => void,
): RefObject<T | null> => {
  const ref = useRef<T>(null);
  const [, startTransition] = useTransition();

  const callbackResize = useDebounce(
    () => {
      startTransition(() => {
        if (onResize && ref.current != null) {
          const { offsetWidth: width, offsetHeight: height } = ref.current;
          onResize?.({ width, height });
        }
      });
    },
    [onResize],
    0,
  );

  useEffect(() => {
    if (ref.current != null) {
      const ob = new ResizeObserver(callbackResize);
      ob.observe(ref.current);
      return () => {
        ob.disconnect();
      };
    }
  }, [callbackResize, ref]);

  return ref;
};
