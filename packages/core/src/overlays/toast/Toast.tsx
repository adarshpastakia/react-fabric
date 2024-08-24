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
import { Fragment, useCallback, useLayoutEffect, useMemo, useRef } from "react";
import { useTranslation } from "react-i18next";
import { AnimationIndicator } from "../../components/animations/Animations";
import { Button } from "../../components/button/Button";
import { Icon } from "../../components/icon/Icon";
import { type ColorType, type Elements, type IconProps } from "../../types";
import { CoreIcons } from "../../types/icons";
import { getBgClass, getBorderClass, getColorClass } from "../../utils";
import classes from "./Toast.module.css";

export interface ToastProps extends Omit<IconProps, "iconBg" | "iconColor"> {
  /**
   * toast type
   */
  type?: "alert" | "confirm";
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

export const Toast = ({
  title,
  message,
  color = "primary",
  icon,
  rtlFlip,
  actions,
  // @ts-expect-error internal prop
  onClose,
  // @ts-expect-error internal prop
  onCloseAll,
  type,
  okLabel,
  cancelLabel,
}: ToastProps) => {
  const { t } = useTranslation("core");

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

  const elRef = useRef<HTMLDivElement>(null);
  const handleClose = useCallback(
    (ret?: AnyObject) => {
      elRef.current && (elRef.current.dataset.show = "false");
      setTimeout(() => {
        onClose(ret);
      }, 250);
    },
    [onClose],
  );
  useLayoutEffect(() => {
    setTimeout(
      () => elRef.current && (elRef.current.dataset.show = "true"),
      100,
    );
  }, []);

  return (
    <div
      role="alert"
      className={classNames(
        classes.toast,
        getBorderClass(color + "-300"),
        "flex flex-nowrap max-w-sm bg-base min-w-72 border pointer-events-auto relative overflow-hidden rounded-capped mt-4 select-none",
      )}
      ref={elRef}
    >
      <div
        className={classNames("flex-initial p-2", getBgClass(color + "-100"))}
      >
        {iconType}
      </div>
      <div
        className={classNames(
          getBgClass(color + "-50/50"),
          "flex flex-col flex-1 flex-nowrap overflow-hidden p-2",
        )}
      >
        <div className="flex flex-nowrap gap-2 items-start">
          <div className="font-medium flex-1">{title}</div>
          <div>
            <Button
              size="sm"
              variant="link"
              className="m-0"
              color={color}
              icon={CoreIcons.closeAll}
              aria-label="close-all"
              onClick={onCloseAll}
            />
            <Button
              size="sm"
              variant="link"
              className="m-0"
              color={color}
              icon={CoreIcons.close}
              aria-label="close"
              onClick={() => handleClose(false)}
            />
          </div>
        </div>
        <div>{message}</div>
        {(type === "confirm" || actions) && (
          <div className="flex gap-1 justify-end flex-nowrap pt-2">
            <div
              className="contents"
              onClickCapture={(e) => handleClose((e.target as AnyObject).value)}
            >
              {actions}
            </div>
            {type === "confirm" && (
              <Fragment>
                <div className="flex-1" />
                <Button
                  size="sm"
                  variant="link"
                  color={color}
                  onClick={() => handleClose(false)}
                >
                  {cancelLabel ?? t("action.cancel", "Cancel")}
                </Button>
                <Button
                  size="sm"
                  variant="solid"
                  color={color}
                  onClick={() => handleClose(true)}
                >
                  {okLabel ?? t("action.ok", "OK")}
                </Button>
              </Fragment>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
