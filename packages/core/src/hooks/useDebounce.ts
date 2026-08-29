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

import { useMemo, useRef } from "react";

/**
 * Custom hook to debounce a function.
 * This hook delays the processing of the function until after a specified delay period
 * has elapsed since the last time the function was invoked. This is useful for optimizing
 * performance in scenarios where a function may be called frequently, such as during
 * user input or window resizing events.
 *
 * @param {Function} callback - The function to debounce.
 * @param {DependencyList} deps - The dependency array for the hook.
 * @param {number} delay - The debounce delay in milliseconds.
 * @returns A debounced version of the callback function.
 */
export function useDebounce(
  callback: undefined | ((...rest: AnyObject) => AnyObject),
  deps: React.DependencyList,
  delay: number = 100,
) {
  const timerRef = useRef<number>(undefined);

  const cb = useMemo(() => {
    if (typeof window !== "undefined") {
      window.clearTimeout(timerRef.current);
    }
    const fn = (...args: unknown[]) => {
      if (typeof window !== "undefined") {
        window.clearTimeout(timerRef.current);
        timerRef.current = window.setTimeout(() => {
          callback?.(...args);
        }, delay);
      }
    };
    fn.cancel = () => {
      if (typeof window !== "undefined") {
        clearTimeout(timerRef.current);
      }
    };
    return fn;
    // eslint-disable-next-line @eslint-react/exhaustive-deps
  }, deps);

  return cb;
}
