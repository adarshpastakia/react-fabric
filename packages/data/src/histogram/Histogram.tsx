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
  ActionLabel,
  Button,
  CoreIcons,
  EmptyContent,
  Icon,
} from "@react-fabric/core";
import {
  type ColorType,
  type PaletteType,
} from "@react-fabric/core/dist/types/types";
import { compareValues, Format } from "@react-fabric/utilities";
import classNames from "classnames";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import classes from "./Histogram.module.css";

const emptyIcon =
  "M20.84 22.73L11.11 13H3V11H9.11L6.11 8H3V6H4.11L1.11 3L2.39 1.73L22.11 21.46L20.84 22.73M15 11H14.2L15 11.8V11M21 8V6H9.2L11.2 8H21M3 18H9V16H3V18Z";

interface HistogramItem {
  id: string;
  label: string;
  count: number;
  total?: number;
  disabled?: boolean;
}

export interface HistogramProps {
  /**
   * histogram items list
   */
  items: HistogramItem[];
  /**
   * total count
   */
  total?: number;
  /**
   * histogram bar color
   */
  color?: ColorType | PaletteType;
  /**
   * sorted list
   */
  sortBy?: "label" | "count";
  /**
   * title when histo list is empty
   */
  emptyTitle?: string | JSX.Element;
  /**
   * message when histo list is empty
   */
  emptyMessage?: string | JSX.Element;
  /**
   * handle histo click
   */
  onClick?: (id: string, negative?: true) => void;
}

export const Histogram = ({
  items = [],
  total,
  color = "primary",
  sortBy = "count",
  emptyTitle,
  emptyMessage,
  onClick,
}: HistogramProps) => {
  const { t } = useTranslation("data");
  const maxTotal = useMemo(() => {
    if (total) return total;
    return Math.max(...items.map((item) => item.count));
  }, [total, items]);

  const sorted = useMemo(() => {
    return items.sort(
      compareValues(sortBy === "label" ? "asc" : "desc", sortBy),
    );
  }, [items, sortBy]);

  return (
    <div
      className={classes.histogram}
      style={
        {
          "--color": `var(--${color})`,
        } as AnyObject
      }
    >
      {sorted.length === 0 && (
        <EmptyContent
          icon={<Icon icon={emptyIcon} size="2.5rem" />}
          title={emptyTitle}
          message={emptyMessage ?? t("histogram.empty")}
        />
      )}
      {sorted?.map((item) => (
        <div
          role="none"
          key={item.id}
          data-disabled={item.count === 0 || item.disabled}
          className={classNames(
            "relative cursor-pointer flex flex-nowrap items-center select-none overflow-hidden min-h-6 my-px",
            classes.histoLabel,
            (item.count === 0 || item.disabled) && "pointer-events-none",
          )}
          onClick={(e) => [onClick?.(item.id), e.stopPropagation()]}
        >
          <div
            className={classNames(
              "absolute z-0 inset-0 opacity-50 min-w-2 ltr:bg-gradient-to-r rtl:bg-gradient-to-l from-0% to-100%",
              classes.histoBar,
            )}
            style={{
              width: `${Math.min(item.count / maxTotal, 1) * 100}%`,
            }}
          />
          <ActionLabel
            className="flex-1 truncate z-1 text-sm cursor-pointer font-medium"
            actions={[
              <Button
                key="negative"
                color="danger"
                size="sm"
                icon={CoreIcons.funnelMinus}
                aria-label="Filter Negative"
                onClick={() => onClick?.(item.id, true)}
              />,
              <Button
                key="positive"
                color="primary"
                size="sm"
                icon={CoreIcons.funnelPlus}
                aria-label="Filter"
                onClick={() => onClick?.(item.id)}
              />,
            ]}
          >
            {item.label}
          </ActionLabel>
          <span
            className={classNames(
              "z-1 rounded-full text-xs font-medium px-2 py-1 leading-none",
              classes.histoBadge,
            )}
          >
            {Format.number(item.count)}
          </span>
        </div>
      ))}
    </div>
  );
};
