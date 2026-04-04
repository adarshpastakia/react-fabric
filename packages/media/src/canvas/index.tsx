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
import { Layer, Rect, Stage } from "react-konva";
import { ImageAnnotationShape } from "../typedefs";
import { rotateShape } from "../uitls";
import { Shape } from "./Shape";

interface Props {
  width: number;
  height: number;
  ratio: number;

  rotate: number;
  flipX: boolean;
  flipY: boolean;
  originalWidth: number;
  originalHeight: number;

  annotations?: {
    fill?: string;
    shapes: ImageAnnotationShape[];
  };

  ref: React.Ref<Konva.Layer | null>;
}

export const Canvas = ({
  ref,
  width,
  height,
  ratio,
  rotate,
  flipX,
  flipY,
  originalWidth,
  originalHeight,
  annotations,
}: Props) => {
  return (
    <Stage
      width={width}
      height={height}
      className="motion-safe:transition-transform duration-250 ease-in-out"
    >
      {annotations && (
        <Layer scaleX={ratio} scaleY={ratio} ref={ref}>
          {annotations?.fill && (
            <Rect
              x={0}
              y={0}
              width={width / ratio}
              height={height / ratio}
              fill={annotations.fill}
              globalCompositeOperation="color-dodge"
              ref={(e) => {
                e?.cache();
              }}
            />
          )}
          {annotations?.shapes.map((shape, index) => (
            <Shape
              {...rotateShape(
                rotate,
                flipX,
                flipY,
                originalWidth,
                originalHeight,
                shape,
              )}
              key={index}
            />
          ))}
        </Layer>
      )}
    </Stage>
  );
};
