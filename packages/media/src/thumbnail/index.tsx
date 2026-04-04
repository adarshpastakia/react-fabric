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

import { Icon, LoadingSpinner } from "@react-fabric/core";
import { CssProp } from "@react-fabric/core/dist/types/types";
import classNames from "classnames";
import { useSource } from "../hooks/useSource";
import { NsfwOverlay, NsfwProps } from "../nsfw";

interface Props extends CssProp {
  /**
   * Thumbnail source, can be a string or an array of strings for multiple sources (e.g. for responsive images)
   */
  src: string | string[];
  /**
   * icon image for missing media
   */
  missingIcon?: string;
  /**
   * decorate like video reel
   */
  videoReel?: boolean;
  /**
   * width
   */
  width?: number | string;
  /**
   * height
   */
  height?: number | string;
  /**
   * NSFW overlay, can be a boolean or an object with NSFW props
   */
  nsfw?: boolean | NsfwProps;
}

/**
 * Thumbnail component for displaying images with various features.
 * It supports loading states, error handling, NSFW overlays, and color scheme toggling.
 * The component is designed to be flexible with width and height, and can display a fallback image if the original fails to load.
 *
 * @prop {string|string[]} src - The source URL(s) of the thumbnail image(s). Can be a single string or an array of strings for multiple sources.
 * @prop {string} missingIcon - An optional icon name to display when the image fails to load.
 * @prop {boolean} videoReel - A flag to apply video reel styling to the thumbnail.
 * @prop {number|string} width - The width of the thumbnail, can be a number (pixels) or a string (e.g. "100%").
 * @prop {number|string} height - The height of the thumbnail, can be a number (pixels) or a string (e.g. "100%").
 * @prop {boolean|object} nsfw - A flag or configuration object to display a NSFW overlay on the thumbnail.
 *
 * @returns {React.ReactElement} The rendered Thumbnail component.
 * 
 * @see {@link https://adarshpastakia.github.io/react-fabric/?path=/story/media-thumbnail--thumbnail} for more details on the properties.
 */
export const Thumbnail = ({ src, nsfw, missingIcon, width = "8rem", height = "8rem", className, videoReel }: Props) => {
  const source = useSource({ src });

  return (
    <div
      className={classNames(
        className,
        "fabric-thumbnail overflow-hidden relative grid place-content-center p-1 outline bg-default",
        videoReel && "fabric-reel",
      )}
      style={{ width, height }}
    >
      {source.state.src && (
        <img
          src={source.state.src}
          alt={source.state.src}
          crossOrigin="anonymous"
          loading="lazy"
          className={classNames(
            "max-w-full max-h-full object-contain text-transparent overflow-hidden transition-opacity duration-500",
            source.state.colorScheme === "dark" && "bg-white",
            source.state.colorScheme === "light" && "bg-black",
            source.state.loading && "opacity-0",
          )}
          onLoad={source.onLoad}
          onError={source.onError}
        />
      )}
      {source.state.errored && (
        <Icon icon={missingIcon ?? "icon-[mdi--image-off-outline]"} className="text-muted" size="3rem" />
      )}
      {nsfw && <NsfwOverlay {...(typeof nsfw === "object" ? nsfw : {})} />}
      {source.state.loading && <LoadingSpinner size="1.5rem" />}
    </div>
  );
};
