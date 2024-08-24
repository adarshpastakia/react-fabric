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

import { Format } from "@react-fabric/utilities";
import classNames from "classnames";
import { useMemoDebugger } from "../../hooks/useEffectDebugger";
import { type ColorType } from "../../types";
import { getColorClass } from "../../utils";
import classes from "./Progress.module.css";

export interface ProgressProps {
  /**
   * progress value (0-100)
   */
  value: number;
  /**
   * size
   */
  size?: "xxs" | "xs" | "sm" | "md" | "lg" | "xl";
  /**
   * color
   */
  color?: ColorType;
  /**
   * animate
   */
  animate?: boolean;
  /**
   * progress label
   */
  label?: string;
}

const SizeMap: KeyValue = {
  "": "0.875rem",
  xxs: "3px",
  xs: "0.375rem",
  sm: "0.625rem",
  md: "1.125rem",
  lg: "1.5rem",
  xl: "2rem",
};

export const ProgressBar = ({
  value = 0,
  size,
  color = "primary",
  label = "",
  animate,
}: ProgressProps) => {
  /** ***************** make sure value is between 0 and 100 *******************/
  const actualValue = useMemoDebugger(
    () => Math.min(Math.max(value, 0), 100),
    [value],
    "ProgressBar value",
  );

  const progressVar = useMemoDebugger<KeyValue>(
    () => ({
      "--progress": actualValue,
    }),
    [actualValue],
    "ProgressBar cssVar",
  );

  /** ***************** component *******************/
  return (
    <div
      className={classNames(
        classes.progressbar,
        getColorClass(color),
        "block bg-dimmed relative rounded font-bold overflow-hidden whitespace-nowrap",
      )}
      style={{
        ...progressVar,
        minHeight: SizeMap[size ?? ""],
        fontSize: SizeMap[size ?? ""],
      }}
      data-animate={animate}
      aria-hidden="true"
    >
      {!["xxs", "xs", "sm"].includes(size ?? "") && (
        <div className="absolute inset-0 text-center z-0 align-top">
          {label} {Format.percent(actualValue / 100)}
        </div>
      )}
      <div
        className={classNames(
          classes.progressTrack,
          animate && classes.progressAnimate,
          "h-full overflow-clip bg-current relative z-0",
        )}
      />
      {!["xxs", "xs", "sm"].includes(size ?? "") && (
        <div
          className={classNames("h-full absolute inset-0 overflow-hidden z-1")}
          data-label={`${label} ${Format.percent(actualValue / 100)}`}
        />
      )}
    </div>
  );
};
