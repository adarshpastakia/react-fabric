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

import {
  createContext,
  type PropsWithChildren,
  useCallback,
  useContext,
  useImperativeHandle,
  useMemo,
  useRef,
} from "react";
import { CanvasProvider, type CanvasRef } from "../components/Canvas";
import { type VideoProps } from "./types";
import { useViewReducer } from "./useReducer";

interface ContextType extends ReturnType<typeof useViewReducer> {
  exportToBase64: () => string | null;
}

const Context = createContext<ContextType>({} as ContextType);

export const VideoProvider = ({
  children,
  ref,
  annotations,
  ...props
}: PropsWithChildren & VideoProps<KeyValue>) => {
  const canvasImperativeRef = useRef<CanvasRef>(null);
  const { videoRef, canvasRef, state, ...reducer } = useViewReducer(props);

  useImperativeHandle(
    ref,
    () =>
      ({
        seek: (ts: number) =>
          videoRef.current && (videoRef.current.currentTime = ts),
        play: async () => await videoRef.current?.play(),
        playAt: async (time: number) =>
          await (videoRef.current &&
            ((videoRef.current.currentTime = time), videoRef.current?.play())),
        pause: () => videoRef.current?.pause(),
        currentTime: () => videoRef.current?.currentTime ?? 0,
        on: videoRef.current?.addEventListener.bind(videoRef.current),
        off: videoRef.current?.removeEventListener.bind(videoRef.current),
        toBase64: () => {
          return exportToBase64();
        },
        ...canvasImperativeRef.current,
      }) as any,
    [canvasRef, videoRef],
  );

  const exportToBase64 = useCallback(() => {
    if (!videoRef.current?.paused)
      throw Error("Pause the video to capture video frame");
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    if (context && videoRef.current) {
      const width = (canvas.width = videoRef.current.videoWidth);
      const height = (canvas.height = videoRef.current.videoHeight);
      if (state.rotate === 90) {
        canvas.width = height;
        canvas.height = width;
        context.translate(height, 0);
        context.rotate((90 * Math.PI) / 180);
      }
      if (state.rotate === 180) {
        context.translate(width, height);
        context.rotate((180 * Math.PI) / 180);
      }
      if (state.rotate === 270) {
        canvas.width = height;
        canvas.height = width;
        context.translate(0, width);
        context.rotate((270 * Math.PI) / 180);
      }
      context.filter = `
            brightness(${state.colorscape.brightness}) 
            contrast(${state.colorscape.contrast}) 
            saturate(${state.colorscape.saturate}) 
            hue-rotate(${state.colorscape.hue}deg)
            invert(${state.colorscape.invert})`;
      context.drawImage(videoRef.current, 0, 0);
      context.filter = "none";
      canvasRef.current &&
        context.drawImage(
          canvasRef.current,
          0,
          0,
          canvasRef.current.width,
          canvasRef.current.height,
          0,
          0,
          width,
          height,
        );
      try {
        return canvas.toDataURL("image/png");
      } catch {
        //
      }
    }
    return null;
  }, [state.colorscape, state.rotate, state.mediaWidth, state.mediaHeight]);

  const annotate = useMemo(() => {
    return annotations?.filter(
      (a) => state.time >= a.start && state.time <= a.end,
    );
  }, [annotations, state.time]);

  return (
    <Context.Provider
      value={{
        videoRef,
        canvasRef,
        state,
        exportToBase64,
        ...reducer,
      }}
    >
      <CanvasProvider
        ref={canvasImperativeRef}
        mediaRef={videoRef}
        canvasRef={canvasRef}
        width={state.width}
        annotations={annotate}
      >
        {children}
      </CanvasProvider>
    </Context.Provider>
  );
};

export const useVideoContext = () => useContext(Context);
