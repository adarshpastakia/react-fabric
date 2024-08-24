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

import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Controller } from "../form/Controller";
import { type UploadHandler } from "../hooks/useFileUploader";
import { ArrayInput } from "../input/ArrayInput";
import { AvatarInput } from "../input/AvatarInput";
import { ColorInput } from "../input/ColorInput";
import { Input } from "../input/Input";
import { Number } from "../input/Number";
import { Range } from "../input/Range";
import { Switch } from "../input/Switch";
import { Textarea } from "../input/Textarea";
import { Select } from "../select/Select";
import { type SchemaType } from "../types/schema";
import { FileField } from "./FileField";

export const FormField = ({
  id,
  label,
  required,
  inline,
  prefix,
  autoFocus,
  defaultValue,
  fileUrl,
  uploadHandler,
  ...rest
}: SchemaType & {
  inline?: boolean;
  prefix?: string;
  autoFocus?: boolean;
  fileUrl?: (path: string) => string;
  uploadHandler?: UploadHandler;
}) => {
  const { t } = useTranslation();
  const fieldName = useMemo(
    () => [prefix, id].filter(Boolean).join("."),
    [id, prefix],
  );

  const E = useMemo(() => {
    if (rest.datatype === "number" || rest.datatype === "decimal")
      return Number;
    if (rest.datatype === "range") return Range;
    if (rest.datatype === "boolean") return Switch;
    if (rest.datatype === "text") return Textarea;
    if (rest.datatype === "color") return ColorInput;
    if (rest.datatype === "string" && rest.options) return Select;

    return Input;
  }, [rest.datatype]);

  const props = useMemo(() => {
    if (rest.datatype === "number")
      return {
        min: rest.min,
        max: rest.max,
        step: rest.step ?? 1,
      };
    if (rest.datatype === "decimal")
      return {
        min: rest.min,
        max: rest.max,
        step: rest.step ?? 0.1,
      };
    if (rest.datatype === "range")
      return {
        min: rest.min ?? 1,
        max: rest.max ?? 99,
        step: rest.step ?? 1,
        showValue: true,
        showLabels: true,
      };
    if (rest.datatype === "text") return { rows: 3 };
    if (rest.datatype === "color") return { showPicker: true };

    if (rest.datatype === "string" && rest.options)
      return {
        options: rest.options,
        multiple: rest.multiple,
        searchable: true,
      };

    return {};
  }, [rest]);

  if (rest.datatype === "avatar")
    return (
      uploadHandler && (
        <Controller name={fieldName}>
          <AvatarInput
            uploadHandler={uploadHandler}
            fileUrl={fileUrl}
            name={fieldName}
          />
        </Controller>
      )
    );

  if (rest.datatype === "file")
    return (
      uploadHandler && (
        <Controller name={fieldName}>
          <FileField
            uploadHandler={uploadHandler}
            inline={inline}
            label={label}
            id={id}
            {...rest}
          />
        </Controller>
      )
    );

  return rest.multiple && !("options" in rest) ? (
    <ArrayInput
      name={fieldName}
      label={t(label, label)}
      required={required}
      onAdd={() => ""}
    >
      <Controller>
        <E {...props} />
      </Controller>
    </ArrayInput>
  ) : (
    <Controller name={fieldName}>
      <E
        {...props}
        autoFocus={autoFocus}
        label={t(label, label)}
        placeholder={t(label, label)}
        required={required}
        inline={inline}
      />
    </Controller>
  );
};
