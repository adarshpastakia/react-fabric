/*
 * React Fabric
 * @version: 1.0.0
 *
 *
 * The MIT License (MIT)
 * Copyright (c) 2025 Adarsh Pastakia
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

import HeatmapRenderer from "@arcgis/core/renderers/HeatmapRenderer";
import Color from "color";
import { useMemo } from "react";

interface Props {
  /**
   * Field name to be used for heatmap intensity
   */
  field: string;
  /**
   * Colors for the heatmap gradient. Default is a red to yellow gradient.
   *
   * [color]: creates a color gradient from light to dark
   * [color1, color2]: creates a gradient from color1 to color2
   * [color1, color2, color3]: creates a multi-stop gradient color1 to color2 to color3
   */
  colors?: string[];

  minDensity?: __esri.HeatmapRendererProperties["minDensity"];
  maxDensity?: __esri.HeatmapRendererProperties["maxDensity"];
}

export const useHeatmapRenderer = (props?: Props) => {
  const renderer = useMemo(() => {
    let colorHigh = "#FFE600FF";
    let colorMid = "#FF8C00FF";
    let colorLow = "#FF3300FF";

    if (props?.colors?.length === 1) {
      colorHigh = Color(props.colors[0]).lightness(95).toString();
      colorLow = Color(props.colors[0]).lightness(25).toString();
      colorMid = Color(colorHigh).mix(Color(colorLow), 0.5).toString();
    }

    if (props?.colors?.length === 2) {
      colorHigh = props.colors[0];
      colorLow = props.colors[1];
      colorMid = Color(colorHigh).mix(Color(colorLow), 0.5).toString();
    }

    if (props?.colors?.length === 3) {
      colorHigh = props.colors[0];
      colorMid = props.colors[1];
      colorLow = props.colors[2];
    }

    const colors =
      props?.colors && props.colors.length > 3
        ? props.colors.map((color, index, arr) => ({
            ratio: (index + 1) / arr.length,
            color,
          }))
        : [
            ...Array.from({ length: 6 }, (_, i) => ({
              ratio: (i + 1) / 12,
              color: Color(colorLow)
                .mix(Color(colorMid), i / 6)
                .toString(),
            })),
            ...Array.from({ length: 6 }, (_, i) => ({
              ratio: (i + 6) / 12,
              color: Color(colorMid)
                .mix(Color(colorHigh), i / 6)
                .toString(),
            })),
          ];

    return new HeatmapRenderer({
      field: props?.field,
      colorStops: [{ color: "#00000000", ratio: 0 }, ...colors],
      minDensity: props?.minDensity ?? 0,
      maxDensity: props?.maxDensity ?? 0.1,
    });
  }, [props]);
  return renderer;
};
