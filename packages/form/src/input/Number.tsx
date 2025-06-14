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

export interface NumberProps
  extends InputProps<number>,
    RefProp<HTMLInputElement> {
  /**
   * minimum value
   */
  min?: number;
  /**
   * maximum value
   */
  max?: number;
  /**
   * increment step
   */
  step?: number;
}

/**
 * This component allows users to input numeric values with optional minimum, maximum, and step constraints.
 * It provides a clear interface for entering numbers, with support for validation and accessibility features.
 * It also includes a clear button to reset the input value.
 *
 * @param {NumberProps} props - The properties for the Number input component.
 * @returns {JSX.Element} The rendered Number input component.
 */
export const Number = ({
  ref,
  value,
  invalid,
  readOnly,
  disabled,
  required,
  placeholder,
  autoFocus,
  name,
  min,
  max,
  step,
  onBlur,
  onFocus,
  onChange,
  onEnterPressed,
  ...rest
}: NumberProps) => {
  const [actualValue, setActualValue] = useState<"" | number>("");
  const deferred = useDeferredValue(value);

  const handleEnterPressed = useHandleEnter(onEnterPressed);

  useEffect(() => {
    setActualValue(deferred ?? "");
  }, [deferred]);

  const handleChange = useCallback(
    (e?: ChangeEvent<HTMLInputElement>) => {
      const number = e?.target.valueAsNumber;
      setActualValue(number ?? "");
      onChange?.(number ?? null);
    },
    [onChange],
  );

  return (
    <InputWrapper
      showClear={!!actualValue && !disabled && !readOnly}
      onClear={handleChange}
      invalid={invalid}
      readOnly={readOnly}
      disabled={disabled}
      required={required}
      {...rest}
    >
      <input
        className="appearance-none bg-transparent py-1 px-2 flex-1 border-none outline-none ring-0 peer"
        aria-invalid={invalid}
        aria-disabled={disabled}
        aria-readonly={readOnly}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
        data-testid={name}
        name={name}
        type="number"
        size={1}
        min={min}
        max={max}
        step={step}
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
