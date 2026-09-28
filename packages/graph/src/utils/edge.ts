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

import type { DisplayData } from "sigma/types";
import { DEFAULT_STYLES } from "sigma/types";
import type { EdgeAttributes } from "../types";

export function edgeReducer(_: unknown, edge: DisplayData, attrs: EdgeAttributes) {
  // @ts-expect-error ignore
  if (attrs.path === "curved") edge.curvature = 0.3;
  if (attrs.style === "dashed") {
    // @ts-expect-error ignore
    edge.dashSize = 4;
    // @ts-expect-error ignore
    edge.gapSize = 8;
  }
  // @ts-expect-error ignore
  if (attrs.style === "dotted") edge.dashSize = edge.gapSize = edge.size ?? 2;
  return edge;
}

export function defaultEdgeStyles(isDark = false) {
  return [
    DEFAULT_STYLES.edges as never,
    {
      size: { attribute: "size", defaultValue: 1 },
      path: { attribute: "path", defaultValue: "straight" },
      color: { attribute: "color", defaultValue: isDark ? "#475569" : "#94a3b8" },

      head: { attribute: "head" },
      tail: { attribute: "tail" },

      gapSize: 0,
      dashSize: 0,
      parallelPath: "curved",
      dashColor: isDark ? "#181818" : "#fff",

      labelColor: isDark ? "#dedede" : "#545454",
      labelVisibility: "auto",
      labelPosition: "auto",
    } as never,
  ];
}
