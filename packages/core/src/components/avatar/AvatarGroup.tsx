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
import { Children, useMemo } from "react";
import { useMemoDebugger } from "../../hooks/useEffectDebugger";
import type { ChildrenProp, CssProp, RefProp, SizeType } from "../../types";
import type { AvatarProps } from "./Avatar";

export interface AvatarGroupProps
  extends CssProp, RefProp<HTMLDivElement>, ChildrenProp<Omit<AvatarProps, "size" | "rounded">> {
  /**
   * Whether to apply a fully rounded shape to all avatars and the group container.
   */
  rounded?: boolean;
  /**
   * Avatar size. Accepts `"xs"`–`"xl"` tokens or a custom CSS size value.
   */
  size?: SizeType | number | (string & {});
  /**
   * Maximum number of avatars to display before showing a "+N" overflow badge.
   */
  max?: number;
}

const SizeMap: KeyValue<string> = {
  xs: "0.875rem",
  sm: "1.125rem",
  md: "1.5rem",
  lg: "2rem",
  xl: "2.5rem",
};

/**
 * Horizontal group of avatars with an overflow count badge.
 *
 * Renders its avatar children in a flex row, truncating to `max` visible
 * avatars and appending a "+N" badge for the remainder. Each avatar is
 * sized according to the `size` prop.
 *
 * @example
 * ```tsx
 * import { Avatar, AvatarGroup } from "@react-fabric/core";
 *
 * <AvatarGroup max={3} size="md">
 *     <Avatar name="John Doe" avatar="/john.jpg" />
 *     <Avatar name="Jane Smith" avatar="/jane.jpg" />
 *     <Avatar name="Alice Johnson" avatar="/alice.jpg" />
 *     <Avatar name="Bob Brown" avatar="/bob.jpg" />
 * </AvatarGroup>
 * // Renders 3 avatars + a "+1" badge
 * ```
 */
export function AvatarGroup({ ref, children, className, max, rounded, size, ...props }: AvatarGroupProps) {
  // Compute inline styles from size prop (memoized to prevent re-renders)
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

  // Normalize children to an array, filtering out falsy values
  // eslint-disable-next-line @eslint-react/no-children-to-array
  const avatars = useMemo(() => Children.toArray(children).filter(Boolean), [children]);
  // Calculate how many avatars exceed the max (0 if none)
  const diff = useMemo(() => max && avatars.length > max && avatars.length - max, [avatars, max]);
  return (
    <div
      {...props}
      ref={ref}
      className={cn("fabric-avatarGroup", "inline-flex flex-nowrap", className, rounded ? "rounded-full" : "rounded")}
      style={styles}
    >
      {avatars.slice(0, max)}
      {!!diff && (
        <dfn
          data-ref="avatarCount"
          className={cn(
            "fabric-avatar",
            "fabric-avatarGroup--extra",
            "select-none relative overflow-hidden inline-block box-content bg-muted leading-none not-italic text-center",
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
}
