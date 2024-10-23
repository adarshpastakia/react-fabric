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

import { DropdownTool, Menu, MenuItem } from "@react-fabric/core";
import { Countries, groupBy } from "@react-fabric/utilities";
import type { Meta, StoryObj } from "@storybook/react";
import { TreePanel } from "../src";

const meta: Meta = {
  component: TreePanel,
  title: "@data/Tree Panel",
  parameters: {
    controls: { exclude: /^(children|as)/ },
  },
  decorators: [
    (Story) => (
      <div
        className="w-96 h-96 outline bg-base overflow-hidden"
        style={{
          display: "grid",
          gridTemplate: `"head" auto "content" 1fr / 1fr`,
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TreePanel>;

const treeItems = Object.entries(groupBy(Countries.list, "continent")).map(
  ([key, children]) => ({
    id: key,
    label: key,
    leaf: false,
    children: Object.entries(groupBy(children, "alpha")).map(([alp, list]) => ({
      id: `${key}-${alp}`,
      label: alp,
      leaf: false,
      data: {
        label: alp,
        type: "group",
      },
      children: (list as AnyObject).map((ctr: KeyValue) => ({
        id: ctr.iso2,
        icon: `flag ${ctr.iso2}`,
        label: `${ctr.name}`,
        badge: ctr.iso3,
        leaf: true,
        data: ctr,
      })),
    })),
  }),
);

export const _TreePanel: Story = {
  render: (args) => {
    return (
      <TreePanel
        {...args}
        items={treeItems as AnyObject}
        renderer={(data) => {
          if (data.type == "group") {
            return (
              <div>
                <div className="flex items-center gap-1 overflow-hidden">
                  <div className="flex-initial truncate">{data.label}</div>
                  <DropdownTool groupHover>
                    <Menu>
                      <MenuItem label="Show in map" />
                      <MenuItem label="Major cities" />
                      <MenuItem label="History..." />
                    </Menu>
                  </DropdownTool>
                </div>
                <div className="text-sm text-muted">Something extra</div>
              </div>
            );
          }
          return (
            <div>
              <div className="flex items-center gap-1 overflow-hidden">
                <div className="flex-initial truncate">{data.name}</div>
                <DropdownTool groupHover>
                  <Menu>
                    <MenuItem label="Show in map" />
                    <MenuItem label="Major cities" />
                    <MenuItem label="History..." />
                  </Menu>
                </DropdownTool>
              </div>
              <div className="text-sm text-muted">{data.fullname}</div>
            </div>
          );
        }}
      />
    );
  },
  args: {
    selectable: true,
    searchable: true,
    filterPlaceholder: "Search country...",
  },
};
