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

import { isString } from "@react-fabric/utilities";
import classNames from "classnames";
import { Fragment, type ReactElement, useMemo } from "react";
import { Tooltip } from "../../overlays";
import {
  type AriaProps,
  type BadgeType,
  type CallbackReturn,
  type ChildrenProp,
  type ColorState,
  type CssProp,
  type IconProps,
  type PolymorphicProps,
  type RefProp,
  type TestProps,
  type TooltipProp,
} from "../../types";
import { Badge, getBadgeProps } from "../badge/Badge";
import { DropdownTool } from "../dropdown/DropdownTool";
import { Icon } from "../icon/Icon";

export interface TabProps
  extends Partial<ChildrenProp>,
    CssProp,
    RefProp,
    AriaProps,
    TestProps,
    IconProps,
    TooltipProp {
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
  color?: ColorState;
  /**
   * tab badge
   */
  badge?: string | number | BadgeType;
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

/**
 * A component that represents a tab in a tabbed interface. It can display an icon, label, badge, and actions.
 * It supports polymorphic rendering, allowing it to be rendered as different HTML elements.
 * It also supports tooltips, active states, and click handling.
 *
 * @param {TabProps} props - The properties for the Tab component.
 * @returns {JSX.Element} The rendered Tab component.
 *
 * @example
 * ```jsx
 * <Tab
 *   id="tab1"
 *   label="Tab 1"
 *   icon="home"
 *   iconBg="bg-blue-500"
 *   iconColor="text-white"
 *   badge="New"
 *   onClick={(id) => console.log(`Tab clicked: ${id}`)}
 *   onClose={() => console.log("Tab closed")}
 *   active={true}
 *   actions={<button>Action</button>}
 *   color="primary"
 *   tooltip="This is a tab"
 *   activeClassName="bg-blue-100"
 * />
 * // Renders a tab with label "Tab 1", home icon, blue background, white text, badge "New",
 * // and an action button. The tab is active and has a tooltip.
 * ```
 *
 * @see {@link https://adarshpastakia.github.io/react-fabric/?path=/docs/core-components-tabpanel--docs} for more details.
 */
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
  onClick,
  tabFlex,
  color,
  actions,
  tooltip,
  activeClassName,
  ...aria
}: TabProps & PolymorphicProps<Tag>) => {
  const badgeProps = useMemo(() => {
    return getBadgeProps(badge);
  }, [badge]);

  const minimal = useMemo(() => !label, [label]);

  const tooltipProps = useMemo(() => {
    if (isString(tooltip)) return { content: tooltip };

    return tooltip ?? {};
  }, [tooltip]);

  const E = as ?? "button";
  const W = tooltip ? Tooltip : Fragment;
  return (
    <W {...tooltipProps}>
      <E
        data-id={id}
        disabled={disabled}
        data-color={color}
        data-inner-clickable
        className={classNames(
          "fabric-tabButton",
          className,
          active && "active pointer-events-none",
          active && activeClassName,
          disabled && "text-tint-500 pointer-events-none",
          tabFlex ? "flex-1" : "flex-initial max-w-36",
          minimal ? "min-w-6" : "min-w-18",
          "flex items-center justify-center px-1 rounded overflow-hidden cursor-pointer",
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
            className="flex-content p-2"
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
          <DropdownTool className="bg-tint-50/20 me-1 z-5">
            {actions}
          </DropdownTool>
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
    </W>
  );
};
