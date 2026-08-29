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
import { Activity, Children, useEffect, useEffectEvent, useImperativeHandle, useMemo, useRef } from "react";
import { usePropState } from "../../hooks/usePropState";
import type { ChildrenProp, CssPropWithMap, RefProp, TestProps } from "../../types";
import { Icon } from "../icon/Icon";

interface CollapsableRef {
  button: React.RefObject<HTMLElement | null>;
  body: React.RefObject<HTMLElement | null>;
  open: boolean;
}

export interface CollapsableProps
  extends CssPropWithMap<{ root?: string; header?: string; body?: string }>, TestProps, RefProp<CollapsableRef>, ChildrenProp {
  /**
   * expand icon alignment
   */
  iconAlign?: "start" | "end";
  /**
   * Header position sticky
   */
  stickyHeader?: boolean;
  /**
   * open state icon
   */
  iconOpen?: string;
  /**
   * closed state icon
   */
  iconClosed?: string;
  /**
   * open state
   */
  open?: boolean;
  /**
   * disable collapsable
   */
  disabled?: boolean;
  /**
   * open handler
   */
  onOpen?: () => void;
  /**
   * close handler
   */
  onClose?: () => void;
}

/**
 * A component that can be expanded or collapsed to show or hide content.
 * It is useful for organizing content in a way that allows users to focus on the information they are interested in.
 * It supports custom icons for open and closed states, alignment options, and can be made sticky.
 * This component is ideal for creating accordions, expandable panels, or sections that can be toggled by the user.
 *
 * @example
 * ```jsx
 * <Collapsable
 *   iconAlign="start"
 *   iconOpen="icon-[mdi--chevron-down]"
 *   iconClosed="icon-[mdi--chevron-right]"
 *   open={true}
 *   onOpen={() => console.log("Opened")}
 *   onClose={() => console.log("Closed")}
 * >
 *   <div>Header Content</div>
 *   <div>Body Content</div>
 * </Collapsable>
 * ```
 */
export function Collapsable({
  ref,
  disabled,
  className,
  classNames,
  children,
  iconAlign,
  stickyHeader,
  iconClosed = "icon-[mdi--chevron-right]",
  iconOpen = "icon-[mdi--chevron-down]",
  open,
  onClose,
  onOpen,
  ...props
}: CollapsableProps) {
  const [openState, setOpenState] = usePropState(open);

  const headRef = useRef(null);
  const bodyRef = useRef(null);

  useImperativeHandle(
    ref,
    () => ({
      button: headRef,
      body: bodyRef,
      open: !!openState,
    }),
    [openState],
  );

  const toggleHandler = useEffectEvent(() => {
    if (openState) {
      onOpen?.();
    } else {
      onClose?.();
    }
  });

  useEffect(() => {
    toggleHandler();
  }, [openState]);

  const [head, body] = useMemo(() => {
    // eslint-disable-next-line @eslint-react/no-children-to-array
    const [h, ...b] = Children.toArray(children);
    return [h, b];
  }, [children]);
  return (
    <div className={cn("fabric-collapsable", className, classNames?.root)} {...props}>
      <div
        role="none"
        ref={headRef}
        className={cn(
          "fabric-collapsableHead",
          stickyHeader && "bg-default sticky top-0 py-1 z-10",
          classNames?.header,
          "flex gap-1 flex-nowrap py-2 cursor-pointer items-center select-none hover:opacity-70",
          iconAlign === "end" ? "flex-row-reverse" : "flex-row",
        )}
        onClick={() => !disabled && setOpenState(!openState)}
      >
        <Icon size="1em" icon={openState ? iconOpen : iconClosed} rtlFlip />
        <div className="flex-1">{head}</div>
      </div>
      <Activity mode={openState ? "visible" : "hidden"}>
        <div ref={bodyRef} className={cn("fabric-collapsableBody", classNames?.body)}>
          {body}
        </div>
      </Activity>
    </div>
  );
}
