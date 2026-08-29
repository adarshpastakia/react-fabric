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

import { cn } from "@react-fabric/utilities";
import type { ChildProp, CssPropWithMap, CustomColors } from "../../types";
import { getColor } from "../../utils";

export interface DividerProps
  extends
    CssPropWithMap<{
      root: string;
      label: string;
    }>,
    Partial<ChildProp> {
  /**
   * vertical rule
   */
  vertical?: boolean;
  /**
   * rule color
   */
  color?: CustomColors;
  /**
   * text alignment
   */
  align?: "start" | "end" | "center";
  /**
   * divider style
   */
  style?: "solid" | "dashed" | "dotted";
}

const Rule = ({
  flex,
  className,
  color,
  vertical,
  style,
}: {
  flex?: string;
  className: string;
  color: DividerProps["color"];
  vertical: DividerProps["vertical"];
  style: DividerProps["style"];
}) => {
  return (
    <hr
      style={{ flex, borderColor: getColor(color), borderStyle: style }}
      className={cn(
        className,
        vertical && "vertical",
        !flex && "self-stretch",
        vertical ? "fabric-divider--vertical" : "fabric-divider--horizontal",
      )}
    />
  );
};

/**
 * A component that represents a visual divider between content.
 * It can be used to separate sections of content, with optional text labels.
 * It supports both horizontal and vertical orientations, customizable colors,
 * styles, and alignment options.
 *
 * @example
 * ```jsx
 * <Divider color="primary" align="center" style="dashed">
 *   Divider Text
 * </Divider>
 * // Renders a horizontal divider with primary color, centered text, and dashed style.
 * ```
 */
export function Divider({ children, color, vertical, style, align = "start", className, classNames }: DividerProps) {
  return children ? (
    <div className={cn("flex flex-nowrap items-center fabric-divider", vertical && "flex-col")}>
      <Rule
        className={cn(className, classNames?.root)}
        style={style}
        color={color}
        vertical={vertical}
        flex={align === "start" ? "0 0 1rem" : "1 1 1em"}
      />
      <div
        className={cn(
          "px-2 whitespace-nowrap text-dimmed",
          vertical ? "fabric-divider-label--vertical" : "fabric-divider-label--horizontal",
          classNames?.label,
          "rounded-full text-[0.75em]",
          vertical && "origin-center -rotate-90 z-1",
        )}
        style={{ color: getColor(color) }}
      >
        {children}
      </div>
      <Rule
        className={cn(className, classNames?.root)}
        style={style}
        color={color}
        vertical={vertical}
        flex={align === "end" ? "0 0 1rem" : "1 1 1em"}
      />
    </div>
  ) : (
    <Rule style={style} color={color} vertical={vertical} className={cn(className, classNames?.root)} />
  );
}
