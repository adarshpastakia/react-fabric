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

import { CoreIcons, Dropdown, Icon } from "@react-fabric/core";
import { type RefProp } from "@react-fabric/core/dist/types/types";
import { isString } from "@react-fabric/utilities";
import classNames from "classnames";
import {
  startTransition,
  useCallback,
  useDeferredValue,
  useEffect,
  useState,
} from "react";
import { type InputProps } from "../types";
import { ColorPicker, type ColorProps } from "./ColorPicker";

export interface ColorInputProps extends InputProps, ColorProps, RefProp {
  /**
   * show eydrop picker
   */
  showPicker?: boolean;
}

export const ColorInput = ({
  ref,
  required,
  disabled,
  allowClear,
  invalid,
  error,
  value,
  showPicker,
  defaultColor = "",
  decorateEnd,
  decorateStart,
  onChange,
  // @ts-expect-error ignore
  noOutline,
  ...rest
}: ColorInputProps) => {
  const [actualValue, setActualValue] = useState("");
  const deferred = useDeferredValue(value ?? defaultColor);

  useEffect(() => {
    setActualValue(deferred ?? "");
  }, [deferred]);

  const handleChange = useCallback(
    (e?: string) => {
      setActualValue(e ?? defaultColor);
      onChange != null && startTransition(() => onChange(e));
    },
    [onChange],
  );

  return (
    <div
      className={classNames(
        "flex-content min-h-[1.5em] min-w-[3.5em] self-stretch flex items-center outline-tint-200 rounded",
        !disabled && "bg-base",
        !noOutline && "bg-[var(--fabric-input)] outline overflow-hidden",
      )}
    >
      {decorateStart && (
        <div
          className={classNames(
            "text-muted leading-none flex-content",
            isString(decorateStart) && "px-2",
          )}
        >
          {decorateStart}
        </div>
      )}
      <Dropdown showArrow disabled={disabled}>
        <button data-ref="button" className="flex-1 flex items-center">
          <div
            role="none"
            className="h-[1.5em] min-w-[1.5em] flex-1 flex items-center justify-center self-stretch cursor-pointer m-[0.25em] rounded outline outline-tint-100"
            style={{
              backgroundColor: actualValue,
              opacity: disabled ? 0.65 : 1,
              pointerEvents: disabled ? "none" : undefined,
            }}
            onClick={(e) =>
              (e.currentTarget.nextElementSibling as HTMLElement)?.focus()
            }
          >
            {!actualValue && (
              <Icon
                size="md"
                className="text-muted"
                icon={CoreIcons.colorSwatch}
              />
            )}
          </div>
        </button>
        <ColorPicker
          {...rest}
          onChange={handleChange}
          defaultColor={defaultColor}
          value={actualValue}
        />
      </Dropdown>
      {!disabled && showPicker && (
        <Icon
          icon={CoreIcons.colorPicker}
          onClick={() =>
            (window as AnyObject).EyeDropper &&
            new (window as AnyObject).EyeDropper()
              .open()
              .then((resp: AnyObject) => handleChange(resp.sRGBHex))
          }
        />
      )}
      {decorateEnd && (
        <div
          className={classNames(
            "text-muted leading-none flex-content",
            isString(decorateEnd) && "px-2",
          )}
        >
          {decorateEnd}
        </div>
      )}
      {!disabled && allowClear && actualValue !== defaultColor && (
        <Icon
          icon={CoreIcons.close}
          onClick={() => handleChange()}
          className={classNames(
            "text-tint-500 hover:text-tint-700 p-[0.25em] flex-content",
          )}
        />
      )}
    </div>
  );
};
