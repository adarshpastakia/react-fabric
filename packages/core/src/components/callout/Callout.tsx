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
import type { ChildrenProp, ColorBase, CssPropWithMap, TestProps } from "../../types";
import { getIconProps } from "../../utils";
import type { IconProps } from "../icon/Icon";
import { Icon } from "../icon/Icon";

export interface CalloutProps
  extends ChildrenProp, CssPropWithMap<{ root: string; legend: string; title: string; icon: string }>, TestProps {
  /**
   * callout color
   */
  color?: ColorBase | "default";
  /**
   * legend title
   */
  legend?: string | React.ReactElement;
  /**
   * callout icon
   */
  icon?: IconProps;
  /**
   * callout title
   */
  title?: string | React.ReactElement;
  /**
   * callout border style
   */
  border?: "solid" | "dotted" | "dashed";
  /**
   * close action handler
   */
  onClose?: () => void;
}

/**
 * A component that displays a callout box with an optional title, icon, and legend.
 * It can be used to highlight important information, warnings, or notices.
 * The callout can be styled with different colors and border styles, and it supports a close action.
 * This component is useful for drawing attention to specific content within a page or application,
 * such as alerts, notifications, or important messages.
 *
 * @example
 * ```jsx
 * <Callout
 *   color="primary"
 *   legend="Important Notice"
 *   title="Attention Required"
 *   icon="info"
 *   onClose={() => console.log("Callout closed")}
 * >
 *   This is an important message that requires your attention.
 * </Callout>
 * // Renders a callout box with a primary color, an icon, a title, and a close button.
 * ```
 */
export function Callout({
  children,
  color = "default",
  classNames,
  legend,
  title,
  icon,
  border = "solid",
  onClose,
  className,
  ...props
}: CalloutProps) {
  return (
    <fieldset
      className={cn(
        "fabric-callout block rounded-capped  max-w-full relative overflow-hidden",
        className,
        border === "dashed" && "border-dashed",
        border === "dotted" && "border-dotted",
        border != "solid" ? "border-[1.5px]" : "border",
      )}
      style={{ "--color": `var(--color-${color})` } as React.CSSProperties}
      {...props}
    >
      {legend && (
        <legend className={cn("fabric-calloutLegend px-2 mx-4 font-medium", classNames?.legend)} data-ref="calloutLegend">
          {legend}
        </legend>
      )}
      <div className={cn("fabric-calloutContent break-words whitespace-break-spaces p-2")}>
        <div className="flex flex-nowrap items-center text-xl pe-4 gap-2 mb-4 empty:mb-0">
          {icon && <Icon {...getIconProps(icon)} data-ref="calloutIcon" />}
          {title && (
            <p className="flex-1" data-ref="calloutTitle">
              {title}
            </p>
          )}
        </div>
        <div className="fabric-calloutMessage pe-4">{children}</div>
      </div>
      {onClose && (
        <div
          role="none"
          className={cn("absolute inset-e-2 text-tint-500 hover:text-tint-700 cursor-pointer", legend ? "top-0" : "top-2")}
          data-ref="calloutClose"
          onClick={onClose}
        >
          <Icon size="md" icon="icon-[mdi--close]" />
        </div>
      )}
    </fieldset>
  );
}
