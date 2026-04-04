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

import { Button, Divider } from "@react-fabric/core";
import { Format } from "@react-fabric/utilities";
import { type DragEvent, type MouseEvent, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Fragment } from "react/jsx-runtime";
import { TooltipButton } from "../components/TooltipButton";
import { useVideoContext } from "./context";

export const CutStrip = ({ onCut }: { onCut?: (start: number, end: number) => void }) => {
  const { viewState, videoState } = useVideoContext();
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(videoState.state.duration);

  const style = useMemo(() => {
    return {
      insetInlineStart: `${(start / Math.max(videoState.state.duration, 1)) * 100}%`,
      insetInlineEnd: `${(Math.max(0, videoState.state.duration - end) / Math.max(videoState.state.duration, 1)) * 100}%`,
    };
  }, [start, end, videoState.state.duration]);

  const changePeriod = useCallback(
    (evt: MouseEvent<HTMLElement> | DragEvent<HTMLElement>) => {
      const x = evt.clientX;
      const { left = 0, width = 0 } = evt.currentTarget.closest<HTMLElement>(".slider-parent")?.getBoundingClientRect() ?? {};

      if (x - left > 0) {
        let newTime = ((x - left) / width) * videoState.state.duration;
        const midPoint = start + (end - start) / 2;
        newTime = Math.trunc(newTime * 1000) / 1000;
        if ("dataTransfer" in evt && evt.currentTarget.dataset?.pos === "start") {
          if (newTime < end) setStart(Math.min(newTime, end - 1));
        } else if ("dataTransfer" in evt && evt.currentTarget.dataset?.pos === "end") {
          if (newTime > start) setEnd(Math.max(newTime, start + 1));
        } else {
          if (newTime < midPoint || newTime < start) setStart(newTime);
          else if (newTime > midPoint || newTime > end) setEnd(newTime);
        }
      }
      evt.preventDefault();
      return false;
    },
    [videoState.state.duration, start, end],
  );

  useEffect(() => {
    const el = viewState.ref.current;
    if (el) {
      const handler = () => {
        if (Math.trunc(el.currentTime * 100) < Math.trunc(start * 100)) el.currentTime = start;
        if (Math.trunc(el.currentTime * 100) > Math.trunc(end * 100)) el.currentTime = start;
      };
      el.addEventListener("timeupdate", handler);

      return () => {
        el.removeEventListener("timeupdate", handler);
      };
    }
  }, [start, end]);

  useEffect(() => {
    viewState.ref.current && (viewState.ref.current.currentTime = start);
  }, [start]);

  useEffect(() => {
    viewState.ref.current && (viewState.ref.current.currentTime = end);
  }, [end]);

  const dragRef = useRef(null);

  return (
    <Fragment>
      <TooltipButton
        tooltip={videoState.state.isPlaying ? "Pause" : "Play"}
        variant="link"
        color="primary"
        icon={videoState.state.isPlaying ? "icon-[mdi--pause]" : "icon-[mdi--play]"}
        aria-label={videoState.state.isPlaying ? "Pause" : "Play"}
        onClick={() => videoState.togglePlay()}
      />
      <Divider vertical />
      <span className="text-dimmed text-xs px-1">{`${Format.duration(start, true)}`}</span>
      <div role="none" className="flex-1 relative h-6 ms-1 bg-tint-50 slider-parent" onClick={changePeriod}>
        <div
          className="bg-primary-200 absolute h-6 flex justify-between overflow-hidden"
          style={{
            insetInlineStart: style.insetInlineStart,
            insetInlineEnd: style.insetInlineEnd,
          }}
        >
          <img
            ref={dragRef}
            className="select-none absolute -left-[100vw]"
            alt=""
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
          />
          <div
            className="w-1 cursor-ew-resize bg-primary-500 h-6"
            draggable
            data-pos="start"
            onDrag={changePeriod}
            onDragStart={(e) =>
              dragRef.current && (e.dataTransfer.setData("text", "start"), e.dataTransfer.setDragImage(dragRef.current, 0, 0))
            }
          />
          <div
            className="w-1 cursor-ew-resize bg-primary-500 h-6"
            draggable
            data-pos="end"
            onDrag={changePeriod}
            onDragStart={(e) =>
              dragRef.current && (e.dataTransfer.setData("text", "end"), e.dataTransfer.setDragImage(dragRef.current, 0, 0))
            }
          />
        </div>
        {videoState.state.isPlaying && (
          <div
            className="w-0.5 cursor-ew-resize bg-white h-6 absolute"
            style={{
              insetInlineStart: `${(videoState.state.currentTime / videoState.state.duration) * 100}%`,
            }}
          />
        )}
      </div>
      <span className="text-dimmed text-xs px-1">{`${Format.duration(end, true)}`}</span>
      <Divider vertical />
      <Button
        variant="link"
        color="primary"
        aria-label="toggle-cut"
        onClick={() => onCut?.(start, end)}
        icon="icon-[mdi--check]"
      />
      <Button
        variant="link"
        color="muted"
        aria-label="toggle-cut"
        onClick={() => viewState.changeMode("default")}
        icon="icon-[mdi--close]"
      />
    </Fragment>
  );
};
