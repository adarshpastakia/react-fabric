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
import { useCallback, type ReactElement } from "react";
import { useMemoDebugger } from "../../hooks/useEffectDebugger";
import {
  type AriaProps,
  type ChildProp,
  type ColorType,
  type CssProp,
  type IconProps,
  type PolymorphicProps,
  type RefProp,
  type SizeType,
  type TestProps,
} from "../../types";
import { getColor, getColorClass } from "../../utils";
import { Icon } from "../icon/Icon";
import classes from "./Chip.module.css";

export interface ChipProps
  extends CssProp,
    AriaProps,
    IconProps,
    TestProps,
    ChildProp<string | ReactElement>,
    RefProp<HTMLDivElement> {
  /**
   * chip size
   */
  size?: SizeType;
  /**
   * chip color (CSS color / tailwind color)
   */
  color?: ColorType | string;
  /**
   * chip styling
   */
  variant?: "solid" | "outline";
  /**
   * full rounded edges
   */
  rounded?: boolean;
  /**
   * disabled state
   */
  disabled?: boolean;
  /**
   * prevent click propagation
   */
  stopPropagation?: boolean;
  /**
   * click handler
   */
  onClick?: React.MouseEventHandler;
  /**
   * icon click handler
   */
  onIconClick?: React.MouseEventHandler;
  /**
   * remove handler
   */
  onRemove?: React.MouseEventHandler;
}

const SizeMap: KeyValue<string> = {
  xs: "0.625rem",
  sm: "0.875rem",
  md: "1.125rem",
  lg: "1.5rem",
  xl: "2rem",
};

export const Chip = <Tag extends React.ElementType = "div">({
  ref,
  children,
  className,
  size,
  color,
  variant,
  icon,
  iconBg,
  iconColor,
  rtlFlip,
  disabled,
  onClick,
  onIconClick,
  onRemove,
  rounded,
  stopPropagation,
  as,
  ...aria
}: ChipProps & PolymorphicProps<Tag>) => {
  /** ***************** style map *******************/
  const styles = useMemoDebugger(
    () => {
      const s: KeyValue = {};
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
    [color, size],
    "Chip styles",
  );

  const clickHandler = useCallback(
    (e: React.MouseEvent) => {
      if (stopPropagation) e.stopPropagation();
      onClick?.(e);
    },
    [onClick, stopPropagation],
  );

  const removeHandler = useCallback(
    (e: React.MouseEvent) => {
      if (stopPropagation) e.stopPropagation();
      onRemove?.(e);
    },
    [onRemove, stopPropagation],
  );

  const E = as ?? "div";
  return (
    <E
      ref={ref}
      role="term"
      className={classNames(
        classes.chip,
        className,
        color && getColorClass(color),
        "select-none inline-flex flex-nowrap items-center max-w-72 text-sm leading-none rounded",
        rounded && "rounded-full",
        !!onClick && classes.clickable,
        disabled && classes.disabled,
      )}
      style={styles}
      data-variant={variant}
      data-inner-clickable={!!onClick}
      {...{ onClick: clickHandler }}
      {...aria}
    >
      {icon && (
        <Icon
          className={classNames(classes.chipIcon, "m-1")}
          icon={icon}
          bg={iconBg}
          onClick={onIconClick}
          color={iconColor}
          rtlFlip={rtlFlip}
        />
      )}
      {children && (
        <label
          className={classNames(classes.chipLabel, "leading-none truncate")}
        >
          {children}
        </label>
      )}
      {onRemove && (
        <span
          role="none"
          className={classNames(
            classes.chipRemove,
            "cursor-pointer pe-1 opacity-65 hover:opacity-90",
          )}
          onClick={removeHandler}
        >
          &times;
        </span>
      )}
    </E>
  );
};
