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
  Button,
  ButtonGroup,
  CoreIcons,
  Header,
  Icon,
  Section,
} from "@react-fabric/core";
import { Search } from "@react-fabric/form";
import { useVirtualizer } from "@tanstack/react-virtual";
import { useImperativeHandle, useMemo, useRef } from "react";
import { TreeNode } from "./TreeNode";
import { iconCollapseAll, iconExpandAll, type TreePanelProps } from "./types";
import { useTree } from "./useTree";

// TODO: implement keyboard handler for navigating tree

/**
 * TreePanel component renders a virtualized tree structure with support for
 * selection, expansion, and filtering. It allows for custom rendering of tree
 * nodes and supports checkable nodes.
 *
 * @param {TreePanelProps<T>} props - The properties for the TreePanel component.
 * @returns {JSX.Element} The rendered TreePanel component.
 * @template T - The type of items in the tree, extending KeyValue.
 *
 * @example
 * ```jsx
 * <TreePanel
 *   items={items}
 *   selected={selectedItem}
 *   checked={checkedItems}
 *   checkable={true}
 *   renderer={(item) => <span>{item.name}</span>}
 *   searchable={true}
 *   selectable={true}
 *   matcher={(item, query) => item.name.toLowerCase().includes(query.toLowerCase())}
 *   filterPlaceholder="Search..."
 *   defaultLeafIcon={<Icon icon={CoreIcons.file} />}
 *   defaultNodeIcon={<Icon icon={CoreIcons.folder} />}
 *   expander="caret"
 *   onChecked={(checkedItems) => console.log(checkedItems)}
 *   onLoad={(id) => console.log(`Load children for ${id}`)}
 *   onQuery={(query) => console.log(`Query: ${query}`)}
 *   onSelect={(selectedItem) => console.log(selectedItem)}
 *   onClick={(item) => console.log(`Clicked on ${item.id}`)}
 *   sorter={(a, b) => a.label.localeCompare(b.label)}
 *   makeLabel={(item) => item.name}
 *   makeIcon={(item) => item.icon ? <Icon icon={item.icon} /> : null}
 *   defaultExpanded={["root"]}
 *   onExpandToggle={(id, expanded) => console.log(`Toggle expand for ${id}: ${expanded}`)}
 *   leafClassName="leaf-node"
 *   nodeClassName="tree-node"
 * />
 * ```
 *
 * @see {@link https://adarshpastakia.github.io/react-fabric/?path=/docs/data-treepanel--docs}
 */
export const TreePanel = <T extends KeyValue>({
  ref,
  items,
  selected,
  checked,
  checkable,
  noLines,
  searchable,
  selectable,
  matcher,
  filterPlaceholder,
  defaultLeafIcon,
  defaultNodeIcon,
  expander = "box",
  onChecked,
  onLoad,
  onQuery,
  onSelect,
  onClick,
  sorter,
  makeLabel,
  makeIcon,
  defaultExpanded,
  onExpandToggle,
  leafClassName,
  nodeClassName,
  ...aria
}: TreePanelProps<T>) => {
  const {
    tree,
    query,
    toggleExpand,
    toggleCheck,
    expandAll,
    collapseAll,
    select,
    expand,
    onFilter,
  } = useTree({
    items,
    checked,
    selected,
    matcher,
    sorter,
    onLoad,
    onQuery,
    onSelect,
    onChecked,
    defaultExpanded,
    onExpandToggle,
  });

  const scrollerRef = useRef<HTMLDivElement>(null);
  const virtualizer = useVirtualizer({
    count: tree.length,
    getScrollElement: () => scrollerRef.current,
    estimateSize: () => 24,
  });

  const virtualItems = virtualizer.getVirtualItems();

  const expanders = useMemo<[string, string]>(() => {
    if (expander === "caret")
      return [CoreIcons.caretRight, CoreIcons.caretDown];
    if (expander === "chevron")
      return [CoreIcons.chevronRight, CoreIcons.chevronDown];
    if (expander === "folder")
      return [CoreIcons.folderClosed, CoreIcons.folderOpen];
    return [CoreIcons.expand, CoreIcons.collapse];
  }, [expander]);

  useImperativeHandle(
    ref,
    () => ({
      open: (id: string) => expand(id),
      select: (id: string) => select(id),
    }),
    [],
  );

  return (
    <Section>
      <Header
        flex
        className="items-center p-px justify-end overflow-hidden border-b"
      >
        {searchable && (
          <Search
            value={query}
            onSearch={onFilter}
            allowClear
            placeholder={filterPlaceholder}
            {...{ noBorder: true }}
            decorateStart={<Icon icon={CoreIcons.filter} className="p-1" />}
          />
        )}
        <ButtonGroup variant="link" className="m-0">
          <Button
            size="sm"
            aria-label="expand all"
            icon={iconExpandAll}
            onClick={expandAll}
          />
          <Button
            size="sm"
            aria-label="collapse all"
            icon={iconCollapseAll}
            onClick={collapseAll}
          />
        </ButtonGroup>
      </Header>
      <div
        ref={scrollerRef}
        role="tree"
        className="area-content overflow-auto p-1"
        {...aria}
      >
        <div style={{ height: virtualizer.getTotalSize() }}>
          <div style={{ height: virtualItems[0]?.start }} />
          {virtualItems.map(({ index, key }) => (
            <div key={key} data-index={index} ref={virtualizer.measureElement}>
              <TreeNode
                node={tree[index]}
                noLines={noLines}
                expanders={expanders}
                checkable={checkable}
                selectable={selectable}
                defaultLeafIcon={defaultLeafIcon}
                defaultNodeIcon={
                  makeIcon?.(tree[index].data) ?? defaultNodeIcon
                }
                onToggle={toggleExpand}
                onChecked={toggleCheck}
                onSelect={select}
                onClick={onClick}
                leafClassName={leafClassName}
                nodeClassName={nodeClassName}
              >
                {(tree[index].data && makeLabel?.(tree[index].data)) ??
                  tree[index].label}
              </TreeNode>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
