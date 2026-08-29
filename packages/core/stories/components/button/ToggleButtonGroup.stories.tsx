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

import { Button, ToggleButtonGroup } from "@/core/src";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "storybook/test";

const meta: Meta = {
  component: ToggleButtonGroup,
  tags: ["autodocs"],
  title: "@core/components/ToggleButtonGroup",
  parameters: {
    layout: "centered",
    jest: ["core/tests/components/ToggleButtonGroup.test.tsx"],
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
type ToggleButtonGroupStory = StoryObj<typeof ToggleButtonGroup>;

export const Single: ToggleButtonGroupStory = {
  render: (args) => {
    return (
      <ToggleButtonGroup {...args}>
        <Button hotKey="1" value="left">
          Left
        </Button>
        <Button hotKey="2" value="center">
          Center
        </Button>
        <Button hotKey="3" value="right">
          Right
        </Button>
        <Button hotKey="4" value="justify">
          Justify
        </Button>
      </ToggleButtonGroup>
    );
  },
  args: {
    value: "center",
    onChange: fn(),
  },
};

export const Multiple: ToggleButtonGroupStory = {
  render: (args) => {
    return (
      <ToggleButtonGroup {...args}>
        <Button hotKey="ctrl+b" hideHotKeyLabel value="bold" icon="icon-[mdi--format-bold]" aria-label="bold" />
        <Button hotKey="ctrl+i" hideHotKeyLabel value="italic" icon="icon-[mdi--format-italic]" aria-label="italic" />
        <Button hotKey="ctrl+u" hideHotKeyLabel value="underline" icon="icon-[mdi--format-underline]" aria-label="underline" />
        <Button
          hotKey="ctrl+s"
          hideHotKeyLabel
          value="strikethrough"
          icon="icon-[mdi--format-strikethrough]"
          aria-label="strikethrough"
        />
      </ToggleButtonGroup>
    );
  },
  args: {
    value: ["bold"],
    onChange: fn(),
  },
};

export const Tester: ToggleButtonGroupStory = {
  tags: ["!autodocs"],
  render: (args) => <ToggleButtonGroup {...args} />,
  args: {},
};
