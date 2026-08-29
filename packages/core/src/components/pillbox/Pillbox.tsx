/**
 * React Fabric
 * @version 1.0.0
 * @license MIT
 * @copyright 2024 Adarsh Pastakia
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import { cn } from "@react-fabric/utilities";
import { useLayoutEffect, useMemo, useRef, useState } from "react";
import { useControlledValue } from "../../hooks/useControlledValue";
import type { CssProp, CustomColors } from "../../types";
import { getColor, getIconProps } from "../../utils";
import { StyleEffect } from "../effect/StyleEffect";
import type { IconProps } from "../icon/Icon";
import { Icon } from "../icon/Icon";

/**
 * Represents a single selectable value type within a Pillbox.
 */
type ValueType = string | number | boolean;

/**
 * Configuration for a single pill option.
 */
interface PillOption {
  /**
   * Unique value identifying this option.
   */
  value: ValueType;
  /**
   * Display text shown inside the pill.
   */
  label?: React.ReactNode;
  /**
   * Icon configuration rendered before the label.
   */
  icon?: IconProps;
  /**
   * Background color override for the active pill highlight.
   */
  bg?: CustomColors;
  /**
   * Text color override for the active pill.
   */
  color?: CustomColors;
  /**
   * Whether this option is disabled and cannot be selected.
   */
  disabled?: boolean;
}

/**
 * Props for the Pillbox component.
 */
interface PillboxProps extends CssProp {
  /**
   * Render pills in a full-width flex layout instead of inline.
   */
  block?: boolean;
  /**
   * Enable toggle behavior when exactly two options exist, allowing
   * deselect on click.
   */
  toggle?: boolean;
  /**
   * Hide pills visually when the group is not hovered.
   */
  autoHide?: boolean;

  /**
   * Array of pill options to render.
   */
  options: PillOption[];
  /**
   * Currently selected value. Controlled component pattern.
   */
  value?: ValueType | null;
  /**
   * Callback invoked when a pill is selected with its value.
   */
  onChange?: (value: ValueType) => void;
}

/**
 * A pill-based selector that renders a horizontal group of clickable options
 * with an animated highlight tracking the selected pill.
 */
export function Pillbox({ options, className, block, toggle, value, autoHide, onChange }: PillboxProps) {
  const pillboxRef = useRef<HTMLDivElement>(null);
  const [hilightStyle, setHilightStyle] = useState(() => ({ left: 0, top: 0, width: 0, height: 0 }));
  const { currentValue, updateValue } = useControlledValue(value, null);

  // Allow toggle behavior only when exactly two options exist and toggle is enabled
  const canToggle = useMemo(() => options.length === 2 && toggle, [options, toggle]);
  const currentIndex = useMemo(() => {
    // Use Math.max to default to 0 when no option matches (prevents -1 index)
    return Math.max(
      0,
      options.findIndex((o) => o.value === currentValue),
    );
  }, [options, currentValue]);

  const currentOption = options[currentIndex];

  // Update highlight position whenever the selected index or ref changes
  useLayoutEffect(() => {
    const el = pillboxRef.current?.querySelectorAll("button")[currentIndex];

    // eslint-disable-next-line @eslint-react/set-state-in-effect
    setHilightStyle({
      left: el?.offsetLeft ?? 0,
      top: el?.offsetTop ?? 0,
      width: el?.offsetWidth ?? 0,
      height: el?.offsetHeight ?? 0,
    });
  }, [pillboxRef, currentIndex]);

  const handleValueChange = (value: ValueType) => {
    // Handle pill selection with optional toggle behavior
    // In toggle mode, clicking the selected pill switches to the other option
    updateValue((oldValue) => {
      if (canToggle) {
        // Toggle between the two options: click selected pill to switch to the other
        const newValue = oldValue === options[1].value ? options[0].value : options[1].value;
        onChange?.(newValue);
        return newValue;
      } else {
        onChange?.(value);
        return value;
      }
    });
  };

  return (
    <div ref={pillboxRef} className={cn("fabric-pillbox", className, "relative p-1 outline rounded overflow-hidden")}>
      <div
        className={cn(
          "fabric-pillboxContainer",
          "relative group rounded select-none overflow-hidden flex-nowrap",
          block ? "flex" : "inline-flex",
          autoHide && "not-hover:bg-(--currentBg)",
        )}
        style={
          {
            "--currentBg": getColor(currentOption.bg ?? "primary-500"),
            "--currentColor": getColor(currentOption.color ?? "white"),
          } as React.CSSProperties
        }
      >
        <div
          className={cn(
            "fabric-pillHilight",
            "absolute rounded -z-1! top-0 h-full bg-(--currentBg) transition-[background-color,width,left] ease-in-out duration-500",
            autoHide && "not-group-hover:hidden",
          )}
          style={hilightStyle}
        />
        {options.map((opt, idx) => (
          <button
            key={`${opt.value}`}
            disabled={opt.disabled}
            onClick={() => handleValueChange(opt.value)}
            data-color={opt.color}
            type="button"
            className={cn(
              "fabric-pill",
              "flex justify-center flex-initial has-[.fabric-pillLabel]:px-4 has-[.fabric-pillLabel]:py-1 z-1 rounded not-disabled:cursor-pointer disabled:cursor-not-allowed items-center transition-colors ease-in-out duration-500",
              idx === currentIndex ? "text-(--currentColor)" : "not-disabled:hover:bg-primary-500/20",
              autoHide && idx !== currentIndex && "not-group-hover:hidden",
              opt.disabled && "opacity-50",
              block && "flex-1",
            )}
          >
            {opt.icon && (
              <Icon
                className={cn(
                  "fabric-pillIcon",
                  "not-has-[~_.fabric-pillLabel]:m-[0.375em] text-[1.125em]  has-[~_.fabric-pillLabel]:me-1 inline-block size-[1em] flex-content pointer-events-none",
                )}
                {...getIconProps(opt.icon)}
              />
            )}
            {opt.label && <span className="fabric-pillLabel flex-initial truncate">{opt.label}</span>}
          </button>
        ))}
      </div>
      <StyleEffect />
    </div>
  );
}
