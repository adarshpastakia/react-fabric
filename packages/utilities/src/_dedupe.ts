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

export const dedupe = (list: any[], key?: string) => {
  const filtered = list.filter((i) => !isEmpty(i));
  if (!key) {
    return Array.from(new Set(filtered).values());
  }

  return Array.from(
    new Map(filtered.map((obj) => [obj[key] ?? obj, obj])).values(),
  );
};

export const flatten = (list: any[]) => {
  return list.flat(5).filter((i) => !isEmpty(i));
};

export const flattenAndDedupe = (list: any[] = [], key?: string) => {
  return dedupe(flatten(list), key);
};

export const groupBy = <T extends KeyValue>(
  list: T[],
  prop: keyof T,
  missingKey?: string,
): KeyValue<T[]> => {
  return list.reduce((r: AnyObject, i) => {
    const key = i[prop] ?? missingKey;
    if (!r[key]) r[key] = [];
    r[key].push(i);
    return r;
  }, {});
};
