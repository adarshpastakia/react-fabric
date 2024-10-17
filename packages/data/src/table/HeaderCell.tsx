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
  DropdownTool,
  Icon,
  Menu,
  MenuItem,
  Tooltip,
} from "@react-fabric/core";
import { useCallback, useMemo } from "react";
import { useTableContext } from "./Context";
import {
  COL_DEFAULT_WIDTH,
  COL_MAX_WIDTH,
  COL_MIN_WIDTH,
  type ColumnType,
  type TableProps,
} from "./types";

export const HeaderCell = ({
  id,
  label,
  icon,
  iconBg,
  iconColor,
  rtlFlip,
  actions,
  locked,
  tooltip,
  sortable,
  resizable,
  width: _width,
  maxWidth,
  minWidth,
  sort,
  onSort,
}: ColumnType & Pick<TableProps, "sort" | "onSort">) => {
  const { startResize, widths } = useTableContext();

  const width = useMemo(
    () => widths.get(id.toString()) ?? _width,
    [widths, _width, id],
  );

  const handleSort = useCallback(() => {
    sortable &&
      onSort?.({
        id: id.toString(),
        order: sort?.id === id && sort.order === "asc" ? "desc" : "asc",
      });
  }, [onSort, name, sort, sortable]);

  const menus = useMemo(() => {
    const ret = [];
    if (sortable) {
      ret.push(
        <MenuItem
          key="sort-asc"
          label="Sort ascending"
          icon={CoreIcons.sortAsc}
        />,
        <MenuItem
          key="sort-desc"
          label="Sort descending"
          icon={CoreIcons.sortDesc}
        />,
      );
    }
    return ret;
  }, [sortable]);

  return (
    <div
      role="none"
      data-id={id}
      onClick={handleSort}
      className="group font-medium border-e flex flex-nowrap text-start items-center table-header-cell"
      style={{
        width: width ?? COL_DEFAULT_WIDTH,
        minWidth: minWidth ?? COL_MIN_WIDTH,
        maxWidth: maxWidth ?? COL_MAX_WIDTH,
      }}
    >
      <Tooltip content={tooltip ?? label} disabled={!(tooltip ?? label)}>
        <div className="flex-initial px-2 py-1 text-sm truncate sticky start-0">
          {icon && (
            <Icon icon={icon} bg={iconBg} color={iconColor} rtlFlip={rtlFlip} />
          )}
          <span>{label ?? " "}</span>
        </div>
      </Tooltip>
      {sortable && (
        <div className="text-sm text-tint-300">
          {sort?.id === id && sort?.order === "desc" && <span>▼</span>}
          {sort?.id === id && sort?.order === "asc" && <span>▲</span>}
        </div>
      )}
      <div className="flex-1" />
      {menus.length > 0 && (
        <DropdownTool groupHover placement="bottom-end">
          <Menu className="text-sm">{menus}</Menu>
        </DropdownTool>
      )}
      {resizable && (
        <div
          role="none"
          className="cursor-col-resize border-e bg-transparent border-tint-200 w-[5px] self-stretch"
          onMouseDown={(e) =>
            e.currentTarget.parentElement &&
            startResize(e.currentTarget.parentElement)
          }
        />
      )}
    </div>
  );
};
