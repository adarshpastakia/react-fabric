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

export type Theme =
  | "default"
  | "activity"
  | "cloud"
  | "qualitative"
  | "diverging"
  | "sequential"
  | "spectral"
  | "uber"
  | "fireice"
  | "warming"
  | "sunrise"
  | "ocean"
  | "wine"
  | "red"
  | "green"
  | "blue";

export interface BaseChart {
  title?: string;
  theme?: Theme;
  showThemeSelector?: boolean;
  showTypeSelector?: boolean;
  onExport?: (chart: { title: string; image: string }) => void;
}

export interface CountType {
  data: Array<{ id: string; label?: string; count: number }>;
}

export interface SeriesType {
  categoryAxisName?: string;
  valueAxisName?: string;
  valueFormat?: string;
  categories: string[];
  data: Array<{ id: string; label?: string; values: number[] }>;
}

export interface TimeSeriesType {
  categoryAxisName?: string;
  valueAxisName?: string;
  data: Array<{ id: string; label?: string; values: Array<[Date, number]> }>;
}
