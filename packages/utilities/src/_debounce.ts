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

/**
 * Debounce function to limit the rate at which a function can fire.
 * It will delay the execution of the function until after a specified timeout
 * has elapsed since the last time the function was invoked.
 *
 * @param fn - The function to debounce.
 * @param timeout - The number of milliseconds to wait before invoking the function.
 * @returns A debounced version of the function that can be called with any arguments.
 *          The debounced function also has a `cancel` method to clear the timeout.
 */
export const debounce = (fn: (...rest: any) => any, timeout = 500) => {
  /** ***************** create debounce timer id using callback hash *******************/
  let _timer: any;

  /** ***************** return debounced function *******************/
  const cb = (...args: any) => {
    clearTimeout(_timer);
    if (typeof window !== "undefined")
      _timer = window.setTimeout(() => fn?.(...args), timeout);
  };
  cb.cancel = () => clearTimeout(_timer);
  return cb;
};
