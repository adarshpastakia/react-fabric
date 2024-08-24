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
import { Icon } from "../../components/icon/Icon";
import { type ChildrenProp, type IconProps, type TestProps } from "../../types";
import classes from "./Page.module.css";

export interface PageProps extends IconProps, ChildrenProp, TestProps {
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
   * loading indicator
   */
  loading?: boolean;
}

/**
 * The page component used typically for routes, is a structured layout used within an application to organize and display content in a sectioned format, ensuring a consistent and intuitive user experience.
 */
export const Page = ({
  children,
  paper,
  title,
  titleClassName,
  icon,
  rtlFlip,
  iconBg,
  iconColor,
  loading,
  "data-testid": testId,
  "data-test-value": testValue,
}: PageProps) => {
  return (
    <div
      data-testid={testId}
      data-test-value={testValue}
      className={classNames(
        classes.page,
        "overflow-hidden grid area-content",
        paper && "shadow-paper m-[6px] rounded-capped",
      )}
    >
      {title && (
        <div
          data-ref="pageTitle"
          className={classNames(
            classes.pageTitle,
            "select-none flex gap-1 items-center justify-center px-1 py-0.5 font-medium text-center",
            titleClassName,
          )}
        >
          {icon && (
            <Icon
              icon={icon}
              size="1.25em"
              rtlFlip={rtlFlip}
              bg={iconBg}
              color={iconColor}
            />
          )}
          {title}
        </div>
      )}
      {loading && <Loading />}
      {children}
    </div>
  );
};
