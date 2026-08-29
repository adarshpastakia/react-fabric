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

import { isObject, isString } from "@react-fabric/utilities";
import { isValidElement } from "react";
import type { TooltipType } from "../components/tooltip/Tooltip";

/**
 * Normalizes a tooltip specification into `TooltipType` props.
 *
 * If the input is a string or React element, returns a basic tooltip config
 * with `placement: "top"` and the content set. If it's an object, merges
 * it with the base config (adding `ref` and `placement`).
 *
 * @param {TooltipType} tooltip - A tooltip string, React element, or full `TooltipType` config.
 * @param {RefObject<HTMLElement>} innerRef - Optional ref to attach to the tooltip's trigger element.
 * @returns A `TooltipType` config with `ref` and `placement` set, or `undefined` if tooltip is falsy.
 *
 * @example
 * ```tsx
 * getTooltipProps("Hello world");
 * // { ref, placement: "top", content: "Hello world" }
 * getTooltipProps({ content: "Tip", placement: "bottom" });
 * // { ref, placement: "bottom", content: "Tip" }
 * ```
 */
export function getTooltipProps(
  tooltip?: string | TooltipType,
  innerRef?: React.RefObject<HTMLElement>,
): (TooltipType & { ref: AnyObject }) | undefined {
  if (isString(tooltip) || isValidElement(tooltip)) {
    return { ref: innerRef, placement: "top", content: tooltip };
  }
  if (isObject(tooltip)) {
    return Object.assign({ ref: innerRef, placement: "top" }, tooltip);
  }
}
