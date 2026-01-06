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

import { faker } from "@faker-js/faker";
import { Button, Viewport } from "@react-fabric/core";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { fn } from "storybook/test";
import { ImageViewer } from "../src";
import { ImageAnnotation } from "../src/types";
import src from "/assets/samples/sample_large.jpg";
import { Checkbox } from "@react-fabric/form";

const meta: Meta = {
  component: ImageViewer,
  title: "@media/ImageViewer",
  parameters: {
    layout: "fullscreen",
    controls: { exclude: "children" },
  },
};

export default meta;
type Story = StoryObj<typeof ImageViewer>;

export const _ImageViewer: Story = {
  render: (args) => {
    return (
      <div className="min-h-[600px]">
        <Viewport>
          <ImageViewer {...args} />
        </Viewport>
      </div>
    );
  },
  args: {
    src: "badimg",
    fallback: faker.image.urlPicsumPhotos(),
    overlay: faker.image.urlPicsumPhotos(),
    onCrop: fn(),
    nsfwMessage({ hide, remove }) {
      const [checked, setChecked] = useState(false);
      return (
        <div className="p-4 bg-base rounded-capped shadow-xs">
          <h3 className="text-lg mb-2">NSFW Content</h3>
          <p className="mb-4">
            This image has been marked as not safe for work.
          </p>
          <p>
            <Checkbox label="I understand the risks" onChange={setChecked} />
          </p>
          <Button
            className="btn btn-primary"
            onClick={() => hide()}
            disabled={!checked}
          >
            Glimpse Image
          </Button>
          <Button
            className="btn btn-primary"
            onClick={() => remove()}
            disabled={!checked}
          >
            View Image
          </Button>
        </div>
      );
    },
  },
};

export const ImagePlayground: Story = {
  render: (args) => {
    const [annotations, setAnnotations] = useState<ImageAnnotation[]>([
      {
        box: "878.0821384644843,194.20218353944534,311.53266942786024,238.70685060056823",
        fill: "#0F5F9051",
        stroke: 2,
        labelTop: "Image 1",
        labelBottom: "80%",
        colorBottom: "#3D8C6BFF",
      },
      {
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
          <ImageViewer
            {...args}
            annotations={annotations}
            onExport={setExp}
            onCrop={(box, base64) => setExp(base64)}
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
    src,
  },
};
