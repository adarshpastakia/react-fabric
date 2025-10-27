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

import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import "@arcgis/map-components/components/arcgis-features";
import {
  createContext,
  ReactElement,
  useContext,
  useEffect,
  useMemo,
} from "react";
import { Fill } from "../markers/Fill";
import { Pin } from "../markers/Pin";
import { useMap } from "../viewer/Context";

const MarkerContext = createContext<__esri.GraphicsLayer>(null!);

type MarkerChildren = ReactElement<typeof Fill | typeof Pin>;

/**
 * MarkerLayer component for displaying a layer of markers on the map.
 */
export const MarkerLayer = ({
  children,
  ...props
}: Omit<__esri.GraphicsLayerProperties, "graphics"> & {
  children?: MarkerChildren | MarkerChildren[];
}) => {
  const { map, view } = useMap();

  const layer = useMemo(
    () =>
      new GraphicsLayer(
        Object.assign(
          {
            visible: true,
            listMode: "show",
          },
          props,
        ),
      ),
    [props],
  );

  useEffect(() => {
    if (map && view) {
      view?.when(() => {
        map?.layers.add(layer);
      });

      return () => {
        map?.layers.remove(layer);
      };
    }
  }, [layer, map, view]);

  return (
    <MarkerContext.Provider value={layer}>{children}</MarkerContext.Provider>
  );
};

export const useMarkerLayer = () => useContext(MarkerContext);
