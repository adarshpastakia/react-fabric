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
import {
  Children,
  cloneElement,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { type CallbackReturn, type ChildrenProp } from "../../types";
import { nodeCheck } from "../../utils";
import { Tab } from "./Tab";
import classes from "./TabPanel.module.css";

export interface TabPanelProps extends ChildrenProp<typeof Tab> {
  /**
   * tab list orientation
   */
  orientation?: "top" | "bottom" | "start" | "end";
  /**
   * justify buttons
   */
  justify?: "start" | "center" | "end";
  /**
   * tab variations
   */
  variant?: "soft" | "solid" | "outline";
  /**
   * tab button flex to fill tabs
   */
  tabFlex?: boolean;
  /**
   * tab button gap
   */
  gap?: number;
  /**
   * current active tab
   */
  activeTab?: string;
  /**
   * tab list className
   */
  headerClassName?: string;
  /**
   * change handler
   */
  onChange?: (id: string) => void;
  /**
   * before close handler, return false to prevent change
   */
  onBeforeChange?: (nextTab: string, currentTab?: string) => CallbackReturn;
}

// TODO: implement append/prepend tab-bar items

export const TabPanel = ({
  children,
  headerClassName,
  orientation = "top",
  activeTab,
  justify,
  variant,
  tabFlex,
  gap,
  onBeforeChange,
  onChange,
}: TabPanelProps) => {
  const [active, setActive] = useState<string>();

  const [tabs, rest] = useMemo(() => {
    return Children.toArray(children as AnyObject).reduce<AnyObject[]>(
      (ret, node) => {
        nodeCheck(node, Tab) ? ret[0].push(node) : ret[1].push(node);
        return ret;
      },
      [[], []],
    );
  }, [children]);

  useEffect(() => {
    setActive(activeTab);
  }, [activeTab]);

  const activeTabPanel = useMemo(() => {
    return tabs.find((tab: AnyObject) => tab.props.id === active)?.props
      .children;
  }, [tabs, active]);

  const handleClick = useCallback(
    (id: string) => {
      void Promise.resolve(onBeforeChange?.(id, active)).then((ret) => {
        if (ret !== false) {
          setActive(id);
          onChange?.(id);
        }
      });
    },
    [onBeforeChange, onChange, active],
  );

  return (
    <div
      className={classNames(
        classes.tabPanel,
        "area-content grid bg-base overflow-hidden",
      )}
      data-orientation={orientation}
      data-variant={variant ?? "default"}
    >
      <div
        className={classNames(
          classes.tabList,
          headerClassName,
          justify && `justify-${justify}`,
          ["start", "end"].includes(orientation) && "flex-col",
          "flex flex-nowrap overflow-auto scroll-thin",
        )}
        style={{ gap }}
      >
        {tabs.map((node: AnyObject) =>
          cloneElement(node, {
            tabFlex: node.props.tabFlex ?? tabFlex,
            onClick: handleClick,
            active: node.props.id === active,
          }),
        )}
      </div>
      {rest}
      {activeTabPanel}
    </div>
  );
};