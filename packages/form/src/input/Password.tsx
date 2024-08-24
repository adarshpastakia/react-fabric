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

import { Button, CoreIcons, Tooltip } from "@react-fabric/core";
import { type RefProp } from "@react-fabric/core/dist/types/types";
import classNames from "classnames";
import {
  useCallback,
  useDeferredValue,
  useEffect,
  useMemo,
  useState,
  type ChangeEvent,
} from "react";
import { useTranslation } from "react-i18next";
import { InputWrapper } from "../internal/InputWrapper";
import { type InputProps } from "../types";
import { handleEnter } from "../utils";

export interface PasswordProps extends InputProps, RefProp<HTMLInputElement> {
  /**
   * show password toggle
   */
  showToggle?: boolean;
  /**
   * password strength meter (0-1)
   */
  strength?: number;
}

export const Password = ({
  ref,
  value,
  name,
  strength,
  invalid,
  readOnly,
  disabled,
  required,
  placeholder,
  autoFocus,
  showToggle,
  onChange,
  onEnterPressed,
  ...rest
}: PasswordProps) => {
  const { t } = useTranslation("form");
  const [show, setShow] = useState(false);

  const [actualValue, setActualValue] = useState("");
  const deferred = useDeferredValue(value);

  const handleEnterPressed = useMemo(
    () => handleEnter(onEnterPressed),
    [onEnterPressed],
  );

  useEffect(() => {
    setActualValue(deferred ?? "");
  }, [deferred]);

  const handleChange = useCallback(
    (e?: ChangeEvent<HTMLInputElement>) => {
      const value = e?.target.value;
      setActualValue(value ?? "");
      onChange?.(value ?? undefined);
    },
    [onChange],
  );

  return (
    <InputWrapper
      showClear={!!actualValue}
      onClear={handleChange}
      invalid={invalid}
      readOnly={readOnly}
      disabled={disabled}
      required={required}
      {...rest}
      decorateEnd={
        showToggle && (
          <Tooltip
            color="warning"
            content={t(show ? "password.hide" : "password.show")}
          >
            <Button
              tabIndex={-1}
              color="warning"
              variant="link"
              aria-label={t(show ? "password.hide" : "password.show")}
              icon={show ? CoreIcons.eyeOff : CoreIcons.eye}
              onClick={() => setShow(!show)}
            />
          </Tooltip>
        )
      }
    >
      <input
        className="appearance-none bg-transparent py-1 px-2 flex-1 border-none outline-none ring-0"
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
        value={actualValue}
        onChange={handleChange}
        onKeyDown={handleEnterPressed}
      />
      {!!strength && (
        <div
          className={classNames(
            "absolute bottom-px h-[3px] inset-x-0 after:block after:h-full after:bg-dimmed",
            "ltr:bg-gradient-to-r rtl:bg-gradient-to-l from-danger-500 via-marigold-500 to-jade-500",
          )}
          style={{
            paddingInlineStart: `${strength > 1 ? 100 : strength * 100}%`,
          }}
        />
      )}
    </InputWrapper>
  );
};
