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

import { isNil, isString, mergeRefs } from "@react-fabric/utilities";
import classNames from "classnames";
import {
  Fragment,
  isValidElement,
  type MouseEventHandler,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type WheelEventHandler,
} from "react";
import { useEffectDebugger } from "../../hooks/useEffectDebugger";
import { HotKey } from "../../hotkeys/HotKey";
import { HotKeyLabel } from "../../hotkeys/HotKeyLabel";
import { Tooltip } from "../../overlays/tooltip/Tooltip";
import {
  type AriaProps,
  type BadgeType,
  type CallbackReturn,
  type ColorType,
  type CssProp,
  type IconProps,
  type PolymorphicProps,
  type RefProp,
  type SizeType,
  type TestProps,
  type TooltipType,
} from "../../types";
import { AnimationIndicator } from "../animations/Animations";
import { Badge, getBadgeProps } from "../badge/Badge";
import { Icon } from "../icon/Icon";
import classes from "./Button.module.css";

export interface BaseProps
  extends CssProp,
    AriaProps,
    IconProps,
    RefProp,
    TestProps {
  /**
   * primary icon alignment
   */
  iconAlign?: "start" | "end";
  /**
   * alternate icon align end (caret, arrow)
   */
  altIcon?: string;
  /**
   * button size
   */
  size?: SizeType;
  /**
   * button color
   */
  color?: ColorType;
  /**
   * button type
   */
  type?: "button" | "reset" | "submit";
  /**
   * button styling
   */
  variant?: "outline" | "solid" | "link";
  /**
   * active state with click disabled
   */
  active?: boolean;
  /**
   * loading state with animation and click disabled
   */
  loading?: boolean;
  /**
   * full rounded edges
   */
  rounded?: boolean;
  /**
   * spin icon on hover
   */
  spinOnHover?: boolean;
  /**
   * disabled state
   */
  disabled?: boolean;
  /**
   * stretch to full width
   */
  fullWidth?: boolean;
  /**
   * action completed message works best with `onClick` Promise return.
   * To hide completed message onClick/Promise return should be false
   */
  actionMessage?: string;
  /**
   * manually force show action message
   */
  showActionDone?: boolean;
  /**
   * show action message `onClick` or manually by setting `showActionDone` true
   */
  showActionDoneEvent?: "click" | "manual";
  /**
   * click handler, return Promise to autoset loading state
   */
  onClick?: (e?: React.MouseEvent) => CallbackReturn;
  /**
   * badges
   */
  badge?: string | number | BadgeType;
  /**
   * keyboard shortcut
   */
  hotKey?: string;

  onMouseOut?: MouseEventHandler;
  onMouseOver?: MouseEventHandler;
  onMouseMove?: MouseEventHandler;
  onMouseEnter?: MouseEventHandler;
  onMouseLeave?: MouseEventHandler;

  onWheel?: WheelEventHandler;
}

export type ButtonProps =
  | { children: string | React.ReactElement; "aria-label"?: string }
  | { children?: never; "aria-label": string };

/**
 * Clickable action button
 */
export const Button = <Tag extends React.ElementType = "button">({
  as,
  ref,
  children,
  className,
  active,
  color = "primary",
  icon,
  iconBg,
  iconColor,
  iconAlign = "start",
  altIcon,
  rtlFlip,
  rounded,
  size,
  disabled,
  loading,
  variant,
  badge,
  fullWidth,
  spinOnHover,
  onClick,
  actionMessage,
  type = "button",
  hotKey,
  showActionDone,
  showActionDoneEvent = "click",
  tabIndex = 0,
  // @ts-expect-error ignore
  "data-ref": dataRef,
  ...aria
}: BaseProps & ButtonProps & PolymorphicProps<Tag>) => {
  const refEl = useRef<AnyObject>(null);
  const [busy, setBusy] = useState(false);
  const [actionDone, setActionDone] = useState(false);

  const clickHandler = useCallback(
    (e: React.MouseEvent) => {
      setBusy(true);
      // e.stopPropagation();
      const ret = onClick?.(e);
      void Promise.resolve(ret).then((b) => {
        setBusy(false);
        if (b !== false && actionMessage && showActionDoneEvent === "click") {
          setActionDone(true);
        }
      });
    },
    [onClick, disabled, actionMessage, showActionDoneEvent],
  );

  /** ***************** reset done state on timeout *******************/
  useEffect(() => {
    actionMessage && showActionDone && setActionDone(true);
  }, [showActionDone, actionMessage]);
  useEffectDebugger(
    () => {
      if (actionDone) {
        const timer = setTimeout(() => setActionDone(false), 2000);
        return () => clearTimeout(timer);
      }
    },
    [actionDone],
    "ActionButton done handler",
  );

  const TooltipWrapper = useMemo(
    () => (actionMessage ? Tooltip : Fragment),
    [actionMessage, actionDone],
  );
  const tooltipProps = useMemo(() => {
    if (actionDone && actionMessage) {
      return {
        content: actionMessage,
        placement: "top",
        color,
        open: true,
      } as TooltipType;
    }
  }, [actionDone, actionMessage, color]);

  const badgeProps = useMemo(() => {
    return getBadgeProps(badge);
  }, [badge]);

  const E = as ?? "button";
  return (
    <div
      className={classNames(
        classes.buttonWrapper,
        className,
        "relative align-text-top select-none focus-within:z-1",
        fullWidth ? "block w-full" : "inline-block",
      )}
      data-ref={dataRef ?? "button"}
      data-size={size}
      data-loading={busy || loading}
      data-disabled={disabled}
    >
      {hotKey && (
        <HotKey
          keyCombo={hotKey}
          handler={() => !disabled && refEl.current?.click()}
        />
      )}
      <TooltipWrapper {...tooltipProps}>
        <E
          ref={mergeRefs(ref, refEl)}
          role="button"
          className={classNames(
            classes.button,
            "pointer-events-auto cursor-pointer select-none flex flex-nowrap w-full h-full items-center border-0 -outline-offset-1 justify-center max-w-72 p-0 font-sans font-medium appearance-none",
            `focus-visible:ring-2 focus-visible:ring-offset-2 buttonInner`,
            fullWidth && "max-w-full w-full",
            rounded && "rounded-full",
            spinOnHover && classes.spinOnHover,
          )}
          type={type}
          disabled={disabled}
          tabIndex={tabIndex}
          data-inner-clickable
          onClick={clickHandler}
          data-color={color}
          data-active={active}
          data-variant={variant}
          {...aria}
        >
          {icon && (
            <Icon
              className={classes.buttonIcon}
              icon={icon}
              bg={iconBg}
              color={iconColor}
              rtlFlip={rtlFlip}
              data-align={iconAlign}
            />
          )}
          {isValidElement(children) && (
            <div className={classes.buttonChild}>{children}</div>
          )}
          {isString(children) && (
            <label
              className={classNames(classes.buttonLabel, "truncate")}
              data-colored-icon={!!iconBg}
            >
              {children}
            </label>
          )}
          {!isNil(badge) && <Badge {...badgeProps} />}
          {hotKey && <HotKeyLabel keyCombo={hotKey} />}
          {altIcon && (
            <Icon className={classes.altIcon} icon={altIcon} rtlFlip />
          )}
        </E>
      </TooltipWrapper>
      {actionDone && (
        <div
          className={classNames(
            "absolute inset-0 overflow-hidden flex justify-center items-center",
            `bg-${color}-300`,
            rounded ? "rounded-full" : "rounded",
          )}
        >
          <AnimationIndicator type="check" color={color} />
        </div>
      )}
    </div>
  );
};
