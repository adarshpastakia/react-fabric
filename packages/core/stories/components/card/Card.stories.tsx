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

import { Anchor, Button, Card, CardCover, Content, FlipContent, Footer, Header, Text } from "@/core/src";
import { FlipContentRef } from "@/core/src/components/card/FlipContent";
import { faker } from "@faker-js/faker";
import type { Meta, StoryObj } from "@storybook/react";
import { useRef } from "react";
import { Fragment } from "react/jsx-runtime";

const meta: Meta = {
  component: Card,
  subcomponents: { CardCover },
  title: "@core/components/Card",
  parameters: {
    layout: "centered",
    jest: ["core/tests/components/Card.test.tsx"],
  },
  decorators: [
    (Story) => (
      <div className="flex justify-center gap-4">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type CardStory = StoryObj<typeof Card>;

const content = faker.lorem.paragraphs(2);

export const _Card: CardStory = {
  render(args) {
    return (
      <Fragment>
        <Card {...args} title="Card Title" width={480}>
          <Header className="px-4">Header</Header>
          <Content>
            <Text>{content}</Text>
          </Content>
          <Footer className="px-4">Footer</Footer>
        </Card>
      </Fragment>
    );
  },
  args: {},
};

export const ClickableCard: CardStory = {
  render(args) {
    return (
      <Fragment>
        <Card {...args} title="Card Title" width={480} onClick={() => alert("Card was clicked")}>
          <Header className="px-4">Header</Header>
          <Content>
            <Text>{content}</Text>
            <div className="flex gap-2 mt-4">
              <Anchor onClick={(e) => (e?.stopPropagation(), alert("Anchor was clicked"))}>Inner link</Anchor>
              <Button onClick={(e) => (e?.stopPropagation(), alert("Button was clicked"))}>Inner button</Button>
            </div>
          </Content>
          <Footer className="px-4">Footer</Footer>
        </Card>
      </Fragment>
    );
  },
  args: {},
};

export const FlipCard: CardStory = {
  render: (args) => {
    const ref = useRef<FlipContentRef>(null);
    return (
      <Card {...args} width={480}>
        <Header>
          <Button data-testid="flipToggle" onClick={() => ref.current?.flipCard()}>
            Toggle Flip
          </Button>
        </Header>
        <FlipContent ref={ref}>
          <Content data-testid="frontContent">{content}</Content>
          <Content data-testid="backContent">
            <table>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>title</td>
                  <td>action</td>
                </tr>
              </tbody>
            </table>
          </Content>
        </FlipContent>
      </Card>
    );
  },
  args: {},
};
