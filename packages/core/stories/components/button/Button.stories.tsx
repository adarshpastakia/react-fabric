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

import { Badge, Button, useNotificationService } from "@/core/src";
import type { Meta, StoryObj } from "@storybook/react";
import { Fragment } from "react/jsx-runtime";
import { fn } from "storybook/test";

const meta: Meta = {
  component: Button,
  tags: ["autodocs"],
  title: "@core/components/Button",
  parameters: {
    layout: "centered",
    jest: ["core/tests/components/Button.test.tsx"],
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
        <Button {...args}>Click Me!</Button>
        <Button {...args} icon="icon-[mdi--react]" altIcon="icon-[mdi--chevron-down]">
          Click Me!
        </Button>
        <Button {...args} icon="icon-[mdi--react]" aria-label="Click Me" />
        <Button {...args} icon="icon-[mdi--react]" rounded aria-label="Click" />
      </Fragment>
    );
  },
  args: {
    onClick: fn(),
  },
};

export const Variants: ButtonStory = {
  render: (args) => {
    return (
      <Fragment>
        <Button {...args} variant="default">
          Default
        </Button>
        <Button {...args} variant="soft">
          Soft
        </Button>
        <Button {...args} variant="outlined">
          Outlined
        </Button>
        <Button {...args} variant="dashed">
          Dashed
        </Button>
        <Button {...args} variant="solid">
          Solid
        </Button>
        <Button {...args} variant="link">
          Link
        </Button>
      </Fragment>
    );
  },
  args: {},
};

export const Colors: ButtonStory = {
  render: (args) => {
    const { promise, toast } = useNotificationService();
    return (
      <Fragment>
        <Button {...args} color="default">
          Default
        </Button>
        <Button {...args} color="muted">
          Muted
        </Button>
        <Button {...args} color="primary">
          Primary
        </Button>
        <Button {...args} color="secondary">
          Secondary
        </Button>
        <Button {...args} color="info">
          Info
        </Button>
        <Button {...args} color="danger">
          Danger
        </Button>
        <Button {...args} color="success">
          Success
        </Button>
        <Button {...args} color="warning">
          Warning
        </Button>
      </Fragment>
    );
  },
  args: {},
};

export const States: ButtonStory = {
  render: (args) => {
    return (
      <Fragment>
        <Button {...args} disabled>
          Disabled
        </Button>
        <Button {...args} loading>
          Loading
        </Button>
        <Button {...args} active>
          Active
        </Button>
        <Button {...args} showActionDone showActionDoneEvent="manual">
          Active
        </Button>
      </Fragment>
    );
  },
  args: {},
};

export const Badges: ButtonStory = {
  render: (args) => {
    return (
      <Fragment>
        <Badge value="High" color="black" bg="info" placement="top">
          <Button {...args}>Simple badge</Button>
        </Badge>
        <Badge value="9" color="white" bg="danger" className="flex-1">
          <Button {...args} className="block">
            Value badge
          </Button>
        </Badge>
        <Badge icon="icon-[mdi--bell]" bg="primary-500" color="white">
          <Button {...args}>Icon badge</Button>
        </Badge>
        <Badge ping color="white" bg="success">
          <Button {...args}>Ping badge</Button>
        </Badge>
        <Button {...args} altIcon={<Badge value="9" bg="tint-100" inline />}>
          Inline badge
        </Button>
      </Fragment>
    );
  },
  args: {
    onClick: fn(),
  },
};

export const HotKeys: ButtonStory = {
  render: (args) => {
    return (
      <>
        <Button {...args} hotKey={["Control+K", "Q"]}>
          Control K - Q
        </Button>
        <Button {...args} hotKey="Meta+V">
          Meta V
        </Button>
        <Button {...args} hotKey="Alt+B" hideHotKeyLabel>
          Alt B
        </Button>
      </>
    );
  },
  args: {
    onClick: fn(),
  },
};

export const Tester: ButtonStory = {
  tags: ["!autodocs"],
  render: (args) => <Button {...args} />,
  args: {},
};
