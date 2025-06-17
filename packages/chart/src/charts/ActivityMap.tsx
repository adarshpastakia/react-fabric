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
import { isArray, isEmpty } from "@react-fabric/utilities";
import { type EChartOption, type EChartsType } from "echarts";
import { memo, useEffect, useRef, useState, type FC } from "react";
import { ChartPalette } from "../theme/palettes";
import { type BaseChart } from "../types";
import { activityRenderer } from "../types/utils";
import { ChartContainer } from "../wrapper/ChartContainer";
import { ChartWrapper } from "../wrapper/ChartWrapper";
import { PaletteSelect } from "../wrapper/PaletteSelect";
import { E } from "react-router/dist/development/register-DCE0tH5m";

export interface ActivityMapProps extends BaseChart {
  heatmapPalette?: string[];
  data: Array<Array<[low: number, high: number, count: number]>>;
  time?: "day-hour" | "month-day";
  type?: "scatter" | "heatmap";
  /**
   * day/month names
   */
  highLabels?: string[];
  /**
   * hours/day names
   */
  lowLabels?: string[];
  onClick?: (highIndex: number, lowIndex: number) => void;
}

const DAY_HOUR = {
  high: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  low: [
    "12a",
    "1a",
    "2a",
    "3a",
    "4a",
    "5a",
    "6a",
    "7a",
    "8a",
    "9a",
    "10a",
    "11a",
    "12p",
    "1p",
    "2p",
    "3p",
    "4p",
    "5p",
    "6p",
    "7p",
    "8p",
    "9p",
    "10p",
    "11p",
  ],
};
const MONTH_DAY = {
  high: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  low: [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
  ],
};

const ActivityMapChart = memo(
  ({
    data = [],
    title,
    onExport,
    theme: chartTheme = "activity",
    heatmapPalette,
    highLabels,
    lowLabels,
    showThemeSelector,
    showTypeSelector,
    time = "day-hour",
    type: chartType = "scatter",
    onClick,
  }: ActivityMapProps) => {
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
        const defaultMap = time === "day-hour" ? DAY_HOUR : MONTH_DAY;

        const options: EChartOption = {
          series: [],
        };

        if (isEmpty(data)) return {};

        options.xAxis = {
          type: "category",
          data: lowLabels ?? defaultMap.low,
          boundaryGap: type === "heatmap",
          splitLine: {
            show: true,
          },
          axisLine: {
            show: false,
          },
        };
        options.yAxis = {
          type: "category",
          axisLabel: {
            margin: 16,
          },
          data: highLabels ?? defaultMap.high,
          axisLine: {
            show: false,
          },
        };
        options.series = data.map((points, index) => {
          const total = points.reduce((t, p) => t + p[2], 0);
          return {
            id: `${index}`,
            name: defaultMap.high[index],
            type,
            symbolSize: function (dataItem: number[]) {
              return dataItem[2] === 0
                ? 0
                : Math.min(Math.max(4, (dataItem[2] / total) * 256), 48);
            },
            data: points,
            universalTransition: true,
          } as EChartOption.SeriesScatter;
        });

        if (type === "heatmap") {
          const dataPoints = data.map((points) =>
            Math.max(...points.map((pt) => pt[2])),
          );
          options.grid = {
            top: 32,
            bottom: 64,
          };
          options.legend = {
            show: false,
          };
          options.visualMap = [
            {
              type: "piecewise",
              min: 1,
              show: type === "heatmap",
              max: Math.max(...dataPoints),
              // calculable: true,inRange:
              orient: "horizontal",
              left: "center",
              bottom: 4,
            },
          ];
          if (heatmapPalette) {
            options.visualMap[0].inRange = {
              color: heatmapPalette,
            };
          }
        }

        return {
          grid: {
            top: 32,
            bottom: 64,
          },
          tooltip: {
            trigger: "item",
            confine: true,
            position: "top",
            appendToBody: true,
            valueFormatter: (c: AnyObject) => {
              return isArray(c) ? c[2] : c;
            },
          } as AnyObject,
          ...options,
        };
      },
      [data, title, type, heatmapPalette],
      "ActivityChart options",
    );

    return (
      <ChartContainer
        title={title}
        onExport={onExport}
        theme={theme}
        options={options}
        chartRef={chartRef}
        isEmpty={isEmpty(data)}
        emptyIcon={CoreIcons.chartActivityScatter}
        dataTableRenderer={activityRenderer}
        onClick={(e) => onClick?.(e.seriesIndex, e.dataIndex)}
      >
        {showTypeSelector && (
          <ToggleButtonGroup value={type} onChange={setType as AnyObject}>
            <Button
              size="sm"
              variant="link"
              value="scatter"
              aria-label="scatter"
              icon={CoreIcons.chartActivityScatter}
            />
            <Button
              size="sm"
              variant="link"
              value="heatmap"
              aria-label="heatmap"
              icon={CoreIcons.chartActivityCalendar}
            />
          </ToggleButtonGroup>
        )}
        {showTypeSelector && showThemeSelector && <Divider vertical />}
        {showThemeSelector && (
          <PaletteSelect
            theme={theme}
            onClick={setTheme}
            defaultTheme="activity"
          />
        )}
      </ChartContainer>
    );
  },
);
ActivityMapChart.displayName = "ActivityMapChart";

/**
 * ActivityMap component renders a chart that visualizes activity data
 * over time, using either a scatter plot or a heatmap.
 * It allows users to switch between different types of visualizations
 * and customize the color palette used in the chart.
 *
 * @param {ActivityMapProps} props - The properties for the ActivityMap component.
 * @returns {JSX.Element} The rendered ActivityMap component.
 *
 * @example
 * ```jsx
 * <ActivityMap
 *   data={activityData}
 *   time="day-hour"
 *   type="heatmap"
 *   heatmapPalette={["#f0f8ff", "#faebd7", "#00ffff", "#7fffd4"]}
 *   highLabels={["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]}
 *   lowLabels={["12a", "1a", "2a", "3a", "4a", "5a", "6a", "7a", "8a", "9a", "10a", "11a", "12p", "1p", "2p", "3p", "4p", "5p", "6p", "7p", "8p", "9p", "10p", "11p"]}
 *   onClick={(highIndex, lowIndex) => console.log(`Clicked on: ${highIndex}, ${lowIndex}`)}
 * />
 * ```
 * @see {@link https://adarshpastakia.github.io/react-fabric/?path=/docs/charts-activitymap--docs} for more details on the properties.
 * @see {@link https://echarts.apache.org/en/option.html#series-scatter} for more details on the ECharts scatter series.
 */
export const ActivityMap: FC<ActivityMapProps> = (props) => (
  <ChartWrapper>
    <ActivityMapChart {...props} />
  </ChartWrapper>
);
