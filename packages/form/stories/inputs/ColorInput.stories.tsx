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

import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { ColorInput } from "../../src";

const meta: Meta = {
  component: ColorInput,
  title: "@form/Inputs",
  parameters: {
    layout: "centered",
    jest: ["form/tests/ColorInput.test.tsx"],
  },
  decorators: [
    (Story) => (
      <div className="max-w-[6rem] w-screen">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type ColorInputStory = StoryObj<typeof ColorInput>;

export const _ColorInput: ColorInputStory = {
  render: (args) => {
    return <ColorInput {...args} />;
  },
  args: {
    label: "Color input",
    placeholder: "Color input...",
    allowClear: true,
    showPicker: true,
    onChange: fn(),
    onEnterPressed: fn(),
  },
};
