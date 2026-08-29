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

import { isDefined, isNil } from "./nullChecks";

/**
 * Check if a value is empty.
 * A value is considered empty if it is:
 * - undefined
 * - null
 * - an empty string
 * - an empty array
 * - an empty object
 * - an empty Map or Set
 * - a boolean, number, or bigint (not empty)
 * @param val - The value to check.
 * @returns true if the value is empty, false otherwise.
 */
export function isEmpty(val: AnyObject): val is undefined {
  if (val instanceof Date) return false;
  if (isNil(val) || val === "") {
    return true;
  }
  if (Array.isArray(val) && val.filter(isDefined).length === 0) {
    return true;
  }
  if (val instanceof Map || val instanceof Set) return val.size === 0;
  if (["boolean", "number", "bigint", "function"].includes(typeof val)) {
    return false;
  }
  return !!val && typeof val === "object" && Object.entries(val as object).length === 0;
}
