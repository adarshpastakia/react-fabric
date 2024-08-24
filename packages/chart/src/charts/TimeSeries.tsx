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
  CoreIcons,
  Divider,
  ToggleButtonGroup,
  useMemoDebugger,
} from "@react-fabric/core";
import { isEmpty } from "@react-fabric/utilities";
import { type EChartOption, type EChartsType } from "echarts";
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
    data,
    onExport,
    categoryAxisName,
    valueAxisName,
    title,
    theme: chartTheme,
    type: chartType = "column",
    onClick,
    onBrush,
  }: TimeSeriesProps) => {
    const chartRef = useRef<EChartsType>(null);
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
        chart.on("brushselected", (e: KeyValue) => {
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

    const options = useMemoDebugger<EChartOption>(
      () => {
        if (isEmpty(data)) {
          chartRef.current?.clear();
          return {};
        }

        const stack = type.includes("stacked") ? "stack" : undefined;

        const [_type, stacked] = type.split("-");
        const categoryAxis: AnyObject = {
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
        } as EChartOption.XAxis;
        const valueAxis: AnyObject = {
          name: valueAxisName,
          type: "value",
          nameGap: 32,
          nameLocation: "center",
        } as EChartOption.YAxis;

        const series = data?.map(
          (item) =>
            ({
              id: item.id,
              stack,
              areaStyle: stacked ? {} : undefined,
              symbol: "none",
              type: _type === "column" ? "bar" : _type,
              name: item.label ?? item.id,
              data: item.values,
              universalTransition: true,
            }) as AnyObject,
        );

        return {
          xAxis: categoryAxis,
          yAxis: valueAxis,
          series,
          brush: {
            toolbox: ["lineX", "clear"],
            brushType: "lineX",
            xAxisIndex: 0,
          },
          tooltip: {
            trigger: "axis",
            confine: true,
            position: "top",
          } as AnyObject,
        };
      },
      [data, type, categoryAxisName, valueAxisName],
      "TimeChart options",
    );

    return (
      <ChartContainer
        title={title}
        onExport={onExport}
        theme={theme}
        options={options}
        chartRef={chartRef}
        isEmpty={isEmpty(data)}
        emptyIcon={CoreIcons.chartColumn}
        dataTableRenderer={timeSeriesRenderer}
        onClick={(e) => onClick?.({ category: e.data[0], series: e.seriesId })}
      >
        <ToggleButtonGroup value={type} onChange={setType as AnyObject}>
          <Button
            size="sm"
            variant="link"
            icon={CoreIcons.chartLine}
            value="line"
            aria-label="line"
          />
          <Button
            size="sm"
            variant="link"
            icon={CoreIcons.chartColumn}
            value="column"
            aria-label="column"
          />
          <Button
            size="sm"
            variant="link"
            icon={CoreIcons.chartLineStacked}
            value="line-stacked"
            aria-label="line-stacked"
          />
          <Button
            size="sm"
            variant="link"
            icon={CoreIcons.chartColumnStacked}
            value="column-stacked"
            aria-label="column-stacked"
          />
        </ToggleButtonGroup>
        <Divider vertical />
        <PaletteSelect theme={theme} onClick={setTheme} />
      </ChartContainer>
    );
  },
);
TimeSeriesChart.displayName = "TimeSeriesChart";

/**
 * Chart to display simple data time series
 */
export const TimeSeries: FC<TimeSeriesProps> = (props) => (
  <ChartWrapper>
    <TimeSeriesChart {...props} />
  </ChartWrapper>
);
