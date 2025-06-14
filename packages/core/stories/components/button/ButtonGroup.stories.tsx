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
import { Fragment } from "react/jsx-runtime";
import {
  Badge,
  Button,
  ButtonGroup,
  Dropdown,
  Navigator,
  Tooltip,
} from "../../../src";

const meta: Meta = {
  component: ButtonGroup,
  subcomponents: { Navigator } as AnyObject,
  title: "@core/components/ButtonGroup",
  parameters: {
    layout: "centered",
    controls: { exclude: /^(on.*|children|as)/ },
    jest: ["core/tests/buttons/ButtonGroup.test.tsx"],
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
type ButtonGroupStory = StoryObj<typeof ButtonGroup>;

export const _ButtonGroup: ButtonGroupStory = {
  render: (args) => {
    return (
      <Fragment>
        <ButtonGroup {...args}>
          <Tooltip content="Tester">
            <Button>First</Button>
          </Tooltip>
          <Button>Second</Button>
          <Button>Third</Button>
          {args.className === "red" && <Button>Four</Button>}
        </ButtonGroup>
      </Fragment>
    );
  },
  args: {},
};

export const SplitButton: ButtonGroupStory = {
  render: (args) => {
    return (
      <Fragment>
        <ButtonGroup {...args}>
          <Badge ping>
            <Button>Action</Button>
          </Badge>
          <Dropdown fitToParent showArrow placement="bottom-end">
            <Tooltip content="Tooltip">
              <Button icon="mdi mdi-chevron-down" aria-label="Extra" />
            </Tooltip>
            <div className="p-2">Dropdown</div>
          </Dropdown>
        </ButtonGroup>
      </Fragment>
    );
  },
  args: {},
};

export const StretchButtons: ButtonGroupStory = {
  render: (args) => {
    return (
      <Fragment>
        <ButtonGroup {...args} className="w-[420px]">
          <Button className="flex-1">First</Button>
          <Button className="flex-1">Second</Button>
          <Button className="flex-1">Third</Button>
          <Button icon="mdi mdi-react" aria-label="Sample" />
        </ButtonGroup>
      </Fragment>
    );
  },
  args: {},
};

export const Tester: ButtonGroupStory = {
  render: (args) => <ButtonGroup {...args} />,
  args: {},
};
