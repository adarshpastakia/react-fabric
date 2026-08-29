/*
 * React Fabric
 * @version: 1.0.0
 *
 *
 * The MIT License (MIT)
 * Copyright (c) 2025 Adarsh Pastakia
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

import {
  arrow,
  autoUpdate,
  flip,
  FloatingArrow,
  offset,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useFocus,
  useInteractions,
} from "@floating-ui/react";
import { useControlledValue } from "@react-fabric/core";
import type { RefProp } from "@react-fabric/core/dist/types/types";
import type { DateLike } from "@react-fabric/date";
import { DatePanel, DateUtil } from "@react-fabric/date";
import { cn, mergeRefs } from "@react-fabric/utilities";
import { startTransition, useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import { InputWrapper } from "../internal/InputWrapper";
import type { InputProps, WrapperProps } from "../types";
import { getWrapperProps, useHandleEnter } from "../utils";

export interface DateProps extends InputProps<DateLike>, WrapperProps, RefProp<HTMLInputElement> {
  type?: "date" | "datetime";
  /**
   * minimum value
   */
  min?: DateLike;
  /**
   * maximum value
   */
  max?: DateLike;
}

/**
 * Date input component that allows users to select a date or datetime.
 * It uses the Floating UI library for positioning the date picker.
 * It also provides a button to clear the selected date.
 * The component supports both date and datetime types, with appropriate formatting.
 */
export function DateInput(props: DateProps) {
  const {
    ref,
    name,
    value,
    invalid,
    readOnly,
    disabled,
    placeholder,
    defaultValue,
    autoFocus,
    error,
    type = "date",
    onBlur,
    onFocus,
    onChange,
    onEnterPressed,
    allowClear,
    min,
    max,
  } = props;
  const id = useId();
  const { currentValue, updateValue } = useControlledValue(value, defaultValue);
  const [inputValue, setInputValue] = useState("");

  const inputFormat = useMemo(() => (type === "datetime" ? "yyyy-MM-dd HH:mm" : "yyyy-MM-dd"), [type]);

  useEffect(() => {
    // eslint-disable-next-line @eslint-react/set-state-in-effect
    setInputValue(currentValue ? DateUtil.format(currentValue, inputFormat) : "");
  }, [currentValue, inputFormat]);

  const handleEnterPressed = useHandleEnter(onEnterPressed);

  const handleChange = useCallback(
    (e?: React.ChangeEvent<HTMLInputElement>) => {
      const value = e?.currentTarget.value ?? defaultValue;
      if (value) {
        const parsed = DateUtil.parseDate(value);
        updateValue(parsed?.toISOString?.());
        setInputValue(DateUtil.format(parsed, inputFormat));
        if (onChange) startTransition(() => onChange(parsed?.toISOString?.()));
      } else {
        updateValue("");
        setInputValue("");
        if (onChange) startTransition(() => onChange());
      }
    },
    [defaultValue, updateValue, inputFormat, onChange],
  );

  const handleDateChange = useCallback(
    (value?: string) => {
      if (value) {
        const parsed = DateUtil.parseDate(value);
        updateValue(parsed?.toISOString?.());
        setInputValue(DateUtil.format(parsed, inputFormat));
        if (onChange) startTransition(() => onChange(parsed?.toISOString?.()));
      } else {
        updateValue("");
        setInputValue("");
        if (onChange) startTransition(() => onChange());
      }
    },
    [updateValue, inputFormat, onChange],
  );

  const arrowRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: (open, _, reason) => {
      if (reason === "reference-press") return;
      setIsOpen(open);
    },
    strategy: "fixed",
    placement: "bottom-start",
    whileElementsMounted: autoUpdate,
    middleware: [
      shift({ padding: 8 }),
      flip(),
      offset(9),
      arrow({
        element: arrowRef,
      }),
    ],
  });

  const focus = useFocus(context, {
    enabled: !disabled,
  });
  const click = useClick(context, {
    enabled: !disabled,
    toggle: false,
  });
  const dismiss = useDismiss(context, {
    referencePress: true,
  });

  const { getReferenceProps, getFloatingProps } = useInteractions([dismiss, click, focus]);

  return (
    <InputWrapper
      id={id}
      showClear={allowClear && !!currentValue && !disabled && !readOnly}
      onClear={handleChange}
      {...getWrapperProps(props)}
    >
      <input
        id={id}
        className={cn(
          "appearance-none bg-transparent py-1 px-4 not-first:ps-2 not-last:pe-2 flex-1 border-none outline-none ring-0 peer",
          !currentValue && "empty",
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
        type={type === "datetime" ? "datetime-local" : "date"}
        autoComplete="off"
        // eslint-disable-next-line jsx-a11y-x/no-autofocus
        autoFocus={autoFocus}
        value={inputValue}
        ref={mergeRefs(ref, (el: HTMLInputElement) => refs.setReference(el))}
        {...getReferenceProps({
          onBlur,
          onFocus,
        })}
        onChange={handleChange}
        onKeyDown={handleEnterPressed}
      />
      {isOpen && (
        <div
          ref={(el) => refs.setFloating(el)}
          style={{
            zIndex: "var(--z-popover)",
            ...floatingStyles,
          }}
          className="shadow-lg bg-default ring-1 ring-tint-100"
          data-ref="dropdownBody"
          {...getFloatingProps()}
        >
          <DatePanel
            withTime={type === "datetime"}
            value={currentValue ?? ""}
            max={max}
            min={min}
            onChange={handleDateChange}
          />
          <FloatingArrow ref={arrowRef} context={context} strokeWidth={0.5} className="fill-default stroke-muted" />
        </div>
      )}
    </InputWrapper>
  );
}
