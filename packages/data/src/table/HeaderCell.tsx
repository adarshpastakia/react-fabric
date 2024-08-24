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

import { CoreIcons, Dropdown, Icon, Menu, MenuItem } from "@react-fabric/core";
import { type ColumnType } from "./types";

export const HeaderCell = ({
  label,
  icon,
  iconBg,
  iconColor,
  rtlFlip,
  actions,
  locked,
  resizable,
  width,
  maxWidth,
  minWidth,
}: ColumnType) => {
  return (
    <div
      className="group font-medium border-e flex flex-nowrap text-start items-center"
      style={{
        width: width ?? "12rem",
        minWidth: minWidth ?? "2rem",
        maxWidth: maxWidth ?? "32rem",
      }}
    >
      <div className="flex-1 px-2 py-1 text-sm truncate sticky start-0">
        {icon && (
          <Icon icon={icon} bg={iconBg} color={iconColor} rtlFlip={rtlFlip} />
        )}
        <span>{label ?? " "}</span>
      </div>
      <Dropdown placement="bottom-start">
        <Icon
          icon={CoreIcons.caretDown}
          className="outline bg-base me-0.5 flex-content hidden group-hover:inline-block data-[dropdown-open]:inline-block"
        />
        <Menu className="text-sm">
          <MenuItem label="Sort ascending" icon={CoreIcons.sortAsc} />
          <MenuItem label="Sort descending" icon={CoreIcons.sortDesc} />
        </Menu>
      </Dropdown>
      {resizable && (
        <div className="cursor-col-resize border-e bg-transparent border-tint-200 w-[5px] self-stretch" />
      )}
    </div>
  );
};
