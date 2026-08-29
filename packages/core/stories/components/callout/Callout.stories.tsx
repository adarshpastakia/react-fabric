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

import { Callout } from "@/core/src";
import type { Meta, StoryObj } from "@storybook/react";
import { Fragment } from "react/jsx-runtime";
import { fn } from "storybook/test";

const meta: Meta = {
  component: Callout,
  tags: ["autodocs"],
  title: "@core/components/Callout",
  parameters: {
    layout: "centered",
    jest: ["core/tests/components/Callout.test.tsx"],
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-2xl p-4 flex flex-col gap-2">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type CalloutStory = StoryObj<typeof Callout>;

export const _Callout: CalloutStory = {
  render: (args) => {
    return (
      <Fragment>
        <Callout {...args}>This is a basic callout with some content.</Callout>
        <Callout {...args} legend="Important" title="With Legend and Title" icon="icon-[mdi--info]">
          This callout includes a legend, title, and icon.
        </Callout>
        <Callout {...args} icon="icon-[mdi--alert]">
          This callout has an icon but no legend or title.
        </Callout>
        <Callout {...args} onClose={fn()}>
          This callout has a close button.
        </Callout>
      </Fragment>
    );
  },
  args: {},
};

export const Colors: CalloutStory = {
  render: (args) => {
    return (
      <Fragment>
        <Callout {...args} color="default">
          Default
        </Callout>
        <Callout {...args} color="primary">
          Primary
        </Callout>
        <Callout {...args} color="secondary">
          Secondary
        </Callout>
        <Callout {...args} color="info">
          Info
        </Callout>
        <Callout {...args} color="success">
          Success
        </Callout>
        <Callout {...args} color="warning">
          Warning
        </Callout>
        <Callout {...args} color="danger">
          Danger
        </Callout>
      </Fragment>
    );
  },
  args: {},
};

export const Borders: CalloutStory = {
  render: (args) => {
    return (
      <Fragment>
        <Callout {...args} border="solid">
          Solid Border
        </Callout>
        <Callout {...args} border="dotted">
          Dotted Border
        </Callout>
        <Callout {...args} border="dashed">
          Dashed Border
        </Callout>
      </Fragment>
    );
  },
  args: {},
};

export const Tester: CalloutStory = {
  tags: ["!autodocs"],
  render: (args) => <Callout {...args} />,
  args: {},
};
