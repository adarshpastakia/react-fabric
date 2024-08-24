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
import { Countries, Country } from "@react-fabric/utilities";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { DualList } from "../../src";

const meta: Meta = {
  component: DualList,
  title: "@form/List",
  parameters: {
    layout: "centered",
    jest: ["form/tests/DualList.test.tsx"],
  },
  decorators: [
    (Story) => (
      <div className="max-w-[36rem] w-screen">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type DualListStory = StoryObj<typeof DualList<Country>>;

export const _DualList: DualListStory = {
  render: (args) => {
    return (
      <DualList
        {...args}
        options={Countries.list}
        labelProperty="name"
        valueProperty="iso3"
        renderer={(opt) => (
          <div className="flex gap-2 items-center">
            <Icon icon={`flag ${opt.iso2}`} />
            <span className="flex-1 truncate">{opt.name}</span>
            <span className="rounded-full text-xs bg-tint-500/10 px-1 py-px">
              {opt.phone}
            </span>
          </div>
        )}
      />
    );
  },
  args: {
    label: "DualList",
    groupProperty: "alpha",
  },
};
