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

import { AnimationBars, ErrorBoundary } from "@react-fabric/core";
import classNames from "classnames";
import { useCanvasContext } from "../components/Canvas";
import { Cropper } from "../components/Cropper";
import { useImageContext } from "./Context";
import { Overlay } from "./Overlay";
import { ImageProps } from "./types";

export const Image = ({ onCrop }: Pick<ImageProps<KeyValue>, "onCrop">) => {
  const {
    imageRef,
    scrollerRef,
    state,
    toggleCropping,
    handleLoad,
    handleError,
  } = useImageContext();
  const { canvasRef } = useCanvasContext();

  const startDrag = (e: React.MouseEvent) => {
    let startX = e.clientX;
    let startY = e.clientY;

    const doDrag = (ev: MouseEvent) => {
      if (scrollerRef.current) {
        scrollerRef.current.scrollTop -= Math.floor(ev.clientY - startY);
        scrollerRef.current.scrollLeft -= Math.floor(ev.clientX - startX);
        startX = ev.clientX;
        startY = ev.clientY;
        ev.preventDefault();
        ev.stopPropagation();
      }
    };

    document.addEventListener("mousemove", doDrag);
    document.addEventListener(
      "mouseup",
      () => {
        document.removeEventListener("mousemove", doDrag);
      },
      {
        capture: true,
        once: true,
      },
    );
  };

  return (
    <div
      ref={scrollerRef}
      className="media-container area-content overflow-auto relative scroll-hide grid bg-tint-50 select-none p-[8px]"
      style={
        {
          "--brightness": state.colorscape.brightness,
          "--invert": state.colorscape.invert,
          "--hue": `${state.colorscape.hue}deg`,
          "--contrast": state.colorscape.contrast,
          "--saturate": state.colorscape.saturate,
        } as AnyObject
      }
    >
      <ErrorBoundary>
        <div
          role="none"
          className="relative overflow-hidden m-auto grid place-content-center size-full cursor-grab active:cursor-grabbing"
          onMouseDown={startDrag}
          style={{
            width: state.width,
            height: state.height,
          }}
        >
          <div
            className={classNames(
              "origin-center relative pointer-events-none",
              state.colorScheme.startsWith("dark") && "bg-light",
            )}
            style={{
              width: state.mediaWidth,
              height: state.mediaHeight,
              transform: `rotate(${state.rotate}deg)`,
            }}
          >
            {state.src && (
              <img
                alt={state.src}
                src={state.src}
                onLoad={handleLoad}
                onError={handleError}
                ref={imageRef}
                loading="lazy"
                crossOrigin="anonymous"
                className="size-full"
              />
            )}
            <canvas
              ref={canvasRef}
              width={state.mediaWidth}
              height={state.mediaHeight}
              className="absolute inset-0"
            />
          </div>
        </div>

        {state.isLoading && <AnimationBars />}
      </ErrorBoundary>
      {state.overlay && state.splitter && <Overlay src={state.overlay} />}

      {onCrop && state.cropping && (
        <Cropper
          state={state}
          mediaRef={imageRef}
          onCrop={onCrop}
          onCropEnd={() => toggleCropping()}
        />
      )}
    </div>
  );
};
