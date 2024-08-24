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

import { AnimationBars, ErrorBoundary } from "@react-fabric/core";
import { useCallback, useEffect, useState } from "react";
import { useCanvasContext } from "../canvas/Context";
import { useVideoContext } from "./Context";

export const Video = ({
  poster,
  vttText,
}: {
  poster?: string;
  vttText?: string;
}) => {
  const {
    videoRef,
    scrollerRef,
    state,
    handleLoad,
    handleMetadata,
    handleError,
    handlePlay,
    handlePause,
    handleRateChange,
    handleVolumeChange,
    handleSeeking,
    handleTimeUpdate,
  } = useVideoContext();
  const { canvasRef } = useCanvasContext();

  const togglePlay = useCallback(
    async () =>
      videoRef.current?.paused
        ? await videoRef.current?.play()
        : videoRef.current?.pause(),
    [],
  );

  const [vttSrc, setVtt] = useState<AnyObject>();
  useEffect(() => {
    if (vttText && state.showVtt) {
      const vtt = URL.createObjectURL(
        new Blob([vttText], { type: "text/vtt" }),
      );
      setVtt(vtt);
      return () => {
        setVtt(undefined);
        URL.revokeObjectURL(vtt);
      };
    }
  }, [vttText, state.showVtt]);

  return (
    <div
      role="none"
      ref={scrollerRef}
      onClick={togglePlay}
      className="area-content overflow-hidden relative scroll-hide grid bg-tint-50 select-none p-[8px]"
    >
      <ErrorBoundary>
        <div
          className="relative overflow-hidden m-auto grid place-content-center size-full"
          style={{
            width: state.width,
            height: state.height,
          }}
        >
          <div
            className="origin-center relative pointer-events-none"
            style={{
              width: state.videoWidth,
              height: state.videoHeight,
              transform: `rotate(${state.rotate}deg)`,
            }}
          >
            {state.src && (
              <video
                poster={poster}
                onLoadedMetadata={handleMetadata}
                onLoadedData={handleLoad}
                onError={handleError}
                ref={videoRef}
                className="object-contain size-full"
                onPlay={handlePlay}
                onPause={handlePause}
                onRateChange={handleRateChange}
                onVolumeChange={handleVolumeChange}
                onSeeking={handleSeeking}
                onTimeUpdate={handleTimeUpdate}
              >
                {state.src && <source src={state.src} />}
                <track kind="captions" src={vttSrc} default />
              </video>
            )}
            <canvas
              ref={canvasRef}
              width={state.videoWidth}
              height={state.videoHeight}
              className="absolute inset-0"
            />
          </div>
        </div>

        {state.isLoading && <AnimationBars />}
      </ErrorBoundary>
    </div>
  );
};
