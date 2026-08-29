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
import type { ChildrenProp, ColorUnion, CssProp, TestProps } from "../../types";
import { getColor } from "../../utils";
import { Icon } from "../icon/Icon";

export interface EmptyContentProps extends CssProp, TestProps, Partial<ChildrenProp> {
  /**
   * Title text or custom React element displayed above the message. When omitted, the title area is hidden.
   */
  title?: string | React.ReactElement;
  /**
   * Message text or custom React element describing the empty state. This is always rendered.
   */
  message: string | React.ReactElement;
  /**
   * Controls the font size scale of the component. "sm" reduces sizes for compact layouts, "md" uses default larger sizes.
   */
  size?: "sm" | "md";
  /**
   * Icon displayed above the title. Accepts a string icon name (e.g., `"icon-[mdi--alert]"`) or a custom React element. Defaults to `"icon-[mdi-light--alert]"` when omitted.
   */
  icon?: string | React.ReactElement;
  /**
   * Color token applied to the icon. Defaults to `"tint"` when not provided.
   */
  iconColor?: ColorUnion;
}

const SizeMap: KeyValue = {
  "": "1rem",
  sm: "0.875rem",
  md: "1.125rem",
};

/**
 * Displays a message and optional icon to represent an empty state, such as when no data is available.
 * Supports customizable title, message, icon, size, and action buttons via children.
 * When no icon is provided, a default alert icon is shown.
 *
 * @example
 * ```tsx
 * <EmptyContent
 *   title="No Data Available"
 *   message="Please check back later."
 *   iconColor="tint-600"
 *   size="md"
 * >
 *   <Button onClick={() => console.log("Retry")}>Retry</Button>
 * </EmptyContent>
 * ```
 */
export function EmptyContent({ children, title, message, icon, className, size, iconColor, ...test }: EmptyContentProps) {
  return (
    <div
      className={cn("p-6 flex flex-col items-center area-content", className)}
      style={
        size && {
          fontSize: SizeMap[size] as string,
        }
      }
      {...test}
    >
      <div className="leading-none opacity-80" style={{ fontSize: "2em", color: getColor(iconColor ?? "tint") }}>
        <Icon icon={icon ?? "icon-[mdi-light--alert]"} />
      </div>
      {title && (
        <div className="font-medium text-center text-dimmed" style={{ fontSize: "1.25em" }}>
          {title}
        </div>
      )}
      <div className="font-medium text-center text-muted" style={{ fontSize: "0.875em" }}>
        {message}
      </div>
      <div className="flex gap-1 pt-6">{children}</div>
    </div>
  );
}
