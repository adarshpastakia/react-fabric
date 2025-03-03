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

import {
  type BadgeType,
  type ChildProp,
  type CssProp,
  type Elements,
  type IconProps,
  type RefProp,
  type TestProps,
} from "@react-fabric/core/dist/types/types";
import { type ElementType } from "react";

interface TreeBaseNode<T> extends Omit<IconProps, "icon">, CssProp, TestProps {
  id: string;
  /**
   * display label
   */
  label: Elements<JSX.Element>;
  /**
   * full text to be used for querying purposes
   */
  queryable?: string;
  /**
   * element badge
   */
  badge?: string | number | BadgeType;
  /**
   * is element `node` or `leaf`
   */
  leaf?: boolean;
  /**
   * disable selection
   */
  disabled?: boolean;
  data?: T;

  icon?: ElementType<IconProps> | string;
}

export type TreeNodeType<T extends KeyValue = KeyValue> = TreeBaseNode<T> &
  (
    | { leaf: true; children?: never }
    | {
        leaf?: boolean;
        children?: Array<TreeNodeType<T>>;
        open?: boolean;
        iconOpen?: string;
      }
  );

export interface InternalNode
  extends Omit<IconProps, "icon">,
    CssProp,
    TestProps {
  id: string;
  label: Elements<JSX.Element>;
  queryable?: string;
  badge?: string | number | BadgeType;
  disabled?: boolean;
  leaf: boolean;
  open: boolean;
  children?: InternalNode[];
  level: number;
  loading: boolean;
  filtered: boolean;
  childFiltered?: boolean;
  parentFiltered?: boolean;
  loaded: boolean;
  parent?: string;
  empty?: boolean;
  icon?: ElementType<IconProps> | string;
  errored?: string;
  selected?: true;
  childSelected?: true;
  checked: 0 | 1 | 2;
  data?: AnyObject;
  last?: boolean;
  lines: Array<0 | 1 | 2 | 3>;
}

export interface TreeNodeProps extends ChildProp {
  node: InternalNode;
  expanders: [string, string];
  defaultNodeIcon?: string;
  defaultLeafIcon?: string;
  noLines?: boolean;
  selectable?: true | "leafOnly";
  checkable?: true | "leafOnly";
  leafClassName?: string;
  nodeClassName?: string;
  onToggle: (id: string) => void;
  onSelect: (id: string) => void;
  onChecked: (id: string) => void;
  onClick?: (id: string, node: any) => void;
}

export interface TreeRef {
  select: (id: string) => void;
  open: (id: string) => void;
}

export interface TreePanelProps<T extends KeyValue = KeyValue>
  extends TestProps,
    RefProp<TreeRef> {
  items?: Array<TreeNodeType<T>>;
  /**
   * make tree searchable
   */
  searchable?: boolean;
  /**
   * filter input placeholder
   */
  filterPlaceholder?: string;
  /**
   * enable select
   */
  selectable?: true | "leafOnly";
  /**
   * enable checkable
   */
  checkable?: true | "leafOnly";
  /**
   * selected item id
   */
  selected?: string;
  /**
   * checked items
   */
  checked?: string[];
  /**
   * default node icon
   */
  defaultNodeIcon?: string;
  /**
   * default leaf icon
   */
  defaultLeafIcon?: string;
  /**
   * hide level indicator lines
   */
  noLines?: boolean;
  /**
   * expander icons
   */
  expander?: "box" | "caret" | "chevron" | "folder";
  /**
   * callback for lazy loading tree items
   */
  onLoad?: (
    id: string,
  ) =>
    | Promise<Array<TreeNodeType<T>> | undefined>
    | Array<TreeNodeType<T>>
    | undefined;
  /**
   * callback to load tree using search query
   */
  onQuery?: (query: string) => void;
  /**
   * callback on click of tree node
   */
  onClick?: (id: string, data: T) => void;
  /**
   * callback on selection of tree node
   */
  onSelect?: (id: string, data: T) => void;
  /**
   * callback on change of checked list
   */
  onChecked?: (leafs: string[], nodes: string[]) => void;
  /**
   * item label renderer
   */
  renderer?: (data: T) => JSX.Element;
  /**
   * item filter matcher
   */
  matcher?: (data: T, query: string) => boolean;

  sorter?: false | ((a: T, b: T) => number);
  makeLabel?: (node: T) => string;
  makeIcon?: (node: T) => string;

  defaultExpanded?: string[];
  onExpandToggle?: (id: string[]) => void;

  leafClassName?: string;
  nodeClassName?: string;
}

export const iconExpandAll =
  "M12.984 9v6h3l-3.984 3.984-3.984-3.984h3v-6h-3l3.984-3.984 3.984 3.984h-3zM3.984 2.016h16.031v1.969h-16.031v-1.969zM3.984 20.016h16.031v1.969h-16.031v-1.969z";
export const iconCollapseAll =
  "M3.984 11.016h16.031v1.969h-16.031v-1.969zM15.984 5.016l-3.984 3.984-3.984-3.984h3v-4.031h1.969v4.031h3zM8.016 18.984l3.984-3.984 3.984 3.984h-3v4.031h-1.969v-4.031h-3z";
