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
import { Fragment } from "react/jsx-runtime";
import { Title } from "../../src";

const meta: Meta = {
  component: Title,
  title: "@core/Typography",
  parameters: {
    controls: { exclude: /^(on.*|children|as)/ },
    jest: ["core/tests/Typpography.test.tsx"],
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
type TitleStory = StoryObj<typeof Title>;

export const Titles: TitleStory = {
  render: (args) => {
    return (
      <Fragment>
        <Title {...args} as="h1" size={undefined}>
          Heading 1
        </Title>
        <Title {...args} as="h2" size={undefined}>
          Heading 2
        </Title>
        <Title {...args} as="h3" size={undefined}>
          Heading 3
        </Title>
        <Title {...args} as="h4" size={undefined}>
          Heading 4
        </Title>
        <Title {...args} as="h5" size={undefined}>
          Heading 5
        </Title>
        <Title {...args} as="h6" size={undefined}>
          Heading 6
        </Title>
        <Title {...args}>Normal Title</Title>
      </Fragment>
    );
  },
  args: {},
};
