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

import { useLogger } from "@react-fabric/utilities";
import WaveSurfer from "wavesurfer.js";
import HoverPlugin from "wavesurfer.js/dist/plugins/hover";
import RegionsPlugin from "wavesurfer.js/dist/plugins/regions";
import TimelinePlugin from "wavesurfer.js/dist/plugins/timeline";

const CHANNEL_COLORS: Array<[wave: string, progress: string]> = [
  ["#75BBC1", "#108188"],
  ["#74a9cf", "#0570b0"],
  ["#8c96c6", "#88419d"],
  ["#df65b0", "#ae017e"],
  ["#fa9fb5", "#ce1256"],
  ["#fdbb84", "#ef6548"],
  ["#fec44f", "#cc4c02"],
  ["#bf812d", "#543005"],
];

export const Wavesurfer = (container: HTMLElement, media: HTMLAudioElement) => {
  const logger = useLogger("WaveSurfer");

  let activeRegion: AnyObject;
  let userEnabled: AnyObject;

  const plugins = {
    cursor: HoverPlugin.create(),
    regions: RegionsPlugin.create(),
    timeline: TimelinePlugin.create({
      style: {
        backgroundColor: "#18181b",
        position: "relative",
        color: "#fff",
        zIndex: "5",
      },
    }),
  };

  logger.debug("create instance", {});
  const instance = WaveSurfer.create({
    container,
    media,
    cursorWidth: 2,
    height: 200,
    barWidth: 2,
    barRadius: 3,
    barGap: 1,
    barHeight: 0.85,
    minPxPerSec: 16,
    splitChannels: CHANNEL_COLORS.map(
      (c, i) => ({
        waveColor: c[0],
        progressColor: c[1],
      }),
      {},
    ),
    plugins: Object.values(plugins).filter(Boolean) as AnyObject,
  });
  instance.getMediaElement().crossOrigin = "anonymous";
  instance.on("ready", () => {
    // @ts-expect-error ignore
    const count = instance.decodedData.numberOfChannels;
    logger.info("Found channels", {}, count);
    instance.setOptions({
      height: 200 / count,
    });
  });
  instance.on("error", (err: AnyObject) => {
    logger.debug("error", {}, err);
  });

  plugins.regions.on("region-double-clicked", (region: KeyValue) => {
    const { id, start, end } = region;
    logger.debug("play region", {}, { id, start, end });
    setTimeout(() => {
      instance.setTime(start);
    }, 10);
    activeRegion = region;
    region.play();
  });

  plugins.regions.on("region-out", (region: KeyValue) => {
    if (activeRegion) {
      instance.pause();
      activeRegion = undefined;
    }
  });

  /** ***************** destroy *******************/
  const destroy = () => {
    try {
      instance?.destroy();
    } catch (_) {
      //
    }
  };

  /** ***************** set wave colors *******************/
  const setColors = (colors: Array<[wave: string, progress: string]> = []) => {
    instance.setOptions({
      splitChannels: CHANNEL_COLORS.map(([wave, progress], idx) => ({
        waveColor: colors[idx]?.[0] ?? wave,
        progressColor: colors[idx]?.[1] ?? progress,
      })),
    });
  };

  /** ***************** set wave regions *******************/
  const setRegions = (
    regions?: Array<{
      id: string;
      start: number;
      end: number;
      channel?: number;
    }>,
  ) => {
    plugins.regions.clearRegions();
    const colors = instance.options.splitChannels;
    regions?.forEach(({ channel = -1, ...region }) => {
      plugins.regions.addRegion({
        ...region,
        channelIdx: channel,
        color: `${colors?.[channel]?.waveColor?.toString() ?? "#a37f4f"}30`,
        drag: false,
        resize: false,
      });
    });
  };

  const enableUserRegions = () => {
    userEnabled = plugins.regions.enableDragSelection({
      color: "#a37f4f30",
    });
    plugins.regions.clearRegions();
  };

  const disableUserRegions = (
    regions?: Array<{
      id: string;
      start: number;
      end: number;
      channel?: number;
    }>,
  ) => {
    userEnabled?.();
    setRegions(regions);
  };

  /** ***************** load audio file *******************/
  const loadAudio = async (src: string) => {
    const tmr = logger.timer("load audio");
    if (instance) {
      try {
        instance.setVolume(0.5);
      } catch (_) {
        //
      }
      try {
        instance.setPlaybackRate(1);
      } catch (_) {
        //
      }
      try {
        plugins.regions.clearRegions();
      } catch (_) {
        //
      }

      return await instance.load(src).then(() => {
        tmr.end();
      });
    }
    return await Promise.resolve();
  };

  return {
    loadAudio,
    destroy,
    setColors,
    setRegions,
    enableUserRegions,
    disableUserRegions,
    instance,
    regions: plugins.regions,
  };
};

export type WavesurferInstance = ReturnType<typeof Wavesurfer>;
