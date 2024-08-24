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
  compareValues,
  Countries,
  Format,
  isEmpty,
} from "@react-fabric/utilities";
import * as echarts from "echarts";
import { type EChartOption, type EChartsType } from "echarts";
import { memo, useEffect, useRef, useState, type FC } from "react";
import { ChartPalette } from "../theme/palettes";
import { type BaseChart, type CountType } from "../types";
import { countRenderer } from "../types/utils";
import { ChartContainer } from "../wrapper/ChartContainer";
import { ChartWrapper } from "../wrapper/ChartWrapper";

import {
  Button,
  CoreIcons,
  ToggleButtonGroup,
  useMemoDebugger,
} from "@react-fabric/core";
import WorldMap from "../types/world.svg";
echarts.registerMap("world", { svg: WorldMap });

export interface MapSeriesProps extends BaseChart, CountType {
  onClick?: (key: string) => void;
}

const MapSeriesChart: FC<MapSeriesProps> = memo(
  ({ data, onExport, theme: chartTheme, title, onClick }: MapSeriesProps) => {
    const chartRef = useRef<EChartsType>(null);
    const [type, setType] = useState("map");
    const [zoom, setZoom] = useState(1.25);

    const options = useMemoDebugger<EChartOption>(
      () => {
        if (isEmpty(data)) return {};

        const sorted = data
          .map((d) => ({
            ...d,
            label: d.label ?? Countries.name(d.id),
          }))
          .sort(compareValues("desc", "count"));
        const valueMap = data.map((d) => d.count);

        if (type === "column") {
          return {
            xAxis: {
              type: "category",
              nameLocation: "center",
              axisTick: {
                show: false,
              },
              axisLabel: {
                rotate: 30,
              },
              data: [],
            },
            yAxis: {
              type: "value",
              axisLabel: {
                formatter: (val: AnyObject) => Format.number(val),
              },
            },
            series: sorted.map((item, index) => ({
              id: item.id + index,
              type: "bar",
              label: {
                show: true,
                rotate: 90,
                formatter: "{a}",
                position: "inside",
                color: "#fff",
              },
              data: [
                {
                  value: item.count,
                },
              ],
              name: item.label ?? item.id,
              universalTransition: true,
            })),
          } as AnyObject;
        }

        return {
          legend: {
            show: false,
          },
          visualMap: {
            type: "piecewise",
            min: Math.min(...valueMap) - 1,
            max: Math.max(...valueMap) + 1,
            show: false,
            color: [...ChartPalette.Heatmap],
            calculable: true,
            orient: "horizontal",
            left: "center",
            bottom: 48,
          } as AnyObject,
          series: [
            {
              id: "mapseries",
              name: title ?? "Map Series",
              type: "map",
              map: "world",
              aspectScale: 1,
              roam: "move",
              colorBy: "data",
              nameProperty: "name",
              universalTransition: true,
              emphasis: {
                label: { show: false },
              },
              select: {
                disabled: true,
              },
              data: sorted.map(({ id, label: name, count: value }) => ({
                id,
                name,
                value,
              })),
            },
          ],
        };
      },
      [data, title, type],
      "MapChart options",
    );

    useEffect(() => {
      setZoom(1.25);
    }, [data, type]);

    useEffect(() => {
      chartRef.current?.setOption({
        series: [
          {
            zoom,
          },
        ],
      });
    }, [zoom]);

    return (
      <ChartContainer
        title={title}
        onExport={onExport}
        chartRef={chartRef}
        options={options}
        dataTableRenderer={countRenderer}
        onClick={(e) => e.data && onClick?.(e?.data?.id ?? "")}
      >
        {type === "map" && (
          <input
            type="range"
            min={1.25}
            max={24}
            step={0.25}
            value={zoom}
            onChange={(e) => setZoom(e.target.valueAsNumber)}
          />
        )}
        <ToggleButtonGroup value={type} onChange={setType as AnyObject}>
          <Button
            size="sm"
            variant="link"
            icon={CoreIcons.map}
            aria-label="map"
            value="map"
          />
          <Button
            size="sm"
            variant="link"
            icon={CoreIcons.chartColumn}
            aria-label="column"
            value="column"
          />
        </ToggleButtonGroup>
      </ChartContainer>
    );
  },
);
MapSeriesChart.displayName = "MapSeriesChart";

/**
 * Chart to display simple map data series
 */
export const MapSeries: FC<MapSeriesProps> = (props) => (
  <ChartWrapper>
    <MapSeriesChart {...props} />
  </ChartWrapper>
);
