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
import VectorTileLayer from "@arcgis/core/layers/VectorTileLayer";
import LocalBasemapsSource from "@arcgis/core/widgets/BasemapGallery/support/LocalBasemapsSource";
import {
  ArcgisBasemapGallery,
  ArcgisBasemapLayerList,
  ArcgisExpand,
} from "@arcgis/map-components-react";
import "@arcgis/map-components/components/arcgis-basemap-gallery";
import "@arcgis/map-components/components/arcgis-basemap-layer-list";
import "@arcgis/map-components/components/arcgis-expand";
import { useMap } from "../viewer/Context";

export const BasemapGallery = () => {
  const { basemaps, map } = useMap();
  return (
    <>
      <ArcgisExpand
        className="mb-2"
        expandIcon="basemap"
        collapseIcon="x"
        mode="floating"
        slot="top-right"
        autoCollapse
      >
        <ArcgisBasemapGallery
          source={
            new LocalBasemapsSource({
              basemaps: basemaps.map(
                (map) =>
                  new Basemap({
                    title: map.title,
                    thumbnailUrl: map.thumbnail,
                    baseLayers: map.layers.map(
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
                  }),
              ),
            })
          }
        />
      </ArcgisExpand>
      {(map?.basemap?.baseLayers.length ?? 1) > 1 && (
        <ArcgisExpand
          className="mb-2"
          expandIcon="layer-map"
          collapseIcon="x"
          mode="floating"
          slot="top-right"
          autoCollapse
        >
          <ArcgisBasemapLayerList />
        </ArcgisExpand>
      )}
    </>
  );
};
