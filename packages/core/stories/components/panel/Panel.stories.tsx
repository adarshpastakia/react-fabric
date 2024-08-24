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

import { faker } from "@faker-js/faker";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Fragment } from "react/jsx-runtime";
import {
  Button,
  Card,
  Content,
  Footer,
  Navigator,
  Panel,
  PanelGroup,
} from "../../../src";

const meta: Meta = {
  component: Panel,
  subcomponents: { PanelGroup } as AnyObject,
  title: "@core/components/Panel",
  parameters: {
    layout: "centered",
    controls: { exclude: /^(on.*|children|as)/ },
    jest: ["core/tests/Panel.test.tsx"],
  },
  decorators: [
    (Story) => (
      <div className="w-96 p-4">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type PanelStory = StoryObj<typeof Panel>;

export const _Panel: PanelStory = {
  render: (args) => {
    return (
      <Fragment>
        <Panel {...args} actions={<Navigator onNavigate={fn()} />}>
          <Content>{faker.lorem.paragraphs(2)}</Content>
          <Footer flex justify="end" className="px-2 py-1">
            <Button variant="link">Cancel</Button>
            <Button variant="solid">OK</Button>
          </Footer>
        </Panel>
      </Fragment>
    );
  },
  args: {
    title: faker.animal.cat(),
  },
};

export const PanelControls: PanelStory = {
  render: (args) => {
    return (
      <Panel {...args}>
        <Content>{faker.lorem.paragraphs(2)}</Content>
      </Panel>
    );
  },
  args: {
    title: faker.animal.cat(),
    collapsable: true,
    expandable: true,
    onClose: fn(),
    onExpand: fn(),
    onCollapse: fn(),
  },
};
