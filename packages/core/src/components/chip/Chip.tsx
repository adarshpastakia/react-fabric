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
import { useCallback } from "react";
import { useMemoDebugger } from "../../hooks/useEffectDebugger";
import type {
  ChildProp,
  ColorBase,
  CssPropWithMap,
  CustomColors,
  Draggable,
  HtmlEvents,
  PolymorphicProps,
  RefProp,
  SizeWithCustom,
  TestProps,
} from "../../types";
import { getColor, getIconProps } from "../../utils";
import type { IconProps } from "../icon/Icon";
import { Icon } from "../icon/Icon";

export interface ChipProps
  extends
    CssPropWithMap<{ root: string; value: string }>,
    TestProps,
    HtmlEvents,
    Draggable,
    ChildProp<string | React.ReactNode>,
    RefProp<HTMLDivElement> {
  /**
   * Value displayed in a small badge on the chip (e.g., count, index).
   */
  value?: string | number;
  /**
   * Chip size — uses predefined `SizeType` keys (`xs`–`xl`) or a custom font-size string/number.
   */
  size?: SizeWithCustom;
  /**
   * Color token (from the design system palette) or arbitrary CSS color string.
   */
  color?: CustomColors<ColorBase>;
  /**
   * Visual style variant — controls background, border, and text color treatment.
   */
  variant?: "default" | "soft" | "solid" | "outlined";
  /**
   * When `true`, rounds the chip edges into a full pill shape.
   */
  rounded?: boolean;
  /**
   * Icon configuration — accepts either a string (icon name) or full `IconProps`. Renders to the left of the label.
   */
  icon?: IconProps;
  /**
   * Disables interaction and applies a dimmed opacity.
   */
  disabled?: boolean;
  /**
   * Calls `e.preventDefault()` on click — useful when the chip lives inside an `<a>` element.
   */
  preventDefault?: boolean;
  /**
   * Calls `e.stopPropagation()` on click to prevent event bubbling.
   */
  stopPropagation?: boolean;
  /**
   * Click handler for the remove (×) button; receives the native mouse event.
   */
  onRemove?: React.MouseEventHandler;
}

const SizeMap: KeyValue<string> = {
  xs: "0.625rem",
  sm: "0.875rem",
  md: "1.125rem",
  lg: "1.5rem",
  xl: "2rem",
};

/**
 * A compact, interactive chip used to represent tags, filters, selections, or status indicators.
 *
 * Renders a horizontally-flowing container with optional left-to-right slots:
 * value badge → icon → label → remove (×) button.
 *
 * Supports four visual variants (`default`, `soft`, `solid`, `outlined`), five predefined sizes,
 * and full color customization via the design system palette. The chip is keyboard-accessible,
 * respects `disabled` and `data-clickable` states, and provides hooks for click and remove actions.
 *
 * @example
 * ```tsx
 * <Chip color="primary" size="md">
 *   React
 * </Chip>
 *
 * <Chip color="secondary" variant="outlined" icon="star" onRemove={() => console.log('removed')}>
 *   Filter
 * </Chip>
 * ```
 */
export function Chip<Tag extends React.ElementType = "div">({
  ref,
  children,
  className,
  classNames,
  size,
  color,
  variant,
  icon,
  value,
  disabled,
  onClick,
  onRemove,
  rounded,
  preventDefault,
  stopPropagation,
  as,
  draggable,
  dragKey,
  dragData,
  onDragStart,
  ...props
}: ChipProps & PolymorphicProps<Tag>) {
  // Compute inline styles from props (memoized to prevent re-renders)
  const styles = useMemoDebugger(
    () => {
      const s: KeyValue = {};
      if (color) {
        s["--color"] = getColor(color);
      }
      if (size && size in SizeMap) {
        s.fontSize = SizeMap[size];
      } else if (size) {
        // Treat as a custom font-size value when not in the predefined map.
        s.fontSize = size;
      }
      return s;
    },
    [color, size],
    "Chip styles",
  );

  const handleDragStart = useCallback(
    (event: React.DragEvent) => {
      if (dragKey) {
        event.dataTransfer?.setData(dragKey, JSON.stringify(dragData));
        onDragStart?.(event, dragKey, dragData);
      }
    },
    [dragKey, dragData, onDragStart],
  );

  const clickHandler = (e: React.MouseEvent) => {
    if (preventDefault) e.preventDefault();
    if (stopPropagation) e.stopPropagation();
    onClick?.(e);
  };

  const removeHandler = (e: React.MouseEvent) => {
    e.stopPropagation();
    onRemove?.(e);
  };

  // Resolve the polymorphic element: falls back to `<div>`.
  const E = as ?? "div";
  return (
    <E
      ref={ref}
      role="term"
      data-ref="chip"
      className={cn(
        "fabric-chip",
        "select-none inline-flex flex-nowrap items-center max-w-72 overflow-hidden rounded",
        "is-disabled:pointer-events-none is-rounded:rounded-full",
        "is-clickable:cursor-pointer is-clickable:bg-(image:--click-gradient) is-clickable:is-disabled:pointer-events-none is-clickable:is-disabled:opacity-50",
        className,
        classNames?.root,
      )}
      style={styles}
      data-variant={variant}
      data-disabled={disabled}
      data-rounded={rounded}
      data-clickable={!!onClick}
      draggable={draggable}
      onDragStart={!draggable ? undefined : handleDragStart}
      onClick={disabled ? undefined : clickHandler}
      {...props}
    >
      {value && (
        <div className={cn("fabric-chipValue inline-flex items-center px-[0.25em]", classNames?.value)}>
          <span>{value}</span>
        </div>
      )}
      {icon && <Icon data-ref="chipIcon" className="fabric-chipIcon m-1 flex-content" {...getIconProps(icon)} />}
      {children && (
        <label data-ref="chipLabel" className="fabric-chipLabel truncate flex-1 px-[0.5em]">
          {children}
        </label>
      )}
      {onRemove && (
        <span
          role="none"
          data-ref="chipRemove"
          data-inner-clickable
          className={cn(
            "fabric-chipRemove",
            "cursor-pointer pe-1 pb-0.5 opacity-65 leading-none align-middle text-default hover:opacity-90",
          )}
          onClick={removeHandler}
        >
          &times;
        </span>
      )}
    </E>
  );
}
