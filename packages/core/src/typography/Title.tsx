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
import type { ChildrenProp, CssProp } from "../types";

export interface TitleProps extends ChildrenProp, CssProp {
  as?: React.ElementType<
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>,
    "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  >;
}

/**
 * A component that renders a title as different HTML elements based on the `as` prop.
 * This component is useful for creating headings or titles in a consistent style across an application.
 *
 * @example
 * ```jsx
 * <Title as="h1">
 *   This is a Title
 * </Title>
 * ```
 */
export function Title({ children, className, as, ...props }: TitleProps) {
  const E = as ?? "p";
  return (
    <E className={cn("fabric-title", className, !as && "text-lg")} {...props}>
      {children}
    </E>
  );
}
