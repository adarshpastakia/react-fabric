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

import { getDay } from "date-fns";
import i18next from "i18next";
import { Fragment, useMemo } from "react";
import { DateUtil } from "../utils/dateUtil";
import { DateCell, type DateCellProps } from "./DateCell";
import classNames from "classnames";
import { PageType } from "../types";
import classes from "./Date.module.css";

const rows = [0, 1, 2, 3, 4, 5];
const cols = [0, 1, 2, 3, 4, 5, 6];

interface Props extends Omit<DateCellProps, "date"> {
  pageDate: Date;
}

export const DatePage = ({ pageDate, isHijri, ...props }: Props) => {
  const startDate = useMemo(() => {
    const first = DateUtil.startOfMonth(pageDate, isHijri);
    const current = getDay(first);
    return DateUtil.addDays(
      first,
      (current < 3 ? -7 : 0) + current * -1,
      isHijri,
    );
  }, [isHijri, pageDate]);

  return (
    <div
      className={classNames(
        "grid grid-cols-8 area-content",
        props.page !== PageType.DATE && "invisible",
      )}
    >
      <div
        className={classNames(
          classes.dateHeader,
          "px-1 text-center bg-tint-50 h-7",
        )}
      ></div>
      {cols.map((col) => {
        const dt = DateUtil.addDays(startDate, col, isHijri);
        return (
          <div
            key={dt.toISOString()}
            className={classNames(
              classes.dateHeader,
              "font-medium text-sm p-1 mx-px text-center text-muted bg-tint-50 h-7",
            )}
          >
            {DateUtil.format(dt, "eeeeee", i18next.language, isHijri)}
          </div>
        );
      })}
      {rows.map((row) => (
        <Fragment key={row}>
          <div
            key={row}
            className="px-1 py-1.5 m-px text-xs text-center text-tint-300"
          >
            {DateUtil.getWeek(
              DateUtil.addDays(startDate, row * 7, isHijri),
              i18next.language,
              isHijri,
            )}
          </div>
          {cols.map((col) => {
            const dt = DateUtil.addDays(startDate, row * 7 + col, isHijri);
            return (
              <DateCell
                {...props}
                date={dt}
                page={PageType.DATE}
                isHijri={isHijri}
                key={dt.toISOString()}
                isMuted={!DateUtil.isSameMonth(dt, pageDate, isHijri)}
              />
            );
          })}
        </Fragment>
      ))}
    </div>
  );
};
