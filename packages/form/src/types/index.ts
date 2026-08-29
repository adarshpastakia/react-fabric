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

import type { ChildNode, NestedKeys, RefProp, TestProps } from "@react-fabric/core/dist/types/types";

export interface InputProps<V = string> extends TestProps {
  name?: string;
  autoFocus?: boolean;
  /**
   * value
   */
  value?: V;
  /**
   * default value
   */
  defaultValue?: V;
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
  onEnterPressed?: React.KeyboardEventHandler<HTMLInputElement>;

  placeholder?: string;

  disabled?: boolean;
  readOnly?: boolean;
  /**
   * show clear button
   */
  allowClear?: boolean;
}

export interface WrapperProps {
  name?: string;
  /**
   * input label
   */
  label?: string;
  /**
   * required
   */
  required?: boolean;
  disabled?: boolean;
  /**
   * append to label end
   */
  appendLabel?: React.ReactNode;
  /**
   *
   */
  decorateStart?: React.ReactNode;
  /**
   *
   */
  decorateEnd?: React.ReactNode;
  decorateEndShowWhenEmpty?: boolean;
  decorateEndHideWhenEmpty?: boolean;
  /**
   * info label at bottom
   */
  info?: React.ReactNode;
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
  labelWidth?: string | number;
  /**
   * remove the outline borders
   */
  borderless?: boolean;
}

export interface BaseSelectProps<T extends AnyObject = string> {
  /**
   * open dropdown by default
   */
  defaultOpen?: boolean;
  /**
   * hide dropdown handle
   */
  hideHandle?: boolean;
  /**
   * list options
   */
  options: T[];
  /**
   * group by property name
   */
  groupProperty?: NestedKeys<T>;
  /**
   * label property name
   */
  labelProperty?: NestedKeys<T>;
  /**
   * value property name
   */
  valueProperty?: NestedKeys<T>;
  /**
   * value property name
   */
  infoProperty?: NestedKeys<T>;
  /**
   * value property name
   */
  sortProperty?: NestedKeys<T> | true;
  /**
   * searchable list
   */
  searchable?: boolean;
  /**
   * allow create item
   */
  allowCreate?: boolean;
  /**
   * empty list display
   */
  emptyDisplay?: ChildNode;
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
  renderer?: (option: T) => ChildNode;
  /**
   * item matcher
   */
  matcher?: (option: T, query: string) => boolean;
}

type BaseSelectType<T> = BaseSelectProps<T> & Omit<InputProps, "value" | "onChange"> & WrapperProps & RefProp<HTMLInputElement>;

export type SelectProps<T> = BaseSelectType<T> &
  (
    | {
        /**
         * is multiple selection
         */
        multiple?: false;
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

export type DualSelectProps<T> = BaseSelectType<T> & {
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
};
