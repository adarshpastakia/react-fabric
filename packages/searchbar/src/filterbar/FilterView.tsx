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

import { Button, Copy } from "@react-fabric/core";
import { isArray } from "@react-fabric/utilities";
import { Fragment, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { type FilterObject, OPERATOR } from "../types";

export const FilterView = ({
  filter,
  onRemove,
}: {
  filter: FilterObject;
  onRemove: () => void;
}) => {
  const { t } = useTranslation("searchbar");

  const view = useMemo(() => {
    if ("query" in filter)
      return JSON.stringify(JSON.parse(filter.query ?? "{}"), null, 2);

    if ("field" in filter) {
      let value = filter.value?.toString();

      if (filter.operator === OPERATOR.BETWEEN && isArray(filter.value)) {
        value = `[${filter.value?.join(" - ")}]`;
      }

      if (filter.operator === OPERATOR.IN && isArray(filter.value)) {
        value = `[${filter.value?.join(", ")}]`;
      }

      return (
        <Fragment>
          {filter.negate && <b>NOT&nbsp;</b>}
          <span>{filter.field}</span>
          <b>&nbsp;{t(`operator.${filter.operator}`)}&nbsp;</b>
          <div>{value}</div>
        </Fragment>
      );
    }
    return "";
  }, [filter]);

  return (
    <div className="p-2 bg-base relative">
      {"query" in filter && (
        <div className="absolute top-2 end-2 z-10">
          <Copy size="sm" text={view as AnyObject} />
        </div>
      )}
      <pre className="overflow-auto bg-base outline text-sm p-2 max-h-[24rem] max-w-[48rem] min-w-[24rem]">
        {view}
      </pre>
      {!filter.required && (
        <Button
          size="sm"
          variant="link"
          color="danger"
          data-dropdown-dismiss="true"
          onClick={onRemove}
        >
          {t("label.remove")}
        </Button>
      )}
    </div>
  );
};
