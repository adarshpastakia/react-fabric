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

import classNames from "classnames";
import classes from "./Field.module.css";

export const FieldWrapper = ({
  label,
  appendLabel,
  width,
  labelWidth = 192,
  inline,
  info,
  disabled,
  required,
  children,
  listing,
  className,
  "data-inner": isInner,
}: KeyValue) => {
  return (
    <div
      className={classNames(
        classes.fieldWrapper,
        className,
        inline ? "flex flex-nowrap gap-1" : "block",
      )}
      data-ref="fieldWrapper"
      style={{ width, flexBasis: width }}
    >
      {!isInner && (
        <div
          className="flex flex-nowrap flex-content gap-1 py-0.5 px-2"
          style={{ width: inline ? labelWidth : undefined }}
        >
          <label
            role="none"
            className={classNames(
              "flex-initial truncate text-sm",
              disabled && "text-muted",
            )}
            onClick={(e) =>
              e.currentTarget
                .closest<HTMLElement>('[data-ref="fieldWrapper"]')
                ?.querySelector<HTMLElement>("input,textarea")
                ?.focus()
            }
          >
            {label}
          </label>
          {required && (
            <span className="text-danger-500 select-none flex-content text-[10px]">
              ✽
            </span>
          )}
          {appendLabel && <span className="flex-content">{appendLabel}</span>}
        </div>
      )}
      {children}
      {listing}
      {info && <div className="text-sm text-muted flex-content">{info}</div>}
    </div>
  );
};
