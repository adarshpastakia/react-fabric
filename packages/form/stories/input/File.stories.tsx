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

import { Button, Icon, ProgressBar } from "@/core/src";
import { FileInput, useFileUploader } from "@/form/src";
import { FileUtil, Format } from "@/utilities/src";
import type { Meta, StoryObj } from "@storybook/react";
import axios from "axios";
import { http, HttpResponse } from "msw";
import { Fragment } from "react/jsx-runtime";
import { fn } from "storybook/test";

const meta: Meta = {
  component: FileInput,
  title: "@form/Inputs",
  parameters: {
    layout: "centered",
    jest: ["form/tests/File.test.tsx"],
    msw: {
      handlers: [
        http.post("/api/upload", () => {
          return HttpResponse.json({
            path: "xyz",
          });
        }),
      ],
    },
  },
  decorators: [
    (Story) => (
      <div className="max-w-lg w-screen">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type FileStory = StoryObj<typeof FileInput>;

export const _FileInput: FileStory = {
  render: (args) => {
    return <FileInput {...args} />;
  },
  args: {
    label: "File input",
    placeholder: "File input...",
    allowClear: true,
    onChange: fn(),
    onEnterPressed: fn(),
  },
};

export const FileUploader = {
  render: () => {
    const http = axios.create({});
    const { pending, files, upload, remove } = useFileUploader(
      (data, config) => http.postForm("/api/upload", data, config).then((resp) => resp.data?.path ?? "pathfor file"),
      undefined,
      { multiple: true, onChange: (v) => (fn()(v), console.log(v)) },
    );

    return (
      <div>
        <div className="inline-block">
          <Button>
            <Fragment>
              <span>Add file</span>
              <input
                type="file"
                multiple
                className="absolute inset-0 pointer-events-auto opacity-0 z-5"
                onChange={(e) => [upload(e.target.files), (e.target.value = "")]}
              />
            </Fragment>
          </Button>
        </div>
        <br />
        <div>
          {files.map((file, idx) => (
            <div key={idx} className="w-96 mb-4">
              <div className="flex flex-nowrap gap-1 items-center">
                <div className="flex-1 truncate">
                  {file.file?.name ?? file.filename}
                  <br />
                  <span className="text-xs">{FileUtil.mime(file.mime)}</span>
                </div>
                <div>{Format.bytes(file.size)}</div>
                {file.progress && (
                  <button onClick={() => file.abort?.()}>
                    <Icon
                      icon="icon-[mdi--stop-circle]"
                      bg="danger"
                      color="white"
                      size="sm"
                      className="p-0.5"
                      aria-label="abort"
                    />
                  </button>
                )}
                {!file.progress && (
                  <button onClick={() => remove(file.key)}>
                    <Icon icon="icon-[mdi--trash-can]" color="danger" size="sm" aria-label="remove" />
                  </button>
                )}
              </div>
              {file.progress && <ProgressBar animate value={file.progress * 100} size="xxs" />}
            </div>
          ))}
        </div>
      </div>
    );
  },
  args: {},
};
