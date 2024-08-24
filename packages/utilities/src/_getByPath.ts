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

import { isArray, isEmpty, isNil, isObject } from "./_isType";

const _get = (hit: any, field: string): any => {
  /** ***************** return if object is empty *******************/
  /* istanbul ignore next */
  if (isNil(hit)) {
    return undefined;
  }
  /** ***************** return object if property is empty *******************/
  /* istanbul ignore next */
  if (isNil(field)) {
    return hit;
  }

  if (isObject(hit)) {
    /** ***************** return value if object.property is not empty *******************/
    if (!isNil(hit[field])) {
      return hit[field];
    }

    /** ***************** if property name contains `.` separator split to multiple property names *******************/
    if (field.includes(".")) {
      let currentValue: any = hit;

      const path = field.split(".");
      for (let i = path.length - 1; i >= 0; i--) {
        /** ***************** when property name is `a.b.c` iterate until property found in object. eg. `a`, `a.b` *******************/
        const outerPath = path.slice(0, i as any).join(".");

        /** ***************** join rest of property list *******************/
        const innerPath = path.slice(i as any).join(".");

        /** ***************** if current outer path found in object *******************/
        if (outerPath in currentValue) {
          currentValue = currentValue[outerPath];

          /** ***************** check for type array *******************/
          if (isArray(currentValue)) {
            /** ***************** return value if remaining path found *******************/
            if (currentValue[innerPath as any]) {
              return currentValue[innerPath as any];
            }
            /** ***************** return array map of inner propeties *******************/
            return currentValue
              .map((val) => _get(val, innerPath))
              .filter((val) => !isEmpty(val));
          } else {
            /** ***************** return value of remaining path *******************/
            return _get(currentValue, innerPath);
          }
        }
      }
    }
  }

  return undefined;
};

/**
 * get property value by path
 * @internal
 */
export const getByPath = <T = any>(
  obj: KeyValue,
  path: string,
  defaultValue: any = undefined,
): T => {
  /** ***************** if empty object/path return defaultValue *******************/
  if (isEmpty(obj) || isEmpty(path)) {
    return defaultValue;
  }
  const value = _get(obj, path);
  if (!isNil(value)) {
    return value;
  }
  return defaultValue;
};

/**
 * get first available value in list
 * @internal
 */
export const getValue = (...args: any[]) => {
  return args.find((a) => !isEmpty(a));
};
