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

import { isEmpty, isNil, yup } from "@react-fabric/utilities";
import { Fragment, useMemo } from "react";
import { FormField } from "../builder/FormField";
import { type FormSchema } from "../types/schema";
import { type UploadHandler } from "./useFileUploader";

const makeYupField = (field: FormSchema) => {
  let yupField: AnyObject = yup.string();
  if (field.datatype === "schema") {
    const child: yup.ObjectShape = Object.fromEntries(
      field.schema.map((field) => [field.id, makeYupField(field)]),
    );
    yupField = yup.object(child);
  }
  if (field.datatype === "boolean") yupField = yup.boolean();
  if (
    field.datatype === "decimal" ||
    field.datatype === "number" ||
    field.datatype === "range"
  ) {
    yupField = yup.number();
    !isNil(field.min) && (yupField = yupField.min(field.min));
    !isNil(field.max) && (yupField = yupField.max(field.max));

    if (field.datatype === "range") yupField = yup.array(yupField);
  }
  if (field.datatype === "string") {
    field.options && (yupField = yupField.oneOf(field.options));
    field.regex && (yupField = yupField.matches(new RegExp(field.regex)));
  }

  if (field.datatype === "file") {
    yupField = yup
      .object({
        filename: yup.string().required(),
        path: yup.string().required(),
      })
      .unknown(true);
    if (field.required) {
      yupField = yupField.test(
        "is-empty",
        {
          key: "form:yup.empty",
          values: { path: field.id, label: field.label },
        },
        (value: AnyObject) => !isEmpty(value),
      );
    }
  }

  if (field.required) {
    yupField = yupField.required();
  }

  if (field.multiple) {
    yupField = yup.array(yupField);
    field.required && (yupField = yupField.required().min(1));
  }

  return yupField.label(field.label);
};

export const useFormBuilder = (
  schema: FormSchema[],
  options: {
    prefix?: string;
    inline?: boolean;
    fileUrl?: (path: string) => string;
    uploadHandler?: UploadHandler;
  } = {},
) => {
  const filteredSchema = useMemo(
    () => schema.filter?.((schm) => !!schm.id) ?? [],
    [schema],
  );
  const schemaDef = yup.object(
    Object.fromEntries(
      filteredSchema.map((field) => [field.id, makeYupField(field)]),
    ),
  );

  const formDef = (
    <Fragment>
      {filteredSchema.map((field, idx) => (
        <div className="mb-4" key={field.id}>
          {field.datatype === "schema" ? null : (
            <FormField
              {...field}
              autoFocus={idx === 0}
              fileUrl={options.fileUrl}
              uploadHandler={options.uploadHandler}
              inline={options.inline}
              prefix={options.prefix}
            />
          )}
        </div>
      ))}
    </Fragment>
  );

  return {
    formDef,
    schemaDef,
  };
};
