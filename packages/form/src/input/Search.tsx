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

import { Button, CoreIcons, Icon, useDebounce } from "@react-fabric/core";
import { type RefProp } from "@react-fabric/core/dist/types/types";
import {
  Fragment,
  useCallback,
  useDeferredValue,
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
} from "react";
import { InputWrapper } from "../internal/InputWrapper";
import { type InputProps } from "../types";
import { useHandleEnter } from "../utils";

export interface SearchProps extends InputProps, RefProp<HTMLInputElement> {
  /**
   * is searching
   */
  searching?: boolean;
  /**
   * search on value change
   */
  searchOnChange?: boolean;
  /**
   * hide search action handle
   */
  hideHandle?: boolean;
  /**
   * search handler
   */
  onSearch?: (query?: string) => void;
}

/**
 * Search input component with optional searching state and search handler.
 * This component allows users to input search queries and trigger a search action.
 * It supports features like searching on value change, showing a search handle,
 * and handling search actions with a debounce mechanism.
 *
 * @param {SearchProps} props - The properties for the Search component.
 * @returns {JSX.Element} The rendered Search input component.
 */
export const Search = ({
  ref,
  value,
  name,
  invalid,
  readOnly,
  disabled,
  required,
  searching,
  placeholder,
  autoFocus,
  hideHandle,
  allowClear = true,
  searchOnChange = false,
  onBlur,
  onFocus,
  onSearch,
  onChange,
  onEnterPressed,
  ...rest
}: SearchProps) => {
  const [actualValue, setActualValue] = useState("");
  const deferred = useDeferredValue(value);

  const refValue = useRef("");
  const handleSearch = useDebounce(
    () => onSearch?.(refValue.current),
    [onSearch],
    250,
  );

  const handleEnterPressed = useHandleEnter(handleSearch);

  useEffect(() => {
    setActualValue(deferred ?? "");
  }, [deferred]);

  const handleChange = useCallback(
    (e?: ChangeEvent<HTMLInputElement>) => {
      const value = e?.target.value;
      refValue.current = value ?? "";
      setActualValue(value ?? "");
      onChange?.(value ?? null);

      // when e is undefined value was cleared so force fire onSearch
      if (!e || searchOnChange) {
        handleSearch();
      }
    },
    [onChange, searchOnChange, handleSearch],
  );

  return (
    <InputWrapper
      showClear={!!actualValue && !disabled && !readOnly}
      onClear={handleChange}
      allowClear={allowClear}
      invalid={invalid}
      readOnly={readOnly}
      disabled={disabled}
      required={required}
      actionButton={
        <Fragment>
          {searching && (
            <Icon className="p-2" icon={CoreIcons.spinner} animate="spin" />
          )}
          {!searching && !hideHandle && (
            <Button
              tabIndex={-1}
              variant="link"
              aria-label="search"
              disabled={!actualValue}
              icon={CoreIcons.search}
              onClick={handleSearch}
            />
          )}
        </Fragment>
      }
      {...rest}
    >
      <input
        className="appearance-none bg-transparent py-1 px-2 flex-1 border-none outline-none ring-0 peer"
        aria-invalid={invalid}
        aria-disabled={disabled}
        aria-readonly={readOnly}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
        size={1}
        data-testid={name}
        name={name}
        type="search"
        ref={ref}
        autoComplete="off"
        autoFocus={autoFocus}
        value={actualValue}
        onBlur={onBlur}
        onFocus={onFocus}
        onChange={handleChange}
        onKeyDown={handleEnterPressed}
      />
    </InputWrapper>
  );
};
