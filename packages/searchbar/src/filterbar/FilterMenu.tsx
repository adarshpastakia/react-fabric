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

import { CoreIcons, Divider, Menu, MenuItem } from "@react-fabric/core";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { type FilterField, type FilterObject } from "../types";
import { FilterEdit } from "./FilterEdit";
import { FilterView } from "./FilterView";

export const FilterMenu = ({
  filter,
  fields,
  onChange,
  onRemove,
}: {
  fields?: FilterField[];
  filter: FilterObject;
  onRemove: () => void;
  onChange: (filter: FilterObject) => void;
}) => {
  const { t } = useTranslation("searchbar");
  const [view, setView] = useState<"view" | "edit">();

  return view === "edit" ? (
    <FilterEdit filter={filter} onChange={onChange} onRemove={onRemove} />
  ) : view === "view" ? (
    <FilterView filter={filter} onRemove={onRemove} />
  ) : (
    <Menu className="text-sm">
      {filter.canEdit !== false ? (
        <MenuItem
          icon={CoreIcons.edit}
          label={t("label.edit")}
          data-dropdown-dismiss="false"
          onClick={() => {
            setView("edit");
          }}
        />
      ) : (
        <MenuItem
          icon={CoreIcons.eye}
          label={t("label.view")}
          data-dropdown-dismiss="false"
          onClick={() => {
            setView("view");
          }}
        />
      )}
      <Divider />
      {filter.canPin !== false && (
        <MenuItem
          label={t(filter.pinned ? "label.unpin" : "label.pin")}
          onClick={() => onChange({ ...filter, pinned: !filter.pinned })}
        />
      )}
      {filter.canInvert !== false && filter.field && (
        <MenuItem
          label={t(filter.negate ? "label.include" : "label.exclude")}
          onClick={() => onChange({ ...filter, negate: !filter.negate })}
        />
      )}
      {filter.canDisable !== false && (
        <MenuItem
          label={t(filter.disabled ? "label.enable" : "label.disable")}
          onClick={() => onChange({ ...filter, disabled: !filter.disabled })}
        />
      )}
      {!filter.required && <Divider />}
      {!filter.required && (
        <MenuItem
          color="danger"
          icon={CoreIcons.remove}
          label={t("label.remove")}
          onClick={() => onRemove()}
        />
      )}
    </Menu>
  );
};
