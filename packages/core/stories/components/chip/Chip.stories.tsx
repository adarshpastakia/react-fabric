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

import { Chip } from "@/core/src";
import type { Meta, StoryObj } from "@storybook/react";
import { Fragment } from "react/jsx-runtime";
import { fn } from "storybook/test";

const meta: Meta = {
  component: Chip,
  tags: ["autodocs"],
  title: "@core/components/Chip",
  parameters: {
    layout: "centered",
    jest: ["core/tests/components/Chip.test.tsx"],
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
type ChipStory = StoryObj<typeof Chip>;

export const _Chip: ChipStory = {
  render: ({ onClick, onRemove, ...args }) => {
    return (
      <Fragment>
        <Chip {...args}>Label</Chip>
        <Chip {...args} icon="icon-[mdi--react]">
          Label with icon
        </Chip>
        <Chip {...args} icon="icon-[mdi--react]" />
        <Chip {...args} icon="icon-[mdi--react]" onClick={onClick}>
          Clickable
        </Chip>
        <Chip {...args} icon="icon-[mdi--react]" onRemove={onRemove}>
          Remove Me
        </Chip>
      </Fragment>
    );
  },
  args: {
    onClick: fn(),
    onRemove: fn(),
  },
};

export const Variants: ChipStory = {
  render: (args) => {
    return (
      <Fragment>
        <Chip {...args}>Default</Chip>
        <Chip {...args} variant="outlined">
          Outlined
        </Chip>
        <Chip {...args} color="primary" variant="soft">
          Soft
        </Chip>
        <Chip {...args} color="primary" variant="solid">
          Solid
        </Chip>
      </Fragment>
    );
  },
  args: {},
};

export const Colors: ChipStory = {
  render: (args) => {
    return (
      <Fragment>
        <Chip {...args} color="primary">
          Primary
        </Chip>
        <Chip {...args} color="secondary">
          Secondary
        </Chip>
        <Chip {...args} color="scarlet">
          Scarlet
        </Chip>
        <Chip {...args} color="pumpkin">
          Pumpkin
        </Chip>
        <Chip {...args} color="#148B69">
          #148B69
        </Chip>
        <Chip {...args} color="#A7207F">
          #A7207F
        </Chip>
      </Fragment>
    );
  },
  args: {},
};

export const SegmentValue: ChipStory = {
  render: (args) => {
    return (
      <Fragment>
        <Chip {...args} color="primary">
          Primary
        </Chip>
        <Chip {...args} color="secondary">
          Secondary
        </Chip>
        <Chip {...args} color="info">
          Info
        </Chip>
        <Chip {...args} color="danger">
          Danger
        </Chip>
        <Chip {...args} color="success">
          Success
        </Chip>
        <Chip {...args} color="warning">
          Warning
        </Chip>
      </Fragment>
    );
  },
  args: {
    value: 99,
  },
};

export const Tester: ChipStory = {
  tags: ["!autodocs"],
  render: (args) => <Chip {...args} />,
  args: {},
};
