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

import { Button } from "@react-fabric/core";
import { type ButtonProps } from "@react-fabric/core/dist/types/components/button/Button";
import { cn, Format } from "@react-fabric/utilities";
import { Fragment, type RefObject, useEffect, useImperativeHandle, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";
import RecordPlugin from "wavesurfer.js/dist/plugins/record";

export interface DictationProps extends Pick<ButtonProps, "size" | "variant" | "color" | "hotKey" | "icon"> {
  onRecord?: (blob: Blob) => void;
  ref?: RefObject<{ start: () => void; stop: () => void }>;
}

/**
 * Dictation component for recording audio using the microphone.
 * It uses WaveSurfer.js for audio visualization and recording.
 * The component provides a button to start and stop recording, and displays the recording progress.
 * It also supports a hotkey to start/stop recording.
 */
export function Dictation({
  ref,
  size,
  color = "primary",
  hotKey = "Alt+T",
  icon = "icon-[mdi--microphone-outline]",
  variant,
  onRecord,
}: DictationProps) {
  const [error, setError] = useState("");
  const [progress, setProgress] = useState(0);
  const [recording, setRecording] = useState(false);
  const wavesurferRef = useRef<WaveSurfer>(null);
  const recordRef = useRef<RecordPlugin>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const clr = getComputedStyle(containerRef.current).getPropertyValue("--color-primary");
      console.log(clr);
      wavesurferRef.current = new WaveSurfer({
        container: containerRef.current,
        waveColor: clr,
        cursorWidth: 0,
        width: 96,
        height: size === "sm" ? 28 : size === "lg" ? 40 : 32,
        barWidth: 1,
        barRadius: 3,
        barGap: 1,
        barHeight: 1.5,
        minPxPerSec: 32,
      });

      recordRef.current = wavesurferRef.current.registerPlugin(
        RecordPlugin.create({
          scrollingWaveform: true,
          renderRecordedAudio: false,
        }),
      );

      recordRef.current.on("record-progress", (time) => {
        setProgress(time);
      });

      return () => {
        wavesurferRef.current?.destroy();
      };
    }
  }, [size, color]);

  useEffect(() => {
    recordRef.current?.on("record-end", (blob) => {
      setRecording(false);
      onRecord?.(blob);
    });
  }, [onRecord]);

  const startDictationRef = useRef(() => {
    recordRef.current
      ?.startRecording()
      .then(() => {
        setRecording(true);
      })
      .catch(() => {
        setError("Unable to access microphone");
      });
  });

  const stopDictationRef = useRef(() => {
    recordRef.current?.stopRecording();
  });

  useImperativeHandle(
    ref,
    () => ({
      start: startDictationRef.current,
      stop: stopDictationRef.current,
    }),
    [],
  );

  return (
    <div
      className={cn(
        "inline-flex rounded-full overflow-hidden items-center outline outline-tint-100 bg-dimmed -outline-offset-1 self-center",
      )}
    >
      <div
        ref={containerRef}
        className={cn("overflow-hidden w-24 rounded-full shadow-inner bg-content", !recording && "hidden")}
        style={{
          boxShadow: "inset 0 0 2px 0 var(--tw-shadow-color)",
        }}
      />
      {error && <span className="text-xs font-medium text-danger-500 px-2">{error}</span>}
      {!error && !recording && (
        <Fragment>
          <Button
            size={size}
            icon={icon}
            aria-label="Start dictation"
            rounded
            variant={variant}
            hotKey={hotKey}
            hideHotKeyLabel
            onClick={startDictationRef.current}
          />
        </Fragment>
      )}
      {!error && recording && (
        <Fragment>
          <span className="text-xs px-2">{Format.duration(progress)}</span>
          <Button
            size={size}
            icon="icon-[mdi--stop]"
            aria-label="Stop dictation"
            rounded
            hotKey={hotKey}
            hideHotKeyLabel
            variant="solid"
            color="danger"
            onClick={stopDictationRef.current}
          />
        </Fragment>
      )}
    </div>
  );
}
