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

import { useCallback, useState } from "react";
import { useLayoutEffectDebugger } from "./useEffectDebugger";

/**
 * Custom hook to determine if the current theme is dark.
 * It checks the background color of the document's root element
 * and sets the `isDark` state based on the red component of the RGB color.
 * If the red component is less than 50, it considers the theme to be dark.
 *
 * @returns {boolean} - Returns true if the theme is dark, false otherwise.
 */
export const useIsDark = () => {
  const [isDark, setDark] = useState(false);
  const checkTheme = useCallback(() => {
    const [r] = getComputedStyle(
      document.documentElement,
    ).backgroundColor.match(/\d?\d?\d/g) as AnyObject;
    setDark(+r < 50);
  }, []);
  useLayoutEffectDebugger(
    () => {
      if (MutationObserver) {
        const ob = new MutationObserver(checkTheme);
        ob.observe(document.documentElement, { attributes: true });
        checkTheme();
        return () => {
          ob.disconnect();
        };
      }
    },
    [],
    "useIsDark",
  );
  return isDark;
};
