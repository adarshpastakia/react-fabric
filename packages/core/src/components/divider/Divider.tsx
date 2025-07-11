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
  type ChildProp,
  type ColorType,
  type CssProp,
  type PaletteType,
} from "../../types";
import { getColor } from "../../utils";

export interface DividerProps extends CssProp, Partial<ChildProp> {
  /**
   * vertical rule
   */
  vertical?: boolean;
  /**
   * divider label classname(s)
   */
  labelClassName?: string;
  /**
   * rule color
   */
  color?: ColorType | PaletteType | string;
  /**
   * text alignment
   */
  align?: "start" | "end" | "center";
  /**
   * divider style
   */
  style?: "solid" | "dashed" | "dotted";
}

/**
 * A component that represents a visual divider between content.
 * It can be used to separate sections of content, with optional text labels.
 * It supports both horizontal and vertical orientations, customizable colors,
 * styles, and alignment options.
 *
 * @param {DividerProps} props - The properties for the Divider component.
 * @returns {JSX.Element} The rendered Divider component.
 *
 * @example
 * ```jsx
 * <Divider color="primary" align="center" style="dashed">
 *   Divider Text
 * </Divider>
 * // Renders a horizontal divider with primary color, centered text, and dashed style.
 * ```
 *
 * @see {@link https://adarshpastakia.github.io/react-fabric/?path=/docs/core-components-divider--docs} for more details.
 */
export const Divider = ({
  children,
  color = "tint-300",
  vertical,
  labelClassName,
  style,
  align = "start",
  className,
}: DividerProps) => {
  const Rule = useCallback(
    ({ flex, className }: KeyValue) => {
      return (
        <hr
          style={{ flex, borderColor: getColor(color), borderStyle: style }}
          className={classNames(
            className,
            vertical && "vertical",
            !flex && "self-stretch",
            vertical
              ? "fabric-divider--vertical"
              : "fabric-divider--horizontal",
          )}
        />
      );
    },
    [color, vertical],
  );

  return children ? (
    <div
      className={classNames(
        "flex flex-nowrap items-center fabric-divider",
        vertical && "flex-col",
        className,
      )}
    >
      <Rule flex={align === "start" ? "0 0 1rem" : "1 1 1em"} />
      <div
        className={classNames(
          "px-2 whitespace-nowrap",
          vertical
            ? "fabric-divider-label--vertical"
            : "fabric-divider-label--horizontal",
          labelClassName,
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
