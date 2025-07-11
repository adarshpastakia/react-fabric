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

import { useFloatingTree } from "@floating-ui/react";
import { iconToken, mergeRefs } from "@react-fabric/utilities";
import classNames from "classnames";
import { Fragment, useCallback, useEffect, useMemo, useRef } from "react";
import { HotKey } from "../../hotkeys/HotKey";
import { HotKeyLabel } from "../../hotkeys/HotKeyLabel";
import { Tooltip } from "../../overlays";
import { type PolymorphicProps } from "../../types";
import { Badge, getBadgeProps } from "../badge/Badge";
import { Icon } from "../icon/Icon";
import { type MenuItemProps } from "./types";

/**
 * A menu item component that can be used in a dropdown or menu.
 * It supports various features such as icons, badges, hotkeys, and more.
 * It can be customized with different colors, icons, and behaviors.
 *
 * @param {MenuItemProps} props
 * @returns A JSX element representing the menu item.
 *
 * @example
 * ```jsx
 * <MenuItem
 *   label="Settings"
 *   icon="settings"
 *   onClick={() => console.log("Settings clicked")}
 *   hotKey="Ctrl+S"
 *   badge={{ count: 3, color: "red" }}
 * />
 * ```
 *
 * @see {@link https://adarshpastakia.github.io/react-fabric/?path=/docs/core-components-menu--docs} for documentation.
 */
export const MenuItem = <Tag extends React.ElementType = "button">({
  as,
  label,
  color = "primary",
  className,
  icon,
  iconBg,
  iconColor,
  appendLabel,
  rtlFlip,
  altIcon,
  id,
  active,
  disabled,
  onClick,
  badge,
  hotKey,
  tabIndex = -1,
  // @ts-expect-error ignore
  minimal,
  // @ts-expect-error ignore
  "data-open": childOpen,
  // @ts-expect-error ignore
  ref,
  ...aria
}: MenuItemProps & PolymorphicProps<Tag>) => {
  const elRef = useRef<HTMLElement>(null);
  const tree = useFloatingTree();
  const badgeProps = useMemo(() => {
    return getBadgeProps(badge);
  }, [badge]);

  useEffect(() => {
    tabIndex === 0 && elRef.current?.focus();
  }, [tabIndex]);

  const iconEl = useMemo(() => {
    let path = icon;
    if (minimal && !path) {
      path = iconToken(label);
    }
    return (
      <Icon
        className={classNames("fabric-menuIcon", minimal && "minimal")}
        icon={path ?? ""}
        bg={iconBg}
        color={iconColor}
        rtlFlip={rtlFlip}
      />
    );
  }, [icon, iconBg, iconColor, rtlFlip, minimal, label]);

  const Wrapper = useCallback(
    ({ children, ...rest }: AnyObject) => {
      return minimal ? (
        <Tooltip
          content={label}
          placement="right"
          disabled={childOpen}
          {...rest}
        >
          {children}
        </Tooltip>
      ) : (
        <Fragment>{children}</Fragment>
      );
    },
    [minimal, label, childOpen],
  );

  const menuLabel = useMemo(() => {
    return (
      <div className="flex flex-nowrap text-start items-center">
        {iconEl}
        {!minimal && (
          <label className="flex-1 pe-4 py-[0.375em] truncate">{label}</label>
        )}
        {appendLabel && (
          <span
            className={classNames(
              "font-bold whitespace-nowrap text-center leading-none mx-1",
              minimal && "absolute inset-x-0 bottom-0 overflow-clip",
              minimal ? "text-[0.5rem]" : "text-[0.625rem]",
              active ? "text-white/50" : "text-tint-600/50",
            )}
          >
            {appendLabel}
          </span>
        )}
        {badge && (
          <Badge
            {...badgeProps}
            placement={minimal ? "end" : ""}
            className={classNames("me-1", badgeProps.className)}
          />
        )}
        {hotKey && <HotKeyLabel keyCombo={hotKey} />}
        {!minimal && altIcon && (
          <Icon className="text-muted px-1" icon={altIcon} rtlFlip />
        )}
      </div>
    );
  }, [iconEl, minimal, appendLabel, label, badge, badgeProps, hotKey, active]);

  const E = as ?? "button";
  return (
    <Wrapper {...aria}>
      <E
        ref={mergeRefs(ref, elRef)}
        data-dropdown-dismiss
        data-color={color}
        className={classNames(
          "fabric-menuItem cursor-pointer",
          className,
          active && "active",
          minimal && "minimal",
          disabled && "disabled",
          "rounded relative max-w-[50vw] my-0.5",
        )}
        data-active={active}
        data-open={childOpen}
        disabled={disabled}
        data-id={id}
        tabIndex={tabIndex}
        onClick={(e) => {
          onClick?.(e) !== false && tree?.events.emit("click");
        }}
        {...(minimal ? {} : aria)}
      >
        {hotKey && (
          <HotKey keyCombo={hotKey} handler={() => elRef.current?.click?.()} />
        )}
        {menuLabel}
      </E>
    </Wrapper>
  );
};
