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
import { useCallback, useEffect } from "react";
import { Loading } from "../../components/animations/Animations";
import { Icon } from "../../components/icon/Icon";
import { Header } from "../../core/headfoot/HeadFoot";
import { HotKeyWrapper } from "../../hotkeys/HotKeyWrapper";
import {
  type AriaProps,
  type CallbackReturn,
  type ChildrenProp,
  type Elements,
  type IconProps,
  type TestProps,
} from "../../types";
import { CoreIcons } from "../../types/icons";
import classes from "./Modal.module.css";

export interface ModalProps
  extends AriaProps,
    TestProps,
    IconProps,
    ChildrenProp {
  /**
   * header className
   */
  headerClassName?: string;
  /**
   * icon className
   */
  iconClassName?: string;
  /**
   * show loading indicator
   */
  loading?: boolean;
  /**
   * modal title
   */
  title?: JSX.Element | string | false;
  /**
   * header actions
   */
  actions?: Elements<JSX.Element>;
  /**
   * modal size
   */
  size?: "sm" | "md" | "lg" | "xl" | "screen";
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
   * close handler
   */
  onClose: (...args: AnyObject) => void;
  /**
   * before close handler, return false to prevent close
   */
  onBeforeClose?: (...args: AnyObject) => CallbackReturn;
}

export const Modal = ({
  icon,
  iconBg,
  iconColor,
  iconClassName,
  rtlFlip,
  title,
  actions,
  headerClassName,
  onClose,
  onBeforeClose,
  children,
  loading,
  size,
  width,
  height,
  minHeight,
  minWidth,
  ...aria
}: ModalProps) => {
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

  const handleClose = useCallback(
    (...args: AnyObject) => {
      void Promise.resolve(onBeforeClose?.(...args)).then((ret) => {
        if (ret !== false) {
          refs.floating.current &&
            (refs.floating.current.dataset.show = "false");
          setTimeout(() => {
            onClose?.(...args);
          }, 250);
        }
        ret === false &&
          setTimeout(
            () =>
              refs.floating.current
                ?.querySelector<HTMLElement>("[role='dialog']")
                ?.focus(),
            50,
          );
      });
    },
    [onBeforeClose, onClose],
  );

  useEffect(() => {
    setTimeout(() => {
      refs.floating.current && (refs.floating.current.dataset.show = "true");
      refs.floating.current
        ?.querySelector<HTMLElement>("[role='dialog']")
        ?.focus();
    }, 50);
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
            className={classNames(
              classes.modal,
              "rounded-capped relative overflow-hidden flex flex-col flex-nowrap",
              "ring-1 ring-tint-100 ring-offset-1 focus-within:ring-primary-300 shadow-xl",
              size === "sm" && "w-[20rem]",
              size === "md" && "w-[40rem]",
              size === "lg" && "w-[60vw]",
              size === "xl" && "w-[80vw]",
              size === "screen" && "w-screen h-screen",
            )}
            style={{
              width,
              height,
              minHeight,
              minWidth,
            }}
            ref={refs.setFloating}
            {...getFloatingProps()}
            {...aria}
          >
            <HotKeyWrapper>
              <Header
                flex
                className={classNames(classes.modalHeader, headerClassName)}
              >
                {icon && (
                  <Icon
                    icon={icon}
                    bg={iconBg}
                    color={iconColor}
                    className={classNames(iconClassName, "p-1")}
                    rtlFlip={rtlFlip}
                  />
                )}
                <label className="flex-1 truncate py-2 px-1">{title}</label>
                {actions}
                <Icon
                  data-ref="panelClose"
                  className={classNames(
                    classes.panelAction,
                    "cursor-pointer p-1 text-xl self-stretch",
                  )}
                  icon={CoreIcons.close}
                  onClick={() => handleClose(false)}
                />
              </Header>
              {loading && <Loading />}
              <div
                role="dialog"
                className={classNames(
                  classes.modalBody,
                  "flex-1 grid overflow-hidden",
                )}
                {...({ tabIndex: 0 } as AnyObject)}
              >
                {children}
              </div>
            </HotKeyWrapper>
          </dialog>
        </FloatingFocusManager>
      </FloatingOverlay>
    </FloatingPortal>
  );
};
