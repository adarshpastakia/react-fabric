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

import {
  Button,
  CoreIcons,
  Divider,
  Dropdown,
  Menu,
  MenuItem,
} from "@react-fabric/core";
import { SuperDate } from "@react-fabric/superdate";
import { shortHash } from "@react-fabric/utilities";
import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";
import { FIELD_TYPE, OPERATOR, SearchBar } from "../src";

const meta: Meta = {
  component: SearchBar,
  title: "@searchbar/SearchBar",
  parameters: {
    layout: "padded",
    jest: ["searchbar/tests/SearchBar.test.tsx"],
  },
};

export default meta;
type SearchBarStory = StoryObj<typeof SearchBar>;

const schema = [
  {
    uri: "http://react-fabric/schema.json",
    schema: {
      type: "object",
      $ref: "http://react-fabric/base-schema.json",
    },
  },
  {
    uri: "http://react-fabric/base-schema.json",
    schema: {
      type: "object",
      properties: {
        bool: {
          $ref: "http://react-fabric/bool-schema.json",
        },
        exists: {
          $ref: "http://react-fabric/exists-schema.json",
        },
        query_string: {
          $ref: "http://react-fabric/query-schema.json",
        },
      },
    },
  },
  {
    uri: "http://react-fabric/exists-schema.json",
    schema: {
      type: "object",
      properties: {
        field: {
          type: "string",
        },
      },
      required: ["field"],
    },
  },
  {
    uri: "http://react-fabric/query-schema.json",
    schema: {
      type: "object",
      properties: {
        fields: {
          type: "array",
          items: {
            type: "string",
          },
          minItems: 1,
          uniqueItems: true,
        },
        query: {
          type: "string",
        },
      },
      required: ["query"],
    },
  },
  {
    uri: "http://react-fabric/bool-schema.json",
    schema: {
      type: "object",
      properties: {
        filter: {
          type: "array",
          items: {
            $ref: "http://react-fabric/base-schema.json",
          },
        },
        must: {
          type: "array",
          items: {
            $ref: "http://react-fabric/base-schema.json",
          },
        },
        should: {
          type: "array",
          items: {
            $ref: "http://react-fabric/base-schema.json",
          },
        },
        must_not: {
          type: "array",
          items: {
            $ref: "http://react-fabric/base-schema.json",
          },
        },
        should_not: {
          type: "array",
          items: {
            $ref: "http://react-fabric/base-schema.json",
          },
        },
        minimum_should_match: {
          type: "number",
        },
      },
    },
  },
];

export const _SearchBar: SearchBarStory = {
  render: (args) => {
    return (
      <SearchBar
        {...args}
        onSearch={action("onSearch")}
        append={<SuperDate variant="link" value="$year-5|$now" />}
      >
        <Dropdown placement="bottom-end">
          <Button icon={CoreIcons.menu} aria-label="menu" variant="link" />
          <Menu className="text-sm">
            <MenuItem label="Open" />
            <MenuItem label="Save" />
            <Divider />
            <MenuItem label="Share" />
          </Menu>
        </Dropdown>
      </SearchBar>
    );
  },
  args: {
    allowAdd: true,
    excludedColor: "#f00",
    query: "test AND query",
    querySchema: schema,
    defaultQuery: "{\n\t\n}",
    fields: [
      {
        field: "id",
        label: "ID",
        type: FIELD_TYPE.ID,
      },
      {
        field: "name",
        label: "Name",
        type: FIELD_TYPE.STRING,
      },
      {
        field: "age",
        label: "Age",
        type: FIELD_TYPE.NUMBER,
      },
      {
        field: "extras",
        label: "Extras",
        type: FIELD_TYPE.NONE,
      },
    ],
    filters: [
      {
        id: shortHash(),
        field: "name",
        operator: OPERATOR.IS,
        value: "Smeghead",
        pinned: true,
        canPin: false,
        canDisable: false,
        required: true,
        canEdit: false,
        color: "lilac",
        icon: "mdi mdi-tray-full",
      },
      {
        id: shortHash(),
        field: "name",
        operator: OPERATOR.IS,
        value: "Smeghead",
      },
      {
        id: shortHash(),
        field: "name",
        negate: true,
        operator: OPERATOR.IS,
        value: "Smeghead",
        label: "New filter",
      },
      {
        id: shortHash(),
        query: JSON.stringify({ query: "test" }),
        label: "Query filter",
      },
    ],
  },
};
