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

import { Button, CoreIcons, HotKey } from "@react-fabric/core";
import { type ButtonProps } from "@react-fabric/core/dist/types/components/button/Button";
import { Format } from "@react-fabric/utilities";
import classNames from "classnames";
import {
  Fragment,
  type RefObject,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import WaveSurfer from "wavesurfer.js";
import RecordPlugin from "wavesurfer.js/dist/plugins/record";

export interface DictationProps
  extends Pick<
    ButtonProps,
    "size" | "variant" | "icon" | "iconBg" | "iconColor"
  > {
  hotkey?: string;
  onRecord?: (blob: Blob) => void;
  ref?: RefObject<{ start: () => void; stop: () => void }>;
}

/**
 * Dictation component for recording audio using the microphone.
 * It uses WaveSurfer.js for audio visualization and recording.
 * The component provides a button to start and stop recording,
 * and displays the recording progress.
 * It also supports a hotkey to start/stop recording.
 *
 * @param {DictationProps} props - The properties for the Dictation component.
 * @returns {JSX.Element} The rendered Dictation component.
 *
 * @example
 * ```jsx
 * <Dictation
 *   hotkey="alt+t"
 *   size="md"
 *   icon={CoreIcons.mic}
 *   iconBg="bg-blue-500"
 *   iconColor="text-white"
 *   variant="solid"
 *   onRecord={(blob) => {
 *     // Handle the recorded audio blob
 *     console.log("Recorded audio blob:", blob);
 *   }}
 * />
 * ```
 *
 * @see {@link https://adarshpastakia.github.io/react-fabric/?path=/story/media-dictation--dictation} for more details on the properties.
 */
export const Dictation = ({
  ref,
  hotkey = "alt+t",
  size,
  icon,
  iconBg,
  iconColor,
  variant,
  onRecord,
}: DictationProps) => {
  const [error, setError] = useState("");
  const [progress, setProgress] = useState(0);
  const [recording, setRecording] = useState(false);
  const wavesurfer = useRef<WaveSurfer>(null);
  const record = useRef<RecordPlugin>(null);
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (container.current) {
      wavesurfer.current = new WaveSurfer({
        container: container.current,
        waveColor: "#0190ff",
        cursorWidth: 0,
        width: 96,
        height: size === "sm" ? 28 : 32,
        barWidth: 1,
        barRadius: 3,
        barGap: 1,
        barHeight: 1.5,
        minPxPerSec: 16,
      });

      record.current = wavesurfer.current.registerPlugin(
        RecordPlugin.create({
          scrollingWaveform: true,
          renderRecordedAudio: false,
        }),
      );

      record.current.on("record-progress", (time) => {
        setProgress(time);
      });

      return () => {
        wavesurfer.current?.destroy();
      };
    }
  }, [size]);

  useEffect(() => {
    record.current?.on("record-end", (blob) => {
      setRecording(false);
      onRecord?.(blob);
    });
  }, [onRecord]);

  const startDictation = useRef(() => {
    record.current
      ?.startRecording()
      .then(() => {
        setRecording(true);
      })
      .catch(() => {
        setError("Unable to access microphone");
      });
  });

  const stopDictation = useRef(() => {
    record.current?.stopRecording();
  });

  useImperativeHandle(
    ref,
    () => ({
      start: startDictation.current,
      stop: stopDictation.current,
    }),
    [],
  );

  return (
    <div
      className={classNames(
        "inline-flex rounded-full overflow-hidden items-center outline outline-tint-100 bg-dimmed -outline-offset-1 self-center",
        size === "sm" ? "h-7" : "h-8",
      )}
    >
      <div
        ref={container}
        className={classNames(
          "overflow-hidden w-24 bg-base rounded-full",
          size === "sm" ? "h-7" : "h-8",
          !recording && "hidden",
        )}
        style={{
          boxShadow: "inset 0 1px 2px 0 var(--tw-shadow-color)",
        }}
      />
      {error && (
        <span className="text-xs font-medium text-danger-500 px-2">
          {error}
        </span>
      )}
      {!error && !recording && (
        <Fragment>
          {hotkey && (
            <HotKey global keyCombo={hotkey} handler={startDictation.current} />
          )}
          <Button
            size={size}
            icon={icon ?? CoreIcons.mic}
            iconBg={iconBg}
            iconColor={iconColor}
            aria-label="Start dictation"
            rounded
            variant={variant}
            onClick={startDictation.current}
          />
        </Fragment>
      )}
      {!error && recording && (
        <Fragment>
          {hotkey && (
            <HotKey global keyCombo={hotkey} handler={stopDictation.current} />
          )}
          <span className="text-xs px-2">{Format.duration(progress)}</span>
          <Button
            size={size}
            icon={CoreIcons.stop}
            aria-label="Stop dictation"
            rounded
            iconAlign="end"
            variant="solid"
            color="danger"
            onClick={stopDictation.current}
          />
        </Fragment>
      )}
    </div>
  );
};
