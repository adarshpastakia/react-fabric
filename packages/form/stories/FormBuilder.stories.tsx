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

import {
  Button,
  CoreIcons,
  Footer,
  Header,
  Icon,
  Title,
  Viewport,
} from "@react-fabric/core";
import { CodeEditor } from "@react-fabric/monaco";
import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";
import axios from "axios";
import { http, HttpResponse } from "msw";
import { useCallback, useState } from "react";
import { Form, FormSchema, useFormBuilder } from "../src";

const meta: Meta<typeof Form> = {
  component: Form,
  title: "@form/_Form Builder_",
  parameters: {
    layout: "fullscreen",
    controls: { exclude: "children" },
    msw: {
      handlers: [
        http.post("/api/upload", async ({ request }) => {
          const body = await request.formData();
          const file = body.get("file") as File;
          return HttpResponse.json({
            path: "storage://fullpath/" + file?.name,
          });
        }),
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Form>;

const defaultSchema: FormSchema[] = [
  { id: "avatar", label: "Avatar", datatype: "avatar", required: true },
  { id: "name", label: "Name", datatype: "string", required: true },
  {
    id: "age",
    label: "Age",
    datatype: "number",
    required: true,
    min: 16,
    max: 65,
  },
  {
    id: "skills",
    label: "skills",
    datatype: "string",
    required: true,
    multiple: true,
  },
  {
    id: "range",
    label: "range",
    datatype: "range",
    min: 1,
    max: 10,
    step: 0.5,
    defaultValue: [2, 4],
  },
  {
    id: "notes",
    label: "Notes",
    datatype: "text",
  },
  {
    id: "option",
    label: "Option",
    datatype: "string",
    options: ["One", "Two", "Three"],
  },
  {
    id: "files",
    label: "Files",
    datatype: "file",
    required: true,
    multiple: true,
  },
  {
    id: "agree",
    label: "Agreement?",
    datatype: "boolean",
  },
];

export const FormBuilder: Story = {
  render: (args) => {
    const http = axios.create({});
    const uploadHandler = (data: FormData, config: AnyObject) =>
      http
        .postForm("/api/upload", data, config)
        .then((resp) => resp.data?.path ?? "pathfor file");

    const [json, setJson] = useState(JSON.stringify(defaultSchema, null, 4));
    const [badJson, setBadJson] = useState(false);
    const [schema, setSchema] = useState<AnyObject[]>(defaultSchema);
    const [formValues, setFormValues] = useState<AnyObject>({
      name: "Person name",
      age: 36,
      avatar: "storage://fullpath/avatar.png",
      files: [
        {
          path: "storage://fullpath/test.png",
          filename: "test.png",
          size: 800,
          mime: "image/png",
        },
      ],
    });

    const { formDef, schemaDef } = useFormBuilder(schema, {
      uploadHandler,
    });

    const changeSchema = useCallback(() => {
      try {
        setBadJson(false);
        setSchema(JSON.parse(json ?? "[]"));
      } catch {
        setBadJson(true);
      }
    }, [json]);

    return (
      <div className="min-h-[600px]">
        <Viewport>
          <Header flex className="px-2 py-1 bg-base">
            <Title>Form Builder</Title>
            <div className="p-2 bg-tint-100 font-medium rounded">
              <Icon icon="mdi mdi-flask" />
              <span>Experimental</span>
            </div>
          </Header>
          <div className="grid grid-cols-4 overflow-hidden area-content p-2 gap-2">
            <div
              className="grid col-span-2 rounded-capped outline overflow-hidden bg-base"
              style={{ gridTemplate: `"content" 1fr "foot" auto / 1fr` }}
            >
              <CodeEditor value={json} onChange={setJson} />
              <Footer flex justify="end" className="border-t p-2">
                <Button
                  iconColor="danger"
                  icon={badJson ? CoreIcons.alert : undefined}
                  variant="solid"
                  onClick={changeSchema}
                >
                  Apply
                </Button>
              </Footer>
            </div>
            <div className="overflow-auto bg-base outline rounded-capped">
              <Form
                schema={schemaDef}
                defaultValues={formValues}
                onChange={setFormValues}
                onSubmit={action("onSubmit")}
              >
                <div className="p-6">{formDef}</div>

                <Footer
                  flex
                  justify="end"
                  className="sticky bottom-0 border-t bg-base px-6 py-2"
                >
                  <Button type="reset" variant="link">
                    Reset
                  </Button>
                  <Button type="submit" variant="solid">
                    Submit
                  </Button>
                </Footer>
              </Form>
            </div>
            <div className="overflow-auto p-6 bg-base outline rounded-capped">
              <pre>{JSON.stringify(formValues, null, 4)}</pre>
            </div>
          </div>
        </Viewport>
      </div>
    );
  },
  args: {},
};
