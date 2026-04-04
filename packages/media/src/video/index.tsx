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

import { LoadingSpinner, Section, ThemeProvider, useDebounce } from "@react-fabric/core";
import Konva from "konva";
import { useEffect, useEffectEvent, useImperativeHandle, useMemo, useRef } from "react";
import { useSource } from "../hooks/useSource";
import { useViewState } from "../hooks/useViewState";
import { NsfwOverlay } from "../nsfw";
import { exportImage, unrotate } from "../uitls";
import { VideoContext } from "./context";
import { VideoProps } from "./types";
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
 *
 * @prop {string} src - The source URL of the video to be played.
 * @prop {string} poster - An optional image URL to be shown as the video poster before playback starts.
 * @prop {boolean} autoPlay - A flag to determine if the video should start playing automatically.
 * @prop {Array} annotations - An array of annotation objects to be rendered on the video at specific timestamps.
 * @prop {number} annotationTimeWindow - The time window in seconds for which annotations should be displayed around their specified timestamp.
 * @prop {boolean|object} nsfw - A flag or configuration object to display a NSFW overlay on the video.
 * @prop {string} vttText - An optional string containing VTT subtitle data to be displayed during video playback.
 * @prop {Array} markers - An array of marker objects that can be displayed on the video's progress bar at specific timestamps.
 * @prop {Array} comments - An array of comment objects that can be displayed at specific timestamps during video playback, allowing for interactive discussions or notes related to the video content.
 * @prop {boolean} autoHideToolbar - Auto hide the toolbar when not hovered, providing a cleaner viewing experience.
 * @prop {function} onCommentChange - A callback function that is triggered when a comment is added, edited, or deleted, providing the updated list of comments.
 * @prop {function} onContextMenu - A callback function that is triggered when the context menu is opened on the video.
 * @prop {function} onTimeChange - A callback function that is triggered when the video's current time changes, providing the new current time.
 * @prop {function} onDebug - A callback function that provides debug information about the video state and transformations.
 * @prop {function} onError - A callback function that is triggered when an error occurs while loading the video.
 * @prop {function} onLoad - A callback function that is triggered when the video has successfully loaded.
 * @prop {function} onExport - A callback function that is triggered when the video is exported with transformations and annotations, providing the exported video data and the current time of the video.
 * @prop {function} onCrop - A callback function that is triggered when a crop action is performed on the video, providing the cropped area details and the current time of the video.
 * @prop {function} onCut - A callback function that is triggered when a cut action is performed on the video, providing the start and end times of the cut segment.
 *
 * @returns {JSX.Element} The rendered VideoPlayer component.
 */
export const VideoPlayer = ({
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
}: VideoProps) => {
  const source = useSource({ src, onLoad, onError });
  const viewState = useViewState<HTMLVideoElement>(true);
  const videoState = useVideoState(viewState.ref, annotationTimeWindow, annotations);
  const canvasRef = useRef<Konva.Layer | null>(null);

  useEffect(() => {
    viewState.changeMode("default");
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
  ]);

  const canCrop = useMemo(() => !!onCrop, [onCrop]);
  const canExport = useMemo(() => !!onExport, [onExport]);
  const fireExport = useEffectEvent(() => {
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
  });

  useEffect(() => {
    const handler = (e: any) => {
      onTimeChange?.((e.target as HTMLVideoElement).currentTime);
    };
    viewState.ref.current?.addEventListener("timeupdate", handler);
    return () => {
      viewState.ref.current?.removeEventListener("timeupdate", handler);
    };
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
      <VideoContext.Provider
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
        <Section dir="ltr" className="relative bg-dimmed">
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
        </Section>
      </VideoContext.Provider>
    </ThemeProvider>
  );
};
