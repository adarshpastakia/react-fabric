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

export interface TextShape {
  text: string;
  fill?: string;
  color?: string;
  fontSize?: number;
  fontFamily?: string;
  fontStyle?: string;
  stroke?: string;
  strokeWidth?: number;
}

interface AnnotationShape {
  /**
   * Type of the shape to be drawn. Supported values are "rect" for rectangle and "ellipse" for ellipse. If not provided, the default shape will be a rectangle.
   * @default "rect"
   * @remarks
   * - If `type` is set to "rect", a rectangle will be drawn with the specified `x`, `y`, `width`, and `height` properties.
   * - If `type` is set to "ellipse", an ellipse will be drawn that fits within the bounding box defined by the specified `x`, `y`, `width`, and `height` properties.
   * - The `x` and `y` properties specify the top-left corner of the bounding box for both shapes. For rectangles, this is the top-left corner of the rectangle. For ellipses, this is the top-left corner of the bounding box that contains the ellipse.
   * - The `width` and `height` properties specify the dimensions of the bounding box for both shapes. For rectangles, these are the width and height of the rectangle. For ellipses, these are the width and height of the bounding box that contains the ellipse.
   * - If `type` is not provided, a rectangle will be drawn by default using the specified `x`, `y`, `width`, and `height` properties.
   * - The shape will be drawn with the specified `fill`, `stroke`, and `strokeWidth` properties if they are provided. If not provided, the shape will have no fill and no stroke.
   * - The shape will be rendered on the canvas according to the specified properties, allowing for customization of its appearance and position.
   */
  type?: "rect" | "ellipse";
  /**
   * Fill color of the shape. If not provided, the shape will not be filled.
   */
  fill?: string;
  /**
   * Stroke color of the shape. If not provided, the shape will not have a stroke.
   */
  stroke?: string;
  /**
   * Stroke width of the shape. If not provided, the stroke will have a default width of 1. This property is only applicable if the `stroke` property is provided.
   * @default 0
   */
  strokeWidth?: number;

  textTop?: TextShape;
  textBottom?: TextShape;
}

export interface ImageAnnotationShape extends AnnotationShape {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface VideoAnnotationShape extends AnnotationShape {
  timestamps: Array<{
    x: number;
    y: number;
    width: number;
    height: number;
    time: number;
  }>;
}

type CropArea =
  | {
      type: "rect";
    }
  | {
      type: "ellipse";
      radiusX: number;
      radiusY: number;
    };

export interface CropProps {
  x: number;
  y: number;
  width: number;
  height: number;
  cropArea: CropArea;
}
