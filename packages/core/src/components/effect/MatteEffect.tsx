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

import { useId } from "react";
import { useApplicationContext } from "../../context/context";

/**
 * MatteEffect component that applies a halftone/dither matte overlay effect.
 * Creates a subtle textured appearance using alternating transparent and semi-transparent cells.
 * The effect is applied as an absolute overlay with z-index 0.
 * Border radius is inherited from the parent element.
 * Use CSS `.fabric-style-effect ~ * { z-index: 1 }` to ensure siblings render above.
 *
 * @example
 * ```tsx
 * <div className="fabric-style-effect relative rounded-md">
 *     <MatteEffect />
 *     <Button>Click me</Button>
 * </div>
 * ```
 */
export function MatteEffect() {
  const { currentColorScheme } = useApplicationContext();
  const isDark = currentColorScheme === "dark";
  const id = useId();

  // Pattern cell configuration
  const cellSize = 1.5;
  const patternSize = cellSize * 2;
  const patternOpacity = 0.04; // Kept highly subtle for fine UI grain

  // Highly optimized alternate checkerboard rendering path
  // Uses 1 layout path instead of 4 dense rect nodes to create identical grid texture blocks
  const patternContent = isDark ? (
    <path
      d={`M 0 0 h ${cellSize} v ${cellSize} H 0 Z M ${cellSize} ${cellSize} h ${cellSize} v ${cellSize} H ${cellSize} Z`}
      fill="#ffffff"
      opacity={patternOpacity}
    />
  ) : (
    <path
      d={`M 0 0 h ${cellSize} v ${cellSize} H 0 Z M ${cellSize} ${cellSize} h ${cellSize} v ${cellSize} H ${cellSize} Z`}
      fill="#000000"
      opacity={patternOpacity}
    />
  );

  return (
    <svg
      className="fabric-style-effect fabric-matteEffect absolute inset-0 size-full overflow-hidden rounded-[inherit] z-0"
      style={{ pointerEvents: "none" }}
      aria-hidden="true"
    >
      <defs>
        <pattern id={`${id}-mattePattern`} width={patternSize} height={patternSize} patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          {patternContent}
        </pattern>
      </defs>

      <rect width="100%" height="100%" fill={`url(#${id}-mattePattern)`} style={{ mixBlendMode: isDark ? "screen" : "multiply" }} />
    </svg>
  );
}
