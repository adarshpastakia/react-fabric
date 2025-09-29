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

import { useCallback, useRef, useState, type MouseEvent } from "react";
import { useImageContext } from "./Context";

export const Cropper = ({
  onCrop,
}: {
  onCrop?: (box: number[], base64: string) => void;
}) => {
  const currentPos = useRef({
    x: 0,
    y: 0,
    top: 100,
    left: 100,
    width: 500,
    height: 500,
    dragging: false,
  });
  const refContainer = useRef<HTMLDivElement>(null);
  const { state, imageRef, toggleCropping } = useImageContext();
  const [pos, setPos] = useState<typeof currentPos.current>();

  const checkCrop = useCallback(
    ([x, y, w, h]: number[]) => {
      if (imageRef.current) {
        if (state.rotate === 90) {
          const xt = x;
          const wt = w;
          x = y;
          y = state.width - (xt + w);
          w = h;
          h = wt;
        }
        if (state.rotate === 180) {
          x = state.width - (x + w);
          y = state.height - (y + h);
        }
        if (state.rotate === 270) {
          const xt = x;
          const wt = w;
          x = state.height - (y + h);
          y = xt;
          w = h;
          h = wt;
        }

        let zoomLevel = state.zoom;

        if (zoomLevel === 0) {
          zoomLevel = state.imageWidth / imageRef.current.naturalWidth;
        }

        x = x / zoomLevel;
        y = y / zoomLevel;
        w = w / zoomLevel;
        h = h / zoomLevel;

        const canvas = document.createElement("canvas");
        canvas.width = w;
        canvas.height = h;
        const context = canvas.getContext("2d");
        if (context) {
          context.drawImage(imageRef.current, x, y, w, h, 0, 0, w, h);
        }
        const base64 = canvas.toDataURL("image/webp");

        toggleCropping();
        onCrop?.([x, y, w, h], base64);
      }
    },
    [onCrop, state.zoom, state.rotate, state.width, state.height],
  );

  const stopDrag = useCallback(() => {
    setPos(undefined);
    if (refContainer.current) {
      const { top, left, width, height } = currentPos.current;
      checkCrop([left, top, width, height]);
    }
    currentPos.current = { ...currentPos.current, dragging: false };
    document.removeEventListener("mouseup", stopDrag);
  }, [onCrop]);

  const startDrag = useCallback(
    (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      if (refContainer.current) {
        const { top: containerTop, left: containerLeft } =
          refContainer.current.getBoundingClientRect();
        currentPos.current = {
          x,
          y,
          top: y + containerTop * -1,
          left: x + containerLeft * -1,
          width: 0,
          height: 0,
          dragging: true,
        };

        document.addEventListener("mouseup", stopDrag);
      }
    },
    [stopDrag],
  );

  const handleDrag = useCallback((e: MouseEvent) => {
    if (currentPos.current.dragging) {
      const { x, y } = currentPos.current;
      let width = Math.abs(e.clientX - x);
      let height = Math.abs(e.clientY - y);
      if (refContainer.current) {
        const {
          top: containerTop,
          left: containerLeft,
          height: containerHeight,
          width: containerWidth,
        } = refContainer.current.getBoundingClientRect();
        let top = Math.min(e.clientY, y) + containerTop * -1;
        let left = Math.min(e.clientX, x) + containerLeft * -1;

        if (top < 0) {
          height = Math.max(height + top, 0);
          top = 0;
        }
        if (left < 0) {
          width = Math.max(width + left, 0);
          left = 0;
        }

        if (top + height > containerHeight) {
          height = containerHeight - top;
        }
        if (left + width > containerWidth) {
          width = containerWidth - left;
        }

        currentPos.current = {
          ...currentPos.current,
          top,
          left,
          width,
          height,
        };
        setPos(currentPos.current);
      }
    }
  }, []);

  return (
    <div
      role="none"
      className="absolute inset-0 overflow-hidden cursor-crosshair pointer-events-auto grid place-items-center"
      onMouseDown={startDrag}
      onMouseMove={handleDrag}
    >
      <div
        ref={refContainer}
        className="relative m-auto"
        style={{
          width: state.width,
          height: state.height,
        }}
      >
        {pos && (
          <div
            style={pos}
            className="absolute bg-black/50 border-2 border-dashed border-white mix-blend-difference pointer-events-none"
          />
        )}
      </div>
    </div>
  );
};
