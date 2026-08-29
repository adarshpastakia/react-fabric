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

import { useDebounce, usePropState } from "@react-fabric/core";
import { cn } from "@react-fabric/utilities";
import { useCallback, useRef } from "react";

interface Props {
  hour: number;
  minute: number;
  onTimeChange: (time: { hour: number; minute: number }) => void;
}

export function TimeSlider({ hour = 0, minute = 0, onTimeChange }: Props) {
  const hourRef = useRef<HTMLDivElement>(null);
  const minuteRef = useRef<HTMLDivElement>(null);

  const [h, setH] = usePropState(hour, (hr) => hourRef.current?.children.item(hr + 1)?.scrollIntoView({ block: "center" }));
  const [m, setM] = usePropState(minute, (mn) => minuteRef.current?.children.item(mn + 1)?.scrollIntoView({ block: "center" }));

  const fireChange = useDebounce(onTimeChange, [onTimeChange]);

  const calculateTime = useCallback(() => {
    const hourTop = hourRef.current?.scrollTop ?? 0;
    const hourHeight = (hourRef.current?.children.item(1) as HTMLElement)?.offsetHeight ?? 0;
    const minuteTop = minuteRef.current?.scrollTop ?? 0;
    const minuteHeight = (minuteRef.current?.children.item(1) as HTMLElement)?.offsetHeight ?? 0;

    const hour = Math.round(hourTop / hourHeight);
    const minute = Math.round(minuteTop / minuteHeight);

    setH(hour);
    setM(minute);

    fireChange({ hour, minute });
  }, [fireChange, setH, setM]);

  return (
    <div className={cn("area-[time] flex flex-col flex-nowrap border-s border-s-tint-50 overflow-hidden bg-default")}>
      <div className="flex">
        <div className={cn("fabric-dateHeader", "flex-1 font-medium text-muted text-sm p-1 mx-px text-center bg-tint-50")}>
          H
        </div>
        <div className={cn("fabric-dateHeader", "flex-1 font-medium text-muted text-sm p-1 mx-px text-center bg-tint-50")}>
          M
        </div>
      </div>
      <div className="flex flex-1 flex-nowrap items-stretch overflow-hidden relative">
        <div
          className={cn("flex-1 overflow-auto scroll-hide snap-y snap-mandatory", "fabric-date-timeSlider")}
          onScroll={calculateTime}
          ref={hourRef}
        >
          <div className="w-full" />
          {Array(24)
            .fill(0)
            .map((_, i) => (
              <div
                role="none"
                className={cn("ps-2 pe-1 snap-center outline outline-muted", i === h && "font-medium text-primary-600")}
                // eslint-disable-next-line @eslint-react/no-array-index-key
                key={i}
                data-skew={
                  i === h - 5 || i === h + 5
                    ? 5
                    : i === h - 4 || i === h + 4
                      ? 4
                      : i === h - 3 || i === h + 3
                        ? 3
                        : i === h - 2 || i === h + 2
                          ? 2
                          : i === h - 1 || i === h + 1
                            ? 1
                            : undefined
                }
                data-selected={i === h}
                onClick={(e) => {
                  e.currentTarget.scrollIntoView({
                    block: "center",
                    behavior: "smooth",
                  });
                }}
              >
                <div>{i.toString(10).padStart(2, "0")}</div>
              </div>
            ))}
          <div className="w-full" />
        </div>
        <div
          className={cn("flex-1 overflow-auto scroll-hide snap-y snap-mandatory", "fabric-date-timeSlider")}
          onScroll={calculateTime}
          ref={minuteRef}
        >
          <div className="w-full" />
          {Array(60)
            .fill(0)
            .map((_, i) => (
              <div
                role="none"
                className={cn("ps-1 pe-2 snap-center outline outline-muted", i === m && "font-medium text-primary-600")}
                // eslint-disable-next-line @eslint-react/no-array-index-key
                key={i}
                data-skew={
                  i === m - 5 || i === m + 5
                    ? 5
                    : i === m - 4 || i === m + 4
                      ? 4
                      : i === m - 3 || i === m + 3
                        ? 3
                        : i === m - 2 || i === m + 2
                          ? 2
                          : i === m - 1 || i === m + 1
                            ? 1
                            : undefined
                }
                data-selected={i === m}
                onClick={(e) => {
                  e.currentTarget.scrollIntoView({
                    block: "center",
                    behavior: "smooth",
                  });
                }}
              >
                <div>{i.toString(10).padStart(2, "0")}</div>
              </div>
            ))}
          <div className="w-full" />
        </div>
        <div className="border rounded border-primary-500 absolute top-1/2 -translate-y-1/2 h-6 w-full flex items-center justify-between bg-primary-200/10">
          <div className="border-s-4 border-t-4 border-b-4 border-transparent border-s-primary-500" />
          <div className="border-e-4 border-t-4 border-b-4 border-transparent border-e-primary-500" />
        </div>
      </div>
    </div>
  );
}
