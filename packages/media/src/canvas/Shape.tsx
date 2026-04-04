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
 * portions of the Softwarshape.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
 * TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARshape.
 */

import { useEffect, useMemo, useState } from "react";
import { Ellipse, Rect, Text } from "react-konva";
import { ImageAnnotationShape } from "../typedefs";

const TextShape = ({
  x,
  y,
  width,
  height,
  move,
  shape,
  centered,
}: {
  x: number;
  y: number;
  width: number;
  height: number;
  move: "top" | "bottom";
  centered?: boolean;
  shape: ImageAnnotationShape["textTop"];
}) => {
  const [textWidth, setTextWidth] = useState(0);

  const textRect = useMemo(() => {
    const rect = {
      x: x + 4,
      y: y - (shape?.fontSize ?? 16) - 4,
    };

    // Center the rect if text width is greater than shape width
    if (textWidth > width || centered) {
      rect.x = x - (textWidth - width) / 2;
    }
    if (move === "bottom") {
      rect.y = y + height + 4;
    }
    return rect;
  }, [x, y, height, move, textWidth, centered]);

  const rect = useMemo(() => {
    const rect = {
      x,
      y: y - (shape?.fontSize ?? 16) - 8,
      width: centered ? textWidth + 8 : Math.max(width, textWidth + 8),
      height: (shape?.fontSize ?? 16) + 8,
    };

    // Center the rect if text width is greater than shape width
    if (rect.width > width || centered) {
      rect.x -= (rect.width - width) / 2;
    }
    // Move the rect above or below the shape based on the move prop
    if (move === "bottom") {
      rect.y = y + height;
    }
    return rect;
  }, [x, y, width, height, move, textWidth, centered]);

  return (
    <>
      <Rect
        {...rect}
        fill={shape?.fill}
        stroke={shape?.stroke}
        strokeWidth={shape?.strokeWidth}
      />
      <Text
        {...textRect}
        text={shape?.text}
        fontSize={shape?.fontSize ?? 16}
        fill={shape?.color}
        fontFamily={shape?.fontFamily}
        fontStyle={shape?.fontStyle}
        ref={(e) => setTextWidth(e?.width() ?? 0)}
      />
    </>
  );
};

export const Shape = ({
  x,
  y,
  width,
  height,
  textTop,
  textBottom,
  type,
  ...shape
}: ImageAnnotationShape) => {
  const [rect, setRect] = useState<any>({});

  const E = type === "ellipse" ? Ellipse : Rect;

  useEffect(() => {
    if (type === "ellipse") {
      return setRect({
        x: x + width / 2,
        y: y + height / 2,
        radiusX: width / 2,
        radiusY: height / 2,
      });
    }
    setRect({
      x,
      y,
      width,
      height,
    });
  }, [type, x, y, width, height]);

  return (
    <>
      <E {...rect} fill="#fff" globalCompositeOperation="destination-out" />
      <E {...rect} {...shape} strokeScaleEnabled />
      {textTop && (
        <TextShape
          x={rect.x - (shape.strokeWidth ?? 0) / 2}
          y={rect.y - (shape.strokeWidth ?? 0) / 2}
          width={rect.width + (shape.strokeWidth ?? 0)}
          height={rect.height + (shape.strokeWidth ?? 0)}
          move="top"
          shape={textTop}
          centered={type === "ellipse"}
        />
      )}
      {textBottom && (
        <TextShape
          x={rect.x - (shape.strokeWidth ?? 0) / 2}
          y={rect.y - (shape.strokeWidth ?? 0) / 2}
          width={rect.width + (shape.strokeWidth ?? 0)}
          height={rect.height + (shape.strokeWidth ?? 0)}
          move="bottom"
          shape={textBottom}
          centered={type === "ellipse"}
        />
      )}
    </>
  );
};
