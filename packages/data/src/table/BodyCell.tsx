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

import { DateDisplay } from "@react-fabric/date";
import { Format, getByPath, isTrue } from "@react-fabric/utilities";
import classNames from "classnames";
import { useMemo } from "react";
import { useTableContext } from "./Context";
import {
  COL_DEFAULT_WIDTH,
  COL_MAX_WIDTH,
  COL_MIN_WIDTH,
  type TableColumn,
} from "./types";

export const BodyCell = ({
  column,
  item,
  index,
}: {
  column: TableColumn;
  item: KeyValue;
  index: number;
}) => {
  const { widths } = useTableContext();

  const width = useMemo(
    () => widths.get(column.id.toString()) ?? column.width,
    [widths, column],
  );

  const content = useMemo(() => {
    const value = getByPath(item, column.id.toString());
    if (column.renderer != null) {
      return column.renderer(item[column.id], item, index);
    }
    if (column.dataType === "boolean") {
      const map = column.valueMap ?? { true: "Yes", false: "no" };
      return map[`${isTrue(value) ? "true" : "false"}`];
    }
    if (column.valueMap != null) {
      if (column.dataType === "string" && value in column.valueMap) {
        return column.valueMap[value];
      }
    }
    if (["date", "time", "datetime"].includes(column.dataType ?? "")) {
      return <DateDisplay date={value} format={column.format} />;
    }
    if (column.dataType === "number") {
      return Format.number(value, column.format);
    }
    return value ?? "";
  }, [item, column]);

  return (
    <div
      className="overflow-hidden bg-inherit start-0 border-e group/table-col"
      style={{
        width: width ?? COL_DEFAULT_WIDTH,
        minWidth: column.minWidth ?? COL_MIN_WIDTH,
        maxWidth: column.maxWidth ?? COL_MAX_WIDTH,
      }}
    >
      <div
        className={classNames(
          "px-2 py-1",
          column.className,
          column.truncate && "truncate",
          column.align === "center" && "text-center",
          column.align === "end" && "text-end",
        )}
      >
        {content}
      </div>
    </div>
  );
};
