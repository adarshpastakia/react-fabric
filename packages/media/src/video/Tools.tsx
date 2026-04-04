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

import { Button, Divider } from "@react-fabric/core";
import { EMPTY_ARRAY } from "@react-fabric/utilities";
import { useCallback, useEffect, useEffectEvent, useMemo, useRef, useState } from "react";
import { ColorOptions } from "../components/ColorOptions";
import { FloatingSlider } from "../components/FloatingSlider";
import { TimeSlider } from "../components/TimeSlider";
import { Toolbar } from "../components/Toolbar";
import { TooltipButton } from "../components/TooltipButton";
import { CommentTag, CommentTool } from "./Comments";
import { useVideoContext } from "./context";
import { CutStrip } from "./CutStrip";
import { Info } from "./Info";
import { VideoProps } from "./types";

export const Tools = ({
  autoHideToolbar,
  markers,
  hasVtt,
  comments = EMPTY_ARRAY,
  onCut,
  onCommentChange,
}: Pick<VideoProps, "autoHideToolbar" | "markers" | "comments" | "onCut" | "onCommentChange"> & { hasVtt: boolean }) => {
  const { source, viewState, videoState, canExport, canCrop, fireExport } = useVideoContext();
  const [showHelp, setShowHelp] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const volumeIcon = useMemo(() => {
    if (videoState.state.volume === 0) return "icon-[mdi--volume-mute]";

    if (videoState.state.volume <= 0.4) return "icon-[mdi--volume-low]";
    if (videoState.state.volume <= 0.7) return "icon-[mdi--volume-medium]";

    return "icon-[mdi--volume-high]";
  }, [videoState.state.volume]);

  const drawMarkers = useCallback(() => {
    const context = canvasRef.current?.getContext("2d");
    context != null &&
      videoState.state.duration > 0 &&
      markers?.forEach((marker) => {
        const [time, size] = marker;
        const { width, height } = context?.canvas;
        const left = (time / videoState.state.duration) * width;
        const h = height * size;
        context && (context.strokeStyle = "#fc000088");
        context?.strokeRect(left, height - h, 1, h);
      });
  }, [markers, videoState.state.duration]);

  useEffect(() => {
    const resize = () => {
      if (canvasRef.current != null) {
        canvasRef.current.width = canvasRef.current.offsetWidth;
        canvasRef.current.height = canvasRef.current.offsetHeight;
        drawMarkers();
      }
    };

    const ob = new ResizeObserver(resize);
    canvasRef.current != null && ob.observe(canvasRef.current);
    resize();
    return () => {
      ob.disconnect();
    };
  }, [drawMarkers]);

  useEffect(() => {
    const context = canvasRef.current?.getContext("2d");
    drawMarkers();
    return () => {
      context?.clearRect(0, 0, context.canvas.width, context.canvas.height);
    };
  }, [drawMarkers]);

  const updateComment = useEffectEvent((text: string, index = -1) => {
    if (text) {
      if (index === -1) {
        onCommentChange?.([...comments, [videoState.state.currentTime ?? 0, text]]);
      } else {
        const newComments = [...comments];
        if (text === "[DELETE]") newComments.splice(index, 1);
        else newComments[index][1] = text;
        onCommentChange?.(newComments);
      }
    }
  });

  const tools = useMemo(() => {
    return (
      <>
        <TooltipButton
          tooltip={videoState.state.isPlaying ? "Pause" : "Play"}
          variant="link"
          color="primary"
          icon={videoState.state.isPlaying ? "icon-[mdi--pause]" : "icon-[mdi--play]"}
          aria-label={videoState.state.isPlaying ? "Pause" : "Play"}
          onClick={() => videoState.togglePlay()}
        />
        <FloatingSlider
          icon={volumeIcon}
          value={videoState.state.volume}
          onChange={videoState.setVolume}
          min={0}
          max={1}
          step={0.01}
          onClick={videoState.toggleVolume}
        />
        <FloatingSlider
          icon={`${videoState.state.playbackRate.toFixed(1)}x`}
          value={videoState.state.playbackRate}
          onChange={videoState.setPlaybackRate}
          min={0.5}
          max={2}
          step={0.1}
          className="fabric-btnTextIcon"
          onClick={() => videoState.setPlaybackRate(1)}
        />
        {hasVtt && (
          <TooltipButton
            variant="link"
            color="primary"
            tooltip={videoState.state.showVtt ? "Hide captions" : "Show captions"}
            icon={videoState.state.showVtt ? "icon-[mdi--closed-caption]" : "icon-[mdi--closed-caption-outline]"}
            aria-label="Show captions"
            onClick={videoState.toggleVtt}
          />
        )}
        <TimeSlider
          duration={videoState.state.duration}
          time={videoState.state.currentTime}
          onChange={(time) => videoState.setTime(time)}
        >
          {markers && (
            <canvas
              ref={canvasRef}
              className="pointer-events-none absolute inset-y-0 inset-x-px z-1 w-full h-full block mix-blend-color-dodge"
            />
          )}
          {comments?.map(([time, text], idx) => (
            <CommentTag
              key={idx}
              time={time}
              text={text}
              currentTime={videoState.state.currentTime}
              duration={videoState.state.duration}
              onPlay={() => videoState.seekAndPlay(time)}
              onDelete={() => updateComment("[DELETE]", idx)}
              onChange={(t: string) => updateComment(t, idx)}
            />
          ))}
        </TimeSlider>
      </>
    );
  }, [hasVtt, markers, updateComment, videoState, volumeIcon, comments]);

  if (source.state.errored) return null;
  return (
    <>
      <Toolbar
        autoHideToolbar={autoHideToolbar}
        hidePin={viewState.state.mode !== "default"}
        fullWidth={viewState.state.mode === "cutter"}
        floating={
          viewState.state.mode !== "cutter" && (
            <div className="fabric-media-toolbar bg-content rounded shadow-sm flex items-center text-sm leading-0 w-full z-0">
              {tools}
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
            {onCommentChange && <CommentTool onChange={updateComment} onOpen={videoState.pause} />}
            {onCut && (
              <TooltipButton
                tooltip="Cut"
                variant="link"
                color="primary"
                icon="icon-[mdi--scissors-cutting]"
                aria-label="Cut"
                onClick={() => (videoState.pause(), viewState.changeMode("cutter"))}
              />
            )}
            {canCrop && (
              <TooltipButton
                tooltip="Crop"
                variant="link"
                color="primary"
                icon="icon-[mdi--crop]"
                aria-label="Crop"
                onClick={() => (videoState.pause(), viewState.changeMode("cropper"))}
              />
            )}
            {canExport && (
              <TooltipButton
                tooltip="Capture"
                variant="link"
                color="primary"
                icon="icon-[mdi--camera-enhance-outline]"
                aria-label="Capture"
                onClick={() => (videoState.pause(), fireExport())}
              />
            )}
            {(canCrop || canExport || onCut || onCommentChange) && <Divider vertical />}
            <ColorOptions
              colorscape={viewState.state.colorscape}
              onChange={viewState.changeColorscape}
              onReset={viewState.reset}
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
            <Button
              icon="icon-[mdi--close-circle-outline]"
              aria-label="stop cropping"
              color="muted"
              variant="link"
              onClick={() => viewState.changeMode("default")}
            />
          </>
        )}
        {viewState.state.mode === "cutter" && (
          <CutStrip onCut={(...args) => (onCut?.(...args), viewState.changeMode("default"))} />
        )}
      </Toolbar>
      {showHelp && <Info onClose={() => setShowHelp(false)} />}
    </>
  );
};
