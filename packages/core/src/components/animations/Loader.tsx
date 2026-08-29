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
import type { CustomColors } from "../../types/colors";
import { getColor } from "../../utils";

export interface AnimationLoaderProps {
  /**
   * CSS class name for the icon to display (e.g., an iconify icon class like `"icon-[mdi--spinner]"`).
   */
  icon: string;

  /**
   * Blur intensity for the background mask. Defaults to no blur.
   */
  maskBlur?: "sm" | "md" | "lg";

  /**
   * Icon color. Accepts palette tokens or any CSS color. Defaults to `"tint-300"`.
   */
  color?: CustomColors;

  /**
   * Icon size. Accepts CSS size values (px, em, rem). Defaults to `"2rem"`.
   */
  size?: number | string;
}

/**
 * Loading overlay that renders an animated icon over a blurred backdrop.
 *
 * Renders a centered icon inside a frosted-glass mask, typically used to
 * indicate loading or disabled states. The mask covers its parent element
 * and prevents user interaction while visible.
 *
 * @example
 * ```tsx
 * import { AnimationLoader } from "@react-fabric/core";
 *
 * // Loading overlay with medium blur
 * <div style={{ position: "relative" }}>
 *     <p>Page content</p>
 *     <AnimationLoader icon="icon-[mdi--spinner]" maskBlur="md" />
 * </div>
 *
 * // Custom color and size
 * <AnimationLoader icon="icon-[mdi--loader]" color="primary-500" size="3rem" />
 * ```
 */
export function AnimationLoader({ color = "tint-500", size = "2rem", icon, maskBlur }: AnimationLoaderProps) {
  return (
    <div
      className={cn(
        "fabric-loader-mask",
        "absolute inset-0 z-10 flex justify-center items-center cursor-wait",
        maskBlur === "sm" && "backdrop-blur-sm",
        maskBlur === "md" && "backdrop-blur-md",
        maskBlur === "lg" && "backdrop-blur-lg",
      )}
    >
      <div
        data-ref="loader"
        className="outline outline-tint-300/50 p-4 bg-white/50 dark:bg-black/50 backdrop-blur-xs leading-0 rounded"
      >
        <div className={cn(icon, "aspect-square")} style={{ fontSize: size, color: getColor(color) }} />
      </div>
    </div>
  );
}
