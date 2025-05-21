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

import {
  CoreIcons,
  EmptyContent,
  Icon,
  Loading,
  useDebounce,
} from "@react-fabric/core";
import { debounce } from "@react-fabric/utilities";
import classNames from "classnames";
import {
  useEffect,
  useImperativeHandle,
  useLayoutEffect,
  useMemo,
  useRef,
} from "react";
import { useTranslation } from "react-i18next";
import { AddColumn } from "./AddColumn";
import { BodyRow } from "./BodyRow";
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
  keyProperty = "id",
  groupProperty,
  checkableRows,
  initialScroll,
  hideableColumns,
  sort,
  loading,
  checked,
  emptyDisplay,
  groupRenderer,
  canExpand,
  children,
  onSort,
  onFilter,
  onScroll,
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
    top,
    checkState,
    virtualizer,
    hasActiveSticky,
    toggleExpand,
    toggleChecked,
    toggleAllChecked,
    toggleGroupExpand,
    getData,
    totalSize,
    isActiveSticky,
    measureElement,
  } = useVirtualTable(data, {
    checked,
    keyProperty,
    groupProperty,
    onCheckChanged: fireCheckChanged,
  });
  const refBody = useRef<HTMLDivElement>(null);

  const wrapperStart = useMemo(
    () => "bg-inherit sticky start-0 flex flex-nowrap z-1",
    [],
  );
  const wrapperEnd = useMemo(
    () => "bg-inherit sticky end-0 flex flex-nowrap z-1 border-s -ms-px",
    [],
  );

  useLayoutEffect(() => {
    setTimeout(() => {
      initialScroll &&
        virtualizer.scrollToIndex(initialScroll, { align: "start" });
    }, 100);
  }, []);

  useImperativeHandle(
    ref,
    () => ({
      scrollTo: (row: number) => {
        virtualizer.scrollToIndex(row, { align: "start" });
      },
      hilight(row) {
        scrollerRef.current
          ?.querySelector(".hilight")
          ?.classList.remove("hilight", "ring-1");
        virtualizer.scrollToIndex(Math.floor(row), {
          align: "start",
        });
        setTimeout(() => {
          scrollerRef.current
            ?.querySelector(`[data-index="${row}"]`)
            ?.classList.add("hilight", "ring-1");
        }, 100);
      },
      unhilight() {
        scrollerRef.current
          ?.querySelector(".hilight")
          ?.classList.remove("hilight", "ring-1");
      },
    }),
    [],
  );

  useEffect(() => {
    const handle = debounce((top: number) => {
      onScroll?.(top ?? 0);
    });
    handle(top);
    return () => {
      handle.cancel();
    };
  }, [top]);

  return (
    <TableProvider>
      <div
        className="grid area-content overflow-auto relative"
        style={{
          gridTemplate: `"head" auto "loader" auto "content" 1fr "foot" auto/1fr`,
        }}
        data-ref="tableScroller"
        ref={scrollerRef}
      >
        <div
          data-ref="tableHeader"
          className="bg-base font-medium sticky top-0 h-8 area-head border-b select-none flex flex-nowrap z-5"
        >
          <div className={wrapperStart}>
            {canExpand && <div className="w-6" />}
            {checkableRows && (
              <CheckboxCell
                state={checkState.allChecked}
                onClick={toggleAllChecked}
              />
            )}
            {state.start?.map((col, idx) => (
              <HeaderCell
                key={idx}
                {...col}
                sort={sort}
                onSort={onSort}
                onFilter={onFilter}
              />
            ))}
          </div>
          {state.cols?.map((col, idx) => (
            <HeaderCell
              key={idx}
              {...col}
              sort={sort}
              onSort={onSort}
              onFilter={onFilter}
            />
          ))}
          <div className={wrapperEnd}>
            {state.end?.map((col, idx) => (
              <HeaderCell
                key={idx}
                {...col}
                sort={sort}
                onSort={onSort}
                onFilter={onFilter}
              />
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
            className="area-content flex flex-col flex-nowrap min-h-full"
            style={{ height: totalSize() }}
            ref={refBody}
          >
            <div
              style={{
                height: items[hasActiveSticky ? 1 : 0]?.start,
              }}
            />
            {items.map(({ index, key }) => {
              const data = getData(index);
              return "__GROUP__" in data ? (
                <div
                  key={key}
                  ref={measureElement}
                  data-index={index}
                  className={classNames(
                    "px-2 py-1 text-md bg-base border-y border-tint-100 cursor-pointer flex items-center gap-1 z-3",
                    isActiveSticky(index) && "sticky top-8",
                  )}
                  role="none"
                  onClick={() => toggleGroupExpand(data.key)}
                >
                  <Icon
                    rtlFlip
                    icon={
                      data.open ? CoreIcons.chevronDown : CoreIcons.chevronRight
                    }
                  />
                  {groupRenderer?.(data) ?? (
                    <div className="flex gap-1 items-center">
                      <span>{data.key}</span>
                      <span className="text-sm">({data.itemCount})</span>
                    </div>
                  )}
                </div>
              ) : (
                <BodyRow
                  rowKey={key}
                  index={index}
                  checkableRows={checkableRows}
                  checked={
                    keyProperty &&
                    checkState.checked.includes(data[keyProperty])
                      ? 1
                      : 0
                  }
                  expanded={
                    !!keyProperty &&
                    checkState.expanded.includes(data[keyProperty])
                  }
                  data={data}
                  hideableColumns={hideableColumns}
                  keyProperty={keyProperty}
                  measureElement={measureElement}
                  onRowClick={onRowClick}
                  state={state}
                  canExpand={canExpand}
                  toggleExpand={toggleExpand}
                  expandRow={children}
                  toggleChecked={toggleChecked}
                  wrapperEnd={wrapperEnd}
                  wrapperStart={wrapperStart}
                  key={key}
                />
              );
            })}
            <div className="flex-1 flex flex-nowrap">
              <div className={wrapperStart}>
                {canExpand && <div className="w-6" />}
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
        {!loading &&
          data.length === 0 &&
          (emptyDisplay ?? (
            <EmptyContent
              size="sm"
              className="bg-dimmed"
              message={t("datagrid.empty")}
            />
          ))}
      </div>
    </TableProvider>
  );
};
