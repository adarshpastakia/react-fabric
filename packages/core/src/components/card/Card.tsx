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
  useCallback,
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
  PolymorphicProps,
  type AriaProps,
  type ChildrenProp,
  type CssProp,
  type RefProp,
  type TestProps,
} from "../../types";
import { nodeCheck } from "../../utils";

interface BaseProps
  extends CssProp,
    AriaProps,
    TestProps,
    RefProp<HTMLDivElement>,
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
   * drag start handler
   */
  onDragStart?: (
    event: DragEvent,
    dragKey: string,
    dragData?: KeyValue,
  ) => void;
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

export type CardProps<Tag extends React.ElementType = "div"> = BaseProps &
  PolymorphicProps<Tag>;

/**
 * A component that displays a card with a header, body, and footer. It can be used to display content in a structured format.
 * It supports various features such as click handling, drag-and-drop functionality, and customizable styles.
 * The Card component is designed to be flexible and can be used in various contexts, such as displaying user profiles, product information, or any other content that benefits from a card layout.
 * The component accepts children that can include a Header, body content, and a Footer.
 * It also supports additional properties for styling, accessibility, and interaction.
 * It can be styled with custom CSS classes and supports features like selection indication and drag-and-drop functionality.
 *
 * @param {CardProps} props - The properties for the Card component.
 * @returns {JSX.Element} The rendered Card component.
 *
 * @example
 * ```jsx
 * <Card
 *   className="my-custom-class"
 *   bodyClassName="my-body-class"
 *   selected={true}
 *   selectedRibbon={true}
 *   onClick={() => console.log("Card clicked")}
 *   onDragStart={(event, key, data) => console.log("Drag started", key, data)}
 *   flex={true}
 *   draggable={true}
 *   dragKey="my-drag-key"
 *   dragData={{ id: 1, name: "Card Data" }}
 *   aria-label="My Card"
 * >
 *   <Header>Card Header</Header>
 *   <div>Card Body Content</div>
 *   <Footer>Card Footer</Footer>
 * </Card>
 * ```
 *
 * @see {@link https://adarshpastakia.github.io/react-fabric/?path=/docs/core-components-card--docs} for more details.
 */
export const Card = <Tag extends React.ElementType = "div">({
  children,
  className,
  bodyClassName,
  selected,
  selectedRibbon,
  onClick,
  onDragStart,
  flex,
  draggable,
  dragKey,
  dragData,
  ref,
  as,
  ...aria
}: CardProps<Tag>) => {
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

  const handleDragStart = useCallback(
    (event: DragEvent) => {
      dragKey && event.dataTransfer?.setData(dragKey, JSON.stringify(dragData));
      dragKey && onDragStart?.(event, dragKey, dragData);
    },
    [onDragStart, dragKey, dragData],
  );

  const E = as ?? "div";
  return (
    <div
      className={classNames(
        "fabric-cardWrapper",
        "rounded-capped relative grid",
        flex && "flex-1",
        selected && selectedRibbon && "selected",
        selected && "outline-1 outline-accent-500 outline-offset-2",
      )}
    >
      <ErrorBoundary>
        <div
          className={classNames(
            "fabric-card",
            className,
            "rounded-capped relative flex flex-col flex-nowrap overflow-hidden",
            "href" in aria && "clickable",
            "to" in aria && "clickable",
            onClick && "clickable",
          )}
          draggable={draggable}
          onDragStart={!draggable ? undefined : handleDragStart}
          ref={ref}
        >
          {header}
          <E role="none" onClick={onClick} {...aria} className="contents">
            <object
              type="none"
              className={classNames("fabric-cardBody", bodyClassName, "flex-1")}
            >
              {body}
            </object>
          </E>
          {footer}
        </div>
      </ErrorBoundary>
    </div>
  );
};
