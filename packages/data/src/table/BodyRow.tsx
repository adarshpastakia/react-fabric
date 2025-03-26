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
import { BodyCell } from "./BodyCell";
import { CheckboxCell } from "./CheckboxCell";
import { type TableColumn } from "./types";
import { CoreIcons, Icon } from "@react-fabric/core";

export const BodyRow = ({
  rowKey,
  index,
  data,
  keyProperty,
  measureElement,
  state,
  hideableColumns,
  wrapperStart,
  wrapperEnd,
  onRowClick,
  checkableRows,
  checked,
  toggleChecked,
  canExpand,
  expanded,
  toggleExpand,
  expandRow,
}: {
  rowKey: Key;
  index: number;
  data: KeyValue;
  keyProperty?: Key;
  measureElement: AnyObject;
  state: KeyValue<TableColumn[]>;
  hideableColumns?: boolean;
  wrapperStart: string;
  wrapperEnd: string;
  checkableRows?: boolean;
  checked: 0 | 1;
  onRowClick?: AnyObject;
  canExpand?: AnyObject;
  expandRow?: AnyObject;
  expanded: boolean;
  toggleExpand: (key: Key) => void;
  toggleChecked: (key: Key) => void;
}) => {
  return (
    <div
      ref={measureElement}
      data-index={index}
      className={index % 2 ? "bg-even" : "bg-odd"}
    >
      <div
        role="none"
        data-row={index}
        className={classNames(
          "flex flex-nowrap datatable-row data-[hilight]:outline-1 -outline-offset-1 outline-primary-500 group/table-row",
          onRowClick && "hover:bg-primary-50 active:bg-primary-100",
          index % 2 ? "bg-even" : "bg-odd",
        )}
        onClick={() =>
          checkableRows && keyProperty && !onRowClick
            ? toggleChecked(data[keyProperty])
            : onRowClick?.(data)
        }
      >
        <div className={wrapperStart}>
          {!!canExpand && (
            <div
              className={classNames(
                "group font-medium w-6 flex flex-nowrap text-start py-1",
                !canExpand(data) && "pointer-events-none opacity-35",
              )}
            >
              <Icon
                className="p-1 text-tint-700 hover:text-primary-600"
                icon={expanded ? CoreIcons.collapse : CoreIcons.expand}
                onClick={(e) => [
                  keyProperty && toggleExpand(data[keyProperty]),
                  e.stopPropagation(),
                ]}
              />
            </div>
          )}
          {checkableRows && keyProperty && (
            <CheckboxCell
              onClick={() => toggleChecked(data[keyProperty])}
              state={checked}
            />
          )}
          {state.start?.map((col, ids) => (
            <BodyCell
              key={`${String(rowKey)}:${ids}`}
              column={col}
              item={data}
              index={ids}
            />
          ))}
        </div>
        {state.cols?.map((col, idc) => (
          <BodyCell
            key={`${String(rowKey)}:${idc}`}
            column={col}
            item={data}
            index={idc}
          />
        ))}
        <div className={wrapperEnd}>
          {state.end?.map((col, ide) => (
            <BodyCell
              key={`${String(rowKey)}:${ide}`}
              column={col}
              item={data}
              index={ide}
            />
          ))}
          {hideableColumns && <div className="w-6" />}
        </div>
      </div>
      {expanded && expandRow(data)}
    </div>
  );
};
