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

import { EmptyContent, Loading, useDebounce } from "@react-fabric/core";
import classNames from "classnames";
import { useImperativeHandle, useMemo, useRef } from "react";
import { useTranslation } from "react-i18next";
import { AddColumn } from "./AddColumn";
import { BodyCell } from "./BodyCell";
import { CheckboxCell } from "./CheckboxCell";
import { TableProvider } from "./Context";
import { EmptyCell } from "./EmptyCell";
import { HeaderCell } from "./HeaderCell";
import { type TableProps } from "./types";
import { useTableColumns } from "./useTableColumns";
import { useVirtualTable } from "./useVirtualTable";

export const Table = <T extends KeyValue = KeyValue>({
  ref,
  data,
  columns,
  keyProperty,
  checkableRows,
  hideableColumns,
  sort,
  loading,
  onSort,
  onRowClick,
  onCheckedChanged,
}: TableProps<T>) => {
  const { t } = useTranslation("data");
  const fireCheckChanged = useDebounce(
    (checkedIds: Array<keyof T>) => onCheckedChanged?.(checkedIds),
    [],
  );

  const { state, onHide } = useTableColumns(columns);
  const {
    scrollerRef,
    items,
    checkState,
    toggleChecked,
    toggleAllChecked,
    getData,
    totalSize,
    measureElement,
  } = useVirtualTable(data, keyProperty, fireCheckChanged);
  const refBody = useRef<HTMLDivElement>(null);

  const wrapperStart = useMemo(
    () => "bg-inherit sticky start-0 flex flex-nowrap z-1",
    [],
  );
  const wrapperEnd = useMemo(
    () => "bg-inherit sticky end-0 flex flex-nowrap z-1 border-s -ms-px",
    [],
  );

  useImperativeHandle(
    ref,
    () => ({
      hilight: (row: number) => {
        refBody.current
          ?.querySelectorAll<HTMLElement>(`.datatable-row[data-hilight="true"]`)
          .forEach((el) => el && (el.dataset.hilight = undefined));
        const el = refBody.current?.querySelector<HTMLElement>(
          `[data-row="${row}"]`,
        );
        el?.scrollIntoView({ behavior: "smooth", block: "center" });
        el && (el.dataset.hilight = "true");
      },
      unhilight: () => {
        refBody.current
          ?.querySelectorAll<HTMLElement>(`.datatable-row[data-hilight="true"]`)
          .forEach((el) => el && (el.dataset.hilight = undefined));
      },
      scrollTo: (row: number) => {
        const el = refBody.current?.querySelector(`[data-row="${row}"]`);
        el?.scrollIntoView({ behavior: "smooth" });
      },
    }),
    [],
  );

  return (
    <TableProvider>
      <div
        className="grid area-content overflow-auto relative"
        style={{
          gridTemplate: `"head" auto "loader" auto "content" 1fr "foot" auto/1fr`,
        }}
        ref={scrollerRef}
      >
        <div className="bg-base font-medium sticky top-0 area-head border-b select-none flex flex-nowrap z-2">
          <div className={wrapperStart}>
            {checkableRows && (
              <CheckboxCell
                state={checkState.allChecked}
                onClick={toggleAllChecked}
              />
            )}
            {state.start?.map((col, idx) => (
              <HeaderCell key={idx} {...col} sort={sort} onSort={onSort} />
            ))}
          </div>
          {state.cols?.map((col, idx) => (
            <HeaderCell key={idx} {...col} sort={sort} onSort={onSort} />
          ))}
          <div className={wrapperEnd}>
            {state.end?.map((col, idx) => (
              <HeaderCell key={idx} {...col} sort={sort} onSort={onSort} />
            ))}

            {hideableColumns && (
              <AddColumn
                onClick={onHide}
                columns={state.columns.filter((col) => col.hideable !== false)}
              />
            )}
          </div>
        </div>
        {loading && <Loading />}
        {data.length > 0 && (
          <div
            className="area-content flex flex-col flex-nowrap"
            style={{ height: totalSize() }}
            ref={refBody}
          >
            <div style={{ height: items[0]?.start }} />
            {items.map(({ index, key }) => {
              const data = getData(index);
              return (
                <div
                  key={key}
                  role="none"
                  data-row={index}
                  className={classNames(
                    "flex flex-nowrap datatable-row data-[hilight]:outline-1 -outline-offset-1 outline-primary-500",
                    index % 2 ? "bg-even" : "bg-odd",
                    onRowClick && "hover:bg-primary-50 active:bg-primary-100",
                  )}
                  onClick={() =>
                    checkableRows && keyProperty && !onRowClick
                      ? toggleChecked(data[keyProperty])
                      : onRowClick?.(data)
                  }
                  data-index={index}
                  ref={measureElement}
                >
                  <div className={wrapperStart}>
                    {checkableRows && keyProperty && (
                      <CheckboxCell
                        onClick={() => toggleChecked(data[keyProperty])}
                        state={
                          checkState.checked.includes(data[keyProperty]) ? 1 : 0
                        }
                      />
                    )}
                    {state.start?.map((col, ids) => (
                      <BodyCell
                        key={`${key}:${ids}`}
                        column={col}
                        item={data}
                      />
                    ))}
                  </div>
                  {state.cols?.map((col, idc) => (
                    <BodyCell key={`${key}:${idc}`} column={col} item={data} />
                  ))}
                  <div className={wrapperEnd}>
                    {state.end?.map((col, ide) => (
                      <BodyCell
                        key={`${key}:${ide}`}
                        column={col}
                        item={data}
                      />
                    ))}
                    {hideableColumns && <div className="w-6" />}
                  </div>
                </div>
              );
            })}
            <div className="flex-1 flex flex-nowrap">
              <div className={wrapperStart}>
                {checkableRows && <div className="w-6" />}
                {state.start?.map((col) => (
                  <EmptyCell key={String(col.id)} {...col} />
                ))}
              </div>
              {state.cols?.map((col) => (
                <EmptyCell key={String(col.id)} {...col} />
              ))}
              <div className={wrapperEnd}>
                {state.end?.map((col) => (
                  <EmptyCell key={String(col.id)} {...col} />
                ))}

                {hideableColumns && <div className="w-6" />}
              </div>
            </div>
          </div>
        )}
        {!loading && data.length === 0 && (
          <EmptyContent
            size="sm"
            className="bg-dimmed"
            message={t("datagrid.empty")}
          />
        )}
      </div>
    </TableProvider>
  );
};
