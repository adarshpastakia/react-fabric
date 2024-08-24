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
import { Avatar, Button, Card, Icon, Tooltip } from "../../../src";

const meta: Meta = {
  component: Tooltip,
  title: "@core/components/Tooltip",
  parameters: {
    layout: "centered",
    controls: { exclude: /^(on.*|children|as)/ },
    jest: ["core/tests/Tooltip.test.tsx"],
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
          <Button as="a">Button with tooltip</Button>
        </Tooltip>
        <Tooltip {...args}>
          <Card>Card with tooltip</Card>
        </Tooltip>
        <Tooltip {...args}>
          <Icon size="3rem" icon="mdi mdi-react" />
        </Tooltip>
        <Tooltip {...args}>
          <Avatar size="3rem" name="Avatar" />
        </Tooltip>
      </Fragment>
    );
  },
  args: {
    content: "Tooltip content",
  },
};

export const Colors: TooltipStory = {
  render: (args) => {
    return (
      <Fragment>
        <Tooltip {...args}>
          <Icon size="3rem" icon="mdi mdi-react" />
        </Tooltip>
        <Tooltip {...args} color="primary">
          <Icon size="3rem" icon="mdi mdi-react" color="primary" />
        </Tooltip>
        <Tooltip {...args} color="accent">
          <Icon size="3rem" icon="mdi mdi-react" color="accent" />
        </Tooltip>
        <Tooltip {...args} color="info">
          <Icon size="3rem" icon="mdi mdi-react" color="info" />
        </Tooltip>
        <Tooltip {...args} color="danger">
          <Icon size="3rem" icon="mdi mdi-react" color="danger" />
        </Tooltip>
        <Tooltip {...args} color="success">
          <Icon size="3rem" icon="mdi mdi-react" color="success" />
        </Tooltip>
        <Tooltip {...args} color="warning">
          <Icon size="3rem" icon="mdi mdi-react" color="warning" />
        </Tooltip>
      </Fragment>
    );
  },
  args: {
    content: "Tooltip content",
  },
};

export const StyledContent: TooltipStory = {
  render: (args) => {
    return (
      <Fragment>
        <Tooltip
          {...args}
          content={
            <div className="flex gap-2 items-center">
              <Avatar size="2rem" rounded name="Smeghead" />
              <div className="flex-1">
                <div className="text-md">Smegheads</div>
                <div className="text-sm">Boys from the dawrf!</div>
              </div>
            </div>
          }
        >
          <Icon size="3rem" icon="mdi mdi-react" />
        </Tooltip>
      </Fragment>
    );
  },
  args: {
    copyContent: "Smeg",
  },
};
