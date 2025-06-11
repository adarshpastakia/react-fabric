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
import { useCallback, type ReactElement } from "react";
import {
  type AriaProps,
  type ChildProp,
  type CssProp,
  type TestProps,
} from "../../types";
import { ButtonGroup } from "../button/ButtonGroup";

export interface ActionLabelProps
  extends AriaProps,
    CssProp,
    ChildProp,
    TestProps {
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
 * A label with action buttons that can be aligned to the start or end.
 * This component is useful for displaying a label with associated actions, such as buttons, that can be aligned based on the design requirements.
 * It automatically calculates the width of the action buttons to ensure that the label text does not overflow the container.
 * It uses CSS variables to manage the width of the label text dynamically based on the action buttons' width.
 * This component is designed to be flexible and can be used in various contexts where a label with actions is needed.
 * It supports custom alignment, disabled states, and can be easily styled with additional CSS classes.
 *
 * @param {ActionLabelProps} props - The properties for the ActionLabel component.
 * @returns {JSX.Element} The rendered ActionLabel component.
 *
 * @example
 * ```jsx
 * <ActionLabel
 *   actions={[<Button>Action 1</Button>, <Button>Action 2</Button>]}
 *   align="end"
 * >
 *   Label Text
 * </ActionLabel>
 * ```
 *
 * @see {@link https://adarshpastakia.github.io/react-fabric/?path=/docs/core-components-action-label--docs} for more details.
 */
export const ActionLabel = ({
  children,
  className,
  align,
  actions,
  disabled,
  ...rest
}: ActionLabelProps) => {
  // Calculate the width of the action buttons to set a CSS variable
  // This is used to ensure the label text does not overflow the container
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
        "fabric-actionLabel",
        "flex overflow-hidden gap-1 items-center cursor-default select-none",
      )}
      data-disabled={disabled}
      {...rest}
    >
      <ButtonGroup
        ref={calculateBasis}
        data-inner-clickable
        className={classNames(
          "fabric-actions",
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
