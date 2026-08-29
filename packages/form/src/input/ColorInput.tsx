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
  arrow,
  autoUpdate,
  flip,
  FloatingArrow,
  FloatingFocusManager,
  offset,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
} from "@floating-ui/react";
import { Icon, useControlledValue } from "@react-fabric/core";
import type { RefProp } from "@react-fabric/core/dist/types/types";
import { mergeRefs } from "@react-fabric/utilities";
import { startTransition, useCallback, useRef, useState } from "react";
import { InputWrapper } from "../internal/InputWrapper";
import type { InputProps, WrapperProps } from "../types";
import { getWrapperProps } from "../utils";
import type { ColorProps } from "./ColorPicker";
import { ColorPicker } from "./ColorPicker";

export interface ColorInputProps extends InputProps, WrapperProps, Omit<ColorProps, "onChange">, RefProp<HTMLButtonElement> {
  /**
   * show eydrop picker
   */
  showPicker?: boolean;
}

interface EyeDropper {
  open(): Promise<{ sRGBHex: string }>;
}

interface Window {
  EyeDropper?: {
    new (): EyeDropper;
  };
}

/**
 * Color input component that allows users to select a color
 * and optionally use an eye dropper to pick a color from the screen.
 * It uses the Floating UI library for positioning the color picker.
 * It also provides a button to clear the selected color.
 *
 * This component is a wrapper around the `ColorPicker` component
 * and provides additional functionality such as showing an eye dropper
 * and handling the color selection state.
 */
export function ColorInput(props: ColorInputProps) {
  const {
    ref,
    disabled,
    readOnly,
    value,
    invalid,
    allowClear,
    showPicker,
    defaultColor = "",
    onBlur,
    onFocus,
    onChange,
  } = props;
  const { currentValue, updateValue } = useControlledValue(value, defaultColor);

  const handleChange = useCallback(
    (e?: string) => {
      const value = e ?? defaultColor;
      updateValue(value);
      if (onChange) startTransition(() => onChange(value ?? null));
    },
    [defaultColor, updateValue, onChange],
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
    placement: "bottom",
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
  const click = useClick(context, {
    enabled: !disabled && !readOnly,
  });
  const dismiss = useDismiss(context, {
    referencePress: true,
  });

  const { getReferenceProps, getFloatingProps } = useInteractions([dismiss, click]);

  return (
    <InputWrapper
      showClear={allowClear && currentValue !== defaultColor && !disabled && !readOnly}
      onClear={handleChange}
      {...getWrapperProps(props)}
    >
      <button
        data-ref="button"
        type="button"
        className="flex-1 flex items-center"
        ref={mergeRefs(ref, (el: HTMLButtonElement) => refs.setReference(el))}
        {...getReferenceProps({
          onBlur,
          onFocus,
        })}
        data-inner-clickable="true"
        data-dropdown-open={isOpen ? true : undefined}
      >
        <div
          className="h-[1.5em] min-w-[1.5em] flex-1 flex items-center justify-center self-stretch cursor-pointer m-[0.25em] rounded outline outline-tint-100"
          aria-invalid={invalid}
          style={{
            backgroundColor: currentValue ?? "",
            opacity: disabled ? 0.65 : 1,
            pointerEvents: disabled ? "none" : undefined,
          }}
        >
          {!currentValue && <Icon size="md" className="text-muted" icon="icon-[mdi--palette]" />}
        </div>
      </button>
      {isOpen && (
        <FloatingFocusManager context={context} closeOnFocusOut>
          <div
            ref={(el) => refs.setFloating(el)}
            style={{
              zIndex: "var(--z-popover)",
              ...floatingStyles,
            }}
            data-ref="dropdownBody"
            {...getFloatingProps()}
          >
            <ColorPicker {...props} onChange={handleChange} defaultColor={defaultColor} value={currentValue} />
            <FloatingArrow
              ref={arrowRef}
              context={context}
              strokeWidth={0.5}
              className="stroke-muted"
              style={{
                fill: currentValue || "var(--bg-color-default)",
              }}
            />
          </div>
        </FloatingFocusManager>
      )}
      {!disabled && showPicker && (
        <button
          type="button"
          className="size-fit leading-0 cursor-pointer"
          onClick={() => {
            const ED = (window as Window).EyeDropper;
            if (ED) {
              void new ED().open().then((resp) => handleChange(resp.sRGBHex));
            }
          }}
        >
          <Icon className="flex-content p-1" icon="icon-[mdi--eyedropper]" />
        </button>
      )}
    </InputWrapper>
  );
}
