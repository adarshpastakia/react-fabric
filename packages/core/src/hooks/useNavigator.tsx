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

import { useCallback, useMemo, useRef, useState } from "react";

/**
 * Custom hook to manage navigation through a list of items.
 * It provides functionality to navigate forward and backward,
 * and keeps track of the current index and total count of items.
 *
 * @param totalCount - Total number of items to navigate through.
 * @param defaultIndex - Initial index to start navigation from.
 * @returns An object containing the current index, a function to navigate,
 *          a label for the current position, and a function to set the current index.
 *
 * @example
 * ```jsx
 * const { headLabel, onNavigate, currentIndex, setCurrentIndex } = useNavigator(5, 0);
 * // headLabel will show "1/5"
 * // onNavigate(1) will move to the next item, and onNavigate(-1) will move to the previous item.
 * // currentIndex will be updated accordingly.
 * ```
 */
export const useNavigator = (totalCount = 0, defaultIndex = 0) => {
  const [currentIndex, setCurrentIndex] = useState(defaultIndex);
  const refCurrent = useRef(defaultIndex);

  const onNavigate = useCallback(
    (dir: 1 | -1) => {
      if (dir === -1) {
        refCurrent.current =
          refCurrent.current > 0 ? refCurrent.current - 1 : totalCount - 1;
      }
      if (dir === 1) {
        refCurrent.current =
          refCurrent.current + 1 < totalCount ? refCurrent.current + 1 : 0;
      }
      setCurrentIndex(refCurrent.current);
    },
    [totalCount],
  );
  const headLabel = useMemo(
    () => (
      <span className="text-muted leading-none select-none">
        {currentIndex + 1}/{totalCount}
      </span>
    ),
    [currentIndex, totalCount],
  );

  return {
    headLabel,
    onNavigate,
    currentIndex,
    setCurrentIndex,
  };
};
