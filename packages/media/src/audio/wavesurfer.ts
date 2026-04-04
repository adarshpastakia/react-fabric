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

import { debounce, useLogger } from "@react-fabric/utilities";
import chroma from "chroma-js";
import WaveSurfer from "wavesurfer.js";
import HoverPlugin from "wavesurfer.js/dist/plugins/hover";
import RegionsPlugin from "wavesurfer.js/dist/plugins/regions";
import TimelinePlugin from "wavesurfer.js/dist/plugins/timeline";

const CHANNEL_COLORS: Array<[wave: string, progress: string]> = [
  ["#4FC3F7", "#0288D1"],
  ["#4DB6AC", "#00796B"],
  ["#AED581", "#689F38"],
  ["#FFF176", "#FBC02D"],
  ["#FFB74D", "#F57C00"],
  ["#F06292", "#C2185B"],
  ["#BA68C8", "#7B1FA2"],
  ["#7986CB", "#303F9F"],
];

export const Wavesurfer = (
  container: HTMLElement,
  media: HTMLAudioElement,
  onLoad?: (e: any) => void,
  onError?: (e: any) => void,
) => {
  const logger = useLogger("WaveSurfer");

  const plugins = {
    cursor: HoverPlugin.create({
      lineColor: "#8888",
      lineWidth: 1,
    }),
    regions: RegionsPlugin.create(),
    timeline: TimelinePlugin.create({
      height: 20,
      timeInterval: 0.5,
      primaryLabelInterval: 5,
      secondaryLabelInterval: 0,
      style: {
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
    height: 180,
    barWidth: 2,
    barRadius: 3,
    barGap: 1,
    barHeight: 0.85,
    minPxPerSec: 16,
    dragToSeek: true,
    progressColor: "#8885",
    splitChannels: CHANNEL_COLORS.map(
      (c, i) => ({
        waveColor: c[0],
        progressColor: c[1],
      }),
      {},
    ),
    plugins: Object.values(plugins).filter(Boolean) as AnyObject,
  });
  instance.on("ready", (e: AnyObject) => {
    // @ts-expect-error ignore
    const count = instance.decodedData.numberOfChannels;
    logger.info("Found channels", {}, count);
    instance.setOptions({
      height: 180 / count,
    });
    onLoad?.(e);
  });
  instance.on("error", (err: AnyObject) => {
    logger.debug("error", {}, err);
    onError?.(err);
  });

  plugins.regions.on("region-created", (region) => {
    region.on("over", () => {
      // @ts-expect-error ignore
      instance.emit("region-over", region);
    });
    region.on("leave", () => {
      // @ts-expect-error ignore
      instance.emit("region-leave", region);
    });
  });

  plugins.regions.on("region-double-clicked", (region: KeyValue) => {
    playRegion(region.id);
  });

  /** ***************** destroy *******************/
  const destroy = () => {
    try {
      plugins.timeline.destroy();
      plugins.cursor.destroy();
      plugins.regions.destroy();
      instance?.destroy();
    } catch (_) {
      //
    }
  };

  /** ***************** set wave colors *******************/
  const setColors = (colors: Array<[wave: string, progress: string]> = []) => {
    instance.setOptions({
      splitChannels: colors.map(([wave, progress], idx) => ({
        waveColor: colors[idx]?.[0] ?? wave,
        progressColor: colors[idx]?.[1] ?? progress,
      })),
    });
  };

  const changeHandler = debounce(() => {
    // @ts-expect-error ignore
    instance.emit(
      // @ts-expect-error ignore
      "region-changed",
      plugins.regions.getRegions().map((r) => ({
        id: r.id,
        start: r.start,
        end: r.end,
        color: r.color,
        channel: r.channelIdx,
      })),
    );
  });

  const clearRegions = () => {
    plugins.regions.un("region-created", changeHandler);
    plugins.regions.un("region-updated", changeHandler);
    plugins.regions.un("region-removed", changeHandler);
    plugins.regions.clearRegions();
  };

  /** ***************** set wave regions *******************/
  const setRegions = (
    regions?: Array<{
      id: string;
      start: number;
      end: number;
      color?: string;
      channel?: number;
    }>,
  ) => {
    const colors = instance.options.splitChannels;
    clearRegions();
    plugins.regions.enableDragSelection({
      color: "#DBCBB640",
    });
    logger.debug("creating regions", {}, regions);
    regions?.forEach(({ channel = -1, color, ...region }) => {
      plugins.regions.addRegion({
        ...region,
        channelIdx: channel,
        color: chroma(`${color ?? colors?.[channel]?.waveColor?.toString() ?? "#a37f4f"}`)
          .alpha(0.3)
          .hex(),
        drag: false,
        resize: false,
      });
    });
    plugins.regions.on("region-created", changeHandler);
    plugins.regions.on("region-updated", changeHandler);
    plugins.regions.on("region-removed", changeHandler);
  };

  const enableUserRegions = () => {
    instance.setOptions({ dragToSeek: false });
    plugins.regions.getRegions().forEach((r) => {
      r.setOptions({
        drag: true,
        resize: true,
      });
    });
  };

  const disableUserRegions = () => {
    instance.setOptions({ dragToSeek: true });
    plugins.regions.getRegions().forEach((r) => {
      r.setOptions({
        drag: false,
        resize: false,
      });
    });
  };

  const playRegion = (id: string) => {
    const region = plugins.regions.getRegions().find((r) => r.id === id);
    if (region) {
      logger.debug("play region", {}, { id, start: region.start, end: region.end });
      region.play(true);
    }
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
        clearRegions();
      } catch (_) {
        //
      }
      instance.empty();
      return await instance
        .load(src)
        .then(() => {
          tmr.end();
        })
        .finally(() => {});
    }
    return await Promise.resolve();
  };

  return {
    loadAudio,
    destroy,
    setColors,
    setRegions,
    playRegion,
    enableUserRegions,
    disableUserRegions,
    instance,
    regions: plugins.regions,
  };
};

export type WavesurferInstance = ReturnType<typeof Wavesurfer>;
