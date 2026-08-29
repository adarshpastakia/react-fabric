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

import { Text, Title } from "@/core/src";
import { faker } from "@faker-js/faker";
import type { Meta, StoryObj } from "@storybook/react";
import { Fragment } from "react/jsx-runtime";

const meta: Meta = {
  component: Text,
  tags: ["autodocs"],
  title: "@core/typography/Text",
  parameters: {
    layout: "centered",
    jest: ["core/tests/typography/Text.test.tsx"],
  },
  decorators: [
    (Story) => (
      <div className="max-w-lg">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type TextStory = StoryObj<typeof Text>;

export const _Text: TextStory = {
  render(args) {
    return (
      <Fragment>
        <Title>San Serif</Title>
        <Text {...args} className="font-sans" />
        <Title>Serif</Title>
        <Text {...args} className="font-serif" />
        <Title>Mono</Title>
        <Text {...args} className="font-mono" />
      </Fragment>
    );
  },
  args: {
    children: `${faker.lorem.sentence()}
${faker.helpers
  .uniqueArray(
    () =>
      faker.internet.emoji({
        types: ["food", "object"],
      }),
    9,
  )
  .join(" ")}
${faker.lorem.paragraph()}`,
  },
};

export const Clamped: TextStory = {
  render(args) {
    return <Text {...args} clamp={2} />;
  },
  args: {
    children: faker.lorem.paragraphs(),
  },
};

export const Tester: TextStory = {
  tags: ["!autodocs"],
  render: (args) => <Text {...args} />,
  args: {},
};
