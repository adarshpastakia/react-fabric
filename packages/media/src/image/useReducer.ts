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

import { getImageColorset } from "@react-fabric/utilities";
import {
  type SyntheticEvent,
  useCallback,
  useEffect,
  useReducer,
  useRef,
} from "react";
import { type ImageState } from "../types";
import { type ImageProps } from "./types";

type ImageActions =
  | { type: "loaded"; colorScheme: ImageState["colorScheme"] }
  | { type: "errored" }
  | {
      type: "resize";
      ratio: number;
      containerWidth: number;
      containerHeight: number;
    }
  | { type: "toggleFit" }
  | { type: "fitToView" }
  | { type: "fitToSize" }
  | { type: "image"; src: string }
  | { type: "overlay"; overlay?: string }
  | { type: "toggleSplitter" }
  | { type: "toggleCropping" }
  | { type: "startCropping" }
  | { type: "cancelCropping" }
  | { type: "zoom"; zoom: number; reset: boolean }
  | { type: "zoomScale"; zoom: number }
  | { type: "rotate"; rotate: number }
  | { type: "reset" }
  | { type: "resetColor" }
  | { type: "toggleSplitterOrientation" }
  | {
      type: "adjustColor";
      property: "contrast" | "brightness" | "invert" | "hue" | "saturate";
      value: number;
    };

export const useImageReducer = ({
  src,
  overlay,
  fallback,
  defaultSplitter = true,
  onLoad,
  onError,
}: ImageProps<KeyValue>) => {
  const imageRef = useRef<HTMLImageElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);

  const [state, dispatch] = useReducer(
    (state: ImageState, action: ImageActions) => {
      if (action.type === "loaded") {
        state.isLoading = false;
        state.isLoaded = true;
        state.colorScheme = action.colorScheme;
        setTimeout(() => onLoad?.(), 10);
      }
      if (action.type === "errored") {
        state.errorLevel++;
        if (state.errorLevel === 1) {
          if (fallback) {
            state.original = fallback;
            state.src = fallback;
          } else {
            state.errorLevel++;
          }
        }
        if (state.errorLevel === 2) {
          state.isLoading = false;
          state.isLoaded = true;
          setTimeout(() => onError?.(), 10);
        }
      }
      if (action.type === "resize") {
        state.ratio = action.ratio;
        state.containerWidth = action.containerWidth;
        state.containerHeight = action.containerHeight;
      }
      if (action.type === "toggleFit") {
        state.zoom = state.zoom === 0 ? 1 : 0;
      }
      if (action.type === "fitToView") {
        state.zoom = 0;
      }
      if (action.type === "fitToSize") {
        state.zoom = 1;
      }
      if (action.type === "toggleSplitterOrientation") {
        state.splitterOrient =
          state.splitterOrient === "vertical" ? "horizontal" : "vertical";
      }
      if (action.type === "image") {
        state.overlay = undefined;
        state.splitter = false;
        state.isLoaded = false;
        state.isErrored = false;
        state.isLoading = true;
        state.errorLevel = 0;
        state.original = action.src;
        state.src = action.src;
      }
      if (action.type === "overlay") {
        state.overlay = action.overlay;
        if (action.overlay) {
          state.splitter = defaultSplitter;
          state.src = defaultSplitter ? state.original : action.overlay;
        } else {
          state.splitter = false;
          state.src = state.original;
        }
      }
      if (action.type === "toggleSplitter") {
        state.splitter = !state.splitter;
        if (state.overlay) {
          state.src = state.splitter ? state.original : state.overlay;
        } else {
          state.src = state.original;
        }
      }
      if (action.type === "toggleCropping") {
        state.cropping = !state.cropping;
      }
      if (action.type === "startCropping") {
        state.cropping = true;
      }
      if (action.type === "cancelCropping") {
        state.cropping = false;
      }
      if (action.type === "zoom") {
        state.zoom += action.zoom;
        if (action.reset && state.zoom > 5) state.zoom = 0.5;
        state.zoom = Math.min(5, Math.max(0.1, state.zoom));
      }
      if (action.type === "zoomScale") {
        state.zoom = action.zoom;
      }
      if (action.type === "rotate") {
        state.rotate += action.rotate;
        state.rotate =
          state.rotate > 270 ? 0 : state.rotate < 0 ? 270 : state.rotate;
      }
      if (action.type === "reset") {
        state.rotate = 0;
        state.zoom = 0;
        state.colorscape = {
          brightness: 1,
          invert: 0,
          hue: 0,
          contrast: 1,
          saturate: 1,
        };
      }
      if (action.type === "resetColor") {
        state.colorscape = {
          brightness: 1,
          invert: 0,
          hue: 0,
          contrast: 1,
          saturate: 1,
        };
      }
      if (action.type === "adjustColor") {
        state.colorscape[action.property] = action.value;
      }
      if (state.zoom === 0) {
        const { containerWidth: _cw, containerHeight: _ch, ratio } = state;
        const cw = _cw - 16;
        const ch = _ch - 16;
        let [fitWidth, fitHeight] =
          cw > ch ? [ch * ratio, ch] : [cw, cw * ratio];
        if (state.rotate % 180 !== 0) {
          if (cw > ch) {
            fitWidth = ch;
            fitHeight = ch / ratio;
          } else {
            fitWidth = cw / ratio;
            fitHeight = cw;
          }
        }
        state.mediaWidth = fitWidth;
        state.mediaHeight = fitHeight;
      }
      if (state.zoom > 0 && imageRef.current) {
        const { naturalWidth: w, naturalHeight: h } = imageRef.current;
        const zoomLevel = state.splitter ? 1 : state.zoom;
        state.mediaWidth = w * zoomLevel;
        state.mediaHeight = h * zoomLevel;
      }
      state.width =
        state.rotate % 180 === 0 ? state.mediaWidth : state.mediaHeight;
      state.height =
        state.rotate % 180 === 0 ? state.mediaHeight : state.mediaWidth;

      return { ...state };
    },
    {
      mediaWidth: 0,
      mediaHeight: 0,
      containerWidth: 0,
      containerHeight: 0,
      ratio: 0,
      width: 0,
      height: 0,
      rotate: 0,
      zoom: 0,
      errorLevel: 0,
      src: "",
      colorScheme: "light",
      isLoading: true,
      isLoaded: false,
      isErrored: false,
      showSplitter: true,
      splitterOrient: "vertical",
      colorscape: {
        brightness: 1,
        invert: 0,
        hue: 0,
        contrast: 1,
        saturate: 1,
      },
    } as unknown as ImageState,
  );

  const calculateSize = useCallback(() => {
    if (imageRef.current && scrollerRef.current) {
      const { naturalWidth: w, naturalHeight: h } = imageRef.current;
      const { offsetWidth: cw, offsetHeight: ch } = scrollerRef.current;

      if (w > 0 && h > 0) {
        const ratio = w / h;

        dispatch({
          type: "resize",
          ratio,
          containerWidth: cw,
          containerHeight: ch,
        });
      }
    }
  }, []);

  useEffect(() => {
    if (scrollerRef.current != null) {
      const ob = new ResizeObserver(calculateSize);
      ob.observe(scrollerRef.current);

      return () => {
        ob.disconnect();
      };
    }
  }, [calculateSize]);

  useEffect(() => {
    dispatch({ type: "image", src });
  }, [src]);

  useEffect(() => {
    dispatch({ type: "overlay", overlay });
  }, [overlay]);

  const handleLoad = useCallback((e: SyntheticEvent<HTMLImageElement>) => {
    dispatch({
      type: "loaded",
      colorScheme: getImageColorset(
        e.currentTarget,
      ) as ImageState["colorScheme"],
    });
    calculateSize();
  }, []);

  const handleError = useCallback(() => {
    dispatch({ type: "errored" });
  }, []);

  const changeZoom = useCallback((zoom: number, reset = false) => {
    dispatch({ type: "zoom", zoom, reset });
  }, []);

  const zoomScale = useCallback((zoom: number) => {
    dispatch({ type: "zoomScale", zoom });
  }, []);

  const rotate = useCallback((rotation: -90 | 90) => {
    dispatch({ type: "rotate", rotate: rotation });
  }, []);

  const fitToSize = useCallback(() => {
    dispatch({ type: "fitToSize" });
  }, []);

  const fitToView = useCallback(() => {
    dispatch({ type: "fitToView" });
  }, []);

  const toggleFit = useCallback(() => {
    dispatch({ type: "toggleFit" });
  }, []);

  const toggleCropping = useCallback(() => {
    dispatch({ type: "toggleCropping" });
  }, []);

  const startCropping = useCallback(() => {
    dispatch({ type: "startCropping" });
  }, []);

  const cancelCropping = useCallback(() => {
    dispatch({ type: "cancelCropping" });
  }, []);

  const toggleSplitter = useCallback(() => {
    dispatch({ type: "toggleSplitter" });
  }, []);

  const reset = useCallback(() => {
    dispatch({ type: "reset" });
  }, []);

  const resetColor = useCallback(() => {
    dispatch({ type: "resetColor" });
  }, []);

  const toggleSplitterOrientation = useCallback(() => {
    dispatch({ type: "toggleSplitterOrientation" });
  }, []);

  const adjustColor = useCallback(
    (
      property: "contrast" | "brightness" | "invert" | "saturate" | "hue",
      value: number,
    ) => {
      dispatch({ type: "adjustColor", property, value });
    },
    [],
  );

  return {
    imageRef,
    canvasRef,
    scrollerRef,
    state,
    handleLoad,
    handleError,
    calculateSize,
    toggleSplitterOrientation,
    changeZoom,
    zoomScale,
    rotate,
    fitToSize,
    fitToView,
    toggleFit,
    toggleCropping,
    startCropping,
    cancelCropping,
    toggleSplitter,
    reset,
    resetColor,
    adjustColor,
  };
};
