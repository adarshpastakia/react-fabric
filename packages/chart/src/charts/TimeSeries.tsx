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
  Button,
  Divider,
  ToggleButtonGroup,
  useMemoDebugger,
} from "@react-fabric/core";
import { isEmpty } from "@react-fabric/utilities";
import { type ECharts, type EChartsOption } from "echarts";
import { memo, useCallback, useEffect, useRef, useState, type FC } from "react";
import { type BaseChart, type TimeSeriesType } from "../types";
import { timeSeriesRenderer } from "../types/utils";
import { ChartContainer } from "../wrapper/ChartContainer";
import { ChartWrapper } from "../wrapper/ChartWrapper";
import { PaletteSelect } from "../wrapper/PaletteSelect";

export interface TimeSeriesProps extends BaseChart, TimeSeriesType {
  type?: "line" | "column" | "line-stacked" | "column-stacked";
  onClick?: (data: { category: string; series: string }) => void;
  onBrush?: (range: { start: Date; end: Date }) => void;
}

const TimeSeriesChart: FC<TimeSeriesProps> = memo(
  ({
    series: _series,
    onExport,
    categoryAxisName,
    valueAxisName,
    title,
    showThemeSelector,
    showTypeSelector,
    theme: chartTheme,
    type: chartType = "column",
    options: optionOverride,
    onClick,
    onBrush,
  }: TimeSeriesProps) => {
    const chartRef = useRef<ECharts>(null);
    const [type, setType] = useState(chartType);
    const [theme, setTheme] = useState(chartTheme);

    useEffect(() => {
      setType(chartType);
    }, [chartType]);
    useEffect(() => {
      setTheme(chartTheme);
    }, [chartTheme]);

    const enableBrush = useCallback(() => {
      chartRef.current?.dispatchAction({
        type: "restore",
      });
      chartRef.current?.dispatchAction({
        type: "takeGlobalCursor",
        // If intending to enable brush, must set. Otherwise, the mouse will be disabled to brush.
        key: "brush",
        brushOption: {
          // See more info in the `brushType` of "brush component".
          // If set as `false`, the mouse is disabled to brush.
          brushType: "lineX",
          // See more info in the `brushModel` of "brush component".
          // IF not set, use the `brushMode` of brush component.
          brushMode: "rect",
        },
      });
    }, []);

    useEffect(() => {
      const chart = chartRef.current;
      if (chart && !chart?.isDisposed()) {
        enableBrush();
        let range = [0, 0];
        chart.on("brushselected", (e: any) => {
          range = e.batch?.[0]?.areas?.[0]?.coordRange;
        });
        chart.on("brushEnd", () => {
          onBrush?.({ start: new Date(range?.[0]), end: new Date(range?.[1]) });
          enableBrush();
        });
        return () => {
          !chart.isDisposed() && chart.off("brushEnd");
          !chart.isDisposed() && chart.off("brushselected");
        };
      }
    }, [chartRef.current, onBrush]);

    const options = useMemoDebugger<EChartsOption>(
      () => {
        if (isEmpty(_series)) {
          chartRef.current?.clear();
          return {};
        }

        const stack = type.includes("stacked") ? "stack" : undefined;

        const [_type, stacked] = type.split("-");
        const categoryAxis: AnyObject = Object.assign(
          {},
          optionOverride?.xAxis,
          {
            name: categoryAxisName,
            type: "time",
            nameGap: 32,
            nameLocation: "center",
            axisTick: {
              show: false,
            },
            axisLabel: {
              formatter: {
                year: "{yyyy}",
                month: "{MMM}",
                day: "{d}",
                hour: "{HH}:{mm}",
                minute: "{HH}:{mm}",
                second: "{HH}:{mm}:{ss}",
                millisecond: "{hh}:{mm}:{ss} {SSS}",
                none: "{yyyy}-{MM}-{dd} {hh}:{mm}:{ss} {SSS}",
              } as AnyObject,
            },
          } as EChartsOption["xAxis"],
        );
        const valueAxis: AnyObject = Object.assign({}, optionOverride?.yAxis, {
          name: valueAxisName,
          type: "value",
          nameGap: 32,
          nameLocation: "center",
        } as EChartsOption["yAxis"]);

        const series = _series?.map(
          (item) =>
            ({
              ...item,
              stack: item.stack ?? stack,
              areaStyle: stacked ? {} : undefined,
              symbol: "none",
              type: _type === "column" ? "bar" : _type,
              name: item.name ?? item.id,
              universalTransition: true,
            }) as AnyObject,
        );

        return {
          brush: {
            toolbox: ["lineX", "clear"],
            brushType: "lineX",
            xAxisIndex: 0,
          },
          ...optionOverride,
          tooltip: Object.assign(
            {
              trigger: "axis",
              confine: true,
              position: "top",
              appendTo: "body",
            },
            optionOverride?.tooltip,
          ),
          xAxis: categoryAxis,
          yAxis: valueAxis,
          series,
        };
      },
      [_series, type, categoryAxisName, valueAxisName, optionOverride],
      "TimeChart options",
    );

    return (
      <ChartContainer
        title={title}
        onExport={onExport}
        theme={theme}
        options={options}
        chartRef={chartRef}
        isEmpty={isEmpty(_series)}
        emptyIcon="icon-[mdi--chart-bar] rotate-90 -scale-x-100"
        dataTableRenderer={timeSeriesRenderer}
        onClick={(e) => onClick?.({ category: e.data[0], series: e.seriesId })}
      >
        {showTypeSelector && (
          <ToggleButtonGroup value={type} onChange={setType as AnyObject}>
            <Button
              size="sm"
              variant="link"
              icon="icon-[mdi--chart-line]"
              value="line"
              aria-label="line"
            />
            <Button
              size="sm"
              variant="link"
              icon="icon-[mdi--chart-bar]"
              value="column"
              aria-label="column"
            />
            <Button
              size="sm"
              variant="link"
              icon="icon-[mdi--chart-line-stacked]"
              value="line-stacked"
              aria-label="line-stacked"
            />
            <Button
              size="sm"
              variant="link"
              icon="icon-[mdi--chart-bar-stacked]"
              value="column-stacked"
              aria-label="column-stacked"
            />
          </ToggleButtonGroup>
        )}
        {showTypeSelector && showThemeSelector && <Divider vertical />}
        {showThemeSelector && (
          <PaletteSelect theme={theme} onClick={setTheme} />
        )}
      </ChartContainer>
    );
  },
);
TimeSeriesChart.displayName = "TimeSeriesChart";

/**
 * TimeSeries component renders a time series chart using the provided data and options.
 * It supports different chart types such as line, column, and stacked variants.
 * It also allows for interaction through click and brush events.
 *
 * @param {TimeSeriesProps} props - The properties for the TimeSeries component.
 * @returns {JSX.Element} The rendered TimeSeries component.
 *
 * @example
 * ```jsx
 * <TimeSeries
 *   data={data}
 *   onExport={handleExport}
 *   categoryAxisName="Time"
 *   valueAxisName="Value"
 *   title="Time Series Chart"
 *   type="line"
 *   onClick={(data) => console.log(data)}
 *   onBrush={(range) => console.log(range)}
 * />
 * ```
 *
 * @see {@link https://adarshpastakia.github.io/react-fabric/?path=/docs/charts-timeseries--docs} for more details on the properties.
 * @see {@link https://echarts.apache.org/en/option.html#series-line} for more details on the ECharts line series options.
 * @see {@link https://echarts.apache.org/en/option.html#series-bar} for more details on the ECharts bar series options.
 */
export const TimeSeries: FC<TimeSeriesProps> = (props) => (
  <ChartWrapper>
    <TimeSeriesChart {...props} />
  </ChartWrapper>
);
