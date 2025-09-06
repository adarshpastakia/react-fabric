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

import { type RefProp } from "@react-fabric/core/dist/types/types";
import classNames from "classnames";
import {
  useCallback,
  useDeferredValue,
  useEffect,
  useState,
  type ChangeEvent,
} from "react";
import { InputWrapper } from "../internal/InputWrapper";
import { type InputProps } from "../types";
import { useHandleEnter } from "../utils";

export interface TextInputProps extends InputProps, RefProp<HTMLInputElement> {
  /**
   * input type
   */
  type?: "email" | "file" | "search" | "tel" | "text" | "url";
}

/**
 * This component is used to render a text input field with various properties such as name, value, invalid state, read-only, disabled, required, placeholder, autoFocus, error message, monospace font option, and event handlers for blur, focus, change, and enter key press.
 * It also includes a clear button that appears when there is a value in the input field, allowing users to clear the input easily.
 * The component uses a wrapper to handle the clear button and styling, and it supports deferred value updates to optimize performance.
 *
 * @param {TextInputProps} props - The properties for the text input component.
 * @returns {JSX.Element} - A JSX element representing the text input field.
 */
export const Input = ({
  ref,
  name,
  value,
  invalid,
  readOnly,
  disabled,
  required,
  placeholder,
  defaultValue,
  autoFocus,
  error,
  monospace,
  type = "text",
  onBlur,
  onFocus,
  onChange,
  onEnterPressed,
  ...rest
}: TextInputProps) => {
  const [actualValue, setActualValue] = useState("");
  const deferred = useDeferredValue(value ?? defaultValue);

  const handleEnterPressed = useHandleEnter(onEnterPressed);

  useEffect(() => {
    setActualValue(deferred ?? "");
  }, [deferred]);

  const handleChange = useCallback(
    (e?: ChangeEvent<HTMLInputElement>) => {
      const value = e?.target.value ?? defaultValue;
      setActualValue(value ?? "");
      onChange?.(value ?? null);
    },
    [onChange, defaultValue],
  );

  return (
    <InputWrapper
      showClear={!!actualValue && !disabled && !readOnly}
      onClear={handleChange}
      invalid={invalid}
      readOnly={readOnly}
      disabled={disabled}
      required={required}
      error={error}
      {...rest}
    >
      <input
        className={classNames(
          "appearance-none bg-transparent py-1 px-2 flex-1 border-none outline-none ring-0 peer",
          monospace && "font-mono text-sm",
        )}
        aria-invalid={invalid}
        aria-disabled={disabled}
        aria-readonly={readOnly}
        aria-errormessage={error}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
        data-testid={name}
        name={name}
        size={1}
        type={type}
        ref={ref}
        autoComplete="off"
        autoFocus={autoFocus}
        value={actualValue}
        onBlur={onBlur}
        onFocus={onFocus}
        onChange={handleChange}
        onKeyDown={handleEnterPressed}
      />
    </InputWrapper>
  );
};
