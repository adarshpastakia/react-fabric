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
import { type EChartsOption, type EChartsType } from "echarts";
import { memo, useEffect, useRef, useState, type FC } from "react";
import { ChartPalette } from "../theme/palettes";
import { type BaseChart } from "../types";
import { countRenderer } from "../types/utils";
import { ChartContainer } from "../wrapper/ChartContainer";
import { ChartWrapper } from "../wrapper/ChartWrapper";

import { Button, ToggleButtonGroup, useMemoDebugger } from "@react-fabric/core";
import WorldMap from "../types/world.svg";
echarts.registerMap("world", { svg: WorldMap });

export interface MapSeriesProps extends BaseChart {
  series: Array<{ id: string; label?: string; count: number }>;
  onClick?: (key: string) => void;
}

const MapSeriesChart: FC<MapSeriesProps> = memo(
  ({
    series,
    onExport,
    theme: chartTheme,
    showTypeSelector,
    title,
    onClick,
  }: MapSeriesProps) => {
    const chartRef = useRef<EChartsType>(null);
    const [type, setType] = useState("map");
    const [zoom, setZoom] = useState(1.25);

    const options = useMemoDebugger<EChartsOption>(
      () => {
        if (isEmpty(series)) return {};

        const sorted = series
          .map((d) => ({
            ...d,
            label: d.label ?? Countries.name(d.id),
          }))
          .sort(compareValues("desc", "count"));
        const valueMap = series.map((d) => d.count);

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
      [series, title, type],
      "MapChart options",
    );

    useEffect(() => {
      setZoom(1.25);
    }, [series, type]);

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
        {showTypeSelector && (
          <ToggleButtonGroup value={type} onChange={setType as AnyObject}>
            <Button
              size="sm"
              variant="link"
              icon="icon-[mdi--map]"
              aria-label="map"
              value="map"
            />
            <Button
              size="sm"
              variant="link"
              icon="icon-[mdi--chart-bar] rotate-90 -scale-x-100"
              aria-label="column"
              value="column"
            />
          </ToggleButtonGroup>
        )}
      </ChartContainer>
    );
  },
);
MapSeriesChart.displayName = "MapSeriesChart";

/**
 * MapSeries component renders a map chart using ECharts.
 * It displays data on a world map, allowing users to visualize counts or other metrics by country.
 * It supports zooming and switching between map and column views.
 *
 * @param {MapSeriesProps} props - The properties for the MapSeries component.
 * @returns {JSX.Element} The rendered MapSeries component.
 *
 * @example
 * ```jsx
 * <MapSeries
 *   data={[
 *     { id: "US", label: "United States", count: 100 },
 *     { id: "IN", label: "India", count: 200 },
 *     { id: "CN", label: "China", count: 300 },
 *   ]}
 *   onExport={() => console.log("Exporting chart")}
 *   title="World Map Series"
 *   onClick={(key) => console.log("Clicked country:", key)}
 *   theme="light"
 * />
 * ```
 *
 * @see {@link https://adarshpastakia.github.io/react-fabric/?path=/docs/charts-mapseries--docs} for more details on the properties.
 * @see {@link https://echarts.apache.org/en/option.html#series-map} for ECharts map series options documentation.
 */
export const MapSeries: FC<MapSeriesProps> = (props) => (
  <ChartWrapper>
    <MapSeriesChart {...props} />
  </ChartWrapper>
);
