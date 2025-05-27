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

import { type Elements } from "@react-fabric/core/dist/types/types";
import { type DateLike } from "@react-fabric/date";

export enum DATA_TYPES {
  TEXT = "text",
  COLOR = "color",
  BOOL = "bool",
  DATE = "date",
  DATETIME = "datetime",
  STRING = "string",
  NUMBER = "number",
  RANGE = "range",
  FILE = "file",
  AVATAR = "avatar",
  SCHEMA = "schema",
}

export const SCHEMA_CUSTOM_LIST = "--CUSTOM--";

interface SingleValue {
  multiple?: false;
  minItems?: never;
  maxItems?: never;
}

interface MultipleValue {
  multiple: true;
  minItems?: number;
  maxItems?: number;
}

export type ValueType = SingleValue | MultipleValue;

interface BaseSchema {
  id: string;
  label: string;
  datatype: string;
  required?: boolean;
}

export interface DefaultSchema extends BaseSchema {
  datatype: DATA_TYPES.TEXT | DATA_TYPES.COLOR;
}

export interface BooleanSchema extends BaseSchema {
  datatype: DATA_TYPES.BOOL;
}

export interface StringSchema extends BaseSchema {
  datatype: DATA_TYPES.STRING;
  regex?: string;
  options?: string[];
  optionList?: string;
  allowCustom?: boolean;
}

export interface RangeSchema extends BaseSchema {
  datatype: DATA_TYPES.RANGE;
  min?: number;
  max?: number;
  step?: number;
}

export interface DateSchema extends BaseSchema {
  datatype: DATA_TYPES.DATE | DATA_TYPES.DATETIME;
  min?: DateLike;
  max?: DateLike;
}

export interface NumberSchema extends BaseSchema {
  datatype: DATA_TYPES.NUMBER;
  min?: number;
  max?: number;
  step?: number;
}

export interface FileSchema extends BaseSchema {
  datatype: DATA_TYPES.FILE;
  accept?: string;
}

export interface AvatarSchema extends BaseSchema {
  datatype: DATA_TYPES.AVATAR;
  multiple?: false;
}

export type SchemaType =
  | (DefaultSchema & ValueType)
  | (BooleanSchema & ValueType)
  | (StringSchema & ValueType)
  | (RangeSchema & ValueType)
  | (DateSchema & ValueType)
  | (NumberSchema & ValueType)
  | (FileSchema & ValueType)
  | (AvatarSchema & ValueType);

export interface ChildSchema extends BaseSchema {
  datatype: DATA_TYPES.SCHEMA;
  inline?: boolean;
  schema: SchemaType[];
}

export type SchemaDef = SchemaType | (ChildSchema & ValueType);
export type FormSchema = SchemaDef[];

export interface SchemaEditorProps {
  /**
   * default form schema
   */
  schemaDef: FormSchema;
  /**
   * is dynamic schema (allow add/remove)
   */
  dynamic?: boolean;
  /**
   * acceptable list of data types
   */
  acceptableTypes?: DATA_TYPES[];

  /**
   * available option lists in application
   */
  optionLists?: string[];

  /**
   * footer actions
   */
  children?: Elements<JSX.Element> | Array<Elements<JSX.Element>>;

  onChange?: (schema: FormSchema) => void;
  onSubmit?: (schema: FormSchema) => void;
}
