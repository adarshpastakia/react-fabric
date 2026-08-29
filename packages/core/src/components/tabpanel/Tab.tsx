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

import { cn, isString } from "@react-fabric/utilities";
import { Fragment, useMemo } from "react";
import type {
  CallbackReturn,
  ChildrenProp,
  ColorBase,
  CssPropWithMap,
  PolymorphicProps,
  RefProp,
  TestProps,
} from "../../types";
import { getBadgeProps, getIconProps } from "../../utils";
import type { BadgeType } from "../badge/Badge";
import { Badge } from "../badge/Badge";
import { DropdownTool } from "../dropdown/DropdownTool";
import type { IconProps } from "../icon/Icon";
import { Icon } from "../icon/Icon";
import type { TooltipType } from "../tooltip/Tooltip";
import { Tooltip } from "../tooltip/Tooltip";

export interface TabProps
  extends
    Partial<ChildrenProp>,
    CssPropWithMap<{ root: string; label: string; active: string; badge: string }>,
    RefProp<HTMLButtonElement>,
    TestProps {
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
  color?: ColorBase;
  /**
   * icon path or props
   */
  icon?: IconProps;
  /**
   * tab badge
   */
  badge?: string | number | BadgeType;

  tooltip?: string | TooltipType;
  /**
   * disabled
   */
  disabled?: boolean;
  /**
   * tab flex to fill button
   */
  tabFlex?: boolean;
  /**
   * action dropdown body
   */
  actions?: React.ReactElement;
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
 * @example
 * ```jsx
 * <Tab
 *   id="tab1"
 *   label="Tab 1"
 *   icon="home"
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
 */
export function Tab<Tag extends React.ElementType = "button">({
  ref,
  as,
  id,
  className,
  classNames,
  label,
  icon,
  badge,
  disabled,
  onClose,
  onClick,
  tabFlex,
  color,
  actions,
  tooltip,
  // @ts-expect-error ignore
  active,
  ...props
}: TabProps & PolymorphicProps<Tag>): React.ReactElement<TabProps> {
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
        className={cn(
          "fabric-tabButton",
          className,
          classNames?.root,
          !!active && "active pointer-events-none",
          !!active && classNames?.active,
          disabled && "text-tint-500 pointer-events-none",
          tabFlex ? "flex-1" : "flex-initial max-w-36",
          minimal && "min-w-6",
          "flex items-center min-w-18 justify-center overflow-hidden cursor-pointer group/tool",
        )}
        onClick={() => !active && onClick?.(id)}
        ref={ref}
        {...props}
      >
        {icon && <Icon className="flex-content p-2" {...getIconProps(icon)} />}
        {!minimal && <label className={cn(classNames?.label, "flex-initial truncate text-center px-1 py-1")}>{label}</label>}
        {badge && (
          <Badge
            {...(badgeProps as AnyObject)}
            inline={!minimal}
            placement={minimal ? "end" : undefined}
            className={cn("me-1", classNames?.badge)}
          />
        )}
        {actions && (
          <DropdownTool groupHover={!active} className="bg-tint-50/20 me-1 z-5">
            {actions}
          </DropdownTool>
        )}
        {onClose && (
          <span
            role="none"
            className={cn("cursor-pointer mx-1 opacity-65 hover:opacity-90 pointer-events-auto")}
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
}
