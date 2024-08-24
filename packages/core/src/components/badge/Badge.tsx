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

import { isNumber, isObject, mergeRefs } from "@react-fabric/utilities";
import classNames from "classnames";
import { cloneElement, useMemo } from "react";
import {
  type BadgeType,
  type ChildProp,
  type CssProp,
  type IconProps,
  type RefProp,
} from "../../types";
import { Icon } from "../icon/Icon";
import classes from "./Badge.module.css";

export interface BadgeProps
  extends CssProp,
    RefProp,
    IconProps,
    Partial<ChildProp> {
  /**
   * make wrapper a block element
   */
  block?: boolean;
  /**
   * badge value
   */
  value?: number | string;
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

export const getBadgeProps = (
  badge?: string | number | BadgeType,
): AnyObject => {
  if (isObject(badge)) {
    return Object.assign({ forButton: true, placement: "" }, badge);
  } else {
    return {
      value: badge,
      forButton: true,
      placement: "",
    };
  }
};

export const Badge = ({
  ref,
  className,
  value,
  max,
  ping,
  block,
  placement = "top-end",
  children,
  // @ts-expect-error ignore
  forButton = false,
  icon,
  iconBg,
  iconColor,
  rtlFlip,
  ...rest
}: BadgeProps) => {
  const label = useMemo(() => {
    if (isNumber(value) && max && value > max) {
      return `${max}+`;
    }
    return `${value}`;
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
        forButton ? "contents" : "relative",
        block ? "block" : "inline-block",
      )}
    >
      {children &&
        cloneElement(children as AnyObject, {
          ...rest,
          ref: innerRef,
        })}
      <div
        data-ref="badge"
        data-ping={ping}
        data-placement={placement}
        className={classNames(
          classes.badge,
          className,
          "inline-block p-px min-w-2 min-h-2 text-center select-none rounded-full leading-none z-5 pointer-events-none",
          forButton && !placement ? "relative" : "absolute",
        )}
      >
        {label && <span className="p-1">{label}</span>}
        {icon && (
          <Icon icon={icon} bg={iconBg} color={iconColor} rtlFlip={rtlFlip} />
        )}
      </div>
    </div>
  );
};
