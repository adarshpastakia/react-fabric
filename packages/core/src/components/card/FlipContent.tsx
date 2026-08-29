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

import { Children, cloneElement, isValidElement, useImperativeHandle, useState } from "react";
import type { ChildrenProp, CssProp, RefProp } from "../../types";

/**
 * Ref interface for FlipContent
 */
export interface FlipContentRef {
  /**
   * Programmatically flip the card
   */
  flipCard: () => void;
}

export interface Props extends ChildrenProp, RefProp<FlipContentRef> {}

/**
 * A component that flips between front and back content using a ref-based API.
 * The first child renders as the front face, the second child as the back face.
 * Use the `flipCard` ref method to programmatically toggle between faces.
 *
 * @example
 * ```jsx
 * <FlipContent ref={flipRef}>
 *    <div className="front">Front Content</div>
 *    <div className="back">Back Content</div>
 * </FlipContent>
 * ```
 */
export function FlipContent({ ref, children }: Props) {
  const [showBack, setShowBack] = useState(false);

  useImperativeHandle(
    ref,
    () => ({
      flipCard: () => setShowBack((b) => !b),
    }),
    [],
  );

  return (
    <div className="fabric-flipCard relative area-content" data-card-flip={showBack}>
      {/* eslint-disable-next-line @eslint-react/no-children-map */}
      {Children.map(
        children,
        (child, idx) =>
          isValidElement<CssProp>(child) &&
          cloneElement(child, {
            "data-card-flip-face": idx === 0 ? "front" : "back",
          } as KeyValue),
      )}
    </div>
  );
}
