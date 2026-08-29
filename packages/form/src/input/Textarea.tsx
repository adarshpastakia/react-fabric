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
import type { KeyboardEventHandler } from "react";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { InputWrapper } from "../internal/InputWrapper";
import type { InputProps, WrapperProps } from "../types";
import { getWrapperProps, useHandleEnter } from "../utils";

export interface TextareaProps extends InputProps, WrapperProps, RefProp<HTMLTextAreaElement> {
  /**
   * textarae rows
   */
  rows?: number;
  /**
   * maximum rows
   */
  maxRows?: number;
  /**
   * increment rows on value change
   */
  variableRows?: boolean;
  /**
   * expandable textarea
   */
  expandable?: boolean;
}

/**
 * Textarea component that allows users to input multi-line text.
 * It supports features like variable row count, expandable behavior,
 * and handling of focus, blur, and change events.
 * This component is designed to be flexible and user-friendly,
 * providing a clear interface for text input with optional validation and accessibility features.
 */
export function Textarea(props: TextareaProps) {
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
    rows = 5,
    maxRows = 12,
    placeholder,
    name,
    autoFocus,
    expandable,
    variableRows,
    allowClear,
    ref,
  } = props;

  const id = useId();
  const { currentValue, updateValue } = useControlledValue(value, defaultValue);

  const [fixedRows, setFixedRows] = useState(() => rows);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleChange = useCallback(
    (e?: React.ChangeEvent<HTMLTextAreaElement>) => {
      const value = e?.target.value ?? defaultValue;
      updateValue(value);
      onChange?.(value);
    },
    [defaultValue, updateValue, onChange],
  );

  useEffect(() => {
    if (variableRows) {
      const lines = currentValue?.split("\n").length ?? 1;
      // eslint-disable-next-line @eslint-react/set-state-in-effect
      setFixedRows(Math.max(rows, Math.min(maxRows, lines)));
    }
  }, [currentValue, variableRows, rows, maxRows]);

  const handleEnterPressed = useHandleEnter<HTMLTextAreaElement>(
    onEnterPressed as unknown as KeyboardEventHandler<HTMLTextAreaElement>,
    {
      preventDefault: !!onEnterPressed,
    },
  );

  return (
    <InputWrapper
      id={id}
      textarea
      textareaExpandable={expandable}
      showClear={allowClear && (currentValue ?? "") !== (defaultValue ?? "") && !disabled && !readOnly}
      onClear={handleChange}
      ref={wrapperRef}
      {...getWrapperProps(props)}
    >
      <textarea
        id={id}
        className="appearance-none self-stretch bg-transparent py-1 px-4 not-first:ps-2 not-last:pe-2 flex-1 border-none outline-none ring-0 min-h-12 resize-none"
        aria-invalid={invalid}
        aria-disabled={disabled}
        aria-readonly={readOnly}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
        rows={fixedRows}
        data-testid={name}
        name={name}
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
