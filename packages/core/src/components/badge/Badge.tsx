/*
 * React Fabric
 * @version: 1.0.0
 * The MIT License (MIT)
 * Copyright (c) 2026 Adarsh Pastakia
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

import { cn } from "@react-fabric/utilities";
import { useMemo } from "react";
import type { ChildProp, CssProp, TestProps } from "../../types";
import type { CustomColors } from "../../types/colors";
import { getColor } from "../../utils";
import { Icon } from "../icon/Icon";

export interface BadgeType {
  /**
   * Numeric or text value displayed inside the badge (e.g., a count like "42").
   * Mutually exclusive with `icon` and `ping`.
   */
  value?: string | number;

  /**
   * Icon path or props rendered inside the badge instead of a value.
   * Mutually exclusive with `value` and `ping`.
   */
  icon?: string;

  /**
   * When true, renders a pulsing dot indicator (used for "unread" or "live" states).
   * Mutually exclusive with `value` and `icon`.
   */
  ping?: boolean;

  /**
   * When true, the badge is positioned inline with its content rather than absolutely positioned.
   */
  inline?: boolean;

  /**
   * Placement of the badge relative to its child when `inline` is false.
   * Defaults to `"top-end"`.
   */
  placement?: "top" | "top-start" | "top-end" | "bottom" | "bottom-start" | "bottom-end" | "end" | "start";

  /**
   * Background color applied to the badge. Accepts Tailwind palette tokens or any CSS color.
   */
  bg?: CustomColors;

  /**
   * Text/icon color applied to the badge. Accepts Tailwind palette tokens or any CSS color.
   */
  color?: CustomColors;
}

export type BadgeProps = BadgeType &
  CssProp &
  TestProps &
  Partial<ChildProp> &
  (
    | {
        value: string | number;
        icon?: never;
        ping?: never;
      }
    | {
        icon: string;
        value?: never;
        ping?: never;
      }
    | {
        ping?: boolean;
        value?: never;
        icon?: never;
      }
  );

/**
 * Tailwind class names for each badge placement position.
 * Each value uses absolute positioning relative to the parent container,
 * with RTL-aware horizontal flipping via Tailwind's `rtl:` variant.
 */
const PLACEMENT_STYLES: Record<NonNullable<BadgeProps["placement"]>, string> = {
  top: "absolute z-1 top-0 inset-x-1/2 -translate-y-1/2 -translate-x-1/2 rtl:translate-x-1/2",
  start: "absolute z-1 inset-s-0 top-1/2 -translate-y-1/2 -translate-x-1/2 rtl:translate-x-1/2",
  end: "absolute z-1 inset-e-0 top-1/2 -translate-y-1/2 translate-x-1/2 rtl:-translate-x-1/2",
  "top-start": "absolute z-1 top-0 start-0 -translate-y-1/2 -translate-x-1/2 rtl:translate-x-1/2",
  "top-end": "absolute z-1 top-0 end-0 -translate-y-1/2 translate-x-1/2 rtl:-translate-x-1/2",
  bottom: "absolute z-1 bottom-0 inset-x-1/2 translate-y-1/2 -translate-x-1/2 rtl:translate-x-1/2",
  "bottom-start": "absolute z-1 bottom-0 start-0 translate-y-1/2 -translate-x-1/2 rtl:translate-x-1/2",
  "bottom-end": "absolute z-1 bottom-0 end-0 translate-y-1/2 translate-x-1/2 rtl:-translate-x-1/2",
};

/**
 * A small overlay component used to display a numeric value, icon, or pulsing
 * indicator positioned relative to a child element.
 *
 * Commonly used for notification counts, unread indicators, or status badges
 * on avatars, buttons, or list items.
 *
 * @example
 * ```tsx
 * import { Badge } from "@react-fabric/core";
 *
 * // Numeric badge
 * <Badge value="42">
 *    <Avatar name="John" />
 * </Badge>
 *
 * // Icon badge
 * <Badge icon="icon-[mdi--bell]" />
 *
 * // Pulsing indicator
 * <Badge ping>
 *    <Icon icon="icon-[mdi--email]" />
 * </Badge>
 * ```
 */
export function Badge({
  className,
  bg = "tint-200",
  color = "tint-900",
  icon,
  inline,
  ping,
  value,
  children,
  placement = "top-end",
  ...props
}: BadgeProps) {
  // Render the appropriate badge shape based on which mode is active
  const el = useMemo(() => {
    if (icon) {
      return (
        <div className={cn("fabric-badgeIcon", "px-[0.325em] py-[0.25em] bg-(--bg) text-(--color) rounded-full leading-0")}>
          <Icon icon={icon} />
        </div>
      );
    }
    if (value) {
      return (
        <div className={cn("fabric-badgeValue", "px-[0.5em] py-[0.25em] leading-none bg-(--bg) text-(--color) rounded-full")}>
          {value}
        </div>
      );
    }
    return <div className={cn("fabric-badgePing", "size-2 bg-(--bg) rounded-full", ping && "animate-ping")} />;
  }, [icon, value, ping]);

  return (
    <div {...props} data-ref="badge" role="presentation" className={cn("fabric-badge", "size-fit relative", className)}>
      <div
        className={cn(
          "fabric-badgeContainer",
          "rounded-full text-[0.625em] select-none pointer-events-none bg-(--bg) size-fit",
          !inline && PLACEMENT_STYLES[placement],
        )}
        // Set CSS custom properties so child elements can reference badge colors
        style={
          {
            "--color": getColor(color),
            "--bg": getColor(bg),
          } as React.CSSProperties
        }
      >
        {el}
      </div>
      {children}
    </div>
  );
}
