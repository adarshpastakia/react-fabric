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

import { Dropdown, Tooltip } from "@react-fabric/core";
import { type MenuProps } from "@react-fabric/core/dist/types/components/menu/types";
import {
  type AriaProps,
  type ChildrenProp,
  type CssProp,
  type TestProps,
} from "@react-fabric/core/dist/types/types";
import { Format } from "@react-fabric/utilities";
import classNames from "classnames";
import { intervalToDuration, isBefore } from "date-fns";
import { useMemo, type ElementType } from "react";
import { useTranslation } from "react-i18next";
import { type DateLike } from "../types";
import { DateUtil } from "../utils/dateUtil";

export interface Props
  extends CssProp,
    AriaProps,
    TestProps,
    Partial<ChildrenProp<ElementType<MenuProps>>> {
  /**
   * date like value
   */
  date: DateLike;
  /**
   * date format
   */
  format?: string;
}

export const DateDuration = ({
  date,
  children,
  className,
  format = "PPpp",
  ...props
}: Props) => {
  const { t } = useTranslation("date");

  const interval = useMemo(() => {
    return intervalToDuration({ start: new Date(date), end: new Date() });
  }, [date]);

  const label = useMemo(() => {
    const before = isBefore(DateUtil.parseDate(date), new Date());
    const tkey = before ? "relative.before" : "relative.after";
    let part = "now";
    let count = 0;
    if (interval.years && interval.years > 0) {
      part = "years";
      count = interval.years;
      if ((interval.months ?? 0) > 10) {
        part = "yearsX";
        count += 1;
      }
    } else if (interval.months && interval.months > 0) {
      part = "months";
      count = interval.months;
      if (interval.months > 10) {
        part = "yearsX";
        count = 1;
      } else if ((interval.weeks ?? 0) > 3) {
        part = "monthsX";
        count += 1;
      }
    } else if (interval.weeks && interval.weeks > 0) {
      part = "weeks";
      count = interval.weeks;
      if (interval.weeks > 3) {
        part = "monthsX";
        count = 1;
      } else if ((interval.days ?? 0) > 5) {
        part = "weeksX";
        count += 1;
      }
    } else if (interval.days && interval.days > 0) {
      part = "days";
      count = interval.days;
      if (interval.days > 5) {
        part = "weeksX";
        count = 1;
      } else if ((interval.hours ?? 0) > 20) {
        part = "daysX";
        count += 1;
      }
    } else if (interval.hours && interval.hours > 0) {
      part = "hours";
      count = interval.hours;
      if (interval.hours > 20) {
        part = "daysX";
        count = 1;
      } else if ((interval.minutes ?? 0) > 45) {
        part = "hoursX";
        count += 1;
      }
    } else if (interval.minutes && interval.minutes > 0) {
      part = "minutes";
      count = interval.minutes;
      if (interval.minutes > 45) {
        part = "hoursX";
        count = 1;
      } else if ((interval.seconds ?? 0) > 45) {
        part = "minuteX";
        count += 1;
      }
    } else if (interval.seconds && interval.seconds > 15) {
      part = "seconds";
      count = interval.seconds;
      if (interval.seconds > 45) {
        part = "minutesX";
        count = 1;
      }
    }

    return t(`${tkey}.${part}`, { count });
  }, [interval, date]);

  const dtLabel = (
    <Tooltip content={Format.date(date, format)}>
      <span
        className={classNames(
          className,
          !!children && "underline decoration-dotted cursor-pointer",
        )}
        {...props}
      >
        {label}
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
