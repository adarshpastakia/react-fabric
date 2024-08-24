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
import { action } from "@storybook/addon-actions";
import { Fragment } from "react/jsx-runtime";
import { Badge, Chip } from "../../../src";
import { fn } from "@storybook/test";

const meta: Meta = {
  component: Chip,
  title: "@core/components/Chip",
  parameters: {
    layout: "centered",
    controls: { exclude: /^(on.*|children|as)/ },
    jest: ["core/tests/Chip.test.tsx"],
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
  render: (args) => {
    return (
      <Fragment>
        <Chip {...args} icon="mdi mdi-react" />
        <Chip {...args}>Tag Label</Chip>
        <Chip {...args} icon="mdi mdi-react">
          Tag Label
        </Chip>
        <Badge value={99} placement="top-end">
          <Chip {...args}>Tag Label</Chip>
        </Badge>
      </Fragment>
    );
  },
  args: {},
};

export const Colors: ChipStory = {
  render: (args) => {
    return (
      <Fragment>
        <Chip {...args} color="primary" />
        <Chip {...args} color="accent" />
        <Chip {...args} color="info" />
        <Chip {...args} color="danger" />
        <Chip {...args} color="success" />
        <Chip {...args} color="warning" />
        <Chip {...args} color="#9c88ff" />
      </Fragment>
    );
  },
  args: {
    children: "Tag Label",
    icon: "mdi mdi-react",
  },
};

export const Sizes: ChipStory = {
  render: (args) => {
    return (
      <Fragment>
        <Chip {...args} size="xs" />
        <Chip {...args} size="sm" />
        <Chip {...args} />
        <Chip {...args} size="md" />
        <Chip {...args} size="lg" />
        <Chip {...args} size="xl" />
      </Fragment>
    );
  },
  args: {
    children: "Tag Label",
    icon: "mdi mdi-react",
  },
};

export const Styles: ChipStory = {
  render: (args) => {
    return (
      <Fragment>
        <Chip {...args} variant={undefined} />
        <Chip {...args} variant="outline" />
        <Chip {...args} variant="solid" />
      </Fragment>
    );
  },
  args: {
    children: "Tag Label",
    icon: "mdi mdi-react",
  },
};

export const States: ChipStory = {
  render: (args) => {
    return (
      <Fragment>
        <Chip {...args} disabled onRemove={undefined}>
          Disabled
        </Chip>
        <Chip {...args} onClick={undefined} onRemove={undefined}>
          Normal
        </Chip>
        <Chip {...args} onRemove={undefined}>
          Clickable
        </Chip>
        <Chip {...args} onClick={undefined}>
          Removable
        </Chip>
      </Fragment>
    );
  },
  args: {
    children: "Click Me!",
    icon: "mdi mdi-react",
    onClick: fn(),
    onRemove: fn(),
  },
};
