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

import type { Hotkey } from "@tanstack/react-hotkeys";
import type { CallbackReturn, ChildrenProp, ColorBase, CssProp, TestProps } from "../../types";
import type { BadgeType } from "../badge/Badge";
import type { IconProps } from "../icon/Icon";

export interface MenuItemProps extends CssProp, TestProps {
  /**
   * menu id passed via menu.onClick
   */
  id?: string;
  /**
   * item label
   */
  label: string;
  labelRender?: React.ReactElement;
  /**
   * append label badge text
   */
  appendLabel?: React.ReactElement | string | number | false;
  /**
   * menu color
   */
  color?: ColorBase;
  /**
   * icon path or props
   */
  icon?: IconProps;
  /**
   * item active
   */
  active?: boolean;
  /**
   * item disabled
   */
  disabled?: boolean;
  /**
   * badge
   */
  badge?: string | number | BadgeType;
  /**
   * keyboard shortcut label
   */
  hotKey?: Hotkey | Hotkey[];
  /**
   * alternate icon align end (caret, arrow)
   */
  altIcon?: string;
  /**
   * click handler
   */
  onClick?: (e: React.MouseEvent) => CallbackReturn;
}

export interface MenuRootProps extends CssProp {
  label?: never;
  minimal?: boolean;
  /**
   * use this create a dropdown button within menu-item
   */
  forDropdown?: boolean;
  onClick?: (id: string) => CallbackReturn;
}

export interface MenuInnerProps extends Omit<MenuItemProps, "onClick"> {
  label: string;
  minimal?: never;
  trigger?: "hover" | "click";
  forDropdown?: boolean;
  onClick?: (id: string) => CallbackReturn;
}

export type MenuProps = ChildrenProp<MenuItemProps> & (MenuRootProps | MenuInnerProps);
