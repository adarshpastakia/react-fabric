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
import { fn } from "storybook/test";
import { Fragment } from "react/jsx-runtime";
import { ConfirmButton } from "../../../src";

const meta: Meta = {
  component: ConfirmButton,
  title: "@core/components/ConfirmButton",
  parameters: {
    layout: "centered",
    controls: { exclude: /^(on.*|children|as)/ },
    jest: ["core/tests/buttons/ConfirmButton.test.tsx"],
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
type ConfirmButtonStory = StoryObj<typeof ConfirmButton>;

export const _ConfirmButton: ConfirmButtonStory = {
  render: (args) => {
    return (
      <Fragment>
        <ConfirmButton {...args}>Confirm Action</ConfirmButton>
      </Fragment>
    );
  },
  args: {
    message: "Confirm done",
    onClick: fn() as any,
  },
};

export const ConfirmWithAction: ConfirmButtonStory = {
  render: (args) => {
    return (
      <Fragment>
        <ConfirmButton {...args}>Confirm with Completed Action</ConfirmButton>
      </Fragment>
    );
  },
  args: {
    actionMessage: "Action completed",
    message: "Confirm done",
    onClick: fn() as any,
  },
};

export const Tester: ConfirmButtonStory = {
  render: (args) => <ConfirmButton {...args} />,
  args: {},
};
