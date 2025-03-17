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
import { type MouseEvent, useImperativeHandle } from "react";
import { useDebounce } from "../../hooks/useDebounce";
import { useResizeObserver } from "../../hooks/useResizeObserver";
import {
  type ChildrenProp,
  type CssProp,
  type RefProp,
  type ScrollObject,
  type SizeObject,
  type TestProps,
} from "../../types";
import { ErrorBoundary } from "../boundary/ErrorBoundary";

export interface ContentProps
  extends ChildrenProp,
    CssProp,
    RefProp,
    TestProps {
  /**
   * scroll vevent handler
   */
  onScroll?: (scroll: ScrollObject, event: MouseEvent<HTMLDivElement>) => void;
  /**
   * scroll vevent handler
   */
  onResize?: (event: SizeObject) => void;
}

/**
 * Scrollable content element
 */
export const Content = ({
  ref,
  children,
  className,
  onScroll,
  onResize,
  "data-testid": testId,
  "data-test-value": testValue,
}: ContentProps) => {
  const resizeHandle = useResizeObserver(onResize);
  const scrollHandler = useDebounce(
    (e: MouseEvent<HTMLDivElement>) => {
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
  useImperativeHandle(ref, () => resizeHandle.current as AnyObject, []);
  return (
    <section
      data-ref="content"
      data-testid={testId}
      data-test-value={testValue}
      ref={resizeHandle}
      onScroll={scrollHandler}
      className={classNames("fabric-content", "area-content", className)}
    >
      <ErrorBoundary>{children}</ErrorBoundary>
    </section>
  );
};
