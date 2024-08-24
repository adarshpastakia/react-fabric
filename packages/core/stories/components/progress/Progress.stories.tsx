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
import { useEffect, useState } from "react";
import { Fragment } from "react/jsx-runtime";
import { ProgressBar, ProgressCircle } from "../../../src";

const meta: Meta = {
  component: ProgressBar,
  subcomponents: { ProgressCircle } as AnyObject,
  title: "@core/components/Progress",
  parameters: {
    layout: "centered",
    controls: { exclude: /^(on.*|children|as)/ },
    jest: ["core/tests/ProgressBar.test.tsx"],
  },
  decorators: [
    (Story) => (
      <div className="max-w-2xl w-screen p-4">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type ProgressBarStory = StoryObj<typeof ProgressBar>;

export const _ProgressBar: ProgressBarStory = {
  render: (args) => {
    const [value, setValue] = useState(10);
    useEffect(() => {
      setTimeout(() => {
        setValue(value > 90 ? 10 : value + 2);
      }, 100);
    }, [value]);
    return (
      <Fragment>
        <ProgressBar {...args} value={value} />
      </Fragment>
    );
  },
  args: {},
};

export const Colors: ProgressBarStory = {
  render: (args) => {
    const [value, setValue] = useState(10);
    useEffect(() => {
      setTimeout(() => {
        setValue(value > 90 ? 10 : value + 2);
      }, 100);
    }, [value]);
    return (
      <Fragment>
        <div className="flex flex-col gap-2">
          <ProgressBar {...args} color="primary" value={value} />
          <ProgressBar {...args} size="md" color="accent" value={value} />
          <ProgressBar {...args} size="lg" color="danger" value={value} />
          <ProgressBar {...args} size="xl" color="warning" value={value} />

          <div className="flex gap-2 items-center justify-center py-4">
            <ProgressCircle {...args} color="primary" value={value} />
            <ProgressCircle {...args} size="md" color="accent" value={value} />
            <ProgressCircle {...args} size="lg" color="danger" value={value} />
            <ProgressCircle {...args} size="xl" color="warning" value={value} />
          </div>
        </div>
      </Fragment>
    );
  },
  args: {},
};
