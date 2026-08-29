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

  // Pattern cell size
  const cellSize = 1.5;
  // Pattern opacity for subtle effect
  const patternOpacity = 0.05;

  // Generate SVG pattern for the matte/dither effect
  // Creates a checkerboard-like pattern with alternating transparent and semi-transparent cells
  const patternContent = isDark ? (
    <>
      {/* Base: transparent */}
      <rect width={cellSize * 2} height={cellSize * 2} fill="transparent" />
      {/* Alternating cells with dark overlay */}
      <rect x={0} y={0} width={cellSize} height={cellSize} fill={`rgba(0, 0, 0, ${patternOpacity})`} />
      <rect x={cellSize} y={cellSize} width={cellSize} height={cellSize} fill={`rgba(0, 0, 0, ${patternOpacity})`} />
      {/* Subtle highlight cells for depth */}
      <rect x={cellSize} y={0} width={cellSize} height={cellSize} fill={`rgba(255, 255, 255, ${patternOpacity * 0.3})`} />
      <rect x={0} y={cellSize} width={cellSize} height={cellSize} fill={`rgba(255, 255, 255, ${patternOpacity * 0.3})`} />
    </>
  ) : (
    <>
      {/* Base: transparent */}
      <rect width={cellSize * 2} height={cellSize * 2} fill="transparent" />
      {/* Alternating cells with light overlay */}
      <rect x={0} y={0} width={cellSize} height={cellSize} fill={`rgba(255, 255, 255, ${patternOpacity})`} />
      <rect x={cellSize} y={cellSize} width={cellSize} height={cellSize} fill={`rgba(255, 255, 255, ${patternOpacity})`} />
      {/* Subtle shadow cells for depth */}
      <rect x={cellSize} y={0} width={cellSize} height={cellSize} fill={`rgba(0, 0, 0, ${patternOpacity * 0.3})`} />
      <rect x={0} y={cellSize} width={cellSize} height={cellSize} fill={`rgba(0, 0, 0, ${patternOpacity * 0.3})`} />
    </>
  );

  return (
    <svg
      className="fabric-style-effect fabric-matteEffect absolute inset-0 size-full overflow-hidden rounded-[inherit] z-0"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="mattePattern"
          width={cellSize * 2}
          height={cellSize * 2}
          patternUnits="userSpaceOnUse"
          patternTransform={`rotate(${isDark ? 45 : -45})`}
        >
          {patternContent}
        </pattern>
      </defs>

      {/* Matte overlay — single rect with pattern fill, no extra div */}
      <rect width="100%" height="100%" fill="url(#mattePattern)" style={{ mixBlendMode: isDark ? "overlay" : "soft-light" }} />
    </svg>
  );
}
