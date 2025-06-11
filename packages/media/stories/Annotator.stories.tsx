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

import { useNotificationService, Viewport } from "@react-fabric/core";
import { isString } from "@react-fabric/utilities";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "storybook/test";
import { Annotator } from "../src";
import form from "/assets/samples/sample_form.png";

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
    const { showAlert } = useNotificationService();
    return (
      <div className="min-h-[600px]">
        <Viewport>
          <Annotator
            {...args}
            onAdd={() =>
              showAlert({ type: "prompt", message: "Annotation label" }).then(
                (b) => (isString(b) ? b : undefined),
              )
            }
          />
        </Viewport>
      </div>
    );
  },
  args: {
    src: form,
    onChange: fn(),
    annotations: [
      {
        box: "30,30,240,48",
        label: "Tester",
      },
      {
        box: "30,90,240,48",
        label: "Tester",
        color: "#29a383",
      },
    ],
  },
};
