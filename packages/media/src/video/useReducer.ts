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

import {
  type SyntheticEvent,
  useCallback,
  useEffect,
  useReducer,
  useRef,
} from "react";
import { type VideoState } from "../types";
import { type VideoProps } from "./types";

type VideoActions =
  | { type: "loaded" }
  | { type: "errored"; data?: MediaError }
  | { type: "toggleVtt" }
  | { type: "srcChange"; src: string }
  | {
      type: "resize";
      ratio: number;
      containerWidth: number;
      containerHeight: number;
    }
  | { type: "toggleFit" }
  | { type: "fitToView" }
  | { type: "fitToSize" }
  | { type: "toggleCropping" }
  | { type: "startCropping" }
  | { type: "cancelCropping" }
  | { type: "rotate"; rotate: number }
  | { type: "metadata"; duration: number; volume: number; speed: number }
  | { type: "reset"; audio: string }
  | { type: "playing"; time: number }
  | { type: "volume"; volume: number }
  | { type: "speed"; speed: number }
  | { type: "play" }
  | { type: "pause" }
  | { type: "resetColor" }
  | {
      type: "adjustColor";
      property: "contrast" | "brightness" | "invert" | "hue" | "saturate";
      value: number;
    };

export const useViewReducer = ({
  src,
  fallback,
  onLoad,
  onError,
  onPlay,
  onPause,
  onChange,
}: VideoProps<KeyValue>) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);

  const [state, dispatch] = useReducer(
    (state: VideoState, action: VideoActions) => {
      if (action.type === "loaded") {
        state.isLoading = false;
        state.isLoaded = true;
        setTimeout(() => onLoad?.(), 10);
      }
      if (action.type === "errored") {
        state.errorLevel++;
        if (state.errorLevel === 1) {
          if (fallback) {
            state.src = fallback;
          } else {
            state.errorLevel++;
          }
        }
        if (state.errorLevel === 2) {
          state.isLoading = false;
          state.isLoaded = true;
          setTimeout(() => onError?.(action.data), 10);
        }
      }
      if (action.type === "metadata") {
        state.duration = action.duration;
        state.volume = action.volume;
        state.speed = action.speed;
      }
      if (action.type === "play") {
        onPlay?.();
        return { ...state, isPlaying: true };
      }
      if (action.type === "pause") {
        onPause?.();
        return { ...state, isPlaying: false };
      }
      if (action.type === "playing") {
        onChange?.(action.time);
        return { ...state, time: action.time };
      }
      if (action.type === "volume") {
        return { ...state, volume: action.volume };
      }
      if (action.type === "speed") {
        return { ...state, speed: action.speed };
      }
      if (action.type === "toggleVtt") {
        return { ...state, showVtt: !state.showVtt };
      }
      if (action.type === "srcChange") {
        state.isLoaded = false;
        state.isLoading = true;
        state.src = action.src;
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
      if (action.type === "rotate") {
        state.rotate += action.rotate;
        state.rotate =
          state.rotate > 270 ? 0 : state.rotate < 0 ? 270 : state.rotate;
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
      if (action.type === "toggleCropping") {
        state.cropping = !state.cropping;
      }
      if (action.type === "startCropping") {
        state.cropping = true;
      }
      if (action.type === "cancelCropping") {
        state.cropping = false;
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
      if (state.zoom > 0 && videoRef.current) {
        const { videoWidth: w, videoHeight: h } = videoRef.current;
        state.mediaWidth = Math.min(state.containerWidth - 16, w);
        state.mediaHeight = Math.min(state.containerHeight - 16, h);
        if (state.mediaHeight !== h) {
          state.mediaWidth = state.mediaHeight * (w / h);
        }
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
      cropping: false,
      isLoading: true,
      isLoaded: false,
      isErrored: false,
      isPlaying: false,
      time: 0,
      duration: 0,
      volume: 0.5,
      speed: 1,
      showVtt: false,
      colorscape: {
        brightness: 1,
        invert: 0,
        hue: 0,
        contrast: 1,
        saturate: 1,
      },
    } as VideoState,
  );

  const calculateSize = useCallback(() => {
    if (videoRef.current && scrollerRef.current) {
      const { videoWidth: w, videoHeight: h } = videoRef.current;
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
    dispatch({ type: "srcChange", src });
  }, [src]);

  const handleLoad = useCallback(() => {
    dispatch({ type: "loaded" });
    calculateSize();
  }, []);

  const handleError = useCallback((e: SyntheticEvent<HTMLVideoElement>) => {
    dispatch({ type: "errored", data: e.currentTarget.error ?? undefined });
  }, []);

  const handleMetadata = useCallback(() => {
    dispatch({
      type: "metadata",
      speed: videoRef.current?.playbackRate ?? 0,
      volume: videoRef.current?.volume ?? 0,
      duration: videoRef.current?.duration ?? 0,
    });
  }, []);

  const rotate = useCallback((rotation: number) => {
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

  const reset = useCallback(() => {
    dispatch({ type: "rotate", rotate: 0 });
  }, []);

  const toggleVtt = useCallback(() => {
    dispatch({ type: "toggleVtt" });
  }, []);

  const handlePlay = useCallback(() => dispatch({ type: "play" }), []);
  const handlePause = useCallback(() => dispatch({ type: "pause" }), []);
  const handleRateChange = useCallback(
    () =>
      dispatch({
        type: "speed",
        speed: videoRef.current?.playbackRate ?? 0,
      }),
    [],
  );
  const handleVolumeChange = useCallback(
    () =>
      dispatch({
        type: "volume",
        volume: videoRef.current?.volume ?? 0,
      }),
    [],
  );
  const handleSeeking = useCallback(
    () =>
      dispatch({
        type: "playing",
        time: videoRef.current?.currentTime ?? 0,
      }),
    [],
  );
  const handleTimeUpdate = useCallback(
    () =>
      dispatch({
        type: "playing",
        time: videoRef.current?.currentTime ?? 0,
      }),
    [],
  );

  const toggleCropping = useCallback(() => {
    dispatch({ type: "toggleCropping" });
  }, []);

  const startCropping = useCallback(() => {
    dispatch({ type: "startCropping" });
  }, []);

  const cancelCropping = useCallback(() => {
    dispatch({ type: "cancelCropping" });
  }, []);

  const resetColor = useCallback(() => {
    dispatch({ type: "resetColor" });
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
    videoRef,
    canvasRef,
    scrollerRef,
    state,
    handleLoad,
    handleError,
    handleMetadata,
    handlePlay,
    handlePause,
    handleRateChange,
    handleVolumeChange,
    handleSeeking,
    handleTimeUpdate,
    rotate,
    fitToSize,
    fitToView,
    toggleFit,
    reset,
    toggleVtt,
    toggleCropping,
    startCropping,
    cancelCropping,
    resetColor,
    adjustColor,
  };
};
