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

import { Icon } from "@react-fabric/core";
import type { CssProp } from "@react-fabric/core/dist/types/types";
import { cn, isString, mergeRefs } from "@react-fabric/utilities";
import type { ReactNode } from "react";
import { useCallback, useEffect, useRef, useState, type MouseEvent } from "react";
import type { WrapperProps } from "../types";
import { ErrorIcon } from "./ErrorIcon";
import { FieldWrapper } from "./FieldWrapper";

export interface InputWrapperProps extends CssProp, WrapperProps {
  id?: string;
  children: ReactNode;
  showClear?: boolean;
  onClear?: () => void;
  textarea?: boolean;
  hasStepper?: boolean;
  actionButton?: ReactNode;
  textareaExpandable?: boolean;
  isOpen?: boolean;
  focusRing?: boolean;
  floatingExpand?: boolean;
  listing?: ReactNode;
  ref?: React.Ref<HTMLDivElement | null>;
}

export function InputWrapper(props: InputWrapperProps) {
  const {
    invalid,
    error,
    showClear,
    decorateStart,
    decorateEnd,
    decorateEndShowWhenEmpty,
    decorateEndHideWhenEmpty,
    children,
    isOpen,
    className,
    focusRing,
    onClear,
    borderless,
    hasStepper,
    actionButton,
    textarea = false,
    textareaExpandable = false,
    // expand autocomplete
    floatingExpand,
    ref,
  } = props;
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClear = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      const parent = e.currentTarget.parentElement?.querySelector("& > :not(.fabric-decorate)");
      const el = (parent?.querySelector<HTMLElement>("input,textarea,button") ?? parent) as HTMLElement;
      el?.focus();
      onClear?.();
    },
    [onClear],
  );

  const doFocus = useCallback((e: MouseEvent<HTMLDivElement>) => {
    const parent = e.currentTarget.parentElement?.querySelector("& > :not(.fabric-decorate)");
    const el = (parent?.querySelector<HTMLElement>("input,textarea,button") ?? parent) as HTMLElement;
    el?.focus();
  }, []);

  useEffect(() => {
    if (isExpanded) {
      const tmr = setTimeout(() => wrapperRef?.current?.querySelector("textarea")?.focus(), 50);
      return () => {
        clearTimeout(tmr);
      };
    }
  }, [isExpanded, wrapperRef]);

  return (
    <FieldWrapper {...props}>
      <div
        role="none"
        ref={mergeRefs(ref, wrapperRef)}
        className={cn(
          "fabric-inputWrapper",
          invalid && "fabric-invalidWrapper",
          !borderless && "outline",
          textarea ? "rounded-capped" : "rounded",
          className,
          "flex flex-1 flex-nowrap items-center bg-(--fabric-input) overflow-hidden",
          isExpanded ? "fixed inset-4 z-99" : floatingExpand ? "absolute inset-x-0" : "relative",
          focusRing
            ? "focus-within:ring ring-primary-500"
            : "after:absolute after:bottom-0 after:h-px after:bg-primary-500 after:mx-auto",
          isOpen && "outline-primary-500",
        )}
        onKeyDown={(e) => e.key === "Escape" && isExpanded && (setIsExpanded(false), e.stopPropagation())}
      >
        {decorateStart && (
          <div
            onClickCapture={doFocus}
            className={cn("fabric-decorate", "text-muted leading-none flex-content", isString(decorateStart) && "px-1")}
          >
            {decorateStart}
          </div>
        )}
        <ErrorIcon invalid={invalid} error={error} />
        {children}
        {showClear && (
          <button
            type="button"
            className={cn("size-fit leading-0 cursor-pointer", hasStepper && "relative -ms-12")}
            onClick={handleClear}
          >
            <Icon
              icon="icon-[mdi--close]"
              className={cn("text-tint-500 hover:text-tint-700 p-1 z-1 flex-content", "fabric-inputClear")}
            />
          </button>
        )}
        {decorateEnd && (
          <div
            onClickCapture={doFocus}
            className={cn(
              "fabric-decorate",
              "text-muted leading-none flex-content",
              isString(decorateEnd) && "px-1",
              decorateEndHideWhenEmpty && "peer-placeholder-shown:hidden",
              decorateEndShowWhenEmpty && "hidden peer-placeholder-shown:inline-block",
            )}
          >
            {decorateEnd}
          </div>
        )}
        {actionButton && (
          <div onClickCapture={doFocus} className={cn("fabric-decorate", "text-muted leading-none flex-content")}>
            {actionButton}
          </div>
        )}
        {textareaExpandable && (
          <button
            type="button"
            className="size-fit cursor-pointer leading-0 absolute top-0 inset-e-0"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <Icon
              icon={isExpanded ? "icon-[mdi--arrow-collapse]" : "icon-[mdi--arrow-expand]"}
              className="hidden group-hover:block bg-default hover:bg-tint-200 p-1 opacity-65 rounded-capped"
            />
          </button>
        )}
      </div>
    </FieldWrapper>
  );
}
