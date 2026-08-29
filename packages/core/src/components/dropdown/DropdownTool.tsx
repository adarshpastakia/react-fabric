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

import { cn } from "@react-fabric/utilities";
import type { ChildProp, CssProp } from "../../types";
import { Icon } from "../icon/Icon";
import type { DropdownProps } from "./Dropdown";
import { Dropdown } from "./Dropdown";

/**
 * A dropdown component that displays an icon and tool menu.
 * It can be used to create a dropdown menu that appears when the icon is clicked or hovered over.
 * This component is useful for creating toolbars or action menus in a user interface.
 * It accepts children as menu items and can be styled with additional CSS classes.
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
export function DropdownTool({
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
  }) {
  return (
    <Dropdown {...props}>
      <Icon
        icon={icon ?? "icon-[mdi--menu-down]"}
        className={cn(
          className,
          groupHover && "invisible group-hover/tool:visible data-dropdown-open:visible",
          "outline bg-tint-50/50 flex-content pointer-events-auto cursor-pointer",
        )}
      />
      {children}
    </Dropdown>
  );
}
