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

import { EmptyContent } from "@react-fabric/core";
import { isEmpty, isNil, yup } from "@react-fabric/utilities";
import { Fragment, useMemo } from "react";
import { FormField } from "../builder/FormField";
import { type BaseSelectProps } from "../types";
import { DATA_TYPES, type FormSchema, type SchemaDef } from "../types/schema";
import { type UploadHandler } from "./useFileUploader";

const makeYupField = (field: SchemaDef) => {
  let yupField: AnyObject = yup.string().trim();
  if (field.datatype === DATA_TYPES.SCHEMA) {
    const child: yup.ObjectShape = Object.fromEntries(
      field.schema.map((field) => [field.id, makeYupField(field)]),
    );
    yupField = yup.object(child);
  }
  if (field.datatype === DATA_TYPES.BOOL) {
    yupField = yup.boolean();
    if (field.required)
      yupField = yupField.test({
        test: (value: boolean) => !!value,
      });
  }
  if (
    field.datatype === DATA_TYPES.NUMBER ||
    field.datatype === DATA_TYPES.RANGE
  ) {
    yupField = yup.number();
    !isNil(field.min) && (yupField = yupField.min(field.min));
    !isNil(field.max) && (yupField = yupField.max(field.max));

    if (field.datatype === DATA_TYPES.RANGE) yupField = yup.array(yupField);
  }
  if (field.datatype === DATA_TYPES.STRING) {
    field.options &&
      !field.allowCustom &&
      (yupField = yupField.oneOf(field.options));
    field.regex && (yupField = yupField.matches(new RegExp(field.regex)));
  }

  if (field.datatype === DATA_TYPES.FILE) {
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

/**
 * useFormBuilder hook to create a form definition based on a schema.
 * It generates a Yup validation schema and a form definition component.
 *
 * @param {FormSchema} schema - The schema defining the form fields.
 * @param {Object} options - Optional parameters for the form builder.
 * @returns An object containing the form definition and the Yup validation schema.
 *
 * @example
 * ```jsx
 * const { formDef, schemaDef } = useFormBuilder(schema, {
 *   prefix: "form",
 *   inline: true,
 *   fileUrl: (path) => `/files/${path}`,
 *   uploadHandler: async (file) => {
 *    // handle file upload
 *   },
 *  optionLists: {
 *    // define option lists for select fields
 *  }
 * * });
 * <FormBuilder
 *   schema={schemaDef}
 *   onSubmit={(data) => console.log(data)}
 * >
 *   {formDef}
 * </FormBuilder>
 * ```
 */
export const useFormBuilder = <T extends AnyObject = string>(
  schema: FormSchema,
  options: {
    prefix?: string;
    inline?: boolean;
    fileUrl?: (path: string) => string;
    uploadHandler?: UploadHandler;
    optionLists?: KeyValue<BaseSelectProps<T>>;
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
          {field.datatype === DATA_TYPES.SCHEMA ? null : (
            <FormField
              {...field}
              autoFocus={idx === 0}
              fileUrl={options.fileUrl}
              optionLists={options.optionLists}
              uploadHandler={options.uploadHandler}
              inline={options.inline}
              prefix={options.prefix}
            />
          )}
        </div>
      ))}
      {filteredSchema.length === 0 && (
        <EmptyContent message="No schema defined" />
      )}
    </Fragment>
  );

  return {
    formDef,
    schemaDef,
  };
};
