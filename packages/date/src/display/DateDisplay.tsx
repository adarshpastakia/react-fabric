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
import { type MenuItemProps } from "@react-fabric/core/dist/types/components/menu/types";
import {
  type AriaProps,
  type ChildrenProp,
  type CssProp,
  type TestProps,
} from "@react-fabric/core/dist/types/types";
import { type ElementType } from "react";
import { type DateLike } from "../types";
import { DateUtil } from "../utils/dateUtil";

export interface Props
  extends CssProp,
    AriaProps,
    TestProps,
    Partial<ChildrenProp<ElementType<MenuItemProps>>> {
  /**
   * date like value
   */
  date?: DateLike;
  /**
   * date format
   */
  format?: string;
}

export const DateDisplay = ({
  date,
  className,
  format = "eee, PPpp",
  children,
  ...aria
}: Props) => {
  const { currentCalendar, currentLocale } = useGlobals();

  const dtLabel = (
    <Tooltip
      content={DateUtil.format(
        date,
        format,
        currentLocale,
        currentCalendar !== "hijri",
      )}
    >
      <span className={className} {...aria}>
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
    <Dropdown>
      {dtLabel}
      {children}
    </Dropdown>
  ) : (
    dtLabel
  );
};