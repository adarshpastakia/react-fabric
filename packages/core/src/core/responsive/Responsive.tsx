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
import type { ChildrenProp, CssProp, TestProps } from "../../types";

export interface ContainerProps extends CssProp, ChildrenProp, TestProps {
  /**
   * use full width
   */
  fullWidth?: boolean;
  /**
   * use @container size queries for max-width
   */
  useContainer?: boolean;
}

export interface RowProps extends CssProp, ChildrenProp, TestProps {
  /**
   * no wrapping
   */
  noWrap?: boolean;
  /**
   * flex orientation
   */
  orient?: "row" | "row-reverse" | "col" | "col-reverse";
  /**
   * align items
   */
  align?: "start" | "end" | "center" | "stretch";
  /**
   * justify items
   */
  justify?: "start" | "end" | "center" | "between";
}

export interface ColProps extends CssProp, TestProps, Partial<ChildrenProp> {
  /**
   * align items
   */
  align?: "start" | "end" | "center" | "stretch";
  /**
   * column flex
   */
  flex?: "fill" | "full" | "initial" | "content";
  /**
   * stretch inner content
   */
  stretchContent?: boolean;
  /**
   * truncate text
   */
  truncate?: boolean;
}

const ALIGN_MAP = {
  start: "items-start",
  end: "items-end",
  center: "items-center",
  stretch: "items-stretch",
};

const JUSTIFY_MAP = {
  start: "justify-start",
  end: "justify-end",
  center: "justify-center",
  between: "justify-between",
};

const FLEX_MAP = {
  span: "flex-span",
  fill: "flex-1",
  full: "flex-full",
  initial: "flex-initial",
  content: "flex-content",
};

/**
 * Container that wraps children in a div with optional full-width and container-size queries.
 */
export function Container({ children, fullWidth, className, useContainer, ...props }: ContainerProps) {
  return (
    <div
      className={cn("fabric-container", className, !fullWidth && (useContainer ? "container-inner" : "container"), " mx-auto")}
      aria-roledescription="flex-container"
      {...props}
    >
      {children}
    </div>
  );
}

/**
 * Row component with flex layout, supporting orientation, alignment, and wrapping.
 */
export function Row({ children, noWrap, orient, align = "stretch", justify = "start", className, ...props }: RowProps) {
  return (
    <div
      className={cn(
        "fabric-row",
        className,
        "flex",
        {
          "flex-row": orient === "row",
          "flex-col": orient === "col",
          "flex-row-reverse": orient === "row-reverse",
          "flex-col-reverse": orient === "col-reverse",
        },
        noWrap ? "flex-nowrap" : "flex-wrap",
        JUSTIFY_MAP[justify],
        ALIGN_MAP[align],
      )}
      aria-roledescription="flex-row"
      {...props}
    >
      {children}
    </div>
  );
}

/**
 * Column component within a Row, supporting flex sizing, alignment, and text truncation.
 */
export function Col({ children, flex, align, truncate, className, stretchContent, ...props }: ColProps) {
  return (
    <div
      className={cn(
        "fabric-col",
        className,
        {
          "stretch-content": stretchContent,
          truncate: truncate,
        },
        FLEX_MAP[flex ?? "span"],
        align && ALIGN_MAP[align],
      )}
      aria-roledescription="flex-col"
      {...props}
    >
      {children}
    </div>
  );
}
