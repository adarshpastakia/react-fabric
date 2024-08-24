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
import { type PropsWithChildren } from "react";
import { Fragment } from "react/jsx-runtime";
import classes from "./TimeSlider.module.css";

export const TimeSlider = ({
  duration,
  time,
  onChange,
  children,
}: {
  duration: number;
  time: number;
  onChange: (time: number) => void;
} & PropsWithChildren) => (
  <Fragment>
    <div className="flex-1 relative flex">
      <input
        type="range"
        className={classNames(classes.slider, classes.timeSlider)}
        min={0}
        max={Math.max(duration, time)}
        step={0.01}
        value={time}
        onChange={(e) => onChange(e.currentTarget.valueAsNumber ?? 0)}
      />
      {children}
    </div>
    <span className="text-dimmed text-xs px-1">
      {`${Format.duration(time, true)}/${Format.duration(duration, true)}`}
    </span>
  </Fragment>
);
