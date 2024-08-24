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
import { Format } from "@react-fabric/utilities";
import type { Meta, StoryObj } from "@storybook/react";
import { JsonViewer } from "../../src";

const meta: Meta<typeof JsonViewer> = {
  component: JsonViewer,
  title: "@data/JsonViewer",
  parameters: {
    controls: { exclude: "json" },
  },
  decorators: [
    (Story) => (
      <div className="max-w-2xl max-h-96 overflow-auto p-4">
        <Story />
      </div>
    ),
  ],
};

const json = {
  a: 1,
  b: {},
  c: [],
  d: "test",
  e: { a: 2, b: 3, c: 4 },
  f: [1, 2, 3],
  f2: [
    { a: 2, b: 3 },
    { a: 2, b: 3 },
    { a: 2, b: 3 },
  ],
  g: undefined,
  h: 33.45,
  i: "+99.18",
  j: 198267345,
  boolean: {
    _label_: true,
    _score_: 75.69,
  },
  date: "2020-03-04T12:48:00.000",
  time: "12:48:00.000",
  temp: {
    _label_: "Any label",
    _score_: 45.69,
  },
  lipsum: faker.lorem.paragraphs(4),
};

export default meta;
type Story = StoryObj<typeof JsonViewer>;

export const _JsonViewer: Story = {
  render: (args) => {
    return <JsonViewer {...args} json={json} filters />;
  },
  args: {
    copy: true,
    labeler(path) {
      if (path === "a") return "Property A";
      return path;
    },
    formatter(path, value) {
      if (path === "j") return Format.number(value);
    },
  },
};
