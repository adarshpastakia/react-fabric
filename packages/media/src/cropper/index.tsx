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
import { useEffect, useEffectEvent, useRef, useState } from "react";
import { Ellipse, Layer, Rect, Stage } from "react-konva";
import { CropProps } from "../typedefs";

export const Cropper = ({
  width,
  height,
  ratio,
  cropMode,
  onCrop,
}: {
  width: number;
  height: number;
  ratio: number;
  cropMode?: false | "rect" | "ellipse" | "draw";
  onCrop: (cropArea: CropProps) => void;
}) => {
  const mode = useRef(cropMode);
  const isDrawing = useRef(false);
  const startPoint = useRef({ x: 0, y: 0 });
  const shapeRef = useRef<Konva.Node>(null);
  const [props, setProps] = useState<AnyObject>({});
  const style = useRef({
    fill: "#F4D10D36",
    stroke: "#F4D10D",
    strokeWidth: 2,
    dashEnabled: true,
    dash: [10, 5],
  });
  const startDraw = useEffectEvent((e: Konva.KonvaEventObject<MouseEvent>) => {
    isDrawing.current = true;
    const pos = e.target.getStage()?.getPointerPosition();
    startPoint.current = {
      x: (pos?.x ?? 0) / ratio,
      y: (pos?.y ?? 0) / ratio,
    };
  });
  const draw = useEffectEvent((e: Konva.KonvaEventObject<MouseEvent>) => {
    if (!isDrawing.current) return;
    e.evt.preventDefault();
    const pos = e.target.getStage()?.getPointerPosition();
    const currentX = Math.abs((pos?.x ?? 0) / ratio);
    const currentY = Math.abs((pos?.y ?? 0) / ratio);
    if (mode.current === "rect") {
      setProps({
        x: Math.min(startPoint.current.x, currentX),
        y: Math.min(startPoint.current.y, currentY),
        width: Math.abs(startPoint.current.x - currentX),
        height: Math.abs(startPoint.current.y - currentY),
      });
    }
    if (mode.current === "ellipse") {
      const radiusX = Math.abs((startPoint.current.x - currentX) / 2);
      const radiusY = Math.abs((startPoint.current.y - currentY) / 2);
      setProps({
        x: Math.min(startPoint.current.x, currentX) + radiusX,
        y: Math.min(startPoint.current.y, currentY) + radiusY,
        radiusX,
        radiusY,
      });
    }
  });
  const stopDraw = useEffectEvent(() => {
    if (!isDrawing.current) return;
    isDrawing.current = false;

    if (shapeRef.current) {
      if (mode.current === "rect") {
        onCrop({
          x: shapeRef.current.x(),
          y: shapeRef.current.y(),
          width: shapeRef.current.width(),
          height: shapeRef.current.height(),
          cropArea: {
            type: "rect",
          },
        });
      }
      if (
        mode.current === "ellipse" &&
        shapeRef.current instanceof Konva.Ellipse
      ) {
        onCrop({
          x: shapeRef.current.x() - shapeRef.current.radiusX(),
          y: shapeRef.current.y() - shapeRef.current.radiusY(),
          width: shapeRef.current.width(),
          height: shapeRef.current.height(),
          cropArea: {
            type: "ellipse",
            radiusX: shapeRef.current.radiusX(),
            radiusY: shapeRef.current.radiusY(),
          },
        });
      }
    }
    setProps({});
  });
  useEffect(() => {
    document.addEventListener("mouseup", stopDraw);

    return () => {
      document.removeEventListener("mouseup", stopDraw);
    };
  }, []);

  useEffect(() => {
    setProps({});
    mode.current = cropMode;
  }, [cropMode]);

  return (
    <Stage
      width={width}
      height={height}
      className="motion-safe:transition-transform duration-250 ease-in-out"
      onMouseDown={startDraw}
      onMouseMove={draw}
    >
      <Layer scaleX={ratio} scaleY={ratio}>
        {cropMode === "rect" && (
          <Rect {...props} {...style.current} ref={shapeRef} />
        )}
        {cropMode === "ellipse" && (
          <Ellipse {...props} {...style.current} ref={shapeRef} />
        )}
      </Layer>
    </Stage>
  );
};
