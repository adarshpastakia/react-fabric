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
import { VideoAnnotationShape } from "../typedefs";

export interface VideoPlayerRef {
  play: () => void;
  pause: () => void;
  seek: (time: number) => void;
  seekAndPlay: (time: number) => void;

  export: () => string | null;
  crop: (crop: { x: number; y: number; width: number; height: number }) => string | null;
}

export interface VideoProps extends RefProp<VideoPlayerRef> {
  /**
   * Video source, can be a string or an array of strings for fallback sources (e.g. for responsive videos)
   */
  src: string | string[];
  /**
   * Poster image for the video, displayed before the video starts playing
   */
  poster?: string;
  /**
   * Auto play the video when it is loaded
   */
  autoPlay?: boolean;
  /**
   * icon image for missing media
   */
  missingIcon?: string;
  /**
   * NSFW overlay, can be a boolean or an object with NSFW props
   */
  nsfw?: boolean | NsfwProps;
  /**
   * Auto hide toolbar when not hovered
   */
  autoHideToolbar?: boolean;
  /**
   * Array of annotations to be rendered on top of the video, useful for highlighting specific areas or adding notes.
   * Each annotation can have customizable styles such as background color, border color, opacity, and blur, and can be of type "rect" or "ellipse". Annotations can also have optional text labels that can be positioned above or below the annotation shape.
   */
  annotations?: {
    fill?: string;
    shapes: VideoAnnotationShape[];
  };
  /**
   * Time window in seconds for displaying annotations, useful for showing annotations that are relevant to the current video time.
   * An annotation will be displayed if its timestamp is within the specified time window from the current video time.
   *
   * @default 0.33 (approximately 10 frames at 30fps)
   *
   * @example
   * The annotation time window is approximatly {Frame gap for each annotation}/{Frame per second}
   *
   * 30fps -> 10 frames = 10/30s = 0.33s
   * 30fps -> 18 frames = 18/30s = 0.6s
   * 60fps -> 10 frames = 10/60s = 0.16s
   * 24fps -> 12 frames = 12/24s = 0.5s
   */
  annotationTimeWindow?: number;
  /**
   * caption text in VTT format to be rendered as subtitles on top of the video
   */
  vttText?: string;
  /**
   * timeline markers
   */
  markers?: Array<[time: number, score: number]>;
  /**
   * comment list
   */
  comments?: Array<[time: number, text: string]>;
  onCommentChange?: (comments: Array<[time: number, text: string]>) => void;
  /**
   * Array of annotations to be rendered on top of the video, useful for highlighting specific areas or adding notes.
   * Each annotation can be of type "text", "rect", "ellipse", or "polygon", and can have customizable styles such as background color, border color, opacity, and blur.
   * Annotations can also have optional text labels that can be positioned above or below the annotation shape.
   */
  // annotations?: ImageAnnotation[];
  /**
   * Callback when video is successfully loaded
   */
  onLoad?: () => void;
  /**
   * Callback when video fails to load
   */
  onError?: () => void;
  /**
   * Callback when the current video time changes, useful for synchronizing external components with the video playback. The callback receives the current time in seconds as a parameter.
   */
  onTimeChange?: (time: number) => void;
  /**
   * context menu callback
   */
  onContextMenu?: (e: React.MouseEvent) => void;
  /**
   * cut handler
   * @param start - start time
   * @param end - end time
   */
  onCut?: (start: number, end: number) => void;
  /**
   * Callback to generate a data URL of the currently cropped area of the video, useful for cropping functionality. The callback receives the generated base64 as a parameter.
   */
  onCrop?: (base64: string | null, timestamp: number, box: [x: number, y: number, width: number, height: number]) => void;
  /**
   * Callback to generate a data URL of the current video frame with all transformations and overlays applied, useful for exporting the edited video frame. The callback receives the generated base64 as a parameter.
   */
  onExport?: (base64: string | null, timestamp: number) => void;
  /**
   * Callback to receive debug information about the video and view state, useful for development and debugging purposes. The callback receives an object with the following properties:
   */
  onDebug?: (debugInfo: {
    /**
     * Original video size, available after video is loaded
     */
    originalSize: [width: number, height: number];
    /**
     * View size after applying zoom and rotation, available after video is loaded and view state changes
     */
    viewSize: [width: number, height: number];
    /**
     * Current zoom level, available after video is loaded and view state changes
     */
    zoom: number;
    /**
     * Current rotation in degrees, available after video is loaded and view state changes
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
  }) => void;
}
