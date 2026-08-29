/*
 * React Fabric
 * @version: 1.0.0
 *
 *
 * The MIT License (MIT)
 * Copyright (c) 2026 Adarsh Pastakia
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

interface Field {
  id: string;
  type: AnnotatorFieldType;
}

export enum AnnotatorFieldType {
  Text = "text",
  Number = "number",
  Float = "float",
  Currency = "currency",
  Boolean = "boolean",
  Date = "date",
  Time = "time",
  DateTime = "datetime",
  Signature = "signature",
}

export const COLOR_MAP = {
  text: "#42A5F5",
  number: "#FFA726",
  float: "#FF7043",
  currency: "#EF5350",
  boolean: "#26C6DA",
  date: "#AB47BC",
  time: "#EC407A",
  datetime: "#7E57C2",
  signature: "#66BB6A",
};

export interface BoxField extends Field {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface AnnotatorProps {
  src: string;
  annotations: BoxField[];
  onLoad?: () => void;
  onError?: () => void;
}
