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
import { type EChartsOption, type EChartsType } from "echarts";
import { memo, useEffect, useRef, useState, type FC } from "react";
import { type BaseChart, type SeriesType } from "../types";
import { seriesRenderer } from "../types/utils";
import { ChartContainer } from "../wrapper/ChartContainer";
import { ChartWrapper } from "../wrapper/ChartWrapper";
import { PaletteSelect } from "../wrapper/PaletteSelect";

export interface DataSeriesProps extends BaseChart, SeriesType {
  type?:
    | "column"
    | "line"
    | "bar"
    | "radar"
    | "line-stacked"
    | "column-stacked"
    | "bar-stacked";
  onClick?: (data: { category: string; series: string }) => void;
}

const DataSeriesChart: FC<DataSeriesProps> = memo(
  ({
    series: _series,
    onExport,
    categories,
    categoryAxisName,
    valueAxisName,
    title,
    options: optionOverride,
    showThemeSelector,
    showTypeSelector,
    theme: chartTheme,
    type: chartType = "column",
    onClick,
  }: DataSeriesProps) => {
    const chartRef = useRef<EChartsType>(null);
    const [type, setType] = useState(chartType);
    const [theme, setTheme] = useState(chartTheme);

    useEffect(() => {
      setType(chartType);
    }, [chartType]);
    useEffect(() => {
      setTheme(chartTheme);
    }, [chartTheme]);

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
          _type === "radar"
            ? undefined
            : ({
                name: categoryAxisName,
                type: "category",
                nameGap: 32,
                nameLocation: "center",
                axisTick: {
                  show: false,
                },
                data: categories,
              } as EChartsOption["xAxis"]),
        );
        const valueAxis: AnyObject = Object.assign(
          {},
          optionOverride?.yAxis,
          _type === "radar"
            ? undefined
            : ({
                name: valueAxisName,
                type: "value",
                nameGap: 32,
                nameLocation: "center",
              } as EChartsOption["yAxis"]),
        );
        const radar =
          _type !== "radar"
            ? undefined
            : Object.assign({}, optionOverride?.radar, {
                shape: "circle",
                indicator: categories?.map((c) => ({ name: c })),
              } as AnyObject);

        const series = _series?.map((item, index) => ({
          ...item,
          stack: item.stack ?? stack,
          areaStyle: stacked ? {} : undefined,
          type: _type === "column" ? "bar" : _type,
          name: item.label ?? item.id,
          universalTransition: true,
          data:
            _type === "radar"
              ? [
                  {
                    value: item.data,
                    id: item.id,
                    name: item.name ?? item.id,
                  },
                ]
              : item.data,
        }));

        return {
          ...optionOverride,
          xAxis: type.startsWith("bar") ? valueAxis : categoryAxis,
          yAxis: type.startsWith("bar") ? categoryAxis : valueAxis,
          radar,
          series,
          tooltip: Object.assign(
            {
              trigger: _type === "radar" ? "item" : "axis",
              confine: true,
              position: "top",
              appendToBody: true,
            } as AnyObject,
            optionOverride?.tooltip,
          ),
        };
      },
      [
        _series,
        type,
        categories,
        categoryAxisName,
        valueAxisName,
        optionOverride,
      ],
      "DataChart options",
    );

    return (
      <ChartContainer
        title={title}
        onExport={onExport}
        theme={theme}
        options={options}
        chartRef={chartRef}
        isEmpty={isEmpty(_series)}
        emptyIcon={CoreIcons.chartColumn}
        dataTableRenderer={seriesRenderer}
        onClick={(e) => onClick?.({ category: e.name, series: e.seriesId })}
      >
        {showTypeSelector && (
          <ToggleButtonGroup value={type} onChange={setType as AnyObject}>
            <Button
              size="sm"
              variant="link"
              icon={CoreIcons.chartLine}
              aria-label="line"
              value="line"
            />
            <Button
              size="sm"
              variant="link"
              icon={CoreIcons.chartColumn}
              aria-label="column"
              value="column"
            />
            <Button
              size="sm"
              variant="link"
              icon={CoreIcons.chartBar}
              aria-label="bar"
              value="bar"
            />
            <Button
              size="sm"
              variant="link"
              icon={CoreIcons.chartRadar}
              aria-label="radar"
              value="radar"
            />
            <Button
              size="sm"
              variant="link"
              icon={CoreIcons.chartLineStacked}
              aria-label="line-stacked"
              value="line-stacked"
            />
            <Button
              size="sm"
              variant="link"
              icon={CoreIcons.chartColumnStacked}
              aria-label="column-stacked"
              value="column-stacked"
            />
            <Button
              size="sm"
              variant="link"
              icon={CoreIcons.chartBarStacked}
              aria-label="bar-stacked"
              value="bar-stacked"
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
DataSeriesChart.displayName = "DataSeriesChart";

/**
 * DataSeries component renders a chart for visualizing data series.
 * It supports various chart types such as column, line, bar, radar, and stacked variants.
 * It allows users to click on data points to trigger custom actions.
 *
 * @param {DataSeriesProps} props - The properties for the DataSeries component.
 * @returns {JSX.Element} The rendered DataSeries component.
 *
 * @example
 * ```jsx
 * <DataSeries
 *   data={[{ id: "1", label: "Series 1", values: [10, 20, 30] }]}
 *   categories={["Category 1", "Category 2", "Category 3"]}
 *   categoryAxisName="Categories"
 *   valueAxisName="Values"
 *   title="Data Series Example"
 *   type="column"
 *   onClick={(data) => console.log("Clicked data:", data)}
 *   onExport={() => console.log("Exporting chart data")}
 *   theme="light"
 * />
 * ```
 *
 * @see {@link https://adarshpastakia.github.io/react-fabric/?path=/docs/charts-dataseries--docs} for more details on the properties.
 * @see {@link https://echarts.apache.org/en/option.html#series-bar} for ECharts bar series options.
 * @see {@link https://echarts.apache.org/en/option.html#series-line} for ECharts line series options.
 * @see {@link https://echarts.apache.org/en/option.html#series-radar} for ECharts radar series options.
 */
export const DataSeries: FC<DataSeriesProps> = (props) => (
  <ChartWrapper>
    <DataSeriesChart {...props} />
  </ChartWrapper>
);
