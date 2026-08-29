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
import { Fragment, isValidElement } from "react";
import type { CssPropWithMap } from "../../types";
import { getIconProps } from "../../utils";
import { StyleEffect } from "../effect/StyleEffect";
import type { IconProps } from "../icon/Icon";
import { Icon } from "../icon/Icon";

export interface TitlebarProps {
  title?: string | React.ReactNode;
  /**
   * icon path or props
   */
  icon?: IconProps;
  /**
   * header append actions
   */
  actions?: React.ReactElement | false | null;
  /**
   * header prepend actions
   */
  prepend?: React.ReactElement | false | null;
}

/**
 * Header bar with optional icon, title, and action elements.
 * Renders as a semantic <header> element.
 */
export function Titlebar({
  title,
  className,
  classNames,
  icon,
  actions,
  prepend,
  onClick,
}: TitlebarProps & { onClick?: () => void } & CssPropWithMap<{
    root?: string;
    title?: string;
    icon?: string;
    actions?: string;
    prepend?: string;
  }>) {
  return (
    <div
      className={cn(
        "fabric-titlebar",
        "empty:hidden not-empty:border-b border-soft",
        className,
        classNames?.root,
        "grid items-center rounded-t-[inherit] px-2 py-1 relative",
      )}
      data-ref="titlebar"
    >
      <StyleEffect showBorder={false} />
      {isValidElement(title) ? (
        title
      ) : (
        <Fragment>
          {prepend && (
            <div data-ref="titlebar-actions" className={cn("fabric-titlebarActions", classNames?.prepend)}>
              {prepend}
            </div>
          )}
          {icon && (
            <Icon
              className={cn("fabric-titlebarIcon", classNames?.icon, "p-1 text-lg select-none pointer-events-none")}
              {...getIconProps(icon)}
            />
          )}
          {title && (
            <div
              role="none"
              data-ref="titlebar-title"
              onClick={onClick}
              className={cn("fabric-titlebarTitle", classNames?.title, "truncate py-0.5 px-1 select-none")}
            >
              {title}
            </div>
          )}
          {actions && (
            <div data-ref="titlebar-actions" className={cn("fabric-titlebarActions flex gap-px", classNames?.actions)}>
              {actions}
            </div>
          )}
        </Fragment>
      )}
    </div>
  );
}
