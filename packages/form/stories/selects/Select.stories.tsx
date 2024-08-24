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

import { Icon } from "@react-fabric/core";
import { Countries, Country, matchString } from "@react-fabric/utilities";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { AnyObject } from "yup";
import { Select } from "../../src";

const meta: Meta = {
  component: Select,
  title: "@form/Select",
  parameters: {
    layout: "centered",
    jest: ["form/tests/Select.test.tsx"],
  },
  decorators: [
    (Story) => (
      <div className="max-w-[32rem] w-screen">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type SelectStory = StoryObj<typeof Select<Country>>;

export const _Select: SelectStory = {
  render: (args) => {
    return (
      <Select
        {...args}
        options={Countries.list}
        labelProperty="name"
        valueProperty="iso3"
        renderer={(opt) => (
          <div className="flex gap-2 items-center">
            <Icon icon={`flag ${opt.iso2}`} />
            <span className="flex-1">{opt.name}</span>
            <span className="rounded-full text-xs bg-tint-500/10 px-1 py-px">
              {opt.phone}
            </span>
          </div>
        )}
      />
    );
  },
  args: {
    label: "Select",
    placeholder: "Select...",
    groupProperty: "alpha",
    allowClear: true,
    onEnterPressed: fn(),
    // @ts-expect-error ignore
    onChange: fn(),
  },
};

export const Multiple: SelectStory = {
  render: (args: AnyObject) => {
    return (
      <Select
        {...args}
        multiple
        options={Countries.list}
        labelProperty="name"
        valueProperty="iso3"
        renderer={(opt) => (
          <div className="flex gap-2 items-center">
            <Icon icon={`flag ${opt.iso2}`} />
            <span className="flex-1">{opt.name}</span>
            <span className="rounded-full text-xs bg-tint-500/10 px-1 py-px">
              {opt.phone}
            </span>
          </div>
        )}
      />
    );
  },
  args: {
    label: "Select",
    placeholder: "Select...",
    groupProperty: "alpha",
    allowClear: true,
    onEnterPressed: fn(),
    // @ts-expect-error ignore
    onChange: fn(),
  },
};

export const Searchable: SelectStory = {
  render: (args: AnyObject) => {
    return (
      <Select
        {...args}
        options={Countries.list}
        labelProperty="name"
        valueProperty="iso3"
        renderer={(opt: Country) => (
          <div className="flex gap-2 items-center">
            <Icon icon={`flag ${opt.iso2}`} />
            <span className="flex-1">{opt.name}</span>
            <span className="rounded-full text-xs bg-tint-500/10 px-1 py-px">
              {opt.phone}
            </span>
          </div>
        )}
        matcher={(opt: Country, query) =>
          matchString(opt.name, query) || matchString(opt.phone, query)
        }
      />
    );
  },
  args: {
    label: "Combo",
    placeholder: "Combo...",
    groupProperty: "alpha",
    allowClear: true,
    searchable: true,
    onEnterPressed: fn(),
    // @ts-expect-error ignore
    onChange: fn(),
  },
};

export const Remote: SelectStory = {
  render: (args: AnyObject) => {
    return (
      <Select
        {...args}
        labelProperty="name"
        valueProperty="iso3"
        renderer={(opt: Country) => (
          <div className="flex gap-2 items-center">
            <Icon icon={`flag ${opt.iso2}`} />
            <span className="flex-1">
              <div>{opt.name}</div>
              <div className=" group-data-[select-display]:hidden text-xs text-muted">
                {opt.fullname}
              </div>
            </span>
            <span className="rounded-full text-xs bg-tint-500/10 px-1 py-px">
              {opt.phone}
            </span>
          </div>
        )}
        matcher={(opt: Country, query) =>
          matchString(opt.name, query) || matchString(opt.phone, query)
        }
        onQuery={(query) => {
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve(
                Countries.list.filter(
                  (ctr) =>
                    matchString(ctr.name, query) ||
                    matchString(ctr.fullname, query),
                ),
              );
            }, 1000);
          });
        }}
      />
    );
  },
  args: {
    label: "Combo",
    placeholder: "Search for country...",
    groupProperty: "alpha",
    allowClear: true,
    searchable: true,
    onEnterPressed: fn(),
    // @ts-expect-error ignore
    onChange: fn(),
  },
};
