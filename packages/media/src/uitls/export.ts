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

import Konva from "konva";
import { CropProps } from "../typedefs";

export const exportImage = ({
  width,
  height,
  rotate,
  flipX,
  flipY,
  colorscape,
  overlayOpacity,
  mediaEl,
  overlayEl,
  canvasEl,
  cropArea,
  x: cropX,
  y: cropY,
}: {
  width: number;
  height: number;
  rotate: number;
  flipX: boolean;
  flipY: boolean;
  colorscape: KeyValue;
  mediaEl: HTMLImageElement | HTMLVideoElement | null;
  overlayOpacity?: number;
  overlayEl?: HTMLImageElement | null;
  canvasEl: Konva.Layer | null;
} & Partial<CropProps>) => {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  if (context && mediaEl) {
    canvas.width = rotate % 180 === 0 ? width : height;
    canvas.height = rotate % 180 === 0 ? height : width;
    context.save();
    if (rotate === 90) {
      context.translate(height, 0);
      context.rotate((90 * Math.PI) / 180);
    }
    if (rotate === 180) {
      context.translate(width, height);
      context.rotate((180 * Math.PI) / 180);
    }
    if (rotate === 270) {
      context.translate(0, width);
      context.rotate((270 * Math.PI) / 180);
    }

    if (flipX || flipY) {
      context.scale(flipX ? -1 : 1, flipY ? -1 : 1);
      context.translate(flipX ? -canvas.width : 0, flipY ? -canvas.height : 0);
    }

    // draw main image
    context.filter = `
            brightness(${colorscape.brightness}) 
            contrast(${colorscape.contrast}) 
            saturate(${colorscape.saturate}) 
            hue-rotate(${colorscape.hue}deg)
            invert(${colorscape.invert})`;
    if (cropArea?.type === "rect") {
      context.drawImage(
        mediaEl,
        cropX ?? 0,
        cropY ?? 0,
        width,
        height,
        0,
        0,
        width,
        height,
      );
    } else if (cropArea?.type === "ellipse") {
      context.save();
      context.beginPath();
      context.ellipse(
        cropArea.radiusX,
        cropArea.radiusY,
        cropArea.radiusX,
        cropArea.radiusY,
        0,
        0,
        2 * Math.PI,
      );
      context.clip();
      context.drawImage(
        mediaEl,
        cropX ?? 0,
        cropY ?? 0,
        width,
        height,
        0,
        0,
        width,
        height,
      );
    } else {
      context.drawImage(mediaEl, 0, 0);

      // draw overlay if exists
      if (overlayEl) {
        context.globalAlpha = overlayOpacity ?? 1;
        context.drawImage(overlayEl, 0, 0);
      }

      context.restore();
      const layerCanvas = canvasEl?.getCanvas()._canvas;
      layerCanvas &&
        context.drawImage(
          layerCanvas,
          0,
          0,
          layerCanvas.width,
          layerCanvas.height,
          0,
          0,
          canvas.width,
          canvas.height,
        );
    }
    try {
      return canvas.toDataURL("image/png");
    } catch {
      //
    }
  }
  return null;
};
