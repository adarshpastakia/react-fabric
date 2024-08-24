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

import classNames from "classnames";
import { Children, cloneElement } from "react";
import {
  type AriaProps,
  type ChildrenProp,
  type ColorType,
  type CssProp,
  type RefProp,
  type SizeType,
  type TestProps,
} from "../../types";
import { type Button } from "./Button";
import classes from "./Button.module.css";

export interface ButtonGroupProps
  extends CssProp,
    AriaProps,
    TestProps,
    RefProp<HTMLDivElement>,
    ChildrenProp<React.ReactElement<typeof Button>> {
  /**
   * vertical orientation
   */
  vertical?: boolean;
  /**
   * button styling
   */
  variant?: "outline" | "solid" | "link";
  /**
   * button size
   */
  size?: SizeType;
  /**
   * button color
   */
  color?: ColorType;
  /**
   * full rounded edges
   */
  rounded?: boolean;
  /**
   * disabled state
   */
  disabled?: boolean;
  /**
   * stretch to full width
   */
  fullWidth?: boolean;
}

export const ButtonGroup = ({
  vertical,
  className,
  children,
  variant,
  rounded,
  disabled,
  fullWidth,
  color,
  size,
  ...aria
}: ButtonGroupProps) => {
  return (
    <div
      data-ref="buttonGroup"
      className={classNames(
        classes.buttonGroup,
        className,
        fullWidth ? "flex" : "inline-flex",
        "flex-nowrap align-middle rounded",
        vertical && classes.vertical,
        vertical && "flex-col items-stretch",
      )}
      {...aria}
    >
      {Children.map(children, (child: AnyObject) =>
        cloneElement(child, {
          color,
          size,
          variant,
          disabled,
          rounded,
          fullWidth,
          ...child.props,
        }),
      )}
    </div>
  );
};
