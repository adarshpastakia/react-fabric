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

import { CoreIcons, Icon, useResize } from "@react-fabric/core";
import { Fragment, useEffect, useRef, useState } from "react";
import { useImageContext } from "./Context";
import classNames from "classnames";

export const Overlay = ({ src }: { src: string }) => {
  const { state } = useImageContext();
  const overlayRef = useRef<HTMLDivElement>(null);
  const [overlaySize, setOverlaySize] = useState<number>(0);

  const [orientVertical, setOrientVertical] = useState(false);
  const { ref, onMouseDown } = useResize(
    ({ x, y }) => {
      if (overlayRef.current != null) {
        orientVertical
          ? setOverlaySize(overlayRef.current.offsetHeight + y)
          : setOverlaySize(overlayRef.current.offsetWidth + x);
      }
    },
    { isVertical: orientVertical },
  );

  useEffect(() => {
    setOverlaySize(
      (orientVertical ? state.containerHeight : state.containerWidth) / 2,
    );
  }, [state.containerHeight, state.containerWidth, orientVertical]);

  return (
    <Fragment>
      <div
        className="absolute overflow-hidden pointer-events-none min-h-2 min-w-2"
        ref={overlayRef}
        style={
          orientVertical
            ? {
                top: 0,
                insetInline: 0,
                height: overlaySize,
                maxHeight: state.containerHeight,
              }
            : {
                insetInlineStart: 0,
                insetBlock: 0,
                width: overlaySize,
                maxWidth: state.containerWidth,
              }
        }
      >
        <div
          className="grid p-[8px]"
          style={{
            width: state.containerWidth,
            height: state.containerHeight,
          }}
        >
          <div
            className="origin-center relative m-auto pointer-events-none"
            style={{
              width: state.imageWidth,
              height: state.imageHeight,
              transform: `rotate(${state.rotate}deg)`,
            }}
          >
            <img
              alt={src}
              src={src}
              loading="lazy"
              crossOrigin="anonymous"
              className="object-contain size-full"
            />
          </div>
        </div>
        <div
          role="none"
          ref={ref}
          onMouseDown={onMouseDown}
          className={classNames(
            "bg-white outline outline-2 outline-black -outline-offset-2 absolute pointer-events-auto",
            orientVertical && "h-2 inset-x-0 bottom-0 cursor-ns-resize",
            !orientVertical && "w-2 inset-y-0 end-0 cursor-ew-resize",
          )}
        />
      </div>
      <div
        className={classNames(
          "absolute leading-none bg-accent-500 rounded-full p-1 ring-1 ring-white",
          orientVertical && "left-1/2 -translate-x-1/2",
          !orientVertical && "top-1/2 -translate-y-1/2",
        )}
        style={
          orientVertical
            ? {
                top:
                  Math.min(Math.max(overlaySize, 0), state.containerHeight) -
                  16,
              }
            : {
                insetInlineStart:
                  Math.min(Math.max(overlaySize, 0), state.containerWidth) - 16,
              }
        }
      >
        <Icon
          icon={CoreIcons.mediaOrient}
          data-orient={orientVertical ? "vertical" : "horizontal"}
          onClick={() => setOrientVertical(!orientVertical)}
        />
      </div>
    </Fragment>
  );
};
