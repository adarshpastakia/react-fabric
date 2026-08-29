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

import { Badge, EmptyContent, Icon } from "@react-fabric/core";
import type { BadgeType } from "@react-fabric/core/dist/types/components/badge/Badge";
import { type TestProps } from "@react-fabric/core/dist/types/types";
import { Fragment, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelectableList, type SelectableProps } from "../hooks/useSelectableList";

export interface CheckListItem {
  id: string;
  label: string;
  icon?: string | React.ReactElement;
  badge?: BadgeType;
  disabled?: boolean;
}

export interface CheckListProps extends SelectableProps, TestProps {
  /**
   * list items
   */
  items: CheckListItem[];
  /**
   * allow negative selections
   */
  allowNegative?: boolean;
  /**
   * max list items
   */
  maxCount?: number;
  /**
   * message for empty list
   */
  emptyMessage?: string;

  sortItems?: boolean;
}

function CheckItem({
  id,
  allowNegative,
  selected,
  icon,
  label,
  disabled,
  onClick,
  badge,
}: Omit<CheckListItem, "selected"> & {
  onClick: (id: string, isNegative: boolean) => void;
  selected?: number;
  allowNegative?: boolean;
}) {
  return (
    <div
      role="none"
      className="ax-checkList__item"
      data-disabled={disabled}
      onClick={() => onClick(id, false)}
      onContextMenu={(e) => [allowNegative && onClick(id, true), e.preventDefault()]}
    >
      {!allowNegative && (
        <Icon
          data-type="checkbox"
          className="ax-checkList__checkbox"
          data-selected={selected === 1}
          icon={selected ? "icon-[mdi--checkbox-marked]" : "icon-[mdi--checkbox-blank-outline]"}
        />
      )}
      {allowNegative && (
        <Fragment>
          <Icon
            data-type="multiple"
            className="ax-checkList__checkbox"
            icon={
              selected === 1
                ? "icon-[mdi--plus-box-outline]"
                : selected === -1
                  ? "icon-[mdi--minus-box-outline]"
                  : "icon-[mdi--checkbox-blank-outline]"
            }
            data-selected={selected}
          />
          <div className="ax-checkList__checkbox">
            <button
              type="button"
              className="size-fit leading-0 cursor-pointer"
              onClick={(e) => [(onClick(id, false), e.stopPropagation())]}
            >
              <Icon
                data-type="positive"
                icon={selected === 1 ? "icon-[mdi--plus-box]" : "icon-[mdi--plus-box-outline]"}
                data-selected={selected === 1}
              />
            </button>
            <button
              type="button"
              className="size-fit leading-0 cursor-pointer"
              onClick={(e) => [(onClick(id, true), e.stopPropagation())]}
            >
              <Icon
                data-type="negative"
                icon={selected === -1 ? "icon-[mdi--minus-box]" : "icon-[mdi--minus-box-outline]"}
                data-selected={selected === -1}
              />
            </button>
          </div>
        </Fragment>
      )}
      {icon && <Icon icon={icon} />}
      <label>{label}</label>
      {badge && <Badge {...(badge as KeyValue)} />}
    </div>
  );
}

/**
 * CheckList component to display a list of selectable items with checkboxes.
 * It supports selection, deselection, and allows for negative selections.
 *
 * @example
 * ```jsx
 * <CheckList
 *   items={[
 *     { id: "1", label: "Item 1", icon: "icon1" },
 *     { id: "2", label: "Item 2", icon: "icon2", badge: { text: "New" } },
 *   ]}
 *   maxCount={5}
 *   allowNegative={true}
 *   emptyMessage="No items available"
 *   onChange={(selectedItems) => console.log(selectedItems)}
 *   onClick={(itemId, isNegative) => console.log(itemId, isNegative)}
 * />
 * ```
 */
export function CheckList({
  items = [],
  maxCount = 0,
  allowNegative,
  emptyMessage,
  sortItems = true,
  selected,
  nonselected,
  onChange,
  onClick,
  ...aria
}: CheckListProps) {
  const { t } = useTranslation("data");
  const { selection, toggleSelection } = useSelectableList({
    items,
    selected,
    nonselected,
    onChange,
    onClick,
  });
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line @eslint-react/set-state-in-effect
    setShowMore(false);
  }, [items]);

  const listItems = useMemo(() => {
    return [...items]
      .sort((a, b) => {
        if (sortItems && selection[a.id] !== selection[b.id]) {
          if (selection[a.id] === 1) return -1;
          if (selection[b.id] === 1) return 1;
          if (selection[a.id] === -1) return -1;
          if (selection[b.id] === -1) return 1;
        }
        return 0;
      })
      .slice(0, !showMore && maxCount > 0 ? maxCount : undefined);
  }, [items, selection, maxCount, showMore, sortItems]);

  return (
    <div {...aria}>
      {listItems.map((item, index) => (
        <CheckItem
          // eslint-disable-next-line @eslint-react/no-array-index-key
          key={index}
          {...item}
          onClick={toggleSelection}
          allowNegative={allowNegative}
          selected={selection[item.id]}
        />
      ))}
      {maxCount > 0 && items.length > maxCount && (
        <div className="ax-moreLink">
          <span role="none" className="link" onClick={() => setShowMore(!showMore)}>
            ...{t(`core:action.${showMore ? "less" : "more"}`)}
          </span>
        </div>
      )}
      {listItems.length === 0 && <EmptyContent className="text-sm" message={emptyMessage ?? t("checkList.empty")} />}
    </div>
  );
}
