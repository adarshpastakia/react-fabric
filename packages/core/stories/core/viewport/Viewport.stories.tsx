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

import { Aside, Content, Footer, Header, Layout, Viewport } from "@/core/src";
import { faker } from "@faker-js/faker";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const meta: Meta = {
  component: Viewport,
  tags: ["autodocs"],
  title: "@core/core/Viewport",
  parameters: {
    layout: "fullscreen",
    jest: ["core/tests/core/Viewport.test.tsx"],
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
type ViewportStory = StoryObj<typeof Viewport>;

export const _Viewport: ViewportStory = {
  render: ({ showLoader, ...args }: any) => {
    const [color, setColor] = useState(() => faker.color.rgb());
    return (
      <Viewport>
        <Header className="p-4 bg-default border-b border-soft">Viewport header</Header>
        <div className="area-breadcrumbs px-4 py-1 bg-default border-b border-soft">Viewport breadcrumbs</div>
        <Layout>
          <Layout className="m-2 ms-0 rounded-2xl paper bg-content">
            <Header {...args} className="area-header p-4 border-b border-soft">
              This is the Viewport content header.
            </Header>
            <Content>This is the Viewport content area.</Content>
          </Layout>
          <Aside
            {...args}
            margin={2}
            enableFlyout
            title="Tester"
            icon="icon-[mdi--home]"
            classNames={{
              root: "rounded-2xl",
            }}
          >
            <Content>
              <h3>This is the Viewport side panel.</h3>
            </Content>
          </Aside>
          <Aside
            {...args}
            align="end"
            title="Tester"
            margin={2}
            icon="icon-[mdi--home]"
            classNames={{
              root: "rounded-2xl",
            }}
          >
            <Content>This is the Viewport side panel.</Content>
          </Aside>
        </Layout>
        <Footer className="p-1 text-xs bg-dark text-white">Viewport footer</Footer>
      </Viewport>
    );
  },
  args: {
    resizeable: true,
    collapsable: true,
    showLoader: true,
  } as any,
};
