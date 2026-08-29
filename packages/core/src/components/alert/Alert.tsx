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

import {
  FloatingFocusManager,
  FloatingOverlay,
  FloatingPortal,
  useDismiss,
  useFloating,
  useInteractions,
  useRole,
} from "@floating-ui/react";
import { cn } from "@react-fabric/utilities";
import { useLayoutEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { AnimationIndicator } from "../../components/animations/Indicator";
import { Button } from "../../components/button/Button";
import { Icon } from "../../components/icon/Icon";
import type { ColorBase } from "../../types";
import { Title } from "../../typography/Title";
import { getColor } from "../../utils";

interface AlertBaseProps {
  /**
   * toast type
   */
  type?: "alert" | "confirm" | "prompt";
  /**
   * svg path / webfont className / 1-4 letter text
   */
  icon?: string;
  /**
   * flip icon in rtl
   */
  rtlFlip?: boolean;
  /**
   * toast title
   */
  title?: string;
  /**
   * toast text
   */
  message: string | React.ReactElement;
  /**
   * theme color
   */
  color?: ColorBase;
  /**
   * extra action button
   */
  actions?: React.ReactNode;
  /**
   * ok label
   */
  okLabel?: string;
  /**
   * cancel label
   */
  cancelLabel?: string;
  /**
   * placeholder for prompt
   */
  placeholder?: string;
  /**
   * default value for prompt
   */
  defaultValue?: string;
  multiline?: boolean;
}

export type AlertProps = AlertBaseProps &
  (
    | {
        type?: "alert";
        okLabel?: string;
        cancelLabel?: never;
        placeholder?: never;
        defaultValue?: never;
        multiline?: never;
      }
    | {
        type: "confirm";
        okLabel?: string;
        cancelLabel?: string;
        placeholder?: never;
        defaultValue?: never;
        multiline?: never;
      }
    | {
        type: "prompt";
        okLabel?: string;
        cancelLabel?: string;
        placeholder?: string;
        defaultValue?: string;
        multiline?: boolean;
      }
  );

export function Alert({
  title,
  message,
  color = "primary",
  icon,
  rtlFlip,
  actions,
  onClose,
  type = "alert",
  multiline,
  okLabel,
  cancelLabel,
  placeholder,
  defaultValue,
}: AlertProps & { onClose?: (ret?: string | boolean) => void }) {
  const { t } = useTranslation("core");
  const [value, setValue] = useState(() => defaultValue);
  const { refs, context } = useFloating({
    open: true,
    onOpenChange: () => {
      handleClose(false);
    },
  });
  const dismiss = useDismiss(context, {
    outsidePressEvent: "mousedown",
    escapeKey: true,
  });
  const role = useRole(context);

  // Merge all the interactions into prop getters
  const { getFloatingProps } = useInteractions([dismiss, role]);

  const iconType = useMemo(() => {
    if (icon) return <Icon icon={icon} size="md" rtlFlip={rtlFlip} color={`${color}-600`} />;
    switch (color) {
      case "danger":
        return <AnimationIndicator type="cross" className="text-danger-600" />;
      case "success":
        return <AnimationIndicator type="check" className="text-success-600" />;
      case "warning":
        return <AnimationIndicator type="exclaim" className="text-warning-600" />;
      default:
        return <AnimationIndicator type={type === "confirm" ? "question" : "info"} className={`text-${color}-600`} />;
    }
  }, [color, type, icon, rtlFlip]);

  const handleClose = (ret?: string | boolean) => {
    if (refs.floating.current) refs.floating.current.dataset.show = "false";
    setTimeout(() => {
      onClose?.(ret);
    }, 250);
  };
  useLayoutEffect(() => {
    const tmr = setTimeout(() => refs.floating.current && (refs.floating.current.dataset.show = "true"), 100);
    return () => {
      clearTimeout(tmr);

      try {
        // call on close to kill the promise if unloaded without using close actions
        onClose?.(false);
      } catch {
        //
      }
    };
  }, [refs.floating, onClose]);

  const E = multiline ? "textarea" : "input";

  return (
    <FloatingPortal>
      <FloatingOverlay
        lockScroll
        style={{ zIndex: "var(--z-overlay-mask)" }}
        className="bg-tint-100/50 backdrop-blur-sm grid place-items-center"
      >
        <FloatingFocusManager context={context} modal>
          <dialog
            role="alertdialog"
            className={cn(
              "fabric-alert",
              "grid bg-default border-2 pointer-events-auto overflow-hidden rounded-capped select-none",
              "min-w-72 max-w-sm py-2 px-6 relative outline-0 shadow-lg",
            )}
            style={{
              borderColor: getColor(`${color}-300`),
            }}
            ref={(el) => refs.setFloating(el)}
            {...getFloatingProps()}
          >
            <div className={cn("area-[icon] self-start text-2xl")}>{iconType}</div>
            <div className="area-[message]">
              {title && <Title className="font-medium">{title}</Title>}
              <div>{message}</div>
            </div>
            {type === "prompt" && (
              <E
                value={value}
                placeholder={placeholder}
                className={cn(`area-[input] appearance-none outline-0 border rounded w-full px-2 py-1`)}
                style={
                  {
                    borderColor: getColor(`${color}-200`),
                    "--tw-ring-color": getColor(`${color}-500`),
                  } as React.CSSProperties
                }
                ref={(e: HTMLInputElement | HTMLTextAreaElement | null) => {
                  if (e !== null) setTimeout(() => e.focus(), 100);
                }}
                onBlur={(e) => e.target.focus()}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={(e) => !e.shiftKey && e.key === "Enter" && handleClose(value)}
              />
            )}
            <div className="flex gap-1 justify-center flex-nowrap pt-2 area-[actions]">
              {type === "confirm" && (
                <Button size="sm" variant="link" color={color} onClick={() => handleClose(false)}>
                  {cancelLabel ?? t("action.cancel", "Cancel")}
                </Button>
              )}
              <div className="contents" onClickCapture={(e) => handleClose((e.target as HTMLElement).dataset.value)}>
                {actions}
              </div>
              <Button size="sm" variant="solid" color={color} onClick={() => handleClose(type === "prompt" ? value : true)}>
                {okLabel ?? t("action.ok", "OK")}
              </Button>
            </div>
            <div className="absolute top-2 inset-e-0">
              <Button
                size="sm"
                variant="link"
                className="m-0"
                color={color}
                onClick={() => handleClose(false)}
                icon="icon-[mdi--close]"
                aria-label="close"
              />
            </div>
          </dialog>
        </FloatingFocusManager>
      </FloatingOverlay>
    </FloatingPortal>
  );
}
