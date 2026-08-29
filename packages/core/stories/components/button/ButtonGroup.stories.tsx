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

import { Button, ButtonGroup } from "@/core/src";
import type { Meta, StoryObj } from "@storybook/react";
import { Fragment } from "react/jsx-runtime";
import { fn } from "storybook/test";

const meta: Meta = {
  component: ButtonGroup,
  tags: ["autodocs"],
  title: "@core/components/ButtonGroup",
  parameters: {
    layout: "centered",
    jest: ["core/tests/components/ButtonGroup.test.tsx"],
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
          <Button value="left">Left</Button>
          <Button value="center">Center</Button>
          <Button value="right">Right</Button>
          <Button value="justify">Justify</Button>
        </ButtonGroup>
      </Fragment>
    );
  },
  args: {
    onClick: fn(),
  },
};

export const Tester: ButtonGroupStory = {
  tags: ["!autodocs"],
  render: (args) => <ButtonGroup {...args} />,
  args: {},
};
