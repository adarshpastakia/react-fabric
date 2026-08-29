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

import { Button, Tooltip, useControlledValue } from "@react-fabric/core";
import type { RefProp } from "@react-fabric/core/dist/types/types";
import { cn } from "@react-fabric/utilities";
import { useCallback, useId, useState } from "react";
import { useTranslation } from "react-i18next";
import { InputWrapper } from "../internal/InputWrapper";
import type { InputProps, WrapperProps } from "../types";
import { getWrapperProps, useHandleEnter } from "../utils";

export interface PasswordProps extends InputProps, WrapperProps, RefProp<HTMLInputElement> {
  /**
   * show password toggle
   */
  showToggle?: boolean;
  /**
   * password strength meter (0-1)
   */
  strength?: number;
}

/**
 * Password input component with optional strength meter and toggle visibility.
 */
export function Password(props: PasswordProps) {
  const {
    value,
    defaultValue,
    onEnterPressed,
    onChange,
    onBlur,
    onFocus,
    disabled,
    readOnly,
    invalid,
    showToggle,
    strength,
    placeholder,
    name,
    autoFocus,
    allowClear,
    ref,
  } = props;

  const id = useId();
  const { currentValue, updateValue } = useControlledValue(value, defaultValue);

  const { t } = useTranslation("form");
  const [show, setShow] = useState(false);

  const handleEnterPressed = useHandleEnter(onEnterPressed);

  const handleChange = useCallback(
    (e?: React.ChangeEvent<HTMLInputElement>) => {
      const value = e?.target.value ?? defaultValue;
      updateValue(value);
      onChange?.(value);
    },
    [defaultValue, updateValue, onChange],
  );

  return (
    <InputWrapper
      id={id}
      showClear={allowClear && !!currentValue && !disabled && !readOnly}
      onClear={handleChange}
      invalid={invalid}
      {...getWrapperProps(props)}
      actionButton={
        showToggle &&
        currentValue && (
          <Tooltip color="warning" content={t(show ? "password.hide" : "password.show")}>
            <Button
              tabIndex={-1}
              color="warning"
              variant="link"
              aria-label={t(show ? "password.hide" : "password.show")}
              icon={show ? "icon-[mdi--eye-off-outline]" : "icon-[mdi--eye-outline]"}
              onClick={() => setShow(!show)}
            />
          </Tooltip>
        )
      }
    >
      <input
        id={id}
        className="appearance-none bg-transparent py-1 px-4 not-first:ps-2 not-last:pe-2 flex-1 border-none outline-none ring-0 peer"
        aria-invalid={invalid}
        aria-disabled={disabled}
        aria-readonly={readOnly}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
        data-testid={name}
        name={name}
        size={1}
        type={show ? "text" : "password"}
        ref={ref}
        autoComplete="off"
        {...{ autoFocus }}
        value={currentValue ?? ""}
        onBlur={onBlur}
        onFocus={onFocus}
        onChange={handleChange}
        onKeyDown={handleEnterPressed}
      />
      {!!strength && (
        <div
          className={cn("absolute bottom-px h-0.5 inset-x-0 after:block after:h-full after:bg-dimmed")}
          style={{
            paddingInlineStart: `${strength > 1 ? 100 : strength * 100}%`,
            background:
              "linear-gradient(to right,var(--color-scarlet-500) 25%,var(--color-amber-500) 50%,var(--color-jade-500) 75%,var(--color-avocado-500) 100%)",
          }}
        />
      )}
    </InputWrapper>
  );
}
