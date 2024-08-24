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

import { Switch } from "@react-fabric/form";
import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { useMemo } from "react";
import { Fragment } from "react/jsx-runtime";
import {
  Button,
  Card,
  Content,
  ContextMenu,
  Divider,
  DropdownDismiss,
  Footer,
  Menu,
  MenuItem,
  Title,
} from "../../../src";

const meta: Meta = {
  component: Menu,
  subcomponents: { MenuItem, ContextMenu } as AnyObject,
  title: "@core/components/Menu",
  parameters: {
    layout: "centered",
    controls: { exclude: /^(on.*|children|as)/ },
    jest: ["core/tests/Menu.test.tsx"],
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
type MenuStory = StoryObj<typeof Menu>;

export const _Menu: MenuStory = {
  render: (args) => {
    return (
      <Fragment>
        <Menu {...args} className="outline rounded-capped min-h-80">
          <MenuItem
            id="appItem"
            icon="mdi mdi-react"
            label="Application Menu"
            appendLabel="NEW"
          />
          <MenuItem id="newItem" label="New Menu Item" badge={45} />
          <Divider />
          <MenuItem id="collapsable1" label="Collapsable Item" disabled />
          <MenuItem id="collapsable2" label="Collapsable Item" active />
          <Divider />
          <MenuItem id="sectionItem" label="Section Item" />
          <Menu label="Floating Item">
            <Menu id="inner1" label="Dropdown">
              <Card>
                <Content>
                  <Switch />
                </Content>
                <Footer flex justify="end">
                  <DropdownDismiss>
                    <Button>Dismiss Child</Button>
                  </DropdownDismiss>
                </Footer>
              </Card>
            </Menu>
            <MenuItem id="inner2" label="Inner Item" />
            <Menu label="Floating Item" disabled>
              <MenuItem id="inner1" label="Inner Item" />
              <MenuItem id="inner2" label="Inner Item" />
            </Menu>
          </Menu>
          <Menu label="Floating Item">
            <MenuItem id="inner1" label="Inner Item" />
            <MenuItem id="inner2" label="Inner Item" />
          </Menu>
          <div className="flex-1" />
          <MenuItem id="delete" color="danger" label="Danger Item" />
        </Menu>
      </Fragment>
    );
  },
  args: { onClick: fn() },
};

export const Minimal: MenuStory = {
  render: (args) => {
    return (
      <Fragment>
        <Menu
          {...args}
          label={undefined}
          menuClassName={undefined}
          minimal
          className="outline rounded-capped"
        >
          <MenuItem
            id="appItem"
            icon="mdi mdi-react"
            label="Application Menu"
            appendLabel="NEW"
          />
          <MenuItem id="newItem" label="New Menu Item" badge={45} />
          <MenuItem id="collapsable1" label="Collapsable Item" disabled />
          <MenuItem id="collapsable2" label="Collapsable Item" active />
          <MenuItem id="sectionItem" label="Section Item" />
          <Menu label="Floating Item">
            <MenuItem id="inner1" label="Inner Item" />
            <MenuItem id="inner2" label="Inner Item" />
          </Menu>
          <MenuItem
            id="delete"
            icon="mdi mdi-trash-can-outline"
            color="danger"
            label="Danger Item"
          />
        </Menu>
      </Fragment>
    );
  },
  args: { onClick: fn() },
};

export const _ContextMenu: MenuStory = {
  render: (args) => {
    const menu = useMemo(
      () => (
        <Menu onClick={action("context-menu")}>
          <MenuItem
            id="appItem"
            icon="mdi mdi-react"
            label="Application Menu"
            appendLabel="NEW"
          />
          <MenuItem id="newItem" label="New Menu Item" badge={45} />
          <MenuItem id="collapsable1" label="Collapsable Item" />
          <MenuItem id="collapsable2" label="Collapsable Item" />
          <MenuItem id="sectionItem" label="Section Item" />
          <Menu label="Floating Item">
            <MenuItem id="inner1" label="Inner Item" />
            <MenuItem id="inner2" label="Inner Item" />
          </Menu>
        </Menu>
      ),
      [args],
    );
    return (
      <div className="w-screen max-w-lg aspect-video outline rounded-capped flex items-center justify-center">
        <ContextMenu menu={menu}>
          <Title>Context menu for container</Title>
        </ContextMenu>
      </div>
    );
  },
  args: { onClick: fn() },
};
