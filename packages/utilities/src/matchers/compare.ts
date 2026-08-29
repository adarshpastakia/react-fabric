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

import { getByPath } from "../lists/getByPath";
import { ascii } from "../strings/ascii";
import { isBoolean, isNumber, isObject } from "./typeChecks";

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
export function compareValues(order: "asc" | "desc" = "asc", key?: string) {
  return (a: unknown, b: unknown) => {
    const aValue: unknown = key && isObject(a) ? getByPath(a, key, "") : a;
    const bValue: unknown = key && isObject(b) ? getByPath(b, key, "") : b;

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
    const _a = ascii(aValue as string).toLowerCase();
    const _b = ascii(bValue as string).toLowerCase();
    return _a.localeCompare(_b) === 1 ? bigger : smaller;
  };
}
