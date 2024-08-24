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
import { isAfter, isBefore, isSameDay } from "date-fns";
import { useCallback, useEffect, useReducer, useState } from "react";
import { useTranslation } from "react-i18next";
import { PageType, type DateLike, type DateProps } from "../types";
import { DateUtil } from "../utils/dateUtil";
import { BasePanel } from "./BasePanel";

interface PanelState {
  page: PageType;
  pageDate: Date;
  selected?: Date;
  hour: number;
  minute: number;
}

type PanelActions =
  | { type: "reset"; date?: DateLike }
  | { type: "changeDate"; date: Date }
  | { type: "changeTime"; hour: number; minute: number }
  | { type: "changePage"; page: PageType }
  | { type: "changePageDate"; date: Date; pageChange: boolean };

export const DatePanel = ({
  className,
  max,
  min,
  dateDisabled,
  onChange,
  showHijriToggle,
  value,
  withTime,
  ...rest
}: DateProps) => {
  const { t } = useTranslation("date");
  const { currentCalendar } = useGlobals();
  const [isHijri, setHijri] = useState(currentCalendar === "hijri");
  const [canSelectToday, setCanSelectToday] = useState(true);

  const fireChange = useDebounce(onChange, [onChange]);

  useEffect(() => {
    setHijri(currentCalendar === "hijri");
  }, [currentCalendar]);

  const [state, dispatch] = useReducer(
    (state: PanelState, action: PanelActions) => {
      if (action.type === "reset") {
        if (!isEmpty(action.date)) {
          const date = new Date(action.date);
          state.selected = date;
          state.pageDate = date;
          state.hour = date.getHours();
          state.minute = date.getMinutes();
        } else {
          state.selected = undefined;
          state.pageDate = new Date();
          state.hour = 0;
          state.minute = 0;
        }
      }
      if (action.type === "changeDate") {
        action.date.setHours(state.hour);
        action.date.setMinutes(state.minute);
        state.selected = action.date;
        state.pageDate = action.date;
      }
      if (action.type === "changeTime") {
        state.selected?.setHours(action.hour);
        state.selected?.setMinutes(action.minute);
        state.hour = action.hour;
        state.minute = action.minute;
      }
      if (action.type === "changePage") {
        state.page = action.page;
      }
      if (action.type === "changePageDate") {
        state.pageDate = action.date;
        action.pageChange && (state.page = Math.max(state.page - 1, 0));
      }
      if (action.type === "changeDate" || action.type === "changeTime") {
        if (min && state.selected && isBefore(state.selected, new Date(min))) {
          state.selected = new Date(min);
          state.hour = state.selected.getHours();
          state.minute = state.selected.getMinutes();
        }
        if (max && state.selected && isAfter(state.selected, new Date(max))) {
          state.selected = new Date(max);
          state.hour = state.selected.getHours();
          state.minute = state.selected.getMinutes();
        }
        state.selected && fireChange?.(state.selected.toISOString());
      }
      return { ...state };
    },
    {
      page: PageType.DATE,
      pageDate: new Date(),
      hour: 0,
      minute: 0,
    } as PanelState,
  );

  useEffect(() => {
    let canSelect = true;
    if (min && canSelect) {
      canSelect = isAfter(new Date(), min);
    }
    if (max && canSelect) {
      canSelect = isBefore(new Date(), max);
    }
    setCanSelectToday(canSelect);
  }, [min, max]);

  useEffect(() => {
    dispatch({ type: "reset", date: value });
  }, [value]);

  const isDateDisabled = useCallback(
    (dt: Date) => {
      if (state.page === PageType.DATE) {
        if (isArray(dateDisabled)) {
          return !!dateDisabled.find((dd) => isSameDay(new Date(dd), dt));
        }
      }

      return DateUtil.isDisabled(dt, state.page, min, max);
    },
    [state.page, min, max, dateDisabled],
  );

  const changePageDate = useCallback((date: Date, pageChange = true) => {
    dispatch({
      type: "changePageDate",
      pageChange,
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
      <BasePanel
        {...state}
        max={max}
        min={min}
        withTime={withTime}
        isHijri={isHijri}
        selectDate={selectDate}
        isDateDisabled={isDateDisabled}
        changeTime={(time) => dispatch({ type: "changeTime", ...time })}
        changePage={(page) => dispatch({ type: "changePage", page })}
        changePageDate={changePageDate}
      />
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
        {state.page === PageType.DATE && canSelectToday && (
          <Button
            size="sm"
            variant="link"
            color="primary"
            className="my-1"
            onClick={() => selectDate(new Date())}
          >
            {t("label.today")}
          </Button>
        )}
        {state.page !== PageType.DATE && (
          <Button
            size="sm"
            variant="link"
            color="primary"
            className="my-1"
            onClick={() =>
              dispatch({ type: "changePage", page: PageType.DATE })
            }
          >
            {t("core:action.cancel")}
          </Button>
        )}
      </div>
    </div>
  );
};
