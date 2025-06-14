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
import { Anchor } from "../../typography/Anchor";
import { Dropdown } from "../dropdown/Dropdown";

export interface BreadcrumbProps
  extends CssProp,
    AriaProps,
    ChildrenProp<typeof Anchor> {
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

/**
 * A navigation component that displays the current page's location within a hierarchy and allows users to navigate back to previous pages.
 * It supports different styles, separators, and colors, and can handle a variable number of breadcrumb links.
 * This component is useful for enhancing user navigation experience in applications with multiple levels of content hierarchy.
 * It automatically manages the display of overflow items when there are too many links to fit in the available space, providing a dropdown for additional links.
 *
 * @param {BreadcrumbProps} props - The properties for the Breadcrumbs component.
 * @returns {JSX.Element} The rendered Breadcrumbs component.
 *
 * @example
 * ```jsx
 * <Breadcrumbs
 *   variant="classic"
 *   separator=">"
 *   color="primary"
 *   className="my-custom-class"
 *   aria-label="Breadcrumbs"
 * >
 *   <Anchor href="/">Home</Anchor>
 *   <Anchor href="/products">Products</Anchor>
 *   <Anchor href="/products/shoes">Shoes</Anchor>
 *   <Anchor href="/products/shoes/sneakers">Sneakers</Anchor>
 *   <Anchor href="/products/shoes/sneakers/nike">Nike</Anchor>
 *   <Anchor href="/products/shoes/sneakers/nike/airmax">Air Max</Anchor>
 * </Breadcrumbs>
 * ```
 *
 * @see {@link https://adarshpastakia.github.io/react-fabric/?path=/docs/core-components-breadcrumbs--docs} for more details.
 */
export const Breadcrumbs = ({
  variant = "classic",
  className,
  separator = "/",
  children,
  color,
  ...aria
}: BreadcrumbProps) => {
  const [start, overflow, end] = useMemo(() => {
    const nodeList = Children.toArray(children as AnyObject).filter(Boolean);
    if (nodeList.length > 7) {
      return [nodeList.slice(0, 3), nodeList.slice(3, -3), nodeList.slice(-3)];
    }
    return [nodeList];
  }, [children]);

  return (
    <nav
      data-ref="breadcrumbs"
      data-color={color}
      data-variant={variant}
      className={classNames(
        "fabric-breadcrumbs",
        className,
        "flex flex-nowrap items-center",
      )}
      {...aria}
    >
      {start.map((link, idx) => (
        <li
          key={idx}
          className={"fabric-breadcrumbLink"}
          data-separator={separator}
        >
          {link}
        </li>
      ))}
      {overflow && (
        <Dropdown closeOnClick showArrow>
          <li
            className={"fabric-breadcrumbLink"}
            data-separator={separator}
            data-ref="breadcrumbOverflow"
          >
            <Anchor data->...</Anchor>
          </li>
          <div
            data-color={color}
            className={classNames("fabric-breadcrumbOverflow", "flex flex-col")}
          >
            {overflow}
          </div>
        </Dropdown>
      )}
      {end?.map((link, idx) => (
        <li
          key={idx}
          className={"fabric-breadcrumbLink"}
          data-separator={separator}
        >
          {link}
        </li>
      ))}
    </nav>
  );
};
