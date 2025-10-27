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

import Basemap from "@arcgis/core/Basemap";
import esriConfig from "@arcgis/core/config";
import Point from "@arcgis/core/geometry/Point";
import SpatialReference from "@arcgis/core/geometry/SpatialReference";
import VectorTileLayer from "@arcgis/core/layers/VectorTileLayer";
import { ArcgisMap, ArcgisScene } from "@arcgis/map-components-react";
import "@arcgis/map-components/components/arcgis-map";
import "@arcgis/map-components/components/arcgis-popup";
import "@arcgis/map-components/components/arcgis-scene";
import { CalciteButton } from "@esri/calcite-components-react";
import { getLatitudeLongitude, LngLatLike } from "@react-fabric/utilities";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { BASEMAPS, DEFAULT_VIEWPOINT } from "../constants";
import { FabricBaseMap, MapViewerProps } from "../types";

esriConfig.assetsPath = "/assets/@arcgis";

const Context = createContext<{
  map?: __esri.Map | null;
  view?: __esri.MapView | __esri.SceneView;
  disableDrag?: boolean;
  disableZoom?: boolean;
  basemaps: FabricBaseMap[];
  center: LngLatLike;
  zoom: number;
  is3D: boolean;
}>({} as any);

export const MapProvider = ({
  children,
  onClick,
  basemaps = BASEMAPS,
  center = DEFAULT_VIEWPOINT.point,
  zoom = DEFAULT_VIEWPOINT.zoom,
  enable3D = false,
  disableDrag = false,
  disableZoom = false,
}: MapViewerProps) => {
  const [map, setMap] = useState<__esri.Map | null>(null);
  const [view, setView] = useState<__esri.MapView | __esri.SceneView>();
  const [is3D, setIs3D] = useState(false);

  const defaultBaseMap = useMemo(
    () => basemaps.find((b) => b.default) ?? basemaps[0],
    [basemaps],
  );

  useEffect(() => {
    view?.navigation.set("actionMap", {
      dragPrimary: disableDrag ? "none" : "pan",
      dragSecondary: !disableDrag && is3D ? "rotate" : "none",
      dragTertiary: disableZoom ? "none" : "zoom",
      mouseWheel: disableZoom ? "none" : "zoom",
    });
  }, [view, disableDrag, disableZoom, is3D]);

  useEffect(() => {
    if (view && onClick) {
      const handleClick = view.on("click", (event: __esri.ViewClickEvent) => {
        event.button === 0 &&
          onClick({
            latitude: event.mapPoint.latitude ?? 0,
            longitude: event.mapPoint.longitude ?? 0,
          });
      });
      return () => {
        handleClick.remove();
      };
    }
  }, [view, onClick]);

  const E = useMemo(
    () => (enable3D && is3D ? ArcgisScene : ArcgisMap),
    [is3D, enable3D],
  );

  return (
    <Context.Provider
      value={{
        map,
        view,
        is3D,
        disableDrag,
        disableZoom,
        basemaps,
        center,
        zoom,
      }}
    >
      <E
        onArcgisViewReadyChange={(e) => {
          e.target.map && setMap(e.target.map);
          e.target.view && setView(e.target.view);
        }}
        className="area-content overflow-hidden"
        basemap={
          new Basemap({
            baseLayers: defaultBaseMap?.layers.map(
              (layer) =>
                new VectorTileLayer(
                  "url" in layer
                    ? {
                        url: layer.url,
                      }
                    : {
                        portalItem: {
                          id: layer.portalId,
                        },
                      },
                ),
            ),
            title: defaultBaseMap?.title,
            thumbnailUrl: defaultBaseMap?.thumbnail,
          })
        }
        zoom={zoom}
        center={new Point(getLatitudeLongitude(center))}
        spatialReference={
          new SpatialReference({
            wkid: 3857,
          })
        }
      >
        {enable3D && (
          <CalciteButton
            appearance="solid"
            kind="neutral"
            slot="top-right"
            className="mb-2"
            iconStart={is3D ? "layer-basemap" : "globe"}
            onClick={() => setIs3D((n) => !n)}
          />
        )}
        {children}
      </E>
    </Context.Provider>
  );
};

export const useMap = () => useContext(Context);
