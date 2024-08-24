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
import classNames from "classnames";
import { useCallback, useLayoutEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { AnimationIndicator } from "../../components/animations/Animations";
import { Button } from "../../components/button/Button";
import { Icon } from "../../components/icon/Icon";
import { type ColorType, type Elements, type IconProps } from "../../types";
import { CoreIcons } from "../../types/icons";
import { Title } from "../../typography/Title";
import { getBorderClass, getColorClass } from "../../utils";
import classes from "./Alert.module.css";

export interface AlertProps extends Omit<IconProps, "iconBg" | "iconColor"> {
  /**
   * toast type
   */
  type?: "alert" | "confirm" | "prompt";
  /**
   * toast title
   */
  title?: string;
  /**
   * toast text
   */
  message: string | JSX.Element;
  /**
   * theme color
   */
  color?: ColorType;
  /**
   * extra action button
   */
  actions?: Elements<JSX.Element>;
  /**
   * ok label
   */
  okLabel?: string;
  /**
   * cancel label
   */
  cancelLabel?: string;
}

export const Alert = ({
  title,
  message,
  color = "primary",
  icon,
  rtlFlip,
  actions,
  // @ts-expect-error internal prop
  onClose,
  type,
  okLabel,
  cancelLabel,
}: AlertProps) => {
  const { t } = useTranslation("core");
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
    if (icon)
      return (
        <Icon icon={icon} size="md" rtlFlip={rtlFlip} color={color + "-600"} />
      );
    switch (color) {
      case "danger":
        return (
          <AnimationIndicator
            type="cross"
            className={getColorClass(color + "-600")}
          />
        );
      case "success":
        return (
          <AnimationIndicator
            type="check"
            className={getColorClass(color + "-600")}
          />
        );
      case "warning":
        return (
          <AnimationIndicator
            type="exclaim"
            className={getColorClass(color + "-600")}
          />
        );
      default:
        return (
          <AnimationIndicator
            type={type === "confirm" ? "question" : "info"}
            className={getColorClass(color + "-600")}
          />
        );
    }
  }, [color, type, icon]);

  const handleClose = useCallback(
    (ret: AnyObject) => {
      refs.floating.current && (refs.floating.current.dataset.show = "false");
      setTimeout(() => {
        onClose(ret);
      }, 250);
    },
    [onClose],
  );
  useLayoutEffect(() => {
    setTimeout(
      () =>
        refs.floating.current && (refs.floating.current.dataset.show = "true"),
      100,
    );
  }, []);

  return (
    <FloatingPortal>
      <FloatingOverlay
        lockScroll
        style={{ zIndex: "var(--z-overlay-mask)" }}
        className="bg-base/50 backdrop-blur-sm grid place-items-center"
      >
        <FloatingFocusManager context={context}>
          <dialog
            role="alertdialog"
            className={classNames(
              classes.alert,
              getBorderClass(color + "-300"),
              "grid bg-base border-2 pointer-events-auto overflow-hidden rounded-capped select-none",
              "min-w-72 max-w-sm p-6 relative outline-0 shadow-lg",
            )}
            ref={refs.setFloating}
            {...getFloatingProps()}
          >
            <div className={classNames("area-[icon] text-lg py-2")}>
              {iconType}
            </div>

            <Title className="font-medium area-[title]">{title}</Title>
            <p className="area-[message] py-4">{message}</p>
            <div className="area-[message]">{message}</div>
            <div className="flex gap-1 justify-center flex-nowrap pt-2 area-[actions]">
              <div
                className="contents"
                onClickCapture={(e) =>
                  handleClose((e.target as AnyObject).value)
                }
              >
                {actions}
              </div>
              {type === "confirm" && (
                <Button
                  size="sm"
                  variant="link"
                  color={color}
                  onClick={() => handleClose(false)}
                >
                  {cancelLabel ?? t("action.cancel", "Cancel")}
                </Button>
              )}
              <Button
                size="sm"
                variant="solid"
                color={color}
                onClick={() => handleClose(true)}
              >
                {okLabel ?? t("action.ok", "OK")}
              </Button>
            </div>
            <div className="absolute top-2 end-2">
              <Button
                size="sm"
                variant="link"
                className="m-0"
                color={color}
                onClick={() => handleClose(false)}
                icon={CoreIcons.close}
                aria-label="close"
              />
            </div>
          </dialog>
        </FloatingFocusManager>
      </FloatingOverlay>
    </FloatingPortal>
  );
};
