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
import { cn, EMPTY_ARRAY, iconToken, mergeRefs } from "@react-fabric/utilities";
import { useHotkeySequence } from "@tanstack/react-hotkeys";
import { Fragment, useEffect, useMemo, useRef } from "react";
import type { PolymorphicProps } from "../../types";
import { Kbd } from "../../typography/Kbd";
import { getBadgeProps, getIconProps } from "../../utils";
import { Badge } from "../badge/Badge";
import { Icon } from "../icon/Icon";
import { Tooltip } from "../tooltip/Tooltip";
import type { MenuItemProps } from "./types";

function Wrapper({
  children,
  minimal,
  label,
  childOpen,
  ...rest
}: {
  label?: string;
  minimal?: boolean;
  childOpen?: boolean;
  children: React.ReactElement<KeyValue>;
}) {
  return minimal ? (
    <Tooltip content={label} placement="right" disabled={childOpen} {...rest}>
      {children}
    </Tooltip>
  ) : (
    <Fragment>{children}</Fragment>
  );
}

/**
 * A menu item component that can be used in a dropdown or menu.
 * It supports various features such as icons, badges, hotkeys, and more.
 * It can be customized with different colors, icons, and behaviors.
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
 */
export function MenuItem<Tag extends React.ElementType = "button">({
  as,
  label,
  color = "primary",
  className,
  icon,
  labelRender,
  appendLabel,
  altIcon,
  id,
  active,
  disabled,
  onClick,
  badge,
  hotKey,
  tabIndex = -1,
  // @ts-expect-error ignore
  minimal = false,
  // @ts-expect-error ignore
  "data-open": childOpen,
  // @ts-expect-error ignore
  ref,
  ...aria
}: MenuItemProps & PolymorphicProps<Tag>) {
  const elRef = useRef<HTMLElement>(null);
  const tree = useFloatingTree();
  const badgeProps = useMemo(() => {
    return getBadgeProps(badge);
  }, [badge]);

  useEffect(() => {
    if (tabIndex === 0) elRef.current?.focus();
  }, [tabIndex]);

  const iconEl = useMemo(() => {
    let path = icon;
    if (minimal && !path) {
      path = iconToken(label);
    }
    return <Icon className={cn("fabric-menuIcon", !!minimal && "minimal")} {...getIconProps(path ?? "")} />;
  }, [icon, minimal, label]);

  const menuLabel = useMemo(() => {
    return (
      <div className="flex flex-nowrap text-start items-center">
        {iconEl}
        {!minimal && <label className="flex-1 pe-4 py-[0.375em] truncate">{labelRender ?? label}</label>}
        {appendLabel && (
          <span
            className={cn(
              "font-bold whitespace-nowrap text-center leading-none mx-1",
              !!minimal && "absolute inset-x-0 bottom-0 overflow-clip",
              minimal ? "text-[0.5rem]" : "text-[0.625rem]",
              active ? "text-white/50" : "text-tint-600/50",
            )}
          >
            {appendLabel}
          </span>
        )}
        {badge && (
          <Badge {...(badgeProps as AnyObject)} inline={!minimal} placement={minimal ? "end" : undefined} className="mx-1" />
        )}
        {hotKey && <Kbd keys={hotKey} />}
        {!minimal && altIcon && <Icon className="text-muted px-1" icon={altIcon} rtlFlip />}
      </div>
    );
  }, [iconEl, minimal, labelRender, label, appendLabel, active, badge, badgeProps, hotKey, altIcon]);

  useHotkeySequence(
    hotKey ? [hotKey].flat() : EMPTY_ARRAY,
    () => {
      void elRef.current?.click?.();
    },
    {
      enabled: !disabled,
    },
  );

  const E = as ?? "button";
  return (
    <Wrapper {...aria} childOpen={!!childOpen} label={label} minimal={!!minimal}>
      <E
        ref={mergeRefs(ref, elRef)}
        data-dropdown-dismiss
        data-color={color}
        className={cn(
          "fabric-menuItem cursor-pointer outline-none",
          className,
          active && "active",
          !!minimal && "minimal",
          disabled && "disabled",
          "rounded relative max-w-[50vw]",
        )}
        data-active={active}
        data-open={!!childOpen}
        disabled={disabled}
        data-id={id}
        tabIndex={tabIndex}
        onClick={(e) => {
          if (onClick?.(e) !== false) tree?.events.emit("click");
        }}
        {...(minimal ? {} : aria)}
      >
        {menuLabel}
      </E>
    </Wrapper>
  );
}
