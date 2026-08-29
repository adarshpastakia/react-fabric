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

import { useFloatingTree } from "@floating-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Col, DropdownDismiss, Row } from "@react-fabric/core";
import { Controller, DateInput, Field, Form, Input, Number, Select, Switch, Textarea, type FormRef } from "@react-fabric/form";
import { isArray, isDefined, shortHash, yup } from "@react-fabric/utilities";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import type { FilterField, FilterObject, FilterValue } from "../types";
import { FIELD_TYPE, OPERATOR, TypeOperators } from "../types";
import { useFilterContext } from "./Context";

const FilterSchema = new yup.ObjectSchema({
  id: yup.string().required(),
  field: yup.string().required(),
  // type: yup.string().oneOf(Object.values(FIELD_TYPE)),
  operator: yup.string().required().oneOf(Object.values(OPERATOR)),
  negate: yup.boolean().optional(),
  label: yup.string(),
  value: yup
    .mixed<AnyObject[]>()
    .when("operator", {
      is: OPERATOR.EXISTS,
      then: (schema) => schema.optional(),
      otherwise: (schema) => schema.required(),
    })
    .when("operator", {
      is: OPERATOR.ANY,
      then: (schema) =>
        schema.test({
          name: "array-check",
          message: `\${path} is a required field`,
          test: (val = []) => val.length > 0,
        }),
    })
    .when("operator", {
      is: OPERATOR.ALL,
      then: (schema) =>
        schema.test({
          name: "array-check",
          message: `\${path} is a required field`,
          test: (val = []) => val.length > 0,
        }),
    })
    .when("operator", {
      is: OPERATOR.BETWEEN,
      then: (schema) =>
        schema.test({
          name: "array-check",
          message: `\${path} is a required field`,
          test: (val = []) => val.length > 0 && isDefined(val[0]) && isDefined(val[1]),
        }),
    })
    .when("operator", {
      is: OPERATOR.BETWEEN,
      then: (schema) =>
        schema.test({
          name: "array-check",
          message: `\${path} min max`,
          test: (val = []) => val.length > 0 && val[0] < val[1],
        }),
    }),
});

type FilterSchemaType = yup.InferType<typeof FilterSchema>;

export function FilterForm({
  filter,
  onChange,
  onRemove,
}: {
  filter?: FilterObject;
  onRemove?: () => void;
  onChange?: (filter: FilterObject) => void;
}) {
  const { t } = useTranslation("searchbar");
  const tree = useFloatingTree();
  const { fields = [] } = useFilterContext();
  const inputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<FormRef<FilterSchemaType>>(null);
  const [values, setValues] = useState<FilterSchemaType | undefined>(() => filter as never);

  console.log(values);

  useEffect(() => {
    if (filter && "field" in filter && filter.field) {
      formRef.current?.setValues(filter as never);
    } else {
      formRef.current?.setValues({
        id: shortHash(),
        field: "",
        operator: OPERATOR.EXISTS,
      });
    }
  }, [filter]);

  useEffect(() => {
    const tmr = setTimeout(() => {
      inputRef.current?.focus();
    }, 100);

    return () => {
      clearTimeout(tmr);
    };
  }, []);

  const field = useMemo<FilterField | undefined>(() => {
    if (!values?.field) return undefined;
    return fields.find((f) => f.field === values?.field);
    // eslint-disable-next-line @eslint-react/exhaustive-deps
  }, [values]);

  const operators = useMemo(() => {
    if (field == null) return [OPERATOR.EXISTS];
    formRef.current?.setValue("operator", TypeOperators[field.type][0]);
    return [...TypeOperators[field.type]];
  }, [field]);

  const valueInput = useMemo(() => {
    if (values?.operator === OPERATOR.EXISTS && values?.value !== undefined) {
      formRef.current?.setValue("value", undefined);
    }
    if (field?.type === FIELD_TYPE.STRING) {
      if (values?.operator && [OPERATOR.ALL, OPERATOR.ANY].includes(values.operator)) {
        if (!isArray(values?.value)) formRef.current?.setValue("value", []);
      } else {
        if (isArray(values?.value)) formRef.current?.setValue("value", undefined);
      }
    }
    if (
      field?.type === FIELD_TYPE.DATE ||
      field?.type === FIELD_TYPE.DATETIME ||
      field?.type === FIELD_TYPE.NUMBER ||
      field?.type === FIELD_TYPE.DECIMAL
    ) {
      if (values?.operator === OPERATOR.BETWEEN) {
        if (!isArray(values.value)) formRef.current?.setValue("value", []);
      } else {
        if (isArray(values?.value)) formRef.current?.setValue("value", undefined);
      }
    }
    if (
      field?.type === FIELD_TYPE.BOOLEAN &&
      values?.operator &&
      [OPERATOR.IS, OPERATOR.EQ].includes(values.operator) &&
      values?.value === undefined
    ) {
      formRef.current?.setValue("value", false);
    }

    if (field == null || !values?.operator) return null;
    if (values?.operator === OPERATOR.EXISTS) return null;
    if (field?.type === FIELD_TYPE.BOOLEAN) {
      return (
        <Field label={t("label.value")} data-plain="true">
          <Controller name="value">
            <Switch />
          </Controller>
        </Field>
      );
    }
    if (field?.type === FIELD_TYPE.STRING || field?.type === FIELD_TYPE.ID) {
      if ([OPERATOR.ALL, OPERATOR.ANY].includes(values?.operator)) {
        return (
          <Controller name="value">
            <Select
              multiple
              searchable
              allowCreate
              allowClear
              options={field.values ?? []}
              label={t("label.value")}
              onQuery={field.onSearch}
            />
          </Controller>
        );
      } else if (!!field.onSearch || field.values?.length) {
        return (
          <Controller name="value">
            <Select
              searchable
              allowCreate
              allowClear
              options={field.values ?? []}
              label={t("label.value")}
              onQuery={field.onSearch}
            />
          </Controller>
        );
      } else {
        return (
          <Controller name="value">
            <Input label={t("label.value")} allowClear />
          </Controller>
        );
      }
    }
    if (field.type === FIELD_TYPE.TEXT) {
      return (
        <Controller name="value">
          <Textarea rows={3} label={t("label.value")} allowClear />
        </Controller>
      );
    }
    if (field?.type === FIELD_TYPE.DECIMAL || field?.type === FIELD_TYPE.NUMBER) {
      const step = field.type === FIELD_TYPE.DECIMAL ? 0.1 : 1;
      if (values?.operator === OPERATOR.BETWEEN) {
        return (
          <Controller name="value">
            <Field label={t("label.value")}>
              <Controller name="value[0]">
                <Number step={step} allowClear />
              </Controller>
              <span className="p-2 text-muted">{`≷`}</span>
              <Controller name="value[1]">
                <Number step={step} allowClear />
              </Controller>
            </Field>
          </Controller>
        );
      } else {
        return (
          <Controller name="value">
            <Number label={t("label.value")} step={step} allowClear />
          </Controller>
        );
      }
    }
    if (field?.type === FIELD_TYPE.DATE || field?.type === FIELD_TYPE.DATETIME) {
      const type = field.type === FIELD_TYPE.DATETIME ? "datetime" : "date";
      if (values?.operator === OPERATOR.BETWEEN) {
        return (
          <Controller name="value">
            <Field label={t("label.value")}>
              <Controller name="value[0]">
                <DateInput type={type} allowClear />
              </Controller>
              <span className="p-2 text-muted">{`≷`}</span>
              <Controller name="value[1]">
                <DateInput type={type} allowClear />
              </Controller>
            </Field>
          </Controller>
        );
      } else {
        return (
          <Controller name="value">
            <DateInput type={type} allowClear />
          </Controller>
        );
      }
    }
    // eslint-disable-next-line @eslint-react/exhaustive-deps
  }, [field, values]);

  const handleSubmit = useCallback(
    (model: FilterSchemaType) => {
      const filter: FilterObject = {
        id: model.id,
        field: model.field,
        negate: model.negate,
        operator: model.operator,
        value: model.value as FilterValue,
        label: model.label,
        type: field?.type,
      };
      onChange?.(filter);
      tree?.events.emit("close");
    },
    // eslint-disable-next-line @eslint-react/exhaustive-deps
    [field, onChange],
  );

  return (
    <Form<FilterSchemaType>
      formRef={formRef}
      resolver={yupResolver(FilterSchema)}
      defaultValues={values}
      onChange={setValues}
      onSubmit={handleSubmit}
    >
      <div className="w-lg">
        <Row>
          <Col flex="fill">
            <Controller name="field">
              <Select<FilterField>
                required
                searchable
                ref={inputRef}
                label={t("label.field")}
                options={fields}
                labelProperty="label"
                valueProperty="field"
                groupProperty="type"
              />
            </Controller>
          </Col>
          <Col flex="content" className="text-center">
            <label className="block py-0.5 text-sm">{t("label.exclude")}</label>
            <Controller name="negate">
              <Switch color="danger" />
            </Controller>
          </Col>
          <Col flex="content" className="basis-28">
            <Controller name="operator">
              <Select label={t("label.operator")} options={operators} renderer={(v) => t(`operator.${v}`)} />
            </Controller>
          </Col>
        </Row>
        <br />
        {valueInput}
        <br />
        <Controller name="label">
          <Input
            label={t("label.label")}
            placeholder={t("label.label")}
            decorateEnd={!filter?.label && <span className="text-sm opacity-65 pe-4">Optional</span>}
          />
        </Controller>
        <div className="flex mt-4 justify-end gap-1 sticky bottom-1 bg-default">
          {onRemove && (
            <div className="flex-1">
              <DropdownDismiss>
                <Button data-dropdown-dismiss="true" variant="link" size="sm" color="danger" onClick={onRemove}>
                  {t("label.remove")}
                </Button>
              </DropdownDismiss>
            </div>
          )}
          <DropdownDismiss>
            <Button data-dropdown-dismiss="true" variant="link" size="sm">
              {t("label.cancel")}
            </Button>
          </DropdownDismiss>
          <Button type="submit" variant="solid" size="sm">
            {t("label.apply")}
          </Button>
        </div>
      </div>
    </Form>
  );
}
