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

import { AnimationSpinner, CoreIcons, Icon } from "@react-fabric/core";
import { type CssProp } from "@react-fabric/core/dist/types/types";
import { getImageColorset, isNumber } from "@react-fabric/utilities";
import classNames from "classnames";
import { type SyntheticEvent, useEffect, useReducer } from "react";
import { NsfwOverlay } from "../nsfw/NsfwOverlay";

export interface ThumbnailProps extends CssProp {
  /**
   * original source
   */
  src: string;
  /**
   * fallback alternate source
   */
  fallback?: string;
  /**
   * icon image for missing media
   */
  missingIcon?: string;
  /**
   * NSFW overlay
   */
  nsfw?: boolean;
  /**
   * decorate like video reel
   */
  videoReel?: boolean;
  /**
   * width
   */
  width?: number | string;
  /**
   * height, defaults to 1.325 * width
   */
  height?: number | string;
}

interface ThumbnailState {
  src?: string;
  loading: boolean;
  transparent: boolean;
  errorLevel: number;
  colorScheme: "light" | "dark" | "light_transparent" | "dark_transparent";
}

type ThumbnailActions =
  | { type: "reset" }
  | { type: "loading" }
  | { type: "loaded"; colorScheme: ThumbnailState["colorScheme"] }
  | { type: "colorScheme" }
  | { type: "errored" };

/**
 * Thumbnail component for displaying images with various features.
 * It supports loading states, error handling, NSFW overlays, and color scheme toggling.
 * The component is designed to be flexible with width and height, and can display a fallback image if the original fails to load.
 *
 * @param {ThumbnailProps} props - The properties for the Thumbnail component.
 * @returns {JSX.Element} The rendered Thumbnail component.
 *
 * @example
 * ```jsx
 * <Thumbnail
 *   src="https://example.com/image.jpg"
 *   fallback="https://example.com/fallback.jpg"
 *   nsfw={true}
 *   videoReel={true}
 *   width="8rem"
 *   height="10rem"
 *   className="custom-thumbnail"
 *   missingIcon={CoreIcons.mediaImageBroken}
 * />
 * ```
 *
 * @see {@link https://adarshpastakia.github.io/react-fabric/?path=/story/media-thumbnail--thumbnail} for more details on the properties.
 */
export const Thumbnail = ({
  src,
  nsfw,
  fallback,
  videoReel,
  height,
  className,
  missingIcon,
  width = "8rem",
}: ThumbnailProps) => {
  const [state, dispatch] = useReducer(
    (state: ThumbnailState, action: ThumbnailActions) => {
      if (action.type === "reset") {
        return {
          ...state,
          src: src ?? fallback,
          errorLevel: !(src ?? fallback) ? 2 : 0,
        } as ThumbnailState;
      }
      if (action.type === "loaded") {
        return {
          ...state,
          colorScheme: action.colorScheme,
          transparent: action.colorScheme.includes("transparent"),
          loading: false,
        };
      }
      if (action.type === "colorScheme") {
        return {
          ...state,
          colorScheme:
            state.colorScheme === "light_transparent"
              ? "dark_transparent"
              : "light_transparent",
        } as ThumbnailState;
      }
      if (action.type === "errored") {
        state.errorLevel++;
        if (state.errorLevel === 1) {
          if (!fallback) state.errorLevel++;
          state.src = fallback;
        }
        if (state.errorLevel === 2) state.loading = false;
        return { ...state };
      }
      return { ...state };
    },
    {
      src,
      loading: true,
      errorLevel: 0,
      transparent: false,
      colorScheme: "light",
    } as ThumbnailState,
  );

  const handleLoad = (e: SyntheticEvent<HTMLImageElement>) => {
    dispatch({
      type: "loaded",
      colorScheme: getImageColorset(
        e.currentTarget,
      ) as ThumbnailState["colorScheme"],
    });
  };

  useEffect(() => {
    dispatch({ type: "reset" });
  }, [src]);

  return (
    <div
      className={classNames(
        "fabric-thumbnail",
        className,
        videoReel && "fabric-reel",
        "overflow-hidden relative grid place-content-center p-1 shadow-inset",
        state.colorScheme.startsWith("light") && "bg-dark",
        state.colorScheme.startsWith("dark") && "bg-light",
      )}
      style={{
        width,
        height:
          height ??
          (isNumber(width) ? width * 1.325 : `calc(${width} * 1.325)`),
      }}
    >
      {state.errorLevel !== 2 && (
        <img
          className="max-w-full max-h-full object-contain text-transparent overflow-hidden"
          alt={src}
          loading="lazy"
          src={state.src}
          crossOrigin="anonymous"
          onLoad={handleLoad}
          width={state.errorLevel === 2 ? 48 : undefined}
          onError={() => dispatch({ type: "errored" })}
        />
      )}
      {state.errorLevel === 2 && (
        <Icon
          icon={missingIcon ?? CoreIcons.mediaImageBroken}
          className="text-muted"
          size="3rem"
        />
      )}
      {state.transparent && (
        <Icon
          icon={CoreIcons.mediaContrast}
          className={classNames(
            "contrastAction",
            "absolute bottom-2 end-2 rounded-full opacity-50 hover:opacity-100",
          )}
          onClick={(e) => [
            e.stopPropagation(),
            dispatch({ type: "colorScheme" }),
          ]}
        />
      )}
      {nsfw && <NsfwOverlay size="sm" />}
      {state.loading && <AnimationSpinner size="1.5rem" />}
    </div>
  );
};
