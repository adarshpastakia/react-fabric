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
import { Button, Panel } from "@react-fabric/core";
import type { Meta, StoryObj } from "@storybook/react";
import { useCallback, useEffect, useState } from "react";
import { DataSeries } from "../src";

const meta: Meta<typeof DataSeries> = {
  component: DataSeries,
  title: "@charts/DataSeries",
  parameters: {
    layout: "centered",
    controls: { exclude: "children" },
  },
};

export default meta;
type Story = StoryObj<typeof DataSeries>;

export const Example: Story = {
  render: (args) => {
    const [data, setData] = useState<AnyObject>({});
    const loadData = useCallback(() => {
      const categories = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
      setData({
        categoryAxisName: "Months",
        valueAxisName: "Items",
        categories,
        data: [
          {
            id: faker.string.alpha(5),
            label: faker.animal.dog(),
            values: categories.map(() =>
              faker.number.int({ min: 100, max: 500 }),
            ),
          },
          {
            id: faker.string.alpha(5),
            label: faker.animal.dog(),
            values: categories.map(() =>
              faker.number.int({ min: 100, max: 500 }),
            ),
          },
          {
            id: faker.string.alpha(5),
            label: faker.animal.dog(),
            values: categories.map(() =>
              faker.number.int({ min: 100, max: 500 }),
            ),
          },
        ],
      });
    }, []);
    useEffect(() => {
      loadData();
    }, []);
    return (
      <Panel
        width="48rem"
        height="24rem"
        title="Data Series chart"
        expandable
        actions={
          <Button
            aria-label="loadData"
            variant="link"
            icon="mdi mdi-refresh"
            onClick={loadData}
          />
        }
      >
        <DataSeries {...args} {...data} />
      </Panel>
    );
  },
  args: {},
};
