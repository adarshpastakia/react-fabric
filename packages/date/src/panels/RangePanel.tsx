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

import { Button, useDebounce, useGlobals } from "@react-fabric/core";
import { isArray, isEmpty } from "@react-fabric/utilities";
import classNames from "classnames";
import { addMonths, isAfter, isBefore, isSameDay } from "date-fns";
import { useCallback, useEffect, useReducer, useState } from "react";
import { useTranslation } from "react-i18next";
import { PageType, type DateLike, type RangeProps } from "../types";
import { DateUtil } from "../utils/dateUtil";
import { BasePanel } from "./BasePanel";

interface PanelState {
  page: PageType;
  pageDate: Date;
  hour: number;
  minute: number;
}

interface RangeState {
  selected?: [Date, Date];
  hilight?: [Date, Date];
  start: PanelState;
  end: PanelState;
}

type PanelActions =
  | { type: "reset"; date?: [DateLike, DateLike] }
  | { type: "changeDate"; date: Date }
  | { type: "changeHilight"; date?: Date }
  | { type: "changeTime"; range: "start" | "end"; hour: number; minute: number }
  | { type: "changePage"; range: "start" | "end"; page: PageType }
  | {
      type: "changePageDate";
      range: "start" | "end";
      date: Date;
      pageChange?: boolean;
    };

export const RangePanel = ({
  className,
  max,
  min,
  dateDisabled,
  onChange,
  showHijriToggle,
  value,
  withTime,
  // @ts-expect-error ignore
  showApply = false,
  ...rest
}: RangeProps) => {
  const { t } = useTranslation("date");
  const { currentCalendar } = useGlobals();
  const [isHijri, setHijri] = useState(currentCalendar === "hijri");

  const fireChange = useDebounce(onChange, [onChange]);

  useEffect(() => {
    setHijri(currentCalendar === "hijri");
  }, [currentCalendar]);

  const [state, dispatch] = useReducer(
    (state: RangeState, action: PanelActions) => {
      if (action.type === "reset") {
        if (!isEmpty(action.date)) {
          const [start, end] = action.date;
          const dateStart = new Date(start);
          const dateEnd = new Date(end);
          state.hilight = undefined;
          state.selected = [dateStart, dateEnd];
          state.start.pageDate = dateStart;
          state.start.hour = dateStart.getHours();
          state.start.minute = dateStart.getMinutes();
          state.end.pageDate = dateEnd;
          state.end.hour = dateEnd.getHours();
          state.end.minute = dateEnd.getMinutes();
        } else {
          state.hilight = undefined;
          state.selected = undefined;
          state.start.pageDate = new Date();
          state.start.hour = 0;
          state.start.minute = 0;
          state.end.pageDate = DateUtil.addMonths(new Date(), 1);
          state.end.hour = 0;
          state.end.minute = 0;
        }
      }
      if (action.type === "changeDate") {
        if (!state.hilight) {
          state.hilight = [action.date, action.date];
          state.start.pageDate = action.date;
          state.end.pageDate = DateUtil.addMonths(action.date, 1, isHijri);
        } else {
          const isStartAfter = isAfter(state.hilight[0], action.date);
          const start = isStartAfter ? action.date : state.hilight[0];
          const end = isStartAfter ? state.hilight[0] : action.date;
          state.selected = [start, end];
          state.hilight = undefined;
          state.start.pageDate = start;
          state.end.pageDate = end;
        }
      }
      if (action.type === "changeHilight") {
        if (state.hilight && action.date) {
          const [start] = state.hilight;
          state.hilight = [start, action.date];
        } else {
          state.hilight = undefined;
        }
      }
      if (action.type === "changeTime") {
        if (action.range === "start") {
          state.start.hour = action.hour;
          state.start.minute = action.minute;
          if (state.selected) {
            state.selected[0]?.setHours(action.hour);
            state.selected[0]?.setMinutes(action.minute);
          }
        }
        if (action.range === "end") {
          state.end.hour = action.hour;
          state.end.minute = action.minute;
          if (state.selected) {
            state.selected[1]?.setHours(action.hour);
            state.selected[1]?.setMinutes(action.minute);
          }
        }
      }
      if (action.type === "changePage") {
        state[action.range].page = action.page;
      }
      if (action.type === "changePageDate") {
        state[action.range].pageDate = action.date;
        if (action.pageChange) {
          state[action.range].page = Math.max(state[action.range].page - 1, 0);
          action.range === "start" &&
            state.start.page === PageType.DATE &&
            (state.end.pageDate = addMonths(action.date, 1));
        }
      }

      if (action.type === "changeDate" || action.type === "changeTime") {
        if (
          min &&
          state.selected &&
          isBefore(state.selected[0], new Date(min))
        ) {
          state.selected[0] = new Date(min);
          state.start.hour = state.selected[0].getHours();
          state.start.minute = state.selected[0].getMinutes();
        }
        if (
          max &&
          state.selected &&
          isAfter(state.selected[1], new Date(max))
        ) {
          state.selected[1] = new Date(max);
          state.end.hour = state.selected[1].getHours();
          state.end.minute = state.selected[1].getMinutes();
        }
        !showApply &&
          state.selected &&
          !state.hilight &&
          fireChange?.([
            state.selected[0].toISOString(),
            state.selected[1].toISOString(),
          ]);
      }
      return { ...state };
    },
    {
      start: {
        page: PageType.DATE,
        pageDate: new Date(),
        hour: 0,
        minute: 0,
      },
      end: {
        page: PageType.DATE,
        pageDate: DateUtil.addMonths(new Date(), 1, isHijri),
        hour: 0,
        minute: 0,
      },
    } as RangeState,
  );

  useEffect(() => {
    dispatch({ type: "reset", date: value });
  }, [value]);

  const isStartDateDisabled = useCallback(
    (dt: Date) => {
      if (state.start.page === PageType.DATE) {
        if (isArray(dateDisabled)) {
          return !!dateDisabled.find((dd) => isSameDay(new Date(dd), dt));
        }
      }

      return DateUtil.isDisabled(dt, state.start.page, min, max);
    },
    [state.start.page, min, max, dateDisabled],
  );

  const isEndDateDisabled = useCallback(
    (dt: Date) => {
      if (state.end.page === PageType.DATE) {
        if (isArray(dateDisabled)) {
          return !!dateDisabled.find((dd) => isSameDay(new Date(dd), dt));
        }
      }

      return DateUtil.isDisabled(dt, state.end.page, min, max);
    },
    [state.end.page, min, max, dateDisabled],
  );

  const changeStartPageDate = useCallback((date: Date, pageChange = true) => {
    dispatch({
      type: "changePageDate",
      pageChange,
      range: "start",
      date,
    });
  }, []);

  const changeEndPageDate = useCallback((date: Date, pageChange = true) => {
    dispatch({
      type: "changePageDate",
      pageChange,
      range: "end",
      date,
    });
  }, []);

  const selectDate = useCallback((date: Date) => {
    dispatch({
      type: "changeDate",
      date,
    });
  }, []);

  return (
    <div
      className={classNames(
        "block overflow-hidden bg-base rounded-capped",
        className,
      )}
      {...rest}
    >
      <div className="flex flex-nowrap">
        <BasePanel
          {...state.start}
          max={max}
          min={min}
          hideNext
          withTime={withTime}
          isHijri={isHijri}
          hilight={state.hilight}
          selected={state.selected}
          selectDate={selectDate}
          isDateDisabled={isStartDateDisabled}
          changeTime={(time) =>
            dispatch({ type: "changeTime", range: "start", ...time })
          }
          changePage={(page) =>
            dispatch({ type: "changePage", range: "start", page })
          }
          mouseOver={(date) => dispatch({ type: "changeHilight", date })}
          changePageDate={changeStartPageDate}
        />
        <div className="border-s border-s-dimmed" />
        <BasePanel
          {...state.end}
          max={max}
          min={min}
          hidePrevious
          withTime={withTime}
          isHijri={isHijri}
          hilight={state.hilight}
          selected={state.selected}
          selectDate={selectDate}
          isDateDisabled={isEndDateDisabled}
          changeTime={(time) =>
            dispatch({ type: "changeTime", range: "end", ...time })
          }
          changePage={(page) =>
            dispatch({ type: "changePage", range: "end", page })
          }
          mouseOver={(date) => dispatch({ type: "changeHilight", date })}
          changePageDate={changeEndPageDate}
        />
      </div>
      <div className="border-t flex flex-nowrap justify-between px-2">
        <span>
          {showHijriToggle && (
            <Button
              size="sm"
              variant="link"
              color="primary"
              className="my-1"
              onClick={() => {
                setHijri(!isHijri);
              }}
            >
              {t(isHijri ? "label.gregorian" : "label.hijri")}
            </Button>
          )}
        </span>
        {state.start.page !== PageType.DATE && (
          <Button
            size="sm"
            variant="link"
            color="primary"
            className="my-1"
            onClick={() =>
              dispatch({
                type: "changePage",
                range: "start",
                page: PageType.DATE,
              })
            }
          >
            {t("core:action.cancel")}
          </Button>
        )}
        {state.end.page !== PageType.DATE && (
          <Button
            size="sm"
            variant="link"
            color="primary"
            className="my-1"
            onClick={() =>
              dispatch({
                type: "changePage",
                range: "end",
                page: PageType.DATE,
              })
            }
          >
            {t("core:action.cancel")}
          </Button>
        )}
        {state.hilight && (
          <Button
            size="sm"
            variant="link"
            color="primary"
            className="my-1"
            onClick={() =>
              dispatch({
                type: "changeHilight",
              })
            }
          >
            {t("core:action.cancel")}
          </Button>
        )}
        {!state.hilight && showApply && (
          <Button
            size="sm"
            variant="solid"
            color="primary"
            disabled={!state.selected}
            className="my-1"
            onClick={() =>
              fireChange?.([
                state.selected?.[0].toISOString(),
                state.selected?.[1].toISOString(),
              ])
            }
          >
            {t("core:action.apply")}
          </Button>
        )}
      </div>
    </div>
  );
};
