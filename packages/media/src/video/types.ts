/*
 * React Fabric
 * @version: 1.0.0
 *
 *
 * The MIT License (MIT)
 * Copyright (c) 2024 Adarsh Pastakia
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
import { type CanvasRef } from "../canvas/Context";

export interface VideoPlayerRef extends CanvasRef {
  play: () => void;
  playAt: (time: number) => void;
  seek: (time: number) => void;
  pause: () => void;
  currentTime: () => number;
  on: HTMLVideoElement["addEventListener"];
  off: HTMLVideoElement["removeEventListener"];
}

export interface VideoProps extends RefProp<VideoPlayerRef> {
  /**
   * video source
   */
  src: string;
  /**
   * video poster
   */
  poster?: string;
  /**
   * fallback alternate source
   */
  fallback?: string;
  /**
   * NSFW overlay
   */
  nsfw?: boolean;
  /**
   *
   */
  vttText?: string;
  /**
   * timeline markers
   */
  markers?: Array<[time: number, score: number]>;
  /**
   * annotation list
   */
  annotations?: Array<[time: number, text: string]>;
  onAnnotationChange?: (
    annotations: Array<[time: number, text: string]>,
  ) => void;
  onCut?: (start: number, end: number) => void;
  /**
   * error handler
   */
  onLoad?: () => void;
  /**
   * error handler
   */
  onError?: () => void;
  /**
   * onChange playback time
   */
  onChange?: (currentTime: number) => void;
  /**
   * play handler
   */
  onPlay?: () => void;
  /**
   * pause handler
   */
  onPause?: () => void;
}
