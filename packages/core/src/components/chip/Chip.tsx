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
  type PaletteType,
  type PolymorphicProps,
  type RefProp,
  type SizeType,
  type TestProps,
} from "../../types";
import { getColor } from "../../utils";
import { Icon } from "../icon/Icon";

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
  size?: SizeType | number | string;
  /**
   * chip color (CSS color / tailwind color)
   */
  color?: ColorType | PaletteType | string;
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

/**
 * A component that represents a small block of information, often used for tags, categories, or actions.
 * It allows customization of size, color, variant, and includes optional icon and remove functionality.
 * It supports various properties for styling and interaction, including click handlers and disabled state.
 * It can be used in various contexts, such as filtering options, displaying tags, or representing user actions.
 * It can be styled with custom CSS classes and supports features like rounded edges and click handling.
 * It can also include an icon and a remove button, making it versatile for different use cases.
 *
 * @param {ChipProps} props - The properties for the Chip component.
 * @returns {JSX.Element} The rendered Chip component.
 *
 * @example
 * ```jsx
 * <Chip color="primary" size="md" className="my-chip">
 *   Example Chip
 * </Chip>
 * ```
 *
 * @see {@link https://adarshpastakia.github.io/react-fabric/?path=/docs/core-components-chip--docs} for more details.
 */
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
      data-ref="chip"
      className={classNames(
        "fabric-chip",
        className,
        "select-none inline-flex flex-nowrap items-center align-middle max-w-72 rounded",
        rounded && "rounded-full",
        !!onClick && "clickable",
        disabled && "disabled",
      )}
      style={styles}
      data-variant={variant}
      data-inner-clickable={!!onClick}
      {...{ onClick: disabled ? undefined : clickHandler }}
      {...aria}
    >
      {icon && (
        <Icon
          data-ref="chipIcon"
          className={classNames("fabric-chipIcon", "m-1 flex-auto")}
          icon={icon}
          bg={iconBg}
          onClick={onIconClick}
          color={iconColor}
          rtlFlip={rtlFlip}
        />
      )}
      {children && (
        <label
          data-ref="chipLabel"
          className={classNames("fabric-chipLabel", "truncate")}
        >
          {children}
        </label>
      )}
      {onRemove && (
        <span
          role="none"
          data-ref="chipRemove"
          data-inner-cliackable
          className={classNames(
            "fabric-chipRemove",
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
