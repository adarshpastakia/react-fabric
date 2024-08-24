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

import { Button, Icon, ProgressBar } from "@react-fabric/core";
import { FileUtil, Format } from "@react-fabric/utilities";
import { Fragment } from "react";
import { type UploadHandler, useFileUploader } from "../hooks/useFileUploader";
import { Field } from "../input/Field";
import { HiddenInput } from "../input/Hidden";
import { type FileSchema } from "../types/schema";

export const FileField = ({
  uploadHandler,
  inline,
  label,
  accept,
  multiple = false,
  value,
  ...rest
}: Partial<FileSchema> & {
  value?: AnyObject;
  inline?: boolean;
  fileUrl?: (path: string) => string;
  uploadHandler: UploadHandler;
}) => {
  const { pending, files, list, upload, remove } = useFileUploader(
    async (data, config) => await uploadHandler?.(data, config),
    value,
    multiple,
  );

  return (
    <Fragment>
      <Field plain inline={inline} label={label} className="inline-block">
        <HiddenInput hiddenValue={multiple ? list : list?.[0]} {...rest} />
        <span>
          <Button
            badge={pending > 0 ? `${pending}` : undefined}
            data-ref="filebtn"
          >
            <Fragment>
              <span>Add file</span>
              <input
                type="file"
                accept={accept}
                multiple={multiple}
                className="absolute inset-0 opacity-0 z-5"
                onChange={(e) => [
                  upload(e.target.files),
                  (e.target.value = ""),
                ]}
              />
            </Fragment>
          </Button>
        </span>
      </Field>
      <br />
      <div className="bg-alternate">
        {files.map((file, idx) => (
          <div key={idx} className="px-2 py-1">
            <div className="flex flex-nowrap gap-1 items-start">
              <div className="flex-1 truncate pe-2">
                {file.filename}
                <br />
                <span className="text-xs">{FileUtil.mime(file.mime)}</span>
                <span className="text-xs px-1">{Format.bytes(file.size)}</span>
              </div>
              <div className="flex-initial truncate px-2">
                {file.error && (
                  <span className="text-danger-600">{file.error}</span>
                )}
              </div>
              {file.progress && (
                <Icon
                  icon="mdi mdi-stop-circle"
                  bg="danger"
                  color="white"
                  size="sm"
                  className="p-[2px]"
                  aria-label="abort"
                  onClick={() => file.abort?.()}
                />
              )}
              {!file.progress && (
                <Icon
                  icon="mdi mdi-trash-can"
                  color="danger"
                  size="sm"
                  aria-label="remove"
                  onClick={() => remove(file.key)}
                />
              )}
            </div>
            {file.progress && (
              <ProgressBar animate value={file.progress * 100} size="xxs" />
            )}
          </div>
        ))}
      </div>
    </Fragment>
  );
};
