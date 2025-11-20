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

export interface MediaBaseState {
  mediaWidth: number;
  mediaHeight: number;
  containerWidth: number;
  containerHeight: number;
  ratio: number;
  width: number;
  height: number;
  rotate: number;
  zoom: number;
  src: string;
  errorLevel: number;
  cropping: boolean;
  splitter: boolean;
  isLoading: boolean;
  isLoaded: boolean;
  isErrored: boolean;
  colorscape: {
    brightness: number;
    contrast: number;
    saturate: number;
    hue: number;
    invert: number;
  };
}

export interface ImageState extends MediaBaseState {
  original: string;
  overlay?: string;
  showSplitter: boolean;
  colorScheme: "light" | "dark" | "light_transparent" | "dark_transparent";
}

export interface VideoState extends MediaBaseState {
  isPlaying: boolean;
  time: number;
  duration: number;
  volume: number;
  speed: number;
  showVtt: boolean;
}

export interface AudioState extends MediaBaseState {
  time: number;
  duration: number;
  volume: number;
  speed: number;
  isPlaying: boolean;
  showEqs: boolean;
}

type AnnotationObject =
  | {
      box: string | [number, number, number, number];
      polygon?: never;
    }
  | {
      polygon: string[] | Array<[number, number, number, number]>;
      box?: never;
    };

interface BaseAnnotationItem<T = KeyValue> {
  /**
   * top label text
   */
  labelTop?: string;
  /**
   * top label color
   */
  colorTop?: string;
  /**
   * bottom label text
   */
  labelBottom?: string;
  /**
   * bottom label color
   */
  colorBottom?: string;
  /**
   * border size
   */
  stroke?: number;
  /**
   * border color
   */
  strokeColor?: string;
  /**
   * fill color (with alpha for transparency)
   */
  fill?: string;
  /**
   * custom data payload
   */
  data?: T;
}

export type ImageAnnotation<T = KeyValue> = BaseAnnotationItem<T> &
  AnnotationObject;

export type VideoAnnotation<T = KeyValue> = ImageAnnotation<T> & {
  start: number;
  end: number;
};
