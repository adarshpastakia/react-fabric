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

import { Header } from "@react-fabric/core";
import { type RefProp } from "@react-fabric/core/dist/types/types";
import { compareValues, debounce } from "@react-fabric/utilities";
import {
  useCallback,
  useEffect,
  useImperativeHandle,
  useLayoutEffect,
  useReducer,
  useRef,
  useState,
} from "react";
import { AudioState } from "../types";
import { type AudioActions, AudioContext } from "./Context";
import { Equalizers } from "./Equalizers";
import { Loading } from "./Loading";
import { Tools } from "./Tools";
import { Wavesurfer, type WavesurferInstance } from "./wavesurfer";
import classNames from "classnames";

export interface AudioProps extends RefProp<AudioPlayerRef> {
  /**
   * audio source
   */
  src: string;
  /**
   * fallback source
   */
  fallback?: string;
  /**
   * channel colors
   */
  colors?: Array<[wave: string, progress: string]>;
  /**
   * scene list
   */
  regions?: Array<{ id: string; start: number; end: number; channel?: number }>;
  /**
   * onChange playback time
   */
  onChange?: (currentTime: number) => void;
  /**
   * play handler
   */
  onPlay?: () => void;
  /**
   * pause handler
   */
  onPause?: () => void;
  /**
   * on enter region handler
   */
  onRegionStart?: (id: string) => void;
  /**
   * on region exit handler
   */
  onRegionEnd?: (id: string) => void;
  /**
   * source loaded
   */
  onLoad?: () => void;
  /**
   * error loading audio
   */
  onError?: () => void;

  forVideo?: boolean;

  userDefinedRegions?: boolean;
  onRegionChange?: (
    regions: Array<{ start: number; end: number; remove: () => void }>,
  ) => void;
}

export interface AudioPlayerRef {
  play: () => void;
  pause: () => void;
  playRegion: (start: number) => void;
}

/**
 * Audio player component that uses Wavesurfer.js to render audio waveforms.
 * It supports loading audio files, displaying waveforms, and managing playback.
 * It also allows for defining regions within the audio for interaction.
 * It provides a context for managing audio state and actions.
 * It includes tools for playback control, equalizers, and loading indicators.
 * It supports user-defined regions for custom interaction.
 * It provides callbacks for various audio events such as loading, error handling, playback control, and region management.
 * It allows customization of colors for the waveform and progress indicators.
 *
 * @param {AudioProps} props - The properties for the AudioPlayer component.
 * @returns {JSX.Element} The rendered AudioPlayer component.
 *
 * @example
 * ```jsx
 * <AudioPlayer
 *   src="path/to/audio.mp3"
 *   fallback="path/to/fallback.mp3"
 *   colors={[["#ff0000", "#00ff00"], ["#0000ff", "#ffff00"]]}
 *   regions={[{ id: "1", start: 0, end: 10 }, { id: "2", start: 15, end: 20 }]}
 *   onRegionChange={(regions) => console.log(regions)}
 *   onLoad={() => console.log("Audio loaded")}
 *   onError={() => console.error("Error loading audio")}
 *   onChange={(time) => console.log("Current time:", time)}
 *   onPlay={() => console.log("Audio playing")}
 *   onPause={() => console.log("Audio paused")}
 *   onRegionStart={(id) => console.log("Region started:", id)}
 *   onRegionEnd={(id) => console.log("Region ended:", id)}
 * />
 * ```
 *
 * @see {@link https://adarshpastakia.github.io/react-fabric/?path=/story/media-audioplayer--audio-player} for more details on the properties.
 * @see {@link https://wavesurfer-js.org/} for more details on Wavesurfer.js.
 */
export const AudioPlayer = ({
  ref,
  src,
  fallback,
  colors,
  regions,
  forVideo,
  userDefinedRegions,
  onRegionChange,
  onLoad,
  onError,
  onChange,
  onPlay,
  onPause,
  onRegionStart,
  onRegionEnd,
}: AudioProps) => {
  const audioRef = useRef<HTMLMediaElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [wavesurfer, setWavesurfer] = useState<WavesurferInstance>();

  const [state, dispatch] = useReducer(
    (state: AudioState, action: AudioActions) => {
      if (action.type === "loaded") {
        state.isLoading = false;
        state.isLoaded = true;
        onLoad?.();
      }
      if (action.type === "metadata") {
        state.duration = action.duration;
        state.volume = action.volume;
        state.speed = action.speed;
      }
      if (action.type === "errored") {
        state.errorLevel++;
        if (state.errorLevel === 1) {
          if (fallback) {
            state.src = fallback;
          } else {
            state.errorLevel++;
          }
        }
        if (state.errorLevel === 2) {
          state.isLoading = false;
          state.isLoaded = true;
          onError?.();
        }
      }
      if (action.type === "reset") {
        return { ...state, src: action.audio };
      }
      if (action.type === "toggleEqs") {
        return { ...state, showEqs: !state.showEqs };
      }
      if (action.type === "play") {
        onPlay?.();
        return { ...state, isPlaying: true };
      }
      if (action.type === "pause") {
        onPause?.();
        return { ...state, isPlaying: false };
      }
      if (action.type === "playing") {
        onChange?.(action.time);
        return { ...state, time: action.time };
      }
      if (action.type === "volume") {
        return { ...state, volume: action.volume };
      }
      if (action.type === "speed") {
        return { ...state, speed: action.speed };
      }
      return { ...state };
    },
    {
      errorLevel: 0,
      src: "",
      isLoading: true,
      isLoaded: false,
      isErrored: false,
      isPlaying: false,
      showEqs: false,
      time: 0,
      duration: 0,
      volume: 0.5,
      speed: 1,
    } as AudioState,
  );

  useImperativeHandle(
    ref,
    () => ({
      play: () => {
        void audioRef.current?.play();
      },
      pause: () => audioRef.current?.pause(),
      playRegion: (start: number) => {
        audioRef.current && (audioRef.current.currentTime = start);
        void audioRef.current?.play();
      },
    }),
    [wavesurfer],
  );

  /** ***************** initialize wavesurfer *******************/
  useEffect(() => {
    const surfer = Wavesurfer(
      containerRef.current as HTMLElement,
      audioRef.current as HTMLMediaElement,
    );
    setWavesurfer(surfer);
    return () => {
      surfer.destroy();
    };
  }, []);

  useEffect(() => {
    dispatch({ type: "reset", audio: src });
  }, [src]);

  const handleLoad = useCallback(() => {
    dispatch({ type: "loaded" });
  }, []);

  const handleError = useCallback(() => {
    dispatch({ type: "errored" });
  }, []);

  const toggleEqs = useCallback(() => {
    dispatch({ type: "toggleEqs" });
  }, []);

  useEffect(() => {
    void wavesurfer?.loadAudio(state.src);
  }, [state.src]);

  /** ***************** handle region in/out *******************/
  useEffect(() => {
    if (wavesurfer != null) {
      const handleIn = (region: KeyValue) => {
        onRegionStart?.(region.id);
      };
      const handleOut = (region: KeyValue) => {
        onRegionEnd?.(region.id);
      };
      wavesurfer.regions.on("region-in", handleIn);
      wavesurfer.regions.on("region-out", handleOut);

      return () => {
        wavesurfer.regions.un("region-in", handleIn);
        wavesurfer.regions.un("region-out", handleOut);
      };
    }
  }, [wavesurfer, onRegionStart, onRegionEnd]);

  /** ***************** colors change *******************/
  useLayoutEffect(() => {
    if (wavesurfer != null) {
      wavesurfer.setColors(colors);
    }
  }, [wavesurfer, colors]);

  /** ***************** regions change *******************/
  useLayoutEffect(() => {
    wavesurfer?.instance.on("ready", () => {
      wavesurfer.setRegions(regions);
    });
  }, [wavesurfer, regions]);

  useEffect(() => {
    if (wavesurfer) {
      const handleChange = debounce(() => {
        onRegionChange?.(
          wavesurfer.regions
            .getRegions()
            .map((region) => ({
              start: region.start,
              end: region.end,
              remove: () => region.remove(),
            }))
            .sort(compareValues("asc", "start")),
        );
      });
      if (userDefinedRegions) {
        wavesurfer.enableUserRegions();
        wavesurfer.regions.on("region-created", handleChange);
        wavesurfer.regions.on("region-updated", handleChange);
        wavesurfer.regions.on("region-removed", handleChange);
      } else {
        wavesurfer.disableUserRegions(regions);
      }

      return () => {
        wavesurfer.regions.un("region-created", handleChange);
        wavesurfer.regions.un("region-updated", handleChange);
        wavesurfer.regions.un("region-removed", handleChange);
      };
    }
  }, [wavesurfer, regions, userDefinedRegions, onRegionChange]);

  const M = forVideo ? "video" : "audio";

  return (
    <AudioContext.Provider
      value={{
        audioRef,
        wavesurfer,
        state,
        toggleEqs,
        handleLoad,
        handleError,
      }}
    >
      <Header className="bg-base" dir="ltr">
        <div className="flex">
          <div
            className={
              forVideo
                ? "grid relative aspect-video h-[200px] after:absolute after:inset-0 after:shadow-[0_0_10px_2px_rgba(0,0,0,0.5)_inset]"
                : "hidden"
            }
          >
            <M
              onLoadedData={handleLoad}
              onError={handleError}
              ref={audioRef as any}
              onPlay={() => dispatch({ type: "play" })}
              onPause={() => dispatch({ type: "pause" })}
              onRateChange={() =>
                dispatch({
                  type: "speed",
                  speed: audioRef.current?.playbackRate ?? 0,
                })
              }
              onVolumeChange={() =>
                dispatch({
                  type: "volume",
                  volume: audioRef.current?.volume ?? 0,
                })
              }
              onLoadedMetadata={() =>
                dispatch({
                  type: "metadata",
                  speed: audioRef.current?.playbackRate ?? 0,
                  volume: audioRef.current?.volume ?? 0,
                  duration: audioRef.current?.duration ?? 0,
                })
              }
              onSeeking={() =>
                dispatch({
                  type: "playing",
                  time: audioRef.current?.currentTime ?? 0,
                })
              }
              onTimeUpdate={() =>
                dispatch({
                  type: "playing",
                  time: audioRef.current?.currentTime ?? 0,
                })
              }
            >
              <track kind="captions" default />
            </M>
          </div>
          <div className="overflow-hidden relative flex-1 px-1">
            <div ref={containerRef} className="h-[200px]" />
            {state.isLoading && <Loading />}
          </div>
        </div>
        <Tools />
        <Equalizers />
      </Header>
    </AudioContext.Provider>
  );
};
