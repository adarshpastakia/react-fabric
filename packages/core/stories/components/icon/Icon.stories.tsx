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
import { fn } from "@storybook/test";
import { Fragment } from "react/jsx-runtime";
import { Badge, Icon } from "../../../src";

const meta: Meta = {
  component: Icon,
  title: "@core/components/Icon",
  parameters: {
    layout: "centered",
    controls: { exclude: /^(on.*|children|as)/ },
    jest: ["core/tests/Icon.test.tsx"],
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
        <Icon {...args} />
        <Icon {...args} icon="W" />
        <Icon {...args} icon="WW" />
        <Icon {...args} icon="WWW" />
        <Icon {...args} icon="WWWW" />
        <Badge value={99} placement="top-end">
          <Icon {...args} />
        </Badge>
      </Fragment>
    );
  },
  args: {
    size: "2.5rem",
    icon: "mdi mdi-react",
    onClick: fn(),
  },
};

export const Colors: IconStory = {
  render: (args) => {
    return (
      <Fragment>
        <Icon {...args} color="primary" />
        <Icon {...args} color="accent" />
        <Icon {...args} color="info" />
        <Icon {...args} color="danger" />
        <Icon {...args} color="success" />
        <Icon {...args} color="warning" />
        <Icon {...args} color="invert" bg="invert" />
        <Icon {...args} color="#9333ea" />
      </Fragment>
    );
  },
  args: {
    size: "2.5rem",
    icon: "mdi mdi-react",
    onClick: fn(),
  },
};

export const Sizes: IconStory = {
  render: (args) => {
    return (
      <Fragment>
        <Icon {...args} size="xs" />
        <Icon {...args} size="sm" />
        <Icon {...args} />
        <Icon {...args} size="md" />
        <Icon {...args} size="lg" />
        <Icon {...args} size="xl" />
        <Icon {...args} size="2.5rem" />
      </Fragment>
    );
  },
  args: {
    icon: "mdi mdi-react",
    onClick: fn(),
  },
};
