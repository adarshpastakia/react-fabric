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

import { HotKey, Section, useResizeObserver } from "@react-fabric/core";
import { SizeObject } from "@react-fabric/core/dist/types/types";
import classNames from "classnames";
import { useEffectEvent, WheelEvent } from "react";
import { Canvas } from "../canvas";
import { Cropper } from "../cropper";
import { CropProps } from "../typedefs";
import { chain, exportImage, unrotate } from "../uitls";
import { useImageContext } from "./context";
import { Image } from "./Image";
import { Overlay } from "./Overlay";
import { Tools } from "./Tools";
import { ImageProps } from "./types";

export const ImageWrapper = ({
  annotations,
  autoHideToolbar,
  onCrop,
  onContextMenu,
}: Pick<ImageProps, "annotations" | "autoHideToolbar" | "onCrop" | "onContextMenu">) => {
  const { viewState, source, overlayState, canvasRef, fireExport } = useImageContext();

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
        overlayOpacity: overlayState.state.opacity,
        mediaEl: viewState.ref.current,
        overlayEl: overlayState.ref.current,
        canvasEl: canvasRef.current,
        ...actualCrop,
      }),
      [actualCrop.x, actualCrop.y, actualCrop.width, actualCrop.height],
    );
  });

  return (
    <Section className="relative z-0">
      <HotKey keyCombo="e" handler={fireExport} />
      <HotKey keyCombo="f" handler={() => viewState.zoom(viewState.state.zoomLevel === -1 ? 1 : -1)} />
      <HotKey keyCombo="shift+{" handler={() => viewState.rotateLeft()} />
      <HotKey keyCombo="shift+}" handler={() => viewState.rotateRight()} />
      <HotKey keyCombo="shift+plus" handler={() => viewState.zoom(Math.max(0.5, viewState.state.ratio - 0.1))} />
      <HotKey keyCombo="shift+minus" handler={() => viewState.zoom(Math.min(5, viewState.state.ratio + 0.1))} />
      <div
        className={classNames(
          "fabric-media-container area-content overflow-auto relative grid place-items-center",
          viewState.state.mode === "cropper" && "cursor-crosshair",
        )}
        ref={containerRef}
        onWheel={handleZoomWheel}
        onContextMenu={onContextMenu}
        style={
          {
            "--brightness": viewState.state.colorscape.brightness,
            "--invert": viewState.state.colorscape.invert,
            "--hue": `${viewState.state.colorscape.hue}deg`,
            "--contrast": viewState.state.colorscape.contrast,
            "--saturate": viewState.state.colorscape.saturate,
          } as AnyObject
        }
      >
        <div
          role="none"
          className={classNames(
            "relative overflow-hidden m-auto grid place-content-center",
            viewState.state.mode !== "cropper" && "cursor-grab active:cursor-grabbing",
          )}
          style={{
            width: viewState.state.wrapperWidth,
            height: viewState.state.wrapperHeight,
          }}
        >
          <Image
            ref={viewState.ref}
            src={source.state.src}
            onLoad={chain(source.onLoad, viewState.onViewLoad)}
            onError={source.onError}
          />
        </div>
        {source.state.loaded && (
          <>
            {viewState.state.mode === "splitter" && <Overlay />}
            {viewState.state.mode !== "splitter" && (
              <>
                {overlayState.state.hasOverlay && (
                  <div
                    role="none"
                    className={classNames("absolute grid place-items-center")}
                    style={{
                      inset: 8,
                    }}
                  >
                    <div
                      role="none"
                      className={classNames("relative overflow-hidden m-auto grid place-content-center")}
                      style={{
                        width: viewState.state.wrapperWidth,
                        height: viewState.state.wrapperHeight,
                        opacity: overlayState.state.opacity,
                      }}
                    >
                      <Image ref={overlayState.ref} src={overlayState.state.src} />
                    </div>
                  </div>
                )}
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
                        annotations={annotations}
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
      {source.state.loaded && <Tools autoHideToolbar={autoHideToolbar} />}
    </Section>
  );
};
