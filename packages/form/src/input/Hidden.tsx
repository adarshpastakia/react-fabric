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

/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { isEqual } from "@react-fabric/utilities";
import { Fragment, useDeferredValue, useEffect, useRef } from "react";
import { ErrorIcon } from "../internal/ErrorIcon";

interface Props {
  /**
   * field name
   */
  name?: string;
  /**
   * hidden input value
   */
  hiddenValue?: AnyObject;
}

/**
 * Hidden input component to handle hidden values in forms.
 * It will trigger the onChange handler with the hidden value after a short delay.
 * This is useful for cases where you need to update the form state without user interaction.
 */
export function HiddenInput(props: Props) {
  const {
    // @ts-expect-error ignore
    invalid = false,
    // @ts-expect-error ignore
    error = "",
    // @ts-expect-error ignore
    onChange,
    // @ts-expect-error ignore
    value,
    hiddenValue,
    name,
  } = props;

  const valueRef = useRef(value);
  const deferred = useDeferredValue(hiddenValue);
  useEffect(() => {
    valueRef.current = value;
  }, [value]);
  useEffect(() => {
    if (!isEqual(valueRef.current, deferred)) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      onChange?.(deferred);
    }
  }, [deferred, onChange]);
  return (
    <Fragment>
      <input type="hidden" value={value ?? ""} name={name} />
      <ErrorIcon invalid={invalid} error={error} />
    </Fragment>
  );
}
