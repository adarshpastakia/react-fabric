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

import { Button, Divider, ToggleButtonGroup } from "@react-fabric/core";
import { Slider } from "@react-fabric/form";
import { useState } from "react";
import { ColorOptions } from "../components/ColorOptions";
import { FloatingSlider } from "../components/FloatingSlider";
import { Toolbar } from "../components/Toolbar";
import { TooltipButton } from "../components/TooltipButton";
import { useImageContext } from "./context";
import { Info } from "./Info";

export const Tools = ({ autoHideToolbar }: { autoHideToolbar?: boolean }) => {
  const { source, viewState, overlayState, canExport, canCrop, fireExport } = useImageContext();
  const [showHelp, setShowHelp] = useState(false);

  if (source.state.errored) return null;
  return (
    <>
      <Toolbar
        autoHideToolbar={autoHideToolbar}
        hidePin={viewState.state.mode !== "default"}
        floating={
          overlayState.state.hasOverlay &&
          viewState.state.mode !== "splitter" && (
            <div className="w-3xs bg-tint-50/70 rounded [&_.fabric-inputWrapper]:bg-transparent!">
              <Slider
                min={0}
                max={1}
                step={0.01}
                value={overlayState.state.opacity}
                onChange={(v) => v && overlayState.changeOpacity(v)}
                onSlide={overlayState.changeOpacity}
              />
            </div>
          )
        }
      >
        {viewState.state.mode === "default" && (
          <>
            <div className="px-2 text-muted text-xs flex gap-1 items-center">
              <span>Zoom:</span>
              <span>{viewState.state.zoomLevel === -1 ? "Fit" : `${viewState.state.zoomLevel.toFixed(1)}x`}</span>
            </div>
            <TooltipButton
              tooltip="Fit to Screen"
              variant="link"
              color="primary"
              icon="icon-[mdi--fit-to-screen-outline]"
              aria-label="Fit to Screen"
              onClick={() => viewState.zoom(-1)}
            />
            <TooltipButton
              tooltip="Fit to Size"
              variant="link"
              color="primary"
              icon="icon-[mdi--aspect-ratio]"
              aria-label="Fit to Size"
              onClick={() => viewState.zoom(1)}
            />
            <FloatingSlider
              icon="icon-[mdi--magnify]"
              value={viewState.state.ratio}
              onChange={viewState.zoom}
              min={0.5}
              max={5}
              step={0.1}
            />
            <Divider vertical />
            <TooltipButton
              tooltip="Flip Horizontal"
              variant="link"
              color="primary"
              icon="icon-[mdi--axis-z-rotate-counterclockwise]"
              aria-label="Flip Horizontal"
              onClick={viewState.flipHorizontal}
            />
            <TooltipButton
              tooltip="Flip Vertical"
              variant="link"
              color="primary"
              icon="icon-[mdi--horizontal-rotate-counterclockwise]"
              aria-label="Flip Vertical"
              onClick={viewState.flipVertical}
            />
            <TooltipButton
              tooltip="Rotate Left"
              variant="link"
              color="primary"
              icon="icon-[mdi--rotate-left]"
              aria-label="Rotate Left"
              onClick={viewState.rotateLeft}
            />
            <TooltipButton
              tooltip="Rotate Right"
              variant="link"
              color="primary"
              icon="icon-[mdi--rotate-right]"
              aria-label="Rotate Right"
              onClick={viewState.rotateRight}
            />
            <div className="px-2 text-muted text-xs flex gap-1 items-center">
              <span>Rotate:</span>
              <span>{viewState.state.rotate}°</span>
            </div>
            <Divider vertical />
            {canCrop && (
              <TooltipButton
                tooltip="Crop"
                variant="link"
                color="primary"
                icon="icon-[mdi--crop]"
                aria-label="Crop"
                onClick={() => viewState.changeMode("cropper")}
              />
            )}
            {canExport && (
              <TooltipButton
                tooltip="Capture"
                variant="link"
                color="primary"
                icon="icon-[mdi--camera-enhance-outline]"
                aria-label="Capture"
                onClick={fireExport}
              />
            )}
            {overlayState.state.hasOverlay && (
              <TooltipButton
                tooltip="Compare"
                variant="link"
                color="primary"
                icon="icon-[mdi--compare]"
                aria-label="Compare"
                onClick={() => viewState.changeMode("splitter")}
              />
            )}
            {(canCrop || canExport || overlayState.state.hasOverlay) && <Divider vertical />}
            <ColorOptions
              colorscape={viewState.state.colorscape}
              onChange={viewState.changeColorscape}
              onReset={viewState.resetColorscape}
            />
            <TooltipButton
              tooltip="Reset View"
              variant="link"
              color="muted"
              disabled={!viewState.state.canReset}
              icon="icon-[mdi--backup-restore]"
              aria-label="Reset View"
              onClick={viewState.reset}
            />
            <TooltipButton
              tooltip="Help"
              variant="link"
              color="muted"
              icon="icon-[mdi--help-circle-outline]"
              aria-label="Help"
              onClick={() => setShowHelp((h) => !h)}
            />
          </>
        )}
        {viewState.state.mode === "splitter" && (
          <>
            <ToggleButtonGroup
              size="sm"
              variant="link"
              value={overlayState.state.orientation}
              onChange={(v: "horizontal" | "vertical" | null) => overlayState.toggleOrientation(v ?? "horizontal")}
            >
              <TooltipButton
                tooltip="Horizontal slider"
                variant="link"
                color="primary"
                value="horizontal"
                active={overlayState.state.orientation === "horizontal"}
                icon="icon-[mdi--flip-horizontal]"
                aria-label="Slide Horizontal"
              />
              <TooltipButton
                tooltip="Vertical slider"
                variant="link"
                color="primary"
                value="vertical"
                active={overlayState.state.orientation === "vertical"}
                icon="icon-[mdi--flip-vertical]"
                aria-label="Slide Vertical"
              />
            </ToggleButtonGroup>
            <Divider vertical />
            <TooltipButton
              tooltip="Stop Comparing"
              variant="link"
              color="muted"
              icon="icon-[mdi--compare-remove]"
              aria-label="stop comparing"
              onClick={() => viewState.changeMode("default")}
            />
          </>
        )}
        {viewState.state.mode === "cropper" && (
          <>
            <TooltipButton
              tooltip="Rectangle Crop"
              variant="link"
              color="primary"
              value="vertical"
              active={viewState.state.cropMode === "rect"}
              icon="icon-[mdi--selection]"
              aria-label="Rectangle Crop"
              onClick={() => viewState.changeCropMode("rect")}
            />
            <TooltipButton
              tooltip="Ellipse Crop"
              variant="link"
              color="primary"
              value="vertical"
              active={viewState.state.cropMode === "ellipse"}
              icon="icon-[mdi--selection-ellipse]"
              aria-label="Ellipse Crop"
              onClick={() => viewState.changeCropMode("ellipse")}
            />
            {/* 
            TODO: Freehand crop to be implemented in future
            <TooltipButton
              tooltip="Freehand Crop"
              variant="link"
              color="primary"
              value="vertical"
              active={viewState.state.cropMode === "draw"}
              icon="icon-[mdi--draw]"
              aria-label="Freehand Crop"
              onClick={()=>viewState.changeCropMode("draw")}
            /> */}
            <Button
              icon="icon-[mdi--close-circle-outline]"
              aria-label="stop cropping"
              color="muted"
              variant="link"
              onClick={() => viewState.changeMode("default")}
            />
          </>
        )}
        {viewState.state.mode === "editor" && (
          <>
            <Divider vertical />
            <Button icon="icon-[mdi--close-circle-outline]" aria-label="stop editing" />
          </>
        )}
      </Toolbar>
      {showHelp && <Info onClose={() => setShowHelp(false)} />}
    </>
  );
};
