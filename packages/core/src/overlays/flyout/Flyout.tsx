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
import { isString } from "@react-fabric/utilities";
import classNames from "classnames";
import {
  Fragment,
  isValidElement,
  useCallback,
  useEffect,
  type ElementType,
  type PropsWithChildren,
} from "react";
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

export interface FlyoutProps
  extends AriaProps,
    TestProps,
    Omit<IconProps, "icon">,
    ChildrenProp {
  icon?: string | ElementType<IconProps>;
  /**
   * flyout alignment
   */
  align?: "start" | "end";
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
   * width
   */
  width?: string | number;
  /**
   * minimum width
   */
  minWidth?: string | number;
  /**
   * hide backdrop mask
   */
  hideMask?: boolean;
  /**
   * close flyout on any click
   */
  closeOnClick?: boolean;
  /**
   * close handler
   */
  onClose: (...args: AnyObject) => void;
  /**
   * before close handler, return false to prevent close
   */
  onBeforeClose?: (...args: AnyObject) => CallbackReturn;
}

export const Flyout = ({
  icon,
  iconBg,
  iconColor,
  iconClassName,
  rtlFlip,
  title,
  actions,
  closeOnClick,
  headerClassName,
  onClose,
  onBeforeClose,
  children,
  loading,
  size,
  width,
  minWidth,
  hideMask,
  align = "start",
  ...aria
}: FlyoutProps) => {
  const { refs, context } = useFloating({
    open: true,
    onOpenChange: () => {
      handleClose(false);
    },
  });
  const dismiss = useDismiss(context, {
    outsidePressEvent: "mousedown",
    outsidePress: !hideMask,
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
                ?.querySelector<HTMLElement>('[role="dialog"]')
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
    }, 50);
  }, []);

  const tryClosing = useCallback(
    (e: React.MouseEvent) => {
      if (
        !!closeOnClick ||
        (e.target as HTMLElement).closest("[data-flyout-dismiss='true']")
      ) {
        setTimeout(() => {
          handleClose();
        }, 100);
      }
    },
    [closeOnClick, handleClose],
  );

  const Wrapper = useCallback(
    ({ children }: PropsWithChildren) => {
      if (hideMask) return <Fragment>{children}</Fragment>;

      return (
        <FloatingOverlay
          lockScroll
          style={{ zIndex: "var(--z-overlay-mask)" }}
          className="bg-tint-100/10 backdrop-blur-sm transition-all"
        >
          {children}
        </FloatingOverlay>
      );
    },
    [hideMask, handleClose],
  );

  return (
    <FloatingPortal>
      <Wrapper>
        <FloatingFocusManager context={context}>
          <div
            data-align={align}
            className={classNames(
              "fabric-flyout",
              "fixed inset-y-0 overflow-hidden flex flex-col flex-nowrap pointer-events-auto shadow-xl",
              align === "start" ? "start-0" : "end-0",
              size === "sm" && "w-[20rem]",
              size === "md" && "w-[40rem]",
              size === "lg" && "w-[60vw]",
              size === "xl" && "w-[80vw]",
            )}
            style={{
              width,
              minWidth,
            }}
            onMouseUpCapture={tryClosing}
            ref={refs.setFloating}
            {...getFloatingProps()}
            {...aria}
            {...aria}
          >
            <HotKeyWrapper>
              <Header
                flex
                align="center"
                className={classNames("fabric-flyoutHeader", headerClassName)}
              >
                {isString(icon) && (
                  <Icon
                    icon={icon}
                    bg={iconBg}
                    color={iconColor}
                    className={classNames(iconClassName, "p-1")}
                    rtlFlip={rtlFlip}
                  />
                )}
                {isValidElement(icon) && icon}
                <label className="flex-1 truncate py-2 px-1">{title}</label>
                {actions}
                <Icon
                  data-ref="panelClose"
                  className={classNames(
                    "fabric-panelAction",
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
                  "fabric-flyoutBody",
                  "flex-1 grid overflow-hidden",
                )}
                {...({ tabIndex: 0 } as AnyObject)}
              >
                {children}
              </div>
            </HotKeyWrapper>
          </div>
        </FloatingFocusManager>
      </Wrapper>
    </FloatingPortal>
  );
};
