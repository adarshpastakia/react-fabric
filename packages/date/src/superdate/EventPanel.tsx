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

import { Content, Section } from "@react-fabric/core";
import { EMPTY_ARRAY } from "@react-fabric/utilities";
import { endOfDay, isSameMonth, startOfDay } from "date-fns";
import i18next from "i18next";
import { useEffect, useReducer, useState } from "react";
import { useTranslation } from "react-i18next";
import { DateHeader } from "../components/DateHeader";
import { DecadePage } from "../components/DecadePage";
import { YearPage } from "../components/YearPage";
import { type EventType, PageType, type SuperDateProps } from "../types";
import { DateUtil } from "../utils/dateUtil";

interface EventState {
  events: Array<EventType<Date>>;
  page: PageType;
  pageDate: Date;
}

type EventActions =
  | { type: "init" }
  | { type: "changePage"; page: PageType }
  | { type: "changePageDate"; date: Date; changePage?: boolean };

const makeList = (year: number, predefined: Array<EventType<Date>> = []) => {
  const list = [...predefined];
  list.push({
    label: "superdate:event.newYear",
    start: startOfDay(new Date(`${year - 1}-12-31`)),
    end: endOfDay(new Date(`${year}-01-01`)),
  });
  list.push({
    label: "superdate:event.christmas",
    start: startOfDay(new Date(`${year}-12-24`)),
    end: endOfDay(new Date(`${year}-12-26`)),
  });
  // calculate ramadan period
  let hijriStart = DateUtil.startOfYear(new Date(`${year - 1}-12-31`), true);
  hijriStart = DateUtil.addMonths(hijriStart, 8, true);
  if (hijriStart.getFullYear() !== year) {
    hijriStart = DateUtil.addYears(
      hijriStart,
      hijriStart.getFullYear() > year ? -1 : 1,
      true,
    );
  }
  const hijriEnd = DateUtil.endOfMonth(hijriStart, true);
  list.push({
    label: "superdate:event.ramadan",
    start: startOfDay(hijriStart),
    end: endOfDay(hijriEnd),
  });
  return list.sort((a, b) => {
    return a.start.getTime() < b.start.getTime() ? -1 : 1;
  });
};

export const EventPanel = ({
  isHijri,
  onChange,
  events = EMPTY_ARRAY,
}: { isHijri: boolean } & Partial<SuperDateProps>) => {
  const { t } = useTranslation();
  const [predefined, setPredefined] = useState<
    KeyValue<Array<EventType<Date>>>
  >({});

  const [state, dispatch] = useReducer(
    (state: EventState, action: EventActions) => {
      let resetList = false;
      if (action.type === "init") {
        state.pageDate = new Date();
        resetList = true;
      }
      if (action.type === "changePage") {
        state.page = Math.max(action.page, PageType.MONTH);
      }
      if (action.type === "changePageDate") {
        resetList = true;
        state.pageDate = action.date;
        if (action.changePage !== false) {
          state.page = Math.max(state.page - 1, PageType.MONTH);
        }
      }
      if (resetList) {
        const year = state.pageDate.getFullYear();
        state.events = makeList(year, predefined[year] ?? []);
      }
      return { ...state };
    },
    {
      pageDate: new Date(),
      page: PageType.MONTH,
      events: [],
    } as EventState,
  );

  useEffect(() => {
    dispatch({ type: "init" });
  }, []);

  useEffect(() => {
    const predefined: KeyValue = {};
    events.forEach((evt) => {
      const start = startOfDay(new Date(evt.start));
      const end = endOfDay(new Date(evt.end));

      if (!predefined[start.getFullYear()])
        predefined[start.getFullYear()] = [];
      predefined[start.getFullYear()].push(evt);
      if (start.getFullYear() !== end.getFullYear()) {
        if (!predefined[end.getFullYear()]) predefined[end.getFullYear()] = [];
        predefined[end.getFullYear()].push(evt);
      }
    });
    setPredefined(predefined);
  }, [events]);

  return (
    <Section>
      <DateHeader
        page={state.page}
        pageDate={state.pageDate}
        changePage={(page) => dispatch({ type: "changePage", page })}
        changePageDate={(date) =>
          dispatch({ type: "changePageDate", date, changePage: false })
        }
      />
      {state.page === PageType.MONTH && (
        <Content className="p-2 max-h-48">
          {state.events.map((evt) => (
            <div
              role="none"
              key={evt.label}
              onClick={() => {
                onChange?.(
                  `${evt.start.toISOString()}|${evt.end.toISOString()}`,
                  [evt.start.toISOString(), evt.end.toISOString()],
                );
              }}
              className="text-sm my-1 py-1 px-2 flex flex-nowrap items-center cursor-pointer rounded hover:bg-primary-50"
            >
              <div className="flex-1 truncate">
                {t(evt.label, { defaultValue: evt.label })}
              </div>
              <div className="text-muted text-xs">
                {DateUtil.format(
                  evt.start,
                  isSameMonth(evt.start, evt.end) ? "dd" : "dd/MMM",
                  i18next.language,
                  isHijri,
                )}
                <span> - </span>
                {DateUtil.format(evt.end, "dd/MMM", i18next.language, isHijri)}
              </div>
            </div>
          ))}
        </Content>
      )}
      {state.page === PageType.YEAR && (
        <YearPage
          isHijri={isHijri}
          page={state.page}
          pageDate={state.pageDate}
          changePageDate={(date) => dispatch({ type: "changePageDate", date })}
        />
      )}
      {state.page === PageType.DECADE && (
        <DecadePage
          isHijri={isHijri}
          page={state.page}
          pageDate={state.pageDate}
          changePageDate={(date) => dispatch({ type: "changePageDate", date })}
        />
      )}
    </Section>
  );
};
