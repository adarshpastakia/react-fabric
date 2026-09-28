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

import { GLSL_ROTATE_2D, type SDFShape, type ValueSource } from "sigma/rendering";

/**
 * Options for the {@link sdfFolder} shape.
 *
 * @property cornerRadius - Corner rounding as a fraction of the node size.
 *    `0` gives sharp corners; larger values round the body and the tab. May
 *   also be a per-node attribute via `{ attribute, default }`.
 * @property rotation - Rotation of the folder, in radians, applied before the
 *   distance field is evaluated. May also be a per-node attribute via
 *    `{ attribute, default }`.
 */
export interface FolderOptions {
  /**
   * Corner rounding as a fraction of the node size. Defaults to `0` (sharp
   * corners).
   */
  cornerRadius?: ValueSource<number>;
  /**
   * Rotation of the folder, in radians, applied before the distance is
   * computed. Defaults to `0`.
   */
  rotation?: ValueSource<number>;
}

/**
 * Resolves a {@link ValueSource} to a plain number, falling back to
 * `defaultValue` when the value is attribute-sourced or missing.
 */
function resolveNumber(value: ValueSource<number> | undefined, defaultValue: number): number {
  return typeof value === "number" ? value : defaultValue;
}

/**
 * Creates a folder SDF shape.
 *
 * The outline is the union of two rounded rectangles: a wide **body** and a
 * smaller **tab** flap that rises above the body's top-left corner — the shape
 * of a classic manila folder. Each panel is an Inigo Quilez rounded-box
 * distance field (https://iquilezles.org/articles/distfunctions2d/) and the
 * union is the closer of the two distances.
 *
 * @param options - Configuration for the folder
 * @returns Folder SDF shape definition
 *
 * @example
 * ```typescript
 * // Sharp folder with a top-left tab
 * const folder = sdfFolder();
 *
 * // Rounded folder
 * const rounded = sdfFolder({ cornerRadius: 0.12 });
 *
 * // Per-node folder, driven by attributes
 * const perNode = sdfFolder({
 *   cornerRadius: { attribute: "folderCorner" },
 *   rotation: { attribute: "folderRotation" },
 * });
 * ```
 */
export function sdfFolder(options?: FolderOptions): SDFShape {
  const { cornerRadius, rotation } = options ?? {};
  const cornerRadiusValue = resolveNumber(cornerRadius, 0);
  const rotationValue = resolveNumber(rotation, 0);

  // SDF for a folder: the union of a wide body panel and a top-left tab flap,
  // each an Inigo Quilez rounded box. The GLSL_ROTATE_2D helper is prepended so
  // `rotation` can be applied; the framework deduplicates it across shapes.
  const glsl = `${GLSL_ROTATE_2D}
float sdf_folder(vec2 uv, float size, float cornerRadius, float rotation) {
    // Apply rotation if needed
  vec2 p = uv;
  if (rotation != 0.0) {
    p = rotate2D(rotation) * p;
    }

    // A folder is the union of a wide body panel and a smaller tab flap that
    // rises above the body's top-left. Each panel is a rounded box; the union is
    // the closer of the two distances.
  float s = size;
  float cr = cornerRadius * s;

    // Body: the main panel, wide and sitting just below the origin.
  vec2 bodyD = abs(p - vec2(0.0, -0.05 * s)) - vec2(0.72 * s, 0.50 * s) + cr;
  float body = length(max(bodyD, 0.0)) + min(max(bodyD.x, bodyD.y), 0.0) - cr;

    // Tab: the top-left flap, its top edge poking above the body.
  vec2 tabD = abs(p - vec2(-0.43 * s, 0.44 * s)) - vec2(0.29 * s, 0.20 * s) + cr;
  float tab = length(max(tabD, 0.0)) + min(max(tabD.x, tabD.y), 0.0) - cr;

    // Union of the two panels.
  return min(body, tab);
}
`;

  return {
    name: "folder",
    glsl,
    uniforms: [
      {
        name: "u_cornerRadius",
        type: "float",
        value: cornerRadiusValue,
      },
      {
        name: "u_rotation",
        type: "float",
        value: rotationValue,
      },
    ],
    // The outline reaches out to the tab's top-left corner (circumradius
    // ~0.96 of the node size); SQRT1_2 keeps the bounding quad comfortably
    // larger, matching the square and diamond shapes.
    inradiusFactor: Math.SQRT1_2,
  };
}
