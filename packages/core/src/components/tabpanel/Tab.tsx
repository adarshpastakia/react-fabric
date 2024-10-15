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
import { type ReactElement, useMemo } from "react";
import {
  type AriaProps,
  type BadgeType,
  type CallbackReturn,
  type ChildrenProp,
  type ColorType,
  type CssProp,
  type IconProps,
  type PolymorphicProps,
  type RefProp,
  type TestProps,
} from "../../types";
import { Badge, getBadgeProps } from "../badge/Badge";
import { DropdownTool } from "../dropdown/DropdownTool";
import { Icon } from "../icon/Icon";
import classes from "./TabPanel.module.css";

export interface TabProps
  extends Partial<ChildrenProp>,
    CssProp,
    RefProp,
    AriaProps,
    TestProps,
    IconProps {
  /**
   * tab id
   */
  id: string;
  /**
   * tab label
   */
  label?: string;
  /**
   * tab color
   */
  color?: ColorType;
  /**
   * tab badge
   */
  badge?: BadgeType;
  /**
   * disabled
   */
  disabled?: boolean;
  /**
   * tab flex to fill button
   */
  tabFlex?: boolean;
  /**
   * className for active state
   */
  activeClassName?: string;
  /**
   * action dropdown body
   */
  actions?: ReactElement;
  /**
   * close handler
   */
  onClose?: () => CallbackReturn;
  /**
   * click handler
   */
  onClick?: (id: string) => CallbackReturn;
}

export const Tab = <Tag extends React.ElementType = "button">({
  ref,
  as,
  id,
  className,
  label,
  icon,
  iconBg,
  iconColor,
  rtlFlip,
  badge,
  disabled,
  onClose,
  // @ts-expect-error ignore
  active,
  // @ts-expect-error ignore
  minimal,
  onClick,
  tabFlex,
  color,
  actions,
  activeClassName,
  ...aria
}: TabProps & PolymorphicProps<Tag>) => {
  const badgeProps = useMemo(() => {
    return getBadgeProps(badge);
  }, [badge]);

  const E = as ?? "button";
  return (
    <E
      data-id={id}
      disabled={disabled}
      data-color={color}
      className={classNames(
        classes.tabButton,
        className,
        active && "active pointer-events-none",
        active && activeClassName,
        disabled && "text-tint-500 pointer-events-none",
        tabFlex ? "flex-1" : "flex-initial max-w-36 min-w-24",
        "flex items-center justify-center px-1 rounded overflow-hidden",
      )}
      onClick={() => !active && onClick?.(id)}
      ref={ref as AnyObject}
      {...aria}
    >
      {icon && (
        <Icon
          icon={icon}
          bg={iconBg}
          color={iconColor}
          rtlFlip={rtlFlip}
          className="flex-content"
        />
      )}
      {!minimal && (
        <label className="flex-initial truncate text-center px-1 py-1">
          {label}
        </label>
      )}
      {badge && (
        <Badge
          {...badgeProps}
          placement={minimal ? "end" : ""}
          className={classNames("me-1", badgeProps.className)}
        />
      )}
      {actions && active && (
        <DropdownTool className="bg-base/20 me-1 z-5">{actions}</DropdownTool>
      )}
      {onClose && (
        <span
          role="none"
          className={classNames(
            "cursor-pointer me-1 opacity-65 hover:opacity-90 pointer-events-auto",
          )}
          onClick={(e) => {
            onClose?.();
            e.stopPropagation();
          }}
        >
          &times;
        </span>
      )}
    </E>
  );
};
