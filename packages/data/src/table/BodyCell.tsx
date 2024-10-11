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

import classNames from "classnames";
import { type ColumnType } from "./types";

export const BodyCell = ({
  column,
  item,
}: {
  column: ColumnType;
  item: KeyValue;
}) => {
  return (
    <div
      className="overflow-hidden bg-inherit start-0"
      style={{
        width: column.width ?? "12rem",
        minWidth: column.minWidth ?? "2rem",
        maxWidth: column.maxWidth ?? "32rem",
      }}
    >
      <div
        className={classNames(
          "px-2 py-1 border-e truncate",
          column.align === "center" && "text-center",
          column.align === "end" && "text-end",
        )}
      >
        {column.renderer?.(item[column.id], item) ?? item[column.id]}
      </div>
    </div>
  );
};
