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

import { isEmpty } from "./_isType";

/**
 * Generate a hash from a string.
 * This function computes a simple hash by iterating over each character in the string,
 * performing bitwise operations to produce a 32-bit integer hash.
 * @param str
 * @returns {number} A 32-bit integer hash of the input string.
 */
export const hash = (str: string) => {
  let hash = 0;
  let i;
  let chr;
  if (isEmpty(str)) return hash;
  for (i = 0; i < str.length; i++) {
    chr = str.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
};

/**
 * Generate a short hash using the current timestamp and a random number.
 * This function creates a unique identifier by combining the current time in milliseconds
 * with a random number, and then converting it to a base-36 string.
 * @returns {string} A short hash string.
 */
export const shortHash = () => {
  return (new Date().getTime() * Math.random()).toString(36);
};

/**
 * Generate a UUID (Universally Unique Identifier).
 * This function creates a version 4 UUID by generating random numbers
 * and formatting them according to the UUID standard.
 * @returns {string} A UUID string in the format xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx.
 */
export const uuid = () => {
  return [1e7, 1e3, 4e3, 8e3, 1e11]
    .join("-")
    .replace(/[018]/g, (c: string) =>
      (+c ^ ((Math.random() * 16) & (15 >> (+c / 4)))).toString(16),
    );
};
