/*
 * React Fabric
 * @version: 1.0.0
 *
 *
 * The MIT License (MIT)
 * Copyright (c) 2024 Adarsh Pastakia
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
import { type MouseEventHandler } from "react";
import { useMemoDebugger } from "../hooks/useEffectDebugger";
import {
  type AriaProps,
  type ChildrenProp,
  type ColorType,
  type CssProp,
  type PaletteType,
  type PolymorphicProps,
  type RefProp,
  type SizeType,
} from "../types";
import { getColor } from "../utils";
import { TextSizeMap } from "./types";

export interface AnchorProps extends ChildrenProp, CssProp, RefProp, AriaProps {
  /**
   * link background (CSS color / tailwind color)
   */
  bg?: ColorType | PaletteType | string;
  /**
   * link color (CSS color / tailwind color)
   */
  color?: ColorType | PaletteType | string;
  /**
   * link size
   */
  size?: SizeType | number | string;
  /**
   * font family
   */
  family?: "sans" | "serif" | "mono";

  onClick?: MouseEventHandler;
}

/**
 * A versatile link component that supports polymorphic rendering, allowing it to be used as an anchor (`<a>`), button, or any other HTML element.
 * It can be styled with background color, text color, font size, and font family.
 * It accepts various properties such as `bg`, `color`, `size`, and `family` to customize its appearance.
 * This component is useful for creating links that need to be styled consistently across an application, while also providing flexibility in terms of the HTML element used.
 *
 * @param {AnchorProps} props - The properties for the Anchor component.
 * @param {Tag} as - The HTML element type to render as (default is "a").
 * @returns {JSX.Element} - A styled anchor element with the specified properties.
 *
 * @example
 * ```jsx
 * <Anchor href="https://example.com" bg="blue-500" color="white" size="md">
 *   Click here
 * </Anchor>
 * // Renders a link with a blue background, white text, and medium font size.
 * ```
 *
 * @see {@link https://adarshpastakia.github.io/react-fabric/?path=/story/core-typography--anchor} for more details.
 */
export const Anchor = <Tag extends React.ElementType = "a">({
  ref,
  as,
  children,
  className,
  bg,
  color,
  family,
  size,
  ...aria
}: AnchorProps & PolymorphicProps<Tag>) => {
  /** ***************** style map *******************/
  const styles = useMemoDebugger(
    () => {
      const s: KeyValue = {};
      if (bg) {
        s.backgroundColor = getColor(bg);
      }
      if (color) {
        s.color = getColor(color);
      }
      if (size && !(size in TextSizeMap)) {
        s.fontSize = size;
      }
      if (size && size in TextSizeMap) {
        s.fontSize = TextSizeMap[size];
      }
      return s;
    },
    [bg, color, size, family],
    "Link styles",
  );

  const E = as ?? "a";
  return (
    <E
      className={classNames("link", className, family && `font-${family}`)}
      style={styles}
      ref={ref as AnyObject}
      {...aria}
    >
      {children}
    </E>
  );
};
