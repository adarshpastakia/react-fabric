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

import { useMemo } from "react";
import { DateUtil } from "../utils/dateUtil";
import { DateCell, type DateCellProps } from "./DateCell";

const cols = [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

interface Props extends Omit<DateCellProps, "date"> {
  pageDate: Date;
}

export const DecadePage = ({ pageDate, isHijri, ...props }: Props) => {
  const startDate = useMemo(() => {
    return DateUtil.startOfCentury(pageDate, isHijri);
  }, [isHijri, pageDate]);

  return (
    <div className="grid grid-cols-3 area-content place-content-center">
      {cols.map((col) => (
        <DateCell
          key={col}
          isHijri={isHijri}
          className="px-1 py-3"
          date={DateUtil.addYears(startDate, col * 10, isHijri)}
          isMuted={col === -1 || col === 10}
          {...props}
        />
      ))}
    </div>
  );
};
