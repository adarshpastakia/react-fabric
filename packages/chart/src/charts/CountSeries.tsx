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
  type?: "pie" | "bar" | "column";
  onClick?: (key: string) => void;
}

const CountSeriesChart: FC<CountSeriesProps> = memo(
  ({
    data,
    title,
    onExport,
    theme: chartTheme,
    type: chartType = "pie",
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
        if (isEmpty(data)) {
          chartRef.current?.clear();
          return {};
        }

        const sorted = data?.sort(compareValues("desc", "count"));

        const categoryAxis: AnyObject = {
          type: "category",
          name: title ?? "Count Series",
          nameLocation: "center",
          axisTick: {
            show: false,
          },
          data: [],
        } as EChartOption.XAxis;
        const valueAxis: AnyObject = {
          type: "value",
          axisLabel: {
            formatter: (val: AnyObject) => Format.number(val),
          },
        } as EChartOption.YAxis;

        const series =
          type === "pie"
            ? [
                {
                  type: "pie",
                  name: title ?? "Count Series",
                  data: sorted.map((item, index) => ({
                    id: item.id,
                    value: item.count,
                    name: item.label ?? item.id,
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
                    name: title ?? "Count Series",
                    value: item.count,
                  },
                ],
                name: item.label ?? item.id,
                universalTransition: true,
              }));
        return {
          series,
          countSeries: true,
          xAxis:
            type === "pie" ? null : type === "bar" ? valueAxis : categoryAxis,
          yAxis:
            type === "pie" ? null : type === "bar" ? categoryAxis : valueAxis,
        };
      },
      [data, title, type],
      "CountChart options",
    );

    return (
      <ChartContainer
        title={title}
        onExport={onExport}
        theme={theme}
        options={options}
        chartRef={chartRef}
        isEmpty={isEmpty(data)}
        emptyIcon={CoreIcons.chartPie}
        dataTableRenderer={countRenderer}
        onClick={(e) => onClick?.(e.data.id ?? e.seriesId)}
      >
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
        <Divider vertical />
        <PaletteSelect theme={theme} onClick={setTheme} />
      </ChartContainer>
    );
  },
);
CountSeriesChart.displayName = "CountSeriesChart";

/**
 * Chart to display simple data count series
 */
export const CountSeries: FC<CountSeriesProps> = (props) => (
  <ChartWrapper>
    <CountSeriesChart {...props} />
  </ChartWrapper>
);
