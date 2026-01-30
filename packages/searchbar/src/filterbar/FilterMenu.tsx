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

import { Divider, Menu, MenuItem } from "@react-fabric/core";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { OPERATOR, type FilterField, type FilterObject } from "../types";
import { FilterEdit } from "./FilterEdit";
import { FilterView } from "./FilterView";

const MATCH_ALL =
  "M9,5C10.04,5 11.06,5.24 12,5.68C12.94,5.24 13.96,5 15,5A7,7 0 0,1 22,12A7,7 0 0,1 15,19C13.96,19 12.94,18.76 12,18.32C11.06,18.76 10.04,19 9,19A7,7 0 0,1 2,12A7,7 0 0,1 9,5M8.5,12C8.5,13.87 9.29,15.56 10.56,16.75L11.56,16.29C10.31,15.29 9.5,13.74 9.5,12C9.5,10.26 10.31,8.71 11.56,7.71L10.56,7.25C9.29,8.44 8.5,10.13 8.5,12M15.5,12C15.5,10.13 14.71,8.44 13.44,7.25L12.44,7.71C13.69,8.71 14.5,10.26 14.5,12C14.5,13.74 13.69,15.29 12.44,16.29L13.44,16.75C14.71,15.56 15.5,13.87 15.5,12Z";
const MATCH_ANY =
  "M9,5A7,7 0 0,0 2,12A7,7 0 0,0 9,19C10.04,19 11.06,18.76 12,18.32C12.94,18.76 13.96,19 15,19A7,7 0 0,0 22,12A7,7 0 0,0 15,5C13.96,5 12.94,5.24 12,5.68C11.06,5.24 10.04,5 9,5M9,7C9.34,7 9.67,7.03 10,7.1C8.72,8.41 8,10.17 8,12C8,13.83 8.72,15.59 10,16.89C9.67,16.96 9.34,17 9,17A5,5 0 0,1 4,12A5,5 0 0,1 9,7M15,7A5,5 0 0,1 20,12A5,5 0 0,1 15,17C14.66,17 14.33,16.97 14,16.9C15.28,15.59 16,13.83 16,12C16,10.17 15.28,8.41 14,7.11C14.33,7.04 14.66,7 15,7Z";

export const FilterMenu = ({
  filter,
  fields,
  editable,
  onChange,
  onRemove,
}: {
  fields?: FilterField[];
  editable?: boolean;
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
      {editable && filter.canEdit !== false ? (
        <MenuItem
          icon="icon-[mdi--lead-pencil]"
          label={t("label.edit")}
          data-dropdown-dismiss="false"
          onClick={() => {
            setView("edit");
          }}
        />
      ) : (
        <MenuItem
          icon="icon-[mdi--eye]"
          label={t("label.view")}
          data-dropdown-dismiss="false"
          onClick={() => {
            setView("view");
          }}
        />
      )}
      <Divider />
      {filter.operator &&
        [OPERATOR.ALL, OPERATOR.ANY].includes(filter.operator) && (
          <MenuItem
            label={t(
              filter.operator === OPERATOR.ALL
                ? "label.matchAny"
                : "label.matchAll",
            )}
            icon={t(filter.operator === OPERATOR.ALL ? MATCH_ANY : MATCH_ALL)}
            onClick={() =>
              onChange({
                ...filter,
                operator:
                  filter.operator === OPERATOR.ALL
                    ? OPERATOR.ANY
                    : OPERATOR.ALL,
              })
            }
          />
        )}
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
          icon="icon-[mdi--minus-circle-outline]"
          label={t("label.remove")}
          onClick={() => onRemove()}
        />
      )}
    </Menu>
  );
};
