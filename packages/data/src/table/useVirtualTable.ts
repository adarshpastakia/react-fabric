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

import { compareValues, debounce, groupBy } from "@react-fabric/utilities";
import {
  defaultRangeExtractor,
  type Range,
  useVirtualizer,
} from "@tanstack/react-virtual";
import {
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from "react";

interface DataState<T = KeyValue> {
  data: T[];
  items: T[];
  grouped: KeyValue<T[]>;
  groups: AnyObject[];
  expanded: AnyObject[];
  checked: AnyObject[];
  allChecked: 0 | 1 | 2;
}

type DataAction =
  | { type: "updateState"; checked: AnyObject[] }
  | { type: "groupExpand"; key: AnyObject }
  | { type: "reset"; key: AnyObject; data: AnyObject[] }
  | { type: "expand"; key: AnyObject }
  | { type: "check"; key: AnyObject }
  | { type: "checkall" };

export const useVirtualTable = <T extends KeyValue = KeyValue>(
  data: T[],
  options: {
    checked?: AnyObject[];
    keyProperty: keyof T;
    groupProperty?: keyof T;
    loading?: boolean;
    total: number;
    onLoadMore?: (startIndex: number) => void;
    onCheckChanged?: (checked: AnyObject[]) => void;
  },
) => {
  // TODO: refactor data into item list, apply grouping if groupColumn provided
  // TODO: when grouping maintain map of group with children, {___GROUP___:true, label, items, open}

  const [state, dispatch] = useReducer(
    (state: DataState<T>, action: DataAction) => {
      if (action.type === "updateState") {
        state.checked = action.checked;
      }
      if (action.type === "expand") {
        if (state.expanded.includes(action.key))
          state.expanded.splice(state.expanded.indexOf(action.key), 1);
        else state.expanded.push(action.key);
      }
      if (action.type === "check") {
        if (state.checked.includes(action.key))
          state.checked.splice(state.checked.indexOf(action.key), 1);
        else state.checked.push(action.key);
        options.onCheckChanged?.(state.checked);
      }
      if (action.type === "checkall") {
        if (state.allChecked !== 0) {
          state.checked = [];
        } else if (options.keyProperty) {
          state.checked = state.data.map((item) => item[options.keyProperty]);
        }
        options.onCheckChanged?.(state.checked);
      }
      const checkList = state.data.filter((hit) =>
        state.checked.includes(hit[options.keyProperty]),
      );
      if (action.type === "groupExpand") {
        const group = state.groups.find((group) => group.key === action.key);
        if (group) {
          group.open = !group.open;
          state.groups = state.groups.slice();
          state.items = state.groups
            .map((group) => [
              group,
              group.open ? state.grouped[group.key] : undefined,
            ])
            .flat(2)
            .filter(Boolean) as any;
        }
      }
      if (action.type === "reset") {
        state.data = action.data;
        if (action.key) {
          state.grouped = groupBy<T>(state.data, action.key);
          state.groups = Object.keys(state.grouped)
            .sort(compareValues("asc"))
            .map((group) => ({
              __GROUP__: true,
              open: true,
              key: group,
              items: state.grouped[group],
              itemCount: state.grouped[group].length,
            }));
          state.items = state.groups
            .map((group) => [group, ...state.grouped[group.key]])
            .flat() as any;
        } else {
          state.items = state.data;
        }
      }
      return {
        ...state,
        allChecked:
          checkList.length === state.data.length
            ? 1
            : state.checked.length
              ? 2
              : 0,
      } as DataState<T>;
    },
    {
      data,
      items: [],
      grouped: {},
      groups: [],
      checked: [],
      expanded: [],
      allChecked: 0,
    },
  );

  const activeStickyIndexRef = useRef(0);
  const stickyIndexes = useMemo<number[]>(
    () =>
      state.items
        .map((hit, idx) => ("__GROUP__" in hit ? idx : undefined))
        .filter(Boolean) as number[],
    [state.items],
  );
  const isActiveSticky = (index: number) =>
    activeStickyIndexRef.current === index;

  const [hasActiveSticky, setHasActiveSticky] = useState(false);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const virtualizer = useVirtualizer({
    count: state.items.length,
    getScrollElement: () => scrollerRef.current,
    estimateSize: () => 32,
    rangeExtractor: useCallback(
      (range: Range) => {
        activeStickyIndexRef.current =
          [...stickyIndexes]
            .reverse()
            .find((index) => range.startIndex > index) ?? 0;

        setHasActiveSticky(range.startIndex !== activeStickyIndexRef.current);

        const next = new Set([
          activeStickyIndexRef.current,
          ...defaultRangeExtractor(range),
        ]);

        return [...next];
      },
      [stickyIndexes],
    ),
  });

  const virtualItems = virtualizer.getVirtualItems();

  const getData = useCallback(
    (index: number) => {
      return state.items[index];
    },
    [state.items],
  );

  useEffect(() => {
    dispatch({ type: "reset", key: options.groupProperty, data });
  }, [data, options.groupProperty]);

  useEffect(() => {
    dispatch({ type: "updateState", checked: options.checked ?? [] });
  }, [options.checked]);

  useEffect(() => {
    if (options.onLoadMore) {
      const firstItem = virtualItems[0]?.index;
      const lastItem = virtualItems?.slice(-1).pop()?.index;
      const canLoadPrevPage =
        firstItem !== undefined && state.items[firstItem] === null;
      const canLoadNextPage =
        lastItem !== undefined &&
        lastItem === state.items.length - 1 &&
        state.items.length < options.total;
      const db = debounce(options.onLoadMore);
      if (canLoadPrevPage) {
        db(firstItem);
      } else if (!options.loading && canLoadNextPage) {
        db(lastItem + 1);
      }
      return () => db.cancel();
    }
  }, [options.onLoadMore, virtualItems]);

  return {
    scrollerRef,
    items: virtualItems,
    checkState: state,
    getData,
    virtualizer,
    hasActiveSticky,
    isActiveSticky,
    top: virtualizer.range?.startIndex,
    totalSize: virtualizer.getTotalSize,
    measureElement: virtualizer.measureElement,
    toggleGroupExpand: (key: Key) => dispatch({ type: "groupExpand", key }),
    toggleExpand: (key: Key) => dispatch({ type: "expand", key }),
    toggleChecked: (key: Key) => dispatch({ type: "check", key }),
    toggleAllChecked: () => dispatch({ type: "checkall" }),
  };
};
