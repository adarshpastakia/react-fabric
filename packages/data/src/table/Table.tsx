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
  Dropdown,
  Icon,
  Menu,
  MenuItem,
  useDebounce,
} from "@react-fabric/core";
import classNames from "classnames";
import { useCallback, useMemo } from "react";
import { BodyCell } from "./BodyCell";
import { CheckboxCell } from "./CheckboxCell";
import { HeaderCell } from "./HeaderCell";
import { type ColumnType, type TableProps } from "./types";
import { useTableColumns } from "./useTableColumns";
import { useVirtualTable } from "./useVirtualTable";

export const Table = <T extends KeyValue = KeyValue>({
  data,
  columns,
  keyProperty,
  checkableRows,
  hideableColumns,
  onRowClick,
  onCheckedChanged,
}: TableProps<T>) => {
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
          {checkableRows && (
            <CheckboxCell
              state={checkState.allChecked}
              onClick={toggleAllChecked}
            />
          )}
          {state.start?.map((col, idx) => <HeaderCell key={idx} {...col} />)}
        </div>
        {state.cols?.map((col, idx) => <HeaderCell key={idx} {...col} />)}
        <div className={wrapperEnd}>
          {state.end?.map((col, idx) => <HeaderCell key={idx} {...col} />)}

          {hideableColumns && (
            <div className="group font-medium border-e w-6 flex flex-nowrap text-start items-center">
              <Dropdown placement="bottom-end">
                <Icon icon={CoreIcons.insert} className="p-1" />
                <Menu className="text-xs" onClick={onHide}>
                  {state.columns
                    .filter((col) => col.hideable !== false)
                    .map((col) => (
                      <MenuItem
                        key={String(col.id)}
                        id={String(col.id)}
                        label={`${col.label ?? String(col.id)}`}
                        icon={!col.hidden ? CoreIcons.tick : ""}
                      />
                    ))}
                </Menu>
              </Dropdown>
            </div>
          )}
        </div>
      </div>
      <div
        className="area-content flex flex-col flex-nowrap"
        style={{ height: totalSize() }}
      >
        <div style={{ height: items[0]?.start }} />
        {items.map(({ index, key }) => {
          const data = getData(index);
          return (
            <div
              key={key}
              role="none"
              className={classNames(
                "flex flex-nowrap",
                index % 2 ? "bg-even" : "bg-odd",
                onRowClick && "hover:bg-primary-50 active:bg-primary-100",
              )}
              onClick={() => onRowClick?.(data)}
              data-index={index}
              ref={measureElement}
            >
              <div className={wrapperStart}>
                {checkableRows && (
                  <CheckboxCell
                    onClick={() => toggleChecked(data[keyProperty])}
                    state={
                      checkState.checked.includes(data[keyProperty]) ? 1 : 0
                    }
                  />
                )}
                {state.start?.map((col, ids) => (
                  <BodyCell key={`${key}:${ids}`} column={col} item={data} />
                ))}
              </div>
              {state.cols?.map((col, idc) => (
                <BodyCell key={`${key}:${idc}`} column={col} item={data} />
              ))}
              <div className={wrapperEnd}>
                {state.end?.map((col, ide) => (
                  <BodyCell key={`${key}:${ide}`} column={col} item={data} />
                ))}
                {hideableColumns && <div className="w-6" />}
              </div>
            </div>
          );
        })}
        <div className="flex-1 flex flex-nowrap">
          <div className={wrapperStart}>
            {checkableRows && <div className="w-6" />}
            {state.start?.map(emptyCol)}
          </div>
          {state.cols?.map(emptyCol)}
          <div className={wrapperEnd}>
            {state.end?.map(emptyCol)}

            {hideableColumns && <div className="w-6" />}
          </div>
        </div>
      </div>
      <div className="area-foot bg-dimmed border-t sticky bottom-0 flex flex-nowrap z-2">
        <div className={wrapperStart}>
          {checkableRows && (
            <div className="group font-medium border-e flex w-6 flex-nowrap text-start items-center">
              &nbsp;
            </div>
          )}
          {state.start?.map((col, idx) => <HeaderCell key={idx} {...col} />)}
        </div>
        {state.cols?.map((col, idx) => <HeaderCell key={idx} {...col} />)}
        <div className={wrapperEnd}>
          {state.end?.map((col, idx) => <HeaderCell key={idx} {...col} />)}
        </div>
      </div>
    </div>
  );
};
