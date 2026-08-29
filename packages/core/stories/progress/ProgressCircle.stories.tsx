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

import { ProgressCircle } from "@/core/src";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  component: ProgressCircle,
  title: "@core/components/Progress",
  parameters: {
    layout: "centered",
    jest: ["core/tests/progress/Progress.test.tsx"],
  },
  decorators: [
    (Story) => (
      <div className="max-w-full w-2xl p-4">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type ProgressCircleStory = StoryObj<typeof ProgressCircle>;

export const _ProgressCircle: ProgressCircleStory = {
  render: (args) => <ProgressCircle {...args} />,
  args: {
    value: 0.5,
    size: "md",
    color: "primary-500",
  },
};

export const TesterCircle: ProgressCircleStory = {
  tags: ["!autodocs"],
  render: (args) => <ProgressCircle {...args} />,
  args: {
    value: 0.5,
    size: "md",
    color: "primary-500",
  },
};

export const CircleSizes: ProgressCircleStory = {
  render: () => (
    <div className="flex items-center gap-6">
      <div className="flex flex-col items-center gap-2">
        <ProgressCircle value={0.75} size="sm" color="primary-500" />
        <span className="text-sm">sm</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <ProgressCircle value={0.75} size="md" color="primary-500" />
        <span className="text-sm">md</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <ProgressCircle value={0.75} size="lg" color="primary-500" />
        <span className="text-sm">lg</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <ProgressCircle value={0.75} size="xl" color="primary-500" />
        <span className="text-sm">xl</span>
      </div>
    </div>
  ),
};

export const CircleColors: ProgressCircleStory = {
  render: () => {
    const colors = ["primary", "secondary", "success", "warning", "danger", "info"] as const;
    return (
      <div className="flex items-center gap-6">
        {colors.map((color) => (
          <div key={color} className="flex flex-col items-center gap-2">
            <ProgressCircle value={0.75} size="md" color={color} />
            <span className="text-sm">{color}</span>
          </div>
        ))}
      </div>
    );
  },
};
