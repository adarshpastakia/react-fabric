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
import { type AriaProps, type CssProp, type TestProps } from "../../types";
import classes from "./Meter.module.css";

export interface MeterProps extends CssProp, AriaProps, TestProps {
  /**
   * meter value (0-100)
   */
  value: number;
  /**
   * hide value label
   */
  hideLabel?: boolean;
}

export const Meter = ({ value, hideLabel, className, ...aria }: MeterProps) => {
  /** ***************** calculate active meter dots *******************/
  const activeCount = useMemoDebugger(
    () => {
      return value / 16.67;
    },
    [value],
    "Meter activeCount",
  );

  return (
    <div
      className={classNames(
        classes.meter,
        className,
        "flex flex-nowrap items-center gap-[2px]",
      )}
      {...aria}
    >
      {[0, 1, 2, 3, 4, 5].map((step) => (
        <div
          key={step}
          className={classNames(
            classes.meterBar,
            "first-of-type:rounded-s last-of-type:rounded-e bg-tint-100 relative outline -outline-offset-1 outline-muted overflow-hidden after:absolute after:inset-0",
          )}
          data-active={activeCount >= step}
          style={
            {
              "--width": `${Math.min((activeCount - step) * 100, 100)}%`,
            } as AnyObject
          }
        />
      ))}
      {!hideLabel && (
        <label className="text-muted">{Format.percent(value / 100)}</label>
      )}
    </div>
  );
};
