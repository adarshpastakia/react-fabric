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

import { type RefProp } from "@react-fabric/core/dist/types/types";

export interface InputProps<V = string> {
  /**
   * value
   */
  value?: V;
  /**
   * change handler
   */
  onChange?: (value?: V) => void;
  /**
   * on focus event handler
   */
  onFocus?: React.FocusEventHandler;
  /**
   * on blur event handler
   */
  onBlur?: React.FocusEventHandler;
  /**
   * on enter press callback
   */
  onEnterPressed?: React.KeyboardEventHandler;

  /**
   * input name
   */
  name?: string;
  /**
   * input label
   */
  label?: string;
  /**
   * input placeholder
   */
  placeholder?: string;
  /**
   * append to label end
   */
  appendLabel?: JSX.Element | string | number | boolean;
  /**
   *
   */
  decorateStart?: JSX.Element | string | number | boolean;
  /**
   *
   */
  decorateEnd?: JSX.Element | string | number | boolean;
  /**
   * info label at bottom
   */
  info?: string;

  /**
   * required
   */
  required?: boolean;
  /**
   * disabled input
   */
  disabled?: boolean;
  /**
   * read-only input
   */
  readOnly?: boolean;
  /**
   * auto focus when rendered
   */
  autoFocus?: boolean;
  /**
   * show clear button
   */
  allowClear?: boolean;
  /**
   * invalid value input
   */
  invalid?: boolean;
  /**
   * error message
   */
  error?: string;

  /**
   * field width
   */
  width?: number | string;
  /**
   * inline label and input
   */
  inline?: boolean;
  /**
   * label width for inline
   */
  labelWidth?: string;
}

export interface BaseSelectProps<T>
  extends RefProp<HTMLInputElement>,
    Omit<InputProps, "value" | "onChange"> {
  /**
   * list options
   */
  options?: T[];
  /**
   * group by property name
   */
  groupProperty?: keyof T;
  /**
   * label property name
   */
  labelProperty?: keyof T;
  /**
   * value property name
   */
  valueProperty?: keyof T;
  /**
   * searchable list
   */
  searchable?: boolean;
  /**
   * allow create item
   */
  allowCreate?: boolean;
  /**
   * create new item object
   */
  createOption?: (query: string) => T;
  /**
   * query handler
   */
  onQuery?: (query: string) => T[] | Promise<T[]>;
  /**
   * item renderer
   */
  renderer?: (option: T) => React.ReactNode;
  /**
   * item matcher
   */
  matcher?: (option: T, query: string) => boolean;
}

export type SelectProps<T> = BaseSelectProps<T> &
  (
    | {
        /**
         * is multiple selection
         */
        multiple?: never | false;
        /**
         * selected value
         */
        value?: string;
        /**
         * select handler
         */
        onSelect?: (option: T) => void;
        /**
         * change handler
         */
        onChange?: (value?: string) => void;
      }
    | {
        /**
         * is multiple selection
         */
        multiple: true;
        /**
         * selected value
         */
        value?: string[];
        /**
         * select handler
         */
        onSelect?: (option: T[]) => void;
        /**
         * change handler
         */
        onChange?: (value?: string[]) => void;
      }
  );
