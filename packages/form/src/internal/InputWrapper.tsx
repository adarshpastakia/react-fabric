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

import { CoreIcons, Icon } from "@react-fabric/core";
import { isString } from "@react-fabric/utilities";
import classNames from "classnames";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type MouseEvent,
} from "react";
import { Fragment } from "react/jsx-runtime";
import { ErrorIcon } from "./ErrorIcon";
import { FieldWrapper } from "./FieldWrapper";

export const InputWrapper = ({
  invalid,
  error,
  allowClear,
  showClear,
  decorateStart,
  decorateEnd,
  decorateEndShowWhenEmpty,
  decorateEndHideWhenEmpty,
  children,
  onClear,
  noOutline,
  noBorder,
  actionButton,
  textarea = false,
  textareaExpandable = false,
  "data-inner": isInner,
  "data-open": isOpen,
  // expand autocomplete
  floatingExpand,
  wrapperRef,
  width,
  ...rest
}: KeyValue) => {
  const elRef = useRef<HTMLDivElement>(null);
  const [isExpanded, setExpanded] = useState(false);

  const Wrapper = useMemo(
    () => (isInner || !rest.label ? Fragment : FieldWrapper),
    [isInner, rest.label],
  );
  const wrapperProps = useMemo(
    () => (isInner || !rest.label ? {} : { ...rest, width }),
    [isInner, rest, width],
  );

  const handleClear = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      e.currentTarget.parentElement
        ?.querySelector<HTMLElement>("input,textarea,button")
        ?.focus();
      onClear?.();
    },
    [onClear],
  );

  const doFocus = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      e.currentTarget.parentElement
        ?.querySelector<HTMLElement>("input,textarea,button")
        ?.focus();
    },
    [onClear],
  );

  useEffect(() => {
    isExpanded &&
      setTimeout(
        () => wrapperRef?.current?.querySelector("textarea")?.focus(),
        50,
      );
  }, [isExpanded]);

  const el = (
    <div
      role="none"
      ref={wrapperRef}
      className={classNames(
        "fabric-inputWrapper",
        invalid && "fabric-invalidWrapper",
        !noOutline &&
          !noBorder &&
          "bg-(--fabric-input) outline overflow-hidden",
        "flex flex-nowrap items-center flex-1",
        textarea ? "rounded-capped group" : "rounded",
        isExpanded
          ? "fixed inset-4 z-[99]"
          : floatingExpand
            ? "absolute inset-x-0"
            : "relative",
        !noOutline &&
          "after:absolute after:bottom-0 after:h-px after:bg-primary-500 after:mx-auto",
      )}
      onKeyDown={(e) =>
        e.key === "Escape" &&
        isExpanded &&
        (setExpanded(false), e.stopPropagation())
      }
    >
      {decorateStart && (
        <div
          onClickCapture={doFocus}
          className={classNames(
            "fabric-decorate",
            "text-muted leading-none flex-content",
            isString(decorateStart) && "px-1",
          )}
        >
          {decorateStart}
        </div>
      )}
      <ErrorIcon invalid={invalid} error={error} />
      {children}
      {allowClear && showClear && (
        <Icon
          icon={CoreIcons.close}
          onClick={handleClear}
          className={classNames(
            "text-tint-500 hover:text-tint-700 p-1 z-1 flex-content",
            "fabric-inputClear",
            textarea && "self-start mt-1 me-1",
          )}
        />
      )}
      {decorateEnd && (
        <div
          onClickCapture={doFocus}
          className={classNames(
            "fabric-decorate",
            "text-muted leading-none flex-content",
            isString(decorateEnd) && "px-1",
            decorateEndHideWhenEmpty && "peer-placeholder-shown:hidden",
            decorateEndShowWhenEmpty &&
              "hidden peer-placeholder-shown:inline-block",
          )}
        >
          {decorateEnd}
        </div>
      )}
      {actionButton && (
        <div
          onClickCapture={doFocus}
          className={classNames(
            "fabric-decorate",
            "text-muted leading-none flex-content",
          )}
        >
          {actionButton}
        </div>
      )}
      {textareaExpandable && (
        <Icon
          onClick={() => setExpanded(!isExpanded)}
          icon={isExpanded ? CoreIcons.arrowCollapse : CoreIcons.arrowExpand}
          className="hidden group-hover:block absolute top-0 end-0 bg-base hover:bg-tint-200 p-1 opacity-65 rounded-capped"
        />
      )}
    </div>
  );

  return (
    <Wrapper {...wrapperProps}>
      <div
        ref={elRef}
        className="flex-1 relative min-h-8 flex flex-col flex-nowrap"
        style={{ width, flexBasis: width }}
      >
        {el}
      </div>
    </Wrapper>
  );
};
