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

import { Chip, CoreIcons, Dropdown, Icon } from "@react-fabric/core";
import { isNil } from "@react-fabric/utilities";
import classNames from "classnames";
import { Fragment, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { type FilterBarProps, type FilterObject } from "../types";
import { FilterMenu } from "./FilterMenu";

export const FilterTag = ({
  filter,
  fields,
  includedColor = "primary-500",
  excludedColor = "danger-500",
  onChange,
  onRemove,
}: {
  filter: FilterObject;
  onRemove: () => void;
  onChange: (filter: FilterObject) => void;
} & Pick<FilterBarProps, "fields" | "includedColor" | "excludedColor">) => {
  const { t } = useTranslation("searchbar");
  const label = useMemo(() => {
    if (filter.label)
      return (
        <Fragment>
          {filter.negate && <span className="font-semibold">NOT</span>}
          <span>{filter.label}</span>
        </Fragment>
      );

    return (
      <Fragment>
        {filter.negate && <span className="font-semibold">NOT</span>}
        <span>{filter.field}</span>
        <span className="font-semibold">
          {t(`operator.${filter.operator}`, { defaultValue: filter.operator })}
        </span>
        {"value" in filter && !isNil(filter.value) && (
          <span className="truncate block">
            {filter.value?.toString().substring(0, 24)}
          </span>
        )}
      </Fragment>
    );
  }, [filter]);

  const color = useMemo(
    () => filter.color ?? (filter.negate ? excludedColor : includedColor),
    [filter, includedColor, excludedColor],
  );

  const icon = useMemo(() => {
    if (filter.canDisable === false) return undefined;
    return filter.disabled ? CoreIcons.checkboxOff : CoreIcons.checkboxOn;
  }, [filter]);

  return (
    <Dropdown showArrow>
      <Chip
        size="sm"
        color={color}
        className="outline outline-1 max-w-60"
        variant={filter.pinned ? "solid" : undefined}
        icon={icon}
        iconColor={color}
        onIconClick={(e) => [
          onChange({ ...filter, disabled: !filter.disabled }),
          e.stopPropagation(),
        ]}
        data-testid="filter-tag"
        data-test-value={filter.id}
        stopPropagation
        onRemove={filter.required ? undefined : () => onRemove()}
      >
        <div
          className={classNames(
            "flex gap-1 items-center",
            filter.disabled && "line-through opacity-65",
          )}
        >
          {filter.pinned && <Icon icon={filter.icon ?? CoreIcons.pin} />}
          {label}
        </div>
      </Chip>
      <FilterMenu
        filter={filter}
        fields={fields}
        onChange={onChange}
        onRemove={onRemove}
      />
    </Dropdown>
  );
};
