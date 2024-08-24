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

import { compareValues, isString, matchString } from "@react-fabric/utilities";
import { type InternalNode, type TreeNodeType } from "./types";

const sorter = (a: TreeNodeType, b: TreeNodeType) => {
  if (!!a.leaf !== !!b.leaf) return a.leaf ? 1 : -1;
  return compareValues()(a.label, b.label);
};

const getChildren = (list: InternalNode[] = []): InternalNode[] => {
  return list
    .map<InternalNode[]>((item) => [item, ...getChildren(item.children)])
    .flat(99)
    .filter(Boolean);
};

const getIntermediate = (list: AnyObject[] = []) => {
  const checks = list.map((item) => item.checked);
  const someOff = checks.includes(0);
  const someInt = checks.includes(2);
  const someOn = checks.includes(1);

  return (someOff && someOn) || someInt ? 2 : someOn ? 1 : 0;
};

// convert node item to internal node used by the tree
export const refactorTree = (
  nodes: TreeNodeType[],
  options: { level: number; parent?: string } = { level: 0, parent: undefined },
) => {
  const list: InternalNode[] = [];

  nodes.sort(sorter).forEach((node) => {
    list.push({
      open: false,
      level: options.level,
      parent: options.parent,
      checked: 0,
      loaded: false,
      loading: false,
      filtered: false,
      lines: [],
      ...node,
      leaf: !!node.leaf,
      children:
        node.children &&
        refactorTree(node.children, {
          level: options.level + 1,
          parent: node.id,
        }),
    });
  });

  return list;
};

export const makeTreeMap = (nodes: InternalNode[], map = new Map()) => {
  nodes.forEach((node) => {
    if (map.has(node.id))
      throw new Error(
        `Node with id [${node.id}] already exists, please make sure all ids are unique`,
      );
    map.set(node.id, node);
    node.children && makeTreeMap(node.children, map);
  });
  return map;
};

// make flat list to be rendered by virtual list
export const flattenTree = (
  nodes: InternalNode[],
  lines: Array<0 | 1 | 2 | 3> = [],
) => {
  const list: InternalNode[] = [];
  const filtered = nodes.filter((node) => !node.filtered);
  filtered.forEach((node, idx) => {
    node.lines = [...lines, idx === filtered.length - 1 ? 2 : 3];
    list.push(node);
    (node.open || node.childFiltered) &&
      node.children &&
      list.push(
        ...flattenTree(
          node.children.filter((child) => !child.filtered),
          [...lines, idx === filtered.length - 1 ? 0 : 1],
        ),
      );
  });
  return list;
};

export const updateSelection = (
  nodes: Map<string, InternalNode>,
  id: string,
  selected?: true,
) => {
  const node = nodes.get(id);
  if (node) {
    // change selection
    node.selected = selected;
    // update all parent childSelected flag
    let parent = node.parent;
    while (parent) {
      const parentNode = nodes.get(parent);
      parentNode && (parentNode.childSelected = selected);
      selected && parentNode && (parentNode.open = true);
      parent = parentNode?.parent;
    }
  }
};

export const updateChecked = (list: Map<string, AnyObject>, id: string) => {
  const node = list.get(id);
  if (node) {
    node.checked = node.checked === 1 ? 0 : 1;
    // check all children
    node.children &&
      getChildren(node.children).forEach(
        (child) => (child.checked = node.checked),
      );
    let parent = node.parent;
    while (parent) {
      const parentNode = list.get(parent);
      parentNode && (parentNode.checked = getIntermediate(parentNode.children));
      parent = parentNode?.parent;
    }
  }
};

export const filterTree = (
  nodes: Map<string, InternalNode>,
  query?: string,
  matcher?: AnyObject,
) => {
  nodes.forEach((node) => {
    if (query) {
      if (node.parentFiltered) return;
      node.filtered = !(matcher
        ? matcher(node.data, query)
        : isString(node.queryable)
          ? matchString(node.queryable, query)
          : isString(node.label) && matchString(node.label, query));

      if (!node.filtered) {
        let parent = node.parent;
        while (parent) {
          const parentNode = nodes.get(parent);
          parentNode && (parentNode.filtered = false);
          parentNode && (parentNode.childFiltered = true);
          parent = parentNode?.parent;
        }
        node.children &&
          getChildren(node.children).forEach((child) => {
            child.parentFiltered = true;
            child.filtered = false;
          });
      }
    } else {
      node.filtered = false;
      node.childFiltered = undefined;
      node.parentFiltered = undefined;
    }
  });
};
