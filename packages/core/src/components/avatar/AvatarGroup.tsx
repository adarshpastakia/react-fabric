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
import { Children, useMemo, type ReactElement } from "react";
import { useMemoDebugger } from "../../hooks/useEffectDebugger";
import {
  type AriaProps,
  type CssProp,
  type RefProp,
  type SizeType,
} from "../../types";
import { type AvatarProps } from "./Avatar";

type AvatarChild =
  | ReactElement<Omit<AvatarProps, "size" | "rounded">>
  | false
  | undefined;

export interface AvatarGroupProps extends CssProp, RefProp, AriaProps {
  children: AvatarChild | AvatarChild[];
  /**
   * rounded icon
   */
  rounded?: boolean;
  /**
   * icon size
   */
  size?: SizeType | number | string;
  /**
   * max count
   */
  totalCount?: number;
}

const SizeMap: KeyValue<string> = {
  xs: "0.875rem",
  sm: "1.125rem",
  md: "1.5rem",
  lg: "2rem",
  xl: "2.5rem",
};

/**
 * A component that groups multiple avatars together, displaying a count of additional avatars if the total exceeds the visible ones.
 * It allows customization of size, rounding, and additional aria attributes.
 * This component is useful for displaying a collection of user avatars in a compact format, such as in a chat application or user list.
 * It automatically calculates the number of additional avatars based on the `totalCount` prop and the number of children provided.
 *
 * @param {AvatarGroupProps} props - The properties for the AvatarGroup component.
 * @returns {JSX.Element} The rendered AvatarGroup component.
 *
 * @example
 * ```jsx
 * <AvatarGroup totalCount={5} size="md" className="my-avatar-group">
 *   <Avatar name="John Doe" avatar="https://example.com/avatar1.jpg" />
 *   <Avatar name="Jane Smith" avatar="https://example.com/avatar2.jpg" />
 *   <Avatar name="Alice Johnson" avatar="https://example.com/avatar3.jpg" />
 *   <Avatar name="Bob Brown" avatar="https://example.com/avatar4.jpg" />
 * </AvatarGroup>
 * ```
 *
 * @see {@link https://adarshpastakia.github.io/react-fabric/?path=/docs/core-components-avatar--docs} for more details.
 */
export const AvatarGroup = ({
  ref,
  children,
  className,
  totalCount,
  rounded,
  size,
  ...aria
}: AvatarGroupProps) => {
  /** ***************** style map *******************/
  const styles = useMemoDebugger(
    () => {
      const s: KeyValue = {};
      if (size && !(size in SizeMap)) {
        s.fontSize = size;
      }
      if (size && size in SizeMap) {
        s.fontSize = SizeMap[size];
      }
      return s;
    },
    [size],
    "Icon styles",
  );

  const avatars = useMemo(
    () => Children.toArray(children).filter(Boolean),
    [children],
  );
  const diff = useMemo(
    () =>
      totalCount && totalCount > avatars.length && totalCount - avatars.length,
    [avatars, totalCount],
  );
  return (
    <div
      {...aria}
      ref={ref as AnyObject}
      className={classNames(
        "fabric-avatarGroup",
        className,
        "inline-flex flex-nowrap",
        !rounded && "rounded",
        rounded && "rounded-full",
      )}
      style={styles}
    >
      {avatars}
      {!!diff && (
        <dfn
          data-ref="avatarCount"
          className={classNames(
            "fabric-avatar",
            "select-none relative overflow-hidden inline-block box-content leading-none not-italic text-center",
            "fabric-avatarGroup--extra",
          )}
        >
          <svg>
            <text
              x="50%"
              y="50%"
              dy=".1em"
              dominantBaseline="middle"
              textAnchor="middle"
              style={{ fontSize: ".375em", fontWeight: 500 }}
            >
              {`+${diff}`}
            </text>
          </svg>
        </dfn>
      )}
    </div>
  );
};
