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

/* istanbul ignore file */

import { debounce } from "@react-fabric/utilities";
import { type KeyboardEvent, type MouseEvent } from "react";

/** ***************** common handler for enter press *******************/
export const handleEnter = (
  callback?: (e: KeyboardEvent) => void,
  {
    stopPropagation = false,
    preventDefault = false,
  }: { stopPropagation?: boolean; preventDefault?: boolean } = {},
) => {
  const cbHandle = debounce(callback ?? (() => undefined), 100);
  return (e: KeyboardEvent) => {
    if (
      !e.shiftKey &&
      !e.altKey &&
      !e.metaKey &&
      e.key === "Enter" &&
      callback
    ) {
      if (stopPropagation) e?.stopPropagation();
      cbHandle(e);
      if (preventDefault) {
        e.preventDefault();
        return false;
      }
    }
  };
};

/** ***************** common handler for mouse primary click *******************/
export const handleClick = (
  callback?: (e: MouseEvent) => void,
  {
    stopPropagation = false,
    preventDefault = false,
  }: { stopPropagation?: boolean; preventDefault?: boolean } = {},
) => {
  return (e: MouseEvent) => {
    if (stopPropagation) e?.stopPropagation();
    (e?.button ?? 0) === 0 && callback?.(e);
    if (preventDefault) {
      e.preventDefault();
      return false;
    }
  };
};
