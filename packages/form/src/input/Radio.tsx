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

import { Icon } from "@react-fabric/core";
import type { RefProp } from "@react-fabric/core/dist/types/types";
import { cn } from "@react-fabric/utilities";
import { useCallback, useMemo } from "react";
import { ErrorIcon } from "../internal/ErrorIcon";

export interface RadioProps extends RefProp<HTMLInputElement> {
  name?: string;
  /**
   * radio label
   */
  label?: React.ReactElement | string;
  /**
   * value
   */
  value: string | number;
  /**
   * on checked change
   */
  onChange?: ((value: string) => void) | ((value: number) => void);

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
}

/**
 * Radio input component with custom icons and label.
 *
 * This component renders a radio button with an optional label and custom icons for checked and unchecked states.
 * It supports disabled and invalid states, and allows for custom width.
 */
export function Radio({
  ref,
  name,
  label,
  value,
  invalid,
  disabled,
  width,
  icon,
  error,
  iconChecked,
  onChange,
  ...rest
}: RadioProps) {
  const iconOn = useMemo(() => iconChecked ?? icon ?? "icon-[mdi--radiobox-marked]", [icon, iconChecked]);
  const iconOff = useMemo(() => icon ?? "icon-[mdi--radiobox-blank]", [icon]);

  const handleChange = useCallback(
    (e?: React.ChangeEvent<HTMLInputElement>) => {
      // @ts-expect-error ignore
      if (e?.target.checked && value) onChange?.(value);
    },
    [onChange, value],
  );

  return (
    <label
      className={cn(
        invalid ? "ring-danger-500" : "ring-primary-500",
        disabled ? "opacity-50 cursor-not-allowed" : "hover:opacity-100 cursor-pointer",
        "inline-flex gap-1 py-1 items-center relative cursor-pointer opacity-85 rounded ring-offset-2 has-focus-visible:ring-1",
      )}
      style={{ width }}
    >
      <input
        className={cn("appearance-none absolute peer opacity-0 inset-0 bg-transparent border-none outline-none ring-0")}
        aria-disabled={disabled}
        disabled={disabled}
        type="radio"
        ref={ref}
        size={1}
        name={name}
        value={value}
        autoComplete="off"
        onChange={handleChange}
        {...rest}
      />
      <Icon
        className={cn("p-0.5 not-peer-checked:hidden", icon && !iconChecked && "bg-primary-500 text-white!")}
        color={invalid ? "danger" : "primary"}
        size="1.25em"
        icon={iconOn}
      />
      <Icon className={cn("p-0.5 peer-checked:hidden")} color={invalid ? "danger" : "primary"} size="1.25em" icon={iconOff} />
      <ErrorIcon invalid={invalid} error={error} />
      {label && <span className="flex-initial leading-tight truncate">{label}</span>}
    </label>
  );
}
