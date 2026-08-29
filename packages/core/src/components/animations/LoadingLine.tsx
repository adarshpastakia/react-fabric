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

/**
 * Inline loading indicator that renders a top-border shimmer animation.
 *
 * A lightweight loading bar displayed as a thin horizontal line at the top
 * of its container. Useful for page-level or section-level loading states
 * where a full overlay would be too intrusive.
 *
 * @example
 * ```tsx
 * import { LoadingLine } from "@react-fabric/core";
 *
 * // Page-level loading indicator
 * <div>
 *     <LoadingLine />
 *     <p>Content loads below...</p>
 * </div>
 * ```
 */
export function LoadingLine() {
  // Renders a thin shimmer bar at the top of the container using CSS animations
  return (
    <div className="fabric-loader area-loader relative overflow-x-clip h-0" data-ref="loading">
      <div className="absolute inset-x-0 top-0 z-10 py-px overflow-hidden after:absolute after:block after:inset-0" />
    </div>
  );
}
