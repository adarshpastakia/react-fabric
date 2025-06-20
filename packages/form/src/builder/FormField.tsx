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

import { isEmpty } from "@react-fabric/utilities";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Controller } from "../form/Controller";
import { type UploadHandler } from "../hooks/useFileUploader";
import { ArrayInput } from "../input/ArrayInput";
import { AvatarInput } from "../input/AvatarInput";
import { ColorInput } from "../input/ColorInput";
import { DateInput } from "../input/DateInput";
import { Input } from "../input/Input";
import { Number } from "../input/Number";
import { RangeSlider } from "../input/RangeSlider";
import { Switch } from "../input/Switch";
import { Textarea } from "../input/Textarea";
import { Select } from "../select/Select";
import { type BaseSelectProps } from "../types";
import { DATA_TYPES, type SchemaType } from "../types/schema";
import { FileField } from "./FileField";

export const FormField = ({
  id,
  label,
  required,
  inline,
  prefix,
  autoFocus,
  optionLists,
  fileUrl,
  uploadHandler,
  ...rest
}: SchemaType & {
  inline?: boolean;
  prefix?: string;
  autoFocus?: boolean;
  optionLists?: KeyValue<BaseSelectProps<any>>;
  fileUrl?: (path: string) => string;
  uploadHandler?: UploadHandler;
}) => {
  const { t } = useTranslation();
  const fieldName = useMemo(
    () => [prefix, id].filter(Boolean).join("."),
    [id, prefix],
  );

  const hasOptions = useMemo(
    () =>
      rest.datatype === DATA_TYPES.STRING &&
      ((rest.optionList === "--CUSTOM--" && !isEmpty(rest.options)) ||
        !isEmpty(optionLists?.[rest.optionList ?? ""])),
    [rest],
  );

  const E = useMemo<AnyObject>(() => {
    if (rest.datatype === DATA_TYPES.NUMBER) return Number;
    if (rest.datatype === DATA_TYPES.RANGE) return RangeSlider;
    if (rest.datatype === DATA_TYPES.BOOL) return Switch;
    if (rest.datatype === DATA_TYPES.TEXT) return Textarea;
    if (rest.datatype === DATA_TYPES.DATE) return DateInput;
    if (rest.datatype === DATA_TYPES.DATETIME) return DateInput;
    if (rest.datatype === DATA_TYPES.COLOR) return ColorInput;
    if (hasOptions) return Select;

    return Input;
  }, [rest.datatype, hasOptions]);

  const props = useMemo(() => {
    if (rest.datatype === DATA_TYPES.NUMBER)
      return {
        min: rest.min,
        max: rest.max,
        step: rest.step ?? 1,
      };
    if (rest.datatype === DATA_TYPES.RANGE)
      return {
        min: rest.min ?? 1,
        max: rest.max ?? 99,
        step: rest.step ?? 1,
        showValue: true,
        showLabels: true,
      };
    if (rest.datatype === DATA_TYPES.DATE)
      return {
        min: rest.min,
        max: rest.max,
        type: "date",
      };
    if (rest.datatype === DATA_TYPES.DATETIME)
      return {
        min: rest.min,
        max: rest.max,
        type: "datetime",
      };
    if (rest.datatype === DATA_TYPES.TEXT) return { rows: 3 };
    if (rest.datatype === DATA_TYPES.COLOR) return { showPicker: true };

    if (rest.datatype === DATA_TYPES.STRING && hasOptions)
      return {
        multiple: rest.multiple,
        allowCreate: rest.allowCustom,
        searchable: true,
        ...(optionLists?.[rest.optionList ?? ""] ?? { options: rest.options }),
      };

    return {};
  }, [rest, hasOptions, optionLists]);

  if (rest.datatype === DATA_TYPES.AVATAR)
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

  if (rest.datatype === DATA_TYPES.FILE)
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

  return rest.multiple && !hasOptions ? (
    <ArrayInput
      name={fieldName}
      label={t(`fb.${id}`, label || id)}
      required={required}
      onAdd={() => String("")}
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
        label={t(`fb.${id}`, label || id)}
        placeholder={t(`fb.${id}`, label || id)}
        required={required}
        inline={inline}
      />
    </Controller>
  );
};
