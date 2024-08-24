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

import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import {
  Button,
  Card,
  Content,
  CoreIcons,
  Dropdown,
  DropdownDismiss,
  Footer,
  Menu,
  MenuItem,
  Panel,
  PanelGroup,
  Text,
} from "../../../src";

const meta: Meta = {
  component: Dropdown,
  title: "@core/components/Dropdown",
  parameters: {
    layout: "centered",
    controls: { exclude: /^(on.*|children|as)/ },
    jest: ["core/tests/Dropdown.test.tsx"],
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
type DropdownStory = StoryObj<typeof Dropdown>;

export const _Dropdown: DropdownStory = {
  render: (args) => {
    return (
      <Dropdown {...args}>
        <Button altIcon={CoreIcons.chevronDown}>Dropdown Menu</Button>
        <Menu onClick={action("menu")}>
          <MenuItem id="1" label="Item One" />
          <MenuItem id="2" label="Item Two" />
          <MenuItem id="3" label="Item Three" />
        </Menu>
      </Dropdown>
    );
  },
  args: {
    onClose: fn(),
    onOpen: fn(),
  },
};

export const CardContent: DropdownStory = {
  render: (args) => {
    return (
      <Dropdown {...args}>
        <Button altIcon={CoreIcons.chevronDown}>Dropdown Card</Button>
        <Card>
          <Text>Some content</Text>
          <Footer className="p-2" flex justify="end">
            <DropdownDismiss>
              <Button onClick={action("button")}>Close</Button>
            </DropdownDismiss>
          </Footer>
        </Card>
      </Dropdown>
    );
  },
  args: {
    onClose: fn(),
    onOpen: fn(),
  },
};

export const PanelContent: DropdownStory = {
  render: (args) => {
    return (
      <Dropdown {...args}>
        <Button altIcon={CoreIcons.chevronDown}>Dropdown Panel</Button>
        <PanelGroup>
          <Panel title="Some panel">
            <Content>
              <Text>Some content</Text>
            </Content>
            <Footer className="p-2" flex justify="end">
              <DropdownDismiss>
                <Button>Close</Button>
              </DropdownDismiss>
            </Footer>
          </Panel>
          <Panel title="Some panel">
            <Content>
              <Text>Some content</Text>
            </Content>
            <Footer className="p-2" flex justify="end">
              <DropdownDismiss>
                <Button>Close</Button>
              </DropdownDismiss>
            </Footer>
          </Panel>
        </PanelGroup>
      </Dropdown>
    );
  },
  args: {
    onClose: fn(),
    onOpen: fn(),
  },
};

export const NestedDropdown: DropdownStory = {
  render: (args) => {
    return (
      <Dropdown {...args}>
        <Button altIcon={CoreIcons.chevronDown}>Dropdown Panel</Button>
        <Card>
          <Content>Nested dropdowns</Content>
          <Footer flex justify="end">
            <DropdownDismiss>
              <Button>Dismiss Parent</Button>
            </DropdownDismiss>
            <Dropdown>
              <Button>Child</Button>
              <Card>
                <DropdownDismiss>
                  <Button>Dismiss Child</Button>
                </DropdownDismiss>
              </Card>
            </Dropdown>
          </Footer>
        </Card>
      </Dropdown>
    );
  },
  args: {
    onClose: fn(),
    onOpen: fn(),
  },
};
