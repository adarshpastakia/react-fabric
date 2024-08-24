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

import { DateHeader } from "../components/DateHeader";
import { DatePage } from "../components/DatePage";
import { DecadePage } from "../components/DecadePage";
import { MonthPage } from "../components/MonthPage";
import { TimeSlider } from "../components/TimeSliders";
import { YearPage } from "../components/YearPage";
import { PageType, type DateLike } from "../types";

export interface PanelProps {
  page: PageType;
  pageDate: Date;
  selected?: Date | [Date, Date];
  hilight?: [Date, Date];
  hour: number;
  minute: number;
  min?: DateLike;
  max?: DateLike;
  isHijri: boolean;
  withTime?: boolean;

  hidePrevious?: boolean;
  hideNext?: boolean;

  changePage: (page: PageType) => void;
  changePageDate: (date: Date, pageChange?: boolean) => void;
  changeTime: (time: { hour: number; minute: number }) => void;
  mouseOver?: (date: Date) => void;

  selectDate: (date: Date) => void;
  isDateDisabled: (date: Date) => boolean;
}

export const BasePanel = ({
  min,
  max,
  isHijri,
  withTime,
  hideNext,
  hidePrevious,
  changePage,
  changePageDate,
  changeTime,
  selectDate,
  isDateDisabled,
  ...state
}: PanelProps) => {
  return (
    <div
      className="grid overflow-hidden select-none"
      style={{
        gridTemplate: `"head head" auto "content time" 1fr / 1fr auto`,
      }}
    >
      <DateHeader
        {...state}
        min={min}
        max={max}
        hideNext={hideNext}
        hidePrevious={hidePrevious}
        isHijri={isHijri}
        changePage={changePage}
        changePageDate={(dt) => changePageDate(dt, false)}
      />
      <DatePage
        {...state}
        isHijri={isHijri}
        selectDate={selectDate}
        dateDisabled={isDateDisabled}
        changePageDate={changePageDate}
      />
      {state.page === PageType.MONTH && (
        <MonthPage
          {...state}
          isHijri={isHijri}
          selectDate={selectDate}
          dateDisabled={isDateDisabled}
          changePageDate={changePageDate}
        />
      )}
      {state.page === PageType.YEAR && (
        <YearPage
          {...state}
          isHijri={isHijri}
          selectDate={selectDate}
          dateDisabled={isDateDisabled}
          changePageDate={changePageDate}
        />
      )}
      {state.page === PageType.DECADE && (
        <DecadePage
          {...state}
          isHijri={isHijri}
          selectDate={selectDate}
          dateDisabled={isDateDisabled}
          changePageDate={changePageDate}
        />
      )}
      {withTime && state.page === PageType.DATE && (
        <TimeSlider
          hour={state.hour}
          minute={state.minute}
          onTimeChange={changeTime}
        />
      )}
    </div>
  );
};
