/*
 * React Fabric
 * @version: 1.0.0
 * The MIT License (MIT)
 * Copyright (c) 2026 Adarsh Pastakia
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

import { cn, EMPTY_ARRAY } from "@react-fabric/utilities";
import type { Hotkey } from "@tanstack/react-hotkeys";
import { useHotkeySequence } from "@tanstack/react-hotkeys";
import { useEffect, useReducer } from "react";
import type {
  ChildProp,
  CssPropWithMap,
  CSSSizeType,
  HtmlEvents,
  PolymorphicProps,
  RefProp,
  SizeType,
  TestProps,
} from "../../types";
import { Kbd } from "../../typography/Kbd";
import { getIconProps } from "../../utils";
import { AnimationIndicator } from "../animations/Indicator";
import { StyleEffect } from "../effect/StyleEffect";
import type { IconProps } from "../icon/Icon";
import { Icon } from "../icon/Icon";

export interface SharedButtonProps extends HtmlEvents {
  /**
   * Visual style variant of the button. Defaults to `"default"`.
   */
  variant?: "default" | "soft" | "outlined" | "dashed" | "solid" | "link";

  /**
   * Color scheme for the button. Defaults to `"default"`.
   */
  color?: "default" | "muted" | "primary" | "secondary" | "info" | "danger" | "success" | "warning";

  /**
   * When true, applies fully rounded (pill) corners to the button.
   */
  rounded?: boolean;

  /**
   * Button size. Accepts `"xs"`, `"sm"`, `"md"`, `"lg"`, or `"xl"`.
   */
  size?: SizeType;
}

interface BaseButtonProps
  extends
    CssPropWithMap<{ root: string; button: string; label: string; icon: string }>,
    RefProp<HTMLButtonElement>,
    TestProps,
    SharedButtonProps {
  "aria-label"?: string;

  /**
   * Keyboard shortcut combo that triggers the button's `onClick` handler.
   */
  hotKey?: Hotkey | Hotkey[];
  /**
   * When true, hides the visual hotkey label displayed inside the button.
   */
  hideHotKeyLabel?: boolean;

  /**
   * Icon path or props rendered inside the button.
   */
  icon?: IconProps;
  /**
   * Alternative icon rendered for dropdown carets or state indicators.
   */
  altIcon?: IconProps;

  /**
   * When true, marks the button as in an active/selected state.
   */
  active?: boolean;
  /**
   * When true, shows a loading spinner and disables clicks to prevent duplicate submissions.
   */
  loading?: boolean;
  /**
   * When true, disables the button and prevents user interaction.
   */
  disabled?: boolean;

  /**
   * When true, allows the button to be clicked even when `active` is true.
   */
  activeClickable?: boolean;

  type?: "button" | "submit" | "reset";

  /**
   * Explicit width of the button (CSS size value).
   */
  width?: CSSSizeType;
  /**
   * When true, manually shows the action-completed checkmark overlay.
   */
  showActionDone?: boolean;
  /**
   * Controls when the action-completed checkmark appears: `"click"` shows it after onClick,
   * `"manual"` requires setting `showActionDone` to true.
   */
  showActionDoneEvent?: "click" | "manual";
}

type ButtonTypeProps = { children: ChildProp["children"] } | { children?: never; "aria-label": string };

export type ButtonProps<Tag extends React.ElementType = "button"> = BaseButtonProps & ButtonTypeProps & PolymorphicProps<Tag>;

/**
 * A versatile button component that supports multiple variants, colors, sizes, and states.
 * It can display icons, handle loading/action states, show keyboard shortcuts, and be
 * polymorphic to render as different HTML elements or custom components.
 *
 * @example
 * ```tsx
 * // Basic button
 * <Button variant="solid" color="primary" onClick={handleClick}>
 *   Click me
 * </Button>
 *
 * // Icon button with loading state
 * <Button icon="icon-[mdi--save]" loading={saving}>
 *   Save
 * </Button>
 *
 * // Polymorphic: renders as a link
 * <Button as="a" href="/dashboard" variant="soft">
 *   Dashboard
 * </Button>
 *
 * // Button with keyboard shortcut
 * <Button hotKey="Ctrl+S" variant="dashed">
 *   Save (Ctrl+S)
 * </Button>
 * ```
 */
export function Button<Tag extends React.ElementType = "button">({
  active,
  altIcon,
  as,
  children,
  className,
  classNames,
  color = "default",
  disabled,
  icon,
  loading,
  onBlur,
  onClick,
  onFocus,
  onMouseDown,
  onMouseEnter,
  onMouseLeave,
  onMouseMove,
  onMouseOver,
  onMouseUp,
  activeClickable,
  showActionDone,
  showActionDoneEvent,
  type = "button",
  ref,
  rounded,
  size,
  variant = "default",
  width,
  hotKey,
  hideHotKeyLabel,
  ...props
}: ButtonProps<Tag>) {
  // Action state: tracks whether an action is running and whether to show the done overlay
  const [state, dispatch] = useReducer(
    (state, action: { type: string }) => {
      // Start action: show spinner, hide done overlay
      if (action.type === "actionStart") {
        return { isActionRunning: true, showActionDone: false };
      }
      // Action finished: hide spinner
      if (action.type === "actionFinished") {
        return { ...state, isActionRunning: false };
      }
      // Action done: show checkmark overlay
      if (action.type === "actionDone") {
        return { isActionRunning: false, showActionDone: true };
      }
      // Reset: hide everything
      return { isActionRunning: false, showActionDone: false };
    },
    {
      isActionRunning: false,
      showActionDone: false,
    },
  );
  // Handle button click: dispatch action start, run onClick, then dispatch finished
  const handleAction = async (e?: React.MouseEvent) => {
    dispatch({ type: "actionStart" });
    try {
      await Promise.resolve(onClick?.(e));
      if (showActionDoneEvent === "click") {
        dispatch({ type: "actionDone" });
        setTimeout(() => dispatch({ type: "actionReset" }), 2000);
      }
    } finally {
      dispatch({ type: "actionFinished" });
    }
  };

  useHotkeySequence(
    hotKey ? [hotKey].flat() : EMPTY_ARRAY,
    () => {
      void handleAction();
    },
    {
      enabled: !disabled,
    },
  );

  // Manual mode: show/hide the done overlay based on showActionDone prop
  useEffect(() => {
    if (showActionDoneEvent === "manual") {
      if (showActionDone) dispatch({ type: "actionDone" });
      return () => {
        dispatch({ type: "actionFinished" });
      };
    }
  }, [showActionDone, showActionDoneEvent]);

  const E = as ?? "button";
  return (
    <div
      className={cn(
        "fabric-buttonWrapper",
        "inline-flex relative is-disabled:cursor-not-allowed is-loading:cursor-wait",
        className,
        classNames?.root,
      )}
      data-loading={loading || state.isActionRunning}
      data-disabled={disabled}
      data-rounded={rounded}
      data-variant={variant}
      data-active={active}
      data-color={color}
      data-size={size}
      style={{
        width: width,
      }}
    >
      <E
        ref={ref}
        {...props}
        type={type}
        className={cn(
          "fabric-button",
          classNames?.button,
          "relative w-full appearance-none outline cursor-pointer overflow-hidden flex items-center justify-center has-[.fabric-buttonLabel]:px-[0.5em]",
          "rounded is-rounded:rounded-full",
          "is-loading:pointer-events-none is-loading:after:animate-progress is-disabled:pointer-events-none",
          "not-is-active:is-disabled:opacity-50 not-is-active:is-disabled:after:bg-tint-500/10",
          !activeClickable && "is-active:pointer-events-none",
        )}
        data-clickable={true}
        data-ref="button"
        data-testid={props["data-testid"]}
        data-test-value={props["data-test-value"]}
        role="button"
        disabled={disabled}
        aria-label={props["aria-label"]}
        aria-disabled={disabled}
        onFocus={onFocus}
        onBlur={onBlur}
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onClick={handleAction}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseOver={onMouseOver}
        onMouseMove={onMouseMove}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {variant !== "link" && <StyleEffect />}
        {icon && (
          <Icon
            className={cn(
              "fabric-buttonIcon",
              classNames?.icon,
              "m-[0.375em] has-[~_.fabric-buttonLabel]:mx-0 inline-block size-fit flex-content pointer-events-none",
            )}
            {...getIconProps(icon)}
          />
        )}
        {children && (
          <div
            className={cn(
              "fabric-buttonLabel",
              classNames?.label,
              "m-[0.25em] truncate flex-[0_1_auto] leading-tight pointer-events-none",
            )}
          >
            {children}
          </div>
        )}
        {!hideHotKeyLabel && hotKey && <Kbd keys={hotKey} />}
        {altIcon && (
          <Icon
            className={cn("fabric-buttonAltIcon", "my-[0.25em] size-fit inline-block flex-content pointer-events-none")}
            {...getIconProps(altIcon)}
          />
        )}
      </E>
      {state.showActionDone && (
        <div
          data-testid="doneOverlay"
          className="fabric-buttonDoneOverlay absolute inset-0 flex items-center justify-center z-1 border rounded is-rounded:rounded-full"
        >
          <AnimationIndicator type="check" />
        </div>
      )}
    </div>
  );
}
