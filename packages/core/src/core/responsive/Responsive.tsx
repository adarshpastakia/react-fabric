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
  type AriaProps,
  type ChildrenProp,
  type CssProp,
  type SizeTypeWithZero,
  type TestProps,
} from "../../types";

export interface ContainerProps
  extends AriaProps,
    CssProp,
    ChildrenProp,
    TestProps {
  /**
   * use full width
   */
  fullWidth?: boolean;
  /**
   * gutter size
   */
  gutter?: SizeTypeWithZero;
}

export interface RowProps extends AriaProps, CssProp, ChildrenProp, TestProps {
  /**
   * no wrapping
   */
  noWrap?: boolean;
  /**
   * gutter size
   */
  gutter?: SizeTypeWithZero;
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

export interface ColProps
  extends AriaProps,
    CssProp,
    TestProps,
    Partial<ChildrenProp> {
  /**
   * align items
   */
  align?: "start" | "end" | "center" | "stretch";
  /**
   * column flex
   */
  flex?: "auto" | "fill" | "full" | "initial" | "content";
  /**
   * stretch inner content
   */
  stretchContent?: boolean;
  /**
   * truncate text
   */
  truncate?: boolean;
}

/**
 * Container component that wraps children in a div element.
 * It supports full width, gutter size, and additional CSS classes.
 * It can be used to create a responsive layout with optional gutters for spacing.
 * It accepts properties for full width, gutter size, and additional CSS classes.
 *
 * @param {ContainerProps} props - The properties for the Container component.
 * @returns A div element containing the children with optional full width and gutter size.
 *
 * @example
 * ```jsx
 * <Container fullWidth={true} gutter="16px" className="custom-container">
 *   <p>This is a container with full width and gutter.</p>
 * </Container>
 * ```
 */
export const Container = ({
  children,
  fullWidth,
  className,
  gutter,
  ...aria
}: ContainerProps) => {
  return (
    <div
      className={classNames(
        "fabric-container",
        className,
        !fullWidth && "container mx-auto",
      )}
      data-gutter={gutter}
      {...aria}
    >
      {children}
    </div>
  );
};

/**
 * Row component that allows for flexible layout of columns.
 * It supports various flex properties, alignment, and wrapping.
 * It can be used to create a responsive layout with optional gutters for spacing.
 * It accepts properties for gutter size, orientation, alignment, justification, and additional CSS classes.
 *
 * @param {RowProps} props - The properties for the Row component.
 * @returns A div element representing a row with the specified flex and alignment properties.
 *
 * @example
 * ```jsx
 * <Row gutter="16px" orient="row" align="center" justify="between">
 *   <Col flex="fill">Column 1</Col>
 *   <Col flex="fill">Column 2</Col>
 * </Row>
 * // Renders a row with two columns, each taking equal space, centered vertically and spaced evenly.
 * ```
 *
 * @see {@link https://adarshpastakia.github.io/react-fabric/?path=/story/core-application--responsive} for more details.
 */
export const Row = ({
  children,
  gutter,
  noWrap,
  orient,
  align = "stretch",
  justify = "start",
  className,
  ...aria
}: RowProps) => {
  return (
    <div
      className={classNames(
        "fabric-row",
        className,
        "flex",
        orient === "row" && "flex-row",
        orient === "col" && "flex-col",
        orient === "row-reverse" && "flex-row-reverse",
        orient === "col-reverse" && "flex-col-reverse",
        noWrap ? "flex-nowrap" : "flex-wrap",
        `justify-${justify}`,
        `items-${align}`,
      )}
      data-gutter={gutter}
      {...aria}
    >
      {children}
    </div>
  );
};

/**
 * Column component that allows for flexible layout within a row.
 * It supports various flex properties, alignment, and truncation.
 * It can be used to create a responsive layout with optional stretching of inner content.
 * It accepts properties for flex size, alignment, truncation, and additional CSS classes.
 *
 * @param {ColProps} props - The properties for the Col component.
 * @returns A div element representing a column with the specified flex and alignment properties.
 *
 * @example
 * ```jsx
 * <Col flex="fill" align="center" truncate className="custom-col">
 *   <p>This is a column with flexible layout.</p>
 * </Col>
 * ```
 *
 * @see {@link https://adarshpastakia.github.io/react-fabric/?path=/story/core-application--responsive} for more details.
 */
export const Col = ({
  children,
  flex,
  align,
  truncate,
  className,
  stretchContent,
  ...aria
}: ColProps) => {
  return (
    <div
      className={classNames(
        "fabric-col",
        className,
        stretchContent && "stretchContent",
        flex === "fill" && "flex-1",
        flex === "full" && "flex-full",
        flex === "auto" && "flex-auto",
        flex === "initial" && "flex-initial",
        flex === "content" && "flex-content",
        align && `self-${align}`,
        truncate && "truncate",
      )}
      {...aria}
    >
      {children}
    </div>
  );
};
