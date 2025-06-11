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

/**
 * Remove duplicates from a list of objects based on a key or the entire object.
 * If a key is provided, it will deduplicate based on the value of that key.
 * If no key is provided, it will deduplicate based on the entire object.
 * This is useful for normalizing data structures that may have nested arrays or objects.
 *
 * @param list
 * @param key
 * @typedef {T} AnyObject - A generic type representing list items.
 * @returns {T[]} - A new array with duplicates removed.
 */
export const dedupe = <T extends AnyObject>(list: T[], key?: keyof T) => {
  const filtered = list.filter((i) => !isEmpty(i));
  if (!key) {
    return Array.from(new Set(filtered).values());
  }

  return Array.from(
    new Map(filtered.map((obj) => [(obj as KeyValue)[key], obj])).values(),
  );
};

/**
 * Flatten a list of objects, removing any empty objects.
 * It will flatten up to 5 levels deep and filter out any empty objects.
 * This is useful for normalizing data structures that may have nested arrays or objects.
 *
 * @param list
 * @typedef {T} AnyObject - A generic type representing list items.
 * @returns {T[]} - A flattened array of objects.
 */
export const flatten = <T extends AnyObject>(list: T[]) => {
  return list.flat(5).filter((i) => !isEmpty(i));
};

/**
 * Flatten a list of objects and remove duplicates based on a key or the entire object.
 * If a key is provided, it will deduplicate based on the value of that key.
 * If no key is provided, it will deduplicate based on the entire object.
 * This is useful for normalizing data structures that may have nested arrays or objects.
 * Flattening is done first, followed by deduplication.
 *
 * @param list
 * @param key
 * @typedef {T} AnyObject - A generic type representing list items.
 * @returns {T[]} - A new array with duplicates removed.
 */
export const flattenAndDedupe = <T extends AnyObject>(
  list: T[][] = [],
  key?: keyof T,
) => {
  return dedupe(flatten(list) as T[], key);
};

/**
 * Group a list of objects by a specific property.
 * If the property is not present in an object, it will use the `missingKey` value as the key.
 * This is useful for organizing data into categories based on a specific property.
 *
 * @param list
 * @param prop
 * @param missingKey
 * @typedef {T} KeyValue - A generic type representing list items with key-value pairs.
 * @returns {KeyValue<T[]>} - An object mapping keys to arrays of items.
 */
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
