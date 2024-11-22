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
import { useMemo } from "react";
import { type ContentProps } from "../../core/content/Content";
import { type HeadFootProps } from "../../core/headfoot/HeadFoot";
import { usePropToggle } from "../../hooks/usePropToggle";
import {
  type AriaProps,
  type ChildrenProp,
  type CollapseProps,
  type CssProp,
  type ExpandProps,
  type IconProps,
  type TestProps,
} from "../../types";
import { CoreIcons } from "../../types/icons";
import { Loading } from "../animations/Animations";
import { Icon } from "../icon/Icon";
import classes from "./Panel.module.css";

export interface PanelProps
  extends CssProp,
    AriaProps,
    TestProps,
    IconProps,
    ExpandProps,
    CollapseProps,
    ChildrenProp<HeadFootProps | ContentProps> {
  /**
   * panel id used by panel stack
   */
  panelId?: string;
  /**
   * panel title
   */
  title?: string;
  /**
   * header actions
   */
  actions?: JSX.Element;
  /**
   * header css classname(s)
   */
  headerClassName?: string;
  /**
   * title css classname(s)
   */
  titleClassName?: string;
  /**
   * loading state
   */
  loading?: boolean;
  /**
   * height
   */
  height?: string | number;
  /**
   * width
   */
  width?: string | number;
  /**
   * minimum height
   */
  minHeight?: string | number;
  /**
   * minimum width
   */
  minWidth?: string | number;
  /**
   * maximum height
   */
  maxHeight?: string | number;
  /**
   * maximum width
   */
  maxWidth?: string | number;
  /**
   * close handler
   */
  onClose?: () => void;
}

export const Panel = ({
  children,
  className,
  titleClassName,
  headerClassName,
  title,
  actions,
  icon,
  iconBg,
  iconColor,
  rtlFlip,
  panelId,
  height,
  width,
  minHeight,
  minWidth,
  maxHeight,
  maxWidth,
  loading,
  expandable,
  expanded: _expanded,
  onExpand,
  collapsable,
  collapsed: _collapsed,
  onCollapse,
  onClose,
  // @ts-expect-error ignore
  onBack,
  ...aria
}: PanelProps) => {
  const [collapsed, toggleCollapse] = usePropToggle(
    _collapsed,
    onCollapse,
    panelId,
  );
  const [expanded, toggleExpand] = usePropToggle(_expanded, onExpand, panelId);

  const hasTools = useMemo(() => {
    return !!expandable || !!collapsable || !!onClose;
  }, [expandable, collapsable, onClose]);

  return (
    <div
      className={classNames(
        classes.panel,
        className,
        "rounded-capped overflow-hidden outline grid",
        expanded ? "fixed inset-4 z-50" : "relative",
      )}
      data-ref="panel"
      data-collapsed={collapsed}
      style={
        expanded
          ? {}
          : collapsed
            ? { width, minWidth, maxWidth }
            : {
                height,
                width,
                minWidth,
                minHeight,
                maxWidth,
                maxHeight,
              }
      }
      {...aria}
    >
      <header
        role="none"
        className={classNames(
          classes.panelHeader,
          headerClassName,
          "flex flex-nowrap items-center area-head",
        )}
        data-testid="panel-header"
        onClick={collapsable ? toggleCollapse : undefined}
      >
        {onBack && (
          <Icon
            data-ref="panelBack"
            className={classNames(classes.panelAction, "cursor-pointer")}
            icon={CoreIcons.chevronLeft}
            onClick={onBack}
          />
        )}
        {icon && (
          <Icon
            icon={icon}
            bg={iconBg}
            color={iconColor}
            rtlFlip={rtlFlip}
            className="p-2 text-md select-none pointer-events-none"
          />
        )}
        <div
          className={classNames(
            titleClassName,
            "flex-1 select-none truncate",
            title && "py-1 first:px-2",
          )}
        >
          {title}
        </div>
        <div className="px-1 leading-none">{actions}</div>
        {hasTools && (
          <div
            role="none"
            className="px-1 gap-px flex"
            onClick={(e) => e.stopPropagation()}
          >
            {expandable && (
              <Icon
                data-ref="panelExpand"
                className={classNames(classes.panelAction, "cursor-pointer")}
                icon={expanded ? CoreIcons.minimize : CoreIcons.maximize}
                onClick={toggleExpand}
              />
            )}
            {!expanded && collapsable && (
              <Icon
                data-ref="panelCollapse"
                className={classNames(classes.panelAction, "cursor-pointer")}
                icon={collapsed ? CoreIcons.expand : CoreIcons.collapse}
                onClick={toggleCollapse}
              />
            )}
            {!expanded && onClose && (
              <Icon
                data-ref="panelClose"
                className={classNames(classes.panelAction, "cursor-pointer")}
                icon={CoreIcons.close}
                onClick={onClose}
              />
            )}
          </div>
        )}
      </header>
      {(!collapsed || expanded) && (
        <div
          data-testid="panel-body"
          className={classNames(
            classes.panelBody,
            "area-content grid overflow-hidden",
          )}
        >
          {loading && <Loading />}
          {children}
        </div>
      )}
    </div>
  );
};
