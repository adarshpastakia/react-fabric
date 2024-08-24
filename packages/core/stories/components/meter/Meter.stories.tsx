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
import { Fragment } from "react/jsx-runtime";
import { Meter } from "../../../src";

const meta: Meta = {
  component: Meter,
  title: "@core/components/Meter",
  parameters: {
    layout: "centered",
    controls: { exclude: /^(on.*|children|as)/ },
    jest: ["core/tests/Meter.test.tsx"],
  },
  decorators: [
    (Story) => (
      <div className="w-screen max-w-sm p-4 flex flex-col gap-2">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type MeterStory = StoryObj<typeof Meter>;

export const _Meter: MeterStory = {
  render: (args) => {
    return (
      <Fragment>
        <Meter {...args} />
      </Fragment>
    );
  },
  args: {
    value: 94.2,
  },
};

export const Colors: MeterStory = {
  render: (args) => {
    return (
      <Fragment>
        <Meter {...args} className="text-primary-600" />
        <Meter {...args} className="text-accent-600" />
        <Meter {...args} className="text-danger-600" />
      </Fragment>
    );
  },
  args: {
    value: 94.2,
  },
};

export const Sizes: MeterStory = {
  render: (args) => {
    return (
      <Fragment>
        <Meter {...args} className="text-xs" />
        <Meter {...args} className="text-md" />
        <Meter {...args} className="text-2xl" />
      </Fragment>
    );
  },
  args: {
    value: 94.2,
  },
};
