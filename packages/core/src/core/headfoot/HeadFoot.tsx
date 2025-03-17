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
  type TestProps,
} from "../../types";

interface BaseProps extends CssProp, AriaProps, ChildrenProp, TestProps {
  dir?: "ltr" | "rtl";
}

type DefaultProps = BaseProps & { flex?: false };
type FlexProps = BaseProps & {
  flex: true;
  align?: "start" | "end" | "center" | "stretch";
  justify?: "start" | "end" | "center" | "between";
};

export type HeadFootProps = DefaultProps | FlexProps;

const HeadFoot = ({
  as: E,
  children,
  className,
  flex,
  area,
  dir,
  align = "center",
  justify = "start",
  ...aria
}: KeyValue & { as: "header" | "footer" }) => {
  return (
    <E
      dir={dir}
      className={classNames(
        "fabric-headfoot",
        className,
        area === "head" ? "area-head" : "area-foot",
        `leading-none`,
        flex && "flex flex-nowrap",
        align && `items-${align}`,
        justify && `justify-${justify}`,
      )}
      {...aria}
    >
      {children}
    </E>
  );
};

export const Header = (props: HeadFootProps) => (
  <HeadFoot as="header" area="head" {...props} />
);

export const Footer = (props: HeadFootProps) => (
  <HeadFoot as="footer" area="foot" {...props} />
);
