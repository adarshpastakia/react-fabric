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

import {
  autoUpdate,
  FloatingFocusManager,
  useFloating,
  useInteractions,
  useListNavigation,
  useTypeahead,
} from "@floating-ui/react";
import { Chip } from "@react-fabric/core";
import { isArray, isEmpty } from "@react-fabric/utilities";
import classNames from "classnames";
import { Fragment, useCallback, useId, useLayoutEffect, useMemo } from "react";
import { FieldWrapper } from "../internal/FieldWrapper";
import { InputWrapper } from "../internal/InputWrapper";
import { type SelectProps } from "../types";
import { Options } from "./Options";
import { useSelect } from "./useSelect";

export const List = <T extends AnyObject = string>({
  ref,
  name,
  value,
  readOnly,
  disabled,
  required,
  placeholder,
  autoFocus,
  options,
  height,
  groupProperty,
  labelProperty,
  valueProperty,
  sortProperty,
  multiple,
  allowCreate,
  searchable,
  createOption,
  matcher,
  renderer,
  onQuery,
  onChange,
  onSelect,
  onEnterPressed,
  emptyDisplay,
  invalid,
  error,
  allowClear,
  decorateStart,
  decorateEnd,
  // @ts-expect-error ignore
  "data-inner": isInner,
  // @ts-expect-error ignore
  "data-hide-selected": hideSelected,
  ...rest
}: Omit<SelectProps<T>, "defaultOpen" | "hideHandle"> & {
  height?: string | number;
}) => {
  const Wrapper = useMemo(() => (isInner ? Fragment : FieldWrapper), [isInner]);
  const wrapperProps = useMemo(
    () => (isInner ? {} : { ...rest }),
    [isInner, rest],
  );

  const {
    state,
    listRef,
    listContentRef,
    macthOption,
    handleChange,
    handleRemove,
    handleQuery,
    setItemRef,
    setActiveIndex,
  } = useSelect({
    value,
    options,
    multiple,
    groupProperty,
    labelProperty,
    valueProperty,
    sortProperty,
    allowCreate,
    createOption,
    matcher,
    onChange,
    onSelect,
    onQuery,
  });

  const dropdownKey = useId();

  const { context, refs } = useFloating({
    open: true,
    placement: "bottom",
    whileElementsMounted: autoUpdate,
    middleware: [],
  });

  // floating interactions
  const navigation = useListNavigation(context, {
    listRef,
    activeIndex: state.activeIndex,
    selectedIndex: state.selectedIndex,
    loop: true,
    virtual: true,
    focusItemOnOpen: false,
    onNavigate: setActiveIndex,
  });

  const typeahead = useTypeahead(context, {
    listRef: listContentRef,
    activeIndex: state.activeIndex,
    selectedIndex: state.selectedIndex,
    findMatch(list, typedString) {
      return list.find((item) => macthOption(item, typedString));
    },
    onMatch(index) {
      state.open && setActiveIndex(index);
    },
  });

  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions(
    [navigation, typeahead],
  );

  const referenceProps = useMemo(() => {
    const props: AnyObject = getReferenceProps();

    return {
      ...props,
      onBlur(evt: React.FocusEvent) {
        if (
          evt.relatedTarget?.closest(`[data-select-dropdown="${dropdownKey}"]`)
        ) {
          refs.domReference.current?.querySelector("input")?.focus();
          return;
        }
        handleQuery("");
      },
      onKeyDown(evt: React.KeyboardEvent) {
        if (evt.key === "Enter") {
          if (state.activeIndex !== null) {
            handleChange(listContentRef.current[state.activeIndex]);
            evt.preventDefault();
            evt.stopPropagation();
            return false;
          } else if (!state.query) {
            onEnterPressed?.(evt);
          }
        } else if (evt.key === "Backspace") {
          !state.query && handleRemove();
        } else if (!searchable || ["ArrowUp", "ArrowDown"].includes(evt.key)) {
          if (
            ["ArrowUp", "ArrowDown"].includes(evt.key) &&
            state.activeIndex === null
          ) {
            setActiveIndex(state.selectedIndex ?? 0);
          }
          setTimeout(() => {
            props.onKeyDown?.(evt);
          }, 50);
        }
      },
    };
  }, [
    getReferenceProps,
    onEnterPressed,
    handleQuery,
    refs,
    state.query,
    state.activeIndex,
  ]);

  const floatingProps = useMemo(() => {
    return getFloatingProps({
      "data-select-dropdown": dropdownKey,
    } as AnyObject);
  }, [getFloatingProps]);

  const makeItemProps = useCallback(
    (item: AnyObject) => {
      const selected = isArray(state.value)
        ? state.value?.includes?.(item)
        : state.value === item;
      return {
        ...getItemProps({
          "data-selected": selected ? true : undefined,
          onClick() {
            handleChange(item);
          },
        } as AnyObject),
        "aria-hidden": undefined,
      };
    },
    [getItemProps, handleChange, state.value],
  );

  const displayValue = useMemo(() => {
    if (isArray(state.value)) {
      return state.value.map((item: AnyObject, index) => (
        <Chip key={index} onRemove={() => handleRemove(index)}>
          {renderer?.(item) ?? item[labelProperty] ?? item}
        </Chip>
      ));
    } else if (!isEmpty(state.value) && !state.query) {
      return (
        <span>
          {renderer?.(state.value) ?? state.value[labelProperty] ?? state.value}
        </span>
      );
    }
  }, [state.value, state.query, placeholder, renderer]);

  useLayoutEffect(() => {
    setTimeout(() => {
      state.selectedIndex &&
        listRef.current[state.selectedIndex]?.scrollIntoView({
          block: "center",
        });
    }, 100);
  }, [state.selectedIndex]);

  return (
    <Wrapper {...wrapperProps}>
      <InputWrapper
        showClear={!isEmpty(state.value)}
        onClear={handleChange}
        invalid={invalid}
        readOnly={readOnly}
        disabled={disabled}
        required={required}
        error={error}
        className="z-1 rounded-b-none"
        data-inner={true}
        wrapperRef={refs.setReference}
      >
        <div
          role="none"
          data-select-display="true"
          className={classNames(
            "group flex-1 py-1 px-2 truncate text-start flex gap-1 relative min-h-5 justify-start",
            multiple ? "flex-wrap" : "flex-nowrap overflow-hidden",
          )}
          {...referenceProps}
          onMouseUp={(e) =>
            e.currentTarget.querySelector<HTMLElement>("input")?.focus()
          }
        >
          {!hideSelected && displayValue}
          <input
            readOnly={!searchable || readOnly}
            disabled={disabled}
            value={state.query ?? ""}
            aria-invalid={invalid}
            data-testid={name}
            name={name}
            size={1}
            ref={ref}
            autoFocus={autoFocus}
            className={classNames(
              "appearance-none bg-transparent outline-none border-none ring-0 flex-1 min-w-24",
              disabled && "cursor-not-allowed pointer-events-none",
              multiple && "min-w-24",
            )}
            placeholder={isEmpty(state.value) ? placeholder : ""}
            onChange={(evt) => handleQuery(evt.target.value)}
          />
        </div>
      </InputWrapper>
      <FloatingFocusManager
        context={context}
        initialFocus={-1}
        visuallyHiddenDismiss
      >
        <Options
          ref={refs.setFloating}
          className={classNames(
            "max-h-96 z-0 rounded-capped rounded-t-none outline",
            disabled && "pointer-events-none opacity-65",
          )}
          style={{
            height,
          }}
          {...floatingProps}
          items={state.items}
          active={state.activeIndex}
          valueProperty={valueProperty}
          labelProperty={labelProperty}
          itemRef={setItemRef}
          itemProps={makeItemProps}
          empty={emptyDisplay}
        >
          {(item, label) => renderer?.(item) ?? label}
        </Options>
      </FloatingFocusManager>
    </Wrapper>
  );
};
