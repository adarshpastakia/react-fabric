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

import { Dropdown, Icon, Menu, MenuItem } from "@react-fabric/core";
import { type TableColumn } from "./types";

export const AddColumn = ({
  columns,
  onClick,
}: {
  columns: TableColumn[];
  onClick: (id: string) => void;
}) => {
  return (
    <div className="group font-medium w-6 flex flex-nowrap text-start items-center">
      <Dropdown placement="bottom-end">
        <Icon
          icon="icon-[mdi--plus-circle-outline]"
          className="p-1 rounded-t rounded-b-none hover:outline"
        />
        <Menu className="text-sm" onClick={onClick}>
          {columns.map((col) => (
            <MenuItem
              key={String(col.id)}
              id={String(col.id)}
              data-dropdown-dismiss="false"
              label={`${col.label ?? String(col.id)}`}
              icon={!col.hidden ? "icon-[mdi--check]" : ""}
            />
          ))}
        </Menu>
      </Dropdown>
    </div>
  );
};
