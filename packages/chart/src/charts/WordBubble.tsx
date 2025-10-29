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

import { CoreIcons, useIsDark, useMemoDebugger } from "@react-fabric/core";
import { compareValues, isEmpty } from "@react-fabric/utilities";
import { type EChartsOption } from "echarts";
import { memo, type FC } from "react";
import { ChartPalette } from "../theme/palettes";
import { type BaseChart } from "../types";
import { countRenderer } from "../types/utils";
import { ChartContainer } from "../wrapper/ChartContainer";
import { ChartWrapper } from "../wrapper/ChartWrapper";

export interface WordBubbleProps extends Omit<BaseChart, "theme"> {
  series: Array<{ id: string; label?: string; count: number }>;
  onClick?: (key: string) => void;
}

const WordBubbleChart: FC<WordBubbleProps> = memo(
  ({ series, title, onExport, onClick }: WordBubbleProps) => {
    const isDark = useIsDark();

    const options = useMemoDebugger<EChartsOption>(
      () => {
        if (isEmpty(series)) return {};

        const palette = isDark
          ? ChartPalette.CloudDark
          : ChartPalette.CloudLight;

        return {
          legend: undefined,
          tooltip: {
            trigger: "axis",
            confine: true,
            position: "top",
            appendToBody: true,
          } as EChartsOption["tooltip"],
          series: [
            {
              name: title,
              type: "wordCloud",
              shape: "circle",
              sizeRange: [12, 60],
              gridSize: 32,
              rotationRange: [-10, 10],
              rotationStep: 1,
              drawOutOfBound: false,
              layoutAnimation: true,
              textStyle: {
                fontFamily: "sans-serif",
                fontWeight: "bold",
                color: ({ dataIndex }: KeyValue) =>
                  palette[dataIndex % palette.length],
              },
              data: series
                .sort(compareValues("desc", "count"))
                .map(({ id: key, label, count }, index) => ({
                  name: label ?? key,
                  value: count,
                })),
            },
          ],
        };
      },
      [series, title, isDark],
      "WordChart options",
    );

    return (
      <ChartContainer
        title={title}
        onExport={onExport}
        options={options}
        isEmpty={isEmpty(series)}
        emptyIcon={CoreIcons.chartActivityScatter}
        dataTableRenderer={countRenderer}
        onClick={(e) => onClick?.(e?.name ?? "")}
      />
    );
  },
);
WordBubbleChart.displayName = "WordBubbleChart";

/**
 * WordBubble component renders a word cloud chart using ECharts.
 * It displays words with sizes proportional to their frequency in the data.
 * Users can click on words to trigger an action, such as filtering or navigating.
 * It also supports exporting the chart and displays an empty state when no data is available.
 *
 * @param {WordBubbleProps} props - The properties for the WordBubble component.
 * @returns {JSX.Element} The rendered WordBubble component.
 *
 * @example
 * ```jsx
 * <WordBubble
 *   data={[
 *     { id: "1", label: "Word One", count: 10 },
 *     { id: "2", label: "Word Two", count: 20 },
 *     { id: "3", label: "Word Three", count: 30 },
 *   ]}
 *   title="Word Frequency"
 *   onExport={() => console.log("Exporting chart...")}
 *   onClick={(key) => console.log("Clicked word:", key)}
 *   theme="light"
 * />
 * ```
 *
 * @see {@link https://adarshpastakia.github.io/react-fabric/?path=/docs/charts-wordbubble--docs} for the properties that can be passed to this component.
 * @see {@link https://github.com/ecomfe/echarts-wordcloud} for the underlying chart implementation.
 */
export const WordBubble: FC<WordBubbleProps> = (props) => (
  <ChartWrapper>
    <WordBubbleChart {...props} />
  </ChartWrapper>
);
