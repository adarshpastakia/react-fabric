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

import { Button } from "@react-fabric/core";
import { Controller, Field, Number, Select } from "@react-fabric/form";
import { useTranslation } from "react-i18next";
import { DatePart } from "../types";

export const RelativeInput = ({ label, prefix, showApply }: KeyValue) => {
  const { t } = useTranslation("superdate");

  return (
    <Field label={label} className="mb-2">
      <Controller name={`${prefix}.diff`}>
        <Number width="5rem" min={1} max={99} />
      </Controller>
      <Controller name={`${prefix}.part`}>
        <Select
          width="6rem"
          options={Object.values(DatePart)
            .slice(1)
            .map((dt) => ({
              id: dt,
              label: t(`label.${dt}`),
            }))}
        />
      </Controller>
      <Controller name={`${prefix}.op`}>
        <Select
          width="7rem"
          options={[
            { id: "-", label: t("label.-") },
            { id: "+", label: t("label.+") },
          ]}
        />
      </Controller>
      {showApply && (
        <Button variant="solid" type="submit">
          {t("label.apply")}
        </Button>
      )}
    </Field>
  );
};
