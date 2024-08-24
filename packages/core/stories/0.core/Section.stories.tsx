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
import { fn } from "@storybook/test";
import {
  Section,
  Page,
  Text,
  Viewport,
  Aside,
  Content,
  Header,
} from "../../src";

const meta: Meta = {
  component: Section,
  title: "@core/Application",
  parameters: {
    layout: "fullscreen",
    controls: { exclude: /^(on.*|children|as)/ },
    jest: ["core/tests/Section.test.tsx"],
  },
};

export default meta;
type SectionStory = StoryObj<typeof Section>;

const fakeParas = [
  ...new Array(10)
    .fill("")
    .map(
      () =>
        faker.lorem.sentences(10) +
        "\n" +
        faker.lorem.sentences(10) +
        "\n" +
        faker.lorem.sentences(10),
    ),
  ...new Array(10).fill("").map(() => fakerAR.lorem.sentences(30)),
];

export const _Section: SectionStory = {
  render: (args) => {
    return (
      <div className="min-h-[600px]">
        <Viewport>
          <Page paper>
            <Aside>
              <Content>Page level aside</Content>
            </Aside>
            <Section {...args}>
              <Header className="p-4 bg-dimmed">Inner section header</Header>
              <Aside>
                <Content>Inner section level aside</Content>
              </Aside>
              <Content>
                {fakeParas.map((p, i) => (
                  <Text clamp={3} key={i} align="justify">
                    {p}
                  </Text>
                ))}
              </Content>
            </Section>
          </Page>
        </Viewport>
      </div>
    );
  },
  args: {},
};
