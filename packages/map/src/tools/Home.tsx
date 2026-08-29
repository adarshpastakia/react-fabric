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

/// <reference types="@arcgis/map-components/types/react" />
/// <reference types="@esri/calcite-components/types/react" />

import * as reactiveUtils from "@arcgis/core/core/reactiveUtils";
import type Extent from "@arcgis/core/geometry/Extent";
import Point from "@arcgis/core/geometry/Point";
import Viewpoint from "@arcgis/core/Viewpoint";
import "@esri/calcite-components/components/calcite-button";
import { debounce, getLatitudeLongitude } from "@react-fabric/utilities";
import { useCallback, useEffect, useRef, useState } from "react";
import { useMap } from "../viewer/context";

export function Home({ enableHistory }: { enableHistory?: boolean }) {
  const { map, view, disableDrag, center, zoom } = useMap();

  const isNavigatingHistoryRef = useRef(false);
  const currentIndexRef = useRef(0);
  const [history, setHistory] = useState<Viewpoint[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    currentIndexRef.current = activeIndex;
  }, [activeIndex]);

  useEffect(() => {
    if (enableHistory && !disableDrag && view) {
      const addHistory = debounce((viewpoint: Viewpoint) => {
        if (!isNavigatingHistoryRef.current) {
          setHistory((h) => {
            // Keep max 25 history entries
            const newHistory = h.slice(0, currentIndexRef.current + 1).slice(-24);
            // Add new viewpoint to history
            newHistory.push(viewpoint.clone());
            setActiveIndex(newHistory.length - 1);
            return newHistory;
          });
        }
        isNavigatingHistoryRef.current = false;
      });
      const watcher = reactiveUtils.watch(() => view.viewpoint, addHistory);
      return () => {
        watcher.remove();
      };
    }
  }, [disableDrag, enableHistory, view]);

  const navigate = useCallback(
    (idx: number) => {
      if (history.length > 0 && history[idx] && view) {
        isNavigatingHistoryRef.current = true;
        void view.goTo(history[idx]);
        setActiveIndex(idx);
      }
    },
    [history, view],
  );

  const gotoHome = useCallback(() => {
    if (view) {
      let extent: Extent | undefined = undefined;
      map?.layers.forEach((layer) => {
        if (layer.visible && layer.fullExtent) {
          console.log(layer.type, layer.fullExtent);
          if (extent) {
            extent = extent.union(layer.fullExtent);
          } else {
            extent = layer.fullExtent;
          }
        }
      });
      void view.goTo(
        extent ??
          new Viewpoint({
            scale: view.tileInfo?.zoomToScale(zoom),
            targetGeometry: new Point(getLatitudeLongitude(center)),
          }),
      );
    }
  }, [center, zoom, view, map]);

  return (
    !disableDrag && (
      <div slot="top-left" className="mb-2 flex flex-col divide-y divide-tint-100">
        {enableHistory && (
          <calcite-button
            appearance="solid"
            kind="neutral"
            iconStart="arrow-left"
            disabled={activeIndex <= 0}
            onClick={() => navigate(activeIndex - 1)}
          />
        )}
        <calcite-button appearance="solid" kind="neutral" iconStart="home" onClick={() => gotoHome()} />
        {enableHistory && (
          <calcite-button
            appearance="solid"
            kind="neutral"
            iconStart="arrow-right"
            disabled={activeIndex >= history.length - 1}
            onClick={() => navigate(activeIndex + 1)}
          />
        )}
      </div>
    )
  );
}
