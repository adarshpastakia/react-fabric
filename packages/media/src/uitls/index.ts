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

import { CropProps } from "../typedefs";

export { exportImage } from "./export";

export const chain =
  (...fns: Function[]) =>
  (...args: any[]) =>
    fns.forEach((fn) => fn && fn(...args));

export const rotateShape = (
  rotate: number,
  flipX: boolean,
  flipY: boolean,
  width: number,
  height: number,
  shape: { x: number; y: number; height: number; width: number },
) => {
  let newShape = { ...shape };
  if (rotate === 90) {
    newShape = {
      ...shape,
      x: height - shape.y - shape.height,
      y: shape.x,
      width: shape.height,
      height: shape.width,
    };
  }
  if (rotate === 180) {
    newShape = {
      ...shape,
      x: width - shape.x - shape.width,
      y: height - shape.y - shape.height,
      width: shape.width,
      height: shape.height,
    };
  }
  if (rotate === 270) {
    newShape = {
      ...shape,
      x: shape.y,
      y: width - shape.x - shape.width,
      width: shape.height,
      height: shape.width,
    };
  }

  if (flipX) {
    newShape = {
      ...newShape,
      x: width - newShape.x - newShape.width,
    };
  }
  if (flipY) {
    newShape = {
      ...newShape,
      y: height - newShape.y - newShape.height,
    };
  }

  return newShape;
};

export const unrotate = (
  rotate: number,
  flipX: boolean,
  flipY: boolean,
  width: number,
  height: number,
  shape: CropProps,
) => {
  let newShape = { ...shape };
  if (rotate === 90) {
    if (shape.cropArea.type === "ellipse") {
      const { radiusX: x, radiusY: y } = shape.cropArea;
      shape.cropArea.radiusX = y;
      shape.cropArea.radiusY = x;
    }
    newShape = {
      ...shape,
      x: shape.y,
      y: height - (shape.x + shape.width),
      width: shape.height,
      height: shape.width,
    };
  }
  if (rotate === 180) {
    newShape = {
      ...shape,
      x: width - (shape.x + shape.width),
      y: height - (shape.y + shape.height),
      width: shape.width,
      height: shape.height,
    };
  }
  if (rotate === 270) {
    if (shape.cropArea.type === "ellipse") {
      const { radiusX: x, radiusY: y } = shape.cropArea;
      shape.cropArea.radiusX = y;
      shape.cropArea.radiusY = x;
    }
    newShape = {
      ...shape,
      x: width - (shape.y + shape.height),
      y: shape.x,
      width: shape.height,
      height: shape.width,
    };
  }

  if (flipX) {
    newShape = {
      ...newShape,
      x: width - (newShape.x + newShape.width),
    };
  }
  if (flipY) {
    newShape = {
      ...newShape,
      y: height - (newShape.y + newShape.height),
    };
  }

  return newShape;
};
