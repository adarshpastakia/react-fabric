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
  addDays as _addDays,
  addMonths as _addMonths,
  addWeeks as _addWeeks,
  addYears as _addYears,
  endOfDay as _endOfDay,
  endOfDecade as _endOfDecade,
  endOfMonth as _endOfMonth,
  endOfWeek as _endOfWeek,
  endOfYear as _endOfYear,
  format as _format,
  isSameMonth as _isSameMonth,
  isSameYear as _isSameYear,
  startOfDay as _startOfDay,
  startOfDecade as _startOfDecade,
  startOfMonth as _startOfMonth,
  startOfWeek as _startOfWeek,
  startOfYear as _startOfYear,
  addHours,
  addMinutes,
  addQuarters,
  endOfHour,
  endOfMinute,
  endOfQuarter,
  isAfter,
  isBefore,
  startOfHour,
  startOfMinute,
  startOfQuarter,
} from "date-fns";
import { DatePart, PageType, type DateLike } from "../types";
// import { parseDate } from "./dateMath";
import { isNil, isString } from "@react-fabric/utilities";
import {
  arSA as ar,
  de,
  enUS as en,
  es,
  fr,
  hi,
  it,
  ja,
  ko,
  pt,
  ru,
  zhCN as zh,
} from "date-fns/locale";
import i18next from "i18next";

const Locales: KeyValue = {
  ar,
  en,
  de,
  es,
  fr,
  hi,
  it,
  ja,
  ko,
  pt,
  ru,
  zh,
};

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace DateUtil {
  const translateNumber = (d: string) => {
    return d
      .replace(/0/g, "٠")
      .replace(/1/g, "١")
      .replace(/2/g, "٢")
      .replace(/3/g, "٣")
      .replace(/4/g, "٤")
      .replace(/5/g, "٥")
      .replace(/6/g, "٦")
      .replace(/7/g, "٧")
      .replace(/8/g, "٨")
      .replace(/9/g, "٩");
  };

  const formatGregorian = (dt: Date, fmt = "", loc = "en") => {
    const ret = _format(dt, fmt, {
      locale: Locales[loc] ?? Locales.en,
    });
    return loc && loc === "ar" ? translateNumber(ret) : ret;
  };
  const formatHijri = (dt: Date, fmt = "", loc = "en") => {
    const hdate = dt.toHijri();
    const ret = hdate.format(fmt, {
      locale: loc,
    });
    return loc && loc === "ar" ? translateNumber(ret) : ret;
  };

  const addHijriDays = (dt: Date, d: number) => {
    const hdate = dt.toHijri().ignoreTime();
    if (d < 0) {
      return hdate.subtractDays(d);
    } else {
      return hdate.addDays(d);
    }
  };

  const addHijriMonth = (dt: Date, d: number) => {
    const hdate = dt.toHijri().ignoreTime();
    if (hdate.month + d > 12) {
      hdate.year += 1;
      hdate.month = 1;
    } else if (hdate.month + d < 1) {
      hdate.year -= 1;
      hdate.month = 12;
    } else {
      hdate.month += d;
    }
    return hdate;
  };

  export const format = (
    date?: DateLike,
    fmt = "dd MMM yyyy",
    locale?: string,
    isHijri?: boolean,
  ) => {
    let formatted = "";
    if (!isNil(date)) {
      const dt = isRelative(date) ? parseDate(date) : new Date(date);
      if (dt != null) {
        formatted = isHijri
          ? formatHijri(dt, fmt, locale)
          : formatGregorian(dt, fmt, locale);
      }
    }
    return formatted;
  };

  export const isRelative = (date: DateLike): date is string => {
    return isString(date) && date.match(/^(\$\w+)([+-])(\d+)?$/) !== null;
  };

  export const isRelativeRange = (date: DateLike): date is string => {
    return (
      isString(date) &&
      date.match(/^(\$\w+)([+-])(\d+)?\|(\$\w+)([+-])(\d+)?$/) !== null
    );
  };

  export const startOfDay = (date?: Date, isHijri: boolean = false) => {
    if (!date) return new Date();
    if (isHijri) {
      const hdate = date.toHijri().ignoreTime();
      return hdate.toGregorian();
    } else {
      return _startOfDay(date);
    }
  };

  export const startOfWeek = (date: Date, isHijri: boolean = false) => {
    if (isHijri) {
      const hdate = date.toHijri().ignoreTime();
      hdate.subtractDays(hdate.day);
      return hdate.toGregorian();
    } else {
      return _startOfWeek(date);
    }
  };

  export const startOfMonth = (date: Date, isHijri: boolean = false) => {
    if (isHijri) {
      const hdate = date.toHijri().ignoreTime();
      hdate.date = 1;
      return hdate.toGregorian();
    } else {
      return _startOfMonth(date);
    }
  };

  export const startOfYear = (date: Date, isHijri: boolean = false) => {
    if (isHijri) {
      const hdate = date.toHijri().ignoreTime();
      hdate.date = 1;
      hdate.month = 1;
      return hdate.toGregorian();
    } else {
      return _startOfYear(date);
    }
  };

  export const startOfDecade = (date: Date, isHijri: boolean = false) => {
    if (isHijri) {
      const hdate = date.toHijri().ignoreTime();
      hdate.date = 1;
      hdate.month = 1;
      hdate.year -= hdate.year % 10;
      return hdate.toGregorian();
    } else {
      return _startOfDecade(date);
    }
  };

  export const startOfCentury = (date: Date, isHijri: boolean = false) => {
    if (isHijri) {
      const hdate = date.toHijri().ignoreTime();
      hdate.date = 1;
      hdate.month = 1;
      hdate.year -= hdate.year % 100;
      return hdate.toGregorian();
    } else {
      return _addYears(_startOfYear(date), -1 * (date.getFullYear() % 100));
    }
  };

  export const endOfDay = (date?: Date, isHijri: boolean = false) => {
    if (!date) return new Date();
    if (isHijri) {
      const hdate = date.toHijri().ignoreTime();
      return _endOfDay(hdate.toGregorian());
    } else {
      return _endOfDay(date);
    }
  };

  export const endOfWeek = (date: Date, isHijri: boolean = false) => {
    if (isHijri) {
      const hdate = date.toHijri().ignoreTime();
      hdate.addDays(6 - hdate.day);
      return _endOfDay(hdate.toGregorian());
    } else {
      return _endOfWeek(date);
    }
  };

  export const endOfMonth = (date: Date, isHijri: boolean = false) => {
    if (isHijri) {
      const hdate = addHijriMonth(date, 1);
      hdate.date = 1;
      hdate.subtractDay();
      return _endOfDay(hdate.toGregorian());
    } else {
      return _endOfMonth(date);
    }
  };

  export const endOfYear = (date: Date, isHijri: boolean = false) => {
    if (isHijri) {
      const hdate = date.toHijri().ignoreTime();
      hdate.year += 1;
      hdate.month = 1;
      hdate.date = 1;
      hdate.subtractDay();
      return _endOfDay(hdate.toGregorian());
    } else {
      return _endOfYear(date);
    }
  };

  export const endOfDecade = (date: Date, isHijri: boolean = false) => {
    if (isHijri) {
      const hdate = date.toHijri().ignoreTime();
      hdate.year += 10 - (hdate.year % 10);
      hdate.month = 1;
      hdate.date = 1;
      hdate.subtractDay();
      return _endOfDay(hdate.toGregorian());
    } else {
      return _endOfDecade(date);
    }
  };

  export const endOfCentury = (date: Date, isHijri: boolean = false) => {
    if (isHijri) {
      const hdate = date.toHijri().ignoreTime();
      hdate.year += 100 - (hdate.year % 100);
      hdate.month = 1;
      hdate.date = 1;
      hdate.subtractDay();
      return _endOfDay(hdate.toGregorian());
    } else {
      return _addYears(_endOfYear(date), 100 - (date.getFullYear() % 100));
    }
  };

  export const addDays = (date: Date, d: number, isHijri: boolean = false) => {
    if (isHijri) {
      return addHijriDays(date, d).toGregorian();
    } else {
      return _addDays(date, d);
    }
  };

  export const addWeeks = (date: Date, d: number, isHijri: boolean = false) => {
    if (isHijri) {
      return addHijriDays(date, d * 7).toGregorian();
    } else {
      return _addWeeks(date, d);
    }
  };

  export const addMonths = (
    date: Date,
    d: number,
    isHijri: boolean = false,
  ) => {
    if (isHijri) {
      return addHijriMonth(date, d).toGregorian();
    } else {
      return _addMonths(date, d);
    }
  };

  export const addYears = (date: Date, d: number, isHijri: boolean = false) => {
    if (isHijri) {
      const hdate = date.toHijri().ignoreTime();
      hdate.year += d;
      return hdate.toGregorian();
    } else {
      return _addYears(date, d);
    }
  };

  export const getWeek = (
    date: Date,
    locale: string,
    isHijri: boolean = false,
  ) => {
    let ret = "";
    if (isHijri) {
      const start = startOfYear(date, isHijri);
      ret = format(new Date(date.getTime() - start.getTime()), "ww");
    } else {
      ret = format(date, "ww");
    }
    if (locale === "ar") {
      return translateNumber(ret);
    }
    return ret;
  };

  export const isSameMonth = (
    date: Date,
    compare: Date,
    isHijri: boolean = false,
  ) => {
    if (isHijri) {
      const hdate = date.toHijri().ignoreTime();
      const hcompare = compare.toHijri().ignoreTime();
      return hdate.month === hcompare.month;
    } else {
      return _isSameMonth(date, compare);
    }
  };

  export const isSameYear = (
    date: Date,
    compare: Date,
    isHijri: boolean = false,
  ) => {
    if (isHijri) {
      const hdate = date.toHijri().ignoreTime();
      const hcompare = compare.toHijri().ignoreTime();
      return hdate.year === hcompare.year;
    } else {
      return _isSameYear(date, compare);
    }
  };

  export const isDisabled = (
    date: Date,
    page: PageType,
    min?: DateLike,
    max?: DateLike,
  ) => {
    let methods = [_startOfDay, _endOfDay];
    if (page === PageType.MONTH) {
      methods = [_startOfMonth, _endOfMonth];
    } else if (page === PageType.YEAR) {
      methods = [_startOfYear, _endOfYear];
    } else if (page === PageType.DECADE) {
      methods = [_startOfDecade, _endOfDecade];
    }
    const [start, end] = methods;
    return (
      (!(min == null) && isBefore(start(date), start(min))) ||
      (!(max == null) && isAfter(end(date), end(max)))
    );
  };

  export const parseDate = (datelike: string): Date => {
    return _parse(datelike);
  };

  export const parseRange = (datelike: string): [Date, Date] => {
    const [start, end] = datelike.split("|");

    const parseStart = _parse(start, !end ? "start" : undefined);
    const parseEnd = _parse(end ?? start, !end ? "end" : undefined);

    return isBefore(parseStart, parseEnd)
      ? [parseStart, parseEnd]
      : [parseEnd, parseStart];
  };

  export const relativeTooltip = (datelike?: string, isHijri = false) => {
    if (!datelike) return "";

    const [start, end] = parseRange(datelike);

    return end
      ? [
          format(start, "MMM dd yyyy, HH:mm:ss aaa", i18next.language, isHijri),
          format(end, "MMM dd yyyy, HH:mm:ss aaa", i18next.language, isHijri),
        ].join(` ${i18next.t(`superdate:separator`, "→")} `)
      : format(start, "MMM dd yyyy, HH:mm:ss aaa", i18next.language, isHijri);
  };

  export const relativeLabel = (datelike?: string, isHijri = false) => {
    if (!datelike) return "";

    const [start, end] = datelike.split("|");

    let labels = [_parseLabel(start), _parseLabel(end)];

    if (start && end && !start.match(/^\$\w+/) && !end.match(/^\$\w+/)) {
      const parseStart = _parse(start);
      const parseEnd = _parse(end);
      if (isSameYear(parseStart, parseEnd)) {
        labels = [
          format(
            parseStart,
            isSameMonth(parseStart, parseEnd) ? "dd" : "dd MMM",
            i18next.language,
            isHijri,
          ),
          format(parseEnd, "dd MMM yyyy", i18next.language, isHijri),
        ];
      } else {
        labels = [
          format(parseStart, "dd MMM yyyy", i18next.language, isHijri),
          format(parseEnd, "dd MMM yyyy", i18next.language, isHijri),
        ];
      }
    } else if (start && !start.match(/^\$\w+/)) {
      const parseStart = _parse(start);
      labels = [format(parseStart, "dd MMM yyyy", i18next.language, isHijri)];
    }

    return end
      ? labels.join(` ${i18next.t(`superdate:separator`, "→")} `)
      : labels[0];
  };

  const _parseLabel = (dt: string) => {
    if (!dt) return "";
    const [, part, op = "+", diff = 0] =
      dt.match(/^(\$\w+)([+-])?(\d+)?$/) ?? [];
    if (part) {
      const t = (k: string, o?: AnyObject) => i18next.t(`superdate:${k}`, o);
      if (part === DatePart.NOW) {
        return t(`label.${DatePart.NOW}`) as string;
      }
      if (diff === 0) {
        return t(`now.${part}`) as string;
      } else {
        return t(`${op === "+" ? "next" : "prev"}.${part}`, {
          count: parseInt(diff, 10),
        }) as string;
      }
    }
  };

  const _parse = (dt: string, rounded?: "start" | "end") => {
    const [, part, diff = "0"] = dt.match(/^(\$\w+)([+-]\d+)?$/) ?? [];
    if (part) {
      let date = startOfMinute(new Date());
      switch (part) {
        case DatePart.NOW:
          if (rounded) {
            date = (rounded === "start" ? startOfDay : endOfDay)(date);
          }
          return date;
        case DatePart.MINUTE:
          if (rounded) {
            date = (rounded === "start" ? startOfMinute : endOfMinute)(date);
          }
          return addMinutes(date, parseInt(diff, 10));
        case DatePart.HOUR:
          if (rounded) {
            date = (rounded === "start" ? startOfHour : endOfHour)(date);
          }
          return addHours(date, parseInt(diff, 10));
        case DatePart.DAY:
          if (rounded) {
            date = (rounded === "start" ? startOfDay : endOfDay)(date);
          }
          return addDays(date, parseInt(diff, 10));
        case DatePart.WEEK:
          if (rounded) {
            date = (rounded === "start" ? startOfWeek : endOfWeek)(date);
          }
          return addWeeks(date, parseInt(diff, 10));
        case DatePart.MONTH:
          if (rounded) {
            date = (rounded === "start" ? startOfMonth : endOfMonth)(date);
          }
          return addMonths(date, parseInt(diff, 10));
        case DatePart.QUARTER:
          if (rounded) {
            date = (rounded === "start" ? startOfQuarter : endOfQuarter)(date);
          }
          return addQuarters(date, parseInt(diff, 10));
        case DatePart.YEAR:
          if (rounded) {
            date = (rounded === "start" ? startOfYear : endOfYear)(date);
          }
          return addYears(date, parseInt(diff, 10));
        case DatePart.DECADE:
          if (rounded) {
            date = (rounded === "start" ? startOfDecade : endOfDecade)(date);
          }
          return addYears(date, parseInt(diff, 10) * 10);
      }
    }

    return new Date(dt);
  };
}

// @ts-expect-error ignore
window.DateUtil = DateUtil;
