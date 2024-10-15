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
  type CssProp,
  type IconProps,
  type RefProp,
  type TestProps,
} from "@react-fabric/core/dist/types/types";
import { type ReactElement } from "react";

export const COL_MIN_WIDTH = "3rem";
export const COL_MAX_WIDTH = "64rem";
export const COL_DEFAULT_WIDTH = "12rem";

export interface ColumnType<T = KeyValue>
  extends CssProp,
    IconProps,
    TestProps {
  id: keyof T | string;
  label?: string;
  actions?: ReactElement;
  align?: "start" | "center" | "end";
  locked?: "start" | "end";
  hidden?: boolean;
  hideable?: boolean;
  resizable?: boolean;
  sortable?: boolean;
  filterable?: boolean;
  filterList?: AnyObject[];
  width?: string | number;
  minWidth?: string | number;
  maxWidth?: string | number;
  dataType?:
    | "string"
    | "number"
    | "boolean"
    | "datetime"
    | "date"
    | "time"
    | "unknown";
  format?: string;
  renderer?: (value: AnyObject, data: T) => void;
}

export interface TableRef {
  hilight: (row: number) => void;
  unhilight: () => void;
  scrollTo: (row: number) => void;
}

export interface TableProps<T = KeyValue> extends RefProp<TableRef> {
  columns: Array<ColumnType<T>>;
  data: T[];
  keyProperty?: keyof T;
  /**
   * checkable rows
   */
  checkableRows?: boolean;
  onCheckedChanged?: (rows: Array<keyof T>) => void;
  /**
   * sorting
   */
  sort?: { id: string; order: "asc" | "desc" };
  onSort?: (sort: { id: string; order: "asc" | "desc" }) => void;

  loading?: boolean;
  hideableColumns?: boolean;

  onRowClick?: (data: T) => void;
}
