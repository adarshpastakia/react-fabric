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

import { Badge, CoreIcons, getBadgeProps, Icon } from "@react-fabric/core";
import { isEmpty, isString } from "@react-fabric/utilities";
import classNames from "classnames";
import { isValidElement, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { type TreeNodeProps } from "./types";

export const TreeNode = ({
  node,
  noLines,
  expanders,
  checkable,
  selectable,
  defaultLeafIcon,
  defaultNodeIcon,
  onToggle,
  onClick,
  onSelect,
  onChecked,
  children,
  leafClassName,
  nodeClassName,
}: TreeNodeProps) => {
  const { t } = useTranslation("data");
  const badgeProps = useMemo(() => {
    return getBadgeProps(node.badge);
  }, [node.badge]);

  const filler = useMemo(() => {
    return node.lines.slice(1).map((line, idx) => (
      <div
        key={idx}
        className={classNames(
          "flex-initial self-stretch flex items-center w-6 relative",
          !noLines &&
            line > 0 &&
            "before:absolute before:top-0 before:start-[7px] before:bg-tint-200 before:min-h-[50%] before:w-[2px] before:scale-x-[.625]",
          !noLines && line !== 2 && "before:h-full",
        )}
      >
        <svg viewBox="0 0 24 24" className="fill-tint-200 rtl:-scale-x-100">
          {line === 0 && <path d="" />}
          {!noLines && line === 1 && (
            <path d="M7.45 26.1v-28.2h1.1v28.2h-1.1z" />
          )}
          {!noLines && line === 2 && (
            <path d="M14.989 12.389l0.161-0.389-0.161-0.389-0.389-0.161h-6.050v-13.55h-1.1v14.1l0.161 0.389 0.389 0.161h6.6z" />
          )}
          {!noLines && line === 3 && (
            <path d="M8.55 12.55h6.050l0.389-0.161 0.161-0.389-0.161-0.389-0.389-0.161h-6.050v-13.55h-1.1v28.2h1.1z" />
          )}
        </svg>
      </div>
    ));
  }, [noLines, node.lines]);

  const nodeIcon = useMemo(() => {
    if (node.icon) return node.icon;
    return node.leaf ? defaultLeafIcon : defaultNodeIcon;
  }, [defaultLeafIcon, defaultNodeIcon, node.icon]);

  const canCheck = useMemo(() => {
    return checkable === true || (checkable === "leafOnly" && node.leaf);
  }, [node.leaf, checkable]);

  const canSelect = useMemo(() => {
    return (
      !node.disabled &&
      (selectable === true || (selectable === "leafOnly" && node.leaf))
    );
  }, [node.leaf, node.disabled, selectable]);

  return (
    <div
      role="treeitem"
      aria-selected={node.selected}
      className={classNames("flex flex-nowrap items-center")}
      data-testid={node["data-testid"]}
      data-test-value={node["data-test-value"]}
      data-id={node.id}
    >
      {filler}
      {node.loading && (
        <div className="flex-initial w-6">
          <Icon icon={CoreIcons.spinner} className="animate-spin text-muted" />
        </div>
      )}
      {!node.leaf && !node.childFiltered && !node.loading && (
        <div className="flex-initial w-6">
          <Icon
            rtlFlip
            onClick={() => !node.leaf && onToggle(node.id)}
            icon={node.open ? expanders[1] : expanders[0]}
            className="text-tint-600 hover:text-primary-600"
          />
        </div>
      )}
      {canCheck && (
        <div className="flex-initial w-6">
          <Icon
            onClick={() => !node.disabled && onChecked(node.id)}
            icon={
              node.checked === 2
                ? CoreIcons.checkboxInt
                : node.checked === 1
                  ? CoreIcons.checkboxOn
                  : CoreIcons.checkboxOff
            }
            className={classNames(
              node.disabled
                ? "text-muted"
                : "text-primary-500 hover:text-primary-600",
            )}
          />
        </div>
      )}
      {!node.empty && (
        <div
          role="none"
          className={classNames(
            "group/tool data-[selected]:bg-primary-100 flex flex-nowrap flex-1 overflow-hidden select-none",
            node.childSelected && "font-medium",
            node.disabled && "text-muted opacity-65",
            node.className,
            node.leaf ? leafClassName : nodeClassName,
            !node.disabled &&
              (canSelect || onClick) &&
              "hover:bg-primary-50 cursor-pointer",
          )}
          data-selected={node.selected}
          onClick={
            node.disabled
              ? undefined
              : () => {
                  onClick?.(node.id, node.data);
                  canSelect
                    ? onSelect(node.id)
                    : canCheck
                      ? onChecked(node.id)
                      : onToggle(node.id);
                }
          }
        >
          {nodeIcon && (
            <div className="flex-content max-w-6 me-1 self-center leading-none">
              {isValidElement(nodeIcon) && nodeIcon}
              {isString(nodeIcon) && (
                <Icon
                  icon={nodeIcon}
                  bg={node.iconBg}
                  color={node.iconColor}
                  rtlFlip={node.rtlFlip}
                />
              )}
            </div>
          )}
          {node.childSelected && !node.open && (
            <span className=" flex-content text-primary-500">•</span>
          )}
          <div role="none" className="flex-1 truncate">
            {children}
          </div>
          {!isEmpty(node.badge) && (
            <Badge
              {...badgeProps}
              className={classNames(
                "me-1 self-center flex-content bg-opacity-50",
                badgeProps.className,
              )}
            />
          )}
        </div>
      )}
      {node.empty && (
        <div className="text-muted text-sm select-none">
          {t("tree.noItems")}
        </div>
      )}
    </div>
  );
};
