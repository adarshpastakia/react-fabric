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

import { LngLatLike } from "@react-fabric/utilities";
import { ReactNode } from "react";

export interface FabricBaseMap {
  title?: string;
  thumbnail?: string;
  default?: boolean;
  layers: Array<{ url: string } | { portalId: string }>;
}

export interface MapViewerProps {
  children?: ReactNode;
  /**
   * Initial center position of the map viewer.
   */
  center?: LngLatLike;
  /**
   * Initial zoom level of the map viewer.
   */
  zoom?: number;
  /**
   * Basemaps to be used in the map viewer.
   */
  basemaps?: FabricBaseMap[];

  enable3D?: boolean;
  disableZoom?: boolean;
  disableDrag?: boolean;

  onClick?: (loc: { latitude: number; longitude: number }) => void;
}
