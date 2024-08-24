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

import { isString, isSvgPath } from "@react-fabric/utilities";
import classNames from "classnames";
import { useMemoDebugger } from "../../hooks/useEffectDebugger";
import {
  type AriaProps,
  type ColorType,
  type CssProp,
  type RefProp,
  type SizeType,
  type TestProps,
} from "../../types";
import { getBgClass, getColor, getColorClass } from "../../utils";
import classes from "./Icon.module.css";

export interface IconProps extends CssProp, AriaProps, RefProp, TestProps {
  /**
   * svg path / webfont className / 1-4 letter text
   */
  icon: string;
  /**
   * background color (CSS color / tailwind color)
   */
  bg?: ColorType | string;
  /**
   * icon color (CSS color / tailwind color)
   */
  color?: ColorType | string;
  /**
   * flip icon in rtl
   */
  rtlFlip?: boolean;
  /**
   * icon size
   */
  size?: SizeType | number | string;
  /**
   * viewbox for svg path (default 24)
   */
  viewBox?: string;
  /**
   * rounded icon
   */
  rounded?: boolean;
  /**
   * apply animation
   */
  animate?: "spin" | "pulse" | "bounce";
  /**
   * click handler
   */
  onClick?: React.MouseEventHandler;
}

const SvgTextSize = ["", ".875em", ".525em", ".35em", ".25em"];
const SizeMap: KeyValue<string> = {
  xs: "0.625rem",
  sm: "0.875rem",
  md: "1.125rem",
  lg: "1.5rem",
  xl: "2rem",
};

/**
 * An icon is a display component for svg icon path / image
 */
export const Icon = ({
  ref,
  icon,
  bg,
  color,
  size = "",
  rtlFlip,
  animate,
  rounded,
  viewBox = "0 0 24 24",
  className,
  onClick,
  ...rest
}: IconProps) => {
  /** ***************** style map *******************/
  const styles = useMemoDebugger(
    () => {
      const s: KeyValue = {};
      if (bg) {
        s.backgroundColor = getColor(bg);
      }
      if (color) {
        s.color = getColor(color);
      }
      if (size && !(size in SizeMap)) {
        s.fontSize = size;
      }
      if (size && size in SizeMap) {
        s.fontSize = SizeMap[size];
      }
      return s;
    },
    [bg, color, size],
    "Icon styles",
  );

  /** ***************** check if icon is svg path *******************/
  const isSvg = useMemoDebugger(
    () => {
      return isSvgPath(icon);
    },
    [icon],
    "Icon isSvg",
  );

  /** ***************** render icon *******************/
  const iconEl = useMemoDebugger(
    () => {
      if (!isString(icon)) {
        throw Error("Invalid icon expected string");
      }
      return isSvg ? (
        <svg viewBox={viewBox}>
          <path fill="currentColor" d={icon.toString()} />
        </svg>
      ) : icon?.toString().length <= 4 ? (
        <svg role="img">
          <text
            x="50%"
            y="50%"
            dy=".1em"
            dominantBaseline="middle"
            textAnchor="middle"
            style={{ fontSize: SvgTextSize[icon.length] ?? "1em" }}
          >
            {icon}
          </text>
        </svg>
      ) : (
        <i className={`${icon}`} />
      );
    },
    [icon, isSvg, viewBox],
    "Icon el",
  );

  return (
    <dfn
      {...rest}
      ref={ref}
      role="presentation"
      className={classNames(
        classes.icon,
        className,
        "select-none overflow-hidden inline-block box-content leading-none not-italic text-center",
        bg && getBgClass(bg),
        color && getColorClass(color),
        !rounded && "rounded",
        rounded && "rounded-full",
        animate && `animate-${animate}`,
      )}
      onClick={onClick}
      data-flip={rtlFlip}
      style={styles}
      data-clickable={!!onClick}
    >
      {iconEl}
    </dfn>
  );
};
