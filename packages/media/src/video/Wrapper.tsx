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

import { HotKey, Icon, Section, useResizeObserver } from "@react-fabric/core";
import { SizeObject } from "@react-fabric/core/dist/types/types";
import classNames from "classnames";
import { useEffectEvent, WheelEvent } from "react";
import { Canvas } from "../canvas";
import { Cropper } from "../cropper";
import { CropProps } from "../typedefs";
import { chain, exportImage, unrotate } from "../uitls";
import { useVideoContext } from "./context";
import { Tools } from "./Tools";
import { VideoProps } from "./types";
import { Video } from "./Video";

export const VideoWrapper = ({
  autoHideToolbar,
  vttText,
  markers,
  comments,
  onCut,
  onCrop,
  onCommentChange,
  onContextMenu,
}: Pick<
  VideoProps,
  "autoHideToolbar" | "onCrop" | "vttText" | "markers" | "comments" | "onCut" | "onCommentChange" | "onContextMenu"
>) => {
  const { viewState, videoState, source, canvasRef, fireExport } = useVideoContext();

  const containerRef = useResizeObserver((size: SizeObject) => {
    viewState.recalculate(size);
  });

  const handleZoomWheel = (e: WheelEvent) => {
    if (e.shiftKey) {
      const newZoom = Math.max(0.5, Math.min(5, viewState.state.ratio + (e.deltaY < 0 ? -0.05 : 0.05)));
      viewState.zoom(newZoom);
    }
  };

  const fireCrop = useEffectEvent((crop: CropProps) => {
    const actualCrop = unrotate(
      viewState.state.rotate,
      viewState.state.flipX,
      viewState.state.flipY,
      viewState.state.originalWidth,
      viewState.state.originalHeight,
      crop,
    );
    onCrop?.(
      exportImage({
        rotate: viewState.state.rotate,
        flipX: viewState.state.flipX,
        flipY: viewState.state.flipY,
        colorscape: viewState.state.colorscape,
        mediaEl: viewState.ref.current,
        canvasEl: canvasRef.current,
        ...actualCrop,
      }),
      videoState.state.currentTime,
      [actualCrop.x, actualCrop.y, actualCrop.width, actualCrop.height],
    );
  });

  return (
    <Section className="relative z-0">
      <HotKey keyCombo="e" handler={fireExport} />
      <HotKey keyCombo="c" handler={videoState.toggleVtt} />
      <HotKey keyCombo="f" handler={() => viewState.zoom(viewState.state.zoomLevel === -1 ? 1 : -1)} />
      <HotKey keyCombo="space" handler={() => videoState.togglePlay()} />
      <HotKey keyCombo="shift+{" handler={() => viewState.rotateLeft()} />
      <HotKey keyCombo="shift+}" handler={() => viewState.rotateRight()} />
      <HotKey keyCombo="," handler={() => videoState.seek(-5)} />
      <HotKey keyCombo="." handler={() => videoState.seek(5)} />
      <HotKey keyCombo="shift+<" handler={() => videoState.seek(-30)} />
      <HotKey keyCombo="shift+>" handler={() => videoState.seek(30)} />
      <div
        role="none"
        className={classNames(
          "fabric-media-container area-content overflow-auto relative grid place-items-center",
          viewState.state.mode === "cropper" && "cursor-crosshair",
        )}
        ref={containerRef}
        style={
          {
            "--brightness": viewState.state.colorscape.brightness,
            "--invert": viewState.state.colorscape.invert,
            "--hue": `${viewState.state.colorscape.hue}deg`,
            "--contrast": viewState.state.colorscape.contrast,
            "--saturate": viewState.state.colorscape.saturate,
          } as AnyObject
        }
        onContextMenu={onContextMenu}
        onClickCapture={viewState.state.mode === "cropper" ? undefined : () => videoState.togglePlay()}
      >
        <div
          className={classNames("relative overflow-hidden m-auto grid place-content-center")}
          style={{
            width: viewState.state.wrapperWidth,
            height: viewState.state.wrapperHeight,
          }}
        >
          <Video
            ref={viewState.ref}
            src={source.state.src}
            vttText={vttText}
            onLoad={chain(source.onLoad, viewState.onViewLoad)}
            onError={source.onError}
          />
        </div>

        {videoState.state.isPlaying && (
          <Icon icon="icon-[mdi--play]" size="4rem" className="absolute inset-0 m-auto animate-fade-out" />
        )}
        {!videoState.state.isPlaying && (
          <Icon icon="icon-[mdi--pause]" size="4rem" className="absolute inset-0 m-auto animate-fade-out" />
        )}
        {source.state.loaded && (
          <>
            {viewState.state.mode !== "splitter" && (
              <>
                <div className="absolute inset-0 fabric-media-container grid place-items-center z-1">
                  <div
                    className="relative overflow-hidden m-auto grid place-content-center"
                    style={{
                      width: viewState.state.wrapperWidth,
                      height: viewState.state.wrapperHeight,
                    }}
                  >
                    {viewState.state.mode === "default" && (
                      <Canvas
                        width={viewState.state.wrapperWidth}
                        height={viewState.state.wrapperHeight}
                        originalWidth={viewState.state.originalWidth}
                        originalHeight={viewState.state.originalHeight}
                        rotate={viewState.state.rotate}
                        flipX={viewState.state.flipX}
                        flipY={viewState.state.flipY}
                        ratio={viewState.state.ratio}
                        annotations={videoState.state.annotations}
                        ref={canvasRef}
                      />
                    )}
                    {viewState.state.mode === "cropper" && (
                      <Cropper
                        width={viewState.state.wrapperWidth}
                        height={viewState.state.wrapperHeight}
                        ratio={viewState.state.ratio}
                        cropMode={viewState.state.mode === "cropper" && viewState.state.cropMode}
                        onCrop={fireCrop}
                      />
                    )}
                  </div>
                </div>
              </>
            )}
          </>
        )}
      </div>
      {source.state.loaded && (
        <Tools
          autoHideToolbar={autoHideToolbar}
          markers={markers}
          comments={comments}
          onCut={onCut}
          onCommentChange={onCommentChange}
          hasVtt={!!vttText}
        />
      )}
    </Section>
  );
};
