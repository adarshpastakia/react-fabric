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
  EmptyContent,
  Title,
  useIsDark,
  useResizeObserver,
} from "@react-fabric/core";
import { type SizeObject } from "@react-fabric/core/dist/types/types";
import classNames from "classnames";
import { type EChartOption, type EChartsType } from "echarts";
import "echarts-wordcloud";
import {
  Fragment,
  memo,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useState,
  type RefObject,
} from "react";
import { type Theme } from "../types";
import echarts from "../types/charts";
import classes from "./Chart.module.css";
import { ChartToolbar } from "./ChartToolbar";

const defaultOptions = {
  grid: {
    top: 32,
    left: 64,
    right: 32,
    bottom: 72,
  },
  tooltip: {
    trigger: "item",
    confine: true,
    position: "top",
  } as AnyObject,
  legend: {
    type: "scroll",
    bottom: 0,
  } as AnyObject,
};
const toolboxOptions = (renderer: AnyObject) => ({
  show: true,
  feature: {
    dataView: {
      show: true,
      readOnly: true,
      textareaBorderColor: "transparent",
      backgroundColor: "var(--fabric-bg)",
      textareaColor: "var(--fabric-bg)",
      textColor: "inherit",
      optionToContent: renderer,
    },
  },
});

export const ChartContainer = memo(
  ({
    theme = "default",
    title,
    options,
    children,
    onResize,
    onClick,
    onExport,
    isEmpty,
    emptyIcon,
    chartRef: _ref,
    dataTableRenderer,
  }: {
    title?: string;
    theme?: Theme;
    isEmpty?: boolean;
    emptyIcon?: string;
    options: EChartOption;
    children?: AnyObject;
    chartRef?: RefObject<EChartsType>;
    onClick?: (event: AnyObject) => void;
    onExport?: (event: AnyObject) => void;
    dataTableRenderer?: (opt: KeyValue) => string;
    onResize?: (size: { width: number; height: number }) => void;
  }) => {
    const [chartRef, setChartRef] = useState<EChartsType>();
    const isDark = useIsDark();

    const handleResize = useCallback(
      (size: SizeObject) => {
        onResize?.(size);
        chartRef?.resize(size);
      },
      [chartRef],
    );
    const containerRef = useResizeObserver(handleResize);

    useImperativeHandle<EChartsType | undefined, EChartsType | undefined>(
      _ref,
      () => chartRef,
      [chartRef],
    );

    const chartTheme = useMemo(
      () => (isDark ? `${theme}_dark` : theme),
      [theme, isDark],
    );

    useEffect(() => {
      if (containerRef.current) {
        const { offsetWidth: width, offsetHeight: height } =
          containerRef.current;
        const chartRef = echarts.init(containerRef.current, chartTheme);
        chartRef.resize({ width, height });
        onResize?.({ width, height });
        setChartRef(chartRef);

        return () => {
          chartRef.dispose();
        };
      }
    }, [chartTheme]);

    useEffect(() => {
      const chart = chartRef;
      if (chart) {
        onClick != null && chart.on("click", onClick);
        return () => {
          !chart.isDisposed() && chart.off("click");
        };
      }
    }, [chartRef, onClick]);

    const toolbox = useMemo(
      () => toolboxOptions(dataTableRenderer),
      [dataTableRenderer],
    );

    useEffect(() => {
      chartRef?.setOption(
        {
          ...defaultOptions,
          toolbox,
          ...options,
        },
        true,
      );
    }, [options, chartRef]);

    const handleExport = useCallback(() => {
      const image = chartRef?.getDataURL({
        type: "png",
        excludeComponents: ["toolbox"],
      });
      onExport?.({ image, title });
    }, [chartRef, onExport, title]);

    return (
      <Fragment>
        <ChartToolbar>
          {title && (
            <Title className="flex-fill px-2 py-1 text-dimmed">{title}</Title>
          )}
          {children}
          {onExport && (
            <Button
              size="sm"
              variant="link"
              icon={CoreIcons.exporter}
              onClick={handleExport}
              aria-label="export"
            />
          )}
        </ChartToolbar>
        <div
          ref={containerRef}
          className={classNames(
            classes.chartContainer,
            "overflow-hidden area-content",
          )}
        />
        {isEmpty && (
          <div className="absolute inset-0 bg-base grid place-content-center">
            <EmptyContent
              icon={emptyIcon ?? CoreIcons.chartLine}
              message="Empty chart"
            />
          </div>
        )}
      </Fragment>
    );
  },
);
ChartContainer.displayName = "ChartContainer";
