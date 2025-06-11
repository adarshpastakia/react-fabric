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
import { cloneElement } from "react";
import {
  type AriaProps,
  type ChildrenProp,
  type ColorState,
  type CssProp,
  type RefProp,
  type SizeType,
  type TestProps,
} from "../../types";
import { cloneChildren } from "../../utils";
import { type Button } from "./Button";

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
  color?: ColorState;
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

/**
 * A component that groups buttons together, allowing for consistent styling and behavior across multiple buttons.
 * It supports vertical orientation, various button styles, and can handle properties like size, color, and disabled state.
 * This component is useful for creating button groups that maintain a uniform appearance and functionality,
 * such as toolbars, action groups, or navigation buttons.
 *
 * @param {ButtonGroupProps} props - The properties for the ButtonGroup component.
 * @returns {JSX.Element} The rendered ButtonGroup component.
 *
 * @example
 * ```jsx
 * <ButtonGroup
 *   variant="solid"
 *   color="primary"
 *   className="my-custom-class"
 *   aria-label="Button Group"
 *   vertical
 * >
 *   <Button>Button 1</Button>
 *   <Button>Button 2</Button>
 *   <Button>Button 3</Button>
 * </ButtonGroup>
 * ```
 *
 * @see {@link https://adarshpastakia.github.io/react-fabric/?path=/docs/core-components-buttongroup--docs} for more details.
 */
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
        "fabric-buttonGroup",
        className,
        fullWidth ? "flex" : "inline-flex",
        "flex-nowrap align-middle rounded",
        vertical && "vertical",
        vertical && "flex-col items-stretch",
      )}
      {...aria}
    >
      {cloneChildren(children, (child: AnyObject) =>
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
