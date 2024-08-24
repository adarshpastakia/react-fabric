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
import {
  type DetailedHTMLProps,
  type ElementType,
  type HTMLAttributes,
} from "react";
import { useMemoDebugger } from "../hooks/useEffectDebugger";
import {
  type AriaProps,
  type ChildrenProp,
  type ColorWithGrays,
  type CssProp,
  type SizeType,
} from "../types";
import { getBgClass, getColor, getColorClass } from "../utils";
import { TitleSizeMap } from "./types";
import classes from "./Typography.module.css";

export interface TitleProps extends ChildrenProp, CssProp, AriaProps {
  as?: ElementType<
    DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>,
    "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  >;
  /**
   * title background
   */
  bg?: ColorWithGrays | string;
  /**
   * title color (CSS color / tailwind color)
   */
  color?: ColorWithGrays | string;
  /**
   * title size (CSS color / tailwind color)
   */
  size?: SizeType | number | string;
  /**
   * font family
   */
  family?: "sans" | "serif" | "mono";
  /**
   * text align
   */
  align?: "start" | "end" | "center" | "justify";
}

/**
 * Typography title component
 */
export const Title = ({
  children,
  className,
  as,
  bg,
  color,
  size,
  align,
  family,
  ...aria
}: TitleProps) => {
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
      if (align) {
        s.textAlign = align;
      }
      if (size && !(size in TitleSizeMap)) {
        s.fontSize = size;
      }
      if (size && size in TitleSizeMap) {
        s.fontSize = TitleSizeMap[size];
      }
      return s;
    },
    [bg, color, size, align],
    "Title styles",
  );

  const E = as ?? "p";
  return (
    <E
      className={classNames(
        classes.title,
        "px-[2px] py-1 truncate whitespace-pre-wrap",
        className,
        family && `font-${family}`,
        !as && "text-lg",
        bg && getBgClass(bg),
        color && getColorClass(color),
      )}
      style={styles}
      {...aria}
    >
      {children}
    </E>
  );
};
