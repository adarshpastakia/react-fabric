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

import { RefObject, useEffect, useReducer } from "react";
import { ImageAnnotationShape } from "../typedefs";
import { VideoProps } from "./types";

interface VideoState {
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  lastVolume: number;
  isMuted: boolean;
  isLooping: boolean;
  playbackRate: number;
  showVtt: boolean;
  annotations?: {
    fill?: string;
    shapes: ImageAnnotationShape[];
  };
}

type VideoActions =
  | { type: "reset" }
  | { type: "play" }
  | { type: "pause" }
  | { type: "toggleVtt" }
  | { type: "resetAnnotations" }
  | { type: "durationChange"; duration: number }
  | { type: "timeChange"; time: number }
  | { type: "timeChange"; time: number }
  | { type: "volumeChange"; volume: number }
  | { type: "rateChange"; rate: number };

export const useVideoState = (
  ref: RefObject<HTMLVideoElement | null>,
  annotationWindow = 0.33,
  annotations?: VideoProps["annotations"],
) => {
  const [state, dispatch] = useReducer(
    (state: VideoState, action: VideoActions) => {
      if (action.type === "reset") {
        state = { ...state, isPlaying: false, currentTime: 0, duration: 0 };
      }
      if (action.type === "play") {
        state.isPlaying = true;
      }
      if (action.type === "pause") {
        state.isPlaying = false;
      }
      if (action.type === "toggleVtt") {
        state.showVtt = !state.showVtt;
      }
      if (action.type === "durationChange") {
        state.duration = action.duration;
      }
      if (action.type === "timeChange") {
        state.currentTime = action.time;
      }
      if (action.type === "timeChange" || action.type === "resetAnnotations") {
        state.annotations = !annotations
          ? undefined
          : {
              fill: annotations?.fill,
              shapes:
                (annotations?.shapes
                  .map(({ timestamps, ...shape }) => {
                    const shapeBox = timestamps.find(
                      (ts) => state.currentTime - annotationWindow < ts.time && state.currentTime + annotationWindow > ts.time,
                    );
                    if (shapeBox) {
                      return {
                        ...shape,
                        ...shapeBox,
                      };
                    }
                  })
                  .filter(Boolean) as any) ?? [],
            };
      }
      if (action.type === "volumeChange") {
        state.volume = action.volume;
        state.isMuted = action.volume === 0;
        if (action.volume > 0) {
          state.lastVolume = action.volume;
        }
      }
      if (action.type === "rateChange") {
        state.playbackRate = action.rate;
      }
      return { ...state };
    },
    {
      isPlaying: false,
      currentTime: 0,
      duration: 0,
      volume: 1,
      lastVolume: 1,
      isMuted: false,
      isLooping: false,
      playbackRate: 1,
      annotations: {},
      showVtt: false,
    } as VideoState,
  );

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    if (video.duration) {
      dispatch({ type: "durationChange", duration: video.duration });
    }

    const onPlay = () => dispatch({ type: "play" });
    const onPause = () => dispatch({ type: "pause" });
    const onTimeUpdate = () => dispatch({ type: "timeChange", time: video.currentTime });
    const onDurationChange = () => dispatch({ type: "durationChange", duration: video.duration });
    const onVolumeChange = () => dispatch({ type: "volumeChange", volume: video.volume });
    const onRateChange = () => dispatch({ type: "rateChange", rate: video.playbackRate });

    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);
    video.addEventListener("timeupdate", onTimeUpdate);
    video.addEventListener("durationchange", onDurationChange);
    video.addEventListener("volumechange", onVolumeChange);
    video.addEventListener("ratechange", onRateChange);

    return () => {
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
      video.removeEventListener("timeupdate", onTimeUpdate);
      video.removeEventListener("durationchange", onDurationChange);
      video.removeEventListener("volumechange", onVolumeChange);
      video.removeEventListener("ratechange", onRateChange);
    };
  }, []);

  useEffect(() => {
    dispatch({ type: "resetAnnotations" });
  }, [annotations]);

  return {
    state,
    play() {
      ref.current?.play();
    },
    pause() {
      ref.current?.pause();
    },
    togglePlay() {
      if (ref.current?.paused) {
        ref.current?.play();
      } else {
        ref.current?.pause();
      }
    },
    seek(time: number) {
      if (ref.current) {
        ref.current.currentTime += time;
      }
    },
    seekAndPlay(time: number) {
      if (ref.current) {
        ref.current.currentTime = time;
        ref.current.play();
      }
    },
    setTime(time: number) {
      if (ref.current) {
        ref.current.currentTime = time;
      }
    },
    setVolume(volume: number) {
      if (ref.current) {
        ref.current.volume = volume;
      }
    },
    setPlaybackRate(rate: number) {
      if (ref.current) {
        ref.current.playbackRate = rate;
      }
    },
    toggleVolume() {
      if (ref.current) {
        const volume = ref.current.volume;
        if (volume === 0) {
          ref.current.volume = state.lastVolume || 1;
        } else {
          ref.current.volume = 0;
        }
      }
    },
    toggleVtt() {
      dispatch({ type: "toggleVtt" });
    },
  };
};
