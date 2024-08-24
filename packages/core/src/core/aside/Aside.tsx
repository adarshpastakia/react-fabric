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
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Loading } from "../../components/animations/Animations";
import { Icon } from "../../components/icon/Icon";
import { useLayoutEffectDebugger } from "../../hooks/useEffectDebugger";
import { usePropToggle } from "../../hooks/usePropToggle";
import { useResize } from "../../hooks/useResize";
import {
  type ChildrenProp,
  type CollapseProps,
  type Elements,
  type IconProps,
  type TestProps,
} from "../../types";
import { CoreIcons } from "../../types/icons";
import { ErrorBoundary } from "../boundary/ErrorBoundary";
import classes from "./Aside.module.css";

export interface AsideProps
  extends IconProps,
    ChildrenProp,
    CollapseProps,
    TestProps {
  /**
   * page title
   */
  title?: string;
  /**
   * align inline-end
   */
  align?: "start" | "end";
  /**
   * header actions
   */
  actions?: Elements<JSX.Element>;
  /**
   * header class
   */
  headerClassName?: string;

  /**
   * show loading indicator
   */
  loading?: boolean;
  /**
   * allow resize
   */
  resizeable?: boolean;
  /**
   * allow flyout with collapsed
   */
  flyout?: boolean;
  /**
   * event handler when shown
   */
  onFlyout?: () => void;

  /**
   * fixed width
   */
  width?: number | string;
  /**
   * max width
   */
  maxWidth?: number | string;
  /**
   * min width
   */
  minWidth?: number | string;
}

/**
 * Side panel
 */
export const Aside = ({
  children,
  title,
  icon,
  iconBg,
  iconColor,
  rtlFlip,
  headerClassName,
  resizeable,
  flyout,
  onFlyout,
  collapsed,
  collapsable,
  onCollapse,
  actions,
  loading,
  align = "start",
  width: wd = "20rem",
  minWidth = "2rem",
  maxWidth = "30vw",
  "data-testid": testId,
  "data-test-value": testValue,
}: AsideProps) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(wd);
  const [peek, setPeek] = useState(false);

  const [isCollapsed, toggleCollapse] = usePropToggle(collapsed, onCollapse);

  useEffect(() => {
    setWidth(wd);
  }, [wd]);

  const handleResize = useRef(({ x }: { x: number }) => {
    if (elementRef.current != null) {
      setWidth(elementRef.current.offsetWidth + x);
    }
  });
  const resizeHandleProps = useResize(handleResize.current, {
    isReverse: align === "end",
  });

  const tryPeek = useCallback(() => {
    if (isCollapsed) {
      if (flyout) {
        setPeek(!peek);
        !peek && onFlyout?.();
      } else {
        void toggleCollapse();
      }
    }
  }, [peek, flyout, isCollapsed, onFlyout, toggleCollapse]);

  useLayoutEffectDebugger(
    () => {
      if (peek) {
        const handler = (e: MouseEvent) => {
          if (
            (e.target as HTMLElement).closest(`[data-ref="asideBody"]`) ==
              null &&
            (e.target as HTMLElement).closest(
              `[data-ref="asidePlaceholder"]`,
            ) == null
          ) {
            setPeek(false);
          }
        };
        document.addEventListener("mouseup", handler);

        return () => document.removeEventListener("mouseup", handler);
      }
    },
    [peek],
    "Aside peek",
  );

  const widthStyles = useMemo(
    () => ({
      width,
      minWidth,
      maxWidth,
    }),
    [width, minWidth, maxWidth],
  );

  return (
    <aside
      className={classNames(classes.aside, "overflow-hidden grid")}
      data-align={align}
      data-flyout={peek}
      data-collapsed={isCollapsed}
      style={isCollapsed ? undefined : widthStyles}
      data-testid={testId}
      data-test-value={testValue}
    >
      <header
        className={classNames(
          classes.asideHeader,
          headerClassName,
          "grid area-head items-center",
        )}
      >
        {title && (
          <div
            className={classNames(
              classes.asideTitle,
              "truncate py-0.5 px-1 select-none pointer-events-none",
            )}
          >
            {title}
          </div>
        )}
        {collapsable && (
          <Icon
            aria-label={isCollapsed ? "expand" : "collapse"}
            className={classNames(classes.asideCollapse, "p-2 select-none")}
            icon={CoreIcons.chevronLeft}
            rtlFlip
            onClick={toggleCollapse}
            data-ref="asideToggle"
          />
        )}
        {icon && (
          <Icon
            icon={icon}
            bg={iconBg}
            color={iconColor}
            rtlFlip={rtlFlip}
            className={classNames(
              classes.asideIcon,
              "p-1 text-lg select-none pointer-events-none",
            )}
          />
        )}
        {actions && <div className={classes.asideActions}>{actions}</div>}
      </header>
      {loading && <Loading />}
      {isCollapsed && (
        <div
          role="none"
          onClick={tryPeek}
          data-ref="asidePlaceholder"
          className={classes.asidePlaceholder}
        />
      )}
      <section
        ref={elementRef}
        data-ref="asideBody"
        className={classNames(classes.asideBody, "overflow-hidden grid")}
        style={isCollapsed ? widthStyles : undefined}
      >
        <ErrorBoundary>{children}</ErrorBoundary>
      </section>
      {resizeable && (
        <div
          {...resizeHandleProps}
          className={classNames(
            classes.asideResizer,
            "before:absolute before:inset-0 before:w-1 before:top-1/2 before:-translate-y-1/2 before:transition-all",
          )}
        />
      )}
    </aside>
  );
};
