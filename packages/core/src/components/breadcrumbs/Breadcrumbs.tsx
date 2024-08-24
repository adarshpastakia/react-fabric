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
import { Children, useMemo } from "react";
import { type AriaProps, type ChildrenProp, type CssProp } from "../../types";
import { Link } from "../../typography/Link";
import { Dropdown } from "../dropdown/Dropdown";
import classes from "./Breadcrumbs.module.css";

export interface BreadcrumbProps
  extends CssProp,
    AriaProps,
    ChildrenProp<typeof Link> {
  /**
   * breadcrumb styling
   */
  variant?: "classic" | "modern";
  /**
   * classic breadcrumb spearator
   */
  separator?: string;
  /**
   * breadcrumb color
   */
  color?: "primary" | "accent";
}

export const Breadcrumbs = ({
  variant = "classic",
  className,
  separator = "/",
  children,
  color,
  ...aria
}: BreadcrumbProps) => {
  const [start, overflow, end] = useMemo(() => {
    const nodeList = Children.toArray(children as AnyObject);
    if (nodeList.length > 7) {
      return [nodeList.slice(0, 3), nodeList.slice(3, -3), nodeList.slice(-3)];
    }
    return [nodeList];
  }, [children]);

  return (
    <nav
      data-color={color}
      data-variant={variant}
      className={classNames(
        classes.breadcrumbs,
        className,
        "flex flex-nowrap items-center",
      )}
      {...aria}
    >
      {start.map((link, idx) => (
        <li
          key={idx}
          className={classes.breadcrumbLink}
          data-separator={separator}
        >
          {link}
        </li>
      ))}
      {overflow && (
        <Dropdown closeOnClick showArrow>
          <li className={classes.breadcrumbLink} data-separator={separator}>
            <Link>...</Link>
          </li>
          <div
            data-color={color}
            className={classNames(classes.breadcrumbOverflow, "flex flex-col")}
          >
            {overflow}
          </div>
        </Dropdown>
      )}
      {end?.map((link, idx) => (
        <li
          key={idx}
          className={classes.breadcrumbLink}
          data-separator={separator}
        >
          {link}
        </li>
      ))}
    </nav>
  );
};
