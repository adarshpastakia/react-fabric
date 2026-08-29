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

import type { ECElementEvent, EChartsOption, EChartsType } from "echarts";
import { memo, useEffect, useImperativeHandle, useRef, useState, type Ref } from "react";
import { type Theme } from "../types";
import { ChartContainer } from "../wrapper/ChartContainer";
import { ChartWrapper } from "../wrapper/ChartWrapper";
import { PaletteSelect } from "../wrapper/PaletteSelect";

export interface GenericProps extends Omit<EChartsOption, "title"> {
  chartRef?: Ref<EChartsType>;

  title?: string;

  actions?: React.ReactElement;

  /**
   * The theme to be applied to the chart.
   * This can be one of the predefined themes or a custom theme object.
   * Predefined themes include "default", "activity", "cloud", "qualitative", "diverging", "sequential",
   * "spectral", "uber", "fireice", "warming", "sunrise", "ocean", "wine", "red", "green", and "blue".
   */
  theme?: Theme;
  /**
   * Whether to show the theme selector in the chart.
   * This is useful for allowing users to switch between different themes.
   * If set to true, the chart will render a toggle button group to select the theme.
   */
  showThemeSelector?: boolean;

  onClick?: (e: ECElementEvent) => void;
  onRendered?: () => void;

  onBrush?: () => void;
  onBrushEnd?: () => void;
  onBrushSelected?: () => void;

  /**
   * Data table renderer that returns HTML string
   */
  dataTableRenderer?: (chartOption: EChartsOption) => string;
}

const GenericChartBase = memo(
  ({
    chartRef: _ref,
    onBrush,
    onBrushEnd,
    onBrushSelected,
    dataTableRenderer,
    onClick,
    onRendered,
    showThemeSelector,
    actions,
    title,
    theme: chartTheme,
    ...options
  }: GenericProps) => {
    const chartRef = useRef<EChartsType>(null);
    const [theme, setTheme] = useState(() => chartTheme);

    useImperativeHandle<EChartsType | null, EChartsType | null>(_ref, () => chartRef.current, []);

    useEffect(() => {
      const chart = chartRef.current;
      if (chart && onRendered) {
        chart.on("finished", onRendered);
        return () => {
          if (!chart.isDisposed()) chart.off("finished");
        };
      }
    }, [onRendered]);

    useEffect(() => {
      const chart = chartRef.current;
      if (chart && onClick) {
        chart.on("click", onClick);
        return () => {
          if (!chart.isDisposed()) chart.off("click");
        };
      }
    }, [onClick]);

    useEffect(() => {
      const chart = chartRef.current;
      if (chart && onBrush) {
        chart.on("brush", onBrush);
        return () => {
          if (!chart.isDisposed()) chart.off("brush");
        };
      }
    }, [onBrush]);

    useEffect(() => {
      const chart = chartRef.current;
      if (chart && onBrushEnd) {
        chart.on("brushend", onBrushEnd);
        return () => {
          if (!chart.isDisposed()) chart.off("brushend");
        };
      }
    }, [onBrushEnd]);

    useEffect(() => {
      const chart = chartRef.current;
      if (chart && onBrushSelected) {
        chart.on("brushselected", onBrushSelected);
        return () => {
          if (!chart.isDisposed()) chart.off("brushselected");
        };
      }
    }, [onBrushSelected]);

    return (
      <ChartContainer options={options} chartRef={chartRef} theme={theme} title={title} dataTableRenderer={dataTableRenderer}>
        {actions}
        {showThemeSelector && <PaletteSelect theme={theme} onClick={setTheme} />}
      </ChartContainer>
    );
  },
);
GenericChartBase.displayName = "GenericChart";

/**
 * GenericChart component renders a generic chart using ECharts.
 * It accepts various chart options and configurations, allowing for flexible chart rendering.
 * It supports click events, brush events, and custom actions.
 * It can be used to create a wide range of chart types by passing the appropriate ECharts options.
 *
 * @see {@link https://echarts.apache.org/en/option.html} for ECharts options documentation.
 * @see {@link https://echarts.apache.org/en/api.html#echartsInstance} for ECharts instance methods and properties.
 */
export function GenericChart(props: GenericProps) {
  return (
    <ChartWrapper>
      <GenericChartBase {...props} />
    </ChartWrapper>
  );
}
