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

import { faker, fakerAR } from "@faker-js/faker";
import type { Meta, StoryObj } from "@storybook/react";
import { Fragment } from "react/jsx-runtime";
import { Callout, Col, Row, Text } from "../../../src";

const meta: Meta = {
  component: Callout,
  title: "@core/components/Callout",
  parameters: {
    layout: "centered",
    controls: { exclude: /^(on.*|children|as)/ },
    jest: ["core/tests/Callout.test.tsx"],
  },
  decorators: [
    (Story) => (
      <div className="max-w-2xl p-4">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type CalloutStory = StoryObj<typeof Callout>;

export const _Callout: CalloutStory = {
  render: (args) => {
    return (
      <Fragment>
        <Callout {...args}>
          <Text clamp={4}>{faker.lorem.sentences(2)}</Text>
        </Callout>
        <Callout {...args} title={fakerAR.commerce.productName()}>
          <Text clamp={4}>{fakerAR.lorem.sentences(2)}</Text>
        </Callout>
      </Fragment>
    );
  },
  args: {
    title: faker.commerce.productName(),
    icon: "mdi mdi-react",
  },
};

export const WithLegend: CalloutStory = {
  render: (args) => {
    return (
      <Fragment>
        <Callout {...args}>
          <Text clamp={4}>{faker.lorem.sentences(2)}</Text>
        </Callout>
      </Fragment>
    );
  },
  args: {
    title: faker.commerce.productName(),
    legend: faker.animal.cat(),
    icon: "mdi mdi-react",
    border: "dashed",
    color: "info",
  },
};

export const Colors: CalloutStory = {
  render: (args) => {
    return (
      <Row>
        <Col className="span-12" stretchContent>
          <Callout
            {...args}
            color="primary"
            title="Primary"
            icon="mdi mdi-react"
          >
            <Text clamp={4}>{faker.lorem.sentences(2)}</Text>
          </Callout>
        </Col>
        <Col className="span-12" stretchContent>
          <Callout {...args} color="accent" title="Accent" icon="mdi mdi-react">
            <Text clamp={4}>{faker.lorem.sentences(2)}</Text>
          </Callout>
        </Col>
        <Col className="span-12" stretchContent>
          <Callout
            {...args}
            color="info"
            title="Info"
            icon="mdi mdi-information-outline"
          >
            <Text clamp={4}>{faker.lorem.sentences(2)}</Text>
          </Callout>
        </Col>
        <Col className="span-12" stretchContent>
          <Callout
            {...args}
            color="danger"
            title="Danger"
            icon="mdi mdi-close-circle-outline"
          >
            <Text clamp={4}>{faker.lorem.sentences(2)}</Text>
          </Callout>
        </Col>
        <Col className="span-12" stretchContent>
          <Callout
            {...args}
            color="success"
            title="Sucess"
            icon="mdi mdi-check-circle-outline"
          >
            <Text clamp={4}>{faker.lorem.sentences(2)}</Text>
          </Callout>
        </Col>
        <Col className="span-12" stretchContent>
          <Callout
            {...args}
            color="warning"
            title="Warning"
            icon="mdi mdi-alert-outline"
          >
            <Text clamp={4}>{faker.lorem.sentences(2)}</Text>
          </Callout>
        </Col>
      </Row>
    );
  },
  args: {},
};