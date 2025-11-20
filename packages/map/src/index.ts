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

import esriConfig from "@arcgis/core/config";

import { BasemapGallery as _BasemapGallery } from "./tools/BasemapGallery";
import { Home as _Home } from "./tools/Home";
import { LayerList as _LayerList } from "./tools/LayerList";
import { ScaleBar as _ScaleBar } from "./tools/ScaleBar";
import { Zoom as _Zoom } from "./tools/Zoom";

import { JsonLayer } from "./layers/Json";
import { MarkerLayer } from "./layers/Marker";

import { Fill as _Fill } from "./markers/Fill";
import { Pin as _Pin } from "./markers/Pin";

import { useHeatmapRenderer } from "./renderers/Heatmap";
import { useSimpleRenderer } from "./renderers/Simple";

esriConfig.assetsPath = "/assets/@arcgis";
export const setArcgisAssetsPath = (path: string) => {
  esriConfig.assetsPath = path;
};

export { MapViewer } from "./viewer/Viewer";
export namespace MapTools {
  export const BasemapGallery = _BasemapGallery;
  export const LayerList = _LayerList;
  export const Zoom = _Zoom;
  export const ScaleBar = _ScaleBar;
  export const Home = _Home;
}
export namespace MapLayers {
  export const Markers = MarkerLayer;
  export const Json = JsonLayer;
}
export namespace MapMarkers {
  export const Fill = _Fill;
  export const Pin = _Pin;
}
export namespace MapRenderers {
  export const useSimple = useSimpleRenderer;
  export const useHeatmap = useHeatmapRenderer;
}
