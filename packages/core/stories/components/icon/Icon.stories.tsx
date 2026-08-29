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

import { Icon } from "@/core/src";
import type { Meta, StoryObj } from "@storybook/react";
import { Fragment } from "react/jsx-runtime";

const meta: Meta = {
  component: Icon,
  tags: ["autodocs"],
  title: "@core/components/Icon",
  parameters: {
    layout: "centered",
    jest: ["core/tests/components/Icon.test.tsx"],
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
type IconStory = StoryObj<typeof Icon>;

export const _Icon: IconStory = {
  render: (args) => {
    return (
      <Fragment>
        <Icon {...args} icon="icon-[mdi--react]" />
        <Icon
          {...args}
          icon="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"
        />
        <Icon {...args} icon="RD" rounded />
      </Fragment>
    );
  },
  args: {
    size: "2rem",
    className: "bg-tint-50 p-1",
  },
};

export const Colors: IconStory = {
  render: (args) => {
    return (
      <Fragment>
        <Icon {...args} icon="icon-[mdi--react]" color="rgb(236,18,99)" />
        <Icon {...args} icon="icon-[mdi--react]" color="pumpkin-600" />
        <Icon {...args} icon="icon-[mdi--react]" color="#ffcc00" />
        <Icon {...args} icon="icon-[mdi--react]" color="jade-600" />
        <Icon {...args} icon="icon-[mdi--react]" color="denim-600" />
        <Icon {...args} icon="icon-[mdi--react]" color="iris-600" />
        <Icon {...args} icon="icon-[mdi--react]" color="lilac-600" />
      </Fragment>
    );
  },
  args: {
    size: "2rem",
  },
};

export const Sizes: IconStory = {
  render: (args) => {
    return (
      <Fragment>
        <Icon {...args} icon="icon-[mdi--react]" className="text-xs" />
        <Icon {...args} icon="icon-[mdi--react]" className="text-sm" />
        <Icon {...args} icon="icon-[mdi--react]" className="text-md" />
        <Icon {...args} icon="icon-[mdi--react]" className="text-lg" />
        <Icon {...args} icon="icon-[mdi--react]" size="2rem" />
        <Icon {...args} icon="icon-[mdi--react]" size="3rem" />
        <Icon {...args} icon="icon-[mdi--react]" size="4rem" />
      </Fragment>
    );
  },
  args: {},
};

export const Animations: IconStory = {
  render: (args) => {
    return (
      <Fragment>
        <Icon {...args} icon="icon-[mdi--react]" animate="spin" />
        <Icon {...args} icon="icon-[mdi--react]" animate="fade" />
        <Icon {...args} icon="icon-[mdi--react]" animate="pulse" />
        <Icon {...args} icon="icon-[mdi--react]" animate="bounce" />
      </Fragment>
    );
  },
  args: { size: "2rem" },
};

export const Tester: IconStory = {
  tags: ["!autodocs"],
  render: (args) => <Icon {...args} />,
  args: {},
};
