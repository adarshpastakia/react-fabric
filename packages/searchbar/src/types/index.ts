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

import { type ChildrenProp } from "@react-fabric/core/dist/types/types";
import { type ReactElement } from "react";

export enum FIELD_TYPE {
  ID = "ID",
  STRING = "STRING",
  NUMBER = "NUMBER",
  DECIMAL = "DECIMAL",
  BOOLEAN = "BOOLEAN",
  DATE = "DATE",
  DATETIME = "DATETIME",
  // GEO = "GEO",
  NONE = "NONE",
}

export enum OPERATOR {
  EXISTS = "EXISTS",
  IS = "IS",
  IN = "IN",
  EQ = "EQ",
  LT = "LT",
  GT = "GT",
  LTE = "LTE",
  GTE = "GTE",
  INCLUDES = "INCLUDES",
  STARTS = "STARTS",
  ENDS = "ENDS",
  WITHIN = "WITHIN",
  BETWEEN = "BETWEEN",
}

/**
 * @internal
 */
export const TypeOperators: { [key in FIELD_TYPE]: OPERATOR[] } = {
  [FIELD_TYPE.ID]: [OPERATOR.IS, OPERATOR.IN],
  [FIELD_TYPE.STRING]: [
    OPERATOR.EXISTS,
    OPERATOR.IS,
    OPERATOR.IN,
    OPERATOR.INCLUDES,
    OPERATOR.STARTS,
    OPERATOR.ENDS,
  ],
  [FIELD_TYPE.NUMBER]: [
    OPERATOR.EXISTS,
    OPERATOR.EQ,
    OPERATOR.BETWEEN,
    OPERATOR.LT,
    OPERATOR.GT,
    OPERATOR.LTE,
    OPERATOR.GTE,
  ],
  [FIELD_TYPE.DECIMAL]: [
    OPERATOR.EXISTS,
    OPERATOR.EQ,
    OPERATOR.BETWEEN,
    OPERATOR.LT,
    OPERATOR.GT,
    OPERATOR.LTE,
    OPERATOR.GTE,
  ],
  [FIELD_TYPE.BOOLEAN]: [OPERATOR.EXISTS, OPERATOR.EQ],
  [FIELD_TYPE.DATE]: [
    OPERATOR.EXISTS,
    OPERATOR.EQ,
    OPERATOR.BETWEEN,
    OPERATOR.LT,
    OPERATOR.GT,
    OPERATOR.LTE,
    OPERATOR.GTE,
  ],
  [FIELD_TYPE.DATETIME]: [
    OPERATOR.EXISTS,
    OPERATOR.EQ,
    OPERATOR.BETWEEN,
    OPERATOR.LT,
    OPERATOR.GT,
    OPERATOR.LTE,
    OPERATOR.GTE,
  ],
  // [FIELD_TYPE.GEO]: [],
  [FIELD_TYPE.NONE]: [OPERATOR.EXISTS],
};

/**
 * @internal
 * 0 single value
 * 1 many values
 * 2 two values
 */
export const OperatorValueType: {
  [key in OPERATOR]: 0 | 1 | 2;
} = {
  [OPERATOR.EXISTS]: 0,
  [OPERATOR.IS]: 0,
  [OPERATOR.IN]: 1,
  [OPERATOR.BETWEEN]: 2,
  [OPERATOR.WITHIN]: 0,
  [OPERATOR.STARTS]: 0,
  [OPERATOR.ENDS]: 0,
  [OPERATOR.INCLUDES]: 0,
  [OPERATOR.EQ]: 0,
  [OPERATOR.LT]: 0,
  [OPERATOR.GT]: 0,
  [OPERATOR.LTE]: 0,
  [OPERATOR.GTE]: 0,
};

/**
 * @internal
 */
export type FilterValue =
  | undefined
  | boolean
  | string
  | string[]
  | number
  | [number, number];

interface BaseFilter {
  id: string;
  icon?: string;
  label?: string;
  group?: string;
  color?: string;
  value?: FilterValue;
  pinned?: boolean;
  disabled?: boolean;
  required?: boolean;
  canPin?: boolean;
  canEdit?: boolean;
  canDisable?: boolean;
}

export type FilterObject = BaseFilter &
  (
    | {
        field: string;
        operator: OPERATOR;
        value?: FilterValue;
        negate?: boolean;
        canInvert?: boolean;
        query?: never;
      }
    | {
        field?: never;
        operator?: never;
        label: string;
        canInvert?: false;
        query: string;
      }
  );

export interface SearchObject<T = string> {
  query?: T;
  filters: FilterObject[];
}

export type FieldValue =
  | string
  | { value: string; label: string; icon?: AnyObject };

export interface FilterField {
  field: string;
  label: string;
  type: FIELD_TYPE;
  values?: FieldValue[];
  defaultOperator?: OPERATOR;
  onSearch?: (q: string) => Promise<FieldValue[]> | FieldValue[];
}

interface BaseSearchBarProps extends Partial<ChildrenProp> {
  /**
   * Query string
   */
  query?: AnyObject;
  /**
   * Search history count
   * @default 20
   */
  historyCount?: number;

  /**
   * Search history storage key
   * @default: "ax:search"
   */
  historyKey?: string;

  /**
   * Default query items for suggest
   */
  defaultQueryList?: string[];

  /**
   * Add-on before search input
   */
  prepend?: ReactElement;
  /**
   * Add-on after search input
   */
  append?: ReactElement;

  /**
   * Hide filter bar
   */
  hideFilters?: boolean;

  /**
   * Disable component
   */
  disabled?: boolean;

  /**
   * Collapse filters
   * @default true
   */
  defaultCollapsed?: boolean;
  /**
   *
   */
  decorateStart?: JSX.Element | string | number | boolean;
  /**
   *
   */
  decorateEnd?: JSX.Element | string | number | boolean;
  /**
   * On filter collapsed
   * @param collapsed
   */
  onCollapsed?: (collapsed: boolean) => void;
  /**
   * On query string change event
   * @param query
   */
  onQuery?: (query: string) => Promise<string[]> | string[];
}

export type SearchBarProps = BaseSearchBarProps &
  (
    | {
        multiple: true;
        query?: string[];

        /**
         * On search event
         * @param queryObject
         */
        onSearch?: (queryObject: SearchObject<string[]>) => void;
      }
    | {
        multiple?: never | false;
        query?: string;

        /**
         * On search event
         * @param queryObject
         */
        onSearch?: (queryObject: SearchObject) => void;
      }
  );

export interface FilterBarProps {
  /**
   * Filters list
   * @default []
   */
  filters?: FilterObject[];

  /**
   * Field list
   * (Required when filter bar enabled)
   */
  fields?: FilterField[];

  /**
   * Editable filters
   */
  isEditable?: boolean;

  /**
   * Disable component
   */
  isDisabled?: boolean;

  /**
   * Message for empty field list
   */
  emptyFields?: string;

  /**
   * included filter chip color
   */
  includedColor?: string;
  /**
   * excluded filter chip color
   */
  excludedColor?: string;

  allowAdd?: boolean;
  querySchema?: Array<{ uri: string; schema: KeyValue }>;
  defaultQuery?: string;

  /**
   * On filters change, (add/update/delete)
   * @param filters
   */
  onFilterChanged?: (filters: FilterObject[]) => void;
}
