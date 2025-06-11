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
import { CoreIcons } from "../../types/icons";
import { Icon } from "../icon/Icon";
import { Dropdown, type DropdownProps } from "./Dropdown";

/**
 * A dropdown component that displays an icon and tool menu.
 * It can be used to create a dropdown menu that appears when the icon is clicked or hovered over.
 * This component is useful for creating toolbars or action menus in a user interface.
 * It accepts children as menu items and can be styled with additional CSS classes.
 *
 * @param {ChildProp} children - The content to be displayed inside the dropdown.
 * @param {CssProp} className - Additional CSS classes to apply to the dropdown.
 * @param {string} icon - The icon to be displayed in the dropdown.
 * @param {boolean} groupHover - If true, the dropdown will only be visible when the parent group is hovered.
 * @param {DropdownProps} props - Additional properties for the dropdown.
 * @returns {JSX.Element} The rendered DropdownTool component.
 *
 * @example
 * ```jsx
 * <DropdownTool
 *   icon="caret-down"
 *   groupHover={true}
 *   className="my-dropdown"
 * >
 *   <MenuItem>Item 1</MenuItem>
 *   <MenuItem>Item 2</MenuItem>
 * </DropdownTool>
 * ```
 */
export const DropdownTool = ({
  children,
  className,
  groupHover,
  icon,
  ...props
}: ChildProp &
  CssProp &
  Omit<DropdownProps, "children"> & {
    icon?: string;
    /**
     * hide until group hovered
     */
    groupHover?: boolean;
  }) => {
  return (
    <Dropdown {...props}>
      <Icon
        icon={icon ?? CoreIcons.caretDown}
        className={classNames(
          "outline bg-tint-50/50 flex-content pointer-events-auto cursor-pointer",
          className,
          groupHover &&
            "hidden group-hover/tool:inline-block data-[dropdown-open]:inline-block",
        )}
      />
      {children}
    </Dropdown>
  );
};
