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
import { Children, useMemo } from "react";
import { type AriaProps, type ChildrenProp, type CssProp } from "../../types";
import { nodeCheck } from "../../utils";
import { Image, Video } from "../media/Media";
import classes from "./Card.module.css";

export interface CardCoverProps extends CssProp, AriaProps, ChildrenProp {
  /**
   * cover height
   */
  height?: string | number;
  /**
   * cover color scheme
   */
  colorScheme?: "light" | "dark";
  /**
   * justify content
   */
  justify?: "start" | "center" | "end";
}

export const CardCover = ({
  className,
  children,
  height = 120,
  justify = "end",
  colorScheme,
  ...aria
}: CardCoverProps) => {
  const [media, body] = useMemo(() => {
    return Children.toArray(children as AnyObject).reduce<AnyObject[]>(
      (ret, node) => {
        nodeCheck(node, Image, Video) ? ret[0].push(node) : ret[1].push(node);
        return ret;
      },
      [[], []],
    );
  }, [children]);
  return (
    <div
      style={{ height }}
      className={classNames(
        classes.cardCover,
        classes[colorScheme ?? "inheritScheme"],
        "relative z-0",
      )}
      {...aria}
    >
      {media}
      <div
        className={classNames(
          classes.cardCoverContent,
          "relative pointer-events-none z-1 flex flex-col flex-nowrap p-4 h-full",
          className,
          `justify-${justify}`,
          className,
        )}
      >
        {body}
      </div>
    </div>
  );
};
