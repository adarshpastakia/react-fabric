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

import { Header, HotKey, Icon, ThemeProvider } from "@react-fabric/core";
import { debounce } from "@react-fabric/utilities";
import type { RefObject } from "react";
import { useEffect, useImperativeHandle, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import type { Region } from "wavesurfer.js/dist/plugins/regions.js";
import { useSource } from "../hooks/useSource";
import { AudioContext } from "./context";
import { Equalizers } from "./Equalizers";
import { Loading } from "./Loading";
import { Tools } from "./Tools";
import type { AudioProps } from "./types";
import { useAudioState } from "./useAudioState";
import type { WavesurferInstance } from "./wavesurfer";
import { Wavesurfer } from "./wavesurfer";

/**
 * Audio player component that uses Wavesurfer.js to render audio waveforms.
 *
 * Noteable features:
 * - Support for audio playback with play, pause, and seek functionality.
 * - Display of audio waveform using Wavesurfer.js.
 * - Optional video display synchronized with audio playback.
 * - Customizable colors for the waveform.
 * - Support for regions in the audio with callbacks for region changes and interactions.
 * - Editable mode that allows users to create and modify regions on the waveform.
 */
export function AudioPlayer({
  ref,
  src,
  showVideo,
  missingIcon,
  autoPlay,
  colors,
  regions,
  editable,
  onError,
  onLoad,
  onTimeChange,
  onRegionsChange,
  onRegionEnter,
  onRegionExit,
}: AudioProps) {
  const source = useSource({ src, onLoad, onError });
  const audioRef = useRef<HTMLMediaElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const audioState = useAudioState(audioRef);
  const [wavesurfer, setWavesurfer] = useState<WavesurferInstance>();
  const [showEqs, setShowEqs] = useState(false);

  const [regionOver, setRegionOver] = useState<Region | null>(null);

  /** ***************** initialize wavesurfer *******************/
  useEffect(() => {
    const surfer = Wavesurfer(
      containerRef.current as HTMLElement,
      audioRef.current as unknown as HTMLMediaElement,
      source.onLoad,
      source.onError,
    );
    setWavesurfer(surfer);
    return () => {
      surfer.destroy();
    };
    // eslint-disable-next-line @eslint-react/exhaustive-deps
  }, []);

  useEffect(() => {
    if (source.state.src) void wavesurfer?.loadAudio(source.state.src).catch(source.onError);
    // eslint-disable-next-line @eslint-react/exhaustive-deps
  }, [wavesurfer, source.state.src]);

  useEffect(() => {
    const handler = (e: number) => {
      onTimeChange?.(e);
    };
    return wavesurfer?.instance.currentTimeSignal.subscribe(handler);
  }, [onTimeChange, wavesurfer]);

  /** ***************** colors change *******************/
  useLayoutEffect(() => {
    if (wavesurfer != null && colors?.length) {
      wavesurfer.setColors(colors);
    }
  }, [wavesurfer, colors]);

  /** ***************** regions change *******************/
  useLayoutEffect(() => {
    if (wavesurfer != null) {
      const handler = debounce(() => {
        wavesurfer.setRegions(regions);
      });
      wavesurfer.instance.on("ready", handler);
      return () => {
        wavesurfer.instance.un("ready", handler);
      };
    }
  }, [wavesurfer, regions]);

  useLayoutEffect(() => {
    if (wavesurfer != null) {
      if (editable) {
        wavesurfer.enableUserRegions();
      } else {
        wavesurfer.disableUserRegions();
      }
    }
  }, [wavesurfer, editable]);

  useImperativeHandle(ref, () => ({
    play() {
      audioState.play();
    },
    pause() {
      audioState.pause();
    },
    seek(time: number) {
      audioState.seek(time);
    },
    seekAndPlay(time: number) {
      audioState.seekAndPlay(time);
    },
    playRegion(id: string) {
      wavesurfer?.playRegion(id);
    },
  }));

  useEffect(() => {
    const changeHandler = (regions: Region[]) => {
      onRegionsChange?.(regions);
    };
    const enterHandler = (region: Region) => {
      onRegionEnter?.(region);
    };
    const exitHandler = (region: Region) => {
      onRegionExit?.(region);
    };
    // @ts-expect-error ignore
    wavesurfer?.instance.on("region-changed", changeHandler);
    // @ts-expect-error ignore
    wavesurfer?.instance.on("region-over", (region: Region) => {
      setRegionOver(region);
    });
    // @ts-expect-error ignore
    wavesurfer?.instance.on("region-leave", () => {
      setRegionOver(null);
    });
    wavesurfer?.regions.on("region-in", enterHandler);
    wavesurfer?.regions.on("region-out", exitHandler);
    return () => {
      // @ts-expect-error ignore
      wavesurfer?.regions.un("region-changed", changeHandler);
      wavesurfer?.regions.un("region-in", enterHandler);
      wavesurfer?.regions.un("region-out", exitHandler);
    };
  }, [onRegionsChange, onRegionEnter, onRegionExit, wavesurfer]);

  return (
    <ThemeProvider colorScheme="dark">
      <AudioContext
        value={{
          audioRef,
          wavesurfer,
          source,
          audioState,
          showEqs,
          setShowEqs,
        }}
      >
        <Header className="relative bg-dimmed" dir="ltr">
          <HotKey
            keys="Space"
            handler={() => {
              void wavesurfer?.instance.playPause();
            }}
          />
          <HotKey keys="," handler={() => wavesurfer?.instance.skip(-2)} />
          <HotKey keys="." handler={() => wavesurfer?.instance.skip(2)} />
          <HotKey keys={"Shift+," as never} handler={() => wavesurfer?.instance.skip(-10)} />
          <HotKey keys={"Shift+." as never} handler={() => wavesurfer?.instance.skip(10)} />
          <div className="flex fabric-media-container p-0">
            <div
              role="none"
              className={
                showVideo
                  ? "relative aspect-video h-[calc(200px)] after:absolute after:inset-0 after:shadow-[0_0_10px_2px_rgba(0,0,0,0.5)_inset]"
                  : "hidden"
              }
              onClickCapture={() => {
                void wavesurfer?.instance.playPause();
              }}
            >
              <video
                crossOrigin="anonymous"
                ref={audioRef as unknown as RefObject<HTMLVideoElement>}
                onLoadedData={source.onLoad}
                onError={source.onError}
                autoPlay={autoPlay}
                className="size-full object-contain bg-black/85"
              >
                <track kind="captions" default />
              </video>
            </div>
            <div className="overflow-hidden relative flex-1 px-1 bg-content">
              <div ref={containerRef} className="fabric-wavesurfer" />
              {editable &&
                regionOver &&
                createPortal(
                  <button
                    style={{
                      appearance: "none",
                      aspectRatio: "1",
                      backgroundColor: "var(--color-danger-500)",
                      border: 0,
                      borderRadius: "2px",
                      cursor: "pointer",
                      insetInlineEnd: 4,
                      lineHeight: "16px",
                      padding: "0 2px",
                      position: "absolute",
                      top: 0,
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setRegionOver(null);
                      regionOver.remove();
                      return false;
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={16} height={16} fill="#fff">
                      <path d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8.46,11.88L9.87,10.47L12,12.59L14.12,10.47L15.53,11.88L13.41,14L15.53,16.12L14.12,17.53L12,15.41L9.88,17.53L8.47,16.12L10.59,14L8.46,11.88M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z" />
                    </svg>
                  </button>,
                  regionOver.element as HTMLElement,
                )}
            </div>
          </div>
          {source.state.loaded && <Tools />}
          <Equalizers />
          {source.state.errored && (
            <div className="absolute z-10 bg-tint-50/50 backdrop-blur-2xl cursor-not-allowed inset-0 grid place-content-center place-items-center text-muted gap-y-4">
              <Icon size="3rem" icon={missingIcon ?? "icon-[mdi--microphone-off]"} />
              {source.state.errorCode === "EncodingError" && <div>Unsupported audio format</div>}
            </div>
          )}
          {source.state.loading && <Loading />}
        </Header>
      </AudioContext>
    </ThemeProvider>
  );
}
