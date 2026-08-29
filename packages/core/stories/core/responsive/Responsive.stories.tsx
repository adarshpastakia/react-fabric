/**
 * React Fabric
 * @version 1.0.0
 * @license MIT
 * @copyright 2024 Adarsh Pastakia
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import { Col, Container, Content, Row, Viewport } from "@/core/src";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  component: Container,
  tags: ["autodocs"],
  subcomponents: { Row, Col },
  title: "@core/core/Responsive",
  parameters: {
    layout: "fullscreen",
    jest: ["core/tests/core/Responsive.test.tsx"],
  },
  decorators: [
    (Story) => (
      <div className="min-h-96">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type ResponsiveStory = StoryObj<typeof Container>;

export const _Responsive: ResponsiveStory = {
  render: (args) => {
    return (
      <Viewport>
        <Content>
          <Container {...args}>
            <Row>
              <Col flex="full" className="text-dimmed">
                Auto sizing
              </Col>
              <Col flex="content" className="bg-dimmed outline p-2">
                Auto content size <code className="block">flex: content</code>
              </Col>
              <Col flex="initial" className="bg-dimmed outline p-2 w-96">
                Fixed size <code className="block">flex: initial/w: 24rem</code>
              </Col>
              <Col flex="fill" className="bg-dimmed outline p-2">
                Fill remaining <code className="block">flex: fill</code>
              </Col>
              <Col flex="full" className="bg-dimmed outline p-2">
                Full width <code className="block">flex: full</code>
              </Col>
            </Row>
            <Row>
              <Col flex="full" className="text-dimmed">
                Col spans
              </Col>
              <Col className="bg-dimmed truncate outline p-2 span-12">span-12</Col>
              <Col className="bg-dimmed truncate outline p-2 span-1">span-1</Col>
              <Col className="bg-dimmed truncate outline p-2 span-11">span-11</Col>
              <Col className="bg-dimmed truncate outline p-2 span-2">span-2</Col>
              <Col className="bg-dimmed truncate outline p-2 span-10">span-10</Col>
              <Col className="bg-dimmed truncate outline p-2 span-3">span-3</Col>
              <Col className="bg-dimmed truncate outline p-2 span-9">span-9</Col>
              <Col className="bg-dimmed truncate outline p-2 span-4">span-4</Col>
              <Col className="bg-dimmed truncate outline p-2 span-8">span-8</Col>
              <Col className="bg-dimmed truncate outline p-2 span-5">span-5</Col>
              <Col className="bg-dimmed truncate outline p-2 span-7">span-7</Col>
              <Col className="bg-dimmed truncate outline p-2 span-6">span-6</Col>
              <Col className="bg-dimmed truncate outline p-2 span-6">span-6</Col>
            </Row>
            <Row>
              <Col flex="fill" className="text-dimmed">
                Responsive col spans
              </Col>
              <Col flex="content" className="text-muted">
                <span className="not-2xs:hidden">2xs</span>
                <span className="not-xs:hidden">xs 1 column</span>
                <span className="not-sm:hidden">sm 2 columns</span>
                <span className="not-md:hidden">md 3 columns</span>
                <span className="not-lg:hidden">lg 4 columns</span>
                <span className="not-xl:hidden">xl 6 columns</span>
                <span className="not-2xl:hidden">2xl 12 columns</span>
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
          <hr className="my-4" />
          <div className="h-8 bg-dimmed outline p-2 text-center text-dimmed not-sm:hidden">
            Show on `sm` only <code>not-sm:hidden</code>
          </div>
          <div className="h-8 bg-dimmed outline p-2 text-center text-dimmed max-md:hidden">
            Show on `md` and above <code>max-md:hidden</code>
          </div>
        </Content>
      </Viewport>
    );
  },
  args: {},
};
