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

import type { Meta, StoryObj } from "@storybook/react";
import { Col, Container, Content, Page, Row, Viewport } from "../../src";

const meta: Meta = {
  component: Container,
  subcomponents: { Row, Col } as AnyObject,
  title: "@core/Application",
  parameters: {
    layout: "fullscreen",
    controls: { exclude: /^(on.*|children|as)/ },
    jest: ["core/tests/Responsive.test.tsx"],
  },
};

export default meta;
type ResponsiveStory = StoryObj<typeof Container>;

export const _Responsive: ResponsiveStory = {
  render: (args) => {
    return (
      <Viewport>
        <Page paper>
          <Content>
            <Container {...args}>
              <Row>
                <Col flex="full" className="text-dimmed">
                  Auto sizing
                </Col>
                <Col className="bg-dimmed outline p-2">Auto content size</Col>
                <Col className="bg-dimmed outline p-2 w-96">Fixed size</Col>
                <Col flex="fill" className="bg-dimmed outline p-2">
                  Fill remaining
                </Col>
                <Col flex="full" className="bg-dimmed outline p-2">
                  Full width
                </Col>
              </Row>
              <Row>
                <Col flex="full" className="text-dimmed">
                  Col spans
                </Col>
                <Col className="bg-dimmed outline p-2 span-12">span-12</Col>
                <Col className="bg-dimmed outline p-2 span-1">span-1</Col>
                <Col className="bg-dimmed outline p-2 span-11">span-11</Col>
                <Col className="bg-dimmed outline p-2 span-2">span-2</Col>
                <Col className="bg-dimmed outline p-2 span-10">span-10</Col>
                <Col className="bg-dimmed outline p-2 span-3">span-3</Col>
                <Col className="bg-dimmed outline p-2 span-9">span-9</Col>
                <Col className="bg-dimmed outline p-2 span-4">span-4</Col>
                <Col className="bg-dimmed outline p-2 span-8">span-8</Col>
                <Col className="bg-dimmed outline p-2 span-5">span-5</Col>
                <Col className="bg-dimmed outline p-2 span-7">span-7</Col>
                <Col className="bg-dimmed outline p-2 span-6">span-6</Col>
                <Col className="bg-dimmed outline p-2 span-6">span-6</Col>
              </Row>
              <Row>
                <Col flex="fill" className="text-dimmed">
                  Responsive col spans
                </Col>
                <Col flex="auto" className="text-muted">
                  <span className="show-xs-only">xs 1 column</span>
                  <span className="show-sm-only">sm 2 columns</span>
                  <span className="show-md-only">md 3 columns</span>
                  <span className="show-lg-only">lg 4 columns</span>
                  <span className="show-xl-only">xl 6 columns</span>
                  <span className="show-2xl-only">2xl 12 columns</span>
                </Col>
              </Row>
              <Row>
                <Col className="h-8 bg-dimmed outline p-2 span-12 sm:span-6 md:span-4 lg:span-3 xl:span-2 2xl:span-1" />
                <Col className="h-8 bg-dimmed outline p-2 span-12 sm:span-6 md:span-4 lg:span-3 xl:span-2 2xl:span-1" />
                <Col className="h-8 bg-dimmed outline p-2 span-12 sm:span-6 md:span-4 lg:span-3 xl:span-2 2xl:span-1" />
                <Col className="h-8 bg-dimmed outline p-2 span-12 sm:span-6 md:span-4 lg:span-3 xl:span-2 2xl:span-1" />
                <Col className="h-8 bg-dimmed outline p-2 span-12 sm:span-6 md:span-4 lg:span-3 xl:span-2 2xl:span-1" />
                <Col className="h-8 bg-dimmed outline p-2 span-12 sm:span-6 md:span-4 lg:span-3 xl:span-2 2xl:span-1" />
                <Col className="h-8 bg-dimmed outline p-2 span-12 sm:span-6 md:span-4 lg:span-3 xl:span-2 2xl:span-1" />
                <Col className="h-8 bg-dimmed outline p-2 span-12 sm:span-6 md:span-4 lg:span-3 xl:span-2 2xl:span-1" />
                <Col className="h-8 bg-dimmed outline p-2 span-12 sm:span-6 md:span-4 lg:span-3 xl:span-2 2xl:span-1" />
                <Col className="h-8 bg-dimmed outline p-2 span-12 sm:span-6 md:span-4 lg:span-3 xl:span-2 2xl:span-1" />
                <Col className="h-8 bg-dimmed outline p-2 span-12 sm:span-6 md:span-4 lg:span-3 xl:span-2 2xl:span-1" />
                <Col className="h-8 bg-dimmed outline p-2 span-12 sm:span-6 md:span-4 lg:span-3 xl:span-2 2xl:span-1" />
              </Row>
            </Container>
          </Content>
        </Page>
      </Viewport>
    );
  },
  args: {},
};
