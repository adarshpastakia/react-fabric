/**
 * React Fabric
 * @version 1.0.0
 * @license MIT
 * @copyright 2024 Adarsh Pastakia
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import { cn } from "@react-fabric/utilities";
import { Activity, useEffect, useMemo, useRef, useState } from "react";
import { StyleEffect } from "../../components/effect/StyleEffect";
import { Icon } from "../../components/icon/Icon";
import type { TitlebarProps } from "../../components/titlebar/Titlebar";
import { Titlebar } from "../../components/titlebar/Titlebar";
import { useGlobals } from "../../context/context";
import { useLayoutEffectDebugger } from "../../hooks/useEffectDebugger";
import { usePropState } from "../../hooks/usePropState";
import { usePropToggle } from "../../hooks/usePropToggle";
import { useResize } from "../../hooks/useResize";
import type { ChildrenProp, CollapseProps, CssPropWithMap, TestProps } from "../../types";
import { getIconProps } from "../../utils";
import { ErrorBoundary } from "../boundary/ErrorBoundary";

export interface AsideProps
  extends
    ChildrenProp,
    CollapseProps,
    CssPropWithMap<{
      root?: string;
      titlebar?: string;
      body?: string;
      title?: string;
      icon?: string;
      actions?: string;
    }>,
    TestProps {
  /**
   * align inline-end
   */
  align?: "start" | "end";

  /**
   * margin (uses tailwind spacing calculation, ie. 2 = 0.5rem)
   */
  margin?: number;

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
  enableFlyout?: boolean;
  /**
   * event handler when shown
   */
  onFlyout?: () => void;

  id?: string;
  hideCollapseHandle?: boolean;

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
  /**
   * Resize event
   */
  onResize?: (width: number) => void;
}

/**
 * A sidebar component that can be collapsed, resized, and has a flyout feature.
 * It supports a title, icon, actions, and loading state.
 * It can be aligned to the start or end of the page.
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
 */
export function Aside({
  children,
  title,
  icon,
  id,
  margin,
  hideCollapseHandle,
  className,
  classNames,
  resizeable,
  enableFlyout,
  onFlyout,
  onResize,
  collapsed: _collapsed,
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
}: AsideProps & TitlebarProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = usePropState(wd);
  const [peek, setPeek] = useState(false);
  const { registerArea, unregisterArea } = useGlobals();

  const [collapsed, onToggle] = usePropToggle(_collapsed, onCollapse);

  const handleResizeRef = useRef(({ x }: { x: number }) => {
    if (elementRef.current != null) {
      if (x !== 0) setWidth(elementRef.current.offsetWidth + x);
    }
  });
  const { ref, isResizing, onMouseDown } = useResize(handleResizeRef.current, {
    isReverse: align === "end",
    onEnd() {
      const width = (ref.current?.parentElement as HTMLElement)?.offsetWidth;
      setWidth(width);
      onResize?.(width ?? 0);
    },
  });

  const tryPeek = (force?: boolean) => {
    if (collapsed) {
      if (enableFlyout) {
        setPeek(force ?? !peek);
        if (force ?? !peek) onFlyout?.();
      } else {
        void onToggle(force);
      }
    }
  };

  useLayoutEffectDebugger(
    () => {
      if (!isResizing && peek) {
        const handler = (e: MouseEvent) => {
          if (
            (e.target as HTMLElement).closest(`[data-dismiss="true"]`) !== null ||
            ((e.target as HTMLElement).closest(`[data-ref="aside-container"]`) === null &&
              (e.target as HTMLElement).closest(`[data-ref="aside-placeholder"]`) === null)
          ) {
            setPeek(false);
          }
        };
        document.addEventListener("mouseup", handler);

        return () => document.removeEventListener("mouseup", handler);
      }
    },
    [peek, isResizing],
    "Aside peek",
  );

  useEffect(() => {
    if (id) {
      registerArea(id, (open) => {
        tryPeek(open);
      });
      return () => unregisterArea(id);
    }
    // eslint-disable-next-line @eslint-react/exhaustive-deps
  }, [id]);

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
      className={cn("fabric-aside", className, "grid relative min-h-0 z-2", collapsed && (enableFlyout ? "w-fit" : "w-0"))}
      data-align={align}
      data-peek={peek}
      data-flyout={enableFlyout}
      data-loading={loading}
      data-collapsed={collapsed}
      data-testid={testId}
      data-test-value={testValue}
      data-ref="aside"
      style={
        {
          "--aside-margin": `calc(var(--spacing) * ${margin ?? 0})`,
        } as React.CSSProperties
      }
    >
      {collapsed && enableFlyout && (
        <div
          role="none"
          onClick={() => tryPeek()}
          data-ref="aside-placeholder"
          className={cn("fabric-asidePlaceholder", classNames?.root, classNames?.body, "overflow-hidden")}
        >
          <StyleEffect />
          {icon && (
            <Icon
              className={cn("fabric-asideIcon", classNames?.icon, "p-1 text-lg select-none pointer-events-none")}
              {...getIconProps(icon)}
            />
          )}
          <div
            data-ref="aside-title"
            className={cn("fabric-asideTitle", classNames?.title, "truncate py-0.5 px-1 select-none pointer-events-none")}
          >
            {title}
          </div>
          <div
            role="none"
            data-dismiss="true"
            className="area-[pin] p-2 hover:bg-primary-500/10 cursor-pointer flex items-center justify-center"
            onMouseDown={(e) => e.stopPropagation()}
            onClick={() => onToggle()}
          >
            <Icon icon="icon-[mdi--pin-outline]" className="rotate-30" />
          </div>
        </div>
      )}
      <div
        data-ref="aside-container"
        className={cn("fabric-asideContainer", classNames?.root, "overflow-hidden grid")}
        ref={elementRef}
        style={widthStyles}
      >
        <StyleEffect />
        <Titlebar title={title} icon={icon} actions={actions} className={classNames?.titlebar} />
        <Activity mode={peek || !collapsed ? "visible" : "hidden"}>
          <ErrorBoundary>{children}</ErrorBoundary>
        </Activity>

        {enableFlyout && !hideCollapseHandle && (
          <div
            role="none"
            data-dismiss="true"
            className="area-[pin] p-2 hover:bg-primary-500/10 cursor-pointer flex items-center justify-center bg-tint-500/10"
            onMouseDown={(e) => e.stopPropagation()}
            onClick={() => onToggle()}
          >
            {!collapsed ? <Icon icon="icon-[mdi--pin]" /> : <Icon icon="icon-[mdi--pin-outline]" className="rotate-30" />}
          </div>
        )}

        <div
          ref={ref}
          role="none"
          data-ref="resize-handle"
          onMouseDown={onMouseDown}
          className={cn(
            "fabric-asideResizer relative",
            "after:absolute after:transform-[height] after:border-dotted after:border-s-2 after:h-0 after:m-auto after:inset-y-0 after:border-s-tint-500",
            resizeable && "hover:after:duration-500 hover:after:h-full",
            isResizing && "after:h-full",
            resizeable
              ? "w-1 cursor-col-resize bg-tint-50 border-x border-tint-300/50 -mx-px"
              : "w-0 border-0 pointer-events-none",
          )}
        />
      </div>
      {collapsable && !enableFlyout && !hideCollapseHandle && (
        <div
          role="none"
          className={cn(
            "absolute z-1 h-16 w-2 py-6 leading-0 m-auto inset-y-0",
            "bg-dimmed text-dimmed outline outline-tint-200/50 rounded-sm cursor-pointer pointer-events-auto",
            align === "start" ? "rounded-s-none -inset-e-2" : "rounded-e-none -inset-s-2",
            !collapsed && "opacity-70 hover:opacity-100 hover:bg-default hover:outline-default",
          )}
          onMouseDown={(e) => e.stopPropagation()}
          onClick={() => onToggle()}
        >
          <i
            className={
              "-ms-1 inline-block rtl:-scale-100 " +
              ((collapsed && align === "start") || (!collapsed && align === "end")
                ? "icon-[mdi--chevron-right]"
                : "icon-[mdi--chevron-left]")
            }
          />
        </div>
      )}
    </aside>
  );
}
