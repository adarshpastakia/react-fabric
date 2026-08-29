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

import { useCallback } from "react";
import { usePropState } from "./usePropState";

/**
 * This hook is used to manage a toggle state based on a prop value.
 * It allows you to toggle the state and also provides a reference to the current state.
 * It is useful for scenarios where you want to control a toggle state from a parent component while also allowing local toggling.
 *
 * @param isOn - The initial state of the toggle.
 * @param onToggle - A callback function that is called when the toggle state changes.
 * @param key - A unique key to identify the toggle state.
 * @returns A tuple containing the current toggle state, a function to toggle the state, and a reference to the current state.
 *
 * @example
 * ```jsx
 * const [isToggled, toggle, toggleRef] = usePropToggle(false, (newState) => {
 *   console.log("Toggle state changed to:", newState);
 * });
 * toggle(); // This will toggle the state and call the onToggle callback
 * ```
 */
export function usePropToggle(
  isOn = false,
  onToggle?: (is: boolean, key?: string | number) => unknown,
  key?: string | number,
): [boolean, (toggle?: boolean) => void] {
  const [toggleOn, setToggleOn] = usePropState(isOn);

  /** ***************** toggle handler *******************/
  const doToggle = useCallback(
    (toggle?: boolean) => {
      setToggleOn((toggleOn) => {
        if (onToggle?.(toggle ?? !toggleOn, key) !== false) {
          return toggle ?? !toggleOn;
        }
        return toggleOn;
      });
    },
    [setToggleOn, onToggle, key],
  );

  return [toggleOn, doToggle];
}
