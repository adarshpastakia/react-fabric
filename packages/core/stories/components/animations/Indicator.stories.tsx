/**
 * React Fabric
 * @version 1.0.0
 * @license MIT
 * @copyright 2024 Adarsh Pastakia
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import { AnimationIndicator } from "@/core/src";
import type { Meta, StoryObj } from "@storybook/react";
import { Fragment } from "react/jsx-runtime";

const meta: Meta = {
  component: AnimationIndicator,
  title: "@core/components/Animations",
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="flex gap-2 items-center p-4">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type IndicatorStory = StoryObj<typeof AnimationIndicator>;
export const Indicators: IndicatorStory = {
  render: (args) => {
    return (
      <Fragment>
        <AnimationIndicator className="text-4xl text-info-500" type="info" {...args} />
        <AnimationIndicator className="text-4xl text-success-500" type="check" {...args} />
        <AnimationIndicator className="text-4xl text-danger-500" type="cross" {...args} />
        <AnimationIndicator className="text-4xl text-primary-500" type="question" {...args} />
        <AnimationIndicator className="text-4xl text-warning-500" type="exclaim" {...args} />
      </Fragment>
    );
  },
  args: {},
};
