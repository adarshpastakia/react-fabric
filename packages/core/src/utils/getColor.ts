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

import { isColor } from "@react-fabric/utilities";

/**
 * Resolves a color value to a CSS color string.
 *
 * If the input is a valid CSS color (e.g., `"#ff0000"`, `"rgb(255,0,0)"`), it is returned as-is.
 * Otherwise, it is treated as a design token name and resolved to a CSS custom property
 * (e.g., `"primary-500"` → `"var(--color-primary-500)"`).
 *
 * @param {ColorUnion} color - The color value to resolve. Accepts CSS color strings or design token names.
 * @returns The resolved CSS color string, or `undefined` if color is falsy.
 *
 * @example
 * ```ts
 * getColor("primary-500");    // "var(--color-primary-500)"
 * getColor("#ff0000");       // "#ff0000"
 * getColor("red");           // "var(--color-red)"
 * getColor(undefined);       // undefined
 * ```
 */
export function getColor(color?: string) {
  if (!color) return undefined;
  if (color && isColor(color)) {
    return color;
  }
  if (color.startsWith("--")) return `var(${color})`;
  return `var(--color-${color})`;
}
