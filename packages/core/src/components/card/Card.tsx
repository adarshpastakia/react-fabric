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
import { useCallback } from "react";
import { ErrorBoundary } from "../../core/boundary/ErrorBoundary";
import { type ContentProps } from "../../core/content/Content";
import { type HeadFootProps } from "../../core/headfoot/HeadFoot";
import type {
  ChildrenProp,
  CssPropWithMap,
  Draggable,
  HeightProps,
  PolymorphicProps,
  RefProp,
  TestProps,
  WidthProps,
} from "../../types";
import { StyleEffect } from "../effect/StyleEffect";
import type { TitlebarProps } from "../titlebar/Titlebar";
import { Titlebar } from "../titlebar/Titlebar";

interface BaseProps
  extends
    CssPropWithMap<{ root?: string; body?: string; titlebar?: string; title?: string; icon?: string }>,
    TestProps,
    HeightProps,
    WidthProps,
    Draggable,
    RefProp<HTMLDivElement>,
    ChildrenProp<React.ReactElement<HeadFootProps | ContentProps>> {
  /**
   * click handler
   */
  onClick?: React.MouseEventHandler;
  /**
   * show selected ring
   */
  selected?: boolean;
  /**
   * show tick mark ribbon
   */
  selectedRibbon?: boolean;

  hideEffect?: boolean;
}

export type CardProps<Tag extends React.ElementType = "div"> = BaseProps & PolymorphicProps<Tag> & TitlebarProps;

/**
 * A component that displays a card with a header, body, and footer. It can be used to display content in a structured format.
 * It supports various features such as click handling, drag-and-drop functionality, and customizable styles.
 * The Card component is designed to be flexible and can be used in various contexts, such as displaying user profiles, product information, or any other content that benefits from a card layout.
 * The component accepts children that can include a Header, body content, and a Footer.
 * It also supports additional properties for styling, accessibility, and interaction.
 * It can be styled with custom CSS classes and supports features like selection indication and drag-and-drop functionality.
 *
 * @example
 * ```jsx
 * <Card
 *   className="my-custom-class"
 *   classNames={{ body: "my-body-class" }}
 *   selected={true}
 *   selectedRibbon={true}
 *   onClick={() => console.log("Card clicked")}
 *   onDragStart={(event, key, data) => console.log("Drag started", key, data)}
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
 */
export function Card<Tag extends React.ElementType = "div">({
  children,
  className,
  classNames,
  selected,
  selectedRibbon,
  onClick,
  onDragStart,
  hideEffect,
  draggable,
  dragKey,
  dragData,
  ref,
  as,
  height,
  width,
  minHeight,
  minWidth,
  maxHeight,
  maxWidth,
  title,
  icon,
  actions,
  ...props
}: CardProps<Tag>) {
  const handleDragStart = useCallback(
    (event: React.DragEvent) => {
      if (dragKey) {
        event.dataTransfer?.setData(dragKey, JSON.stringify(dragData));
        onDragStart?.(event, dragKey, dragData);
      }
    },
    [dragKey, dragData, onDragStart],
  );

  const E = as ?? "div";
  return (
    <div
      className={cn(
        "fabric-card",
        className,
        classNames?.root,
        "rounded-capped relative scroll-thin",
        selectedRibbon && "selected-ribbon",
        !selectedRibbon && "is-selected:ring-[1.5px] is-selected:ring-accent-500 is-selected:ring-offset-2",
      )}
      data-clickable={!!onClick || "to" in props || "href" in props}
      data-selected={selected}
      draggable={draggable}
      onDragStart={!draggable ? undefined : handleDragStart}
      ref={ref}
    >
      {!hideEffect && <StyleEffect />}
      <Titlebar title={title} icon={icon} actions={actions} className={classNames?.titlebar} classNames={classNames} />
      <ErrorBoundary>
        <E role="none" onClick={onClick} {...props} className="contents">
          {children && (
            <object
              type="none"
              className={cn("fabric-cardBody", classNames?.body, "grid overflow-hidden min-w-0 z-1")}
              style={{
                height,
                width,
                minHeight,
                minWidth,
                maxHeight,
                maxWidth,
              }}
            >
              {children}
            </object>
          )}
        </E>
      </ErrorBoundary>
    </div>
  );
}
