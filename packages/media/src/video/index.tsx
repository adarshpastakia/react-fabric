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

import { Layout, LoadingSpinner, ThemeProvider, useDebounce } from "@react-fabric/core";
import type Konva from "konva";
import { useEffect, useImperativeHandle, useMemo, useRef } from "react";
import { useSource } from "../hooks/useSource";
import { useViewState } from "../hooks/useViewState";
import { NsfwOverlay } from "../nsfw";
import { exportImage, unrotate } from "../uitls";
import { VideoContext } from "./context";
import type { VideoProps } from "./types";
import { useVideoState } from "./useVideoState";
import { VideoWrapper } from "./Wrapper";

/**
 * VideoPlayer component is a versatile and feature-rich video player.
 *
 * Notable features:
 * - Supports video playback with controls for play, pause, and seek.
 * - Handles loading and error states, displaying a placeholder icon if the video fails to load.
 * - Draw annotations on the video using a canvas overlay, built using konva.js.
 * - Export and crop the video with annotations and transformations using canvas APIs, allowing for advanced video manipulation.
 * - Supports VTT subtitles, markers, and comments that can be displayed at specific timestamps during video playback.
 */
export function VideoPlayer({
  src,
  missingIcon,
  nsfw,
  poster,
  autoPlay,
  annotations,
  annotationTimeWindow,
  autoHideToolbar,
  vttText,
  markers,
  comments,
  onCommentChange,
  onContextMenu,
  onTimeChange,
  onDebug,
  onError,
  onLoad,
  onExport,
  onCrop,
  onCut,
  ref,
}: VideoProps) {
  const source = useSource({ src, onLoad, onError });
  const viewState = useViewState<HTMLVideoElement>(true);
  const videoState = useVideoState(viewState.ref, annotationTimeWindow, annotations);
  const canvasRef = useRef<Konva.Layer | null>(null);

  useEffect(() => {
    viewState.changeMode("default");
    // eslint-disable-next-line @eslint-react/exhaustive-deps
  }, [src]);

  const handleDebug = useDebounce(onDebug, []);
  useEffect(() => {
    handleDebug({
      originalSize: [+viewState.state.originalWidth.toFixed(2), +viewState.state.originalHeight.toFixed(2)],
      viewSize: [+viewState.state.width.toFixed(2), +viewState.state.height.toFixed(2)],
      zoom: +viewState.state.ratio.toFixed(2),
      rotation: viewState.state.rotate,
      flipHorizontal: viewState.state.flipX,
      flipVertical: viewState.state.flipY,
    });
  }, [
    viewState.state.ratio,
    viewState.state.rotate,
    viewState.state.flipX,
    viewState.state.flipY,
    viewState.state.width,
    viewState.state.height,
    viewState.state.originalWidth,
    viewState.state.originalHeight,
    handleDebug,
  ]);

  const canCrop = useMemo(() => !!onCrop, [onCrop]);
  const canExport = useMemo(() => !!onExport, [onExport]);
  const fireExport = () => {
    onExport?.(
      exportImage({
        width: viewState.state.originalWidth,
        height: viewState.state.originalHeight,
        rotate: viewState.state.rotate,
        flipX: viewState.state.flipX,
        flipY: viewState.state.flipY,
        colorscape: viewState.state.colorscape,
        mediaEl: viewState.ref.current,
        canvasEl: canvasRef.current,
      }),
      videoState.state.currentTime,
    );
  };

  useEffect(() => {
    const handler = (e: HTMLVideoElementEventMap["timeupdate"]) => {
      onTimeChange?.((e.target as HTMLVideoElement).currentTime);
    };
    viewState.ref.current?.addEventListener("timeupdate", handler);
    return () => {
      viewState.ref.current?.removeEventListener("timeupdate", handler);
    };
    // eslint-disable-next-line @eslint-react/exhaustive-deps
  }, [onTimeChange, viewState.ref.current]);

  useImperativeHandle(ref, () => ({
    play() {
      videoState.play();
    },
    pause() {
      videoState.pause();
    },
    seek(time: number) {
      videoState.seek(time);
    },
    seekAndPlay(time: number) {
      videoState.seekAndPlay(time);
    },
    export() {
      return exportImage({
        width: viewState.state.originalWidth,
        height: viewState.state.originalHeight,
        rotate: viewState.state.rotate,
        flipX: viewState.state.flipX,
        flipY: viewState.state.flipY,
        colorscape: viewState.state.colorscape,
        mediaEl: viewState.ref.current,
        canvasEl: canvasRef.current,
      });
    },
    crop(crop) {
      return exportImage({
        rotate: viewState.state.rotate,
        flipX: viewState.state.flipX,
        flipY: viewState.state.flipY,
        colorscape: viewState.state.colorscape,
        mediaEl: viewState.ref.current,
        canvasEl: canvasRef.current,
        ...unrotate(
          viewState.state.rotate,
          viewState.state.flipX,
          viewState.state.flipY,
          viewState.state.originalWidth,
          viewState.state.originalHeight,
          { ...crop, cropArea: { type: "rect" } },
        ),
      });
    },
  }));

  return (
    <ThemeProvider colorScheme="dark">
      <VideoContext
        value={{
          source,
          viewState,
          videoState,
          missingIcon,
          poster,
          autoPlay,
          canCrop,
          canExport,
          canvasRef,
          fireExport,
        }}
      >
        <Layout dir="ltr" className="relative bg-dimmed">
          <VideoWrapper
            autoHideToolbar={autoHideToolbar}
            comments={comments}
            vttText={vttText}
            markers={markers}
            onCut={onCut}
            onCrop={onCrop}
            onContextMenu={onContextMenu}
            onCommentChange={onCommentChange}
          />
          {source.state.loading && <LoadingSpinner size="1.5rem" />}
          {nsfw && <NsfwOverlay {...(typeof nsfw === "object" ? nsfw : {})} />}
        </Layout>
      </VideoContext>
    </ThemeProvider>
  );
}
