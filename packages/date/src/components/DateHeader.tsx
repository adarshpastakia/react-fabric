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

import { Button, CoreIcons } from "@react-fabric/core";
import classNames from "classnames";
import { addDays, isAfter, isBefore } from "date-fns";
import i18next from "i18next";
import { useMemo } from "react";
import { type DateLike, PageType } from "../types";
import { DateUtil } from "../utils/dateUtil";

interface Props {
  min?: DateLike;
  max?: DateLike;
  pageDate: Date;
  page: PageType;
  isHijri?: boolean;
  hidePrevious?: boolean;
  hideNext?: boolean;
  changePage: (page: PageType) => void;
  changePageDate: (date: Date) => void;
}

export const DateHeader = (props: Props) => {
  const {
    page,
    pageDate = new Date(),
    changePage,
    changePageDate,
    hideNext,
    hidePrevious,
    min,
    max,
    isHijri = false,
  } = props;

  const headLabel = useMemo(() => {
    switch (page) {
      case PageType.DATE:
        return DateUtil.format(pageDate, "MMM yyyy", i18next.language, isHijri);
      case PageType.MONTH:
        return DateUtil.format(pageDate, "yyyy", i18next.language, isHijri);
      case PageType.YEAR:
        return `${DateUtil.format(
          DateUtil.startOfDecade(pageDate, isHijri),
          "yyyy",
          i18next.language,
          isHijri,
        )} - ${DateUtil.format(
          DateUtil.endOfDecade(pageDate, isHijri),
          "yyyy",
          i18next.language,
          isHijri,
        )}`;
      case PageType.DECADE:
        return `${DateUtil.format(
          DateUtil.startOfCentury(pageDate, isHijri),
          "yyyy",
          i18next.language,
          isHijri,
        )} - ${DateUtil.format(
          DateUtil.endOfCentury(pageDate, isHijri),
          "yyyy",
          i18next.language,
          isHijri,
        )}`;
    }
  }, [i18next.language, isHijri, page, pageDate]);

  const [startPage, endPage] = useMemo(() => {
    if (page === PageType.DATE) {
      const dateBefore = addDays(DateUtil.startOfYear(pageDate, isHijri), -1);
      const dateAfter = addDays(DateUtil.endOfYear(pageDate, isHijri), 1);

      return [
        min && isBefore(dateBefore, min) ? null : dateBefore,
        max && isAfter(dateAfter, max) ? null : dateAfter,
      ];
    }
    if (page === PageType.MONTH) {
      const dateBefore = addDays(DateUtil.startOfDecade(pageDate, isHijri), -1);
      const dateAfter = addDays(DateUtil.endOfDecade(pageDate, isHijri), 1);

      return [
        min && isBefore(dateBefore, min) ? null : dateBefore,
        max && isAfter(dateAfter, max) ? null : dateAfter,
      ];
    }
    if (page === PageType.YEAR) {
      const dateBefore = addDays(
        DateUtil.startOfCentury(pageDate, isHijri),
        -1,
      );
      const dateAfter = addDays(DateUtil.endOfCentury(pageDate, isHijri), 1);

      return [
        min && isBefore(dateBefore, min) ? null : dateBefore,
        max && isAfter(dateAfter, max) ? null : dateAfter,
      ];
    }
    return [];
  }, [page, min, max, pageDate, isHijri]);

  const [previousPage, nextPage] = useMemo(() => {
    if (page === PageType.DATE) {
      const dateBefore = addDays(DateUtil.startOfMonth(pageDate, isHijri), -1);
      const dateAfter = addDays(DateUtil.endOfMonth(pageDate, isHijri), 1);
      return [
        min && isBefore(dateBefore, min) ? null : dateBefore,
        max && isAfter(dateAfter, max) ? null : dateAfter,
      ];
    }
    if (page === PageType.MONTH) {
      const dateBefore = addDays(DateUtil.startOfYear(pageDate, isHijri), -1);
      const dateAfter = addDays(DateUtil.endOfYear(pageDate, isHijri), 1);
      return [
        min && isBefore(dateBefore, min) ? null : dateBefore,
        max && isAfter(dateAfter, max) ? null : dateAfter,
      ];
    }
    if (page === PageType.YEAR) {
      const dateBefore = addDays(DateUtil.startOfDecade(pageDate, isHijri), -1);
      const dateAfter = addDays(DateUtil.endOfDecade(pageDate, isHijri), 1);

      return [
        min && isBefore(dateBefore, min) ? null : dateBefore,
        max && isAfter(dateAfter, max) ? null : dateAfter,
      ];
    }
    if (page === PageType.DECADE) {
      const dateBefore = addDays(
        DateUtil.startOfCentury(pageDate, isHijri),
        -1,
      );
      const dateAfter = addDays(DateUtil.endOfCentury(pageDate, isHijri), 1);

      return [
        min && isBefore(dateBefore, min) ? null : dateBefore,
        max && isAfter(dateAfter, max) ? null : dateAfter,
      ];
    }
    return [];
  }, [page, min, max, pageDate, isHijri]);

  return (
    <div className="flex flex-nowrap items-center area-head" data-page={page}>
      {startPage !== undefined && (
        <Button
          icon={CoreIcons.chevronsLeft}
          rtlFlip
          size="sm"
          variant="link"
          aria-label="start"
          disabled={!startPage}
          className={classNames(hidePrevious && "invisible")}
          onClick={() => startPage && changePageDate?.(startPage)}
        />
      )}
      <Button
        icon={CoreIcons.chevronLeft}
        rtlFlip
        size="sm"
        variant="link"
        aria-label="prev"
        disabled={!previousPage}
        className={classNames(hidePrevious && "invisible")}
        onClick={() => previousPage && changePageDate?.(previousPage)}
      />
      <div
        role="none"
        onClick={() => changePage(page + 1)}
        className={classNames(
          "flex-1 px-2 py-1 text-primary-600 text-center text-sm font-medium truncate",
          page === PageType.DECADE ? "pointer-events-none" : "cursor-pointer",
        )}
      >
        {headLabel}
      </div>
      <Button
        icon={CoreIcons.chevronRight}
        rtlFlip
        size="sm"
        variant="link"
        aria-label="next"
        disabled={!nextPage}
        className={classNames(hideNext && "invisible")}
        onClick={() => nextPage && changePageDate?.(nextPage)}
      />
      {endPage !== undefined && (
        <Button
          icon={CoreIcons.chevronsRight}
          rtlFlip
          size="sm"
          variant="link"
          aria-label="end"
          disabled={!endPage}
          className={classNames(hideNext && "invisible")}
          onClick={() => endPage && changePageDate?.(endPage)}
        />
      )}
    </div>
  );
};
