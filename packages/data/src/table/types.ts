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
  type Elements,
  type IconProps,
  type RefProp,
  type TestProps,
} from "@react-fabric/core/dist/types/types";
import { type ReactElement } from "react";

export const COL_MIN_WIDTH = "3rem";
export const COL_MAX_WIDTH = "64rem";
export const COL_DEFAULT_WIDTH = "12rem";

/**
 * TableColumn interface defines the structure of a column in a table.
 * It includes properties for column identification, display options, alignment,
 * visibility, resizing, sorting, filtering, and rendering.
 *
 * @template T - The type of data the column will represent, defaulting to KeyValue.
 * @property {keyof T | string} id - Unique identifier for the column.
 * @property {"string" | "number" | "boolean" | "datetime" | "date" | "time" | "unknown"} [dataType] - Data type of the column values.
 * @property {string} [label] - Display label for the column header.
 * @property {string} [tooltip] - Tooltip text for the column header.
 * @property {string} [format] - Format string for displaying the column values.
 * @property {"start" | "center" | "end"} [align] - Text alignment within the column.
 * @property {"start" | "end"} [locked] - Indicates if the column is locked at the start or end.
 * @property {boolean} [hidden] - Whether the column is hidden.
 * @property {boolean} [truncate] - Whether to truncate the text in the column.
 * @property {boolean} [hideable] - Whether the column can be hidden by the user.
 * @property {boolean} [resizable] - Whether the column can be resized by the user.
 * @property {boolean} [sortable] - Whether the column can be sorted.
 * @property {boolean} [filterable] - Whether the column can be filtered.
 * @property {AnyObject} [filter] - Filter criteria for the column.
 * @property {ReactElement[]} [actions] - Array of action elements to be displayed in the column.
 * @property {AnyObject[]} [filterOptions] - Options for filtering the column.
 * @property {string | number} [width] - Width of the column.
 * @property {string | number} [minWidth] - Minimum width of the column.
 * @property {string | number} [maxWidth] - Maximum width of the column.
 * @property {KeyValue} [valueMap] - Mapping of values for the column.
 * @property {(value: AnyObject, data: T, index: number) => Elements<AnyObject>} [renderer] - Custom renderer function for the column values.
 */
export interface TableColumn<T = KeyValue>
  extends CssProp,
    IconProps,
    TestProps {
  id: keyof T | string;
  field?: string;
  label?: string;
  tooltip?: string;
  actions?: ReactElement[];
  align?: "start" | "center" | "end";
  locked?: "start" | "end";
  hidden?: boolean;
  truncate?: boolean;
  hideable?: boolean;
  resizable?: boolean;
  sortable?: boolean;
  filterable?: boolean;
  filter?: AnyObject;
  filterOptions?: AnyObject[];
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
  valueMap?: KeyValue;
  renderer?: (value: AnyObject, data: T, index: number) => Elements<AnyObject>;
}

export interface TableRef {
  hilight: (row: number) => void;
  unhilight: () => void;
  scrollTo: (row: number) => void;
}

export interface TableProps<T = KeyValue> extends RefProp<TableRef> {
  columns: Array<TableColumn<T>>;
  data: T[];
  keyProperty?: keyof T;
  groupProperty?: keyof T;
  groupRenderer?: (key: AnyObject) => ReactElement;
  emptyDisplay?: ReactElement;

  /**
   * checkable rows
   */
  checked?: AnyObject[];
  checkableRows?: boolean;
  onCheckedChanged?: (rows: AnyObject[]) => void;
  /**
   * sorting
   */
  sort?: { id: string; order: "asc" | "desc" };
  onSort?: (sort: { id: string; order: "asc" | "desc" }) => void;

  loading?: boolean;
  hideableColumns?: boolean;

  onRowClick?: (data: T) => void;

  initialScroll?: number;
  onScroll?: (firstItem: number) => void;

  canExpand?: (record: T) => boolean;
  children?: (record: T) => Elements<AnyObject>;

  onFilter?: (id: keyof T | string, value?: AnyObject) => void;

  total?: number;
  onLoadMore?: (lastIndex?: number) => void;
}
