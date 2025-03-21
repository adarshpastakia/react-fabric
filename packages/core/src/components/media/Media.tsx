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

import { getImageColorset } from "@react-fabric/utilities";
import classNames from "classnames";
import { Fragment, useEffect, useRef, useState } from "react";
import { type AriaProps, type CssProp, type TestProps } from "../../types";
import { CoreIcons } from "../../types/icons";
import { Button } from "../button/Button";
import { Icon } from "../icon/Icon";

export interface BaseProps extends CssProp, TestProps, AriaProps {
  /**
   * media source
   */
  src: string;
  /**
   * show media reel decoration
   */
  reel?: boolean;
  /**
   * media content fit
   */
  fit?: "cover" | "contain" | "fill";
}

const cover = {
  fill: "object-fill",
  cover: "object-cover",
  contain: "object-contain",
};

export interface ImageProps extends BaseProps {
  /**
   * image alt text
   */
  alt?: string;
}
export interface VideoProps extends BaseProps {
  /**
   * video poster
   */
  poster?: string;
  /**
   * auto play video
   */
  autoPlay?: boolean;
  /**
   * play on mouse over
   */
  playOnHover?: boolean;
}

const loadIndicator = (
  <div
    className={classNames(
      "fabric-mediaPlaceholder",
      "absolute z-1 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl text-gray animate-pulse",
    )}
  >
    ●●●
  </div>
);

export const Image = ({
  src,
  alt,
  reel,
  fit = "cover",
  className,
  ...aria
}: ImageProps) => {
  const [colorSet, setColorSet] = useState("light");
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);
  useEffect(() => {
    setLoaded(false);
    setErrored(false);
  }, [src]);
  return (
    <div
      data-ref="image"
      className={classNames(
        "fabric-mediaContainer",
        "relative overflow-hidden inline-block",
        reel && "fabric-mediaReel",
        className,
      )}
      data-colorset={colorSet}
      {...aria}
    >
      {!loaded && !errored && loadIndicator}
      {!errored && (
        <img
          alt={alt ?? src}
          src={src}
          loading="lazy"
          crossOrigin="anonymous"
          className={classNames(
            "fabric-media",
            "pointer-events-none w-full h-full",
            cover[fit],
          )}
          onLoad={(e) => {
            setLoaded(true);
            setColorSet(getImageColorset(e.currentTarget));
          }}
          onError={() => setErrored(true)}
        />
      )}
      {errored && (
        <Icon
          size="2rem"
          className="absolute text-tint-300 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          icon={CoreIcons.mediaImageBroken}
        />
      )}
    </div>
  );
};

export const Video = ({
  src,
  poster,
  reel,
  autoPlay,
  playOnHover,
  fit = "cover",
  className,
  ...aria
}: VideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);
  useEffect(() => {
    setLoaded(false);
    setErrored(false);
  }, [src]);

  const [state, setState] = useState(true);
  const [volume, setVolume] = useState(false);

  useEffect(() => {
    setErrored(false);
  }, [src]);

  return (
    <div
      data-ref="video"
      className={classNames(
        "fabric-mediaContainer",
        "relative overflow-hidden inline-block",
        reel && "fabric-mediaReel",
        className,
      )}
      onMouseEnter={() => {
        playOnHover && videoRef.current?.play();
      }}
      onMouseLeave={() => {
        playOnHover && videoRef.current?.pause();
      }}
      {...aria}
    >
      {!loaded && !errored && loadIndicator}
      {!errored && (
        <Fragment>
          <video
            loop
            ref={videoRef}
            controls={false}
            poster={poster}
            autoPlay={autoPlay}
            className={classNames(
              "fabric-media",
              "pointer-events-none w-full h-full",
              fit && `object-${fit}`,
            )}
            onPlay={() => setState(true)}
            onPause={() => setState(false)}
            onVolumeChange={(e) => setVolume(!!e.currentTarget.volume)}
            onLoadedData={(e) => {
              e.currentTarget.volume = 0;
              setLoaded(true);
            }}
            onError={() => setErrored(true)}
          >
            <source src={src} />
            <track kind="captions" />
          </video>
          <div
            data-inner-clickable
            className={classNames(
              "fabric-mediaControls",
              "absolute bottom-6 end-6 rounded-full flex flex-col",
            )}
          >
            <Button
              rounded
              variant="link"
              className={"fabric-mediaControlPlaceholder"}
              icon={CoreIcons.ellipsis}
              aria-label="controls"
            />
            <Button
              rounded
              variant="link"
              aria-label="controls"
              className={"fabric-mediaControlAction"}
              onClick={() => {
                videoRef.current &&
                  (videoRef.current.volume = videoRef.current.volume ? 0 : 1);
              }}
              icon={volume ? CoreIcons.volumeOn : CoreIcons.volumeOff}
            />
            <Button
              rounded
              variant="link"
              aria-label="controls"
              className={"fabric-mediaControlAction"}
              onClick={() => {
                videoRef.current?.paused
                  ? videoRef.current?.play()
                  : videoRef.current?.pause();
              }}
              icon={state ? CoreIcons.pause : CoreIcons.play}
            />
          </div>
        </Fragment>
      )}
      {errored && (
        <Icon
          size="2rem"
          className="absolute text-tint-300 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          icon={CoreIcons.mediaVideoBroken}
        />
      )}
    </div>
  );
};
