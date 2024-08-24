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

import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";
import { CodeEditor } from "../src";

import {
  Button,
  Header,
  ToggleButtonGroup,
  Viewport,
} from "@react-fabric/core";
import { useState } from "react";
import json from "../../../package.json";
import css from "./demo.css.md";
import html from "./demo.html.md";
import md from "./demo.md";

const meta: Meta<typeof CodeEditor> = {
  component: CodeEditor,
  title: "@monaco/_Playground_",
  parameters: {
    layout: "fullscreen",
    controls: { exclude: "children" },
  },
};

export default meta;
type Story = StoryObj<typeof CodeEditor>;

const values: KeyValue = {
  json,
  html,
  css,
  md,
};

export const Playground: Story = {
  render: (args) => {
    const [lang, setLang] = useState<AnyObject>("json");
    return (
      <div className="min-h-[600px]">
        <Viewport>
          <Header className="py-1 px-2 bg-base">
            <ToggleButtonGroup
              value={lang}
              onChange={setLang}
              size="sm"
              variant="link"
            >
              <Button value="json">JSON</Button>
              <Button value="html">HTML</Button>
              <Button value="css">CSS</Button>
              <Button value="md">Markdown</Button>
            </ToggleButtonGroup>
          </Header>
          <CodeEditor
            {...args}
            language={lang}
            value={values[lang]}
            onChange={action("onChange")}
          />
        </Viewport>
      </div>
    );
  },
  args: {},
};
