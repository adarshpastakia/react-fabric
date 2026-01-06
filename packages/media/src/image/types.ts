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

import { type RefProp } from "@react-fabric/core/dist/types/types";
import { type CanvasRef } from "../components/Canvas";
import { type ImageAnnotation } from "../types";

export interface ImageProps<T> extends RefProp<CanvasRef> {
  /**
   * image source
   */
  src: string;
  /**
   * fallback alternate source
   */
  fallback?: string;
  /**
   * NSFW overlay
   */
  nsfw?: boolean;
  /**
   * NSFW trigger type (default: click)
   */
  nsfwTrigger?: "click" | "hover" | "none";
  /**
   * NSFW timeout in milliseconds only for click trigger (default: 2000)
   */
  nsfwTimeout?: number;
  /**
   * NSFW overlay message
   */
  nsfwMessage?:
    | string
    | ((
        props: {
          hide: () => void;
          remove: () => void;
        } & KeyValue,
      ) => JSX.Element);
  /**
   * image overlay
   */
  overlay?: string;
  /**
   * default splitter toggle (default: true)
   */
  defaultSplitter?: boolean;
  /**
   * enable zoom tool (default: true)
   */
  enableZoom?: boolean;
  /**
   * annotations to be rendered on image
   */
  annotations?: Array<ImageAnnotation<T>>;
  /**
   * export current view as base64
   */
  onExport?: (base64: string) => void;
  /**
   * crop selection handler
   */
  onCrop?: (box: number[], base64: string) => void;
  /**
   * error handler
   */
  onLoad?: () => void;
  /**
   * error handler
   */
  onError?: () => void;
}
