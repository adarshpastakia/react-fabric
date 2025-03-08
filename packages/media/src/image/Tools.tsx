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

import {
  Button,
  CoreIcons,
  Divider,
  Dropdown,
  Footer,
  HotKey,
} from "@react-fabric/core";
import { Fragment, useMemo } from "react";
import { useImageContext } from "./Context";
import { ZoomMeter } from "./ZoomMeter";

export const Tools = ({
  enableZoom = true,
  enableCrop = true,
}: {
  enableZoom?: boolean;
  enableCrop?: boolean;
}) => {
  const {
    state,
    reset,
    rotate,
    zoomScale,
    fitToSize,
    fitToView,
    toggleFit,
    changeZoom,
    toggleSplitter,
    toggleCropping,
    cancelCropping,
    startCropping,
  } = useImageContext();

  const startDrag = (e: React.MouseEvent) => {
    const target = e.currentTarget as HTMLDivElement;
    let startX = e.clientX;
    let zoomStart = state.zoom || 1;

    const doDrag = (ev: MouseEvent) => {
      if (target.parentElement != null) {
        zoomStart += (startX - ev.clientX) * 0.05;
        zoomScale(Math.max(0.1, Math.min(5, zoomStart)));
        startX = ev.clientX;
        ev.preventDefault();
        ev.stopPropagation();
      }
    };

    document.addEventListener("mousemove", doDrag);
    document.addEventListener(
      "mouseup",
      () => {
        document.removeEventListener("mousemove", doDrag);
      },
      {
        capture: true,
        once: true,
      },
    );
  };

  const handlers = useMemo(
    () => ({
      rotateDown: () => rotate(-90),
      rotateUp: () => rotate(90),
      zoomDown: () => changeZoom(-0.5, true),
      zoomUp: () => changeZoom(+0.5, true),
      toggleFit: () => toggleFit(),
      startCropping: () => startCropping(),
      cancelCropping: () => cancelCropping(),
      reset: () => reset(),
    }),
    [],
  );

  return (
    <Footer flex justify="center" className="select-none">
      {state.isLoaded && (
        <Fragment>
          {!state.splitter && enableZoom && (
            <HotKey global keyCombo="," handler={handlers.zoomDown} />
          )}
          {!state.splitter && enableZoom && (
            <HotKey global keyCombo="." handler={handlers.zoomUp} />
          )}
          <HotKey global keyCombo="[" handler={handlers.rotateDown} />
          <HotKey global keyCombo="]" handler={handlers.rotateUp} />
          {enableZoom && (
            <HotKey global keyCombo="f" handler={handlers.toggleFit} />
          )}
          <HotKey global keyCombo="r" handler={handlers.reset} />
          {enableCrop && (
            <HotKey global keyCombo="c" handler={handlers.startCropping} />
          )}
          {state.cropping && (
            <HotKey global keyCombo="esc" handler={handlers.cancelCropping} />
          )}
        </Fragment>
      )}
      {enableZoom && (
        <Fragment>
          <label className="text-xs basis-16 whitespace-nowrap">
            Zoom: {state.zoom === 0 ? "FIT" : state.zoom.toFixed(2)}
          </label>
          <Button
            variant="link"
            aria-label="fit-to-view"
            onClick={fitToView}
            disabled={!state.isLoaded}
            icon={CoreIcons.mediaFitToView}
          />
          {!state.splitter && (
            <Button
              variant="link"
              aria-label="fit-to-size"
              onClick={fitToSize}
              disabled={!state.isLoaded}
              icon={CoreIcons.mediaAspect}
            />
          )}
          {!state.splitter && (
            <Dropdown
              placement="top"
              dropdownEvent="hover"
              dropdownClassName="overflow-hidden bg-black/80 backdrop-blur-md w-[12rem] h-[6rem] rounded-t-full"
            >
              <Button
                variant="link"
                aria-label="zoom"
                icon={CoreIcons.mediaZoomer}
                disabled={!state.isLoaded}
                onWheel={(e) => {
                  changeZoom(e.deltaY * 0.05);
                  e.stopPropagation();
                }}
                onClick={handlers.zoomUp}
              />
              <div
                role="none"
                className="select-none"
                onMouseDown={startDrag}
                onWheel={(e) => {
                  changeZoom(e.deltaY * 0.05);
                  e.stopPropagation();
                }}
              >
                <ZoomMeter zoom={state.zoom} />
                <span className="absolute top-0.5 left-1/2 -translate-x-1/2 bg-accent-300 outline -outline-offset-1 outline-accent-700 rounded-full text-white text-xs py-px px-1">
                  {state.zoom > 0 ? state.zoom.toFixed(1) : "FIT"}
                </span>
              </div>
            </Dropdown>
          )}
          <Divider vertical />
        </Fragment>
      )}
      {state.overlay && (
        <Button
          aria-label="splitter"
          disabled={!state.isLoaded}
          variant={state.splitter ? "solid" : "link"}
          icon={CoreIcons.mediaSplitter}
          onClick={toggleSplitter}
        />
      )}
      {!state.splitter && enableCrop && (
        <Button
          aria-label="crop"
          disabled={!state.isLoaded}
          variant={state.cropping ? "solid" : "link"}
          icon={CoreIcons.mediaCrop}
          onClick={toggleCropping}
        />
      )}
      <Divider vertical />
      <Button
        variant="link"
        disabled={!state.isLoaded}
        aria-label="rotate-ccw"
        icon={CoreIcons.mediaRotateCCW}
        onClick={handlers.rotateDown}
      />
      <Button
        variant="link"
        disabled={!state.isLoaded}
        aria-label="rotate-cw"
        icon={CoreIcons.mediaRotateCW}
        onClick={handlers.rotateUp}
      />
      <label className="text-xs basis-16 whitespace-nowrap">
        Rotate: {state.rotate}°
      </label>
    </Footer>
  );
};
