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

import { isArray, isString, matchString } from "@react-fabric/utilities";
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
  matchAll: boolean = true,
  matcher?: AnyObject,
) => {
  const newList: AnyObject[] = [];
  items.forEach((item) => {
    if (matcher) {
      return matcher?.(item, query) && newList.push(item);
    }
    if (query && isArray(query) && query.length > 0) {
      if (
        matchAll &&
        query.every((q) => matchString(item.label ?? item.toString(), q))
      ) {
        return newList.push(item);
      }
      if (
        !matchAll &&
        query.some((q) => matchString(item.label ?? item.toString(), q))
      ) {
        return newList.push(item);
      }
    } else if (query && isString(query)) {
      if (matchString(item.label ?? item.toString(), query)) {
        return newList.push(item);
      }
    } else {
      return newList.push(item);
    }
  });
  return newList;
};

interface RetType<T, Q> {
  onSearch: (query?: Q) => void;
  query: Q;
  filteredList: T[];
  isSearching: boolean;
}

/**
 * Custom hook to filter a list of items based on a query.
 * It provides a way to search through the items and returns the filtered list.
 * The hook uses a deferred value to optimize performance during transitions.
 * It also allows for a custom matcher function to define how items should be matched against the query.
 *
 * @param items - The list of items to filter.
 * @param matchAll - Match all phrases in the query list against the items.
 * @returns An object containing the search function, current query, filtered list, and a boolean indicating if a search is in progress.
 *
 * @example
 * ```jsx
 * useFilteredList(items, (item, query) => {
 *   return item.name.includes(query);
 * });
 * ```
 *
 * @see {@link https://adarshpastakia.github.io/react-fabric/?path=/docs/data-usefilteredlist--docs}
 */
export function useFilteredList<
  T extends AnyObject = KeyValue,
  Q extends AnyObject = string,
>(items: T[], matchAll?: boolean): RetType<T, Q>;

/**
 * Custom hook to filter a list of items based on a query.
 * It provides a way to search through the items and returns the filtered list.
 * The hook uses a deferred value to optimize performance during transitions.
 * It also allows for a custom matcher function to define how items should be matched against the query.
 *
 * @param items - The list of items to filter.
 * @param matcher - An optional function to match items against the query.
 * @returns An object containing the search function, current query, filtered list, and a boolean indicating if a search is in progress.
 *
 * @example
 * ```jsx
 * useFilteredList(items, (item, query) => {
 *   return item.name.includes(query);
 * });
 * ```
 *
 * @see {@link https://adarshpastakia.github.io/react-fabric/?path=/docs/data-usefilteredlist--docs}
 */
export function useFilteredList<
  T extends AnyObject = KeyValue,
  Q extends AnyObject = string,
>(items: T[], matcher?: (item: T, query: Q) => boolean): RetType<T, Q>;

/**
 * Custom hook to filter a list of items based on a query.
 * It provides a way to search through the items and returns the filtered list.
 * The hook uses a deferred value to optimize performance during transitions.
 * It also allows for a custom matcher function to define how items should be matched against the query.
 *
 * @param items - The list of items to filter.
 * @param matchAll - Match all phrases in the query list against the items.
 * @param matcher - An optional function to match items against the query.
 * @returns An object containing the search function, current query, filtered list, and a boolean indicating if a search is in progress.
 *
 * @example
 * ```jsx
 * useFilteredList(items, (item, query) => {
 *   return item.name.includes(query);
 * });
 * ```
 *
 * @see {@link https://adarshpastakia.github.io/react-fabric/?path=/docs/data-usefilteredlist--docs}
 */
export function useFilteredList<
  T extends AnyObject = KeyValue,
  Q extends AnyObject = string,
>(
  items: T[],
  matchAll?: boolean,
  matcher?: (item: T, query: Q) => boolean,
): RetType<T, Q>;

export function useFilteredList<
  T extends AnyObject = KeyValue,
  Q extends AnyObject = string,
>(items: T[], matchAll?: AnyObject, matcher?: (item: T, query: Q) => boolean) {
  const [query, setQuery] = useState<Q>();
  const _items = useDeferredValue(items ?? []);
  const [filteredList, setFilteredList] = useState<T[]>([]);
  const [isSearching, startTransition] = useTransition();

  const matchingAll = typeof matchAll === "boolean" ? matchAll : true;
  const matcherFn = typeof matchAll === "function" ? matchAll : matcher;

  const filterItems = useCallback(
    (items: T[], query?: Q, matchingAll?: boolean) =>
      startTransition(() =>
        setFilteredList(filterList(items, query, matchingAll, matcherFn)),
      ),
    [],
  );

  useEffect(() => {
    if (query) filterItems(_items, query, matchingAll);
    else setFilteredList(items);
  }, [query, matchingAll, _items]);

  return { onSearch: setQuery, query, filteredList, isSearching };
}
