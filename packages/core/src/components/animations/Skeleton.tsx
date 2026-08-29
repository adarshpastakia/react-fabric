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

import { cn } from "@react-fabric/utilities";
import type { ColorTints, CssPropWithMap, CustomColors } from "../../types";
import { getColor } from "../../utils";

type SkeletonSlotNames = {
  root?: string;
  iconPlaceholder?: string;
  titlePlaceholder?: string;
  linePlaceholder?: string;
};

export interface SkeletonProps extends CssPropWithMap<SkeletonSlotNames> {
  /**
   * Background color for all skeleton slots. Accepts palette tokens or any CSS color.
   * Defaults to `"tint-100"`.
   */
  color?: CustomColors<ColorTints>;
}

/**
 * Content placeholder that renders a grayed-out card mockup with icon, title, and line slots.
 *
 * Displays a pre-styled skeleton card layout (icon area + title + two rows of text lines)
 * to occupy space while real content loads. Useful for list items, cards, panels, and
 * virtualized lists.
 *
 * @example
 * ```tsx
 * import { Skeleton } from "@react-fabric/core";
 *
 * // Basic skeleton placeholder
 * <Skeleton />
 *
 * // Custom color
 * <Skeleton color="primary-100" />
 *
 * // Custom slot styling
 * <Skeleton classNames={{ titlePlaceholder: "w-2/3" }} />
 * ```
 */
export function Skeleton({ className, classNames, color = "tint-200", ...rest }: SkeletonProps) {
  const bgColor = getColor(color);
  return (
    <div
      className={cn("fabric-skeleton", "p-2 animate-fade flex gap-2 max-w-lg", className, classNames?.root)}
      data-ref="skeleton"
      {...rest}
    >
      <div className={cn("rounded aspect-square h-12", classNames?.iconPlaceholder)} style={{ backgroundColor: bgColor }} />
      <div className="flex-1 flex flex-col gap-2">
        <div className={cn("h-3 rounded-full", classNames?.titlePlaceholder)} style={{ backgroundColor: bgColor }} />
        <div className="flex gap-2">
          <div
            className={cn("h-2 rounded-full basis-[30%]", classNames?.linePlaceholder)}
            style={{ backgroundColor: bgColor }}
          />
          <div
            className={cn("h-2 rounded-full basis-[60%]", classNames?.linePlaceholder)}
            style={{ backgroundColor: bgColor }}
          />
        </div>
        <div className="flex gap-2">
          <div
            className={cn("h-2 rounded-full basis-[30%]", classNames?.linePlaceholder)}
            style={{ backgroundColor: bgColor }}
          />
          <div
            className={cn("h-2 rounded-full basis-[60%]", classNames?.linePlaceholder)}
            style={{ backgroundColor: bgColor }}
          />
        </div>
      </div>
    </div>
  );
}
