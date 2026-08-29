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

/* istanbul ignore file */

import { isValidElement } from "react";
import type { BaseIconProps, IconProps } from "../components/icon/Icon";

/**
 * Normalizes an `IconProps` value into a `BaseIconProps` object.
 *
 * If the input is a string or a React element, wraps it in an `{ icon }` object.
 * If it's already a `BaseIconProps` object, returns it as-is.
 *
 * @param {IconProps} props - An icon specification: a string (CSS class or SVG path), a React element, or a `BaseIconProps` object.
 * @returns A `BaseIconProps` object suitable for spreading onto the `Icon` component.
 *
 * @example
 * ```tsx
 * getIconProps("icon-[mdi--home]");
 * // { icon: "icon-[mdi--home]" }
 * getIconProps(<MyIcon />);
 * // { icon: <MyIcon /> }
 * getIconProps({ icon: "M10 20v-6h4v6" });
 * // { icon: "M10 20v-6h4v6" }
 * ```
 */
export function getIconProps(props: IconProps): BaseIconProps {
  if (typeof props === "string") {
    return { icon: props };
  }
  if (isValidElement(props)) {
    return { icon: props };
  }
  return props;
}
