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

/**
 * Check if a value is an object.
 * An object is considered valid if it is:
 * - not null or undefined
 * - not a Date instance
 * - of type 'object'
 * - not an array
 * @param val - The value to check.
 * @returns true if the value is an object, false otherwise.
 */
export function isObject<T = KeyValue>(val: AnyObject): val is T {
  return !isNil(val) && !(val instanceof Date) && typeof val === "object" && !Array.isArray(val);
}

/**
 * Check if a value is an array.
 * An array is considered valid if it is:
 * - not null or undefined
 * - an instance of Array
 * @param val - The value to check.
 * @returns true if the value is an array, false otherwise.
 */
export function isArray<T = AnyObject>(val: AnyObject): val is T[] {
  return Array.isArray(val);
}

/**
 * Check if a value is a string.
 * A string is considered valid if it is:
 * - not null or undefined
 * - of type 'string'
 * @param value - The value to check.
 * @returns true if the value is a string, false otherwise.
 */
export function isString(value: AnyObject): value is string {
  return typeof value === "string";
}

/**
 * Check if a value is a number.
 * A number is considered valid if it is:
 * - not null or undefined
 * - of type 'number'
 * @param value - The value to check.
 * @returns true if the value is a number, false otherwise.
 */
export function isNumber(value: AnyObject): value is number {
  return typeof value === "number";
}

/**
 * Check if a value is a boolean.
 * A boolean is considered valid if it is:
 * - not null or undefined
 * - of type 'boolean'
 */
export function isBoolean(value: AnyObject): value is boolean {
  return typeof value === "boolean";
}

/**
 * Check if a value is a true.
 * A value is considered true if it is:
 * - strictly equal to true
 * - equal to 1
 * - a string that is "yes" or "true" (case insensitive)
 */
export function isTrue(value: unknown = ""): value is true {
  return (
    value === true || value === 1 || value?.toString().toLowerCase() === "yes" || value?.toString().toLowerCase() === "true"
  );
}

/**
 * Check if a value is false.
 * A value is considered false if it is:
 * - strictly equal to false
 * - equal to 0
 * - a string that is "no" or "false" (case insensitive)
 */
export function isFalse(value: unknown = ""): value is false {
  return (
    value === false || value === 0 || value?.toString().toLowerCase() === "no" || value?.toString().toLowerCase() === "false"
  );
}

/**
 * Check if a value is a valid color.
 * A color is considered valid if it:
 * - starts with a '#' (hex color)
 * - starts with 'rgb' (RGB color)
 * - starts with 'hsl' (HSL color)
 * - starts with 'lab' (Lab color)
 * - is equal to 'transparent'
 * @param color - The value to check.
 * @returns true if the value is a valid color, false otherwise.
 */
export function isColor(color: string) {
  return (
    color.startsWith?.("#") ||
    color.startsWith?.("rgb") ||
    color.startsWith?.("hsl") ||
    color.startsWith?.("lab") ||
    color === "transparent"
  );
}

/**
 * Check if a value is a valid SVG path.
 * A valid SVG path is a string that:
 * - starts with 'M' or 'm' (move to command)
 * - contains at least one digit or decimal point
 * - ends with 'Z' or 'z' (close path command)
 * @param value - The value to check.
 * @returns true if the value is a valid SVG path, false otherwise.
 */
export function isSvgPath(value: AnyObject): boolean {
  return typeof value === "string" && value.match(/^[Mm][\d.].*[\dzZ]$/) !== null;
}
