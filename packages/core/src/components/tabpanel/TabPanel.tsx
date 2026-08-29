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

import { cn, getValue } from "@react-fabric/utilities";
import { Children, cloneElement, useEffect, useMemo, useState } from "react";
import type { CallbackReturn, ChildrenProp, CssPropWithMap } from "../../types";
import { nodeCheck } from "../../utils";
import type { TabProps } from "./Tab";
import { Tab } from "./Tab";

export interface TabPanelProps
  extends ChildrenProp<TabProps>, CssPropWithMap<{ root: string; header: string; active: string }> {
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
  variant?: "soft" | "solid" | "outline" | "pills";
  /**
   * tab button flex to fill tabs
   */
  tabFlex?: boolean;
  /**
   * rotate tab sideways for start/end orientation
   */
  tabRotate?: boolean;
  /**
   * tab button gap
   */
  gap?: number;
  /**
   * current active tab
   */
  activeTab?: string;
  /**
   * append element
   */
  append?: React.ReactNode;
  /**
   * prepend element
   */
  prepend?: React.ReactNode;
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

function getFirstTab(tabs: React.ReactElement<TabProps>[]) {
  return tabs.find((tab) => !tab.props.disabled)?.props.id || null;
}

/**
 * A component that provides a tabbed interface for displaying content.
 * It allows users to switch between different tabs, each containing its own content.
 * It supports various orientations, justify options, and variants for the tab header.
 * It also provides hooks for handling tab changes before and after they occur.
 * This component is useful for organizing content into separate sections that can be easily navigated by the user.
 * It can be customized with different styles and behaviors to fit the needs of the application.
 *
 * @example
 * ```jsx
 * <TabPanel
 *   orientation="top"
 *   activeTab="tab1"
 *   justify="start"
 *   variant="solid"
 *   tabFlex={true}
 *   onBeforeChange={(nextTab, currentTab) => {
 *     console.log(`Switching from ${currentTab} to ${nextTab}`);
 *     return true; // or false to prevent change
 *   }}
 *   onChange={(id) => console.log(`Active tab changed to: ${id}`)}
 * >
 *   <Tab id="tab1" label="Tab 1">Content for Tab 1</Tab>
 *   <Tab id="tab2" label="Tab 2">Content for Tab 2</Tab>
 *   <Tab id="tab3" label="Tab 3">Content for Tab 3</Tab>
 * </TabPanel>
 * ```
 */
export function TabPanel({
  children,
  className,
  classNames,
  orientation = "top",
  activeTab,
  justify,
  variant,
  tabFlex,
  append,
  prepend,
  tabRotate,
  gap,
  onBeforeChange,
  onChange,
}: TabPanelProps) {
  const [active, setActive] = useState<string>();

  const [tabs, rest] = useMemo(() => {
    // eslint-disable-next-line @eslint-react/no-children-to-array
    return Children.toArray(children as Array<React.ReactNode>).reduce<
      [p: React.ReactElement<TabProps & { active: boolean }>[], o: React.ReactNode[]]
    >(
      (ret, node) => {
        if (nodeCheck(node, Tab)) ret[0].push(node as React.ReactElement<TabProps & { active: boolean }>);
        else ret[1].push(node);
        return ret;
      },
      [[], []],
    );
  }, [children]);

  useEffect(() => {
    // eslint-disable-next-line @eslint-react/set-state-in-effect
    setActive(getValue<string>(`${activeTab ?? getFirstTab(tabs)}`));
    // eslint-disable-next-line @eslint-react/exhaustive-deps
  }, [activeTab]);

  const activeTabPanel = useMemo(() => {
    return tabs.find((tab) => tab.props.id === active)?.props.children;
  }, [tabs, active]);

  const handleClick = (id: string) => {
    void Promise.resolve(onBeforeChange?.(id, active)).then((ret) => {
      if (ret !== false) {
        setActive(id);
        onChange?.(id);
      }
    });
  };

  return (
    <div
      className={cn("fabric-tabPanel", className, classNames?.root, "area-content grid bg-default overflow-hidden")}
      data-orientation={orientation}
      data-variant={variant ?? "default"}
    >
      <div
        className={cn(
          "fabric-tabHeader",
          classNames?.header,
          tabRotate && "tab-rotate",
          justify && `justify-${justify}`,
          ["start", "end"].includes(orientation) && "flex-col",
          "flex flex-nowrap overflow-hidden items-center",
        )}
      >
        {prepend}
        <div
          className={cn(
            "fabric-tabList",
            justify && `justify-${justify}`,
            ["start", "end"].includes(orientation) && "flex-col",
            ["bottom", "end"].includes(orientation) ? "self-start" : "self-end",
            "flex flex-1 flex-nowrap overflow-auto scroll-thin",
          )}
          style={{ gap }}
        >
          {tabs.map((node) =>
            cloneElement(node, {
              tabFlex: node.props.tabFlex ?? tabFlex,
              classNames: Object.assign({ active: classNames?.active }, node.props.classNames),
              onClick: handleClick,
              active: node.props.id === active,
            }),
          )}
        </div>
        {append}
      </div>
      {rest}
      {activeTabPanel}
    </div>
  );
}
