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

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useLayoutEffectDebugger } from "./useEffectDebugger";

/**
 * Custom hook to determine if the current locale is RTL (Right-to-Left).
 * It uses the i18n instance from react-i18next to check the direction.
 *
 * @returns {boolean} - Returns true if the current locale is RTL, false otherwise.
 *
 * @example
 * ```jsx
 * const isRtl = useIsRtl();
 * // This will return true if the current locale is RTL, false otherwise.
 * ```
 */
export const useIsRtl = () => {
  const { i18n } = useTranslation("core");
  const [isRtl, setIsRtl] = useState(false);

  /** ***************** update RTL flag on i18n locale change *******************/
  useLayoutEffectDebugger(
    () => {
      try {
        setIsRtl(i18n.dir() === "rtl");
      } catch {
        //
      }
    },
    [i18n.language],
    "useIsRtl",
  );

  return isRtl;
};
