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
import { MapSeries } from "../src";

const meta: Meta = {
  component: MapSeries,
  title: "@charts/MapSeries",
  parameters: {
    layout: "centered",
    controls: { exclude: "children" },
  },
};

export default meta;
type Story = StoryObj<typeof MapSeries>;

export const Example: Story = {
  render: (args) => {
    const [data, setData] = useState<AnyObject[]>([]);
    const loadData = useCallback(() => {
      setData(
        Array.from(Array(Math.ceil(24)), (_, i) => ({
          id: faker.address.countryCode("alpha-2"),
          count: faker.number.int({ min: 99, max: 499 }),
        })),
      );
    }, []);
    useEffect(() => {
      loadData();
    }, []);
    return (
      <Panel
        width="48rem"
        height="24rem"
        title="Map Series chart"
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
        <MapSeries {...args} series={data} />
      </Panel>
    );
  },
  args: {},
};
