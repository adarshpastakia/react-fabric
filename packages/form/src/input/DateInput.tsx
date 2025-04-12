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
import { type RefProp } from "@react-fabric/core/dist/types/types";
import { type DateLike, DatePanel, DateUtil } from "@react-fabric/date";
import { mergeRefs } from "@react-fabric/utilities";
import {
  type ChangeEvent,
  startTransition,
  useCallback,
  useDeferredValue,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { InputWrapper } from "../internal/InputWrapper";
import { type InputProps } from "../types";
import { handleEnter } from "../utils";
import classNames from "classnames";

export interface DateProps
  extends InputProps<string>,
    RefProp<HTMLInputElement> {
  type?: "date" | "datetime";
  /**
   * date format
   */
  format?: string;
  /**
   * minimum value
   */
  min?: DateLike;
  /**
   * maximum value
   */
  max?: DateLike;
}

export const DateInput = ({
  ref,
  name,
  value,
  invalid,
  readOnly,
  disabled,
  required,
  placeholder,
  autoFocus,
  error,
  type = "date",
  onBlur,
  onFocus,
  onChange,
  onEnterPressed,
  format = "dd/MM/yyyy",
  min,
  max,
  ...rest
}: DateProps) => {
  const [actualValue, setActualValue] = useState("");
  const [inputValue, setInputValue] = useState("");
  const deferred = useDeferredValue(value);

  const inputFormat = useMemo(
    () => (type === "datetime" ? "yyyy-MM-dd HH:mm" : "yyyy-MM-dd"),
    [type],
  );

  useEffect(() => {
    setActualValue(deferred ?? "");
    setInputValue(deferred ? DateUtil.format(deferred, inputFormat) : "");
  }, [deferred, inputFormat]);

  const handleEnterPressed = useMemo(
    () => handleEnter(onEnterPressed),
    [onEnterPressed],
  );

  const handleChange = useCallback(
    (e?: ChangeEvent<HTMLInputElement>) => {
      const value = e?.currentTarget.value;
      if (value) {
        const parsed = DateUtil.parseDate(value);
        setActualValue(parsed?.toISOString?.());
        setInputValue(DateUtil.format(parsed, inputFormat));
        onChange != null &&
          startTransition(() => onChange(parsed?.toISOString?.()));
      } else {
        setActualValue("");
        setInputValue("");
        onChange != null && startTransition(() => onChange(null));
      }
    },
    [onChange, inputFormat],
  );

  const handleDateChange = useCallback(
    (value?: string) => {
      if (value) {
        const parsed = DateUtil.parseDate(value);
        setActualValue(parsed?.toISOString?.());
        setInputValue(DateUtil.format(parsed, inputFormat));
        onChange != null &&
          startTransition(() => onChange(parsed?.toISOString?.()));
      } else {
        setActualValue("");
        setInputValue("");
        onChange != null && startTransition(() => onChange(null));
      }
    },
    [onChange, inputFormat],
  );

  const arrowRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: (open, _, reason) => {
      console.log(reason);
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

  const { getReferenceProps, getFloatingProps } = useInteractions([
    dismiss,
    click,
    focus,
  ]);

  return (
    <InputWrapper
      showClear={!!actualValue && !disabled && !readOnly}
      onClear={handleChange}
      invalid={invalid}
      readOnly={readOnly}
      disabled={disabled}
      required={required}
      error={error}
      {...rest}
    >
      <input
        className={classNames(
          "appearance-none bg-transparent py-1 px-2 flex-1 border-none outline-none ring-0 peer",
          !value && "empty",
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
        autoFocus={autoFocus}
        value={inputValue}
        ref={mergeRefs(ref, refs.setReference)}
        {...getReferenceProps({
          onBlur,
          onFocus,
        })}
        onChange={handleChange}
        onKeyDown={handleEnterPressed}
      />
      {isOpen && (
        <div
          ref={refs.setFloating}
          style={{
            zIndex: "var(--z-popover)",
            ...floatingStyles,
          }}
          className="shadow-lg bg-base ring-1 ring-tint-100"
          data-ref="dropdownBody"
          {...getFloatingProps()}
        >
          <DatePanel
            withTime={type === "datetime"}
            value={actualValue}
            max={max}
            min={min}
            onChange={handleDateChange}
          />
          <FloatingArrow
            ref={arrowRef}
            context={context}
            strokeWidth={0.5}
            className="fill-base stroke-muted"
          />
        </div>
      )}
    </InputWrapper>
  );
};
