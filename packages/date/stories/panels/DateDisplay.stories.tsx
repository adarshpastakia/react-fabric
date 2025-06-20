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

import { Col, Menu, MenuItem, Row } from "@react-fabric/core";
import type { Meta, StoryObj } from "@storybook/react";
import { DateDisplay, DateDuration } from "../../src";

const meta: Meta = {
  component: DateDisplay,
  subcomponents: { DateDuration } as AnyObject,
  title: "@date/Date Display",
  parameters: {
    layout: "centered",
    controls: {
      exclude: "children",
      matchers: {
        date: /value|min|max/,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof DateDisplay>;

export const _DateDisplay: Story = {
  render: (args) => {
    return (
      <div>
        <Row>
          <Col className="span-6">Simple date</Col>
          <Col className="span-6">
            <DateDisplay {...args} className="flex-1 whitespace-nowrap" />
          </Col>
          <Col className="span-6">Formatted date</Col>
          <Col className="span-6">
            <DateDisplay
              {...args}
              className="flex-1 whitespace-nowrap"
              format="P p"
            />
          </Col>
          <Col className="span-6">With tooltip</Col>
          <Col className="span-6">
            <DateDisplay
              {...args}
              className="flex-1 whitespace-nowrap"
              showAlternateDate
            />
          </Col>
          <Col className="span-6">With dropdown menu</Col>
          <Col className="span-6">
            <DateDisplay
              {...args}
              className="flex-1 whitespace-nowrap"
              format="P p"
            >
              <Menu>
                <MenuItem label="± 1 Hour" />
                <MenuItem label="± 1 Day" />
                <MenuItem label="± 1 Week" />
              </Menu>
            </DateDisplay>
          </Col>
        </Row>
      </div>
    );
  },
  args: {
    date: new Date(),
  },
};
