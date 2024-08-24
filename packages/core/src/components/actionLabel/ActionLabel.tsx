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
import { type ReactElement, useCallback } from "react";
import { type AriaProps, type ChildProp, type CssProp } from "../../types";
import { ButtonGroup } from "../button/ButtonGroup";
import classes from "./ActionLabel.module.css";

export interface ActionLabelProps extends AriaProps, CssProp, ChildProp {
  /**
   * action buttons aligment
   */
  align?: "start" | "end";
  /**
   * disable actions
   */
  disabled?: boolean;
  /**
   * buttons
   */
  actions: ReactElement[];
}

/**
 * A simple label component with additional actions (like a button or icon) that becomes visible only when the user hovers over the label,
 * useful in interfaces where space is limited or where it's important to keep the UI clean and focused
 */
export const ActionLabel = ({
  children,
  className,
  align,
  actions,
  disabled,
  ...rest
}: ActionLabelProps) => {
  /**
   * calculate the width of the action box, width will be used for a delayed transition on hover
   */
  const calculateBasis = useCallback((el: HTMLElement | null) => {
    if (el) {
      const clone = el.cloneNode(true) as HTMLElement;
      clone.className = "";
      clone.style.left = "-200%";
      clone.style.overflow = "hidden";
      clone.style.position = "absolute";
      clone.style.whiteSpace = "nowrap";
      document.body.appendChild(clone);
      el.style.setProperty("--width", `${clone.offsetWidth}px`);
      clone.remove();
    }
  }, []);

  return (
    <div
      className={classNames(
        className,
        classes.actionLabel,
        "flex overflow-hidden gap-1 items-center cursor-default select-none",
      )}
      data-disabled={disabled}
      {...rest}
    >
      <ButtonGroup
        ref={calculateBasis}
        className={classNames(
          classes.actions,
          "overflow-hidden flex-content",
          align === "end" && "order-2",
        )}
      >
        {actions}
      </ButtonGroup>
      <div className="flex-initial truncate">{children}</div>
    </div>
  );
};
