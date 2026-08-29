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

import type { CustomColors } from "../../types";
import { AnimationLoader } from "./Loader";

export interface LoadingBarsProps {
  /**
   * Spinner color. Accepts palette tokens or any CSS color.
   */
  color?: CustomColors;

  /**
   * Spinner size. Accepts CSS size values (px, em, rem).
   */
  size?: number | string;

  /**
   * Blur intensity for the background mask. Defaults to no blur.
   */
  maskBlur?: "sm" | "md" | "lg";
}

/**
 * Animated loading indicator that renders a "bars scale fade" spinner.
 *
 * A thin wrapper around `AnimationLoader` that provides a pre-configured
 * bars-style loading animation. Useful for inline loading indicators in
 * forms, tables, or content areas.
 *
 * @example
 * ```tsx
 * import { LoadingBars } from "@react-fabric/core";
 *
 * // Basic bars spinner
 * <LoadingBars />
 *
 * // Custom color and size
 * <LoadingBars color="primary-500" size="2rem" />
 *
 * // With backdrop blur
 * <LoadingBars maskBlur="sm" />
 * ```
 */
export function LoadingBars(props: LoadingBarsProps) {
  // Delegate to AnimationLoader with a pre-configured bars-scale-fade icon
  return <AnimationLoader icon="icon-[svg-spinners--bars-scale-fade]" {...props} />;
}
