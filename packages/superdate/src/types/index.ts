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
  type ColorState,
  type SizeType,
  type TestProps,
} from "@react-fabric/core/dist/types/types";

import { type EventType } from "@react-fabric/date/dist/types/types";

export interface PresetType {
  value: string;
  label: string;
}

export interface SuperDateProps extends TestProps {
  as?: "button" | "chip";
  color?: ColorState;
  size?: SizeType;
  variant?: "solid" | "outline" | "link";
  disabled?: boolean;
  fullWidth?: boolean;
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
   * list of calendar events
   */
  recurringEvents?: EventType[];
  /**
   * list of relative presets
   *
   * {value:'$year-5|$year', label:'last 5 years'}
   */
  presets?: PresetType[];
}
