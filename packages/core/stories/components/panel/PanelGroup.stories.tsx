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
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Fragment } from "react/jsx-runtime";
import {
  Aside,
  Button,
  Content,
  Footer,
  Panel,
  PanelGroup,
  Section,
} from "../../../src";

const meta: Meta = {
  component: PanelGroup,
  title: "@core/components/Panel",
  parameters: {
    layout: "centered",
    controls: { exclude: /^(on.*|children|as)/ },
    jest: ["core/tests/Panel.test.tsx"],
  },
};

export default meta;
type PanelGroupStory = StoryObj<typeof PanelGroup>;

export const _PanelGroup: PanelGroupStory = {
  render: (args) => {
    return (
      <div className="max-w-96">
        <PanelGroup {...args}>
          <Panel title={faker.animal.cat()}>
            <Content>{faker.lorem.paragraphs(2)}</Content>
            <Footer flex justify="end" className="px-2 py-1">
              <Button variant="link">Cancel</Button>
              <Button variant="solid">OK</Button>
            </Footer>
          </Panel>
          <Panel title={faker.animal.cat()}>
            <Content>{faker.lorem.paragraphs(2)}</Content>
            <Footer flex justify="end" className="px-2 py-1">
              <Button variant="link">Cancel</Button>
              <Button variant="solid">OK</Button>
            </Footer>
          </Panel>
          <Panel title={faker.animal.cat()}>
            <Content>{faker.lorem.paragraphs(2)}</Content>
            <Footer flex justify="end" className="px-2 py-1">
              <Button variant="link">Cancel</Button>
              <Button variant="solid">OK</Button>
            </Footer>
          </Panel>
        </PanelGroup>
      </div>
    );
  },
  args: {
    onActiveChange: fn(),
  },
};

export const AsideContent: PanelGroupStory = {
  render: (args) => {
    return (
      <div
        className="max-w-2xl w-screen h-screen max-h-96 grid outline"
        style={{ gridTemplate: '"content" 1fr / 1fr' }}
      >
        <Section>
          <Aside width="24rem" title="Aside Panel Group" collapsable flyout>
            <PanelGroup {...args}>
              <Panel
                title={faker.animal.cat()}
                headerClassName="border-b border-b-info-500"
              >
                <Content>{faker.lorem.paragraphs(2)}</Content>
                <Footer flex justify="end" className="px-2 py-1">
                  <Button variant="link">Cancel</Button>
                  <Button variant="solid">OK</Button>
                </Footer>
              </Panel>
              <Panel
                title={faker.animal.cat()}
                headerClassName="border-b border-b-success-500"
              >
                <Content>{faker.lorem.paragraphs(2)}</Content>
                <Footer flex justify="end" className="px-2 py-1">
                  <Button variant="link">Cancel</Button>
                  <Button variant="solid">OK</Button>
                </Footer>
              </Panel>
              <Panel
                title={faker.animal.cat()}
                headerClassName="border-b border-b-danger-500"
              >
                <Content>{faker.lorem.paragraphs(2)}</Content>
                <Footer flex justify="end" className="px-2 py-1">
                  <Button variant="link">Cancel</Button>
                  <Button variant="solid">OK</Button>
                </Footer>
              </Panel>
              <Panel
                title={faker.animal.cat()}
                headerClassName="border-b border-b-warning-500"
              >
                <Content>{faker.lorem.paragraphs(2)}</Content>
                <Footer flex justify="end" className="px-2 py-1">
                  <Button variant="link">Cancel</Button>
                  <Button variant="solid">OK</Button>
                </Footer>
              </Panel>
            </PanelGroup>
          </Aside>
        </Section>
      </div>
    );
  },
  args: {
    onActiveChange: fn(),
  },
};
