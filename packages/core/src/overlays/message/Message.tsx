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
import { useCallback, useLayoutEffect, useRef } from "react";
import { Icon } from "../../components/icon/Icon";
import { type ColorState, type Elements } from "../../types";
import { getColor } from "../../utils";

export interface MessageProps {
  /**
   * svg path / webfont className / 1-4 letter text
   */
  icon: string;
  /**
   * icon image source URL, if failed to load then shows icon
   */
  iconSrc?: string;
  /**
   * flip icon in rtl
   */
  rtlFlip?: boolean;
  /**
   * message title
   */
  title?: string;
  /**
   * message text
   */
  message: string | JSX.Element;
  /**
   * theme color
   */
  color?: ColorState;
  /**
   * extra action button
   */
  actions?: Elements<JSX.Element>;
}

export const Message = ({
  title,
  message,
  color,
  icon,
  iconSrc,
  rtlFlip,
  actions,
  // @ts-expect-error internal prop
  onClose,
}: MessageProps) => {
  const elRef = useRef<HTMLDivElement>(null);
  const handleClose = useCallback(
    (ret?: AnyObject) => {
      elRef.current && (elRef.current.dataset.show = "false");
      setTimeout(() => {
        onClose(ret);
      }, 250);
    },
    [onClose],
  );
  useLayoutEffect(() => {
    setTimeout(
      () => elRef.current && (elRef.current.dataset.show = "true"),
      100,
    );
  }, []);

  return (
    <div
      className={classNames(
        "fabric-message",
        "flex flex-nowrap gap-1 px-8 relative justify-center max-w-md pointer-events-auto rounded mb-2 select-none",
      )}
      style={{
        backgroundColor: color
          ? getColor(color + "-300")
          : "var(--bg-color-invert)",
        color: color ? getColor(color + "-900") : "var(--text-color-invert)",
      }}
      ref={elRef}
    >
      {icon && (
        <Icon icon={icon} iconSrc={iconSrc} size="md" rtlFlip={rtlFlip} />
      )}
      {title && <div className="font-medium">{title}</div>}
      <div className="truncate flex-initial">{message}</div>
      {actions && (
        <div
          className="flex gap-1 flex-nowrap"
          onClickCapture={(e) => handleClose((e.target as AnyObject).value)}
        >
          {actions}
        </div>
      )}
      <div
        role="none"
        className="cursor-pointer opacity-65 absolute end-1 hover:opacity-90"
        onClick={() => handleClose()}
      >
        &times;
      </div>
    </div>
  );
};
