/**
 * React Fabric
 * @version 1.0.0
 * @license MIT
 * @copyright 2024 Adarsh Pastakia
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import { cn, EMPTY_ARRAY, isArray } from "@react-fabric/utilities";
import { cloneElement, isValidElement } from "react";
import { useControlledValue } from "../../hooks/useControlledValue";
import type { ChildrenProp, CssProp, TestProps } from "../../types";
import { cloneChildren } from "../../utils";
import type { ButtonProps, SharedButtonProps } from "./Button";

interface BaseProps extends CssProp, TestProps, SharedButtonProps {
  /**
   * Arrange buttons vertically (top-to-bottom) instead of the default horizontal layout.
   */
  vertical?: boolean;
  /**
   * Disable all child toggle buttons, preventing interaction.
   */
  disabled?: boolean;
  /**
   * Stretch the button group to full available width using `flex` (vs `inline-flex` by default).
   */
  fullWidth?: boolean;
}

/**
 * Props for single-value (radio-like) or multi-value (checkbox-like) toggle groups.
 */
export type ToggleButtonGroupValueProps<T> =
  | {
      /** The currently selected single value. When `null`, no button is active. */
      value: T;
      /** Callback invoked when the selected value changes. Receives the new value or `null` if cleared. */
      onChange?: (value: T) => void;
    }
  | {
      /** The array of currently selected values. An empty array means no buttons are active. */
      value: T[];
      /** Callback invoked when the selected values change. Receives the updated array or `null` if cleared. */
      onChange?: (value: T[]) => void;
    };

export type ToggleButtonGroupProps<T> = BaseProps & ChildrenProp<ButtonProps & { value: T }> & ToggleButtonGroupValueProps<T>;

/**
 * A composite component that renders a group of toggle buttons with shared styling
 * and selection behavior.
 *
 * Automatically switches between single-select (radio-like) and multi-select
 * (checkbox-like) modes based on the `value` prop: a scalar value enables radio
 * mode (one active button), while an array enables checkbox mode (multiple active).
 *
 * All child buttons receive consistent `color`, `size`, `variant`, `disabled`,
 * and `rounded` props, while each button's own `value` and `onClick` are preserved
 * and extended with the group's selection logic.
 *
 * @example
 * ```jsx
 * // Single-select (radio-like)
 * <ToggleButtonGroup
 *   value={selected}
 *   onChange={(v) => setSelected(v)}
 *   variant="outlined"
 *   color="primary"
 *   size="md"
 * >
 *   <Button value="a">A</Button>
 *   <Button value="b">B</Button>
 * </ToggleButtonGroup>
 *
 * // Multi-select (checkbox-like)
 * <ToggleButtonGroup
 *   value={selected}
 *   onChange={(v) => setSelected(v)}
 *   variant="outlined"
 *   color="primary"
 *   rounded
 *   fullWidth
 * >
 *   <Button value="a">A</Button>
 *   <Button value="b">B</Button>
 *   <Button value="c">C</Button>
 * </ToggleButtonGroup>
 * ```
 */
export function ToggleButtonGroup<T extends AnyObject = string>({
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
  ...props
}: ToggleButtonGroupProps<T>) {
  // Determine selection mode: array value = multi-select, scalar = single-select
  const isMultiple = isArray(value);
  // Controlled value with empty array / null as defaults for multi / single mode
  const { currentValue, updateValue } = useControlledValue(value, isMultiple ? (EMPTY_ARRAY as T[]) : undefined);

  // Toggle handler: toggles the child's value in/out of the selected set
  const clickHandler = (childValue: T, cb?: (e?: React.MouseEvent) => void) => (e?: React.MouseEvent) => {
    let newValue;
    if (isArray(currentValue)) {
      // Multi-select: remove if already selected, otherwise add
      if (currentValue.includes(childValue)) newValue = currentValue.filter((v) => v !== childValue);
      else newValue = [...currentValue, childValue];
    } else {
      // Single-select: toggle to this value (replaces previous)
      newValue = childValue;
    }
    updateValue(newValue);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-explicit-any
    onChange?.(newValue as any);
    cb?.(e);
  };

  return (
    <div
      {...props}
      className={cn(
        "fabric-buttonGroup",
        "flex-nowrap align-middle is-vertical:flex-col",
        className,
        fullWidth ? "flex" : "inline-flex",
      )}
      data-vertical={vertical}
    >
      {cloneChildren(children)?.map((child) => {
        if (isValidElement(child)) {
          const childEl = child as React.ReactElement<ButtonProps & { value: T }>;
          return cloneElement(childEl, {
            color,
            size,
            variant,
            disabled,
            rounded,
            ...childEl.props,
            activeClickable: isMultiple,
            onClick: clickHandler(childEl.props.value, childEl.props.onClick),
            // Check if this button is currently active based on selection mode
            active: isArray(currentValue) ? currentValue?.includes(childEl.props.value) : currentValue === childEl.props.value,
          });
        }
        return child;
      })}
    </div>
  );
}
