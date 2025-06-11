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
 * Merge multiple refs into a single ref callback.
 * This function allows you to combine multiple refs (either callback refs or React refs)
 * into a single ref callback that can be used in React components.
 * This is particularly useful when you want to assign a single element to multiple refs,
 * such as when using third-party libraries that require refs or when you want to share refs between components.
 * The function iterates over the provided refs and assigns the element to each ref.
 *
 * @param {AnyObject[]} refs - An array of refs to merge.
 * @returns {function} A function that takes an element and assigns it to all provided refs.
 */
export const mergeRefs =
  (...refs: AnyObject[]) =>
  (el: AnyObject) => {
    refs.forEach((ref) => {
      if (typeof ref === "function") ref(el);
      if (ref && "current" in ref) ref.current = el;
    });
  };
