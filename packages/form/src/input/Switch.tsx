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
  type ColorType,
  type RefProp,
} from "@react-fabric/core/dist/types/types";
import classNames from "classnames";
import {
  useCallback,
  useDeferredValue,
  useEffect,
  useState,
  type ChangeEvent,
} from "react";
import { ErrorIcon } from "../internal/ErrorIcon";
import { getBgClass, getColor } from "../utils";

export interface SwitchProps extends RefProp<HTMLInputElement> {
  /**
   * Switch label
   */
  label?: JSX.Element | string;
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
   * cutom Switch icon
   */
  color?: ColorType;
  /**
   * cutom Switch icon
   */
  defaultColor?: ColorType;

  name?: string;
}

export const Switch = ({
  ref,
  label,
  checked,
  invalid,
  disabled,
  error,
  width,
  color,
  name,
  defaultColor,
  onChange,
  ...rest
}: SwitchProps) => {
  const [actualValue, setActualValue] = useState(false);
  const deferred = useDeferredValue(!!checked);

  useEffect(() => {
    setActualValue(deferred);
  }, [deferred]);

  const handleChange = useCallback(
    (e?: ChangeEvent<HTMLInputElement>) => {
      setActualValue(e?.target.checked ?? false);
      onChange?.(e?.target.checked ?? false);
    },
    [onChange],
  );

  return (
    <label
      className={classNames(
        invalid ? "ring-danger-500" : "ring-primary-500",
        disabled
          ? "opacity-50 cursor-not-allowed"
          : "hover:opacity-100 cursor-pointer",
        "inline-flex gap-1 py-1 items-center relative cursor-pointer opacity-85 rounded ring-offset-2 has-[:focus-visible]:ring-1",
      )}
      style={{ width }}
    >
      <div
        className={classNames(
          actualValue && getBgClass(color ? `${color}-500` : "primary-500"),
          !actualValue &&
            (defaultColor ? getBgClass(`${defaultColor}-500`) : "bg-tint-200"),
          "relative flex h-6 w-10 cursor-pointer rounded-full p-1 transition-colors duration-200 ease-in-out",
        )}
        style={{
          backgroundColor: actualValue
            ? getColor(color)
            : getColor(defaultColor),
        }}
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
          autoComplete="off"
          checked={actualValue}
          onChange={handleChange}
          {...rest}
        />
        <span
          aria-hidden="true"
          className={classNames(
            !disabled && "shadow-sm",
            actualValue ? "translate-x-4" : "translate-x-0",
            "pointer-events-none inline-block size-4 rounded-full bg-white ring-0 transition duration-200 ease-in-out",
          )}
        />
      </div>
      <ErrorIcon invalid={invalid} error={error} />
      {label && (
        <span className="flex-initial leading-5 truncate">{label}</span>
      )}
    </label>
  );
};
