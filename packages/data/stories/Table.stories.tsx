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
import {
  Avatar,
  Badge,
  Icon,
  MenuItem,
  Section,
  Title,
  Viewport,
} from "@react-fabric/core";
import { Countries, Country } from "@react-fabric/utilities";
import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";
import { Fragment, useState } from "react";
import { Table } from "../src";

import africa from "./images/africa.svg";
import asia from "./images/asia.svg";
import europe from "./images/europe.svg";
import oceania from "./images/oceania.svg";
import namerica from "./images/north-america.svg";
import samerica from "./images/south-america.svg";

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

const columns: AnyObject = [
  {
    id: "emoji",
    width: "3rem",
    align: "center",
    locked: "start",
    hideable: false,
    renderer(_: string, data: Country) {
      return <Icon icon={`flag ${data.iso2}`} />;
    },
  },
  {
    id: "iso2",
    width: "3rem",
    locked: "start",
    hideable: false,
  },
  {
    id: "name",
    label: "Name",
    locked: "start",
    width: "32rem",
    sortable: true,
    hideable: false,
    resizable: true,
    actions: [<MenuItem label="Sort down" />, <MenuItem label="Sort up" />],
  },
  {
    id: "continent",
    label: "Continent",
    width: "12rem",
    hidden: true,
    resizable: true,
  },
  {
    id: "fullname",
    label: "Fullname",
    width: "48rem",
    hidden: true,
    resizable: true,
    renderer(v: string) {
      return (
        <div>
          <div>{v}</div>
          <div className="text-muted">{faker.lorem.paragraphs(2)}</div>
        </div>
      );
    },
  },
  {
    id: "capital",
    label: "Capital",
    width: "48rem",
    hidden: true,
  },
  {
    id: "currency",
    label: "Currency",
    width: "8rem",
    hidden: true,
  },
  {
    id: "phone",
    label: "Phone",
    width: "8rem",
    hidden: true,
  },
  {
    id: "tld",
    label: "Domain",
    width: "8rem",
    hidden: true,
  },
];

export const _Table: Story = {
  render: (args) => {
    const [sort, setSort] = useState<AnyObject>();
    return (
      <Table
        {...(args as any)}
        data={Countries.list}
        keyProperty="iso2"
        groupProperty="continent"
        groupRenderer={(grp) => (
          <Fragment>
            {grp.key === "Asia" && <img src={asia} />}
            {grp.key === "Africa" && <img src={africa} />}
            {grp.key === "Europe" && <img src={europe} />}
            {grp.key === "Oceania" && <img src={oceania} />}
            {grp.key === "North America" && <img src={namerica} />}
            {grp.key === "South America" && <img src={samerica} />}
            <span className="text-xl">{grp.key}</span>
            <span className="text-sm font-medium inline-block bg-tint-100 rounded-full px-1 border">
              {grp.itemCount}
            </span>
          </Fragment>
        )}
        onSort={(o) => (setSort(o), action("onSort")(o))}
        sort={sort}
        columns={columns}
      />
    );
  },
  args: {
    initialScroll: 18,
    canExpand: () => true,
    children: (data) => {
      return (
        <div className="flex flex-nowrap p-4 gap-2">
          <Avatar size="2rem" name="" fallbackIcon={`flag ${data.iso2}`} />
          <div className="flex-1">
            <Title>{data.fullname}</Title>
          </div>
        </div>
      );
    },
  },
};
