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
import { ActionLabel, Button, CoreIcons, Icon, Tooltip } from "../../../src";
import { FloatingTree } from "@floating-ui/react";

const meta: Meta = {
  component: ActionLabel,
  title: "@core/components/Action Label",
  parameters: {
    layout: "centered",
    controls: { exclude: /^(on.*|children|as)/ },
    jest: ["core/tests/ActionLabel.test.tsx"],
  },
  decorators: [
    (Story) => (
      <div className="p-4">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type ActionLabelStory = StoryObj<typeof ActionLabel>;

export const _ActionLabel: ActionLabelStory = {
  render: (args) => {
    return (
      <div className="w-96 overflow-hidden outline p-4">
        <ActionLabel
          {...args}
          actions={[
            <Button
              key="negative"
              icon="mdi mdi-filter-minus-outline"
              color="danger"
              aria-label="Filter Negative"
            />,
            <Button
              key="positive"
              icon="mdi mdi-filter-plus-outline"
              aria-label="Filter"
            />,
          ]}
        >
          Display label
        </ActionLabel>

        <div className="flex gap-2 items-center overflow-hidden">
          <ActionLabel
            {...args}
            className="flex-initial"
            actions={[
              <Button
                key="negative"
                icon="mdi mdi-filter-minus-outline"
                color="danger"
                aria-label="Filter Negative"
              />,
              <Button
                key="positive"
                icon="mdi mdi-filter-plus-outline"
                aria-label="Filter"
              />,
            ]}
          >
            Item on the left
          </ActionLabel>
          <Icon className="flex-content" icon={CoreIcons.arrowRight} />
          <ActionLabel
            {...args}
            className="flex-initial"
            actions={[
              <Button
                key="negative"
                icon="mdi mdi-filter-minus-outline"
                color="danger"
                aria-label="Filter Negative"
              />,
              <Button
                key="positive"
                icon="mdi mdi-filter-plus-outline"
                aria-label="Filter"
              />,
            ]}
          >
            Item on the right
          </ActionLabel>
        </div>

        <div className="flex gap-2 items-center overflow-hidden">
          <Tooltip content="Longer labeled item on the left" copyContent>
            <ActionLabel
              {...args}
              className="flex-initial"
              actions={[
                <Tooltip key="view" content="View something" placement="bottom">
                  <Button icon="mdi mdi-eye" aria-label="View" />
                </Tooltip>,
                <Button key="like" icon="mdi mdi-thumb-up" aria-label="open" />,
                <Button key="share" icon="mdi mdi-share" aria-label="share" />,
              ]}
            >
              <span>Longer labeled item on the left</span>
            </ActionLabel>
          </Tooltip>
          <Icon className="flex-content" icon={CoreIcons.arrowRight} />
          <Tooltip content="Longer labeled item on the right" copyContent>
            <ActionLabel
              {...args}
              className="flex-initial"
              actions={[
                <Button key="view" icon="mdi mdi-eye" aria-label="View" />,
                <Button key="like" icon="mdi mdi-thumb-up" aria-label="open" />,
                <Button key="share" icon="mdi mdi-share" aria-label="share" />,
              ]}
            >
              Longer labeled item on the right
            </ActionLabel>
          </Tooltip>
        </div>
      </div>
    );
  },
  args: {},
};
