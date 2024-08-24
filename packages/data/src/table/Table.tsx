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

import { useCallback, useMemo } from "react";
import { BodyCell } from "./BodyCell";
import { HeaderCell } from "./HeaderCell";
import { type ColumnType, type TableProps } from "./types";
import { useTableColumns } from "./useTableColumns";
import { useVirtualTable } from "./useVirtualTable";
import classNames from "classnames";

export const Table = <T extends KeyValue = KeyValue>({
  data,
  columns,
}: TableProps<T>) => {
  const { columnMap } = useTableColumns(columns);
  const { scrollerRef, items, getData, totalSize, measureElement } =
    useVirtualTable(data);

  const wrapperStart = useMemo(
    () => "bg-inherit sticky start-0 flex flex-nowrap z-1",
    [],
  );
  const wrapperEnd = useMemo(
    () => "bg-inherit sticky end-0 flex flex-nowrap z-1 border-s -ms-px",
    [],
  );
  const emptyCol = useCallback(
    (col: ColumnType, idc: number) => (
      <div
        key={`blank:${idc}`}
        className="overflow-hidden border-e"
        style={{
          width: col.width ?? "12rem",
          minWidth: col.minWidth ?? "2rem",
          maxWidth: col.maxWidth ?? "32rem",
        }}
      />
    ),
    [],
  );

  return (
    <div
      className="grid area-content overflow-auto relative"
      style={{
        gridTemplate: `"head" auto "content" 1fr "foot" auto/1fr`,
      }}
      ref={scrollerRef}
    >
      <div className="bg-base font-medium sticky top-0 area-head border-b select-none flex flex-nowrap z-2">
        <div className={wrapperStart}>
          {columnMap.start?.map((col, idx) => (
            <HeaderCell key={idx} {...col} />
          ))}
        </div>
        {columnMap.cols?.map((col, idx) => <HeaderCell key={idx} {...col} />)}
        <div className={wrapperEnd}>
          {columnMap.end?.map((col, idx) => <HeaderCell key={idx} {...col} />)}
        </div>
      </div>
      <div
        className="area-content flex flex-col flex-nowrap"
        style={{ height: totalSize() }}
      >
        <div style={{ height: items[0]?.start }} />
        {items.map(({ index, key }) => (
          <div
            key={key}
            className={classNames(
              "flex flex-nowrap",
              index % 2 ? "bg-even" : "bg-odd",
            )}
            data-index={index}
            ref={measureElement}
          >
            <div className={wrapperStart}>
              {columnMap.start?.map((col, ids) => (
                <BodyCell
                  key={`${key}:${ids}`}
                  column={col}
                  item={getData(index)}
                />
              ))}
            </div>
            {columnMap.cols?.map((col, idc) => (
              <BodyCell
                key={`${key}:${idc}`}
                column={col}
                item={getData(index)}
              />
            ))}
            <div className={wrapperEnd}>
              {columnMap.end?.map((col, ide) => (
                <BodyCell
                  key={`${key}:${ide}`}
                  column={col}
                  item={getData(index)}
                />
              ))}
            </div>
          </div>
        ))}
        <div className="flex-1 flex flex-nowrap">
          <div className={wrapperStart}>{columnMap.start?.map(emptyCol)}</div>
          {columnMap.cols?.map(emptyCol)}
          <div className={wrapperEnd}>{columnMap.end?.map(emptyCol)}</div>
        </div>
      </div>
      <div className="area-foot bg-dimmed border-t sticky bottom-0 flex flex-nowrap z-2">
        <div className={wrapperStart}>
          {columnMap.start?.map((col, idx) => (
            <HeaderCell key={idx} {...col} />
          ))}
        </div>
        {columnMap.cols?.map((col, idx) => <HeaderCell key={idx} {...col} />)}
        <div className={wrapperEnd}>
          {columnMap.end?.map((col, idx) => <HeaderCell key={idx} {...col} />)}
        </div>
      </div>
    </div>
  );
};
