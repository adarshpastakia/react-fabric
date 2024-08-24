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

import { Button, CoreIcons, Footer, HotKey } from "@react-fabric/core";
import { Fragment, useMemo } from "react";
import { MiniSlider } from "../sliders/MiniSlider";
import { TimeSlider } from "../sliders/TimeSlider";
import { useAudioContext } from "./Context";

export const Tools = () => {
  const { audioRef, state, toggleEqs } = useAudioContext();

  const volumeIcon = useMemo(() => {
    if (state.volume === 0) return CoreIcons.mediaVolume0;

    if (state.volume <= 0.4) return CoreIcons.mediaVolume1;
    if (state.volume <= 0.7) return CoreIcons.mediaVolume2;

    return CoreIcons.mediaVolume3;
  }, [state.volume]);

  const handlers = useMemo(
    () => ({
      togglePlay: async () =>
        audioRef.current?.paused
          ? await audioRef.current?.play()
          : audioRef.current?.pause(),
      mute: () =>
        audioRef.current &&
        (audioRef.current.volume = audioRef.current.volume === 0 ? 0.5 : 0),
      volumeUp: () =>
        audioRef.current &&
        audioRef.current.volume < 1 &&
        (audioRef.current.volume = Math.min(1, audioRef.current.volume + 0.1)),
      volumeDown: () =>
        audioRef.current &&
        audioRef.current.volume > 0 &&
        (audioRef.current.volume = Math.max(0, audioRef.current.volume - 0.1)),
      jumpDown: () =>
        audioRef.current &&
        audioRef.current.currentTime > 0 &&
        (audioRef.current.currentTime -= 1),
      jumpUp: () => audioRef.current && (audioRef.current.currentTime += 1),
      seekDown: () =>
        audioRef.current &&
        audioRef.current.currentTime > 0 &&
        (audioRef.current.currentTime -= 0.165),
      seekUp: () => audioRef.current && (audioRef.current.currentTime += 0.165),
      speedDown: () =>
        audioRef.current &&
        audioRef.current.playbackRate > 0 &&
        (audioRef.current.playbackRate -= 0.5),
      speedUp: () =>
        audioRef.current &&
        audioRef.current.playbackRate < 5 &&
        (audioRef.current.playbackRate += 0.5),
      toggleEqs: () => toggleEqs(),
    }),
    [],
  );

  return (
    <Footer flex className="select-none bg-tint-50">
      {state.isLoaded && (
        <Fragment>
          <HotKey global keyCombo="space" handler={handlers.togglePlay} />
          <HotKey global keyCombo="0" handler={handlers.mute} />
          <HotKey global keyCombo="q" handler={handlers.toggleEqs} />
          <HotKey global keyCombo="," handler={handlers.jumpDown} />
          <HotKey global keyCombo="." handler={handlers.jumpUp} />
          <HotKey global keyCombo="-" handler={handlers.volumeDown} />
          <HotKey global keyCombo="=" handler={handlers.volumeUp} />
          <HotKey global keyCombo="shift+{" handler={handlers.speedDown} />
          <HotKey global keyCombo="shift+}" handler={handlers.speedUp} />
          <HotKey global keyCombo="shift+<" handler={handlers.seekDown} />
          <HotKey global keyCombo="shift+>" handler={handlers.seekUp} />
        </Fragment>
      )}
      <Button
        variant="link"
        aria-label="togglePlay"
        onClick={handlers.togglePlay}
        icon={state.isPlaying ? CoreIcons.mediaPause : CoreIcons.mediaPlay}
      />
      <MiniSlider
        icon={volumeIcon}
        value={state.volume}
        disabled={!state.isLoaded}
        max={1}
        onClick={() => {
          const v = state.volume === 1 ? 0 : state.volume >= 0.5 ? 1 : 0.5;
          audioRef.current && (audioRef.current.volume = v);
        }}
        onChange={(v) => audioRef.current && (audioRef.current.volume = v)}
      />
      <MiniSlider
        icon={`${state.speed.toFixed(1)}x`}
        value={state.speed}
        disabled={!state.isLoaded}
        max={5}
        min={0.1}
        textIcon
        onClick={() => {
          const v =
            state.speed >= 2
              ? 0.5
              : state.speed >= 1.5
                ? 2
                : state.speed >= 1
                  ? 1.5
                  : state.volume >= 0.5
                    ? 1
                    : 0.5;
          audioRef.current && (audioRef.current.playbackRate = v);
        }}
        onChange={(v) =>
          audioRef.current && (audioRef.current.playbackRate = v)
        }
      />
      <TimeSlider
        time={state.time}
        duration={state.duration}
        onChange={(time) =>
          audioRef.current && (audioRef.current.currentTime = time)
        }
      />
      <Button
        aria-label="eqs"
        variant={state.showEqs ? "solid" : "link"}
        onClick={toggleEqs}
        disabled={!state.isLoaded}
        icon={CoreIcons.mediaEqs}
      />
    </Footer>
  );
};
