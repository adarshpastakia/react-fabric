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

import { Button, CoreIcons, Divider, Icon, Text } from "@react-fabric/core";
import { Slider } from "@react-fabric/form";
import {
  Fragment,
  memo,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { useAudioContext } from "./Context";

const EQ_FREQUENCY = [
  32, 64, 128, 256, 512, 1000, 2000, 4000, 6000, 8000, 12000, 16000,
];

const EqSlider = memo(
  ({
    index,
    value,
    label,
    onChange,
    color = "#0d9488",
    forChannel = false,
  }: AnyObject) => (
    <div
      style={{ width: "2.5rem" }}
      data-negative={value === 0 ? "zero" : value < 0}
      data-for-channel={forChannel}
      dir={index === "left" ? "rtl" : "ltr"}
    >
      <Slider
        vertical
        step={1}
        height={128}
        value={value}
        showLabels
        color={value < 0 ? "#e11d48" : color}
        data-channel={forChannel}
        maxLabel={`${!forChannel && value > 0 ? "+" : ""}${~~value}`}
        minLabel={label}
        min={forChannel ? 0 : -40}
        max={forChannel ? 100 : 40}
        onChange={(e) => onChange(index, e)}
      />
    </div>
  ),
);
EqSlider.displayName = "Audio.EQSlider";

export const Equalizers = memo(() => {
  const { wavesurfer, state } = useAudioContext();
  const contextRef = useRef<AudioContext>();
  const mediaModelRef = useRef<MediaElementAudioSourceNode>();
  const [filters, setFilters] = useState<AnyObject>([]);

  const [channelGains, setChannelGains] = useState<AnyObject[]>();

  const createFilters = useCallback(() => {
    if (wavesurfer) {
      const EQ = [
        {
          f: EQ_FREQUENCY[0],
          name: "32",
          type: "lowshelf",
        },
        {
          f: EQ_FREQUENCY[1],
          name: "64",
          type: "peaking",
        },
        {
          f: EQ_FREQUENCY[2],
          name: "128",
          type: "peaking",
        },
        {
          f: EQ_FREQUENCY[3],
          name: "256",
          type: "peaking",
        },
        {
          f: EQ_FREQUENCY[4],
          name: "512",
          type: "peaking",
        },
        {
          f: EQ_FREQUENCY[5],
          name: "1k",
          type: "peaking",
        },
        {
          f: EQ_FREQUENCY[6],
          name: "2k",
          type: "peaking",
        },
        {
          f: EQ_FREQUENCY[7],
          name: "4k",
          type: "peaking",
        },
        {
          f: EQ_FREQUENCY[8],
          name: "6k",
          type: "peaking",
        },
        {
          f: EQ_FREQUENCY[9],
          name: "8k",
          type: "peaking",
        },
        {
          f: EQ_FREQUENCY[10],
          name: "12k",
          type: "highshelf",
        },
        {
          f: EQ_FREQUENCY[11],
          name: "16k",
          type: "highshelf",
        },
      ];

      if (!contextRef.current) {
        contextRef.current = new AudioContext();
        mediaModelRef.current = contextRef.current.createMediaElementSource(
          wavesurfer.instance.getMediaElement(),
        );
      }

      // Create filters
      const context = contextRef.current;
      const mediaModel = mediaModelRef.current;
      if (context && mediaModel) {
        const _filters = EQ.map(function (band) {
          const filter = context.createBiquadFilter();
          filter.type = band.type as AnyObject;
          filter.gain.value = 0;
          filter.Q.value = 1;
          filter.frequency.value = band.f;
          return filter;
        });

        const splitFilters = [];
        const gainNodes = [];
        // @ts-expect-error ignore
        const channels = wavesurfer.instance.decodedData.numberOfChannels;
        if (channels > 1) {
          const channelSplitterNode = context.createChannelSplitter(channels);
          const channelMergerNode = context.createChannelMerger(channels);
          splitFilters.push(channelSplitterNode);
          for (let idx = 0; idx < channels; idx++) {
            const gainNode = context.createGain();
            channelSplitterNode.connect(gainNode, idx);
            gainNode.gain.value = 1;
            gainNode.connect(channelMergerNode, 0, idx);
            splitFilters.push(gainNode);
            gainNodes.push(gainNode);
          }
          setChannelGains(gainNodes);
          splitFilters.push(channelMergerNode);
        }

        const equalizer = [..._filters, ...splitFilters].reduce(
          (prev, curr) => {
            prev.connect(curr);
            return curr;
          },
          mediaModel,
        );
        equalizer.connect(context.destination);
        setFilters(_filters);
      }
    }
  }, [wavesurfer]);

  useEffect(() => {
    if (wavesurfer) {
      wavesurfer.instance.on("ready", createFilters as AnyObject);
    }
  }, [wavesurfer, createFilters]);

  useLayoutEffect(() => {
    document.addEventListener(
      "mousedown",
      () => {
        void contextRef.current?.resume();
      },
      { capture: true },
    );
    document.addEventListener(
      "keydown",
      () => {
        void contextRef.current?.resume();
      },
      { capture: true },
    );
  }, []);

  const updateFilters = useCallback(
    (index: number, value: number) => {
      const f = [...filters];
      f[index].gain.value = ~~value;
      setFilters([...f]);
    },
    [filters],
  );

  const reset = useCallback(() => {
    setFilters(
      filters.map((f: AnyObject) => {
        f.gain.value = 0;
        return f;
      }),
    );
  }, [filters]);

  const resetFrequency = useCallback(
    (fq: "speech" | "back") => {
      const isSpeech = fq === "speech";
      setFilters(
        filters.map((f: AnyObject) => {
          if (f.frequency.value === EQ_FREQUENCY[0]) {
            f.gain.value = isSpeech ? -40 : 0;
          }
          if (f.frequency.value === EQ_FREQUENCY[1]) {
            f.gain.value = isSpeech ? -30 : 10;
          }
          if (f.frequency.value === EQ_FREQUENCY[2]) {
            f.gain.value = isSpeech ? -20 : 30;
          }
          if (f.frequency.value === EQ_FREQUENCY[3]) {
            f.gain.value = isSpeech ? 0 : 10;
          }
          if (f.frequency.value === EQ_FREQUENCY[4]) {
            f.gain.value = isSpeech ? 20 : -20;
          }
          if (f.frequency.value === EQ_FREQUENCY[5]) {
            f.gain.value = isSpeech ? 20 : -40;
          }
          if (f.frequency.value === EQ_FREQUENCY[6]) {
            f.gain.value = isSpeech ? 20 : -40;
          }
          if (f.frequency.value === EQ_FREQUENCY[7]) {
            f.gain.value = isSpeech ? 20 : -20;
          }
          if (f.frequency.value === EQ_FREQUENCY[8]) {
            f.gain.value = isSpeech ? 0 : 10;
          }
          if (f.frequency.value === EQ_FREQUENCY[9]) {
            f.gain.value = isSpeech ? -20 : 30;
          }
          if (f.frequency.value === EQ_FREQUENCY[10]) {
            f.gain.value = isSpeech ? -30 : 10;
          }
          if (f.frequency.value === EQ_FREQUENCY[11]) {
            f.gain.value = isSpeech ? -40 : 0;
          }
          return f;
        }),
      );
    },
    [filters],
  );

  const toggleChannel = useCallback(
    (channel: number, value: number) => {
      if (channelGains != null) {
        const filter = channelGains[channel];
        filter.gain.value = value / 100;
        setChannelGains([...channelGains]);
      }
    },
    [channelGains],
  );

  return state.showEqs ? (
    <div className="flex flex-row h-[192px] justify-center overflow-x-auto">
      {channelGains != null && (
        <Fragment>
          {channelGains.map((gainNode, idx) => (
            <EqSlider
              forChannel
              index={idx}
              key={idx}
              label={
                <Icon
                  size="1.25rem"
                  onClick={() =>
                    toggleChannel(idx, gainNode.gain.value > 0 ? 0 : 100)
                  }
                  icon={CoreIcons.mediaChannel}
                  color={wavesurfer?.instance.options.splitChannels?.[
                    idx
                  ]?.waveColor?.toString()}
                />
              }
              value={gainNode.gain.value * 100}
              onChange={toggleChannel}
              color={wavesurfer?.instance.options.splitChannels?.[
                idx
              ]?.waveColor?.toString()}
            />
          ))}

          <Divider vertical />
        </Fragment>
      )}
      {filters.map((filter: AnyObject, index: number) => (
        <EqSlider
          key={index}
          index={index}
          label={filter.name}
          value={filter.gain.value}
          onChange={updateFilters}
        />
      ))}
      <Divider vertical />
      <div style={{ width: 196 }} className="self-center">
        <Text className="text-muted text-sm text-center">Presets</Text>
        <Button fullWidth onClick={() => resetFrequency("speech")}>
          Speech
        </Button>
        <Button fullWidth onClick={() => resetFrequency("back")}>
          Background Noise
        </Button>
        <Button fullWidth onClick={reset} color="danger">
          Reset
        </Button>
      </div>
    </div>
  ) : null;
});
Equalizers.displayName = "Audio.Equalizers";
