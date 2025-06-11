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

import { ascii } from "./_ascii";
import { isBoolean, isNil, isNumber, isObject, isString } from "./_isType";

/**
 * Compare two objects or values for equality.
 * This function checks if two values are equal, including nested objects and arrays.
 * It handles various data types such as strings, numbers, booleans, arrays, and objects.
 * If both values are `null` or `undefined`, they are considered equal.
 * If both values are primitive types (string, number, boolean), they are compared directly.
 * If both values are arrays, they are compared element by element.
 * If both values are objects, they are compared by their keys and values.
 * If the values are of different types or structures, they are considered not equal.
 *
 * @param {unknown} obj - The first value to compare.
 * @param {unknown} test - The second value to compare against the first.
 * @returns {boolean} - Returns true if the values are equal, false otherwise.
 */
export const isEqual = (obj: unknown, test: unknown): boolean => {
  if (isNil(obj) && isNil(test)) {
    return true;
  }
  if (isString(obj) || isNumber(obj) || isBoolean(obj)) {
    return obj === test;
  } else if (Array.isArray(obj) && Array.isArray(test)) {
    // if length dont match return false
    if (obj.length !== test.length) {
      return false;
    }
    // check if some value is false
    return !obj.some((o, i) => !isEqual(o, test[i]));
  } else if (isObject(obj) && isObject(test)) {
    const okeys = Object.keys(obj);
    const tkeys = Object.keys(test);
    // if keys length dont match return false
    if (okeys.length !== tkeys.length) {
      return false;
    }
    // if keys dont match return false
    if (okeys.some((k) => !tkeys.includes(k))) {
      return false;
    }
    // check if some value is false
    return !Object.keys(obj).some((k) => !isEqual(obj[k], test[k]));
  }
  return false;
};

/**
 * Match a string against another string with options for equality.
 * This function checks if the base string starts with, includes, or is equal to the match string,
 * based on the specified equality condition.
 * It normalizes both strings to lowercase and ASCII format before comparison.
 * This is useful for case-insensitive and ASCII-only comparisons,
 * such as when filtering or searching through text data.
 *
 * @param {string} base - The base string to match against.
 * @param {string} match - The string to match with the base string.
 * @param {("start" | boolean)} equality - The type of match to perform:
 *                   - "start": checks if the base string starts with the match string.
 *                   - true: checks for exact equality.
 *                   - false (default): checks if the base string includes the match string.
 * @returns {boolean} - Returns true if the base string matches the conditions specified by the match string and equality.
 */
export const matchString = (
  base: string,
  match: string,
  equality: "start" | boolean = false,
) => {
  const _base = ascii(base).toLowerCase();
  const _match = ascii(match).toLowerCase();

  return equality === true
    ? _base === _match
    : equality === "start"
      ? _base.startsWith(_match)
      : _base.includes(_match);
};

/**
 * Compare two values for sorting.
 * This function compares two values based on the specified order (ascending or descending).
 * If a key is provided, it compares the values of that key in the objects.
 * It handles various data types such as strings, numbers, booleans, and objects.
 * It returns a comparison function that can be used with array sorting methods.
 * * The comparison is done in a case-insensitive manner for strings,
 *  treating special characters as their ASCII equivalents.
 *
 * @param {("asc" | "desc")} order - The order of comparison, either "asc" for ascending or "desc" for descending.
 * @param {string} key - An optional key to compare values within objects.
 * @returns {Function} A comparison function that can be used with array sorting methods.
 */
export const compareValues =
  (order: "asc" | "desc" = "asc", key?: string) =>
  (a: unknown, b: unknown) => {
    const aValue: string = key && isObject(a) ? a[key] : a;
    const bValue: string = key && isObject(b) ? b[key] : b;

    const bigger = order === "asc" ? 1 : -1;
    const smaller = order === "desc" ? 1 : -1;
    // return 0 when equal, allowing for multiple sorting properties
    if (aValue === bValue) return 0;
    // if numbers check greater
    if (isNumber(aValue) && isNumber(bValue)) {
      return aValue > bValue ? bigger : smaller;
    }
    // if boolean sort true first
    if (isBoolean(aValue) && isBoolean(bValue)) {
      return aValue ? smaller : bigger;
    }
    const _a = ascii(aValue).toLowerCase();
    const _b = ascii(bValue).toLowerCase();
    return _a.localeCompare(_b) === 1 ? bigger : smaller;
  };
