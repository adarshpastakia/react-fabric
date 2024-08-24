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

import { Fragment, useEffect } from "react";
import { ErrorIcon } from "../internal/ErrorIcon";

interface Props {
  /**
   * field name
   */
  name?: string;
  /**
   * hidden value will fire change for form update
   */
  hiddenValue?: AnyObject;
  /**
   * form onChange handler
   */
  onChange?: (value: AnyObject) => void;
}

export const HiddenInput = ({
  hiddenValue,
  onChange,
  // @ts-expect-error ignore
  // eslint-disable-next-line react/prop-types
  invalid,
  // @ts-expect-error ignore
  // eslint-disable-next-line react/prop-types
  error,
  // @ts-expect-error ignore
  // eslint-disable-next-line react/prop-types
  value = "",
  name,
}: Props) => {
  useEffect(() => {
    onChange?.(hiddenValue);
  }, [hiddenValue]);
  return (
    <Fragment>
      <input type="hidden" onChange={onChange} value={value} name={name} />
      <ErrorIcon invalid={invalid} error={error} />
    </Fragment>
  );
};
