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
  flip,
  FloatingFocusManager,
  FloatingPortal,
  offset,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useListNavigation,
  useTypeahead,
} from "@floating-ui/react";
import { Chip, Icon } from "@react-fabric/core";
import { cn, getByPath, isArray, isEmpty } from "@react-fabric/utilities";
import { useCallback, useId, useLayoutEffect, useMemo } from "react";
import { InputWrapper } from "../internal/InputWrapper";
import type { SelectProps } from "../types";
import { getWrapperProps } from "../utils";
import { Options } from "./Options";
import { useSelect } from "./useSelect";

/**
 * Select component for selecting items from a dropdown list.
 * It supports single and multiple selections, searching, creating new options,
 * and custom rendering of options.
 */
export function Select<T extends AnyObject = string>(props: SelectProps<T>) {
  const {
    ref,
    name,
    value,
    invalid,
    readOnly,
    disabled,
    placeholder,
    autoFocus,
    options,
    defaultOpen,
    hideHandle,
    groupProperty,
    labelProperty = "label",
    valueProperty = "value",
    sortProperty,
    infoProperty,
    multiple,
    searchable,
    allowClear,
    allowCreate,
    emptyDisplay,
    createOption,
    matcher,
    renderer,
    onQuery,
    onChange,
    onSelect,
    onEnterPressed,
  } = props;
  const {
    state,
    listRef,
    listContentRef,
    setOpen,
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
    defaultOpen,
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

  const { context, floatingStyles, refs, placement } = useFloating({
    open: state.open,
    onOpenChange: (open) => {
      if (!open) listRef.current = [];
      setOpen(open);
    },
    strategy: "fixed",
    placement: "bottom",
    whileElementsMounted: autoUpdate,
    middleware: [shift({ padding: 8 }), flip(), offset(2)],
  });

  // floating interactions
  const click = useClick(context, {});
  const dismiss = useDismiss(context, {
    // referencePress: true,
  });

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

      if (!searchable && !multiple && !state.open) handleChange(listContentRef.current[index]);
    },
  });

  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions([
    dismiss,
    searchable ? undefined : click,
    navigation,
    typeahead,
  ]);

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
        // setOpen(false);
      },
      onKeyDown(evt: React.KeyboardEvent<HTMLInputElement>) {
        if (evt.key === "Enter") {
          if (state.activeIndex !== null) {
            handleChange(listContentRef.current[state.activeIndex]);
            evt.preventDefault();
            evt.stopPropagation();
            return false;
          } else if (state.query) {
            handleQuery("");
            evt.preventDefault();
            evt.stopPropagation();
            return false;
          } else {
            onEnterPressed?.(evt);
          }
        } else if (evt.key === "Tab" && state.activeIndex !== null) {
          handleChange(listContentRef.current[state.activeIndex]);
        } else if (evt.key === "Backspace") {
          if (!state.query) handleRemove();
        } else if (!searchable || ["ArrowUp", "ArrowDown"].includes(evt.key)) {
          if (["ArrowUp", "ArrowDown"].includes(evt.key) && state.activeIndex === null) {
            setActiveIndex(state.selectedIndex);
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
    state.activeIndex,
    state.query,
    state.selectedIndex,
    searchable,
    handleChange,
    listContentRef,
    onEnterPressed,
    handleRemove,
    setActiveIndex,
  ]);

  const floatingProps = useMemo(() => {
    return getFloatingProps({
      // @ts-expect-error ignore
      "data-select-dropdown": dropdownKeyId,
    });
  }, [dropdownKeyId, getFloatingProps]);

  const makeItemProps = useCallback(
    (item: AnyObject) => {
      const selected = isArray(state.value) ? state.value?.includes?.(item) : state.value === item;
      return getItemProps({
        // @ts-expect-error ignore
        "data-selected": selected ? true : undefined,
        onClick() {
          handleChange(item);
        },
      });
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

  const openDropdown = useCallback(() => {
    setOpen(true);
    refs.domReference.current?.querySelector("input")?.focus();
  }, [refs.domReference, setOpen]);

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
    <InputWrapper
      showClear={allowClear && !isEmpty(state.value)}
      onClear={handleChange}
      isOpen={state.open}
      ref={(el) => refs.setReference(el)}
      className={cn(
        state.open ? "z-99!" : "",
        "rounded-capped",
        state.open && (placement === "top" ? "rounded-t-none" : "rounded-b-none"),
      )}
      {...getWrapperProps(props)}
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
        {displayValue}
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
            "appearance-none bg-transparent outline-none border-none ring-0 flex-1 peer",
            disabled && "cursor-not-allowed pointer-events-none",
            multiple ? "min-w-24" : "min-w-2",
          )}
          placeholder={isEmpty(state.value) ? placeholder : ""}
          onChange={(evt) => handleQuery(evt.target.value)}
        />
      </div>
      {!state.loading && !hideHandle && (
        <button type="button" className="size-fit leading-0 cursor-pointer" onClick={() => !disabled && openDropdown()}>
          <Icon
            className={cn(
              "flex-content py-2 z-0 order-9 text-muted cursor-pointer self-stretch flex items-center h-auto",
              state.open && "-scale-y-100 pointer-events-none",
              disabled && "pointer-events-none",
            )}
            icon="icon-[mdi--chevron-down]"
          />
        </button>
      )}
      {state.loading && (
        <Icon
          className={cn("flex-content p-2 z-0 order-9 text-muted pointer-events-none")}
          icon="icon-[svg-spinners--eclipse]"
        />
      )}
      {state.open && !state.loading && (
        <FloatingPortal root={refs.domReference.current?.closest<HTMLElement>(".theme-base") ?? undefined}>
          <FloatingFocusManager context={context} initialFocus={-1} visuallyHiddenDismiss closeOnFocusOut>
            <Options
              ref={(el) => refs.setFloating(el)}
              className={cn(
                "outline rounded-capped shadow-lg max-h-[40vh] z-(--z-popover)",
                state.open && (placement === "top" ? "rounded-b-none" : "rounded-t-none"),
              )}
              style={{
                width: refs.reference.current?.getBoundingClientRect().width,
                ...floatingStyles,
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
        </FloatingPortal>
      )}
    </InputWrapper>
  );
}
