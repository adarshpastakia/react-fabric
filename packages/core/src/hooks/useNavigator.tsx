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

import { useCallback, useMemo, useState } from "react";

export const useNavigator = (totalCount = 0, defaultIndex = 0) => {
  const [currentIndex, setCurrentIndex] = useState(defaultIndex);
  const onNavigate = useCallback(
    (dir: 1 | -1) => {
      if (dir === -1) {
        setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : totalCount - 1);
      }
      if (dir === 1) {
        setCurrentIndex(currentIndex + 1 < totalCount ? currentIndex + 1 : 0);
      }
    },
    [currentIndex, totalCount],
  );
  const headLabel = useMemo(
    () => (
      <span className="text-muted leading-none">
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