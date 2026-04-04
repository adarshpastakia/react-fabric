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

import { useReducer, useRef } from "react";

const PADDING = 16;

export interface ViewState {
  originalWidth: number;
  originalHeight: number;
  /**
   * scroll container width, used for calculating zoom level and fitting media within container
   */
  containerWidth: number;
  /**
   * scroll container height, used for calculating zoom level and fitting media within container
   */
  containerHeight: number;
  /**
   * calculated ratio
   */
  ratio: number;
  /**
   * calculated width based on zoom level, rotation and container size
   */
  width: number;
  /**
   * calculated height based on zoom level, rotation and container size
   */
  height: number;
  /**
   * media wrapper width, used for cropping and rotation
   */
  wrapperWidth: number;
  /**
   * media wrapper height, used for cropping and rotation
   */
  wrapperHeight: number;
  zoomLevel: number;
  flipX: boolean;
  flipY: boolean;
  canReset: boolean;
  rotate: 0 | 90 | 180 | 270;
  rotateMultiplier: number;
  mode: "default" | "splitter" | "cropper" | "editor" | "cutter";
  cropMode: "rect" | "ellipse" | "draw";
  colorscape: {
    brightness: number;
    contrast: number;
    saturate: number;
    hue: number;
    invert: number;
  };
}

type ViewActions<T> =
  | { type: "reset" }
  | { type: "resetColorscape" }
  | { type: "flipVertical" }
  | { type: "flipHorizontal" }
  | { type: "rotate"; change: 90 | -90 }
  | { type: "changeMode"; mode: ViewState["mode"] }
  | { type: "changeCropMode"; mode: ViewState["cropMode"] }
  | { type: "recalculate"; width: number; height: number }
  | { type: "zoom"; level: number }
  | { type: "colorscape"; key: keyof ViewState["colorscape"]; value: number }
  | {
      type: "loaded";
      media: T;
    };

const calculateSize = (ow: number, oh: number, cw: number, ch: number, zoom: number, rotate: number) => {
  // start with original dimensions
  let width = ow;
  let height = oh;
  const rotated = rotate % 180 !== 0;

  if (zoom > 0) {
    width = ow * zoom;
    height = oh * zoom;
  }

  /**
   * aspect ratio to resize media element
   *
   * 300x200 => 1.5
   * 200x300 => 0.6667
   * 400x400 => 1
   */
  const aspectRatio = width / height;

  if (zoom === -1 && !rotated) {
    /**
     * check whether the height should be full container height
     * 300x200 in 800x600 container => fit by height (600/200 < 800/300) false
     * 200x300 in 800x600 container => fit by height (600/300 > 800/200) true
     */
    const fitByHeight = ch / height < cw / width;
    /**
     * resize width to maintain aspect ratio based on whether we are fitting by height or width
     * if fit by height, width should be height * aspect ratio, otherwise it should be container width
     * 300x200 in 800x600 container => fit by height false => width = container width (800) and height = width / aspect ratio (800/1.5 = 533.33)
     * 200x300 in 800x600 container => fit by height true => width = height * aspect ratio (600*0.6667 = 400) and height = container height (600)
     */
    width = fitByHeight ? ch * aspectRatio : cw;
    height = fitByHeight ? ch : cw / aspectRatio;
  }
  if (zoom === -1 && rotated) {
    /**
     * check whether the height should be full container height
     * 300x200 in 800x600 container => fit by height (600/300 < 800/200) true
     * 200x300 in 800x600 container => fit by height (600/200 > 800/300) false
     */
    const fitByHeight = ch / width < cw / height;
    /**
     * resize width to maintain aspect ratio based on whether we are fitting by height or width
     * if fit by height, width should be height * aspect ratio, otherwise it should be container width
     * 300x200 in 800x600 container => fit by height true => width = container height (600) and height = width / aspect ratio (600/1.5 = 400)
     * 200x300 in 800x600 container => fit by height false => width = height * aspect ratio (800*0.6667 = 533.36) and height = container width (800)
     */
    width = fitByHeight ? ch : cw * aspectRatio;
    height = fitByHeight ? ch / aspectRatio : cw;
  }

  if (isNaN(width) || isNaN(height)) {
    width = 0;
    height = 0;
  }

  return {
    width,
    height,
    wrapperWidth: rotated ? height : width,
    wrapperHeight: rotated ? width : height,
    ratio: width / ow,
  };
};

export const useViewState = <T extends HTMLElement>(restrictFit = false) => {
  const [state, dispatch] = useReducer(
    (state: ViewState, action: ViewActions<T>) => {
      if (action.type === "loaded") {
        if (action.media instanceof HTMLImageElement) {
          state.originalWidth = action.media.naturalWidth;
          state.originalHeight = action.media.naturalHeight;
        }
        if (action.media instanceof HTMLVideoElement) {
          state.originalWidth = action.media.videoWidth;
          state.originalHeight = action.media.videoHeight;
        }
      }
      if (action.type === "rotate") {
        // increment/decrement rotateDir to create a multiplier for rotation transition
        state.rotateMultiplier += action.change < 0 ? -1 : 1;
        if (state.rotateMultiplier > 400) state.rotateMultiplier = 0;
        if (state.rotateMultiplier < -400) state.rotateMultiplier = 0;
        // update rotate based on change and ensure it stays within 0-270 for display and debug
        state.rotate += action.change;
        if (state.rotate >= 360) state.rotate = 0;
        if (state.rotate < 0) state.rotate = 270;
      }
      if (action.type === "zoom") {
        state.zoomLevel = action.level;
      }
      if (action.type === "recalculate") {
        state.containerWidth = action.width - PADDING;
        state.containerHeight = action.height - PADDING;
      }
      if (action.type === "changeMode") {
        state.mode = action.mode;
      }
      if (action.type === "changeCropMode") {
        state.cropMode = action.mode;
      }
      if (action.type === "flipHorizontal") {
        state.flipX = !state.flipX;
      }
      if (action.type === "flipVertical") {
        state.flipY = !state.flipY;
      }

      if (action.type === "colorscape") {
        state.colorscape[action.key] = action.value;
        return { ...state };
      }

      if (action.type === "resetColorscape") {
        state.colorscape = {
          brightness: 1,
          contrast: 1,
          saturate: 1,
          hue: 0,
          invert: 0,
        };
      }
      if (action.type === "reset") {
        state.colorscape = {
          brightness: 1,
          contrast: 1,
          saturate: 1,
          hue: 0,
          invert: 0,
        };
        state.flipX = false;
        state.flipY = false;
        state.rotate = 0;
        state.rotateMultiplier = 0;
        state.zoomLevel = -1;
      }

      if (
        state.zoomLevel > 0 &&
        restrictFit &&
        (state.originalWidth > state.containerWidth || state.originalHeight > state.containerHeight)
      ) {
        state.zoomLevel = -1;
      }

      state.canReset =
        state.zoomLevel !== -1 ||
        state.rotate !== 0 ||
        state.flipX ||
        state.flipY ||
        state.colorscape.brightness !== 1 ||
        state.colorscape.contrast !== 1 ||
        state.colorscape.saturate !== 1 ||
        state.colorscape.hue !== 0 ||
        state.colorscape.invert !== 0;

      return {
        ...state,
        ...calculateSize(
          state.originalWidth,
          state.originalHeight,
          state.containerWidth,
          state.containerHeight,
          state.mode === "splitter" ? -1 : state.zoomLevel,
          state.rotate,
        ),
      };
    },
    {
      originalWidth: 0,
      originalHeight: 0,
      containerWidth: 0,
      containerHeight: 0,
      ratio: 1,
      width: 0,
      height: 0,
      wrapperWidth: 0,
      wrapperHeight: 0,
      zoomLevel: -1,
      rotate: 0,
      flipX: false,
      flipY: false,
      rotateMultiplier: 0,
      mode: "default",
      cropMode: "rect",
      canReset: false,
      colorscape: {
        brightness: 1,
        invert: 0,
        hue: 0,
        contrast: 1,
        saturate: 1,
      },
    },
  );

  const ref = useRef<T | null>(null);

  return {
    ref,
    state,
    onViewLoad(e: React.SyntheticEvent<T>) {
      dispatch({ type: "loaded", media: e.currentTarget });
    },
    rotateLeft() {
      dispatch({ type: "rotate", change: -90 });
    },
    rotateRight() {
      dispatch({ type: "rotate", change: 90 });
    },
    flipHorizontal() {
      dispatch({ type: "flipHorizontal" });
    },
    flipVertical() {
      dispatch({ type: "flipVertical" });
    },
    zoom(level: number) {
      dispatch({ type: "zoom", level });
    },
    recalculate({ width, height }: { width: number; height: number }) {
      dispatch({ type: "recalculate", width, height });
    },
    reset() {
      dispatch({ type: "reset" });
    },
    resetColorscape() {
      dispatch({ type: "resetColorscape" });
    },
    changeMode(mode: ViewState["mode"]) {
      dispatch({ type: "changeMode", mode });
    },
    changeCropMode(mode: ViewState["cropMode"]) {
      dispatch({ type: "changeCropMode", mode });
    },
    changeColorscape(key: keyof ViewState["colorscape"], value: number) {
      dispatch({
        type: "colorscape",
        key,
        value,
      });
    },
  };
};
