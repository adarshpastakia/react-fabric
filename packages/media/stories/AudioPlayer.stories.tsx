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

import { Aside, Button, Callout, Content, Section, Tab, TabPanel, Viewport } from "@react-fabric/core";
import { Radio, RadioGroup, Switch } from "@react-fabric/form";
import { compareValues } from "@react-fabric/utilities";
import type { Meta, StoryObj } from "@storybook/react";
import { useRef, useState } from "react";
import { fn } from "storybook/test";
import { AudioPlayer, AudioPlayerRef, AudioRegion } from "../src";
import { audioregion } from "./workaround";
import largeVideo from "/assets/samples/large_video.mp4";
import sampleAudio from "/assets/samples/sample.mp3";
import sample7Audio from "/assets/samples/sample.wav";

const meta: Meta = {
  component: AudioPlayer,
  subcomponents: { AudioRegion: audioregion },
  title: "@media/AudioPlayer",
  parameters: {
    layout: "fullscreen",
    controls: { exclude: "children" },
  },
};

export default meta;
type Story = StoryObj<typeof AudioPlayer>;

export const Playground: Story = {
  render: (args) => {
    const audioRef = useRef<AudioPlayerRef>(null);
    const [src, setSrc] = useState(sampleAudio);
    const [editable, setEditable] = useState(false);

    const [regions, setRegions] = useState<AudioRegion[]>([
      { id: "1", start: 0.2, end: 15.5, color: "#ffcc00", channel: 0 },
      { id: "2", start: 5.2, end: 9.5, color: "#ff00cc", channel: 1 },
      { id: "3", start: 12.2, end: 18.5, color: "#ff00cc", channel: 1 },
    ]);

    return (
      <div className="min-h-150">
        <Viewport>
          <Section className="relative">
            <AudioPlayer
              src={src}
              ref={audioRef}
              autoPlay
              editable={editable}
              showVideo={src === largeVideo}
              regions={regions}
              onRegionsChange={setRegions}
              onTimeChange={args.onTimeChange}
            />
            <Content className="text-sm">
              {regions.sort(compareValues("asc", "start")).map((r) => (
                <Callout key={r.id} legend={`Region ${r.id}`} legendClassName="text-xs text-primary-600">
                  <div className="flex items-center">
                    <p className="flex-1">
                      Start: {r.start.toFixed(2)}s, End: {r.end.toFixed(2)}s, Channel: {r.channel}
                    </p>
                    <Button size="sm" onClick={() => audioRef.current?.playRegion(r.id)}>
                      Play
                    </Button>
                  </div>
                </Callout>
              ))}
            </Content>
          </Section>
          <Aside align="end">
            <TabPanel orientation="end" activeTab="basic">
              <Tab id="basic" icon="icon-[mdi--image]" tooltip="Basic options">
                <Section className="text-sm">
                  <Content>
                    <Callout legend="Audio Source">
                      <p className="break-all">{src}</p>
                      <RadioGroup onChange={setSrc} name="src" value={src} vertical>
                        <Radio value={sampleAudio} label="Sample MP3" />
                        <Radio value={sample7Audio} label="Sample 7.1" />
                        <Radio value={largeVideo} label="Sample Video" />
                        <Radio value={"/assets/samples/sample1.aiff"} label="Unsupported Format" />
                      </RadioGroup>
                    </Callout>
                    <div>
                      <Switch label="Editable Regions" checked={editable} onChange={(e) => setEditable(e)} />
                    </div>
                  </Content>
                </Section>
              </Tab>
            </TabPanel>
          </Aside>
        </Viewport>
      </div>
    );
  },
  args: {
    onTimeChange: fn(),
  },
};
