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

export type SizeType = "xs" | "sm" | "md" | "lg" | "xl";

export type SizeTypeWithZero = "xs" | "sm" | "md" | "lg" | "xl" | 0;

export type ColorType =
  | "primary"
  | "accent"
  | "info"
  | "danger"
  | "success"
  | "warning";

export type PaletteType =
  | "scarlet"
  | "pumpkin"
  | "marigold"
  | "avacado"
  | "jade"
  | "denim"
  | "iris"
  | "lilac"
  | "coral"
  | "wood"
  | "silver"
  | "steel"
  | "olive"
  | "sand";

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
  color?: ColorType;
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

export type Elements<T> =
  | React.ReactElement<T>
  | React.ReactPortal
  | React.ReactNode
  | string
  | number
  | boolean
  | null
  | undefined;

export type AriaProps = React.AriaAttributes;

/**
 * For wrapping components
 */

export interface RefProp<T = HTMLElement> {
  ref?: Ref<T>;
}

/* *********** */

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export type CallbackReturn<T = unknown> = void | T | Promise<T | void>;

export type ReactTag = keyof JSX.IntrinsicElements | JSXElementConstructor<any>;

export type PropsOf<AsTag extends ReactTag> = AsTag extends React.ElementType
  ? Omit<React.ComponentProps<AsTag>, "ref">
  : never;

export type PolymorphicProps<AsTag extends ReactTag> = Omit<
  PropsOf<AsTag>,
  "children" | "as" | "className"
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
  iconBg?: ColorType | string;
  /**
   * icon color
   */
  iconColor?: ColorType | string;
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
