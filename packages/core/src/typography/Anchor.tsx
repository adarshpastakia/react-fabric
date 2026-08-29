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
import type { ChildrenProp, CssProp, PolymorphicProps, RefProp } from "../types";

export interface AnchorProps extends ChildrenProp, CssProp, RefProp {
  onClick?: React.MouseEventHandler;
}

/**
 * A versatile link component that supports polymorphic rendering, allowing it to be used as an anchor (`<a>`), button, or any other HTML element.
 * This component is useful for creating links that need to be styled consistently across an application, while also providing flexibility in terms of the HTML element used.
 *
 * @example
 * ```jsx
 * <Anchor href="https://example.com">
 *   Click here
 * </Anchor>
 * // Renders a link with default styling.
 * ```
 */
export function Anchor<Tag extends React.ElementType = "a">({
  ref,
  as,
  children,
  className,
  ...props
}: AnchorProps & PolymorphicProps<Tag>) {
  const E = as ?? "a";
  return (
    <E
      className={cn("link", className)}
      ref={ref as React.RefObject<HTMLAnchorElement | null>}
      data-clickable={true}
      {...props}
    >
      {children}
    </E>
  );
}
