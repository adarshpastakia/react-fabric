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
import { Badge, Button } from "../../../src";
import { Tooltip } from "../../../src/overlays";

const meta: Meta = {
  component: Button,
  title: "@core/components/Button",
  parameters: {
    layout: "centered",
    controls: { exclude: /^(children|as)/ },
    jest: ["core/tests/buttons/Button.test.tsx"],
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
type ButtonStory = StoryObj<typeof Button>;

export const _Button: ButtonStory = {
  render: (args) => {
    return (
      <Fragment>
        <Button
          {...args}
          spinOnHover
          icon="mdi mdi-react"
          aria-label="Click Me!"
        />
        <Button {...args} as="a">
          Click Me!
        </Button>
        <Button {...args} icon="mdi mdi-react">
          Click Me!
        </Button>
        <Button {...args} icon="mdi mdi-react" altIcon="mdi mdi-chevron-down">
          Click Me!
        </Button>
      </Fragment>
    );
  },
  args: {},
};

export const Colors: ButtonStory = {
  render: (args) => {
    return (
      <Fragment>
        <Button {...args} />
        <Button {...args} color="accent" />
        <Button {...args} color="info" />
        <Button {...args} color="danger" />
        <Button {...args} color="success" />
        <Button {...args} color="warning" />
      </Fragment>
    );
  },
  args: {
    children: "Click Me!",
    icon: "mdi mdi-react",
  },
};

export const Sizes: ButtonStory = {
  render: (args) => {
    return (
      <Fragment>
        <Button {...args} size="xs" />
        <Button {...args} size="sm" />
        <Button {...args} />
        <Button {...args} size="md" />
        <Button {...args} size="lg" />
        <Button {...args} size="xl" />
      </Fragment>
    );
  },
  args: {
    children: "Click Me!",
    icon: "mdi mdi-react",
  },
};

export const Styles: ButtonStory = {
  render: (args) => {
    return (
      <Fragment>
        <Button {...args} variant={undefined} />
        <Button {...args} variant="outline" />
        <Button {...args} variant="solid" />
        <Button {...args} variant="link" />
      </Fragment>
    );
  },
  args: {
    children: "Click Me!",
    icon: "mdi mdi-react",
  },
};

export const States: ButtonStory = {
  render: (args) => {
    return (
      <Fragment>
        <Button {...args} disabled />
        <Button {...args} loading />
        <Button {...args} active />
      </Fragment>
    );
  },
  args: {
    children: "Click Me!",
    icon: "mdi mdi-react",
  },
};

export const Badges: ButtonStory = {
  render: (args) => {
    return (
      <Fragment>
        <Button
          {...args}
          badge={{
            value: 999,
            max: 99,
          }}
          altIcon="mdi mdi-chevron-down"
        />
        <Badge value="TS" placement="top-start">
          <Tooltip content="Tooltip">
            <Button {...args} />
          </Tooltip>
        </Badge>
        <Tooltip content="Tooltip">
          <Badge ping className="bg-success-500">
            <Button {...args} />
          </Badge>
        </Tooltip>
      </Fragment>
    );
  },
  args: {
    children: "Click Me!",
    icon: "mdi mdi-react",
  },
};

/**
 * Show action completed animation
 */
export const ActionState: ButtonStory = {
  render: (args) => {
    return (
      <Fragment>
        <Tooltip content="Tooltip">
          <Button {...args} />
        </Tooltip>
        <Button {...args} color="success" />
        <Button {...args} color="danger" />
      </Fragment>
    );
  },
  args: {
    children: "Click Me!",
    icon: "mdi mdi-react",
    actionMessage: "Action completed",
    onClick: (e: AnyObject) => {
      fn()(e);
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(1);
        }, 2000);
      });
    },
  },
};

export const Tester: ButtonStory = {
  render: (args) => <Button {...args} />,
  args: {},
};
