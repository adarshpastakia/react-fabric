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

import { isArray, isObject } from "@react-fabric/utilities";
import { DEFAULT_STYLES, type DisplayData } from "sigma/types";
import type { InternalNode } from "../types";

const PIE_PALETTE = ["#2ad4ac", "#ea5353", "#39a1e6", "#f8a850", "#B64E84", "#92c652", "#ac7dc4", "#2c91bd", "#f8d653", "#D16082", "#52c8d7", "#475065"];

export function nodeReducer(_: unknown, node: DisplayData, attrs: InternalNode) {
  if (isArray(attrs.segments) && attrs.segments?.length) {
    // @ts-expect-error ignore
    node.pieSize = 0.25;
    attrs.segments.forEach((seg, i) => {
      if (typeof seg === "string") {
        // @ts-expect-error ignore
        node[`slice_${i}`] = 1 / attrs.segments.length;
        // @ts-expect-error ignore
        node[`color_${i}`] = seg;
      }
      if (typeof seg === "number") {
        // @ts-expect-error ignore
        node[`slice_${i}`] = seg;
        // @ts-expect-error ignore
        node[`color_${i}`] = PIE_PALETTE[i];
      }
    });
  }
  if (isObject(attrs.segments)) {
    // @ts-expect-error ignore
    node.pieSize = 0.25;
    Object.entries(attrs.segments).forEach(([color, size], i) => {
      // @ts-expect-error ignore
      node[`slice_${i}`] = size as number;
      // @ts-expect-error ignore
      node[`color_${i}`] = color;
    });
  }

  if (attrs.group) {
    // @ts-expect-error ignore
    node.shape = "folder";
  }
  return node;
}

export function defaultNodeStyles(isDark = false) {
  return [
    DEFAULT_STYLES.nodes,
    {
      size: { attribute: "size", defaultValue: 8 },
      shape: { attribute: "shape", defaultValue: "circle" },
      color: { attribute: "color", defaultValue: isDark ? "#1e293b" : "#e2e8f0" },

      border: { attribute: "border", defaultValue: 0 },
      borderColor: { attribute: "borderColor", defaultValue: "#64748b" },

      image: {
        attribute: "image",
        defaultValue: "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
      },

      pieSize: 0,
      ...Object.assign(
        {},
        ...Array.from({ length: 12 })
          .fill(0)
          .map((_, i) => ({
            [`slice_${i}`]: i === 0 ? 1 : 0,
            [`color_${i}`]: "#888",
          })),
      ),

      labelPosition: "below",
      labelColor: isDark ? "#fff" : "#333",

      fillColor: isDark ? "#111" : "#fff",

      backdropColor: isDark ? "#333" : "#fff",
      backdropShadowColor: isDark ? "rgba(0, 0, 0, 0.5)" : "rgba(0, 0, 0, 0.3)",
    },
  ] as never;
}
