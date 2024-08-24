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
  useRef,
  useState,
  type ChangeEvent,
} from "react";
import { InputWrapper } from "../internal/InputWrapper";
import { type InputProps } from "../types";

export interface TextareaProps
  extends Omit<InputProps, "onEnterPressed">,
    RefProp<HTMLTextAreaElement> {
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
}

export const Textarea = ({
  ref,
  value,
  name,
  invalid,
  readOnly,
  disabled,
  required,
  placeholder,
  autoFocus,
  rows = 5,
  maxRows = 12,
  variableRows,
  onChange,
  ...rest
}: TextareaProps) => {
  const [actualValue, setActualValue] = useState("");
  const [fixedRows, setFixedRows] = useState(rows);
  const deferred = useDeferredValue(value);
  const wrapperRef = useRef(null);

  useEffect(() => {
    setActualValue(deferred ?? "");
  }, [deferred]);

  const handleChange = useCallback(
    (e?: ChangeEvent<HTMLTextAreaElement>) => {
      const value = e?.target.value;
      setActualValue(value ?? "");
      onChange?.(value ?? undefined);
    },
    [onChange],
  );

  useEffect(() => {
    if (variableRows) {
      const lines = actualValue?.split("\n").length ?? 1;
      setFixedRows(Math.max(rows, Math.min(maxRows, lines)));
    } else {
      setFixedRows(rows);
    }
  }, [actualValue, variableRows, rows, maxRows]);

  return (
    <InputWrapper
      showClear={!!actualValue}
      onClear={handleChange}
      invalid={invalid}
      readOnly={readOnly}
      disabled={disabled}
      required={required}
      wrapperRef={wrapperRef}
      textarea
      {...rest}
    >
      <textarea
        className="appearance-none self-stretch bg-transparent py-1 px-2 flex-1 border-none outline-none ring-0 min-h-20 resize-none"
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
        value={actualValue}
        onChange={handleChange}
      />
    </InputWrapper>
  );
};
