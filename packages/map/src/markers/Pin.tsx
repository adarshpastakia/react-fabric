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

import Point from "@arcgis/core/geometry/Point";
import Graphic from "@arcgis/core/Graphic";
import SimpleMarkerSymbol from "@arcgis/core/symbols/SimpleMarkerSymbol";
import { LngLatLike, getLatitudeLongitude } from "@react-fabric/utilities";
import { useEffect, useMemo } from "react";
import { useMarkerLayer } from "../layers/Marker";
import { useMap } from "../viewer/Context";

type Markers = "pin" | "pin-radius" | "marker" | "marker-radius";
const paths: Record<Markers, string> = {
  marker:
    "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z",
  "marker-radius":
    "M12,2C15.31,2 18,4.66 18,7.95C18,12.41 12,19 12,19C12,19 6,12.41 6,7.95C6,4.66 8.69,2 12,2M12,6A2,2 0 0,0 10,8A2,2 0 0,0 12,10A2,2 0 0,0 14,8A2,2 0 0,0 12,6M20,19C20,21.21 16.42,23 12,23C7.58,23 4,21.21 4,19C4,17.71 5.22,16.56 7.11,15.83L7.75,16.74C6.67,17.19 6,17.81 6,18.5C6,19.88 8.69,21 12,21C15.31,21 18,19.88 18,18.5C18,17.81 17.33,17.19 16.25,16.74L16.89,15.83C18.78,16.56 20,17.71 20,19Z",
  pin: "M12 14.571c0.589 0 1.165-0.067 1.714-0.201v8.772c0 0.469-0.388 0.857-0.857 0.857h-1.714c-0.469 0-0.857-0.388-0.857-0.857v-8.772c0.549 0.134 1.125 0.201 1.714 0.201zM12 0c3.79 0 6.857 3.067 6.857 6.857s-3.067 6.857-6.857 6.857-6.857-3.067-6.857-6.857 3.067-6.857 6.857-6.857zM12 3c0.241 0 0.429-0.188 0.429-0.429s-0.188-0.429-0.429-0.429c-2.598 0-4.714 2.116-4.714 4.714 0 0.241 0.188 0.429 0.429 0.429s0.429-0.188 0.429-0.429c0-2.129 1.728-3.857 3.857-3.857z",
  "pin-radius":
    "M12.479 20.11v-0.956c3.218 0.095 5.754 1.127 5.754 2.388 0 1.324-2.79 2.458-6.233 2.458s-6.233-1.134-6.233-2.458c0-1.261 2.536-2.294 5.753-2.388v0.956c-2.687 0.066-4.794 0.682-4.794 1.432 0 0.794 2.361 1.558 5.274 1.558s5.273-0.764 5.273-1.558c-0.001-0.75-2.107-1.364-4.794-1.432zM6.734 5.274c0-2.912 2.421-5.274 5.335-5.274s5.274 2.362 5.274 5.274c0 2.503-1.746 4.595-4.086 5.135l-1.257 12.692-1.261-12.728c-2.268-0.59-4.005-2.646-4.005-5.099zM11.999 3.862c0-0.795-0.644-1.438-1.438-1.438s-1.439 0.643-1.439 1.438c0 0.794 0.644 1.438 1.439 1.438s1.438-0.643 1.438-1.438z",
};

/**
 * Pin graphic for displaying a pin on the map.
 */
export const Pin = ({
  coords,
  style = "circle",
  size = 18,
  color = "#f00",
  path,
  borderWidth,
  borderColor,
  animate,
  ...props
}: {
  coords: LngLatLike;
  size?: string | number;
  color?: string;
  path?: string;
  style?:
    | "circle"
    | "square"
    | "cross"
    | "x"
    | "diamond"
    | "triangle"
    | Markers;
  borderWidth?: string | number;
  borderColor?: string;
  animate?: boolean;
} & Omit<__esri.GraphicProperties, "geometry" | "symbol">) => {
  const layer = useMarkerLayer();
  const { is3D } = useMap();

  const graphic = useMemo(
    () =>
      new Graphic({
        geometry: new Point(getLatitudeLongitude(coords)),
        symbol: new SimpleMarkerSymbol(
          Object.assign(
            {
              style,
              color,
              size,
              outline: {
                color: borderColor,
                width: borderWidth,
              },
            } as any,
            style && style.toString() in paths
              ? {
                  path: (paths as any)[style.toString()],
                  style: "path",
                }
              : {},
            path ? { path, style: "path" } : {},
          ),
        ),
        ...props,
      }),
    [coords, style, size, color, borderColor, borderWidth, path, props],
  );

  useEffect(() => {
    if (layer && coords) {
      let tmr: any = null;
      layer.when(() => {
        layer.add(graphic);
        const symbol = graphic.symbol as SimpleMarkerSymbol;
        if (symbol.style === "path")
          symbol.yoffset = (symbol.size as number) / 2;
        if (animate && !is3D) {
          const baseSize = symbol.size;
          let up = 2;
          tmr = setInterval(() => {
            symbol.size += up;
            if (symbol.size > baseSize + 20) up = -2;
            if (symbol.size <= baseSize) up = 2;
            if (symbol.style === "path") symbol.yoffset = symbol.size / 2;
            requestAnimationFrame(() => {
              graphic.symbol = symbol.clone();
            });
          }, 100);
        }
      });

      return () => {
        clearInterval(tmr);
        layer.remove(graphic);
      };
    }
  }, [layer, graphic, animate, is3D]);

  return null;
};
