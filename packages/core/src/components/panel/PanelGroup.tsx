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
import { Children, cloneElement, useCallback, useState } from "react";
import {
  useEffectDebugger,
  useMemoDebugger,
} from "../../hooks/useEffectDebugger";
import { type ChildrenProp } from "../../types";
import classes from "./Panel.module.css";

export interface PanelGroupProps extends ChildrenProp {
  /**
   * active panel id / index
   */
  activePanel?: string | number;
  /**
   * active change callback
   */
  onActiveChange?: (panelId: string) => void;
}

export const PanelGroup = ({
  children,
  activePanel,
  onActiveChange,
}: PanelGroupProps) => {
  const [expandedPanel, setExpandedPanel] = useState<string>();

  const panels = useMemoDebugger(
    () =>
      Children.toArray(children).map(
        (child: AnyObject, index: number) => child.props.panelId || index,
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

  const changeExpanded = useCallback(
    (collapsed: boolean, id: string, handler?: AnyObject) => {
      if (!collapsed) {
        setExpandedPanel(id);
        onActiveChange?.(id);
      }
      handler?.(collapsed);
      return id !== expandedPanel;
    },
    [onActiveChange, expandedPanel],
  );

  return (
    <div
      data-ref="panelGroup"
      className={classNames(
        classes.panelGroup,
        "flex flex-col overflow-auto area-content p-px",
      )}
    >
      {Children.toArray(children).map((child: AnyObject, index: number) =>
        cloneElement(child, {
          panelId: child.props.panelId || index,
          collapsable: true,
          onCollapse: (b: boolean, id: string) =>
            changeExpanded(b, id, child.props.onCollapse),
          collapsed: expandedPanel !== (child.props.panelId || index),
        }),
      )}
    </div>
  );
};
