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

import { isNil, isNumber, isObject, mergeRefs } from "@react-fabric/utilities";
import classNames from "classnames";
import { cloneElement, isValidElement, useMemo } from "react";
import {
  type BadgeType,
  type ChildProp,
  type CssProp,
  type RefProp,
} from "../../types";
import { getIconProps, Icon, IconProps } from "../icon/Icon";

export interface BadgeProps extends CssProp, RefProp, Partial<ChildProp> {
  /**
   * make wrapper a block element
   */
  block?: boolean;
  /**
   * inline badge
   */
  inline?: boolean;
  /**
   * badge value
   */
  value?: number | string;
  /**
   * icon path or props
   */
  icon?: IconProps;
  /**
   * max value for number display
   */
  max?: number;
  /**
   * ping animation
   */
  ping?: boolean;
  /**
   * badge placement
   */
  placement?:
    | "top-start"
    | "top-end"
    | "bottom-start"
    | "bottom-end"
    | "top"
    | "bottom"
    | "start"
    | "end";
}

/**
 * Utility function to get badge properties from a badge value or object.
 * It checks if the badge is an object and returns its properties,
 *
 * @param {string | number | BadgeType} badge - The badge value or object.
 * @returns {AnyObject} An object containing badge properties.
 */
export const getBadgeProps = (
  badge?: string | number | BadgeType,
): AnyObject => {
  if (isObject(badge) && !isValidElement(badge)) {
    return Object.assign({ forButton: true, placement: "" }, badge);
  } else {
    return {
      value: badge,
      forButton: true,
      placement: "",
    };
  }
};

/**
 * A component that displays a badge with a value, icon, and optional ping animation.
 * It can be used to indicate notifications, messages, or other important information.
 * It supports various placements, inline or block display, and custom styling.
 * It can also wrap children elements, allowing for flexible usage in buttons or other components.
 *
 * @param {BadgeProps} props - The properties for the Badge component.
 * @returns {JSX.Element} The rendered Badge component.
 *
 * @example
 * ```jsx
 * <Badge value={5} max={10} ping>
 *   <button>Notifications</button>
 * </Badge>
 * ```
 *
 * @see {@link https://adarshpastakia.github.io/react-fabric/?path=/docs/core-components-badge--docs} for more details.
 */
export const Badge = ({
  ref,
  className,
  value,
  max,
  ping,
  block,
  inline,
  placement = "top-end",
  children,
  // @ts-expect-error ignore
  forButton = false,
  icon,
  ...rest
}: BadgeProps) => {
  const label = useMemo(() => {
    if (isValidElement(value)) {
      return value;
    }
    if (!isNil(value)) {
      if (isNumber(value) && max && value > max) {
        return `${max}+`;
      }
      return `${value}`;
    }
  }, [value, max]);

  const innerRef = useMemo(
    () => mergeRefs(ref, (children as AnyObject)?.props.ref),
    [ref, (children as AnyObject)?.props.ref],
  );

  /**
   * wrap children in a relative div to float badge, wrapper allows for floating a badge on elements with overflow hidden
   */
  return (
    <div
      className={classNames(
        forButton || inline ? "contents" : block ? "block" : "inline-block",
        forButton || inline ? "" : "relative",
      )}
    >
      {children &&
        cloneElement(children as AnyObject, {
          ...rest,
          ref: innerRef,
        })}
      {(!!ping || (label ?? icon)) && (
        <div
          data-ref="badge"
          data-ping={ping}
          data-placement={placement}
          className={classNames(
            "fabric-badge",
            className,
            "inline-block p-px min-w-2 min-h-2 text-center select-none rounded-full leading-none z-2 pointer-events-none",
            (forButton && !placement) || inline
              ? "relative flex-content"
              : "absolute",
          )}
        >
          {label && <span className="p-1">{label}</span>}
          {icon && <Icon {...getIconProps(icon)} />}
        </div>
      )}
    </div>
  );
};
