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
import { type ChildProp, type CssProp } from "../../types";
import { Icon } from "../icon/Icon";
import { Dropdown, type DropdownProps } from "./Dropdown";

export const DropdownTool = ({
  children,
  className,
  groupHover,
  ...props
}: ChildProp &
  CssProp &
  Omit<DropdownProps, "children"> & {
    /**
     * hide until group hovered
     */
    groupHover?: boolean;
  }) => {
  return (
    <Dropdown {...props}>
      <Icon
        icon="mdi mdi-menu-down"
        className={classNames(
          className,
          "outline bg-base flex-content pointer-events-auto cursor-pointer",
          groupHover &&
            "hidden group-hover:inline-block data-[dropdown-open]:inline-block",
        )}
      />
      {children}
    </Dropdown>
  );
};