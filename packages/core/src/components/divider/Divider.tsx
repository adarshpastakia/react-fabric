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
import { useCallback } from "react";
import {
  type CssProp,
  type ChildProp,
  type ColorType,
  type PaletteType,
} from "../../types";
import { getBgClass, getBorderClass, getColorClass } from "../../utils";

export interface DividerProps extends CssProp, Partial<ChildProp> {
  /**
   * apply text bg
   */
  fill?: boolean;
  /**
   * vertical rule
   */
  vertical?: boolean;
  /**
   * rule color
   */
  color?: ColorType | PaletteType | "tint";
  /**
   * text alignment
   */
  align?: "start" | "end" | "center";
}

export const Divider = ({
  children,
  color,
  vertical,
  fill,
  align = "start",
  className,
}: DividerProps) => {
  const Rule = useCallback(
    ({ flex, className }: KeyValue) => {
      return (
        <hr
          style={{ flex }}
          className={classNames(
            className,
            vertical && "vertical",
            !flex && "self-stretch",
            vertical ? "mx-1" : "my-1",
            color && getBorderClass(color + "-200"),
          )}
        />
      );
    },
    [color, vertical],
  );

  return children ? (
    <div
      className={classNames(
        "flex flex-nowrap items-center",
        vertical && "flex-col",
        className,
      )}
    >
      <Rule flex={align === "start" ? "0 0 1rem" : "1 1 1em"} />
      <div
        className={classNames(
          "px-2 whitespace-nowrap",
          vertical ? "mx-1" : "my-1",
          fill && getBgClass((color ?? "tint") + "-200"),
          !fill && getColorClass((color ?? "tint") + "-600"),
          "rounded-full text-[0.75em]",
          vertical && "origin-center -rotate-90 z-1",
        )}
      >
        {children}
      </div>
      <Rule flex={align === "end" ? "0 0 1rem" : "1 1 1em"} />
    </div>
  ) : (
    <Rule className={className} />
  );
};
