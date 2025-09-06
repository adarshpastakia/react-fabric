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
  offset,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
} from "@floating-ui/react";
import { CoreIcons, Icon } from "@react-fabric/core";
import { type RefProp } from "@react-fabric/core/dist/types/types";
import {
  startTransition,
  useCallback,
  useDeferredValue,
  useEffect,
  useRef,
  useState,
} from "react";
import { InputWrapper } from "../internal/InputWrapper";
import { type InputProps } from "../types";
import { ColorPicker, type ColorProps } from "./ColorPicker";

export interface ColorInputProps
  extends InputProps,
    Omit<ColorProps, "onChange">,
    RefProp {
  /**
   * show eydrop picker
   */
  showPicker?: boolean;
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
 *
 * @param {ColorInputProps} props - The properties for the ColorInput component.
 * @returns {JSX.Element} - The rendered ColorInput component.
 */
export const ColorInput = ({
  ref,
  required,
  disabled,
  readOnly,
  invalid,
  error,
  value,
  showPicker,
  defaultColor = "",
  onBlur,
  onFocus,
  onChange,
  // @ts-expect-error ignore
  noOutline,
  ...rest
}: ColorInputProps) => {
  const [actualValue, setActualValue] = useState("");
  const deferred = useDeferredValue(value ?? defaultColor);

  useEffect(() => {
    setActualValue(deferred ?? "");
  }, [deferred]);

  const handleChange = useCallback(
    (e?: string) => {
      const value = e ?? defaultColor;
      setActualValue(value);
      onChange != null && startTransition(() => onChange(value ?? null));
    },
    [onChange, defaultColor],
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

  const { getReferenceProps, getFloatingProps } = useInteractions([
    dismiss,
    click,
  ]);

  return (
    <InputWrapper
      showClear={actualValue !== defaultColor && !disabled && !readOnly}
      onClear={handleChange}
      invalid={invalid}
      readOnly={readOnly}
      disabled={disabled}
      required={required}
      error={error}
      {...rest}
    >
      <button
        data-ref="button"
        className="flex-1 flex items-center"
        ref={refs.setReference}
        {...getReferenceProps({
          onBlur,
          onFocus,
        })}
        data-inner-clickable="true"
        data-dropdown-open={isOpen ? true : undefined}
      >
        <div
          role="none"
          className="h-[1.5em] min-w-[1.5em] flex-1 flex items-center justify-center self-stretch cursor-pointer m-[0.25em] rounded outline outline-tint-100"
          style={{
            backgroundColor: actualValue,
            opacity: disabled ? 0.65 : 1,
            pointerEvents: disabled ? "none" : undefined,
          }}
        >
          {!actualValue && (
            <Icon
              size="md"
              className="text-muted"
              icon={CoreIcons.colorSwatch}
            />
          )}
        </div>
      </button>
      {isOpen && (
        <div
          ref={refs.setFloating}
          style={{
            zIndex: "var(--z-popover)",
            ...floatingStyles,
          }}
          data-ref="dropdownBody"
          {...getFloatingProps()}
        >
          <ColorPicker
            {...rest}
            onChange={handleChange}
            defaultColor={defaultColor}
            value={actualValue}
          />
          <FloatingArrow
            ref={arrowRef}
            context={context}
            strokeWidth={0.5}
            className="fill-base stroke-muted"
          />
        </div>
      )}
      {!disabled && showPicker && (
        <Icon
          className="flex-content p-1"
          icon={CoreIcons.colorPicker}
          onClick={() =>
            (window as AnyObject).EyeDropper &&
            new (window as AnyObject).EyeDropper()
              .open()
              .then((resp: AnyObject) => handleChange(resp.sRGBHex))
          }
        />
      )}
    </InputWrapper>
  );
};
