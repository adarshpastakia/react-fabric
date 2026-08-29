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
import { useImperativeHandle } from "react";
import { useDebounce } from "../../hooks/useDebounce";
import { useResizeObserver } from "../../hooks/useResizeObserver";
import type { ChildrenProp, CssProp, RefProp, ScrollObject, SizeObject, TestProps } from "../../types";
import { ErrorBoundary } from "../boundary/ErrorBoundary";

export interface ContentProps extends ChildrenProp, CssProp, RefProp<HTMLDivElement>, TestProps {
  /**
   * scroll vevent handler
   */
  onScroll?: (scroll: ScrollObject, event: React.MouseEvent<HTMLDivElement>) => void;
  /**
   * scroll vevent handler
   */
  onResize?: (event: SizeObject) => void;
}

/**
 * Content component that wraps children in a section element.
 * It uses a resize observer to handle resizing and a debounced scroll handler.
 * It also includes an error boundary to catch any errors in the children.
 *
 * @example
 * ```tsx
 * <Content onScroll={handleScroll} onResize={handleResize}>
 *   <div>Child content</div>
 * </Content>
 * ```
 */
export function Content({ ref, children, className, onScroll, onResize, ...props }: ContentProps) {
  const resizeHandle = useResizeObserver(onResize);
  const scrollHandler = useDebounce(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const el = e.target as HTMLElement;
      onScroll?.(
        {
          left: el.scrollLeft,
          top: el.scrollTop,
          scrollHeight: el.scrollHeight,
          scrollWidth: el.scrollWidth,
          width: el.offsetWidth,
          height: el.offsetHeight,
        },
        e,
      );
    },
    [onScroll],
  );
  useImperativeHandle(ref, () => resizeHandle.current as HTMLDivElement);
  return (
    <section
      data-ref="content"
      {...props}
      aria-roledescription="content-pane"
      ref={resizeHandle}
      onScroll={scrollHandler}
      className={cn("fabric-content", className, "area-content @container scrollbar-gutter-stable")}
    >
      <ErrorBoundary>{children}</ErrorBoundary>
    </section>
  );
}
