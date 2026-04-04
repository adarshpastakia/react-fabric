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

import { Divider } from "@react-fabric/core";
import { useMemo, useState } from "react";
import { FloatingSlider } from "../components/FloatingSlider";
import { TimeSlider } from "../components/TimeSlider";
import { Toolbar } from "../components/Toolbar";
import { TooltipButton } from "../components/TooltipButton";
import { Info } from "./Info";
import { useAudioContext } from "./context";

export const Tools = () => {
  const { audioState, wavesurfer, showEqs, setShowEqs } = useAudioContext();
  const [showHelp, setShowHelp] = useState(false);

  const volumeIcon = useMemo(() => {
    if (audioState.state.volume === 0) return "icon-[mdi--volume-mute]";

    if (audioState.state.volume <= 0.4) return "icon-[mdi--volume-low]";
    if (audioState.state.volume <= 0.7) return "icon-[mdi--volume-medium]";

    return "icon-[mdi--volume-high]";
  }, [audioState.state.volume]);

  return (
    <Toolbar fullWidth hidePin>
      <TooltipButton
        tooltip={audioState.state.isPlaying ? "Pause" : "Play"}
        variant="link"
        color="primary"
        icon={audioState.state.isPlaying ? "icon-[mdi--pause]" : "icon-[mdi--play]"}
        aria-label={audioState.state.isPlaying ? "Pause" : "Play"}
        onClick={() => wavesurfer?.instance.playPause()}
      />
      <FloatingSlider
        icon={volumeIcon}
        value={audioState.state.volume}
        onChange={(v) => wavesurfer?.instance.setVolume(v)}
        min={0}
        max={1}
        step={0.01}
        onClick={() => wavesurfer?.instance.setVolume(audioState.state.volume > 0 ? 0 : audioState.state.lastVolume)}
      />
      <FloatingSlider
        icon={`${audioState.state.playbackRate.toFixed(1)}x`}
        value={audioState.state.playbackRate}
        onChange={(v) => wavesurfer?.instance.setPlaybackRate(v)}
        min={0.5}
        max={2}
        step={0.1}
        className="fabric-btnTextIcon"
        onClick={() => wavesurfer?.instance.setPlaybackRate(1)}
      />
      <TimeSlider
        duration={audioState.state.duration}
        time={audioState.state.currentTime}
        onChange={(time) => wavesurfer?.instance.setTime(time)}
      />
      <Divider vertical />
      <TooltipButton
        tooltip="EQ Options"
        variant="link"
        color="primary"
        data-checked={showEqs}
        icon="icon-[mdi--tune-vertical]"
        aria-label="EQ Options"
        onClick={() => setShowEqs((e) => !e)}
      />
      <TooltipButton
        tooltip="Help"
        variant="link"
        color="muted"
        icon="icon-[mdi--help-circle-outline]"
        aria-label="Help"
        onClick={() => setShowHelp((h) => !h)}
      />

      {showHelp && <Info onClose={() => setShowHelp(false)} />}
    </Toolbar>
  );
};
