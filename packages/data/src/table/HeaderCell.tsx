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
} from "@react-fabric/core";
import { useMemo } from "react";
import { useTableContext } from "./Context";
import {
  COL_DEFAULT_WIDTH,
  COL_MAX_WIDTH,
  COL_MIN_WIDTH,
  type ColumnType,
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
  resizable,
  width: _width,
  maxWidth,
  minWidth,
}: ColumnType) => {
  const { startResize, widths } = useTableContext();

  const width = useMemo(
    () => widths.get(id.toString()) ?? _width,
    [widths, _width, id],
  );

  return (
    <div
      data-id={id}
      className="group font-medium border-e flex flex-nowrap text-start items-center table-header-cell"
      style={{
        width: width ?? COL_DEFAULT_WIDTH,
        minWidth: minWidth ?? COL_MIN_WIDTH,
        maxWidth: maxWidth ?? COL_MAX_WIDTH,
      }}
    >
      <div className="flex-1 px-2 py-1 text-sm truncate sticky start-0">
        {icon && (
          <Icon icon={icon} bg={iconBg} color={iconColor} rtlFlip={rtlFlip} />
        )}
        <span>{label ?? " "}</span>
      </div>
      <DropdownTool groupHover placement="bottom-end">
        <Menu className="text-sm">
          <MenuItem label="Sort ascending" icon={CoreIcons.sortAsc} />
          <MenuItem label="Sort descending" icon={CoreIcons.sortDesc} />
        </Menu>
      </DropdownTool>
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
