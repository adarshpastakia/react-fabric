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
import { cn, getByPath, isArray, isEmpty } from "@react-fabric/utilities";
import { useCallback, useId, useLayoutEffect, useMemo } from "react";
import { InputWrapper } from "../internal/InputWrapper";
import { type SelectProps } from "../types";
import { getWrapperProps } from "../utils";
import { Options } from "./Options";
import { useSelect } from "./useSelect";

/**
 * List component for selecting items from a list.
 * It supports single and multiple selections, searching, creating new options,
 * and custom rendering of options.
 */
export function List<T extends AnyObject = string>(
  props: Omit<SelectProps<T>, "defaultOpen" | "hideHandle"> & {
    height?: string | number;
  },
) {
  const {
    ref,
    name,
    value,
    readOnly,
    disabled,
    placeholder,
    autoFocus,
    options,
    height,
    groupProperty,
    labelProperty = "label",
    valueProperty = "value",
    infoProperty,
    sortProperty,
    multiple,
    allowCreate,
    allowClear,
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
    // @ts-expect-error ignore
    "data-inner": isInner,
    // @ts-expect-error ignore
    "data-hide-selected": hideSelected,
  } = props;

  const {
    state,
    listRef,
    listContentRef,
    macthOption,
    handleChange,
    handleRemove,
    handleQuery,
    setItemRef,
    clearActiveIndex,
    setActiveIndex,
  } = useSelect({
    value,
    options,
    multiple,
    alwaysOpen: true,
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

  const dropdownKeyId = useId();

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
      if (state.open) setActiveIndex(index);
    },
  });

  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions([navigation, typeahead]);

  const referenceProps = useMemo(() => {
    const props = getReferenceProps();

    return {
      ...props,
      onBlur(evt: React.FocusEvent) {
        if (evt.relatedTarget?.closest(`[data-select-dropdown="${dropdownKeyId}"]`)) {
          refs.domReference.current?.querySelector("input")?.focus();
          return;
        }
        handleQuery("");
      },
      onKeyDown(evt: React.KeyboardEvent<HTMLInputElement>) {
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
          if (!state.query) handleRemove();
        } else if (!searchable || ["ArrowUp", "ArrowDown"].includes(evt.key)) {
          if (["ArrowUp", "ArrowDown"].includes(evt.key) && state.activeIndex === null) {
            setActiveIndex(state.selectedIndex ?? 0);
          }
          setTimeout(() => {
            // @ts-expect-error ignore
            props.onKeyDown?.(evt);
          }, 50);
        }
      },
    } as KeyValue;
  }, [
    getReferenceProps,
    dropdownKeyId,
    handleQuery,
    refs.domReference,
    searchable,
    state.activeIndex,
    state.query,
    state.selectedIndex,
    handleChange,
    listContentRef,
    onEnterPressed,
    handleRemove,
    setActiveIndex,
  ]);

  const floatingProps = useMemo(() => {
    return getFloatingProps({
      "data-select-dropdown": dropdownKeyId,
    } as KeyValue);
  }, [dropdownKeyId, getFloatingProps]);

  const makeItemProps = useCallback(
    (item: AnyObject) => {
      const selected = isArray(state.value) ? state.value?.includes?.(item) : state.value === item;
      return {
        ...getItemProps({
          "data-selected": selected ? true : undefined,
          onClick() {
            handleChange(item);
          },
        } as KeyValue),
        "aria-hidden": undefined,
      };
    },
    [getItemProps, handleChange, state.value],
  );

  const displayValue = useMemo(() => {
    if (isArray(state.value)) {
      return state.value.map((item: T, index) => (
        // eslint-disable-next-line @eslint-react/no-array-index-key
        <Chip key={index} onRemove={() => handleRemove(index)}>
          {/* @ts-expect-error ignore */}
          {renderer?.(item) ?? item[labelProperty] ?? item}
        </Chip>
      ));
    } else if (!isEmpty(state.value) && !state.query) {
      return (
        <span className="self-center pointer-events-none select-none truncate leading-tight">
          {/* eslint-disable-next-line @typescript-eslint/no-unsafe-member-access */}
          {renderer?.(state.value as T) ?? state.value[labelProperty] ?? state.value}
        </span>
      );
    }
  }, [state.value, state.query, renderer, labelProperty, handleRemove]);

  useLayoutEffect(() => {
    if (state.open) {
      const tmr = setTimeout(() => {
        if (state.selectedIndex)
          listRef.current[state.selectedIndex]?.scrollIntoView({
            block: "nearest",
          });
      }, 100);
      return () => {
        clearTimeout(tmr);
      };
    }
  }, [listRef, state.open, state.selectedIndex]);

  return (
    <>
      <InputWrapper
        showClear={allowClear && !isEmpty(state.value)}
        onClear={handleChange}
        ref={(el) => refs.setReference(el)}
        className="z-1 rounded-capped rounded-b-none outline"
        {...getWrapperProps(props)}
        borderless={!!isInner}
      >
        <div
          role="none"
          data-select-display="true"
          className={cn(
            "group flex-1 py-1 px-2 truncate text-start flex gap-1 relative min-h-5 justify-start",
            multiple ? "flex-wrap" : "flex-nowrap overflow-hidden",
          )}
          {...referenceProps}
          onMouseUp={(e) => e.currentTarget.querySelector<HTMLElement>("input")?.focus()}
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
            {...{ autoFocus }}
            className={cn(
              "appearance-none bg-transparent outline-none border-none ring-0 flex-1 min-w-24",
              disabled && "cursor-not-allowed pointer-events-none",
              multiple && "min-w-24",
            )}
            placeholder={!hideSelected && !isEmpty(state.value) ? "" : placeholder}
            onChange={(evt) => handleQuery(evt.target.value)}
          />
        </div>
      </InputWrapper>
      <FloatingFocusManager context={context} initialFocus={-1} visuallyHiddenDismiss closeOnFocusOut>
        <Options
          ref={(el) => refs.setFloating(el)}
          onMouseOut={() => clearActiveIndex()}
          className={cn(
            "max-h-96 z-0 rounded-capped! rounded-t-none! outline peer-focus-within:outline-primary-500",
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
          info={getByPath(state.activeItem as KeyValue, infoProperty ?? "info")}
        >
          {(item, label) => renderer?.(item as T) ?? label}
        </Options>
      </FloatingFocusManager>
    </>
  );
}
