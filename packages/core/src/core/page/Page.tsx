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
import { Loading } from "../../components/animations/Animations";
import { getIconProps, Icon, IconProps } from "../../components/icon/Icon";
import { type ChildrenProp, type RefProp, type TestProps } from "../../types";

export interface PageProps
  extends ChildrenProp,
    TestProps,
    RefProp<HTMLDivElement> {
  /**
   * page title
   */
  title?: string;
  /**
   * title element className
   */
  titleClassName?: string;
  /**
   * paper style drop shadow
   */
  paper?: boolean;
  /**
   * icon path or props
   */
  icon?: IconProps;
  /**
   * loading indicator
   */
  loading?: boolean;
}

/**
 * Page component that wraps children in a div element.
 * It includes a title section with an optional icon and a loading indicator.
 * The component can be styled with a paper effect, page icon and title.
 * It also accepts a loading prop to display a loading indicator.
 *
 * @param {PageProps} props - The properties for the Page component.
 * @returns A div element containing the title and children, with optional loading indicator.
 *
 * @example
 * ```jsx
 * <Page
 *   title="My Page"
 *   icon="home"
 *   loading={false}
 *   paper={true}
 *   data-testid="my-page"
 *   data-test-value="page-value"
 * >
 *   <p>This is the content of the page.</p>
 * </Page>
 * // Renders a page with a title, icon, and content.
 * ```
 *
 * @see {@link https://adarshpastakia.github.io/react-fabric/?path=/story/core-application--page} for more details.
 */
export const Page = ({
  ref,
  children,
  paper,
  title,
  titleClassName,
  icon,
  loading,
  "data-testid": testId,
  "data-test-value": testValue,
  ...rest
}: PageProps) => {
  return (
    <div
      data-testid={testId}
      data-test-value={testValue}
      data-loading={loading}
      className={classNames(
        "fabric-page relative",
        "overflow-hidden grid area-content",
        paper && "shadow-paper m-[6px] rounded-capped",
      )}
      ref={ref}
      {...rest}
    >
      {title && (
        <div
          data-ref="pageTitle"
          className={classNames(
            "fabric-pageTitle",
            "select-none flex gap-1 items-center justify-center px-1 py-0.5 font-medium text-center",
            titleClassName,
          )}
        >
          {icon && <Icon size="1.25em" {...getIconProps(icon)} />}
          {title}
        </div>
      )}
      {loading && <Loading />}
      {children}
    </div>
  );
};
