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
import { LoadingLine } from "../../components/animations/Animations";
import { getIconProps, Icon, type IconProps } from "../../components/icon/Icon";
import { useLayoutEffectDebugger } from "../../hooks/useEffectDebugger";
import { usePropToggle } from "../../hooks/usePropToggle";
import { useResize } from "../../hooks/useResize";
import {
  type ChildrenProp,
  type CollapseProps,
  type CssProp,
  type Elements,
  type TestProps,
} from "../../types";
import { ErrorBoundary } from "../boundary/ErrorBoundary";

export interface AsideProps
  extends ChildrenProp,
    CollapseProps,
    CssProp,
    TestProps {
  /**
   * page title
   */
  title?: React.ReactNode;
  /**
   * align inline-end
   */
  align?: "start" | "end";
  /**
   * icon path or props
   */
  icon?: IconProps;
  /**
   * header actions
   */
  actions?: Elements<JSX.Element>;
  /**
   * header class
   */
  headerClassName?: string;
  /**
   * header class
   */
  bodyClassName?: string;

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
 * A sidebar component that can be collapsed, resized, and has a flyout feature.
 * It supports a title, icon, actions, and loading state.
 * It can be aligned to the start or end of the page.
 *
 * @param {AsideProps} props - The properties for the Aside component.
 * @returns {JSX.Element} The rendered Aside component.
 *
 * @example
 * ```jsx
 * <Aside
 *   title="Sidebar Title"
 *   icon=icon-[mdi--menu]
 *   rtlFlip={true}
 *   className="custom-aside"
 *   bodyClassName="custom-aside-body"
 *   headerClassName="custom-aside-header"
 *   resizeable={true}
 *   flyout={true}
 *   onFlyout={() => console.log("Flyout triggered")}
 *   collapsed={false}
 *   collapsable={true}
 *   onCollapse={() => console.log("Collapsed toggled")}
 *   actions={<button>Action</button>}
 *   loading={false}
 *   align="start"
 *   width="20rem"
 *   minWidth="2rem"
 *   maxWidth="30vw"
 *   data-testid="aside-test"
 *   data-test-value="aside-value"
 * >
 *   <Content>This is the content of the aside.</Content>
 * </Aside>
 * ```
 *
 * @see {@link https://adarshpastakia.github.io/react-fabric/?path=/story/core-application--aside} for more details.
 */
export const Aside = ({
  children,
  title,
  icon,
  className,
  bodyClassName,
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
      className={classNames("fabric-aside", className, "overflow-hidden grid")}
      data-align={align}
      data-flyout={peek}
      data-loading={loading}
      data-collapsed={isCollapsed}
      style={isCollapsed ? undefined : widthStyles}
      data-testid={testId}
      data-test-value={testValue}
    >
      <header
        className={classNames(
          "fabric-asideHeader",
          headerClassName,
          "grid area-head items-center",
        )}
        data-ref="asideHeader"
      >
        {title && (
          <div
            className={classNames(
              "fabric-asideTitle",
              "truncate py-0.5 px-1 select-none pointer-events-none",
            )}
          >
            {title}
          </div>
        )}
        {collapsable && (
          <Icon
            aria-label={isCollapsed ? "expand" : "collapse"}
            className={classNames("fabric-asideCollapse", "p-2 select-none")}
            icon="icon-[mdi--chevron-left]"
            rtlFlip
            onClick={toggleCollapse}
            data-ref="asideToggle"
          />
        )}
        {icon && (
          <Icon
            className={classNames(
              "fabric-asideIcon",
              "p-1 text-lg select-none pointer-events-none",
            )}
            {...getIconProps(icon)}
          />
        )}
        {actions && <div className={"fabric-asideActions"}>{actions}</div>}
      </header>
      {loading && <LoadingLine />}
      {isCollapsed && (
        <div
          role="none"
          onClick={tryPeek}
          data-ref="asidePlaceholder"
          className={"fabric-asidePlaceholder"}
        />
      )}
      <section
        ref={elementRef}
        data-ref="asideBody"
        className={classNames(
          "fabric-asideBody",
          bodyClassName,
          "overflow-hidden grid",
        )}
        style={isCollapsed ? widthStyles : undefined}
      >
        <ErrorBoundary>{children}</ErrorBoundary>
      </section>
      {resizeable && (
        <div
          {...resizeHandleProps}
          className={classNames(
            "fabric-asideResizer",
            "before:absolute before:inset-0 before:w-1 before:top-1/2 before:-translate-y-1/2 before:transition-all before:delay-150",
          )}
        />
      )}
    </aside>
  );
};
