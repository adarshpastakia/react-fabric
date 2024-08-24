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
  useMemo,
  type DragEvent,
  type MouseEventHandler,
} from "react";
import { ErrorBoundary } from "../../core/boundary/ErrorBoundary";
import { type ContentProps } from "../../core/content/Content";
import {
  Footer,
  Header,
  type HeadFootProps,
} from "../../core/headfoot/HeadFoot";
import {
  type AriaProps,
  type ChildrenProp,
  type CssProp,
  type TestProps,
} from "../../types";
import { nodeCheck } from "../../utils";
import classes from "./Card.module.css";

export interface CardProps
  extends CssProp,
    AriaProps,
    TestProps,
    ChildrenProp<React.ReactElement<HeadFootProps | ContentProps>> {
  /**
   * apply flex fill styling
   */
  flex?: boolean;
  /**
   * click handler
   */
  onClick?: MouseEventHandler;
  /**
   * body css classname(s)
   */
  bodyClassName?: string;
  /**
   * show selected ring
   */
  selected?: boolean;
  /**
   * show tick mark ribbon
   */
  selectedRibbon?: boolean;
  /**
   * make card draggable
   */
  draggable?: boolean;
  /**
   * drag event data key
   */
  dragKey?: string;
  /**
   * drag event data
   */
  dragData?: KeyValue;
}

export const Card = ({
  children,
  className,
  bodyClassName,
  selected,
  selectedRibbon,
  onClick,
  flex,
  draggable,
  dragKey,
  dragData,
  ...aria
}: CardProps) => {
  const [header, body, footer] = useMemo(() => {
    return Children.toArray(children as AnyObject).reduce<AnyObject[]>(
      (ret, node) => {
        nodeCheck(node, Header)
          ? ret[0].push(node)
          : nodeCheck(node, Footer)
            ? ret[2].push(node)
            : ret[1].push(node);
        return ret;
      },
      [[], [], []],
    );
  }, [children]);

  return (
    <div
      className={classNames(
        classes.cardWrapper,
        "rounded-capped relative grid",
        flex && "flex-1",
        selected && selectedRibbon && classes.selected,
        selected && "outline outline-2 outline-accent-500 outline-offset-2",
      )}
    >
      <ErrorBoundary>
        <div
          className={classNames(
            classes.card,
            className,
            "rounded-capped flex flex-col flex-nowrap overflow-hidden",
            onClick && classes.clickable,
          )}
          draggable={draggable}
          onDragStart={
            !draggable
              ? undefined
              : (e: DragEvent) =>
                  dragKey &&
                  e.dataTransfer?.setData(dragKey, JSON.stringify(dragData))
          }
          {...aria}
        >
          {header}
          <div
            role="none"
            className={classNames(classes.cardBody, bodyClassName, "flex-1")}
            onClick={onClick}
          >
            {body}
          </div>
          {footer}
        </div>
      </ErrorBoundary>
    </div>
  );
};
