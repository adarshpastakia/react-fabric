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

import { isArray } from "@react-fabric/utilities";
import classNames from "classnames";
import {
  isAfter,
  isBefore,
  isSameDay,
  isSameMonth,
  isSameYear,
  startOfDecade,
} from "date-fns";
import i18next from "i18next";
import { useMemo } from "react";
import { PageType } from "../types";
import { DateUtil } from "../utils/dateUtil";

export interface DateCellProps {
  date: Date;
  page: PageType;
  selected?: Date | [Date, Date];
  hilight?: [Date, Date];
  isHijri?: boolean;
  isMuted?: boolean;
  className?: string;
  selectDate?: (date: Date) => void;
  changePageDate?: (date: Date) => void;
  mouseOver?: (date: Date) => void;
  dateDisabled?: (date: Date) => boolean;
}

export const DateCell = ({
  date = new Date(),
  isMuted = false,
  ...props
}: DateCellProps) => {
  const {
    page,
    selected,
    hilight,
    isHijri,
    className,
    selectDate,
    changePageDate,
    mouseOver,
    dateDisabled,
  } = props;

  const isToday = useMemo(() => isSameDay(date, new Date()), [date]);
  const isSelected = useMemo(
    () => selected && !isArray(selected) && isSameDay(date, selected),
    [date, page, selected],
  );

  const isMarked = useMemo(() => {
    switch (page) {
      case PageType.MONTH:
        return selected && !isArray(selected) && isSameMonth(date, selected);
      case PageType.YEAR:
        return selected && !isArray(selected) && isSameYear(date, selected);
      case PageType.DECADE:
        return (
          selected &&
          !isArray(selected) &&
          isSameYear(startOfDecade(date), startOfDecade(selected))
        );
    }
  }, [date, page, selected]);

  const isHilightEdge = useMemo(() => {
    if (!isMuted) {
      if (hilight) {
        return isSameDay(date, hilight[0]);
      } else if (Array.isArray(selected)) {
        const [start, end] = selected;
        let hilight: string | false = false;
        if (isSameDay(date, start) && isSameDay(date, end))
          hilight = "startend";
        else if (isSameDay(date, start)) hilight = "start";
        else if (isSameDay(date, end)) hilight = "end";
        return hilight;
      }
    }
  }, [date, hilight, selected, isMuted]);

  const isHilight = useMemo(() => {
    if (!isMuted) {
      if (hilight) {
        const [start, end] = hilight;
        if (isBefore(start, end)) {
          return (
            isAfter(date, start) &&
            isBefore(date, DateUtil.addDays(end, 1, isHijri))
          );
        } else {
          return (
            isBefore(date, start) &&
            isAfter(date, DateUtil.addDays(end, -1, isHijri))
          );
        }
      } else if (Array.isArray(selected)) {
        const [start, end] = selected;
        return (
          isAfter(date, DateUtil.startOfDay(start, isHijri)) &&
          isBefore(date, DateUtil.startOfDay(end, isHijri))
        );
      }
    }
  }, [isMuted, hilight, selected, date, isHijri]);

  const isDisabled = useMemo(
    () => !!isSelected || dateDisabled?.(date),
    [date, dateDisabled, isSelected],
  );

  return (
    <div
      role="none"
      className={classNames(
        "p-1 m-px text-sm text-center rounded",
        className,
        !isDisabled && isMuted && "text-tint-500",
        (isToday || isMarked) &&
          "underline underline-offset-4 text-primary-700",
        (!!isSelected || isHilightEdge) && "bg-primary-400 text-white",
        isHilightEdge === "start" && "rounded-e-none",
        isHilightEdge === "end" && "rounded-s-none",
        isHilight && "bg-primary-50 rounded-none",
        !isDisabled &&
          "cursor-pointer hover:bg-primary-100 hover:text-primary-700",
        isDisabled && "text-tint-100 cursor-not-allowed",
      )}
      onFocus={() => hilight && page === PageType.DATE && mouseOver?.(date)}
      onMouseOver={() => hilight && page === PageType.DATE && mouseOver?.(date)}
      onClick={() =>
        !isDisabled &&
        (page === PageType.DATE ? selectDate?.(date) : changePageDate?.(date))
      }
    >
      {page === PageType.DATE &&
        DateUtil.format(date, "d", i18next.language, isHijri)}
      {page === PageType.MONTH &&
        DateUtil.format(date, "MMM", i18next.language, isHijri)}
      {page === PageType.YEAR &&
        DateUtil.format(date, "yyyy", i18next.language, isHijri)}
      {page === PageType.DECADE &&
        `${DateUtil.format(
          DateUtil.startOfDecade(date, isHijri),
          "yyyy",
          i18next.language,
          isHijri,
        )}-${DateUtil.format(
          DateUtil.endOfDecade(date, isHijri),
          "yy",
          i18next.language,
          isHijri,
        )}`}
    </div>
  );
};
