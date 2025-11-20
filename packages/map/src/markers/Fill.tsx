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

import Polygon from "@arcgis/core/geometry/Polygon";
import Graphic from "@arcgis/core/Graphic";
import SimpleFillSymbol from "@arcgis/core/symbols/SimpleFillSymbol";
import { type LngLatLike, convertLatLng } from "@react-fabric/utilities";
import { useEffect, useMemo } from "react";
import { useMarkerLayer } from "../layers/Marker";
import Color from "color";
import { useMap } from "../viewer/Context";

/**
 * Fill graphic for displaying a fill polygon on the map.
 */
export const Fill = ({
  coords,
  style = "solid",
  color = "#f00",
  borderWidth,
  borderColor,
  animate,
  ...props
}: {
  coords: LngLatLike[];
  color?: string;
  style?:
    | "backward-diagonal"
    | "cross"
    | "diagonal-cross"
    | "forward-diagonal"
    | "horizontal"
    | "none"
    | "solid"
    | "vertical";
  borderWidth?: string | number;
  borderColor?: string;
  animate?: boolean;
} & Omit<__esri.GraphicProperties, "geometry" | "symbol">) => {
  const layer = useMarkerLayer();
  const { is3D } = useMap();

  const graphic = useMemo(
    () =>
      new Graphic({
        geometry: new Polygon({
          rings: [coords.map(convertLatLng)],
        }),
        symbol: new SimpleFillSymbol(
          Object.assign({
            style,
            color,
            outline: {
              color: borderColor,
              width: borderWidth,
            },
          } as any),
        ),
        ...props,
      }),
    [coords, style, color, borderColor, borderWidth, props],
  );

  useEffect(() => {
    if (layer && coords) {
      let tmr: any = null;
      void layer.when(() => {
        layer.add(graphic);
        if (animate && !is3D) {
          let up = 0.1;
          let sat = 0;
          const symbol = graphic.symbol as SimpleFillSymbol;
          const color = symbol.color.toRgba();
          tmr = setInterval(() => {
            if (sat >= 0.9) up = -0.1;
            if (sat <= 0.1) up = 0.1;
            sat += up;
            symbol.color = Color.rgb([...color])
              .darken(sat)
              .rgb()
              .array();
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
