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
import { type ColorState, type Elements } from "../../types";
import { CoreIcons } from "../../types/icons";
import { getColor } from "../../utils";

export interface ToastProps {
  /**
   * toast type
   */
  type?: "alert" | "confirm";
  /**
   * svg path / webfont className / 1-4 letter text
   */
  icon: string;
  /**
   * icon image source URL, if failed to load then shows icon
   */
  iconSrc?: string;
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
  message: string | JSX.Element;
  /**
   * theme color
   */
  color?: ColorState;
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
  iconSrc,
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
        <Icon
          icon={icon}
          iconSrc={iconSrc}
          size="md"
          rtlFlip={rtlFlip}
          color={color + "-600"}
        />
      );
    switch (color) {
      case "danger":
        return <AnimationIndicator type="cross" color={"danger-600"} />;
      case "success":
        return <AnimationIndicator type="check" color={"success-600"} />;
      case "warning":
        return <AnimationIndicator type="exclaim" color={"warning-600"} />;
      default:
        return (
          <AnimationIndicator
            type={type === "confirm" ? "question" : "info"}
            color={`${color}-600`}
          />
        );
    }
  }, [color, type, icon, iconSrc, rtlFlip]);

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
        "fabric-toast",
        "flex flex-nowrap max-w-sm bg-base min-w-72 border pointer-events-auto relative overflow-hidden rounded-capped mt-4 select-none",
      )}
      style={{
        borderColor: getColor(color + "-300"),
      }}
      ref={elRef}
    >
      <div
        className={classNames("flex-initial p-2")}
        style={{
          backgroundColor: getColor(color + "-300"),
        }}
      >
        {iconType}
      </div>
      <div
        className={classNames(
          "flex flex-col flex-1 flex-nowrap overflow-hidden p-2",
        )}
        style={{
          backgroundColor: getColor(color + "-50"),
        }}
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
