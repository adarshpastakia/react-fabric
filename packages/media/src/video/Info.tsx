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

import { Divider, HotKeyLabel } from "@react-fabric/core";
import { InfoWrapper } from "../components/InfoWrapper";
import { useVideoContext } from "./context";

export const Info = ({ onClose }: { onClose: () => void }) => {
  const { viewState, source } = useVideoContext();
  return (
    <InfoWrapper title="Video Player" version="v1.0" onClose={onClose}>
      <div className="text-muted">Video size</div>
      <div>
        {viewState.state.originalWidth.toFixed(0)} x {viewState.state.originalHeight.toFixed(0)}
      </div>
      <div className="text-muted">View size</div>
      <div>
        {viewState.state.width.toFixed(0)} x {viewState.state.height.toFixed(0)}
      </div>
      <div className="text-muted">Zoom Ratio</div>
      <div>{viewState.state.ratio.toFixed(2)}</div>
      <div className="text-muted">Rotation</div>
      <div>{viewState.state.rotate.toFixed(0)}°</div>
      <div className="text-muted">Flipped</div>
      <div>
        <div>{!viewState.state.flipX && !viewState.state.flipY && "None"}</div>
        <div>{viewState.state.flipX && "Horizontal"}</div>
        <div>{viewState.state.flipY && "Vertical"}</div>
      </div>
      <Divider />
      <div className="flex gap-2">
        <HotKeyLabel keyCombo="shift+[" />
        <span>Rotate left</span>
      </div>
      <div className="flex gap-2">
        <HotKeyLabel keyCombo="shift+]" />
        <span>Rotate right</span>
      </div>
      <div className="flex gap-2">
        <HotKeyLabel keyCombo="F" />
        <span>Toggle fit to view</span>
      </div>
      <div className="flex gap-2">
        <HotKeyLabel keyCombo="C" />
        <span>Toggle closed captions</span>
      </div>
      <div className="flex gap-2">
        <HotKeyLabel keyCombo="E" />
        <span>Capture video frame export</span>
      </div>
      <div className="flex gap-2">
        <HotKeyLabel keyCombo="space" />
        <span>Play/Pause video</span>
      </div>
      <div className="flex gap-2">
        <HotKeyLabel keyCombo="," />
        <span>Skip backward 5sec</span>
      </div>
      <div className="flex gap-2">
        <HotKeyLabel keyCombo="." />
        <span>Skip forward 5sec</span>
      </div>
      <div className="flex gap-2">
        <HotKeyLabel keyCombo="shift+," />
        <span>Skip backward 30sec</span>
      </div>
      <div className="flex gap-2">
        <HotKeyLabel keyCombo="shift+." />
        <span>Skip forward 30sec</span>
      </div>
    </InfoWrapper>
  );
};
