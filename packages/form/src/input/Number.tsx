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

import { useControlledValue } from "@react-fabric/core";
import type { RefProp } from "@react-fabric/core/dist/types/types";
import { useCallback, useId } from "react";
import { InputWrapper } from "../internal/InputWrapper";
import type { InputProps, WrapperProps } from "../types";
import { getWrapperProps, useHandleEnter } from "../utils";

export interface NumberProps extends InputProps<number>, WrapperProps, RefProp<HTMLInputElement> {
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
 */
export function Number(props: NumberProps) {
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
    min,
    max,
    step,
    placeholder,
    name,
    autoFocus,
    allowClear,
    ref,
  } = props;

  const id = useId();
  const { currentValue, updateValue } = useControlledValue(value, defaultValue);

  const handleEnterPressed = useHandleEnter(onEnterPressed);

  const handleChange = useCallback(
    (e?: React.ChangeEvent<HTMLInputElement>) => {
      const number = e?.target.valueAsNumber ?? defaultValue;
      updateValue(number);
      onChange?.(number);
    },
    [defaultValue, updateValue, onChange],
  );

  return (
    <InputWrapper
      id={id}
      showClear={allowClear && (currentValue ?? "") !== (defaultValue ?? "") && !disabled && !readOnly}
      onClear={handleChange}
      hasStepper
      {...getWrapperProps(props)}
    >
      <input
        id={id}
        className="appearance-none bg-transparent py-1 ps-4 pe-2 not-first:ps-2 flex-1 border-none outline-none ring-0 peer"
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
        {...{ autoFocus }}
        value={currentValue ?? ""}
        onBlur={onBlur}
        onFocus={onFocus}
        onChange={handleChange}
        onKeyDown={handleEnterPressed}
      />
    </InputWrapper>
  );
}
