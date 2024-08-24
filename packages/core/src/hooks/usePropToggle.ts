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

import { useCallback, useRef, useState, type RefObject } from "react";
import { useLayoutEffectDebugger } from "./useEffectDebugger";

/**
 * hook to control boolean props
 * @param isOn (is prop true)
 * @param callback (optional callback)
 * @param key (optional key to pass to callback)
 * @returns
 */
export const usePropToggle = (
  isOn = false,
  onToggle?: (is: boolean, key?: string) => unknown,
  key?: string,
): [boolean, () => void, RefObject<boolean>] => {
  const toggleRef = useRef(isOn);
  const [toggleOn, setToggleOn] = useState(isOn);

  /** ***************** update toggle state on change *******************/
  useLayoutEffectDebugger(
    () => {
      toggleRef.current = isOn;
      setToggleOn(isOn);
    },
    [isOn],
    "usePropToggle",
  );

  /** ***************** toggle handler *******************/
  const doToggle = useCallback(() => {
    if (onToggle?.(!toggleOn, key) !== false) {
      toggleRef.current = !toggleOn;
      setToggleOn(!toggleOn);
    }
  }, [toggleOn, onToggle, key]);

  return [toggleOn, doToggle, toggleRef];
};
