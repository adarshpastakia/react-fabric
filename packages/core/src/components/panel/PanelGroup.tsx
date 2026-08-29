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
import { Children, cloneElement, isValidElement, useState } from "react";
import { useEffectDebugger, useMemoDebugger } from "../../hooks/useEffectDebugger";
import type { ChildrenProp } from "../../types";
import { cloneChildren } from "../../utils";
import type { PanelProps } from "./Panel";

export interface PanelGroupProps extends ChildrenProp {
  /**
   * active panel id / index
   */
  activePanel?: string | number;
  /**
   * active change callback
   */
  onActiveChange?: (panelId: string | number) => void;
}

/**
 * A component that groups multiple panels together, allowing for one panel to be expanded at a time.
 * This component allows you to manage a group of panels where only one can be expanded at a time.
 * It accepts an `activePanel` prop to control which panel is currently expanded,
 * and an `onActiveChange` callback that is triggered when the active panel changes.
 * It uses the `Panel` component to render each individual panel within the group.
 *
 * @example
 * ```jsx
 * <PanelGroup
 *   activePanel="panel1"
 *   onActiveChange={(panelId) => console.log(`Active panel changed to: ${panelId}`)}
 * >
 *   <Panel panelId="panel1" title="Panel 1">Content for Panel 1</Panel>
 *   <Panel panelId="panel2" title="Panel 2">Content for Panel 2</Panel>
 *   <Panel panelId="panel3" title="Panel 3">Content for Panel 3</Panel>
 * </PanelGroup>
 * ```
 */
export function PanelGroup({ children, activePanel, onActiveChange }: PanelGroupProps) {
  const [expandedPanel, setExpandedPanel] = useState<string | number>();

  const panels = useMemoDebugger(
    () =>
      // eslint-disable-next-line @eslint-react/no-children-to-array
      Children.toArray(children).map(
        (child, index: number) => (isValidElement<{ panelId: string }>(child) ? child.props?.panelId : "") || index,
      ),
    [children],
    "PanelGroup children",
  );

  useEffectDebugger(
    () => {
      setExpandedPanel(activePanel ?? panels[0]);
    },
    [activePanel, panels],
    "PanelGroup setActive",
  );

  const changeExpanded = (collapsed: boolean, id: string | number, handler?: (args: boolean) => void) => {
    if (!collapsed) {
      setExpandedPanel(id);
      onActiveChange?.(id);
    }
    handler?.(collapsed);
    return id !== expandedPanel;
  };

  return (
    <div data-ref="panelGroup" className={cn("fabric-panelGroup", "flex flex-col overflow-auto scroll-thin area-content p-px")}>
      {cloneChildren(children)?.map((child, index: number) => {
        const childEl = child as React.ReactElement<PanelProps>;
        const id = childEl.props.panelId || index;
        return cloneElement(childEl, {
          panelId: id,
          collapsable: true,
          onCollapse: (b: boolean) => changeExpanded(b, id, childEl.props.onCollapse),
          collapsed: expandedPanel !== (childEl.props.panelId || index),
        });
      })}
    </div>
  );
}
