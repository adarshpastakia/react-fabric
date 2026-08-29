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

import { cn, isEmpty } from "@react-fabric/utilities";
import { useHotkeys } from "@tanstack/react-hotkeys";
import type { ChildProp, CssProp, CustomColors, TestProps } from "../../types";
import { Icon } from "../icon/Icon";

export interface NavigatorProps extends CssProp, TestProps, Partial<ChildProp> {
  /**
   * item list length (ignore to enable infinite navigation)
   */
  length?: number;
  /**
   * current item index (ignore to enable infinite navigation)
   */
  current?: number;

  disableKeyHandlers?: boolean;
  /**
   * navigator button color
   */
  color?: CustomColors;
  /**
   * navigation handler
   */
  onNavigate: (dir: -1 | 1) => void;
}

const buttonClassName =
  "not-disabled:cursor-pointer not-disabled:hover:bg-tint-500/20 rounded leading-0 inline-block disabled:text-tint-500/50 disabled:cursor-not-allowed";

/**
 * A component that provides navigation controls for traversing through items.
 * It includes previous and next buttons, and supports keyboard navigation.
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
 */
export function Navigator({
  className,
  onNavigate,
  color,
  children,
  length,
  current,
  disableKeyHandlers,
  ...aria
}: NavigatorProps) {
  const navPrev = () => (isEmpty(current) || current !== 0) && onNavigate(-1);
  const navNext = () => (isEmpty(current) || current + 1 < (length ?? 0)) && onNavigate(+1);

  useHotkeys([
    {
      hotkey: "ArrowLeft",
      callback: navPrev,
      options: {
        enabled: !disableKeyHandlers,
      },
    },
    {
      hotkey: "ArrowRight",
      callback: navNext,
      options: {
        enabled: !disableKeyHandlers,
      },
    },
  ]);
  return (
    <div data-ref="navigator" className={cn(className, "inline-flex gap-1 items-center leading-none")} {...aria}>
      <button
        type="button"
        className={buttonClassName}
        disabled={!isEmpty(current) && current === 0}
        onClick={(e) => [e.stopPropagation(), navPrev()]}
      >
        <Icon
          rtlFlip
          color={color}
          className="text-[1.25em] p-[0.125em]"
          aria-label="previous"
          data-ref="previous"
          icon="icon-[mdi--chevron-left]"
        />
      </button>
      <div className="text-[1em]">{children}</div>
      <button
        type="button"
        className={buttonClassName}
        disabled={!isEmpty(current) && current + 1 === length}
        onClick={(e) => [e.stopPropagation(), navNext()]}
      >
        <Icon
          rtlFlip
          className="text-[1.25em] p-[0.125em]"
          color={color}
          aria-label="next"
          data-ref="next"
          icon="icon-[mdi--chevron-right]"
        />
      </button>
    </div>
  );
}
