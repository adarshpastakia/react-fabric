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

/**
 * Check if a value is undefined.
 * @param value - The value to check.
 * @returns true if the value is undefined, false otherwise.
 */
export const isUndefined = (value: AnyObject): value is undefined => {
  return value === undefined;
};

/**
 * Check if a value is null.
 * @param value - The value to check.
 * @returns true if the value is null, false otherwise.
 */
export const isNull = (value: AnyObject): value is null => {
  return value === null;
};

/**
 * Check if a value is either null or undefined.
 * @param val - The value to check.
 * @returns true if the value is null or undefined, false otherwise.
 */
export const isNil = (val: AnyObject): val is null | undefined => {
  return val === undefined || val === null;
};

export const isDefined = (val: AnyObject): boolean => !isNil(val) && val !== "";

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
export const isEmpty = (val: AnyObject): val is undefined => {
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
  return !!val && typeof val === "object" && Object.entries(val).length === 0;
};

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
export const isObject = (val: AnyObject): val is KeyValue => {
  return (
    !isNil(val) &&
    !(val instanceof Date) &&
    typeof val === "object" &&
    !Array.isArray(val)
  );
};

/**
 * Check if a value is an array.
 * An array is considered valid if it is:
 * - not null or undefined
 * - an instance of Array
 * @param val - The value to check.
 * @returns true if the value is an array, false otherwise.
 */
export const isArray = <T = AnyObject>(val: AnyObject): val is T[] => {
  return Array.isArray(val);
};

/**
 * Check if a value is a string.
 * A string is considered valid if it is:
 * - not null or undefined
 * - of type 'string'
 * @param value - The value to check.
 * @returns true if the value is a string, false otherwise.
 */
export const isString = (value: AnyObject): value is string => {
  return typeof value === "string";
};

/**
 * Check if a value is a number.
 * A number is considered valid if it is:
 * - not null or undefined
 * - of type 'number'
 * @param value - The value to check.
 * @returns true if the value is a number, false otherwise.
 */
export const isNumber = (value: AnyObject): value is number => {
  return typeof value === "number";
};

/**
 * Check if a value is a boolean.
 * A boolean is considered valid if it is:
 * - not null or undefined
 * - of type 'boolean'
 */
export const isBoolean = (value: AnyObject): value is boolean => {
  return typeof value === "boolean";
};

/**
 * Check if a value is a true.
 * A value is considered true if it is:
 * - strictly equal to true
 * - equal to 1
 * - a string that is "yes" or "true" (case insensitive)
 */
export const isTrue = (value: AnyObject = ""): value is true => {
  return (
    value === true ||
    value === 1 ||
    value?.toString().toLowerCase() === "yes" ||
    value?.toString().toLowerCase() === "true"
  );
};

/**
 * Check if a value is false.
 * A value is considered false if it is:
 * - strictly equal to false
 * - equal to 0
 * - a string that is "no" or "false" (case insensitive)
 */
export const isFalse = (value: AnyObject = ""): value is false => {
  return (
    value === false ||
    value === 0 ||
    value?.toString().toLowerCase() === "no" ||
    value?.toString().toLowerCase() === "false"
  );
};

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
export const isColor = (color: string) =>
  color.startsWith?.("#") ||
  color.startsWith?.("rgb") ||
  color.startsWith?.("hsl") ||
  color.startsWith?.("lab") ||
  color === "transparent";

/**
 * Check if a value is a valid SVG path.
 * A valid SVG path is a string that:
 * - starts with 'M' or 'm' (move to command)
 * - contains at least one digit or decimal point
 * - ends with 'Z' or 'z' (close path command)
 * @param value - The value to check.
 * @returns true if the value is a valid SVG path, false otherwise.
 */
export const isSvgPath = (value: AnyObject): value is string => {
  return (
    typeof value === "string" && value.match(/^[Mm][\d.].*[\dzZ]$/) !== null
  );
};

/**
 * Check if the document is in RTL (Right-to-Left) mode.
 * This function checks the computed style of the document's root element
 * to determine if the direction is set to 'rtl'.
 * @returns true if the document is in RTL mode, false otherwise.
 */
export const isRtl = () => {
  return getComputedStyle(document.documentElement).direction === "rtl";
};
