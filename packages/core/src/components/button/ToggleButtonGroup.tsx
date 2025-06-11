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

import { EMPTY_ARRAY, isArray } from "@react-fabric/utilities";
import classNames from "classnames";
import { cloneElement, useCallback, useMemo } from "react";
import { useControlledValue } from "../../hooks/useControlledValue";
import {
  type AriaProps,
  type ChildrenProp,
  type ColorType,
  type CssProp,
  type SizeType,
} from "../../types";
import { cloneChildren } from "../../utils";
import { type ButtonProps } from "./Button";

interface BaseProps
  extends CssProp,
    AriaProps,
    ChildrenProp<React.ReactElement<ButtonProps & { value: string }>> {
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

export type ToggleButtonGroupProps = BaseProps &
  (
    | {
        /**
         *
         */
        value: string;
        /**
         * change handler
         */
        onChange?: (value: string) => void;
      }
    | {
        /**
         *
         */
        value: string[];
        /**
         * change handler
         */
        onChange?: (value: string[]) => void;
      }
  );

/**
 * A component that groups toggle buttons together, allowing for consistent styling and behavior across multiple toggle buttons.
 * It supports vertical orientation, various button styles, and can handle properties like size, color, and disabled state.
 * This component is useful for creating toggle button groups that maintain a uniform appearance and functionality,
 * such as toggle switches, selection groups, or multi-select options.
 *
 * @param {ToggleButtonGroupProps} props - The properties for the ToggleButtonGroup component.
 * @returns {JSX.Element} The rendered ToggleButtonGroup component.
 *
 * @example
 * ```jsx
 * <ToggleButtonGroup
 *   value={selectedValues}
 *   onChange={(newValues) => setSelectedValues(newValues)}
 *   variant="outline"
 *   color="primary"
 *   size="md"
 *   rounded
 *   fullWidth
 * >
 *   <Button value="option1">Option 1</Button>
 *   <Button value="option2">Option 2</Button>
 *   <Button value="option3">Option 3</Button>
 * </ToggleButtonGroup>
 * ```
 *
 * @see {@link https://adarshpastakia.github.io/react-fabric/?path=/docs/core-components-togglebuttongroup--docs} for more details.
 */
export const ToggleButtonGroup = ({
  vertical,
  className,
  children,
  variant,
  rounded,
  disabled,
  fullWidth,
  color,
  size,
  value,
  onChange,
  ...aria
}: ToggleButtonGroupProps) => {
  const isMultiple = useMemo(() => isArray(value), [value]);
  const { currentValue, updateValue } = useControlledValue<typeof value>(
    value,
    isArray(value) ? EMPTY_ARRAY : "",
  );

  const clickHandler = useCallback(
    (cb: AnyObject) => (e: React.MouseEvent<HTMLElement>) => {
      let newValue: AnyObject = `${e.currentTarget.dataset.value}`;
      if (isArray(currentValue)) {
        if (currentValue.includes(newValue))
          newValue = currentValue.filter((v) => v !== newValue);
        else newValue = [...currentValue, newValue];
      }
      updateValue(newValue);
      onChange?.(newValue);
      cb?.(e);
    },
    [currentValue, onChange],
  );

  return (
    <div
      className={classNames(
        "fabric-buttonGroup",
        className,
        fullWidth ? "flex" : "inline-flex",
        "flex-nowrap align-middle",
        vertical && "vertical",
        vertical && "flex-col",
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
          onClick: clickHandler(child.props.onClick),
          "data-value": child.props.value,
          "data-checked": isMultiple
            ? currentValue.includes(child.props.value)
            : currentValue === child.props.value,
        }),
      )}
    </div>
  );
};
