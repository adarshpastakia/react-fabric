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

import { Icon, Section, Viewport } from "@react-fabric/core";
import { Countries } from "@react-fabric/utilities";
import type { Meta, StoryObj } from "@storybook/react";
import { Table } from "../src";

const meta: Meta = {
  component: Table,
  title: "@data/Table",
  parameters: {
    layout: "fullscreen",
    controls: { exclude: /^(children|as)/ },
  },
  decorators: [
    (Story) => (
      <div className="min-h-[600px]">
        <Viewport>
          <Section>
            <Story />
          </Section>
        </Viewport>
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Table>;

export const _Table: Story = {
  render: (args) => {
    return (
      <Table
        {...args}
        data={Countries.list}
        columns={[
          {
            id: "emoji",
            width: "3rem",
            align: "center",
            locked: "start",
            renderer(_, data) {
              return <Icon icon={`flag ${data.iso2}`} />;
            },
          },
          {
            id: "iso2",
            width: "3rem",
            locked: "start",
          },
          {
            id: "name",
            label: "Name",
            locked: "start",
            width: "32rem",
          },
          {
            id: "fullname",
            label: "Fullname",
            width: "48rem",
          },
          {
            id: "capital",
            label: "Capital",
            width: "48rem",
          },
          {
            id: "currency",
            label: "Currency",
            width: "8rem",
            locked: "end",
          },
          {
            id: "phone",
            label: "Phone",
            width: "8rem",
            locked: "end",
          },
        ]}
      />
    );
  },
  args: {},
};
