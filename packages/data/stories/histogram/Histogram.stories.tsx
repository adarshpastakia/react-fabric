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
import { Histogram } from "../../src";

const meta: Meta<typeof Histogram> = {
  component: Histogram,
  title: "@data/Histogram",
  parameters: {
    controls: { exclude: /^(children|as)/ },
  },
  decorators: [
    (Story) => (
      <div className="w-96 p-4 max-h-96 overflow-auto">
        <Story />
      </div>
    ),
  ],
};

const items = new Array(18).fill(0).map(() => ({
  id: faker.number.hex(2048),
  label: faker.animal.cat(),
  count: faker.number.int({ min: 0, max: 999 }),
}));

export default meta;
type Story = StoryObj<typeof Histogram>;

export const _Histogram: Story = {
  render: (args) => {
    return <Histogram {...args} items={items} />;
  },
  args: {},
};
