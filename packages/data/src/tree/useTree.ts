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

import { useDebounce } from "@react-fabric/core";
import { EMPTY_ARRAY } from "@react-fabric/utilities";
import memoizeOne from "memoize-one";
import { useCallback, useEffect, useReducer, useRef } from "react";
import {
  type InternalNode,
  type TreeNodeType,
  type TreePanelProps,
} from "./types";
import {
  filterTree,
  flattenTree,
  makeTreeMap,
  refactorTree,
  updateChecked,
  updateSelection,
} from "./utils";

type TreeActions =
  /**
   * load tree items
   */
  | { type: "load"; items: TreeNodeType[] }
  /**
   * filter tree nodes
   */
  | { type: "filter"; query?: string }
  /**
   * update selected item
   */
  | { type: "select"; id: string }
  /**
   * update item check state
   */
  | { type: "checked"; id: string[] }
  /**
   * toggle item check, used as action handler
   */
  | { type: "toggleCheck"; id: string }
  /**
   * expand single item
   */
  | { type: "expand"; id: string }
  /**
   * collapse single item
   */
  | { type: "toggleExpand"; id: string }
  /**
   * expand all nodes
   */
  | { type: "expandAll" }
  /**
   * collapse all nodes
   */
  | { type: "collapseAll" }
  /**
   * loaded dynamic nodes
   */
  | { type: "loaded" };

interface TreeState {
  items: InternalNode[];
  itemMap: Map<string, InternalNode>;
  tree: InternalNode[];
  selected?: string;
  checked?: string[];
}

const createItemList = memoizeOne((items) => items);

export const useTree = <T extends KeyValue>({
  items = EMPTY_ARRAY,
  checked = EMPTY_ARRAY,
  selected,
  sorter,
  matcher,
  onLoad,
  onQuery,
  onSelect,
  onChecked,
  defaultExpanded,
  onExpandToggle,
}: Partial<TreePanelProps<T>>) => {
  const componentEvents = useRef({ onSelect, onChecked });
  const intialExpand = useRef(defaultExpanded ?? EMPTY_ARRAY);
  const itemList = createItemList(items);

  const fireExpandToggle = useCallback(
    (itemMap: InternalNode[]) => {
      const expandedList = itemMap
        .filter((node) => node.open)
        .map((node) => node.id);
      setTimeout(() => onExpandToggle?.(expandedList), 100);
    },
    [onExpandToggle],
  );

  const loadChildren = useCallback(
    (node: InternalNode) => {
      if (node.open && !node.leaf && !node.children?.length) {
        node.loading = true;
        void Promise.resolve(onLoad?.(node.id))
          .then((resp = EMPTY_ARRAY) => {
            node.children = refactorTree(
              resp,
              { sorter, defaultExpanded },
              { level: node.level + 1, parent: node.id },
            );
          })
          .finally(() => {
            node.loading = false;
            dispatch({ type: "loaded" });
            intialExpand.current?.length > 0 &&
              dispatch({
                type: "expand",
                id: intialExpand.current.shift() as unknown as string,
              });
          });
      } else {
        dispatch({ type: "loaded" });
        intialExpand.current?.length > 0 &&
          dispatch({
            type: "expand",
            id: intialExpand.current.shift() as unknown as string,
          });
      }
    },
    [onLoad],
  );

  const [state, dispatch] = useReducer(
    (state: TreeState, action: TreeActions) => {
      if (action.type === "load") {
        state.items = refactorTree(action.items, { sorter, defaultExpanded });
        state.itemMap = makeTreeMap(state.items);
        state.tree = flattenTree(state.items);
        return { ...state };
      }
      if (action.type === "toggleExpand") {
        const node = state.itemMap.get(action.id);
        if (node && !node.leaf) {
          node && (node.open = !node.open);
          loadChildren(node);
          return { ...state };
        }
      }
      if (action.type === "loaded") {
        state.itemMap = makeTreeMap(state.items);
        fireExpandToggle(Array.from(state.itemMap.values()));
        state.tree = flattenTree(state.items);
        state.selected && updateSelection(state.itemMap, state.selected, true);
        return { ...state };
      }
      if (action.type === "expand") {
        const node = state.itemMap.get(action.id);
        if (node && !node.leaf) {
          node.open = true;
          let parentId = node.parent;
          while (parentId) {
            const node = state.itemMap.get(parentId);
            node && (node.open = true);
            parentId = node?.parent;
          }
          loadChildren(node);
          return { ...state };
        }
      }
      if (action.type === "expandAll") {
        state.itemMap.forEach((node) => {
          !node.leaf && node.children?.length && (node.open = true);
        });
        fireExpandToggle(Array.from(state.itemMap.values()));
        state.tree = flattenTree(state.items);
        return { ...state };
      }
      if (action.type === "collapseAll") {
        state.itemMap.forEach((node) => {
          !node.leaf && (node.open = false);
        });
        fireExpandToggle([]);
        state.tree = flattenTree(state.items);
        return { ...state };
      }
      if (action.type === "filter") {
        if (onQuery) {
          onQuery(action.query ?? "");
        } else {
          filterTree(state.itemMap, action.query, matcher);
          state.tree = flattenTree(state.items);
          return { ...state };
        }
      }
      if (action.type === "select") {
        if (state.selected) {
          updateSelection(state.itemMap, state.selected);
        }
        updateSelection(state.itemMap, action.id, true);
        state.tree = flattenTree(state.items);
        componentEvents.current.onSelect?.(
          action.id,
          state.itemMap.get(action.id)?.data,
        );
        return { ...state, selected: action.id };
      }
      if (action.type === "toggleCheck") {
        updateChecked(state.itemMap, action.id);
        const checkList: string[][] = [[], []];
        Array.from(state.itemMap.values())
          .filter((node) => node.checked === 1)
          .forEach((node) => checkList[node.leaf ? 0 : 1].push(node.id));
        componentEvents.current.onChecked?.(checkList[0], checkList[1]);
        return { ...state };
      }
      if (action.type === "checked") {
        action.id.forEach((id) => updateChecked(state.itemMap, id));
        return { ...state, checked: action.id };
      }
      return state;
    },
    {
      itemMap: new Map(),
      items: [],
      tree: [],
      checked: [],
    },
  );

  useEffect(() => {
    componentEvents.current = { onSelect, onChecked };
  }, [onSelect, onChecked]);

  useEffect(() => {
    dispatch({ type: "load", items: itemList });
    itemList.length &&
      intialExpand.current?.length > 0 &&
      dispatch({
        type: "expand",
        id: intialExpand.current.shift() as unknown as string,
      });
  }, [itemList]);

  useEffect(() => {
    selected && dispatch({ type: "select", id: selected });
  }, [selected]);

  useEffect(() => {
    checked && dispatch({ type: "checked", id: checked });
  }, [checked]);

  const toggleExpand = useCallback((id: string) => {
    dispatch({ type: "toggleExpand", id });
  }, []);

  const toggleCheck = useCallback((id: string) => {
    dispatch({ type: "toggleCheck", id });
  }, []);

  const select = useCallback((id: string) => {
    dispatch({ type: "select", id });
  }, []);

  const expand = useCallback((id: string) => {
    dispatch({ type: "expand", id });
  }, []);

  const expandAll = useCallback(() => {
    dispatch({ type: "expandAll" });
  }, []);

  const collapseAll = useCallback(() => {
    dispatch({ type: "collapseAll" });
  }, []);

  const onFilter = useDebounce(
    (query: string) => {
      dispatch({ type: "filter", query });
    },
    [],
    300,
  );

  return {
    tree: state.tree,
    toggleExpand,
    expandAll,
    collapseAll,
    toggleCheck,
    select,
    expand,
    onFilter,
  };
};
