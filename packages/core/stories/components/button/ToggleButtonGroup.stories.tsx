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
import { Button, Divider, ToggleButtonGroup } from "../../../src";

const meta: Meta = {
  component: ToggleButtonGroup,
  title: "@core/components/ToggleButtonGroup",
  parameters: {
    layout: "centered",
    controls: { exclude: /^(on.*|children|as)/ },
    jest: ["core/tests/ToggleButtonGroup.test.tsx"],
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

export const _ToggleButtonGroup: ToggleButtonGroupStory = {
  render: (args) => {
    return (
      <Fragment>
        <ToggleButtonGroup {...args}>
          <Button value="1">First</Button>
          <Button value="2">Second</Button>
          <Button value="3">Third</Button>
        </ToggleButtonGroup>
      </Fragment>
    );
  },
  args: {
    value: ["1", "2"],
    onChange: fn<any>(),
  },
};

export const SingleSelection: ToggleButtonGroupStory = {
  render: (args) => {
    return (
      <Fragment>
        <ToggleButtonGroup {...args}>
          <Button value="1">First</Button>
          <Button value="2">Second</Button>
          <Button value="3">Third</Button>
        </ToggleButtonGroup>
      </Fragment>
    );
  },
  args: {
    value: "1",
    onChange: fn<any>(),
  },
};

export const EditorToolbar: ToggleButtonGroupStory = {
  render: (args) => {
    return (
      <Fragment>
        <div className="border border-muted p-1 flex gap-2 rounded">
          <ToggleButtonGroup value="left" variant="link">
            <Button
              icon="mdi mdi-format-align-left"
              value="left"
              aria-label="left"
            />
            <Button
              icon="mdi mdi-format-align-center"
              value="center"
              aria-label="center"
            />
            <Button
              icon="mdi mdi-format-align-right"
              value="right"
              aria-label="right"
            />
            <Button
              icon="mdi mdi-format-align-justify"
              value="justify"
              aria-label="justify"
            />
          </ToggleButtonGroup>
          <Divider vertical />
          <ToggleButtonGroup value={[]} variant="link">
            <Button icon="mdi mdi-format-bold" value="bold" aria-label="bold" />
            <Button
              icon="mdi mdi-format-italic"
              value="italic"
              aria-label="italic"
            />
            <Button
              icon="mdi mdi-format-underline"
              value="undeline"
              aria-label="undeline"
            />
          </ToggleButtonGroup>
        </div>
      </Fragment>
    );
  },
  args: {},
};
