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
import {
  createContext,
  type PropsWithChildren,
  type RefObject,
  useCallback,
  useContext,
  useEffect,
  useReducer,
  useRef,
} from "react";
import { CanvasProvider, type CanvasRef } from "../canvas/Context";

interface ContextType {
  imageRef: RefObject<HTMLImageElement>;
  scrollerRef: RefObject<HTMLDivElement>;

  state: ImageState;

  handleLoad: () => void;
  handleError: () => void;
  reset: () => void;
  fitToSize: () => void;
  fitToView: () => void;
  toggleFit: () => void;
  toggleSplitter: () => void;
  toggleCropping: () => void;
  cancelCropping: () => void;
  startCropping: () => void;
  rotate: (rotation: -90 | 90) => void;
  zoomScale: (zoom: number) => void;
  changeZoom: (zoom: number, reset?: boolean) => void;
}

const Context = createContext<ContextType>({} as ContextType);

interface ImageState {
  imageWidth: number;
  imageHeight: number;
  containerWidth: number;
  containerHeight: number;
  ratio: number;
  width: number;
  height: number;
  rotate: number;
  zoom: number;
  src: string;
  image: string;
  errorLevel: number;
  overlay?: string;
  cropping: boolean;
  splitter: boolean;
  isLoading: boolean;
  isLoaded: boolean;
  isErrored: boolean;
  showSplitter: boolean;
}

type ImageActions =
  | { type: "loaded" }
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
  | { type: "rotate"; rotate: number };

export const ImageProvider = ({
  children,
  src,
  ref,
  fallback,
  overlay,
  onLoad,
  onError,
}: PropsWithChildren &
  RefProp<CanvasRef> & {
    src: string;
    fallback?: string;
    overlay?: string;
    onLoad?: () => void;
    onError?: () => void;
  }) => {
  const imageRef = useRef<HTMLImageElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);

  const [state, dispatch] = useReducer(
    (state: ImageState, action: ImageActions) => {
      if (action.type === "loaded") {
        state.isLoading = false;
        state.isLoaded = true;
        onLoad?.();
      }
      if (action.type === "errored") {
        state.errorLevel++;
        if (state.errorLevel === 1) {
          if (fallback) {
            state.image = fallback;
            state.src = fallback;
          } else {
            state.errorLevel++;
          }
        }
        if (state.errorLevel === 2) {
          state.isLoading = false;
          state.isLoaded = true;
          onError?.();
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
      if (action.type === "image") {
        state.overlay = undefined;
        state.splitter = false;
        state.isLoaded = false;
        state.isErrored = false;
        state.isLoading = true;
        state.errorLevel = 0;
        state.image = action.src;
        state.src = action.src;
      }
      if (action.type === "overlay") {
        state.splitter = !!action.overlay;
        state.overlay = action.overlay;
        state.src = state.image;
      }
      if (action.type === "toggleSplitter") {
        state.splitter = !state.splitter;
        state.src =
          state.src === state.image && state.overlay
            ? state.overlay
            : state.image;
      }
      if (action.type === "toggleCropping") {
        state.cropping = !state.cropping;
      }
      if (action.type === "startCropping") {
        state.cropping = false;
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
      if (state.zoom === 0) {
        const { containerWidth: cw, containerHeight: ch, ratio } = state;
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
        state.imageWidth = fitWidth - 16;
        state.imageHeight = fitHeight - 16;
      }
      if (state.zoom > 0 && imageRef.current) {
        const { naturalWidth: w, naturalHeight: h } = imageRef.current;
        const zoomLevel = state.splitter ? 1 : state.zoom;
        state.imageWidth = w * zoomLevel;
        state.imageHeight = h * zoomLevel;
      }
      state.width =
        state.rotate % 180 === 0 ? state.imageWidth : state.imageHeight;
      state.height =
        state.rotate % 180 === 0 ? state.imageHeight : state.imageWidth;

      return { ...state };
    },
    {
      imageWidth: 0,
      imageHeight: 0,
      containerWidth: 0,
      containerHeight: 0,
      ratio: 0,
      width: 0,
      height: 0,
      rotate: 0,
      zoom: 0,
      errorLevel: 0,
      src: "",
      isLoading: true,
      isLoaded: false,
      isErrored: false,
      showSplitter: true,
    } as ImageState,
  );

  useEffect(() => {
    dispatch({ type: "image", src });
  }, [src]);

  useEffect(() => {
    dispatch({ type: "overlay", overlay });
  }, [overlay]);

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

  const handleLoad = useCallback(() => {
    dispatch({ type: "loaded" });
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
    dispatch({ type: "zoomScale", zoom: 0 });
    dispatch({ type: "rotate", rotate: 0 });
  }, []);

  return (
    <Context.Provider
      value={{
        imageRef,
        scrollerRef,
        state,
        reset,
        rotate,
        handleLoad,
        handleError,
        zoomScale,
        fitToSize,
        fitToView,
        toggleFit,
        changeZoom,
        toggleSplitter,
        toggleCropping,
        cancelCropping,
        startCropping,
      }}
    >
      <CanvasProvider ref={ref} mediaEl={imageRef} width={state.width}>
        {children}
      </CanvasProvider>
    </Context.Provider>
  );
};

export const useImageContext = () => useContext(Context);
