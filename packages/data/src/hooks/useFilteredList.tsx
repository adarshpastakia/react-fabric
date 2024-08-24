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

import { isString, matchString } from "@react-fabric/utilities";
import {
  useCallback,
  useDeferredValue,
  useEffect,
  useState,
  useTransition,
} from "react";

const filterList = (
  items: AnyObject[],
  query: AnyObject = "",
  matcher?: AnyObject,
) => {
  const newList: AnyObject[] = [];
  items.forEach((item) => {
    if (matcher) {
      return matcher?.(item, query) && newList.push(item);
    }
    if (query && isString(query)) {
      if (matchString(item.label ?? item.toString(), query)) {
        return newList.push(item);
      }
    } else {
      return newList.push(item);
    }
  });
  return newList;
};

export const useFilteredList = <
  T extends AnyObject = KeyValue,
  Q extends AnyObject = string,
>(
  items: T[],
  matcher?: (item: T, query: Q) => boolean,
) => {
  const [query, setQuery] = useState<Q>();
  const _items = useDeferredValue(items ?? []);
  const [filteredList, setFilteredList] = useState<T[]>([]);
  const [isSearching, startTransition] = useTransition();

  const filterItems = useCallback(
    (items: T[], query?: Q) =>
      startTransition(() => setFilteredList(filterList(items, query, matcher))),
    [],
  );

  useEffect(() => {
    if (query) filterItems(_items, query);
    else setFilteredList(items);
  }, [query, _items]);

  return { onSearch: setQuery, query, filteredList, isSearching };
};
