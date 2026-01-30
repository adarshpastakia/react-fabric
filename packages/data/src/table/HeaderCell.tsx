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
  Button,
  Divider,
  DropdownTool,
  getIconProps,
  Icon,
  Menu,
  MenuItem,
  Tooltip,
} from "@react-fabric/core";
import { isEmpty } from "@react-fabric/utilities";
import { useCallback, useMemo } from "react";
import { ColumnFilters } from "./ColumnFilters";
import { useTableContext } from "./Context";
import {
  COL_DEFAULT_WIDTH,
  COL_MAX_WIDTH,
  COL_MIN_WIDTH,
  type TableColumn,
  type TableProps,
} from "./types";

export const HeaderCell = ({
  id,
  field,
  dataType,
  label,
  icon,
  actions,
  locked,
  filter,
  filterable,
  filterOptions,
  tooltip,
  sortable,
  resizable,
  width: _width,
  maxWidth,
  minWidth,
  sort,
  onSort,
  onFilter,
}: TableColumn & Pick<TableProps, "sort" | "onSort" | "onFilter">) => {
  const { startResize, widths } = useTableContext();

  const width = useMemo(
    () => widths.get(id.toString()) ?? _width,
    [widths, _width, id],
  );

  const handleSort = useCallback(
    (order?: "asc" | "desc") => {
      sortable &&
        onSort?.({
          id: id.toString(),
          order:
            order ?? (sort?.id === id && sort.order === "asc" ? "desc" : "asc"),
        });
    },
    [onSort, sort, sortable],
  );

  const menus = useMemo(() => {
    let ret = [];
    if (filterable && (dataType ?? filterOptions)) {
      ret.push(
        <Menu
          key="filters"
          label="Filter"
          icon={filter ? "icon-[mdi--check]" : ""}
          trigger="click"
        >
          <ColumnFilters
            type={dataType}
            list={filterOptions}
            filter={filter}
            onFilter={(value) => onFilter?.(field ?? id, value)}
          />
        </Menu>,
      );
    }
    if (sortable) {
      ret.push(
        <MenuItem
          key="sort-asc"
          label="Sort ascending"
          icon="icon-[mdi--sort-ascending]"
          onClick={() => handleSort("asc")}
        />,
        <MenuItem
          key="sort-desc"
          label="Sort descending"
          icon="icon-[mdi--sort-descending]"
          onClick={() => handleSort("desc")}
        />,
      );
    }
    if (actions) {
      ret.push(<Divider key="div" />);
      ret.push(...actions);
    }
    if (ret.length === 1) {
      ret = [
        <ColumnFilters
          key="filters"
          type={dataType}
          list={filterOptions}
          filter={filter}
          onFilter={(value) => onFilter?.(field ?? id, value)}
        />,
      ];
    }
    return ret;
  }, [sortable, actions, onFilter, handleSort]);

  return (
    <div
      role="none"
      data-id={id}
      onClick={() => handleSort()}
      className="group/tool font-medium border-e flex flex-nowrap text-start items-center table-header-cell"
      style={{
        width: width ?? COL_DEFAULT_WIDTH,
        minWidth: minWidth ?? COL_MIN_WIDTH,
        maxWidth: maxWidth ?? COL_MAX_WIDTH,
      }}
    >
      <Tooltip content={tooltip ?? label} disabled={!(tooltip ?? label)}>
        <div className="flex-initial px-2 py-1 text-sm truncate sticky start-0">
          {icon && <Icon {...getIconProps(icon)} />}
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
      {filterable && !isEmpty(filter) && (
        <Button
          size="sm"
          variant="link"
          aria-label="clear filter"
          stopPropagation
          icon="icon-[mdi--filter-remove]"
          onClick={() => onFilter?.(id)}
        />
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
