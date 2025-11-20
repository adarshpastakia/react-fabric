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
/* istanbul ignore file */

import { type Placement } from "@floating-ui/react";
import { type JSXElementConstructor, type Ref } from "react";

export type ModalProps<P = unknown> = P & {
  onClose: (...args: AnyObject) => void;
};

export type SizeType = "xs" | "sm" | "md" | "lg" | "xl";

export type SizeTypeWithZero = "xs" | "sm" | "md" | "lg" | "xl" | 0;

export type ColorState =
  | "primary"
  | "accent"
  | "info"
  | "danger"
  | "success"
  | "warning";

export type ColorType =
  | "primary-50"
  | "primary-100"
  | "primary-200"
  | "primary-300"
  | "primary-400"
  | "primary-500"
  | "primary-600"
  | "primary-700"
  | "primary-800"
  | "primary-900"
  | "primary-950"
  | "accent-50"
  | "accent-100"
  | "accent-200"
  | "accent-300"
  | "accent-400"
  | "accent-500"
  | "accent-600"
  | "accent-700"
  | "accent-800"
  | "accent-900"
  | "accent-950"
  | "info-50"
  | "info-100"
  | "info-200"
  | "info-300"
  | "info-400"
  | "info-500"
  | "info-600"
  | "info-700"
  | "info-800"
  | "info-900"
  | "info-950"
  | "danger-50"
  | "danger-100"
  | "danger-200"
  | "danger-300"
  | "danger-400"
  | "danger-500"
  | "danger-600"
  | "danger-700"
  | "danger-800"
  | "danger-900"
  | "danger-950"
  | "success-50"
  | "success-100"
  | "success-200"
  | "success-300"
  | "success-400"
  | "success-500"
  | "success-600"
  | "success-700"
  | "success-800"
  | "success-900"
  | "success-950"
  | "warning-50"
  | "warning-100"
  | "warning-200"
  | "warning-300"
  | "warning-400"
  | "warning-500"
  | "warning-600"
  | "warning-700"
  | "warning-800"
  | "warning-900"
  | "warning-950";

export type PaletteType =
  | "scarlet-50"
  | "scarlet-100"
  | "scarlet-200"
  | "scarlet-300"
  | "scarlet-400"
  | "scarlet-500"
  | "scarlet-600"
  | "scarlet-700"
  | "scarlet-800"
  | "scarlet-900"
  | "scarlet-950"
  | "pumpkin-50"
  | "pumpkin-100"
  | "pumpkin-200"
  | "pumpkin-300"
  | "pumpkin-400"
  | "pumpkin-500"
  | "pumpkin-600"
  | "pumpkin-700"
  | "pumpkin-800"
  | "pumpkin-900"
  | "pumpkin-950"
  | "marigold-50"
  | "marigold-100"
  | "marigold-200"
  | "marigold-300"
  | "marigold-400"
  | "marigold-500"
  | "marigold-600"
  | "marigold-700"
  | "marigold-800"
  | "marigold-900"
  | "marigold-950"
  | "avacado-50"
  | "avacado-100"
  | "avacado-200"
  | "avacado-300"
  | "avacado-400"
  | "avacado-500"
  | "avacado-600"
  | "avacado-700"
  | "avacado-800"
  | "avacado-900"
  | "avacado-950"
  | "jade-50"
  | "jade-100"
  | "jade-200"
  | "jade-300"
  | "jade-400"
  | "jade-500"
  | "jade-600"
  | "jade-700"
  | "jade-800"
  | "jade-900"
  | "jade-950"
  | "denim-50"
  | "denim-100"
  | "denim-200"
  | "denim-300"
  | "denim-400"
  | "denim-500"
  | "denim-600"
  | "denim-700"
  | "denim-800"
  | "denim-900"
  | "denim-950"
  | "iris-50"
  | "iris-100"
  | "iris-200"
  | "iris-300"
  | "iris-400"
  | "iris-500"
  | "iris-600"
  | "iris-700"
  | "iris-800"
  | "iris-900"
  | "iris-950"
  | "lilac-50"
  | "lilac-100"
  | "lilac-200"
  | "lilac-300"
  | "lilac-400"
  | "lilac-500"
  | "lilac-600"
  | "lilac-700"
  | "lilac-800"
  | "lilac-900"
  | "lilac-950"
  | "coral-50"
  | "coral-100"
  | "coral-200"
  | "coral-300"
  | "coral-400"
  | "coral-500"
  | "coral-600"
  | "coral-700"
  | "coral-800"
  | "coral-900"
  | "coral-950"
  | "wood-50"
  | "wood-100"
  | "wood-200"
  | "wood-300"
  | "wood-400"
  | "wood-500"
  | "wood-600"
  | "wood-700"
  | "wood-800"
  | "wood-900"
  | "wood-950"
  | "silver-50"
  | "silver-100"
  | "silver-200"
  | "silver-300"
  | "silver-400"
  | "silver-500"
  | "silver-600"
  | "silver-700"
  | "silver-800"
  | "silver-900"
  | "silver-950"
  | "steel-50"
  | "steel-100"
  | "steel-200"
  | "steel-300"
  | "steel-400"
  | "steel-500"
  | "steel-600"
  | "steel-700"
  | "steel-800"
  | "steel-900"
  | "steel-950"
  | "olive-50"
  | "olive-100"
  | "olive-200"
  | "olive-300"
  | "olive-400"
  | "olive-500"
  | "olive-600"
  | "olive-700"
  | "olive-800"
  | "olive-900"
  | "olive-950"
  | "sand-50"
  | "sand-100"
  | "sand-200"
  | "sand-300"
  | "sand-400"
  | "sand-500"
  | "sand-600"
  | "sand-700"
  | "sand-800"
  | "sand-900"
  | "sand-950"
  | "tint-50"
  | "tint-100"
  | "tint-200"
  | "tint-300"
  | "tint-400"
  | "tint-500"
  | "tint-600"
  | "tint-700"
  | "tint-800"
  | "tint-900"
  | "tint-950";

export type ColorWithGrays = ColorType | "invert" | "dimmed" | "muted";

export const ThemeColors = [
  "primary",
  "accent",
  "info",
  "danger",
  "success",
  "warning",
  "invert",
  "dimmed",
  "muted",
  "gray",
  "dark",
  "light",
];

export interface TooltipType {
  /**
   * tooltip content
   */
  content?: string | JSX.Element;
  /**
   * tooltip color
   */
  color?: ColorType | PaletteType | string;
  /**
   * text color
   */
  textColor?: ColorType | PaletteType | string;
  /**
   * tooltip placement
   */
  placement?: Placement;
}

export interface BadgeType {
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
   * badge CSS className
   */
  className?: string;
}

export interface CssProp {
  /**
   * css classname(s)
   */
  className?: string;
  /**
   * direction
   */
  dir?: "ltr" | "rtl";
}

export interface TestProps {
  /**
   * data attribute for test id
   */
  "data-testid"?: string;
  /**
   * data attribute for test value
   */
  "data-test-value"?: AnyObject;
}

export type Elements<T> = React.ReactElement<T> | React.ReactNode;

export type AriaProps = React.AriaAttributes;

/**
 * For wrapping components
 */

export interface RefProp<T = HTMLElement> {
  ref?: Ref<T>;
}

/* *********** */

 
export type CallbackReturn<T = unknown> =
  | undefined
  | T
  | Promise<T | undefined>;

export type ReactTag = keyof JSX.IntrinsicElements | JSXElementConstructor<any>;

export type PropsOf<AsTag extends ReactTag> = AsTag extends React.ElementType
  ? Omit<React.ComponentProps<AsTag>, "ref">
  : never;

export type PolymorphicProps<AsTag extends ReactTag> = Omit<
  PropsOf<AsTag>,
  "children" | "as" | "className" | "onClick"
> & {
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  as?: AsTag;
};

export interface CollapseProps {
  /**
   * Allow collapsing
   */
  collapsable?: boolean;
  /**
   * Default collapsed
   */
  collapsed?: boolean;
  /**
   * Collapse event
   */
  onCollapse?: (state: boolean) => void;
}
export interface ExpandProps {
  /**
   * Allow expanding
   */
  expandable?: boolean;
  /**
   * Default expanded
   */
  expanded?: boolean;
  /**
   * Expand event
   */
  onExpand?: (state: boolean) => void;
}

export interface TooltipProp {
  /**
   * floating tooltip
   */
  tooltip?: string | TooltipType;
}

export interface ChildProp<T = JSX.Element> {
  children: Elements<T>;
}

export interface ChildrenProp<T = JSX.Element> {
  children: Elements<T> | Array<Elements<T>>;
}

export interface PositionObject {
  top: number;
  left: number;
}

export interface SizeObject {
  width: number;
  height: number;
}

export interface ScrollObject extends PositionObject, SizeObject {
  scrollWidth?: number;
  scrollHeight: number;
}

export type ArrayType<T extends readonly any[] | ArrayLike<any> | undefined> =
  T extends readonly any[]
    ? T[number]
    : T extends ArrayLike<any>
      ? T[number]
      : undefined;

export type Complete<T> = {
  [P in keyof Required<T>]: Pick<T, P> extends Required<Pick<T, P>>
    ? T[P]
    : T[P] | undefined;
};
