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

import classNames from "classnames";
import { useEffectEvent, useMemo, useRef } from "react";
import { useImageContext } from "./context";
import { Image } from "./Image";

export const Overlay = () => {
  const { viewState, overlayState } = useImageContext();

  const dragRef = useRef({ size: 0, start: 0 });
  const startDrag = useEffectEvent(
    (event: React.MouseEvent<HTMLDivElement>) => {
      const stopDrag = (event: MouseEvent) => {
        document.removeEventListener("mousemove", handleDrag);
        document.removeEventListener("mouseup", stopDrag);
        document.body.style.cursor = "unset";
        event.preventDefault();
      };
      const handleDrag = (event: MouseEvent) => {
        event.preventDefault();
        const delta =
          overlayState.state.orientation === "vertical"
            ? event.clientY
            : event.clientX;
        overlayState.changeSize(
          Math.max(
            -4,
            Math.min(
              overlayState.state.orientation === "vertical"
                ? viewState.state.wrapperHeight
                : viewState.state.wrapperWidth,
              dragRef.current.size + (delta - dragRef.current.start),
            ),
          ),
        );
      };

      const el = event.currentTarget.previousSibling as HTMLElement;
      dragRef.current.size =
        overlayState.state.orientation === "vertical"
          ? el.offsetHeight
          : el.offsetWidth;
      dragRef.current.start =
        overlayState.state.orientation === "vertical"
          ? event.clientY
          : event.clientX;
      event.preventDefault();
      document.body.style.cursor = handle;
      document.addEventListener("mousemove", handleDrag);
      document.addEventListener("mouseup", stopDrag);
    },
  );

  const {
    fullDimension,
    variableDimension,
    handle,
    handleFullDimension,
    handleSizeDimension,
    handleInset,
    handlePosition,
    sizeProperty,
  } = useMemo(() => {
    if (overlayState.state.orientation === "vertical") {
      return {
        fullDimension: "width",
        variableDimension: "height",
        handle: "ns-resize",
        handlePosition: "top",
        handleInset: "inset-inline",
        handleFullDimension: "width",
        handleSizeDimension: "height",
        sizeProperty: "wrapperWidth",
      };
    }
    return {
      fullDimension: "height",
      variableDimension: "width",
      handle: "ew-resize",
      handlePosition: "left",
      handleInset: "inset-block",
      handleFullDimension: "height",
      handleSizeDimension: "width",
      sizeProperty: "wrapperHeight",
    };
  }, [overlayState.state.orientation]);

  return (
    <div
      className="absolute m-auto"
      style={{
        width: viewState.state.wrapperWidth,
        height: viewState.state.wrapperHeight,
      }}
    >
      <div
        role="none"
        className={classNames("relative overflow-hidden")}
        style={{
          [fullDimension]:
            viewState.state[
              sizeProperty as unknown as keyof typeof viewState.state
            ],
          [variableDimension]: overlayState.state.size,
        }}
      >
        <div
          role="none"
          className={classNames(
            "relative overflow-hidden m-auto grid place-content-center bg-tint-50",
          )}
          style={{
            width: viewState.state.wrapperWidth,
            height: viewState.state.wrapperHeight,
          }}
        >
          <Image src={overlayState.state.src} ref={overlayState.ref} />
        </div>
      </div>
      <div
        role="none"
        className="absolute bg-transparent z-1"
        onMouseDown={startDrag}
        style={{
          [handleSizeDimension]: 10,
          [handleInset]: 0,
          [handlePosition]: overlayState.state.size,
          cursor: handle,
        }}
      >
        <div
          className="bg-tint-500 border-2 border-tint-50 hover:bg-accent-500"
          style={{
            [handleFullDimension]: "100%",
            [handleSizeDimension]: 6,
          }}
        />
      </div>
    </div>
  );
};
