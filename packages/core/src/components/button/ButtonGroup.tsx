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
import { cloneElement, isValidElement } from "react";
import type { ChildrenProp, CssProp, RefProp, TestProps } from "../../types";
import { cloneChildren } from "../../utils";
import type { ButtonProps, SharedButtonProps } from "./Button";

interface BaseProps extends CssProp, TestProps, SharedButtonProps {
  /**
   * When true, arranges buttons vertically (top-to-bottom) instead of horizontally.
   */
  vertical?: boolean;
  /**
   * When true, disables all child buttons and prevents user interaction.
   */
  disabled?: boolean;
  /**
   * When true, stretches the group to full available width (uses `flex` instead of `inline-flex`).
   */
  fullWidth?: boolean;
}

export type ButtonGroupProps<T> = BaseProps &
  RefProp<HTMLDivElement> &
  ChildrenProp<ButtonProps & { value: T }> & {
    onClick?: (value: T | null, e?: React.MouseEvent) => void;
  };

/**
 * A container component that renders a group of related buttons with shared styling and behavior.
 *
 * ButtonGroup propagates common button properties (variant, color, size, rounded, disabled)
 * to all direct child `<Button>` elements, ensuring visual consistency across the group.
 * It also coordinates click handling by intercepting each child's `onClick` and invoking
 * the group-level `onClick` callback with the clicked button's `value` prop — making it
 * ideal for toggle groups, radio-style selections, and multi-select toolbars.
 *
 * @template T - The type of the `value` prop expected by child buttons (defaults to `string`).
 *
 * @example
 * ```tsx
 * // Single-select toggle group
 * const [mode, setMode] = useState<"day" | "week" | "month">("day");
 *
 * <ButtonGroup
 *   value={mode}
 *   onClick={(v) => setMode(v ?? "day")}
 *   variant="outlined"
 *   color="primary"
 *   size="sm"
 * >
 *    <Button value="day">Day</Button>
 *    <Button value="week">Week</Button>
 *    <Button value="month">Month</Button>
 * </ButtonGroup>
 *
 * @example
 * ```tsx
 * // Multi-select with vertical layout
 * const [tags, setTags] = useState<string[]>([]);
 *
 * <ButtonGroup
 *   vertical
 *   variant="soft"
 *   color="info"
 *   onClick={(tag) =>
 *     setTags((prev) =>
 *       prev.includes(tag!) ? prev.filter((t) => t !== tag) : [...prev, tag!]
 *       )
 *     }
 * >
 *    <Button value="react">React</Button>
 *    <Button value="typescript">TypeScript</Button>
 *    <Button value="tailwind">Tailwind</Button>
 * </ButtonGroup>
 * ```
 */
export function ButtonGroup<T extends AnyObject = string>({
  ref,
  vertical,
  className,
  children,
  variant,
  rounded,
  disabled,
  fullWidth,
  color,
  size,
  onClick,
  ...props
}: ButtonGroupProps<T>) {
  // Create a click handler that invokes both the group-level onClick and the child's own onClick
  const clickHandler = (childValue: T, cb?: (e?: React.MouseEvent) => void) => (e?: React.MouseEvent) => {
    onClick?.(childValue, e);
    cb?.(e);
  };

  return (
    <div
      {...props}
      ref={ref}
      className={cn(
        "fabric-buttonGroup",
        className,
        "flex-nowrap align-middle is-vertical:flex-col",
        fullWidth ? "flex" : "inline-flex",
      )}
      data-vertical={vertical}
    >
      {cloneChildren(children)?.map((child) => {
        if (isValidElement(child)) {
          // Cast to expected shape and clone with propagated group-level props
          const childEl = child as React.ReactElement<ButtonProps & { value: T }>;
          return cloneElement(childEl, {
            color,
            size,
            variant,
            disabled,
            rounded,
            ...childEl.props,
            onClick: clickHandler(childEl.props.value, childEl.props.onClick),
          });
        }
        return child;
      })}
    </div>
  );
}
