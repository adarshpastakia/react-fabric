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
import { Col, Row } from "@react-fabric/core";
import type { Meta, StoryObj } from "@storybook/react";
import { Thumbnail } from "../src";

const meta: Meta<typeof Thumbnail> = {
  component: Thumbnail,
  title: "@media/Thumbnail",
  parameters: {
    layout: "centered",
    controls: { exclude: "children" },
  },
};

export default meta;
type Story = StoryObj<typeof Thumbnail>;

export const _Thumbnail: Story = {
  render: (args) => {
    return (
      <Row>
        <Col>
          <p>Valid image</p>
          <Thumbnail {...args} src={faker.image.url()} />
        </Col>
        <Col>
          <p>Fallback image</p>
          <Thumbnail {...args} src="badurl.png" fallback={faker.image.url()} />
        </Col>
        <Col>
          <p>Default icon</p>
          <Thumbnail {...args} src="badurl.png" />
        </Col>
      </Row>
    );
  },
  args: {},
};
