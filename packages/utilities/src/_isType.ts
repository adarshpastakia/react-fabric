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

export const isUndefined = (value: unknown): value is undefined => {
  return value === undefined;
};

export const isNull = (value: unknown): value is null => {
  return value === null;
};

export const isNil = (val: unknown): val is undefined => {
  return val === undefined || val === null;
};
export const isEmpty = (val: unknown): val is undefined => {
  if (val instanceof Date) return false;
  if (isNil(val) || val === "") {
    return true;
  }
  if (Array.isArray(val) && val.filter(Boolean).length === 0) {
    return true;
  }
  if (val instanceof Map || val instanceof Set) return val.size === 0;
  if (["boolean", "number", "bigint", "function"].includes(typeof val)) {
    return false;
  }
  return !!val && typeof val === "object" && Object.entries(val).length === 0;
};

export const isObject = (val: unknown): val is KeyValue => {
  return (
    !isNil(val) &&
    !(val instanceof Date) &&
    typeof val === "object" &&
    !Array.isArray(val)
  );
};
export const isArray = <T = unknown>(val: unknown): val is T[] => {
  return Array.isArray(val);
};

export const isString = (value: unknown): value is string => {
  return typeof value === "string";
};

export const isNumber = (value: unknown): value is number => {
  return typeof value === "number";
};

export const isBoolean = (value: unknown): value is boolean => {
  return typeof value === "boolean";
};
export const isTrue = (value: unknown = ""): value is true => {
  return (
    value === true ||
    value === 1 ||
    value?.toString().toLowerCase() === "yes" ||
    value?.toString().toLowerCase() === "true"
  );
};
export const isFalse = (value: unknown = ""): value is false => {
  return (
    value === false ||
    value === 0 ||
    value?.toString().toLowerCase() === "no" ||
    value?.toString().toLowerCase() === "false"
  );
};

export const isColor = (color: string) =>
  color.startsWith?.("#") ||
  color.startsWith?.("rgb") ||
  color.startsWith?.("hsl") ||
  color.startsWith?.("lab") ||
  color === "transparent";

export const isSvgPath = (value: unknown): value is string => {
  return (
    typeof value === "string" && value.match(/^[Mm][\d.].*[\dzZ]$/) !== null
  );
};

export const isRtl = () => {
  return getComputedStyle(document.documentElement).direction === "rtl";
};
