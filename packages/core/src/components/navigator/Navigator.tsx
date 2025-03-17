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
import { useCallback } from "react";
import { HotKey } from "../../hotkeys/HotKey";
import {
  type AriaProps,
  type ChildProp,
  type ColorType,
  type CssProp,
  type PaletteType,
  type TestProps,
} from "../../types";
import { CoreIcons } from "../../types/icons";
import { Icon } from "../icon/Icon";

export interface NavigatorProps
  extends CssProp,
    AriaProps,
    TestProps,
    Partial<ChildProp> {
  /**
   * navigator button color
   */
  color?: ColorType | PaletteType | string;
  /**
   * navigation handler
   */
  onNavigate: (dir: -1 | 1) => void;
}

export const Navigator = ({
  className,
  onNavigate,
  color,
  children,
  ...aria
}: NavigatorProps) => {
  const navPrev = useCallback(() => onNavigate(-1), [onNavigate]);
  const navNext = useCallback(() => onNavigate(+1), [onNavigate]);
  return (
    <div
      data-ref="navigator"
      className={classNames(className, "inline-flex items-center leading-none")}
      {...aria}
    >
      <HotKey keyCombo="left" handler={navPrev} />
      <HotKey keyCombo="right" handler={navNext} />
      <Icon
        rtlFlip
        color={color}
        className="text-[1em] p-1"
        aria-label="previous"
        data-ref="previous"
        icon={CoreIcons.chevronLeft}
        onClick={(e) => [e.stopPropagation(), onNavigate(-1)]}
      />
      {children}
      <Icon
        rtlFlip
        className="text-[1em] p-1"
        color={color}
        aria-label="next"
        data-ref="next"
        icon={CoreIcons.chevronRight}
        onClick={(e) => [e.stopPropagation(), onNavigate(1)]}
      />
    </div>
  );
};
