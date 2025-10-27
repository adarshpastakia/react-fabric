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

import SimpleRenderer from "@arcgis/core/renderers/SimpleRenderer";
import { useMemo } from "react";

export interface Props {
  /**
   * Color of the marker fill. Default is "blue"
   */
  color?: string;
  /**
   * Size of the marker. Default is 4
   */
  size?: number | string;
  /**
   * Path to a custom marker icon.
   */
  path?: string;
  /**
   * Style of the marker. Default is "circle"
   */
  style?: "circle" | "square" | "cross" | "x" | "diamond" | "triangle";
  /**
   * Border color of the marker. Default is "white"
   */
  borderColor?: string;
  /**
   * Border width of the marker. Default is 1
   */
  borderWidth?: number;

  sizeField?: string;
  sizeStops?: Array<{ value: number; size: number | string }>;

  colorField?: string;
  colorStops?: Array<{ value: number; color: string }>;
}

export const useSimpleRenderer = (props?: Props) => {
  const renderer = useMemo(() => {
    const vizVars = [];
    let styleProps: any = { style: props?.style ?? "circle" };
    if (props?.path) {
      styleProps.style = "path";
      styleProps.path = props.path;
    }
    if (props?.sizeStops && props.sizeField) {
      vizVars.push({
        type: "size",
        field: props.sizeField,
        stops: props.sizeStops,
      });
    }
    if (props?.colorStops && props.colorField) {
      vizVars.push({
        type: "color",
        field: props.colorField,
        stops: props.colorStops,
      });
    }
    return new SimpleRenderer({
      symbol: {
        type: "simple-marker",
        ...styleProps,
        color: props?.color ?? "blue",
        size: props?.size ?? 4,
        outline: {
          color: props?.borderColor ?? "white",
          width: props?.borderWidth ?? 1,
        },
      },
      visualVariables: vizVars,
    });
  }, [props]);
  return renderer;
};
