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
  mdiAccount,
  mdiAccountSupervisor,
  mdiAlien,
  mdiBug,
  mdiCactus,
  mdiCastAudioVariant,
  mdiFolder,
} from "@mdi/js";
import { JsonViewer } from "@react-fabric/data";
import { Aside, Button, Content, Viewport } from "@react-fabric/core";
import type { Meta, StoryObj } from "@storybook/react";
import { useRef, useState } from "react";
import { SigmaGraph } from "../src";
import { GraphRef, RawGraph } from "../src/types";

const meta: Meta = {
  component: SigmaGraph,
  title: "@graph/_Playground_",
  parameters: {
    layout: "fullscreen",
    controls: { exclude: "children" },
  },
};

export default meta;
type Story = StoryObj;

const nodeKeys = faker.helpers.uniqueArray(
  () => faker.string.hexadecimal({ length: 9 }),
  faker.number.int({ min: 18, max: 45 }),
);
const nodeIcons = [
  mdiAlien,
  mdiAccount,
  mdiCactus,
  mdiBug,
  mdiCastAudioVariant,
];
const rawGraph: RawGraph = {
  nodes: [
    {
      key: "root",
      attributes: {
        x: -1,
        y: -1,
        border: 2,
        borderColor: faker.color.rgb(),
        iconColor: faker.color.rgb(),
        path: mdiAccountSupervisor,
      },
    },
  ],
  edges: [],
};

nodeKeys.forEach((key) => {
  rawGraph.nodes.push({
    key,
    attributes: {
      label: faker.word.sample(),
      x: faker.number.int({ min: -1, max: 1 }),
      y: faker.number.int({ min: -1, max: 1 }),
      border: 2,
      borderColor: faker.color.rgb(),
      iconColor: faker.color.rgb(),
      path: faker.helpers.arrayElement(nodeIcons),
      badge: [
        {
          position: faker.helpers.arrayElement([
            "top",
            "left",
            "right",
            "top-left",
            "top-right",
            "bottom-left",
            "bottom-right",
          ]),
          type: faker.helpers.arrayElement([
            "exclaim",
            "star",
            "thumbUp",
            "thumbDown",
          ]),
          iconColor: "#fff",
          color: faker.color.rgb(),
        },
      ],
    },
  });
  new Array(faker.number.int({ min: 1, max: 4 })).fill(0).forEach(() => {
    rawGraph.edges.push({
      key: "root::" + faker.string.hexadecimal({ length: 9 }),
      source: "root",
      target: key,
      attributes: {
        color: faker.color.rgb(),
        label: faker.word.sample(),
        arrow: faker.helpers.arrayElement(["target"]) as any,
        size: faker.number.float({ min: 0.25, max: 4 }),
      },
    });
  });
});

export const Playground: Story = {
  render: (args) => {
    const graphRef = useRef<GraphRef>(null);
    const [selection, setSelection] = useState<string[]>([]);
    return (
      <div className="min-h-[600px]">
        <Viewport>
          <SigmaGraph
            ref={graphRef}
            data={rawGraph}
            onSelectChange={setSelection}
          />
          <Aside align="end">
            <Content>
              <Button
                disabled={selection.length === 0}
                onClick={() => {
                  graphRef.current?.graph.groupNodes(
                    faker.string.hexadecimal(),
                    selection,
                    {
                      label: faker.word.sample(),
                      color: faker.color.rgb(),
                      iconColor: faker.color.rgb(),
                      path: mdiFolder,
                      x: 0.1,
                      y: 0.1,
                    },
                  );
                }}
              >
                Group
              </Button>
              <hr />
              {selection.map((key) => (
                <div key={key}>
                  <JsonViewer
                    json={graphRef.current?.graph.getNodeAttributes(key) ?? {}}
                  />
                </div>
              ))}
            </Content>
          </Aside>
        </Viewport>
      </div>
    );
  },
  args: {},
};
