/*
 * React Fabric
 * @version: 1.0.0
 *
 *
 * The MIT License (MIT)
 * Copyright (c) 2025 Adarsh Pastakia
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

import { Button, DropdownDismiss } from "@react-fabric/core";
import { Checkbox, Input, Search } from "@react-fabric/form";
import { EMPTY_ARRAY, matchString } from "@react-fabric/utilities";
import { useState } from "react";
import { useFilteredList } from "../hooks/useFilteredList";
import { type TableColumn } from "./types";

interface FilterProps {
  type: TableColumn["dataType"];
  onFilter: (value: AnyObject) => void;
  list?: AnyObject[];
  filter: AnyObject;
}

const ListFilter = ({
  list = EMPTY_ARRAY,
  filter,
  onFilter,
}: Partial<FilterProps>) => {
  const [selected, setSelected] = useState<Set<string>>(new Set(filter));

  const { filteredList, query, onSearch } = useFilteredList(
    list,
    (item, query) => {
      return matchString(item.id ?? item, query);
    },
  );

  return (
    <div className="flex flex-col">
      <div>
        <Search autoFocus value={query} onSearch={onSearch} searchOnChange />
      </div>
      <div className="flex-1 overflow-auto scroll-thin">
        {filteredList.map((v, idx) => (
          <div key={idx} className="flex gap-x-1 text-xs items-center">
            <Checkbox
              checked={selected.has(v.id ?? v)}
              onChange={(b) => {
                const set = new Set(Array.from(selected.values()));
                b ? set.add(v.id ?? v) : set.delete(v.id ?? v);
                setSelected(set);
              }}
              label={<span className="truncate">{v.label ?? v}</span>}
            />
          </div>
        ))}
        {filteredList.length === 0 && (
          <span className="text-muted text-xs">No items found</span>
        )}
      </div>
      <div className="flex justify-end">
        <DropdownDismiss>
          <Button size="xs" onClick={() => onFilter?.(Array.from(selected))}>
            Apply
          </Button>
        </DropdownDismiss>
      </div>
    </div>
  );
};

export const ColumnFilters = ({
  type,
  list,
  filter,
  onFilter,
}: FilterProps) => {
  return (
    <div className="flex flex-col min-w-[16rem]">
      {list && <ListFilter list={list} filter={filter} onFilter={onFilter} />}
      {!list && type === "string" && (
        <Input
          autoFocus
          allowClear
          value={filter}
          onEnterPressed={(e: AnyObject) => onFilter(e.target.value ?? "")}
        />
      )}
    </div>
  );
};
