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

import { isNil, isObject, isString, mergeRefs } from "@react-fabric/utilities";
import classNames from "classnames";
import {
  Fragment,
  isValidElement,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type MouseEventHandler,
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
  type ColorState,
  type CssProp,
  type PolymorphicProps,
  type RefProp,
  type SizeType,
  type TestProps,
  type TooltipType,
} from "../../types";
import { getColor } from "../../utils";
import { AnimationIndicator } from "../animations/Animations";
import { Badge, getBadgeProps } from "../badge/Badge";
import { getIconProps, Icon, IconProps } from "../icon/Icon";

export interface BaseProps extends CssProp, AriaProps, RefProp, TestProps {
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
  color?: ColorState;
  /**
   * icon path or props
   */
  icon?: IconProps;
  /**
   * button type
   */
  type?: "button" | "reset" | "submit";
  /**
   * button styling
   */
  variant?: "outline" | "soft" | "solid" | "link";
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

  /**
   * prevent click default, useful when button is within a `a` link
   */
  preventDefault?: boolean;
  stopPropagation?: boolean;

  onMouseOut?: MouseEventHandler;
  onMouseOver?: MouseEventHandler;
  onMouseMove?: MouseEventHandler;
  onMouseEnter?: MouseEventHandler;
  onMouseLeave?: MouseEventHandler;

  onWheel?: WheelEventHandler;
}

type ButtonTypeProps =
  | { children: string | React.ReactElement; "aria-label"?: string }
  | { children?: never; "aria-label": string };

export type ButtonProps<Tag extends React.ElementType = "button"> = BaseProps &
  ButtonTypeProps &
  PolymorphicProps<Tag>;

/**
 * A versatile button component that supports various styles, icons, and actions.
 * It can be used as a primary action button, with options for loading states, action messages, and more.
 * It supports polymorphic rendering, allowing it to be used as different HTML elements (e.g., button, a, div).
 * It also includes features like after action tooltips, badges, and keyboard shortcuts.
 *
 * @param {ButtonProps} props - The properties for the Button component.
 * @returns {JSX.Element} The rendered Button component.
 *
 * @example
 * ```jsx
 * <Button
 *   color="primary"
 *   size="md"
 *   variant="solid"
 *   icon="check"
 *   onClick={() => console.log("Button clicked!")}
 * >
 *   Click Me
 * </Button>
 * ```
 *
 * @see {@link https://adarshpastakia.github.io/react-fabric/?path=/docs/core-components-button--docs} for more details.
 */
export const Button = <Tag extends React.ElementType = "button">({
  as,
  ref,
  children,
  className,
  active,
  color = "primary",
  icon,
  iconAlign = "start",
  altIcon,
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
  preventDefault,
  stopPropagation,
  type = "button",
  hotKey,
  showActionDone,
  showActionDoneEvent = "click",
  tabIndex = 0,
  // @ts-expect-error ignore
  "data-ref": dataRef,
  ...aria
}: ButtonProps<Tag>) => {
  const refEl = useRef<AnyObject>(null);
  const [busy, setBusy] = useState(false);
  const [actionDone, setActionDone] = useState(false);

  // Handle click events
  const clickHandler = useCallback(
    (e: React.MouseEvent) => {
      setBusy(true);
      preventDefault && e.preventDefault();
      stopPropagation && e.stopPropagation();
      const ret = onClick?.(e);
      void Promise.resolve(ret).then((b) => {
        setBusy(false);
        if (b !== false && actionMessage && showActionDoneEvent === "click") {
          setActionDone(true);
        }
      });
    },
    [
      onClick,
      disabled,
      preventDefault,
      actionMessage,
      showActionDoneEvent,
      stopPropagation,
    ],
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
        color: `${color}-100`,
        open: true,
      } as TooltipType;
    }
  }, [actionDone, actionMessage, color]);

  const badgeProps = useMemo(() => {
    return getBadgeProps(badge);
  }, [badge]);

  const hotKeyHandler = useRef(() => {
    !disabled && refEl.current?.click();
  });

  const E = as ?? "button";
  return (
    <div
      className={classNames(
        "fabric-buttonWrapper",
        className,
        "relative align-text-top select-none focus-within:z-1",
        fullWidth ? "block w-full" : "inline-block",
      )}
      data-ref={dataRef ?? "button"}
      data-size={size}
      data-loading={busy || loading}
      data-disabled={disabled}
    >
      {hotKey && <HotKey keyCombo={hotKey} handler={hotKeyHandler.current} />}
      <TooltipWrapper {...tooltipProps}>
        <E
          ref={mergeRefs(ref, refEl)}
          role="button"
          className={classNames(
            "fabric-button",
            "pointer-events-auto cursor-pointer select-none flex flex-nowrap w-full h-full items-center border-0 -outline-offset-1 justify-center max-w-72 p-0 font-sans font-medium appearance-none",
            `focus-visible:ring-2 focus-visible:ring-offset-2 buttonInner`,
            fullWidth && "max-w-full w-full",
            rounded && "rounded-full",
            spinOnHover && "fabric-spinOnHover",
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
              className={"fabric-buttonIcon"}
              data-align={iconAlign}
              {...getIconProps(icon)}
            />
          )}
          {isValidElement(children) && (
            <div className={"fabric-buttonChild"}>{children}</div>
          )}
          {isString(children) && (
            <label
              className={classNames("fabric-buttonLabel", "truncate")}
              data-colored-icon={isObject(icon) && "bg" in icon}
            >
              {children}
            </label>
          )}
          {!isNil(badge) && <Badge {...badgeProps} />}
          {hotKey && children && <HotKeyLabel keyCombo={hotKey} />}
          {altIcon && (
            <Icon className={"fabric-altIcon"} icon={altIcon} rtlFlip />
          )}
        </E>
      </TooltipWrapper>
      {actionDone && (
        <div
          className={classNames(
            "absolute inset-0 overflow-hidden flex justify-center items-center",
            rounded ? "rounded-full" : "rounded",
          )}
          style={{
            backgroundColor: getColor(`${color}-300`),
          }}
        >
          <AnimationIndicator type="check" color={color} />
        </div>
      )}
    </div>
  );
};
