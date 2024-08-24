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
import { Button, Card, EmptyContent, Panel } from "../../../src";

const meta: Meta = {
  component: EmptyContent,
  title: "@core/components/Empty Content",
  parameters: {
    layout: "centered",
    controls: { exclude: /^(on.*|children|as)/ },
    jest: ["core/tests/EmptyContent.test.tsx"],
  },
  decorators: [
    (Story) => (
      <div className="max-w-xl p-4">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type EmptyStory = StoryObj<typeof EmptyContent>;

export const _EmptyContent: EmptyStory = {
  render: (args) => {
    return (
      <Fragment>
        <EmptyContent {...args}>
          <Button variant="link">Previous</Button>
          <Button variant="link">Next</Button>
        </EmptyContent>
      </Fragment>
    );
  },
  args: {
    title: faker.commerce.productName(),
    message: faker.commerce.productDescription(),
  },
};

export const CardEmpty: EmptyStory = {
  render: (args) => {
    return (
      <Card>
        <EmptyContent {...args}>
          <Button variant="link">Previous</Button>
          <Button variant="link">Next</Button>
        </EmptyContent>
      </Card>
    );
  },
  args: {
    icon: "mdi mdi-react",
    title: faker.commerce.productName(),
    message: faker.commerce.productDescription(),
  },
};

export const PanelEmpty: EmptyStory = {
  render: (args) => {
    return (
      <Panel title="Panel Title">
        <EmptyContent {...args}>
          <Button variant="link">Previous</Button>
          <Button variant="link">Next</Button>
        </EmptyContent>
      </Panel>
    );
  },
  args: {
    title: faker.commerce.productName(),
    message: faker.commerce.productDescription(),
  },
};
