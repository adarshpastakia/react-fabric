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
  | "accent-50"
  | "info-50"
  | "danger-50"
  | "success-50"
  | "warning-50"
  | "primary-100"
  | "accent-100"
  | "info-100"
  | "danger-100"
  | "success-100"
  | "warning-100"
  | "primary-200"
  | "accent-200"
  | "info-200"
  | "danger-200"
  | "success-200"
  | "warning-200"
  | "primary-300"
  | "accent-300"
  | "info-300"
  | "danger-300"
  | "success-300"
  | "warning-300"
  | "primary-400"
  | "accent-400"
  | "info-400"
  | "danger-400"
  | "success-400"
  | "warning-400"
  | "primary-500"
  | "accent-500"
  | "info-500"
  | "danger-500"
  | "success-500"
  | "warning-500"
  | "primary-600"
  | "accent-600"
  | "info-600"
  | "danger-600"
  | "success-600"
  | "warning-600"
  | "primary-700"
  | "accent-700"
  | "info-700"
  | "danger-700"
  | "success-700"
  | "warning-700"
  | "primary-800"
  | "accent-800"
  | "info-800"
  | "danger-800"
  | "success-800"
  | "warning-800"
  | "primary-900"
  | "accent-900"
  | "info-900"
  | "danger-900"
  | "success-900"
  | "warning-900"
  | "primary-950"
  | "accent-950"
  | "info-950"
  | "danger-950"
  | "success-950"
  | "warning-950";

export type PaletteType =
  | "scarlet-50"
  | "pumpkin-50"
  | "marigold-50"
  | "avacado-50"
  | "jade-50"
  | "denim-50"
  | "iris-50"
  | "lilac-50"
  | "coral-50"
  | "wood-50"
  | "silver-50"
  | "steel-50"
  | "olive-50"
  | "sand-50"
  | "scarlet-100"
  | "pumpkin-100"
  | "marigold-100"
  | "avacado-100"
  | "jade-100"
  | "denim-100"
  | "iris-100"
  | "lilac-100"
  | "coral-100"
  | "wood-100"
  | "silver-100"
  | "steel-100"
  | "olive-100"
  | "sand-100"
  | "scarlet-200"
  | "pumpkin-200"
  | "marigold-200"
  | "avacado-200"
  | "jade-200"
  | "denim-200"
  | "iris-200"
  | "lilac-200"
  | "coral-200"
  | "wood-200"
  | "silver-200"
  | "steel-200"
  | "olive-200"
  | "sand-200"
  | "scarlet-300"
  | "pumpkin-300"
  | "marigold-300"
  | "avacado-300"
  | "jade-300"
  | "denim-300"
  | "iris-300"
  | "lilac-300"
  | "coral-300"
  | "wood-300"
  | "silver-300"
  | "steel-300"
  | "olive-300"
  | "sand-300"
  | "scarlet-400"
  | "pumpkin-400"
  | "marigold-400"
  | "avacado-400"
  | "jade-400"
  | "denim-400"
  | "iris-400"
  | "lilac-400"
  | "coral-400"
  | "wood-400"
  | "silver-400"
  | "steel-400"
  | "olive-400"
  | "sand-400"
  | "scarlet-500"
  | "pumpkin-500"
  | "marigold-500"
  | "avacado-500"
  | "jade-500"
  | "denim-500"
  | "iris-500"
  | "lilac-500"
  | "coral-500"
  | "wood-500"
  | "silver-500"
  | "steel-500"
  | "olive-500"
  | "sand-500"
  | "scarlet-600"
  | "pumpkin-600"
  | "marigold-600"
  | "avacado-600"
  | "jade-600"
  | "denim-600"
  | "iris-600"
  | "lilac-600"
  | "coral-600"
  | "wood-600"
  | "silver-600"
  | "steel-600"
  | "olive-600"
  | "sand-600"
  | "scarlet-700"
  | "pumpkin-700"
  | "marigold-700"
  | "avacado-700"
  | "jade-700"
  | "denim-700"
  | "iris-700"
  | "lilac-700"
  | "coral-700"
  | "wood-700"
  | "silver-700"
  | "steel-700"
  | "olive-700"
  | "sand-700"
  | "scarlet-800"
  | "pumpkin-800"
  | "marigold-800"
  | "avacado-800"
  | "jade-800"
  | "denim-800"
  | "iris-800"
  | "lilac-800"
  | "coral-800"
  | "wood-800"
  | "silver-800"
  | "steel-800"
  | "olive-800"
  | "sand-800"
  | "scarlet-900"
  | "pumpkin-900"
  | "marigold-900"
  | "avacado-900"
  | "jade-900"
  | "denim-900"
  | "iris-900"
  | "lilac-900"
  | "coral-900"
  | "wood-900"
  | "silver-900"
  | "steel-900"
  | "olive-900"
  | "sand-900"
  | "scarlet-950"
  | "pumpkin-950"
  | "marigold-950"
  | "avacado-950"
  | "jade-950"
  | "denim-950"
  | "iris-950"
  | "lilac-950"
  | "coral-950"
  | "wood-950"
  | "silver-950"
  | "steel-950"
  | "olive-950"
  | "sand-950";

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

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
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

export interface IconProps {
  /**
   * svg path / image url
   */
  icon?: string;
  /**
   * flip icon in rtl
   */
  rtlFlip?: boolean;
  /**
   * icon background color
   */
  iconBg?: ColorType | PaletteType | string;
  /**
   * icon color
   */
  iconColor?: ColorType | PaletteType | string;
}

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
