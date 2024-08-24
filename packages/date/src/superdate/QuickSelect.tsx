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

import { Content, Divider } from "@react-fabric/core";
import { Form } from "@react-fabric/form";
import { yup } from "@react-fabric/utilities";
import { useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { DatePart } from "../types";
import { RelativeInput } from "./RelativeInput";

const DEFAULT_PRESETS = [
  { value: "$day", label: "superdate:now.$day" },
  { value: "$day-1", label: "superdate:prev.$day" },
  { value: "$day+1", label: "superdate:next.$day" },
  { value: "$week", label: "superdate:now.$week" },
  { value: "$week-1", label: "superdate:prev.$week" },
  { value: "$week+1", label: "superdate:next.$week" },
  { value: "$month", label: "superdate:now.$month" },
  { value: "$month-1", label: "superdate:prev.$month" },
  { value: "$month+1", label: "superdate:next.$month" },
  { value: "$quarter", label: "superdate:now.$quarter" },
  { value: "$quarter-1", label: "superdate:prev.$quarter" },
  { value: "$quarter+1", label: "superdate:next.$quarter" },
  { value: "$year", label: "superdate:now.$year" },
  { value: "$year-1", label: "superdate:prev.$year" },
  { value: "$year+1", label: "superdate:next.$year" },
];

const schema = yup.object({
  rel: yup.object({
    diff: yup.number().required().label("Difference"),
    op: yup.string().required().oneOf(["+", "-"]).label("Operator"),
    part: yup
      .string()
      .required()
      .oneOf(Object.values(DatePart))
      .label("Date part"),
  }),
});

export const QuickSelect = ({
  presets = DEFAULT_PRESETS,
  value = "",
  onChange,
}: KeyValue) => {
  const { t } = useTranslation();

  const handleChange = useCallback(
    ({ rel: { part, diff, op } }: yup.InferType<typeof schema>) => {
      onChange(`${part}${op}${diff}|${DatePart.NOW}`);
    },
    [],
  );

  const defaultValue = useMemo(() => {
    if (value?.endsWith(DatePart.NOW)) {
      const [, part, op, diff = "0"] =
        value
          .split("|")
          .shift()
          .match(/^(\$\w+)([+-])(\d+)?$/) ?? [];
      return {
        rel: { part, op, diff },
      };
    }
  }, [value]);

  return (
    <Content>
      <div
        className="inline-block origin-left rtl:origin-right"
        style={{ zoom: 0.85 }}
      >
        <Form
          schema={schema}
          onSubmit={handleChange}
          defaultValues={defaultValue}
        >
          <RelativeInput
            label={t("superdate:label.relative")}
            prefix="rel"
            showApply
          />
        </Form>
      </div>
      <Divider>{t("superdate:label.preset")}</Divider>
      <div className="grid grid-cols-3 flex-row text-sm gap-2">
        {presets.map((pr: KeyValue) => (
          <button
            key={pr.value}
            className="link appearance-none text-start"
            onClick={() => onChange?.(pr.value)}
          >
            {t(pr.label, { defaultValue: pr.label })}
          </button>
        ))}
      </div>
    </Content>
  );
};
