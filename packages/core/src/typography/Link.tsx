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
import { useMemoDebugger } from "../hooks/useEffectDebugger";
import {
  type AriaProps,
  type ChildrenProp,
  type ColorType,
  type CssProp,
  type PolymorphicProps,
  type RefProp,
  type SizeType,
} from "../types";
import { getBgClass, getColor, getColorClass } from "../utils";
import { TextSizeMap } from "./types";

export interface LinkProps extends ChildrenProp, CssProp, RefProp, AriaProps {
  /**
   * link background (CSS color / tailwind color)
   */
  bg?: ColorType | string;
  /**
   * link color (CSS color / tailwind color)
   */
  color?: ColorType | string;
  /**
   * link size
   */
  size?: SizeType | number | string;
  /**
   * font family
   */
  family?: "sans" | "serif" | "mono";
}

/**
 * Typography link component
 */
export const Link = <Tag extends React.ElementType = "a">({
  ref,
  as,
  children,
  className,
  bg,
  color,
  family,
  size,
  ...aria
}: LinkProps & PolymorphicProps<Tag>) => {
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
      className={classNames(
        "link",
        className,
        family && `font-${family}`,
        bg && getBgClass(bg),
        color && getColorClass(color),
      )}
      style={styles}
      ref={ref as AnyObject}
      {...aria}
    >
      {children}
    </E>
  );
};
