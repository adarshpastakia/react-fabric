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

import { Icon } from "@react-fabric/core";
import classNames from "classnames";
import { useVideoContext } from "./context";

export const Video = ({
  src,
  ref,
  vttText,
  onLoad,
  onError,
}: {
  src?: string;
  vttText?: string;
  ref: React.Ref<HTMLVideoElement | null>;
  onLoad?: (e: any) => void;
  onError?: (e: any) => void;
}) => {
  const { viewState, videoState, source, missingIcon, poster, autoPlay } = useVideoContext();

  if (source.state.errored)
    return <Icon icon={missingIcon ?? "icon-[mdi--video-off-outline]"} className="text-muted" size="5rem" />;

  return (
    <div
      role="none"
      className="relative pointer-events-none motion-safe:transition-transform duration-250 ease-in-out"
      style={{
        width: viewState.state.width,
        height: viewState.state.height,
        scale: `${viewState.state.flipX ? -1 : 1} ${viewState.state.flipY ? -1 : 1}`,
        rotate: `${90 * viewState.state.rotateMultiplier}deg`,
      }}
    >
      <video
        src={src}
        ref={ref}
        poster={poster}
        autoPlay={autoPlay}
        preload="metadata"
        className={classNames(
          "size-full object-fill text-transparent overflow-hidden transition-opacity duration-500 select-none",
          source.state.loading && "opacity-0",
        )}
        onLoadedMetadata={onLoad}
        onError={onError}
      >
        <track kind="captions" src={videoState.state.showVtt ? vttText : undefined} default />
      </video>
    </div>
  );
};
