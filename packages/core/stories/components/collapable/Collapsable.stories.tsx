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
import { Fragment } from "react/jsx-runtime";
import { Badge, Collapsable, Content, Text, Title } from "../../../src";

const meta: Meta = {
  component: Collapsable,
  title: "@core/components/Collapsable",
  parameters: {
    layout: "centered",
    controls: { exclude: /^(on.*|children|as)/ },
    jest: ["core/tests/Collapsable.test.tsx"],
  },
  decorators: [
    (Story) => (
      <div className="max-w-2xl w-screen p-4">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type CollapsableStory = StoryObj<typeof Collapsable>;

export const _Collapsable: CollapsableStory = {
  render: (args) => {
    return (
      <Fragment>
        <Collapsable {...args}>
          <Title>{faker.commerce.productName()}</Title>
          <Content>
            <p>{faker.commerce.productDescription()}</p>
            <p>{faker.lorem.sentences(2)}</p>
          </Content>
        </Collapsable>
      </Fragment>
    );
  },
  args: {},
};

export const Multiple: CollapsableStory = {
  render: (args) => {
    return (
      <div className="divide-y outline rounded-capped">
        <Collapsable {...args}>
          <p>{faker.commerce.productName()}</p>
          <Content className="p-2">
            <p>{faker.commerce.productDescription()}</p>
            <p>{faker.lorem.sentences(2)}</p>
          </Content>
        </Collapsable>
        <Collapsable {...args}>
          <p>{faker.commerce.productName()}</p>
          <Content className="p-2">
            <p>{faker.commerce.productDescription()}</p>
            <p>{faker.lorem.sentences(2)}</p>
          </Content>
        </Collapsable>
        <Collapsable {...args}>
          <p>{faker.commerce.productName()}</p>
          <Content className="p-2">
            <p>{faker.commerce.productDescription()}</p>
            <p>{faker.lorem.sentences(2)}</p>
          </Content>
        </Collapsable>
      </div>
    );
  },
  args: { iconAlign: "end" },
};
