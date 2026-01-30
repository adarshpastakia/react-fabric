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
import { Icon } from "../icon/Icon";
import { isEmpty } from "@react-fabric/utilities";

export interface NavigatorProps
  extends CssProp,
    AriaProps,
    TestProps,
    Partial<ChildProp> {
  length?: number;
  current?: number;
  disableKeyHandlers?: boolean;
  /**
   * navigator button color
   */
  color?: ColorType | PaletteType | string;
  /**
   * navigation handler
   */
  onNavigate: (dir: -1 | 1) => void;
}

/**
 * A component that provides navigation controls for traversing through items.
 * It includes previous and next buttons, and supports keyboard navigation.
 *
 * @param {NavigatorProps} props - The properties for the Navigator component.
 * @returns {JSX.Element} The rendered Navigator component.
 *
 * @example
 * ```jsx
 * <Navigator
 *   className="my-navigator"
 *   onNavigate={(dir) => console.log(`Navigate ${dir === -1 ? 'previous' : 'next'}`)}
 *   color="blue"
 *   length={10}
 *   current={0}
 * >
 *   <span>Current Item: 1</span>
 * </Navigator>
 * ```
 *
 * @see {@link https://adarshpastakia.github.io/react-fabric/?path=/docs/core-components-navigator--docs} for more details.
 */
export const Navigator = ({
  className,
  onNavigate,
  color,
  children,
  length,
  current,
  disableKeyHandlers,
  ...aria
}: NavigatorProps) => {
  const navPrev = useCallback(
    () => (isEmpty(current) || current !== 0) && onNavigate(-1),
    [onNavigate, current],
  );
  const navNext = useCallback(
    () => (isEmpty(current) || current + 1 < (length ?? 0)) && onNavigate(+1),
    [onNavigate, current, length],
  );
  return (
    <div
      data-ref="navigator"
      className={classNames(className, "inline-flex items-center leading-none")}
      {...aria}
    >
      {!disableKeyHandlers && <HotKey keyCombo="left" handler={navPrev} />}
      {!disableKeyHandlers && <HotKey keyCombo="right" handler={navNext} />}
      <Icon
        rtlFlip
        color={color}
        className="text-[1em] p-1"
        aria-label="previous"
        data-ref="previous"
        icon="icon-[mdi--chevron-left]"
        disabled={!isEmpty(current) && current === 0}
        onClick={(e) => [e.stopPropagation(), navPrev()]}
      />
      {children}
      <Icon
        rtlFlip
        className="text-[1em] p-1"
        color={color}
        aria-label="next"
        data-ref="next"
        icon="icon-[mdi--chevron-right]"
        disabled={!isEmpty(current) && current + 1 === length}
        onClick={(e) => [e.stopPropagation(), navNext()]}
      />
    </div>
  );
};
