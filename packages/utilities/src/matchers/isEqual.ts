/**
 * React Fabric
 * @version 1.0.0
 * @license MIT
 * @copyright 2024 Adarsh Pastakia
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import { isNil } from "./nullChecks";
import { isBoolean, isNumber, isObject, isString } from "./typeChecks";

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
export function isEqual(obj: unknown, test: unknown): boolean {
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
}
