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

import { Viewport } from "@react-fabric/core";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { fn } from "storybook/test";
import { VideoPlayer } from "../src";
import { VideoAnnotation } from "../src/types";
import src from "/assets/samples/sample.mp4";
import bunny from "/assets/samples/large_video.mp4";

const meta: Meta = {
  component: VideoPlayer,
  title: "@media/VideoPlayer",
  parameters: {
    layout: "fullscreen",
    controls: { exclude: "children" },
  },
};

export default meta;
type Story = StoryObj<typeof VideoPlayer>;

const markers: [number, number][] = new Array(300)
  .fill([])
  .map((_, i) => [Math.random() * 30.5, Math.random()]);

const vtt = `WEBVTT

00:11.000 --> 00:13.000
<v Roger Bingham>We are in New York City

00:13.000 --> 00:16.000
<v Roger Bingham>We’re actually at the Lucern Hotel, just down the street

00:16.000 --> 00:18.000
<v Roger Bingham>from the American Museum of Natural History

00:18.000 --> 00:20.000
<v Roger Bingham>And with me is Neil deGrasse Tyson

00:20.000 --> 00:22.000
<v Roger Bingham>Astrophysicist, Director of the Hayden Planetarium

00:22.000 --> 00:24.000
<v Roger Bingham>at the AMNH.

00:24.000 --> 00:26.000
<v Roger Bingham>Thank you for walking down here.

00:27.000 --> 00:30.000
<v Roger Bingham>And I want to do a follow-up on the last conversation we did.
`;

export const _VideoPlayer: Story = {
  render: (args) => {
    const [annotations, setAnnotations] = useState<AnyObject>([
      [2.49, "Testing"],
      [18.24, "Testing"],
    ]);

    return (
      <div className="min-h-[600px]">
        <Viewport>
          <VideoPlayer
            {...args}
            markers={markers}
            vttText={vtt}
            comments={annotations}
            onCommentChange={setAnnotations}
          />
        </Viewport>
      </div>
    );
  },
  args: {
    src,
    onCut: fn(),
  },
};

export const VideoPlayground: Story = {
  render: (args) => {
    const [comments, setComments] = useState<AnyObject>([
      [2.49, "Testing"],
      [18.24, "Testing"],
    ]);
    const [annotations, setAnnotations] = useState<VideoAnnotation[]>([
      {
        start: 5,
        end: 35,
        box: "878.0821384644843,194.20218353944534,311.53266942786024,238.70685060056823",
        fill: "#0F5F9051",
        stroke: 2,
        labelTop: "Image 1",
        labelBottom: "80%",
        colorBottom: "#3D8C6BFF",
      },
      {
        start: 5,
        end: 35,
        box: "502.5,330,294,195",
        fill: "#F50F9051",
        stroke: 2,
        labelTop: "Image 2",
        labelBottom: "50%",
        colorBottom: "#8B8725FF",
      },
    ]);

    const [exp, setExp] = useState<string>();

    return (
      <div className="min-h-[600px]">
        <Viewport>
          <VideoPlayer
            {...args}
            comments={comments}
            onCommentChange={setComments}
            annotations={annotations}
            onCrop={(ts, box, base64) => setExp(base64)}
            onExport={(ts, base64) => setExp(base64)}
          />
          {exp && (
            <div
              onClick={() => setExp("")}
              className="absolute overflow-hidden inset-0 bg-black/90 z-10 p-8"
            >
              <img
                src={exp}
                className="size-full object-scale-down border-4 bg-black"
              />
            </div>
          )}
        </Viewport>
      </div>
    );
  },
  args: {
    src: bunny,
  },
};
