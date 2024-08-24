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

import { Button, Panel, ToggleButtonGroup } from "@react-fabric/core";
import type { Meta, StoryObj } from "@storybook/react";
import React, { useEffect, useState } from "react";
import { GenericChart } from "../src";
import coffeeJson from "./coffee";
import sankeyJson from "./sankey";

const meta: Meta<typeof GenericChart> = {
  component: GenericChart,
  title: "@charts/GenericChart",
  parameters: {
    layout: "centered",
    controls: { exclude: "children" },
  },
};

export default meta;
type Story = StoryObj<typeof GenericChart>;

export const TreeMap: Story = {
  render: (args) => {
    const [type, setType] = useState("treemap");
    const [series, setSeries] = useState<AnyObject>({});

    useEffect(() => {
      if (type === "treemap") {
        setSeries({
          id: "coffee-list",
          name: "Coffee list",
          type: "treemap",
          data: coffeeJson,
          universalTransition: true,
          leafDepth: 2,
          upperLabel: {
            show: true,
            height: 30,
          },
          levels: [
            {
              itemStyle: {
                borderColor: "#777",
                borderWidth: 0,
                gapWidth: 1,
              },
              upperLabel: {
                show: false,
              },
            },
            {
              colorSaturation: [0.35, 0.5],
              itemStyle: {
                borderWidth: 5,
                gapWidth: 1,
                borderColorSaturation: 0.6,
              },
            },
          ],
        });
      }
      if (type === "sunburst") {
        setSeries({
          id: "coffee-list",
          name: "Coffee list",
          type: "sunburst",
          radius: ["20%", "90%"],
          data: coffeeJson,
          universalTransition: true,
          levels: [
            {},
            {
              label: {
                rotate: "tangential",
              },
            },
            {
              r0: "35%",
              r: "70%",
              label: {
                align: "right",
              },
            },
            {
              label: {
                position: "outside",
              },
            },
          ],
        });
      }
    }, [type]);
    return (
      <Panel width="48rem" height="24rem" title="Generic chart" expandable>
        <GenericChart
          {...args}
          series={[series]}
          legend={{ show: false }}
          actions={
            <ToggleButtonGroup value={type} onChange={setType}>
              <Button
                value="treemap"
                icon="mdi mdi-view-dashboard-variant"
                aria-label="tree"
              />
              <Button
                value="sunburst"
                icon="mdi mdi-circle-double"
                aria-label="burst"
              />
            </ToggleButtonGroup>
          }
        />
      </Panel>
    );
  },
  args: {},
};

export const Sankey: Story = {
  render: (args) => {
    const [series, setSeries] = useState<AnyObject>({});

    useEffect(() => {
      setSeries({
        type: "sankey",
        emphasis: {
          focus: "adjacency",
        },
        nodeAlign: "right",
        data: sankeyJson.nodes,
        links: sankeyJson.links,
        lineStyle: {
          color: "source",
          curveness: 0.5,
        },
      });
    }, []);
    return (
      <Panel width="48rem" height="24rem" title="Generic chart" expandable>
        <GenericChart {...args} series={[series]} legend={{ show: false }} />
      </Panel>
    );
  },
  args: {},
};
