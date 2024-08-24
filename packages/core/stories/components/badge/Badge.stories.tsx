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
import { Avatar, Button, Card, Icon, Badge } from "../../../src";

const meta: Meta = {
  component: Badge,
  title: "@core/components/Badge",
  parameters: {
    layout: "centered",
    controls: { exclude: /^(on.*|children|as)/ },
    jest: ["core/tests/Badge.test.tsx"],
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
type BadgeStory = StoryObj<typeof Badge>;

export const _Badge: BadgeStory = {
  render: (args) => {
    return (
      <Fragment>
        <Badge {...args}>
          <Button as="a">Button with Badge</Button>
        </Badge>
        <Badge {...args}>
          <Card>Card with Badge</Card>
        </Badge>
        <Badge {...args}>
          <Icon size="3rem" icon="mdi mdi-react" />
        </Badge>
        <Badge {...args}>
          <Avatar size="3rem" name="Avatar" />
        </Badge>
      </Fragment>
    );
  },
  args: {
    value: "New",
    placement: "top",
  },
};

export const Numbers: BadgeStory = {
  render: (args) => {
    return (
      <Fragment>
        <Badge {...args}>
          <Button as="a">Button with Badge</Button>
        </Badge>
        <Badge {...args}>
          <Card>Card with Badge</Card>
        </Badge>
      </Fragment>
    );
  },
  args: {
    value: 99,
    max: 45,
    className: "bg-accent-500 text-invert",
  },
};

export const Ping: BadgeStory = {
  render: (args) => {
    return (
      <Fragment>
        <Badge {...args} className="bg-danger-500">
          <Button as="a">Button with Badge</Button>
        </Badge>
        <Badge
          {...args}
          icon="mdi mdi-star"
          className="bg-transparent before:bg-warning-500"
        >
          <Card>Card with Badge</Card>
        </Badge>
      </Fragment>
    );
  },
  args: {
    ping: true,
  },
};
