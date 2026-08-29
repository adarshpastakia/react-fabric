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

import { cn } from "@react-fabric/utilities";
import { useHotkeySequences } from "@tanstack/react-hotkeys";
import { Activity, useMemo } from "react";
import type { ContentProps } from "../../core/content/Content";
import type { HeadFootProps } from "../../core/headfoot/HeadFoot";
import { usePropToggle } from "../../hooks/usePropToggle";
import type { ChildrenProp, CollapseProps, CssPropWithMap, ExpandProps, TestProps } from "../../types";
import { LoadingLine } from "../animations/LoadingLine";
import { Icon } from "../icon/Icon";
import type { TitlebarProps } from "../titlebar/Titlebar";
import { Titlebar } from "../titlebar/Titlebar";

export interface PanelProps
  extends
    CssPropWithMap<{ root: string; body?: string; titlebar?: string; title?: string; icon?: string }>,
    TestProps,
    ExpandProps,
    CollapseProps,
    TitlebarProps,
    ChildrenProp<HeadFootProps | ContentProps> {
  /**
   * panel id used by panel stack
   */
  panelId?: string | number;
  /**
   * loading state
   */
  loading?: boolean;
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
   * maximum height
   */
  maxHeight?: string | number;
  /**
   * maximum width
   */
  maxWidth?: string | number;
  /**
   * close handler
   */
  onClose?: () => void;
}

/**
 * A component that represents a panel with a header, body, and optional actions.
 * It supports expandable and collapsible functionality, loading state, and customizable styles.
 * The panel can be resized and has a fixed position when expanded.
 * It can be customized with different colors, icons, and behaviors.
 * This component is useful for displaying content in a structured way, allowing users to interact with it through actions and toggles.
 * It can be used in various applications where panels are needed, such as dashboards, settings pages, or content management systems.
 *
 * @example
 * ```jsx
 * <Panel
 *   title="Panel Title"
 *   icon="icon-[mdi--info]"
 *   actions={<button>Action</button>}
 *   expandable
 *   collapsable
 *   onExpand={() => console.log("Expanded")}
 *   onCollapse={() => console.log("Collapsed")}
 *   onClose={() => console.log("Closed")}
 *   height="400px"
 *   width="300px"
 *   minHeight="200px"
 *   minWidth="200px"
 *   maxHeight="600px"
 *   maxWidth="600px"
 * >
 *   <p>This is the content of the panel.</p>
 * </Panel>
 * ```
 */
export function Panel({
  children,
  className,
  classNames,
  title,
  actions,
  icon,
  panelId,
  height,
  width,
  minHeight,
  minWidth,
  maxHeight,
  maxWidth,
  loading,
  expandable,
  expanded: _expanded,
  onExpand,
  collapsable,
  collapsed: _collapsed,
  onCollapse,
  onClose,
  // @ts-expect-error ignore
  onBack,
  ...aria
}: PanelProps) {
  const [collapsed, toggleCollapse] = usePropToggle(_collapsed, onCollapse, panelId);
  const [expanded, toggleExpand] = usePropToggle(_expanded, onExpand, panelId);

  const hasTools = useMemo(() => {
    return !!expandable || !!collapsable || !!onClose;
  }, [expandable, collapsable, onClose]);

  useHotkeySequences([
    { sequence: ["Escape"], callback: () => toggleExpand(), options: { enabled: expanded, conflictBehavior: "allow" } },
  ]);

  return (
    <div
      className={cn(
        "fabric-panel",
        className,
        "rounded-capped overflow-hidden outline grid group",
        expanded ? "fixed inset-4 z-50" : "relative",
        !collapsed && "not-last:border-b",
      )}
      data-ref="panel"
      data-collapsed={collapsed}
      style={
        expanded
          ? {}
          : collapsed
            ? { width, minWidth, maxWidth }
            : {
                height,
                width,
                minWidth,
                minHeight,
                maxWidth,
                maxHeight,
              }
      }
      {...aria}
    >
      <Titlebar
        title={title}
        icon={icon}
        onClick={() => toggleCollapse()}
        prepend={
          !!onBack && (
            <Icon
              rtlFlip
              data-ref="panelBack"
              className={cn("fabric-panelAction", "cursor-pointer pointer-events-auto")}
              icon="icon-[mdi--chevron-left]"
              // @ts-expect-error ignore
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
              onClick={onBack}
            />
          )
        }
        actions={
          <>
            {actions}
            {hasTools && (
              <div role="none" className="px-1 gap-px flex" onClick={(e) => e.stopPropagation()}>
                {expandable && (
                  <button
                    type="button"
                    className="size-fit cursor-pointer leading-none outline-none"
                    onClick={() => toggleExpand()}
                  >
                    <Icon
                      data-ref="panelExpand"
                      className={cn("fabric-panelAction", "cursor-pointer pointer-events-auto")}
                      icon={expanded ? "icon-[mdi--fullscreen-exit]" : "icon-[mdi--fullscreen]"}
                    />
                  </button>
                )}
                {!expanded && collapsable && (
                  <button
                    type="button"
                    className="size-fit cursor-pointer leading-none outline-none"
                    onClick={() => toggleCollapse()}
                  >
                    <Icon
                      data-ref="panelCollapse"
                      className={cn("fabric-panelAction", "cursor-pointer pointer-events-auto")}
                      icon={collapsed ? "icon-[mdi--plus-box-outline]" : "icon-[mdi--minus-box-outline]"}
                    />
                  </button>
                )}
                {!expanded && onClose && (
                  <button type="button" className="size-fit cursor-pointer leading-none outline-none" onClick={() => onClose()}>
                    <Icon
                      data-ref="panelClose"
                      className={cn("fabric-panelAction", "cursor-pointer pointer-events-auto")}
                      icon="icon-[mdi--close]"
                    />
                  </button>
                )}
              </div>
            )}
          </>
        }
        className={cn(classNames?.titlebar)}
        classNames={classNames}
      />
      <Activity mode={!collapsed || expanded ? "visible" : "hidden"}>
        <div data-ref="panelBody" className={cn("fabric-panelBody", classNames?.body, "area-content grid overflow-hidden")}>
          {loading && <LoadingLine />}
          {children}
        </div>
      </Activity>
    </div>
  );
}
