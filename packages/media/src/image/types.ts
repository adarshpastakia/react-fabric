/*
 * React Fabric
 * @version: 1.0.0
 *
 *
 * The MIT License (MIT)
 * Copyright (c) 2026 Adarsh Pastakia
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

import { RefProp } from "@react-fabric/core/dist/types/types";
import { NsfwProps } from "../nsfw";
import { ImageAnnotationShape } from "../typedefs";

export interface ImageViewerRef {
  export: () => string | null;
  crop: (cropArea: { x: number; y: number; width: number; height: number }) => string | null;
}

export interface ImageProps extends RefProp<ImageViewerRef> {
  /**
   * Image source, can be a string or an array of strings for fallback sources (e.g. for responsive images)
   */
  src: string | string[];
  /**
   * icon image for missing media
   */
  missingIcon?: string;
  /**
   * NSFW overlay, can be a boolean or an object with NSFW props
   */
  nsfw?: boolean | NsfwProps;
  /**
   * Overlay a comparison image, can be wiped over using a splitter handle or by changing opacity, useful for before/after comparisons.
   */
  compareWith?: string;
  /**
   * Auto hide toolbar when not hovered
   */
  autoHideToolbar?: boolean;
  /**
   * Array of annotations to be rendered on top of the image, useful for highlighting specific areas or adding notes.
   * Each annotation can have customizable styles such as background color, border color, opacity, and blur, and can be of type "rect" or "ellipse". Annotations can also have optional text labels that can be positioned above or below the annotation shape.
   */
  annotations?: {
    fill?: string;
    shapes: ImageAnnotationShape[];
  };
  /**
   * Array of annotations to be rendered on top of the image, useful for highlighting specific areas or adding notes.
   * Each annotation can be of type "text", "rect", "ellipse", or "polygon", and can have customizable styles such as background color, border color, opacity, and blur.
   * Annotations can also have optional text labels that can be positioned above or below the annotation shape.
   */
  // annotations?: ImageAnnotation[];
  /**
   * Callback when image is successfully loaded
   */
  onLoad?: () => void;
  /**
   * Callback when image fails to load
   */
  onError?: () => void;
  /**
   * context menu callback
   */
  onContextMenu?: (e: React.MouseEvent) => void;
  /**
   * Callback to generate a data URL of the currently cropped area of the image, useful for cropping functionality. The callback receives the generated base64 as a parameter.
   */
  onCrop?: (base64: string | null, box: [x: number, y: number, width: number, height: number]) => void;
  /**
   * Callback to generate a data URL of the current image with all transformations and overlays applied, useful for exporting the edited image. The callback receives the generated base64 as a parameter.
   */
  onExport?: (base64: string | null) => void;
  /**
   * Callback to receive debug information about the image and view state, useful for development and debugging purposes. The callback receives an object with the following properties:
   */
  onDebug?: (debugInfo: {
    /**
     * Original image size, available after image is loaded
     */
    originalSize: [width: number, height: number];
    /**
     * View size after applying zoom and rotation, available after image is loaded and view state changes
     */
    viewSize: [width: number, height: number];
    /**
     * Current zoom level, available after image is loaded and view state changes
     */
    zoom: number;
    /**
     * Current rotation in degrees, available after image is loaded and view state changes
     */
    rotation: number;
    /**
     * Current horizontal flip state, available after image is loaded and view state changes
     */
    flipHorizontal: boolean;
    /**
     * Current vertical flip state, available after image is loaded and view state changes
     */
    flipVertical: boolean;
    /**
     * Current colorset of the image, available after image is loaded
     */
    colorset: string;
  }) => void;
}
