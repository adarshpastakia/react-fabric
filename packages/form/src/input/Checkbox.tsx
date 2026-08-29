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

import { Icon, useControlledValue } from "@react-fabric/core";
import type { RefProp } from "@react-fabric/core/dist/types/types";
import { cn } from "@react-fabric/utilities";
import { useCallback, useMemo } from "react";
import { ErrorIcon } from "../internal/ErrorIcon";

interface CheckboxProps extends RefProp<HTMLInputElement> {
  /**
   * checkbox label
   */
  label?: React.ReactElement | string;
  /**
   * checked
   */
  checked?: boolean;
  /**
   * on checked change
   */
  onChange?: (checked: boolean) => void;
  /**
   * disabled input
   */
  disabled?: boolean;
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
   * cutom checkbox icon
   */
  icon?: string;
  /**
   * cutom checkbox checked icon
   */
  iconChecked?: string;

  name?: string;
}

/**
 * Checkbox component for rendering a checkbox input with label and error handling.
 * It supports custom icons for checked and unchecked states, and handles disabled and invalid states.
 * The component uses a deferred value to manage the checked state, ensuring smooth updates.
 * It also provides an error icon to indicate validation errors.
 */
export function Checkbox({
  ref,
  label,
  name,
  checked,
  invalid,
  disabled,
  error,
  width,
  icon,
  iconChecked,
  onChange,
  ...rest
}: CheckboxProps) {
  const { currentValue, updateValue } = useControlledValue(!!checked, false);

  const iconOn = useMemo(() => iconChecked ?? icon ?? "icon-[mdi--checkbox-marked]", [icon, iconChecked]);
  const iconOff = useMemo(() => icon ?? "icon-[mdi--checkbox-blank-outline]", [icon]);

  const handleChange = useCallback(
    (e?: React.ChangeEvent<HTMLInputElement>) => {
      updateValue(e?.target.checked ?? false);
      onChange?.(e?.target.checked ?? false);
    },
    [onChange, updateValue],
  );

  return (
    <label
      className={cn(
        invalid ? "ring-danger-500" : "ring-primary-500",
        disabled ? "opacity-50 cursor-not-allowed" : " opacity-85 hover:opacity-100 cursor-pointer",
        "inline-flex gap-1 py-1 items-center relative rounded ring-offset-2 has-focus-visible:ring-1",
      )}
      style={{ width }}
    >
      <input
        className={cn("appearance-none absolute opacity-0 inset-0 bg-transparent border-none outline-none ring-0")}
        aria-invalid={invalid}
        aria-disabled={disabled}
        disabled={disabled}
        aria-errormessage={error}
        type="checkbox"
        ref={ref}
        size={1}
        tabIndex={0}
        name={name}
        autoComplete="off"
        checked={!!currentValue}
        onChange={handleChange}
        {...rest}
      />
      <Icon
        className={cn("p-0.5", currentValue && icon && !iconChecked && "bg-primary-500 text-white!")}
        size="1.25em"
        color={invalid ? "danger" : "primary"}
        icon={currentValue ? iconOn : iconOff}
      />
      <ErrorIcon invalid={invalid} error={error} />
      {label && <span className="flex-initial leading-tight truncate">{label}</span>}
    </label>
  );
}
