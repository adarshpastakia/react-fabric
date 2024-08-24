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
  useDebounce,
  useEffectDebugger,
  useMemoDebugger,
} from "@react-fabric/core";
import { isEmpty } from "@react-fabric/utilities";
import { endOfDay, startOfDay } from "date-fns";
import { type EChartOption, type EChartsType } from "echarts";
import { memo, useCallback, useEffect, useRef, useState, type FC } from "react";
import { type BaseChart } from "../types";
import { ChartContainer } from "../wrapper/ChartContainer";
import { ChartWrapper } from "../wrapper/ChartWrapper";

export interface TimeSliderProps extends BaseChart {
  data: Array<[Date, number]>;
  range?: { start: Date; end: Date };
  onBrush?: (range: { start: Date; end: Date }) => void;
}

const TimeSliderChart: FC<TimeSliderProps> = memo(
  ({ data, range: sliderRange, onBrush }: TimeSliderProps) => {
    const chartRef = useRef<EChartsType>(null);

    const [range, setRange] = useState({ startValue: 0, endValue: 0 });

    const handleBrush = useDebounce(
      (range: AnyObject) => onBrush?.(range),
      [onBrush],
      100,
    );

    useEffect(() => {
      const defaultStart = data.length > 0 ? data?.[0]?.[0]?.getTime() : 0;
      const defaultEnd =
        data.length > 0 ? data?.[data.length - 1]?.[0]?.getTime() : 32;

      const getRangeValue = (v: number = 0, def = 0) =>
        v >= defaultStart && v <= defaultEnd ? v : def;
      setRange({
        startValue: getRangeValue(sliderRange?.start.getTime(), defaultStart),
        endValue: getRangeValue(sliderRange?.end.getTime(), defaultEnd),
      });
    }, [sliderRange, data]);

    const enableBrush = useCallback(() => {
      chartRef.current?.dispatchAction({
        type: "restore",
      });
      chartRef.current?.dispatchAction({
        type: "takeGlobalCursor",
        key: "dataZoomSelect",
        // Activate or inactivate.
        dataZoomSelectActive: true,
      });
    }, []);

    useEffectDebugger(
      () => {
        const chart = chartRef.current;
        if (chart && !chart?.isDisposed()) {
          enableBrush();
          chart.on("datazoom", () => {
            const zoom = chart.getOption().dataZoom?.[0];
            if (zoom) {
              const startValue = Math.floor(zoom.startValue as number);
              const endValue = Math.ceil(
                (zoom.endValue as number) + (24 * 60 * 60 * 1000 - 1),
              );
              handleBrush({
                start: startOfDay(new Date(startValue)),
                end: endOfDay(new Date(endValue)),
              });
              setRange({ startValue, endValue });
            }
          });
          return () => {
            !chart.isDisposed() && chart.off("datazoom");
          };
        }
      },
      [chartRef.current, handleBrush],
      "TimeSldier onBrush",
    );

    const options = useMemoDebugger<EChartOption>(
      () => {
        if (isEmpty(data)) {
          chartRef.current?.clear();
          return {};
        }

        const categoryAxis: AnyObject = {
          type: "time",
          nameGap: 0,
          nameLocation: "center",
          axisTick: {
            show: false,
          },
          axisLabel: {
            inside: true,
          },
          axisLine: {
            show: false,
          },
          position: "bottom",
        } as EChartOption.XAxis;
        const valueAxis: AnyObject = {
          type: "value",
          nameGap: 24,
          axisLabel: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            show: false,
          },
          nameLocation: "center",
        } as EChartOption.YAxis;

        const series = [
          {
            areaStyle: {},
            symbol: "none",
            type: "line",
            smooth: true,
            lineStyle: { width: 2 },
            data,
          } as AnyObject,
        ];

        return {
          grid: {
            top: 4,
            left: 0,
            right: 0,
            bottom: "50%",
          },
          xAxis: categoryAxis,
          yAxis: valueAxis,
          series,
          toolbox: {
            itemSize: 0,
            feature: {
              dataZoom: {
                yAxisIndex: "none",
              },
            },
          },
          legend: {
            show: false,
          },
          dataZoom: [
            {
              type: "slider",
              height: "45%",
              bottom: 4,
              left: 2,
              right: 8,
              ...range,
            },
          ],
          tooltip: {
            trigger: "axis",
            confine: true,
            position: "top",
          } as AnyObject,
        };
      },
      [data],
      "TimeSlider options",
    );

    useEffect(() => {
      setTimeout(() => {
        chartRef.current?.setOption({
          dataZoom: [
            {
              type: "slider",
              height: "45%",
              bottom: 4,
              left: 2,
              right: 8,
              ...range,
            } as AnyObject,
          ],
        });
      }, 50);
    }, [chartRef.current, range]);

    return (
      <ChartContainer
        options={options}
        chartRef={chartRef}
        isEmpty={isEmpty(data)}
      />
    );
  },
);
TimeSliderChart.displayName = "TimeSliderChart";

/**
 * Chart to display time scale data with zoom and brush */
export const TimeSlider: FC<TimeSliderProps> = (props) => (
  <ChartWrapper>
    <TimeSliderChart {...props} />
  </ChartWrapper>
);
