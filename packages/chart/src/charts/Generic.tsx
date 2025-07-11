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

import { type EChartOption, type EChartsType } from "echarts";
import {
  memo,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
  type FC,
  type Ref,
} from "react";
import { type BaseChart } from "../types";
import { ChartContainer } from "../wrapper/ChartContainer";
import { ChartWrapper } from "../wrapper/ChartWrapper";
import { PaletteSelect } from "../wrapper/PaletteSelect";

export interface GenericProps extends BaseChart {
  chartRef?: Ref<EChartsType>;

  legend?: EChartOption["legend"];
  toolbox?: EChartOption["toolbox"];
  tooltip?: EChartOption["tooltip"];

  actions?: JSX.Element;

  /**
   * 2d axis
   */
  xAxis?: EChartOption["xAxis"];
  /**
   * 2d axis
   */
  yAxis?: EChartOption["yAxis"];
  /**
   * chart series
   */
  series?: EChartOption["series"];

  /**
   * polar series
   */
  polar?: EChartOption["polar"];
  /**
   * polar axis
   */
  angleAxis?: EChartOption["angleAxis"];
  /**
   * polar axis
   */
  radiusAxis?: EChartOption["radiusAxis"];

  /**
   * radar series
   */
  radar?: EChartOption["radar"];

  /**
   * paarllel series
   */
  parallel?: EChartOption["parallel"];
  /**
   * parallel axis
   */
  parallelAxis?: EChartOption["parallelAxis"];

  onClick?: (e: KeyValue) => void;
  onRendered?: (e: KeyValue) => void;

  onBrush?: (e: KeyValue) => void;
  onBrushEnd?: (e: KeyValue) => void;
  onBrushSelected?: (e: KeyValue) => void;

  /**
   * Data table renderer that returns HTML string
   */
  dataTableRenderer?: (chartOption: EChartOption) => string;
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
  }: Omit<GenericProps, "showTypeSelector">) => {
    const chartRef = useRef<EChartsType>(null);
    const [theme, setTheme] = useState(chartTheme);

    useImperativeHandle<EChartsType | null, EChartsType | null>(
      _ref,
      () => chartRef.current,
      [chartRef.current],
    );

    useEffect(() => {
      const chart = chartRef.current;
      if (chart && onRendered) {
        chart.on("finished", onRendered);
        return () => {
          !chart.isDisposed() && chart.off("finished");
        };
      }
    }, [chartRef.current, onRendered]);

    useEffect(() => {
      const chart = chartRef.current;
      if (chart && onClick) {
        chart.on("click", onClick);
        return () => {
          !chart.isDisposed() && chart.off("click");
        };
      }
    }, [chartRef.current, onClick]);

    useEffect(() => {
      const chart = chartRef.current;
      if (chart && onBrush) {
        chart.on("brush", onBrush);
        return () => {
          !chart.isDisposed() && chart.off("brush");
        };
      }
    }, [chartRef.current, onBrush]);

    useEffect(() => {
      const chart = chartRef.current;
      if (chart && onBrushEnd) {
        chart.on("brushend", onBrushEnd);
        return () => {
          !chart.isDisposed() && chart.off("brushend");
        };
      }
    }, [chartRef.current, onBrushEnd]);

    useEffect(() => {
      const chart = chartRef.current;
      if (chart && onBrushSelected) {
        chart.on("brushselected", onBrushSelected);
        return () => {
          !chart.isDisposed() && chart.off("brushselected");
        };
      }
    }, [chartRef.current, onBrushSelected]);

    return (
      <ChartContainer
        options={options}
        chartRef={chartRef}
        theme={theme}
        title={title}
        dataTableRenderer={dataTableRenderer}
      >
        {actions}
        {showThemeSelector && (
          <PaletteSelect theme={theme} onClick={setTheme} />
        )}
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
 * @param props - The properties for the GenericChart component, including chart options, event handlers, and custom actions.
 * @returns A React functional component that renders the chart within a ChartWrapper.
 *
 * @see {@link https://adarshpastakia.github.io/react-fabric/?path=/docs/charts-genericchart--docs} for more details on the properties.
 * @see {@link https://echarts.apache.org/en/option.html} for ECharts options documentation.
 * @see {@link https://echarts.apache.org/en/api.html#echartsInstance} for ECharts instance methods and properties.
 */
export const GenericChart: FC<GenericProps> = (props) => (
  <ChartWrapper>
    <GenericChartBase {...props} />
  </ChartWrapper>
);
