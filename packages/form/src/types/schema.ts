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

interface BaseSchemaDef {
  id: string;
  label: string;
  datatype: string;
  required?: boolean;
  multiple?: boolean;
  defaultValue?: AnyObject;
}

interface SchemaDef extends BaseSchemaDef {
  datatype: "text" | "color";
}

interface BooleanSchema extends BaseSchemaDef {
  datatype: "boolean";
  defaultValue?: boolean;
}

interface StringSchema extends BaseSchemaDef {
  datatype: "string";
  options?: string[];
  regex?: string;
  identifierType?: string;
}

interface RangeSchema extends BaseSchemaDef {
  datatype: "range";
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: [number, number];
}

interface NumberSchema extends BaseSchemaDef {
  datatype: "number";
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number;
}

interface DecimalSchema extends BaseSchemaDef {
  datatype: "decimal";
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number;
}

export interface FileSchema extends BaseSchemaDef {
  datatype: "file";
  accept?: string;
}

export interface AvatarSchema extends BaseSchemaDef {
  datatype: "avatar";
  multiple?: false;
}

export type SchemaType =
  | SchemaDef
  | BooleanSchema
  | StringSchema
  | RangeSchema
  | NumberSchema
  | DecimalSchema
  | FileSchema
  | AvatarSchema;

export interface ChildSchema extends BaseSchemaDef {
  datatype: "schema";
  inline?: boolean;
  schema: SchemaType[];
  defaultValue?: never;
}

export type FormSchema = SchemaType | ChildSchema;
