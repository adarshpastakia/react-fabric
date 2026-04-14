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

import { Aside, Callout, Content, Viewport } from "@react-fabric/core";
import { Radio, RadioGroup } from "@react-fabric/form";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Annotator, AnnotatorFieldType } from "../src";
import form from "/assets/samples/sample_form.png";
import invoice1 from "/assets/samples/sample_invoice1.png";
import invoice2 from "/assets/samples/sample_invoice2.webp";
import invoice3 from "/assets/samples/sample_invoice3.jpeg";

const meta: Meta = {
  component: Annotator,
  title: "@media/Annotator",
  parameters: {
    layout: "fullscreen",
    controls: { exclude: "children" },
  },
};

export default meta;
type Story = StoryObj<typeof Annotator>;

export const _Annotator: Story = {
  render: (args) => {
    const [src, setSrc] = useState(form);

    return (
      <div className="min-h-[600px]">
        <Viewport>
          <Annotator
            {...args}
            src={src}
            annotations={[
              {
                x: 50,
                y: 50,
                width: 320,
                height: 40,
                id: "1",
                type: AnnotatorFieldType.Text,
              },
              {
                x: 50,
                y: 120,
                width: 320,
                height: 40,
                id: "2",
                type: AnnotatorFieldType.Number,
              },
              {
                x: 50,
                y: 180,
                width: 320,
                height: 40,
                id: "3",
                type: AnnotatorFieldType.Float,
              },
            ]}
          />
          <Aside align="end">
            <Content>
              <Callout legend="Scan samples">
                <p className="break-all">{src}</p>
                <RadioGroup onChange={setSrc} name="src" value={src} vertical>
                  <Radio value={form} label="Sample Form" />
                  <Radio value={invoice1} label="Sample Invoice 1" />
                  <Radio value={invoice2} label="Sample Invoice 2" />
                  <Radio value={invoice3} label="Sample Invoice 3" />
                </RadioGroup>
              </Callout>
            </Content>
          </Aside>
        </Viewport>
      </div>
    );
  },
  args: {
    // onChange: fn(),
  },
};
