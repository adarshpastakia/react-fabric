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
import { compareValues, Format, isEmpty } from "@react-fabric/utilities";
import { type EChartOption, type EChartsType } from "echarts";
import { memo, useEffect, useRef, useState, type FC } from "react";
import { type BaseChart, type CountType } from "../types";
import { countRenderer } from "../types/utils";
import { ChartContainer } from "../wrapper/ChartContainer";
import { ChartWrapper } from "../wrapper/ChartWrapper";
import { PaletteSelect } from "../wrapper/PaletteSelect";

export interface CountSeriesProps extends BaseChart, CountType {
  seriesName?: string;
  type?: "pie" | "bar" | "column";
  onClick?: (key: string) => void;
}

const CountSeriesChart: FC<CountSeriesProps> = memo(
  ({
    series: _series,
    title,
    seriesName,
    onExport,
    theme: chartTheme,
    type: chartType = "pie",
    options: optionOverride,
    showThemeSelector,
    showTypeSelector,
    onClick,
  }: CountSeriesProps) => {
    const chartRef = useRef<EChartsType>(null);
    const [type, setType] = useState(chartType);
    const [theme, setTheme] = useState(chartTheme);

    useEffect(() => {
      setType(chartType);
    }, [chartType]);
    useEffect(() => {
      setTheme(chartTheme);
    }, [chartTheme]);

    const options = useMemoDebugger<EChartOption>(
      () => {
        if (isEmpty(_series)) {
          chartRef.current?.clear();
          return {};
        }

        const sorted = _series?.sort(compareValues("desc", "count"));

        const categoryAxis: AnyObject = Object.assign(
          {},
          optionOverride?.xAxis,
          {
            type: "category",
            name: seriesName ?? "Count Series",
            nameLocation: "center",
            axisTick: {
              show: false,
            },
            data: [],
          } as EChartOption.XAxis,
        );
        const valueAxis: AnyObject = Object.assign({}, optionOverride?.yAxis, {
          type: "value",
          axisLabel: {
            formatter: (val: AnyObject) => Format.number(val),
          },
        } as EChartOption.YAxis);

        const series =
          type === "pie"
            ? [
                {
                  type: "pie",
                  name: seriesName ?? "Count Series",
                  data: sorted.map((item, index) => ({
                    id: item.id,
                    value: item.count,
                    name: item.name ?? item.id,
                  })),
                  universalTransition: true,
                },
              ]
            : sorted.map((item, index) => ({
                id: item.id,
                type: "bar",
                label: {
                  show: true,
                  rotate: type === "column" ? 90 : 0,
                  formatter: "{a}",
                  position: "inside",
                  color: "#fff",
                },
                data: [
                  {
                    name: seriesName ?? "Count Series",
                    value: item.count,
                  },
                ],
                name: item.label ?? item.id,
                universalTransition: true,
              }));
        return {
          ...optionOverride,
          series,
          countSeries: true,
          xAxis:
            type === "pie" ? null : type === "bar" ? valueAxis : categoryAxis,
          yAxis:
            type === "pie" ? null : type === "bar" ? categoryAxis : valueAxis,
        };
      },
      [_series, name, type, optionOverride],
      "CountChart options",
    );

    return (
      <ChartContainer
        title={title}
        onExport={onExport}
        theme={theme}
        options={options}
        chartRef={chartRef}
        isEmpty={isEmpty(_series)}
        emptyIcon={CoreIcons.chartPie}
        dataTableRenderer={countRenderer}
        onClick={(e) => onClick?.(e.data.id ?? e.seriesId)}
      >
        {showTypeSelector && (
          <ToggleButtonGroup value={type} onChange={setType as AnyObject}>
            <Button
              size="sm"
              variant="link"
              value="pie"
              aria-label="pie"
              icon={CoreIcons.chartPie}
            />
            <Button
              size="sm"
              variant="link"
              value="column"
              aria-label="column"
              icon={CoreIcons.chartColumn}
            />
            <Button
              size="sm"
              variant="link"
              value="bar"
              aria-label="bar"
              icon={CoreIcons.chartBar}
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
CountSeriesChart.displayName = "CountSeriesChart";

/**
 * CountSeries component renders a chart that displays counts of items in various formats.
 * It supports pie, bar, and column charts.
 * It can be used to visualize the distribution of counts across different categories.
 * It allows users to switch between different types of visualizations and customize the color palette used in the chart.
 *
 * @param {CountSeriesProps} props - The properties for the CountSeries component.
 * @returns {JSX.Element} The rendered CountSeries component.
 *
 * @example
 * ```jsx
 * <CountSeries
 *   data={[
 *     { id: "A", label: "Category A", count: 10 },
 *     { id: "B", label: "Category B", count: 20 },
 *     { id: "C", label: "Category C", count: 30 },
 *   ]}
 *   title="Count Distribution"
 *   onExport={() => console.log("Exporting chart data")}
 *   theme="light"
 *   type="pie"
 *   onClick={(key) => console.log("Clicked on:", key)}
 * />
 * ```
 *
 * @see {@link https://adarshpastakia.github.io/react-fabric/?path=/docs/charts-countseries--docs} for more details on the properties.
 * @see {@link https://echarts.apache.org/en/option.html#series-pie} for more details on the ECharts pie series options.
 * @see {@link https://echarts.apache.org/en/option.html#series-bar} for more details on the ECharts bar series options.
 */
export const CountSeries: FC<CountSeriesProps> = (props) => (
  <ChartWrapper>
    <CountSeriesChart {...props} />
  </ChartWrapper>
);
