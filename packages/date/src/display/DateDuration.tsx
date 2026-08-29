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
import { type ChildrenProp, type CssProp, type TestProps } from "@react-fabric/core/dist/types/types";
import { cn, Format } from "@react-fabric/utilities";
import { intervalToDuration, isBefore } from "date-fns";
import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { type DateLike } from "../types";
import { DateUtil } from "../utils/dateUtil";

export interface Props extends CssProp, TestProps, Partial<ChildrenProp<MenuProps>> {
  /**
   * date like value
   */
  date: DateLike;
  /**
   * date format
   */
  format?: string;
}

/**
 * DateDuration component to display the duration from a given date to now.
 * It calculates the difference in years, months, weeks, days, hours, minutes, and seconds,
 * and displays it in a human-readable format.
 * It uses the current locale for translations.
 *
 * @example
 * ```jsx
 * <DateDuration date={new Date("2020-01-01")} />
 * ```
 */
export function DateDuration({ date, children, className, format = "PPpp", ...props }: Props) {
  const { t } = useTranslation("date");
  const [dateInterval, setDateInterval] = useState<ReturnType<typeof intervalToDuration>>(() => ({}));

  useEffect(() => {
    // eslint-disable-next-line @eslint-react/set-state-in-effect
    setDateInterval(intervalToDuration({ start: new Date(date), end: new Date() }));
    // update interval every minute
    const tmr = setInterval(() => {
      setDateInterval(intervalToDuration({ start: new Date(date), end: new Date() }));
    }, 60 * 1000);
    return () => clearInterval(tmr);
  }, [date]);

  const label = useMemo(() => {
    const before = isBefore(DateUtil.parseDate(date), new Date());
    const tkey = before ? "relative.before" : "relative.after";
    let part = "now";
    let count = 0;
    if (dateInterval.years && dateInterval.years > 0) {
      part = "years";
      count = dateInterval.years;
      if ((dateInterval.months ?? 0) > 10) {
        part = "yearsX";
        count += 1;
      }
    } else if (dateInterval.months && dateInterval.months > 0) {
      part = "months";
      count = dateInterval.months;
      if (dateInterval.months > 10) {
        part = "yearsX";
        count = 1;
      } else if ((dateInterval.weeks ?? 0) > 3) {
        part = "monthsX";
        count += 1;
      }
    } else if (dateInterval.weeks && dateInterval.weeks > 0) {
      part = "weeks";
      count = dateInterval.weeks;
      if (dateInterval.weeks > 3) {
        part = "monthsX";
        count = 1;
      } else if ((dateInterval.days ?? 0) > 5) {
        part = "weeksX";
        count += 1;
      }
    } else if (dateInterval.days && dateInterval.days > 0) {
      part = "days";
      count = dateInterval.days;
      if (dateInterval.days > 5) {
        part = "weeksX";
        count = 1;
      } else if ((dateInterval.hours ?? 0) > 20) {
        part = "daysX";
        count += 1;
      }
    } else if (dateInterval.hours && dateInterval.hours > 0) {
      part = "hours";
      count = dateInterval.hours;
      if (dateInterval.hours > 20) {
        part = "daysX";
        count = 1;
      } else if ((dateInterval.minutes ?? 0) > 45) {
        part = "hoursX";
        count += 1;
      }
    } else if (dateInterval.minutes && dateInterval.minutes > 0) {
      part = "minutes";
      count = dateInterval.minutes;
      if (dateInterval.minutes > 45) {
        part = "hoursX";
        count = 1;
      } else if ((dateInterval.seconds ?? 0) > 45) {
        part = "minuteX";
        count += 1;
      }
    } else if (dateInterval.seconds && dateInterval.seconds > 15) {
      part = "seconds";
      count = dateInterval.seconds;
      if (dateInterval.seconds > 45) {
        part = "minutesX";
        count = 1;
      }
    }

    return t(`${tkey}.${part}`, { count });
  }, [
    date,
    dateInterval.days,
    dateInterval.hours,
    dateInterval.minutes,
    dateInterval.months,
    dateInterval.seconds,
    dateInterval.weeks,
    dateInterval.years,
    t,
  ]);

  const dtLabel = (
    <Tooltip content={Format.date(date, format)}>
      <span className={cn(className, !!children && "underline decoration-dotted cursor-pointer")} {...props}>
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
}
