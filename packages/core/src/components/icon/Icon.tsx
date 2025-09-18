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
import { useMemo } from "react";
import {
  type PaletteType,
  type AriaProps,
  type ColorType,
  type CssProp,
  type RefProp,
  type SizeType,
  type TestProps,
} from "../../types";
import { getColor } from "../../utils";

export interface IconProps extends CssProp, AriaProps, RefProp, TestProps {
  /**
   * svg path / webfont className / 1-4 letter text
   */
  icon: string;
  /**
   * background color (CSS color / tailwind color)
   */
  bg?: ColorType | PaletteType | string;
  /**
   * icon color (CSS color / tailwind color)
   */
  color?: ColorType | PaletteType | string;
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
  disabled?: boolean;
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
 * A versatile icon component that supports SVG paths, webfont icons, and text icons.
 * It can be styled with background color, icon color, size, and animations.
 * It also supports RTL flipping and rounded corners.
 * The component can be used as a standalone icon or as part of other components.
 * It accepts various properties to customize its appearance and behavior.
 * These include `bg`, `color`, `size`, `rtlFlip`, `animate`, and `rounded`.
 *
 * @param {IconProps} props - The properties for the Icon component.
 * @returns {JSX.Element} The rendered Icon component.
 *
 * @example
 * ```jsx
 * <Icon
 *   icon="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"
 *   bg="bg-blue-500"
 *   color="text-white"
 *   size="lg"
 *   rtlFlip={true}
 *   animate="spin"
 *   rounded={true}
 *   onClick={() => console.log("Icon clicked")}
 * />
 * // Renders an icon with a SVG path, blue background, white text color,
 * // large size, RTL flip, spin animation, rounded corners, and a click handler.
 * ```
 *
 * @see {@link https://adarshpastakia.github.io/react-fabric/?path=/docs/core-components-icon--docs} for more details.
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
  disabled,
  viewBox = "0 0 24 24",
  className,
  onClick,
  ...rest
}: IconProps) => {
  /** ***************** style map *******************/
  const styles = useMemo(() => {
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
  }, [bg, color, size]);

  /** ***************** check if icon is svg path *******************/
  const isSvg = useMemo(() => {
    return isSvgPath(icon);
  }, [icon]);

  /** ***************** render icon *******************/
  const iconEl = useMemo(() => {
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
          style={{ fontSize: SvgTextSize[icon.length] }}
        >
          {icon}
        </text>
      </svg>
    ) : (
      <i className={`${icon}`} />
    );
  }, [icon, isSvg, viewBox]);

  return (
    <dfn
      data-ref="icon"
      ref={ref}
      {...rest}
      role="presentation"
      className={classNames(
        "fabric-icon",
        "select-none overflow-hidden box-content leading-none not-italic text-center",
        !rounded && "rounded",
        rounded && "rounded-full",
        animate && `animate-${animate}`,
        !!onClick && disabled && "opacity-30 pointer-events-none",
        className,
      )}
      onClick={(e) => {
        onClick && e.stopPropagation();
        onClick && e.preventDefault();
        onClick?.(e);
      }}
      data-flip={rtlFlip}
      style={styles}
      data-clickable={!!onClick}
      data-inner-clickable={!!onClick}
    >
      {iconEl}
    </dfn>
  );
};
