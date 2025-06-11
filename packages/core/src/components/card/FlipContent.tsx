/*
 * React Fabric
 * @version: 1.0.0
 *
 *
 * The MIT License (MIT)
 * Copyright (c) 2025 Adarsh Pastakia
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 * and associated documentation files (the "Software"), to deal in the Software without restriction,
 * including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial
 * portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
 * TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import classNames from "classnames";
import {
  Children,
  cloneElement,
  isValidElement,
  useImperativeHandle,
  useState,
} from "react";
import { type ChildrenProp, type CssProp, type RefProp } from "../../types";

export interface FlipContentRef {
  flipCard: () => void;
}

export interface Props extends ChildrenProp, RefProp<FlipContentRef> {
  //
}

/**
 * A component that allows flipping between front and back content.
 * It uses a ref to control the flipping action, which toggles the visibility of the front and back content.
 * The component accepts children elements, which should be valid React elements representing the front and back content.
 * The front content is expected to be the first child, and the back content is expected to be the second child.
 * The component applies specific classes to the children based on their position (front or back) and manages the flipping state internally.
 * The `flipCard` method can be called to toggle the visibility of the back content.
 *
 * @param {Props} props - The properties for the FlipContent component.
 * @returns {JSX.Element} The rendered FlipContent component.
 *
 * @example
 * ```jsx
 * <FlipContent ref={flipRef}>
 *   <div className="front">Front Content</div>
 *   <div className="back">Back Content</div>
 * </FlipContent>
 * ```
 *
 * @see {@link https://adarshpastakia.github.io/react-fabric/?path=/docs/core-components-flipcontent--docs}
 */
export const FlipContent = ({ ref, children }: Props) => {
  const [showBack, setShowBack] = useState(false);

  useImperativeHandle(
    ref,
    () => ({
      flipCard: () => setShowBack(!showBack),
    }),
    [showBack],
  );

  return (
    <div className="relative flex-1" data-card-flip={showBack}>
      {Children.map(
        children,
        (child, idx) =>
          isValidElement<CssProp>(child) &&
          cloneElement(child, {
            className: classNames(
              child.props?.className ?? "",
              idx === 0 ? "bg-base relative" : "bg-base absolute inset-0",
            ),
            "data-card-flip-face": idx === 0 ? "front" : "back",
          } as AnyObject),
      )}
    </div>
  );
};
