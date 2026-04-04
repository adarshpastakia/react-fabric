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
import { ImageContext } from "./context";
import { ImageProps } from "./types";
import { useOverlayState } from "./useOverlayState";
import { ImageWrapper } from "./Wrapper";

/**
 * Image component that renders an image with support for loading, error handling, and transformations.
 *
 * Noteable features:
 * - Supports transformations such as flipping and rotation based on the view state.
 * - Handles loading and error states, displaying a placeholder icon if the image fails to load.
 * - Draw annotions on the image using a canvas overlay, built using konva.js
 * - Export and crop the image with annotations and transformations using canvas APIs, allowing for advanced image manipulation.
 * - Compare two images side by side or overlayed with adjustable opacity, enabling users to easily spot differences or changes between images.
 *
 * @prop {string} src - The source URL of the image to be displayed.
 * @prop {string} missingIcon - An optional icon name to display when the image fails to load.
 * @prop {string} compareWith - An optional source URL of another image to compare with the main image.
 * @prop {boolean|object} nsfw - A flag or configuration object to display a NSFW overlay on the image.
 * @prop {Array} annotations - An array of annotation objects to be rendered on the image.
 * @prop {boolean} autoHideToolbar - Auto hide the toolbar when not hovered, providing a cleaner viewing experience.
 * @prop {function} onContextMenu - A callback function that is triggered when the context menu is opened on the image.
 * @prop {function} onDebug - A callback function that provides debug information about the image state and transformations.
 * @prop {function} onError - A callback function that is triggered when an error occurs while loading the image.
 * @prop {function} onLoad - A callback function that is triggered when the image has successfully loaded.
 * @prop {function} onExport - A callback function that is triggered when the image is exported with transformations and annotations.
 * @prop {function} onCrop - A callback function that is triggered when a crop action is performed on the image, providing the cropped area details.
 *
 * @returns {JSX.Element} The rendered Image component.
 */
export const ImageViewer = ({
  src,
  compareWith,
  missingIcon,
  nsfw,
  annotations,
  autoHideToolbar,
  onContextMenu,
  onDebug,
  onError,
  onLoad,
  onExport,
  onCrop,
  ref,
}: ImageProps) => {
  const source = useSource({ src, onLoad, onError });
  const viewState = useViewState<HTMLImageElement>();
  const overlayState = useOverlayState(compareWith);
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
      colorset: source.state.colorset,
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
    source.state.colorset,
  ]);

  useEffect(() => {
    viewState.changeMode(overlayState.state.hasOverlay ? "splitter" : "default");
  }, [overlayState.state.hasOverlay]);

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
        overlayOpacity: overlayState.state.opacity,
        mediaEl: viewState.ref.current,
        overlayEl: overlayState.ref.current,
        canvasEl: canvasRef.current,
      }),
    );
  });

  useImperativeHandle(ref, () => ({
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
      <ImageContext.Provider
        value={{
          source,
          viewState,
          overlayState,
          missingIcon,
          canCrop,
          canExport,
          canvasRef,
          fireExport,
        }}
      >
        <Section dir="ltr" className="relative bg-dimmed">
          <ImageWrapper
            annotations={annotations}
            autoHideToolbar={autoHideToolbar}
            onCrop={onCrop}
            onContextMenu={onContextMenu}
          />
          {source.state.loading && <LoadingSpinner size="1.5rem" />}
          {nsfw && <NsfwOverlay {...(typeof nsfw === "object" ? nsfw : {})} />}
        </Section>
      </ImageContext.Provider>
    </ThemeProvider>
  );
};
