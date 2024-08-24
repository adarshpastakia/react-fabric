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
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
  type RefObject,
} from "react";
import {
  type AriaProps,
  type ChildrenProp,
  type CssProp,
  type RefProp,
  type TestProps,
} from "../../types";
import { CoreIcons } from "../../types/icons";
import { Icon } from "../icon/Icon";
import classes from "./Collapsable.module.css";

interface CollapsableRef {
  button: RefObject<HTMLElement>;
  body: RefObject<HTMLElement>;
  open: boolean;
}

export interface CollapsableProps
  extends CssProp,
    AriaProps,
    TestProps,
    RefProp<CollapsableRef>,
    ChildrenProp {
  /**
   * expand icon alignment
   */
  iconAlign?: "start" | "end";
  /**
   * panel body className
   */
  bodyClassName?: string;
  /**
   * header button className
   */
  headerClassName?: string;
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
   * open handler
   */
  onOpen?: () => void;
  /**
   * open handler
   */
  onClose?: () => void;
}

export const Collapsable = ({
  ref,
  className,
  bodyClassName,
  headerClassName,
  children,
  iconAlign,
  iconClosed = CoreIcons.chevronRight,
  iconOpen = CoreIcons.chevronDown,
  open,
  onClose,
  onOpen,
  ...aria
}: CollapsableProps) => {
  const [openState, setOpenState] = useState(open);
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

  useEffect(() => {
    setOpenState(open);
  }, [open]);

  const [head, body] = useMemo(() => {
    const [h, ...b] = Children.toArray(children);
    return [h, b];
  }, [children]);
  return (
    <div className={classNames(classes.collapsable, className)} {...aria}>
      <div
        role="none"
        ref={headRef}
        className={classNames(
          classes.collapsableHead,
          "flex gap-1 flex-nowrap py-2 font-medium cursor-pointer items-center select-none hover:opacity-70",
          headerClassName,
          iconAlign === "end" ? "flex-row-reverse" : "flex-row",
        )}
        onClick={() => setOpenState(!openState)}
      >
        <Icon size="1.125em" icon={openState ? iconOpen : iconClosed} rtlFlip />
        <div className="flex-1 px-2">{head}</div>
      </div>
      {openState && (
        <div
          ref={bodyRef}
          className={classNames(classes.collapsableBody, bodyClassName)}
        >
          {body}
        </div>
      )}
    </div>
  );
};
