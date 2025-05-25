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
  Chip,
  CoreIcons,
  Divider,
  Dropdown,
  Icon,
  Menu,
  MenuItem,
} from "@react-fabric/core";
import { isEmpty, isNil } from "@react-fabric/utilities";
import { useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { type FilterBarProps, type FilterObject } from "../types";
import { FilterEdit } from "./FilterEdit";
import { FilterTag } from "./FilterTag";
import classNames from "classnames";
import { FilterContext } from "./Context";

export const FilterBar = ({
  filters = [],
  allowAdd,
  fields,
  editable,
  querySchema,
  queryLanguage,
  defaultQuery,
  includedColor,
  excludedColor,
  onFilterChanged,
}: FilterBarProps) => {
  const { t } = useTranslation("searchbar");

  const handleRemove = useCallback(
    (index: number) => {
      const list = [...filters];
      list.splice(index, 1);
      onFilterChanged?.(list);
    },
    [filters],
  );
  const handleChange = useCallback(
    (filter: FilterObject, index?: number) => {
      const list = [...filters];
      isNil(index) ? list.push(filter) : list.splice(index, 1, filter);
      onFilterChanged?.(list);
    },
    [filters],
  );
  const handleToggle = useCallback(
    (
      type:
        | "disableAll"
        | "enableAll"
        | "toggleDisable"
        | "excludeAll"
        | "includeAll"
        | "invertAll"
        | "removeAll",
    ) => {
      const list = [];
      if (type === "removeAll") {
        list.push(...filters.filter((filter) => filter.required));
      }
      if (type !== "removeAll") {
        list.push(
          ...filters.map((filter) => {
            if (type === "disableAll") filter.disabled = true;
            if (type === "enableAll") filter.disabled = false;
            if (type === "toggleDisable") filter.disabled = !filter.disabled;
            if (type === "excludeAll" && filter.field) filter.negate = true;
            if (type === "includeAll" && filter.field) filter.negate = false;
            if (type === "invertAll" && filter.field)
              filter.negate = !filter.negate;
            return { ...filter };
          }),
        );
      }
      onFilterChanged?.(list);
    },
    [filters],
  );

  const menuItems = useMemo(() => {
    const key = {
      someDisabled: false,
      someEnabled: false,
      someExcluded: false,
      someIncluded: false,
      canRemoveAll: false,
    };
    filters.forEach((filter) => {
      if (filter.disabled && filter.canDisable !== false && !key.someDisabled)
        key.someDisabled = true;
      if (!filter.disabled && filter.canDisable !== false && !key.someEnabled)
        key.someEnabled = true;
      if (
        filter.field &&
        filter.negate &&
        filter.canInvert !== false &&
        !key.someExcluded
      )
        key.someExcluded = true;
      if (
        filter.field &&
        !filter.negate &&
        filter.canInvert !== false &&
        !key.someIncluded
      )
        key.someIncluded = true;
      if (!filter.required && !key.canRemoveAll) key.canRemoveAll = true;
    });
    return key;
  }, [filters]);

  return (
    <FilterContext.Provider
      value={{ defaultQuery, querySchema, queryLanguage, fields }}
    >
      <div className="flex flex-wrap gap-1 items-center">
        <Dropdown showArrow disabled={isEmpty(filters)}>
          <Icon
            icon={CoreIcons.config}
            className={classNames(
              isEmpty(filters) && "pointer-events-none opacity-30",
            )}
            color={!isEmpty(filters) ? "primary" : undefined}
          />
          <Menu className="text-sm" onClick={handleToggle as AnyObject}>
            {menuItems.someDisabled && (
              <MenuItem id="enableAll" label={t("label.enableAll")} />
            )}
            {menuItems.someEnabled && (
              <MenuItem id="disableAll" label={t("label.disableAll")} />
            )}
            <MenuItem
              icon={CoreIcons.invertDisable}
              id="toggleDisable"
              label={t("label.toggleDisable")}
            />
            <Divider />
            {menuItems.someExcluded && (
              <MenuItem id="includeAll" label={t("label.includeAll")} />
            )}
            {menuItems.someIncluded && (
              <MenuItem id="excludeAll" label={t("label.excludeAll")} />
            )}
            <MenuItem
              id="invertAll"
              icon={CoreIcons.invertExclude}
              label={t("label.invertAll")}
            />
            <Divider />
            <MenuItem
              id="removeAll"
              color="danger"
              icon={CoreIcons.remove}
              label={t("label.removeAll")}
              disabled={!menuItems.canRemoveAll}
            />
          </Menu>
        </Dropdown>
        {filters?.map((filter, idx) => (
          <FilterTag
            key={idx}
            filter={filter}
            editable={editable}
            includedColor={includedColor}
            excludedColor={excludedColor}
            onRemove={() => handleRemove(idx)}
            onChange={(filter) => handleChange(filter, idx)}
          />
        ))}
        {allowAdd && (
          <Dropdown showArrow>
            <Chip
              size="sm"
              className="!outline-dashed !outline-tint-400"
              icon={CoreIcons.insert}
            >
              {t("label.add")}
            </Chip>
            <FilterEdit onChange={handleChange} />
          </Dropdown>
        )}
      </div>
    </FilterContext.Provider>
  );
};
