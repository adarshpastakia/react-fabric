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

import {
  type ColorType,
  type CssProp,
  type TestProps,
} from "@react-fabric/core/dist/types/types";

export type DateLike = Date | string | number;
export type DateParsed = Date | undefined;

export enum PageType {
  DATE,
  MONTH,
  YEAR,
  DECADE,
}

export enum DatePart {
  NOW = "$now",
  MINUTE = "$minute",
  HOUR = "$hour",
  DAY = "$day",
  WEEK = "$week",
  MONTH = "$month",
  QUARTER = "$quarter",
  YEAR = "$year",
  DECADE = "$decade",
}

/*
format?:
    | "Pp"
    | "PPpp"
    | "PPPPpppp"
    | "PPPP"
    | "PPP"
    | "PP"
    | "pp"
    | "P"
    | "p"
    | string;
    */

export interface BaseProps {
  min?: DateLike;
  max?: DateLike;

  withTime?: boolean;
  showHijriToggle?: boolean;
  dateDisabled?: DateLike[] | ((date: Date) => boolean);
}

export interface DateProps extends BaseProps, CssProp, TestProps {
  value?: DateLike;
  onChange?: (date: string) => void;
}

export interface RangeProps extends BaseProps, CssProp, TestProps {
  value?: [start: DateLike, end: DateLike];
  onChange?: (dates: [start: string, end: string]) => void;
  presets?: Record<string, [DateLike, DateLike]>;
}

export interface EventType<D = DateLike> {
  label: string;
  icon?: string;
  start: D;
  end: D;
  hijri?: boolean;
}

export interface PresetType {
  value: string;
  label: string;
}

export interface SuperDateProps {
  as?: "button" | "chip";
  color?: ColorType;
  variant?: "solid" | "outline" | "link";
  /**
   * relative date value
   */
  value?: string;
  /**
   * change handler
   */
  onChange?: (value: string, dates: [string, string]) => void;
  /**
   * list of calendar events
   */
  events?: EventType[];
  /**
   * list of relative presets
   *
   * {value:'$year-5|$year', label:'last 5 years'}
   */
  presets?: PresetType[];
}
