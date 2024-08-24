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

import { type ElementType } from "react";
import {
  type AriaProps,
  type BadgeType,
  type CallbackReturn,
  type ChildrenProp,
  type ColorType,
  type CssProp,
  type IconProps,
  type TestProps,
} from "../../types";

export interface MenuItemProps
  extends CssProp,
    AriaProps,
    TestProps,
    IconProps {
  /**
   * menu id passed via menu.onClick
   */
  id?: string;
  /**
   * item label
   */
  label: string;
  /**
   * append label badge text
   */
  appendLabel?: string | false;
  /**
   * menu color
   */
  color?: ColorType;
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
  hotKey?: string;
  /**
   * alternate icon align end (caret, arrow)
   */
  altIcon?: string;
  /**
   * click handler
   */
  onClick?: () => CallbackReturn;
}

export interface MenuRootProps extends CssProp {
  label?: never;
  minimal?: boolean;
  menuClassName?: never;
  onClick?: (id: string) => CallbackReturn;
}

export interface MenuInnerProps extends MenuItemProps {
  label: string;
  minimal?: never;
  /**
   * floating menu className
   */
  menuClassName?: string;
}

export type MenuProps = ChildrenProp<ElementType<MenuItemProps>> &
  (MenuRootProps | MenuInnerProps);
