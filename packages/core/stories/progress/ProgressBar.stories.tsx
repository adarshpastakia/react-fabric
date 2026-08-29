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

import { ProgressBar, ProgressCircle } from "@/core/src";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  component: ProgressBar,
  subcomponents: { ProgressCircle },
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
type ProgressBarStory = StoryObj<typeof ProgressBar>;

export const _ProgressBar: ProgressBarStory = {
  render: (args) => <ProgressBar {...args} />,
  args: {
    value: 0.5,
    size: "md",
    color: "primary-500",
    label: "Progress",
  },
};

export const TesterBar: ProgressBarStory = {
  tags: ["!autodocs"],
  render: (args) => <ProgressBar {...args} />,
  args: {
    value: 0.5,
    size: "md",
    color: "primary-500",
    label: "Progress",
  },
};

export const BarSizes: ProgressBarStory = {
  render: () => (
    <div className="space-y-3">
      <div className="flex items-center gap-4">
        <span className="w-12 text-right text-sm">xxs</span>
        <div className="flex-1">
          <ProgressBar value={0.75} size="xxs" color="primary-500" />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <span className="w-12 text-right text-sm">xs</span>
        <div className="flex-1">
          <ProgressBar value={0.75} size="xs" color="primary-500" />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <span className="w-12 text-right text-sm">sm</span>
        <div className="flex-1">
          <ProgressBar value={0.75} size="sm" color="primary-500" />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <span className="w-12 text-right text-sm">md</span>
        <div className="flex-1">
          <ProgressBar value={0.75} size="md" color="primary-500" />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <span className="w-12 text-right text-sm">lg</span>
        <div className="flex-1">
          <ProgressBar value={0.75} size="lg" color="primary-500" />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <span className="w-12 text-right text-sm">xl</span>
        <div className="flex-1">
          <ProgressBar value={0.75} size="xl" color="primary-500" />
        </div>
      </div>
    </div>
  ),
};

export const BarColors: ProgressBarStory = {
  render: () => {
    const colors = ["primary", "secondary", "success", "warning", "danger", "info"] as const;
    return (
      <div className="space-y-3">
        {colors.map((color) => (
          <div key={color} className="flex items-center gap-4">
            <span className="w-24 text-right text-sm">{color}</span>
            <div className="flex-1">
              <ProgressBar value={0.75} size="md" color={color} />
            </div>
          </div>
        ))}
      </div>
    );
  },
};

export const BarAnimated: ProgressBarStory = {
  render: () => (
    <div className="space-y-3">
      <div className="flex items-center gap-4">
        <span className="w-16 text-right text-sm">On</span>
        <div className="flex-1">
          <ProgressBar value={0.75} size="md" color="primary-500" animate />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <span className="w-16 text-right text-sm">Off</span>
        <div className="flex-1">
          <ProgressBar value={0.75} size="md" color="primary-500" />
        </div>
      </div>
    </div>
  ),
};

export const BarLabels: ProgressBarStory = {
  render: () => (
    <div className="space-y-3">
      <ProgressBar value={0.75} size="md" color="primary-500" label="Loading" />
      <ProgressBar value={0.5} size="lg" color="success-500" label="In Progress: 50%" />
      <ProgressBar value={1} size="xl" color="info-500" label="Complete" />
      <ProgressBar value={0.75} size="md" color="primary-500" />
      <ProgressBar value={0.5} size="lg" color="success-500" label="" />
    </div>
  ),
};
