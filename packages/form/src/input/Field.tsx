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
  type ChildrenProp,
  type CssProp,
} from "@react-fabric/core/dist/types/types";
import classNames from "classnames";
import { Children, cloneElement } from "react";
import classes from "../internal/Field.module.css";
import { FieldWrapper } from "../internal/FieldWrapper";

export interface FieldProps extends ChildrenProp, CssProp {
  /**
   * input label
   */
  label?: string;
  /**
   * append to label end
   */
  appendLabel?: JSX.Element | string | number | boolean;
  /**
   * info label at bottom
   */
  info?: string;

  /**
   * required
   */
  required?: boolean;
  /**
   * hide outline
   */
  noOutline?: boolean;

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
  /**
   * dont apply bg and outline
   */
  plain?: boolean;
}

export const Field = ({ children, noOutline, plain, ...rest }: FieldProps) => {
  return (
    <FieldWrapper {...rest}>
      <div
        className={classNames(
          classes.fieldGroup,
          !plain && !noOutline && "outline",
          !plain && "bg-base",
          "flex flex-nowrap flex-1 rounded",
        )}
      >
        {Children.map(
          children,
          (child) =>
            child &&
            cloneElement(child as AnyObject, {
              "data-inner": true,
            }),
        )}
      </div>
    </FieldWrapper>
  );
};
