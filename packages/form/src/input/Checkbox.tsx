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

import { CoreIcons, Icon } from "@react-fabric/core";
import { type RefProp } from "@react-fabric/core/dist/types/types";
import classNames from "classnames";
import {
  useCallback,
  useDeferredValue,
  useEffect,
  useMemo,
  useState,
  type ChangeEvent,
} from "react";
import { ErrorIcon } from "../internal/ErrorIcon";

export interface CheckboxProps extends RefProp<HTMLInputElement> {
  /**
   * checkbox label
   */
  label?: JSX.Element | string;
  /**
   * checked
   */
  checked?: boolean;
  /**
   * value
   */
  value?: string | number;
  /**
   * on checked change
   */
  onChange?: (checked: boolean | string | number) => void;

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

export const Checkbox = ({
  ref,
  label,
  value,
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
}: CheckboxProps) => {
  const [actualValue, setActualValue] = useState(false);
  const deferred = useDeferredValue(!!checked);

  const iconOn = useMemo(
    () => iconChecked ?? icon ?? CoreIcons.checkboxOn,
    [icon, iconChecked],
  );
  const iconOff = useMemo(() => icon ?? CoreIcons.checkboxOff, [icon]);

  useEffect(() => {
    setActualValue(deferred);
  }, [deferred]);

  const handleChange = useCallback(
    (e?: ChangeEvent<HTMLInputElement>) => {
      setActualValue(e?.target.checked ?? false);
      onChange?.(e?.target.checked ?? false);
    },
    [onChange, value],
  );

  return (
    <label
      className={classNames(
        invalid ? "ring-danger-500" : "ring-primary-500",
        disabled
          ? "opacity-50 cursor-not-allowed"
          : " opacity-85 hover:opacity-100 cursor-pointer",
        "inline-flex gap-1 py-1 items-center relative rounded ring-offset-2 has-[:focus-visible]:ring-1",
      )}
      style={{ width }}
    >
      <input
        className={classNames(
          "appearance-none absolute opacity-0 inset-0 bg-transparent border-none outline-none ring-0",
        )}
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
        checked={actualValue}
        onChange={handleChange}
        {...rest}
      />
      <Icon
        className={classNames(
          "p-0.5",
          actualValue && icon && !iconChecked && "bg-primary-500 text-white",
        )}
        size="1.25em"
        color={invalid ? "danger" : "primary"}
        icon={actualValue ? iconOn : iconOff}
      />
      <ErrorIcon invalid={invalid} error={error} />
      {label && (
        <span className="flex-initial leading-none truncate">{label}</span>
      )}
    </label>
  );
};
