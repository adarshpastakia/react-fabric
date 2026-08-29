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

/**
 * Check if a value is undefined.
 * @param value - The value to check.
 * @returns true if the value is undefined, false otherwise.
 */
export function isUndefined(value: AnyObject): value is undefined {
  return value === undefined;
}

/**
 * Check if a value is null.
 * @param value - The value to check.
 * @returns true if the value is null, false otherwise.
 */
export function isNull(value: AnyObject): value is null {
  return value === null;
}

/**
 * Check if a value is either null or undefined.
 * @param val - The value to check.
 * @returns true if the value is null or undefined, false otherwise.
 */
export function isNil(val: AnyObject): val is null | undefined {
  return val === undefined || val === null;
}

export function isDefined(val: AnyObject): boolean {
  return !isNil(val) && val !== "";
}
