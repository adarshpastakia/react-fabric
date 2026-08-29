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

import { Meter } from "@/core/src";
import type { Meta, StoryObj } from "@storybook/react";
import { Fragment } from "react/jsx-runtime";

const meta: Meta = {
  component: Meter,
  tags: ["autodocs"],
  title: "@core/components/Meter",
  parameters: {
    layout: "centered",
    jest: ["core/tests/components/Meter.test.tsx"],
  },
  decorators: [
    (Story) => (
      <div className="w-2xs max-w-full p-4">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type MeterStory = StoryObj<typeof Meter>;

export const _Meter: MeterStory = {
  render: (args) => {
    return <Meter {...args} />;
  },
  args: {
    value: 60,
  },
};

export const AllStates: MeterStory = {
  render: () => {
    return (
      <Fragment>
        <div className="mb-2">
          <Meter value={0} />
        </div>
        <div className="mb-2">
          <Meter value={16.67} />
        </div>
        <div className="mb-2">
          <Meter value={33.34} />
        </div>
        <div className="mb-2">
          <Meter value={50} className="text-2xl" />
        </div>
        <div className="mb-2">
          <Meter value={66.68} />
        </div>
        <div className="mb-2">
          <Meter value={83.35} />
        </div>
        <div className="mb-2">
          <Meter value={100} />
        </div>
      </Fragment>
    );
  },
};

export const Colors: MeterStory = {
  render: () => {
    return (
      <Fragment>
        <div className="mb-2">
          <Meter value={95} color="jade-600" />
        </div>
        <div className="mb-2">
          <Meter value={95} color="danger-600" />
        </div>
        <div className="mb-2">
          <Meter value={95} color="warning-600" />
        </div>
        <div className="mb-2">
          <Meter value={95} color="primary-600" />
        </div>
      </Fragment>
    );
  },
};

export const WithoutLabel: MeterStory = {
  render: (args) => {
    return <Meter {...args} hideLabel />;
  },
  args: {
    value: 75,
  },
};

export const EdgeCases: MeterStory = {
  render: () => {
    return (
      <Fragment>
        <div className="mb-2">
          <Meter value={-10} />
        </div>
        <div className="mb-2">
          <Meter value={150} />
        </div>
      </Fragment>
    );
  },
};

export const Tester: MeterStory = {
  tags: ["!autodocs"],
  render: (args) => <Meter {...args} />,
  args: {
    value: 50,
  },
};
