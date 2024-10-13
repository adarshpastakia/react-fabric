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

export const AddColumn = ({ columns }: { columns: ColumnType[] }) => {
  return (
    <div className="group font-medium border-e w-6 flex flex-nowrap text-start items-center">
      <Dropdown>
        <Icon icon={CoreIcons.insert} className="p-1" />
        <Menu className="text-sm">
          {columns.map((col) => (
            <MenuItem
              key={String(col.id)}
              label={`${col.label ?? String(col.id)}`}
              icon={!col.hidden ? CoreIcons.tick : ""}
            />
          ))}
        </Menu>
      </Dropdown>
    </div>
  );
};
