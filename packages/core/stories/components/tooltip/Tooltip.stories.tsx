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

import { Avatar, Tooltip } from "@/core/src";
import type { Meta, StoryObj } from "@storybook/react";
import { Fragment } from "react/jsx-runtime";

const meta: Meta = {
  component: Tooltip,
  tags: ["autodocs"],
  title: "@core/components/Tooltip",
  parameters: {
    layout: "centered",
    jest: ["core/tests/components/Tooltip.test.tsx"],
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
type TooltipStory = StoryObj<typeof Tooltip>;

export const _Tooltip: TooltipStory = {
  render: (args) => {
    return (
      <Fragment>
        <Tooltip {...args}>
          <div className="outline p-2">Hover Me!</div>
        </Tooltip>
        <Tooltip {...args} copyContent>
          <div className="outline p-2">Copyable tooltip!</div>
        </Tooltip>
      </Fragment>
    );
  },
  args: {
    content: "Tooltip Content",
  },
};

export const CustomContent: TooltipStory = {
  render: (args) => {
    return (
      <Fragment>
        <Tooltip {...args}>
          <div className="outline p-2">Hover Me!</div>
        </Tooltip>
        <Tooltip {...args} copyContent="Title">
          <div className="outline p-2">Copyable tooltip!</div>
        </Tooltip>
      </Fragment>
    );
  },
  args: {
    content: (
      <div className="flex gap-2">
        <Avatar name="John Doe" size="3rem" />
        <div className="flex-1">
          <h5>Title</h5>
          <span>Tooltip description goes here.</span>
        </div>
      </div>
    ),
  },
};
