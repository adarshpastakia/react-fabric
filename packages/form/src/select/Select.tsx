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
import { Chip, CoreIcons, Icon } from "@react-fabric/core";
import { isArray, isEmpty } from "@react-fabric/utilities";
import classNames from "classnames";
import { useCallback, useId, useLayoutEffect, useMemo } from "react";
import { InputWrapper } from "../internal/InputWrapper";
import { type SelectProps } from "../types";
import { Options } from "./Options";
import { useSelect } from "./useSelect";

export const Select = <T extends AnyObject = string>({
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
  options,
  groupProperty,
  labelProperty = "label" as AnyObject,
  valueProperty = "id" as AnyObject,
  multiple,
  searchable,
  allowCreate,
  createOption,
  matcher,
  renderer,
  onQuery,
  onChange,
  onSelect,
  onEnterPressed,
  ...rest
}: SelectProps<T>) => {
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
    groupProperty,
    labelProperty,
    valueProperty,
    allowCreate,
    createOption,
    matcher,
    onChange,
    onSelect,
    onQuery,
  });

  const dropdownKey = useId();

  const { context, floatingStyles, refs } = useFloating({
    open: state.open,
    onOpenChange: (open, evt, reason) => {
      !open && (listRef.current = []);
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
      state.open && setActiveIndex(index);

      !searchable &&
        !multiple &&
        !state.open &&
        handleChange(listContentRef.current[index]);
    },
  });

  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions(
    [dismiss, searchable ? undefined : click, navigation, typeahead],
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
        setOpen(false);
      },
      onKeyDown(evt: React.KeyboardEvent) {
        if (evt.key === "Enter") {
          if (state.activeIndex !== null) {
            handleChange(listContentRef.current[state.activeIndex]);
            evt.preventDefault();
            evt.stopPropagation();
            return false;
          } else if (state.query) {
            handleQuery("");
          } else {
            onEnterPressed?.(evt);
          }
        } else if (evt.key === "Tab" && state.activeIndex !== null) {
          handleChange(listContentRef.current[state.activeIndex]);
        } else if (evt.key === "Backspace") {
          !state.query && handleRemove();
        } else if (!searchable || ["ArrowUp", "ArrowDown"].includes(evt.key)) {
          if (
            ["ArrowUp", "ArrowDown"].includes(evt.key) &&
            state.activeIndex === null
          ) {
            setActiveIndex(state.selectedIndex);
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
      return getItemProps({
        "data-selected": selected ? true : undefined,
        onClick() {
          handleChange(item);
        },
      } as AnyObject);
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
        <span className="self-center pointer-events-none select-none">
          {renderer?.(state.value) ?? state.value[labelProperty] ?? state.value}
        </span>
      );
    }
  }, [state.value, state.query, placeholder, renderer]);

  const openDropdown = useCallback(() => {
    setOpen(true);
    refs.domReference.current?.querySelector("input")?.focus();
  }, []);

  useLayoutEffect(() => {
    state.open &&
      setTimeout(() => {
        state.selectedIndex &&
          listRef.current[state.selectedIndex]?.scrollIntoView({
            block: "center",
          });
      }, 100);
  }, [state.open]);

  return (
    <InputWrapper
      showClear={!isEmpty(state.value)}
      onClear={handleChange}
      invalid={invalid}
      readOnly={readOnly}
      disabled={disabled}
      required={required}
      error={error}
      wrapperRef={refs.setReference}
      className={state.open ? "!z-[99]" : ""}
      {...rest}
    >
      <div
        role="none"
        data-select-display="true"
        className={classNames(
          "group flex-1 py-1 px-2 truncate text-start flex gap-1 relative min-h-5 justify-start",
          multiple ? "flex-wrap" : "flex-nowrap overflow-hidden",
        )}
        onMouseUp={(e) =>
          e.currentTarget.querySelector<HTMLElement>("input")?.focus()
        }
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
          autoFocus={autoFocus}
          className={classNames(
            "appearance-none bg-transparent outline-none border-none ring-0 flex-1",
            disabled && "cursor-not-allowed pointer-events-none",
            multiple && "min-w-24",
          )}
          placeholder={isEmpty(state.value) ? placeholder : ""}
          {...referenceProps}
          onChange={(evt) => handleQuery(evt.target.value)}
        />
      </div>
      {!state.loading && (
        <Icon
          className={classNames(
            "flex-content p-2 z-0 order-9 text-muted cursor-pointer self-stretch flex items-center h-auto",
            state.open && "-scale-y-100 pointer-events-none",
            disabled && "pointer-events-none",
          )}
          onClick={() => !disabled && openDropdown()}
          icon={CoreIcons.chevronDown}
        />
      )}
      {state.loading && (
        <Icon
          animate="spin"
          className={classNames(
            "flex-content p-2 z-0 order-9 text-muted pointer-events-none",
          )}
          icon={CoreIcons.spinner}
        />
      )}
      {state.open && !state.loading && (
        <FloatingPortal>
          <FloatingFocusManager
            context={context}
            initialFocus={-1}
            visuallyHiddenDismiss
          >
            <Options
              ref={refs.setFloating}
              className="outline shadow-lg max-h-[40vh] z-[var(--z-popover)]"
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
            >
              {(item, label) => renderer?.(item) ?? label}
            </Options>
          </FloatingFocusManager>
        </FloatingPortal>
      )}
    </InputWrapper>
  );
};
