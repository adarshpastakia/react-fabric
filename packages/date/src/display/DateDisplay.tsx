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

import { Dropdown, Tooltip, useGlobals } from "@react-fabric/core";
import { type MenuProps } from "@react-fabric/core/dist/types/components/menu/types";
import {
  type AriaProps,
  type ChildrenProp,
  type CssProp,
  type TestProps,
} from "@react-fabric/core/dist/types/types";
import { type ElementType } from "react";
import { type DateLike } from "../types";
import { DateUtil } from "../utils/dateUtil";
import classNames from "classnames";

export interface Props
  extends CssProp,
    AriaProps,
    TestProps,
    Partial<ChildrenProp<ElementType<MenuProps>>> {
  /**
   * date like value
   */
  date?: DateLike;
  /**
   * date format
   */
  format?: string;

  showAlternateDate?: boolean;
}

/**
 * DateDisplay component to display a formatted gregorian or hijri date with optional tooltip and dropdown.
 * It uses the current calendar and locale from the global context.
 * It formats the date using the provided format or a default format.
 * If `showAlternateDate` is true, it shows a tooltip with the formatted date.
 * If `children` are provided, it wraps the date in a dropdown.
 *
 * @param {Object} props - The component props.
 * @returns {JSX.Element} - The rendered component.
 *
 * @example
 * ```jsx
 * <DateDisplay date={new Date()} />
 * ```
 *
 * @see {@link https://adarshpastakia.github.io/react-fabric/?path=/docs/date-date-display--docs}
 */
export const DateDisplay = ({
  date,
  className,
  format = "eee, PPpp",
  children,
  showAlternateDate,
  ...aria
}: Props) => {
  const { currentCalendar, currentLocale } = useGlobals();

  const dtLabel = (
    <Tooltip
      disabled={!showAlternateDate}
      content={DateUtil.format(
        date,
        format,
        currentLocale,
        currentCalendar !== "hijri",
      )}
    >
      <span
        className={classNames(
          className,
          !!children && "underline decoration-dotted cursor-pointer",
        )}
        {...aria}
      >
        {DateUtil.format(
          date,
          format,
          currentLocale,
          currentCalendar === "hijri",
        )}
      </span>
    </Tooltip>
  );

  return children ? (
    <Dropdown showArrow closeOnClick>
      {dtLabel}
      {children}
    </Dropdown>
  ) : (
    dtLabel
  );
};
