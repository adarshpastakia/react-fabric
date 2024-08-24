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
  type AriaProps,
  type ChildrenProp,
  type ColorType,
  type PaletteType,
  type TestProps,
} from "../../types";
import { CoreIcons } from "../../types/icons";
import { getBgClass, getBorderClass, getColorClass } from "../../utils";
import { Icon } from "../icon/Icon";

export interface CalloutProps extends AriaProps, ChildrenProp, TestProps {
  /**
   * callout color
   */
  color?: ColorType | PaletteType;
  /**
   * legend title
   */
  legend?: string;
  /**
   * callout icon
   */
  icon?: string;
  /**
   * callout title
   */
  title?: string;
  /**
   * callout border style
   */
  border?: "solid" | "dotted" | "dashed";
  /**
   * close action handler
   */
  onClose?: () => void;
}

export const Callout = ({
  children,
  // @ts-expect-error ignore
  color = "tint",
  legend,
  title,
  icon,
  border,
  onClose,
  ...aria
}: CalloutProps) => {
  return (
    <fieldset
      className={classNames(
        "block rounded-capped border max-w-full relative overflow-hidden mb-4",
        getBgClass(color + "-50"),
        getColorClass(color + "-700"),
        getBorderClass(color + "-300"),
        border === "dashed" && "border-dashed",
        border === "dotted" && "border-dotted",
      )}
      {...aria}
    >
      {legend && <legend className="px-2 mx-4 font-medium">{legend}</legend>}
      <div className={classNames("break-words whitespace-break-spaces p-2")}>
        <div className="flex flex-nowrap items-center text-xl pe-4 gap-2 mb-4 empty:mb-0">
          {icon && <Icon icon={icon} />}
          {title && <p className="flex-1">{title}</p>}
        </div>
        <div className="pe-4">{children}</div>
      </div>
      {onClose && (
        <Icon
          size="md"
          className={classNames("absolute end-2", legend ? "top-0" : "top-2")}
          icon={CoreIcons.close}
          onClick={onClose}
        />
      )}
    </fieldset>
  );
};
