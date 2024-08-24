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

import { isSvgPath } from "@react-fabric/utilities";
import BoringAvatar from "boring-avatars";
import classNames from "classnames";
import { useState } from "react";
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
import classes from "./Avatar.module.css";

export interface AvatarProps extends CssProp, AriaProps, TestProps, RefProp {
  /**
   * avatar name for generated fallback
   */
  name: string;
  /**
   * svg path
   */
  fallbackIcon?: string;
  /**
   * avatar image url
   */
  avatar?: string;
  /**
   * avatar variant
   */
  variant?: "text" | "beam" | "pixel" | "bauhaus";
  /**
   * background color (CSS color / tailwind color)
   */
  bg?: ColorType | string;
  /**
   * icon color (CSS color / tailwind color)
   */
  color?: ColorType | string;
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
   * click handler
   */
  onClick?: React.MouseEventHandler;
}

const SizeMap: KeyValue<string> = {
  xs: "0.875rem",
  sm: "1.125rem",
  md: "1.5rem",
  lg: "2rem",
  xl: "2.5rem",
};

/**
 * An avatar is a graphical representation of a user's identity.
 */
export const Avatar = ({
  ref,
  name,
  avatar,
  fallbackIcon,
  bg,
  color,
  size = "",
  rounded,
  variant = "beam",
  className,
  viewBox = "0 0 24 24",
  onClick,
  ...aria
}: AvatarProps) => {
  const [fallback, setFallback] = useState(true);

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
    "Avatar styles",
  );

  /** ***************** render icon *******************/
  const avatarImage = useMemoDebugger(
    () => {
      setFallback(!avatar);
      return (
        avatar && (
          <div className="contents">
            <div
              className={classNames(
                classes.imgPlaceholder,
                "absolute inset-0 bg-gray animate-pulse",
              )}
            />
            <img
              src={avatar}
              alt={avatar}
              className="align-baseline"
              onError={() => setFallback(true)}
              onLoad={(e) => e.currentTarget.previousElementSibling?.remove()}
            />
          </div>
        )
      );
    },
    [avatar],
    "Avatar icon",
  );

  const fallbackAvatar = useMemoDebugger(
    () => {
      if (fallbackIcon) {
        return isSvgPath(fallbackIcon) ? (
          <svg viewBox={viewBox}>
            <path fill="currentColor" d={fallbackIcon.toString()} />
          </svg>
        ) : (
          <i className={fallbackIcon} />
        );
      }
      if (variant === "text") {
        const [, first, second, group] =
          name.match(/(?=(\w).* (\w).*)|(?=(\w\w).*)/) ?? [];
        return (
          <svg role="img">
            <text
              x="50%"
              y="50%"
              dy=".1em"
              dominantBaseline="middle"
              textAnchor="middle"
              style={{ fontSize: ".5em", fontWeight: 500 }}
            >
              {group ?? `${first}${second}`}
            </text>
          </svg>
        );
      }
      return <BoringAvatar square size={64} variant={variant} name={name} />;
    },
    [name, variant, fallbackIcon],
    "Avatar fallback",
  );

  return (
    <dfn
      role="presentation"
      className={classNames(
        classes.avatar,
        className,
        "select-none relative overflow-hidden inline-block box-content leading-none not-italic text-center",
        bg && getBgClass(bg),
        color && getColorClass(color),
        !rounded && "rounded",
        rounded && "rounded-full",
      )}
      onClick={onClick}
      style={styles}
      data-clickable={!!onClick}
      ref={ref}
      {...aria}
    >
      {!fallback && avatarImage}
      {fallback && fallbackAvatar}
    </dfn>
  );
};
