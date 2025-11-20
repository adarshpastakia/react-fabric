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

import { type BarSeriesOption, type PieSeriesOption, type EChartsOption } from "echarts";

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
  /**
   * The theme to be applied to the chart.
   * This can be one of the predefined themes or a custom theme object.
   * Predefined themes include "default", "activity", "cloud", "qualitative", "diverging", "sequential",
   * "spectral", "uber", "fireice", "warming", "sunrise", "ocean", "wine", "red", "green", and "blue".
   */
  theme?: Theme;
  /**
   * Additional options for the chart.
   * This can include any ECharts options to customize the chart's appearance and behavior.
   */
  options?: EChartsOption;
  /**
   * Whether to show the theme selector in the chart.
   * This is useful for allowing users to switch between different themes.
   * If set to true, the chart will render a toggle button group to select the theme.
   */
  showThemeSelector?: boolean;
  /**
   * Whether to show the type selector in the chart.
   * This is useful for charts that can have multiple types (e.g., line, column, etc.).
   * If set to true, the chart will render a toggle button group to select the type.
   */
  showTypeSelector?: boolean;
  onExport?: (chart: { title: string; image: string }) => void;
}

export interface CountType {
  series: Array<PieSeriesOption & { count: number }>;
}

export interface SeriesType {
  categoryAxisName?: string;
  valueAxisName?: string;
  valueFormat?: string;
  categories: string[];
  series: Array<
    BarSeriesOption & {
      data: number[];
    }
  >;
}

export interface TimeSeriesType {
  categoryAxisName?: string;
  valueAxisName?: string;
  series: Array<
    BarSeriesOption & {
      data: Array<[Date, number]>;
    }
  >;
}
