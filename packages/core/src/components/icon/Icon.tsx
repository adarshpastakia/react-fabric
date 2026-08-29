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

import { cn, isString, isSvgPath } from "@react-fabric/utilities";
import { isValidElement, useMemo } from "react";
import type { CssProp, CSSSizeType, CustomColors, RefProp, TestProps } from "../../types";
import { getColor } from "../../utils";

export interface BaseIconProps extends CssProp, TestProps {
  /**
   * Icon can be a string or a React element. If it's a string, it can be either an SVG path or a CSS class name.
   * If the string is a valid SVG path, it will be rendered as an inline SVG. If it's a CSS class name, it will be rendered as an <i> element with that class.
   * If the string is 4 characters or less, it will be rendered as text inside an SVG, with font size adjusted based on the length of the string.
   * If it's a React element, it will be rendered directly.
   */
  icon: string | React.ReactElement;
  /**
   * Background color applied to the badge. Accepts Tailwind palette tokens or any CSS color.
   */
  bg?: CustomColors;
  /**
   * The color prop allows developers to specify the color of the icon.
   * It can accept predefined color values from the design system, such as "primary-500" or "secondary-300", which correspond to specific colors in the palette.
   * Additionally, it can also accept custom color values in standard CSS formats, such as hex codes (e.g., "#ff0000"), RGB (e.g., "rgb(255, 0, 0)"), or HSL (e.g., "hsl(0, 100%, 50%)"). This flexibility allows developers to easily integrate icons with their application's color scheme while also providing the option for custom styling when needed.
   */
  color?: CustomColors;
  /**
   * The viewBox attribute defines the position and dimension, in user space, of an SVG viewport.
   * It is required when the icon prop is an SVG path string to ensure the SVG scales correctly.
   */
  viewBox?: string;
  /**
   * The size property allows developers to specify the size of the icon, which can be defined using standard CSS size values such as pixels (e.g., "24px"), ems (e.g., "1.5em"), or percentages (e.g., "100%").
   */
  size?: CSSSizeType;
  /**
   * When true, the icon will be flipped horizontally in right-to-left (RTL) contexts.
   * This is useful for icons that indicate direction, such as arrows, to ensure they point in the correct direction in RTL layouts.
   */
  rtlFlip?: boolean;
  /**
   * When true, the icon will have rounded corners.
   */
  rounded?: boolean;
  /**
   * The animate prop can be used to apply animation effects to the icon.
   * It accepts predefined animation values such as "spin", "fade", "pulse", or "bounce".
   */
  animate?: "spin" | "fade" | "pulse" | "bounce";
}
const SvgTextSize = ["", ".875em", ".525em", ".35em", ".25em"];

export type IconProps = string | BaseIconProps | React.ReactElement;

const ANIMATIONS = {
  spin: "animate-spin",
  fade: "animate-fade",
  pulse: "animate-pulse",
  bounce: "animate-bounce",
};

/**
 * A versatile icon component that supports multiple formats: SVG paths, CSS class names,
 * and short text labels (rendered inside an SVG).
 *
 * Recommended to use iconify for CSS icons
 *
 * @see https://iconify.design/ for a comprehensive collection of icons that can be easily integrated using CSS class names, providing a wide range of options for developers to choose from when selecting icons for their applications.
 *
 * @example
 * ```tsx
 * import { Icon } from "@react-fabric/core";
 *
 * // Render as a raw SVG path
 * <Icon icon="M10 20v-6h4v6h5V3h-5V13H9v6H5v-6h4z" size="24px" />
 *
 * // Render via CSS class
 * <Icon icon="icon-[mdi--home]" />
 *
 * // Render as a short text label inside an SVG
 * <Icon icon="+" size="1.5em" />
 *
 * // With additional features like animations and custom colors
 * <Icon icon="M4 10h2v10H4zm8-2h2v10h-2zm6-7h2v10h-2zm-4 12h2v3h-2z" animate="spin" color="primary-500" />
 * ```
 */
export function Icon({
  animate,
  className,
  color,
  bg,
  icon,
  ref,
  rounded,
  rtlFlip,
  size,
  viewBox = "0 0 24 24",
  ...props
}: BaseIconProps & RefProp) {
  const iconEl = useMemo(() => {
    if (isValidElement(icon)) return icon;
    if (isString(icon)) {
      if (isSvgPath(icon)) {
        return (
          <svg viewBox={viewBox} className="size-[1em]">
            <path fill="currentColor" d={icon.toString()} />
          </svg>
        );
      }

      return icon.length <= 4 ? (
        <svg role="img" className="size-[1em]">
          <text
            x="50%"
            y="50%"
            dy=".1em"
            dominantBaseline="middle"
            textAnchor="middle"
            style={{ fontSize: SvgTextSize[icon.length] }}
          >
            {icon}
          </text>
        </svg>
      ) : (
        <i className={`size-[1em] ${icon}`} />
      );
    }
    throw Error("Invalid icon expected string");
  }, [icon, viewBox]);

  return (
    <dfn
      data-ref="icon"
      {...props}
      ref={ref}
      role="presentation"
      className={cn(
        "fabric-icon",
        "inline-block",
        className,
        "select-none overflow-hidden box-content leading-0 not-italic text-center",
        rounded ? "rounded-full" : "rounded",
        animate && ANIMATIONS[animate],
        rtlFlip && "rtl:-scale-x-100",
      )}
      style={{
        fontSize: size,
        color: getColor(color),
        backgroundColor: getColor(bg),
      }}
    >
      {iconEl}
    </dfn>
  );
}
