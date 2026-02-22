/*
 * React Fabric
 * @version: 1.0.0
 *
 *
 * The MIT License (MIT)
 * Copyright (c) 2026 Adarsh Pastakia
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

import { Footer } from "@react-fabric/core";
import { getByPath } from "@react-fabric/utilities";
import classNames from "classnames";
import { useMemo } from "react";
import { usePagination } from "../hooks/usePagination";
import { Pagination } from "../pagination/Pagination";

interface Props<T = KeyValue> {
  data: T[];
  columns: Array<{
    id: keyof T;
    label?: string;
    width?: number | string;
    maxWidth?: number | string;
    align?: "start" | "center" | "end";
    className?: string;
    headRenderer?: React.ReactNode;
    renderer?: (value: any, row: T, index: number) => React.ReactNode;
  }>;
  /**
   * Number of pagination buttons to show, default is 25
   * If set to 0, pagination will be hidden
   */
  paginationSize?: number;

  className?: string;
}

export const HtmlTable = <T extends KeyValue = KeyValue>({
  data,
  columns,
  paginationSize = 25,
  className,
}: Props<T>) => {
  const paginator = usePagination({
    totalRecords: data.length,
    perPage: paginationSize,
  });

  const startIndex = useMemo(
    () => paginator.page * paginationSize,
    [paginator.page, paginationSize],
  );

  const dataPage = useMemo(
    () =>
      paginationSize > 0
        ? data.slice(startIndex, startIndex + paginationSize)
        : data,
    [data, paginationSize, startIndex],
  );

  return (
    <div className={className}>
      <table className="table-fixed border-spacing-1 border-separate w-full text-sm">
        <thead className="sticky top-0 z-1">
          <tr>
            {columns.map((col, idx) => (
              <th
                key={idx}
                className="text-start truncate bg-accent-100 px-2 py-1 font-medium text-accent-800"
                style={{ width: col.width, maxWidth: col.maxWidth }}
              >
                {col.headRenderer ?? col.label ?? " "}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-alternate">
          {dataPage.map((row, idx) => (
            <tr key={idx}>
              {columns.map((col, cidx) => (
                <td
                  key={`${idx}-${cidx}`}
                  className={classNames(
                    "px-2 py-1 truncate",
                    col.align === "center" && "text-center",
                    col.align === "end" && "text-end",
                    col.className,
                  )}
                  style={{ width: col.width, maxWidth: col.maxWidth }}
                >
                  {col.renderer?.(
                    getByPath(row, col.id.toString()),
                    row,
                    startIndex + idx,
                  ) ?? getByPath(row, col.id.toString())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {paginationSize > 0 && (
        <Footer
          flex
          justify="end"
          className="px-2 py-1 sticky bottom-0 bg-tint-50"
        >
          <Pagination minimal {...paginator} />
        </Footer>
      )}
    </div>
  );
};
