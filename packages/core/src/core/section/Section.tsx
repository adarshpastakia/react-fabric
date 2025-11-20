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
  type TestProps,
  type ChildrenProp,
  type CssProp,
  type RefProp,
} from "../../types";
import { ErrorBoundary } from "../boundary/ErrorBoundary";

/**
 * A component that represents a section of content within a page, with templated grid layout.
 * It can be used to group related content together and can be styled with additional CSS classes.
 * It supports RTL (right-to-left) text direction.
 *
 * @param {ChildrenProp} children - The children to be rendered inside the section.
 * @param {CssProp} className - Additional CSS classes to apply to the section.
 * @param {RefProp<HTMLDivElement>} ref - A ref to the section element.
 *
 * @example
 * ```jsx
 * <Section className="my-section" ref={sectionRef}>
 *   <p>This is a section.</p>
 * </Section>
 * ```
 *
 *  @see {@link https://adarshpastakia.github.io/react-fabric/?path=/docs/core-application--section} for more details.
 */
export const Section = ({
  children,
  className,
  dir,
  ref,
  ...rest
}: ChildrenProp &
  CssProp &
  TestProps &
  RefProp<HTMLDivElement> & { dir?: "ltr" | "rtl" }) => {
  return (
    <div
      data-ref="section"
      dir={dir}
      ref={ref}
      {...rest}
      className={classNames(
        "fabric-section",
        className,
        "grid area-content overflow-hidden",
      )}
    >
      <ErrorBoundary>{children}</ErrorBoundary>
    </div>
  );
};
