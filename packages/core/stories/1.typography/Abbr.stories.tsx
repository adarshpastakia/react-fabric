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
import { Abbr, Mark, Text, Title } from "../../src";

const meta: Meta = {
  component: Abbr,
  title: "@core/Typography",
  parameters: {
    controls: { exclude: /^(on.*|children|as)/ },
    jest: ["core/tests/Abbr.test.tsx"],
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
type AbbrStory = StoryObj<typeof Abbr>;

const paras = faker.lorem.sentences(10) + "\n\n" + fakerAR.lorem.sentences(10);

const abbrs: AnyObject = faker.helpers
  .arrayElements(paras.replaceAll("\n", "").split(" ").filter(Boolean), 9)
  .map((t) => [t, faker.animal.cat(), faker.color.rgb()]);

export const _Abbr: AbbrStory = {
  render: (args) => {
    return (
      <Text>
        <Abbr {...args}>{paras}</Abbr>
      </Text>
    );
  },
  args: { abbr: abbrs },
};
