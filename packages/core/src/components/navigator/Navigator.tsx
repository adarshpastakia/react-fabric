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
import { HotKey } from "../../hotkeys/HotKey";
import {
  type AriaProps,
  type ColorType,
  type CssProp,
  type TestProps,
} from "../../types";
import { CoreIcons } from "../../types/icons";
import { Icon } from "../icon/Icon";

export interface NavigatorProps extends CssProp, AriaProps, TestProps {
  /**
   * navigator button color
   */
  color?: ColorType | string;
  /**
   * navigation handler
   */
  onNavigate: (dir: -1 | 1) => void;
}

export const Navigator = ({
  className,
  onNavigate,
  color,
  ...aria
}: NavigatorProps) => {
  return (
    <div
      className={classNames(className, "inline-block leading-none")}
      {...aria}
    >
      <HotKey keyCombo="left" handler={() => onNavigate(-1)} />
      <HotKey keyCombo="right" handler={() => onNavigate(1)} />
      <Icon
        rtlFlip
        color={color}
        className="text-[1em] p-1"
        aria-label="previous"
        icon={CoreIcons.chevronLeft}
        onClick={(e) => [e.stopPropagation(), onNavigate(-1)]}
      />
      <Icon
        rtlFlip
        className="text-[1em] p-1"
        color={color}
        aria-label="next"
        icon={CoreIcons.chevronRight}
        onClick={(e) => [e.stopPropagation(), onNavigate(1)]}
      />
    </div>
  );
};
