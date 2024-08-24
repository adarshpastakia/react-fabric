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

import { Button, Content } from "@react-fabric/core";
import { Form } from "@react-fabric/form";
import { yup } from "@react-fabric/utilities";
import { useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { DatePart } from "../types";
import { RelativeInput } from "./RelativeInput";

const schema = yup.object({
  from: yup.object({
    diff: yup.number().required().label("Difference"),
    op: yup.string().required().oneOf(["+", "-"]).label("Operator"),
    part: yup
      .string()
      .required()
      .oneOf(Object.values(DatePart))
      .label("Date part"),
  }),
  to: yup.object({
    diff: yup.number().required().label("Difference"),
    op: yup.string().required().oneOf(["+", "-"]).label("Operator"),
    part: yup
      .string()
      .required()
      .oneOf(Object.values(DatePart))
      .label("Date part"),
  }),
});

export const RelativePanel = ({ value = "", onChange }: KeyValue) => {
  const { t } = useTranslation("superdate");

  const handleChange = useCallback(
    ({ to, from }: yup.InferType<typeof schema>) => {
      onChange(
        `${from.part}${from.op}${from.diff}|${to.part}${to.op}${to.diff}`,
      );
    },
    [],
  );

  const defaultValue = useMemo(() => {
    if (value?.match(/^(\$\w+)([+-])(\d+)?\|(\$\w+)([+-])(\d+)?$/)) {
      const [, part, op, diff = "0"] =
        value
          .split("|")
          .shift()
          .match(/^(\$\w+)([+-])(\d+)?$/) ?? [];
      const [, toPart, toOp, toDiff = "0"] =
        value
          .split("|")
          .pop()
          .match(/^(\$\w+)([+-])(\d+)?$/) ?? [];
      return {
        from: { part, op, diff },
        to: { part: toPart, op: toOp, diff: toDiff },
      };
    }
  }, [value]);

  return (
    <Content>
      <div className="scale-90">
        <Form
          schema={schema}
          defaultValues={defaultValue}
          onSubmit={handleChange}
        >
          <RelativeInput label={t("label.from")} prefix="from" />
          <RelativeInput label={t("label.to")} prefix="to" />
          <div className="flex justify-end">
            <Button variant="solid" type="submit">
              {t("label.apply")}
            </Button>
          </div>
        </Form>
      </div>
    </Content>
  );
};
