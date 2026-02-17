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

import { Viewport } from "@react-fabric/core";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { fn } from "storybook/test";
import { LexicalEditor } from "../src";
import json from "./demo.json";

const meta: Meta = {
  component: LexicalEditor,
  title: "@lexical/_Playground_",
  parameters: {
    layout: "fullscreen",
    controls: { exclude: "children" },
  },
};

export default meta;
type Story = StoryObj<typeof LexicalEditor>;

export const Playground: Story = {
  render: (args) => {
    const [lang, setLang] = useState<AnyObject>("json");
    return (
      <div className="min-h-[600px]">
        <Viewport>
          <LexicalEditor
            {...args}
            value={json}
            header={
              <div className="border-b-2 border-danger-500 px-8 py-2">
                Header Content
              </div>
            }
            footer={
              <div className="border-t-2 border-tint-500 px-8 py-1 text-xs">
                Footer Content
              </div>
            }
            coverPage={
              <table
                border={2}
                cellSpacing={4}
                cellPadding={4}
                style={{
                  tableLayout: "fixed",
                  width: "100%",
                  border: "1px solid #ccc",
                }}
              >
                <tbody>
                  <tr>
                    <td>Test</td>
                    <td>Test</td>
                    <td>Test</td>
                  </tr>
                </tbody>
              </table>
            }
          />
        </Viewport>
      </div>
    );
  },
  args: {
    onChange: fn(),
    onDirty: fn(),
  },
};
