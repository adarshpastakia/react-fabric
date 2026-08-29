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
import type { ChildProp, CssProp } from "../../types";
import type { ImageProps, VideoProps } from "../media/Media";

export interface CardCoverProps extends CssProp, ChildProp<ImageProps | VideoProps> {
  /**
   * cover height
   */
  height?: string | number;
  /**
   * justify content
   */
  justify?: "start" | "center" | "end";
  /**
   * cover media element
   */
  title: React.ReactNode;
}

const JUSTIFY_MAP = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
};

/**
 * A cover component for cards that can contain media and content.
 * It allows for flexible layout options and supports different color schemes.
 * It can be used to create visually appealing card layouts with media content.
 *
 * @example
 * ```jsx
 * <CardCover
 *   height={200}
 *   colorScheme="light"
 *   justify="center"
 *   className="my-custom-class"
 *   aria-label="Card Cover"
 * >
 *   <Image src="image.jpg" alt="Card Image" />
 *   <div>Card Content</div>
 * </CardCover>
 * // Renders a card cover with a height of 200px, light color scheme, centered content, and a custom class name.
 * ```
 */
export function CardCover({ className, children, title, height = 120, justify = "end", ...props }: CardCoverProps) {
  return (
    <div style={{ height }} className="fabric-cardCover relative area-header z-0" {...props}>
      {children}
      <div
        className={cn(
          "fabric-cardCoverContent",
          "relative pointer-events-none z-1 flex flex-col flex-nowrap p-4 h-full",
          JUSTIFY_MAP[justify],
          className,
        )}
      >
        {title}
      </div>
    </div>
  );
}
