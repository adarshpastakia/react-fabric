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

import { isString } from "@react-fabric/utilities";
import classNames from "classnames";
import { isValidElement } from "react";
import {
  type ChildrenProp,
  type ColorType,
  type CssProp,
  type PaletteType,
  type TestProps,
} from "../../types";
import { getColor } from "../../utils";
import { Icon } from "../icon/Icon";

export interface EmptyContentProps
  extends CssProp,
    TestProps,
    Partial<ChildrenProp> {
  /**
   * empty title
   */
  title?: string | JSX.Element;
  /**
   * empty message
   */
  message: string | JSX.Element;
  /**
   * content size
   */
  size?: "sm" | "md";
  /**
   * empty icon
   */
  icon?: string | React.ReactElement;
  /**
   * icon color
   */
  iconColor?: ColorType | PaletteType;
}

const SizeMap: KeyValue = {
  "": "1rem",
  sm: "0.875rem",
  md: "1.125rem",
};

const DefaultIcon = () => (
  <svg
    version="1.1"
    viewBox="0 0 512 512"
    width="1em"
    height="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      opacity="0.5"
      fill="currentColor"
      d="M106.1,296.01c-0.46,0-0.92-0.05-1.37-0.14c-0.45-0.09-0.89-0.22-1.31-0.4c-0.42-0.17-0.83-0.39-1.21-0.64c-0.38-0.26-0.74-0.55-1.06-0.87c-0.33-0.33-0.62-0.68-0.87-1.07c-0.26-0.38-0.47-0.78-0.65-1.21c-0.17-0.42-0.31-0.86-0.4-1.31c-0.09-0.45-0.13-0.91-0.13-1.36c0-0.46,0.04-0.92,0.13-1.37s0.23-0.89,0.4-1.31c0.18-0.42,0.39-0.83,0.65-1.21c0.25-0.38,0.54-0.74,0.87-1.06c0.32-0.33,0.68-0.62,1.06-0.87s0.79-0.47,1.21-0.65c0.42-0.17,0.86-0.31,1.31-0.4c0.9-0.18,1.83-0.18,2.73,0c0.45,0.09,0.89,0.23,1.31,0.4c0.43,0.18,0.83,0.4,1.21,0.65s0.74,0.54,1.07,0.87c0.32,0.32,0.61,0.68,0.87,1.06c0.25,0.38,0.47,0.79,0.64,1.21s0.31,0.86,0.4,1.31s0.14,0.91,0.14,1.37c0,0.45-0.05,0.91-0.14,1.36c-0.09,0.45-0.23,0.89-0.4,1.31c-0.17,0.43-0.39,0.83-0.64,1.21c-0.26,0.39-0.55,0.74-0.87,1.07c-0.33,0.32-0.69,0.61-1.07,0.87c-0.38,0.25-0.78,0.47-1.21,0.64c-0.42,0.18-0.86,0.31-1.31,0.4S106.55,296.01,106.1,296.01z"
    />
    <path
      opacity="0.5"
      fill="currentColor"
      d="M475.5,458.25H36.5c-8.78,0-16.58-4.58-20.86-12.24c-4.28-7.67-4.09-16.71,0.51-24.19l70.18-114.04c2.03-3.29,6.34-4.32,9.63-2.29c3.29,2.03,4.32,6.34,2.29,9.63L28.07,429.16c-1.91,3.1-1.99,6.84-0.21,10.02s5.01,5.07,8.64,5.07H475.5c3.64,0,6.87-1.9,8.64-5.07s1.7-6.92-0.21-10.02l-219.5-356.7c-1.84-3-4.92-4.71-8.43-4.71s-6.59,1.72-8.43,4.71L124.24,272.88c-2.03,3.29-6.34,4.32-9.63,2.29c-3.29-2.03-4.32-6.34-2.29-9.63L235.64,65.13C240.03,58,247.64,53.75,256,53.75s15.97,4.25,20.36,11.38l219.5,356.7c4.6,7.48,4.79,16.52,0.51,24.19C492.08,453.67,484.28,458.25,475.5,458.25z"
    />
    <path
      opacity="0.5"
      fill="currentColor"
      d="M354.79,279.28c-1.85,0-3.65-0.75-4.95-2.05c-0.33-0.32-0.62-0.68-0.87-1.07c-0.26-0.37-0.47-0.78-0.65-1.2c-0.17-0.43-0.31-0.87-0.4-1.31c-0.09-0.45-0.13-0.91-0.13-1.37c0-0.46,0.04-0.92,0.13-1.37c0.09-0.44,0.23-0.89,0.4-1.31c0.18-0.42,0.39-0.83,0.65-1.21c0.25-0.38,0.54-0.74,0.87-1.06c1.62-1.63,4.04-2.37,6.31-1.91c0.45,0.09,0.89,0.22,1.31,0.4c0.43,0.17,0.83,0.39,1.21,0.64c0.39,0.25,0.74,0.55,1.06,0.87c0.33,0.32,0.62,0.68,0.88,1.06c0.25,0.38,0.46,0.79,0.64,1.21c0.18,0.42,0.31,0.87,0.4,1.31c0.09,0.45,0.14,0.91,0.14,1.37c0,0.46-0.05,0.92-0.14,1.37c-0.09,0.44-0.22,0.88-0.4,1.31c-0.18,0.42-0.39,0.83-0.64,1.2c-0.26,0.39-0.55,0.75-0.88,1.07c-0.32,0.32-0.67,0.61-1.06,0.87c-0.38,0.25-0.78,0.47-1.21,0.64c-0.42,0.18-0.86,0.31-1.31,0.4C355.7,279.23,355.24,279.28,354.79,279.28z"
    />
    <path
      opacity="0.5"
      fill="currentColor"
      d="M403.86,423.48H108.14c-10.56,0-20.31-5.72-25.46-14.94c-5.15-9.21-4.91-20.52,0.62-29.51l147.86-240.29c5.35-8.69,14.63-13.88,24.84-13.88s19.49,5.19,24.84,13.88l68.87,111.91c2.03,3.29,1,7.6-2.29,9.63c-3.29,2.02-7.6,1-9.63-2.29l-68.87-111.91c-2.78-4.52-7.61-7.22-12.91-7.22s-10.13,2.7-12.91,7.22L95.22,386.37c-2.88,4.67-3,10.55-0.32,15.34c2.68,4.79,7.75,7.77,13.24,7.77h295.72c5.49,0,10.56-2.98,13.24-7.77c2.68-4.79,2.55-10.67-0.32-15.34l-54.14-87.97c-2.03-3.29-1-7.6,2.29-9.63c3.29-2.02,7.61-1,9.63,2.29l54.14,87.97c5.53,8.99,5.77,20.3,0.62,29.51C424.17,417.76,414.42,423.48,403.86,423.48z"
    />
    <path
      fill="currentColor"
      d="M270.12,335.13h-28.24c-6.17,0-11.22-4.83-11.5-10.99l-0.5-11.01c-0.18-3.86,2.81-7.14,6.67-7.31 c3.85-0.21,7.14,2.81,7.31,6.67l0.4,8.64h23.49l5.23-114.15h-33.96l3.79,82.55c0.18,3.86-2.81,7.14-6.67,7.31 c-0.11,0.01-0.22,0.01-0.33,0.01c-3.72,0-6.81-2.93-6.99-6.68l-3.91-85.15c-0.14-3.13,1.01-6.22,3.17-8.48 c2.16-2.26,5.2-3.56,8.33-3.56h39.17c3.13,0,6.16,1.3,8.33,3.56c2.16,2.26,3.32,5.35,3.17,8.48l-5.46,119.12 C281.34,330.3,276.29,335.13,270.12,335.13z"
    />
    <path
      fill="currentColor"
      d="M268.47,394.55h-24.94c-4.83,0-9.39-2.12-12.5-5.81s-4.44-8.54-3.63-13.3l2.69-15.79 c1.34-7.89,8.13-13.61,16.13-13.61h19.56c8,0,14.78,5.73,16.13,13.61l2.69,15.79c0.81,4.76-0.51,9.61-3.63,13.3 S273.3,394.55,268.47,394.55z M246.22,360.04c-1.15,0-2.13,0.83-2.33,1.96l-2.69,15.79c-0.16,0.94,0.26,1.61,0.52,1.92 c0.26,0.31,0.85,0.84,1.8,0.84h24.94c0.95,0,1.54-0.53,1.8-0.84c0.26-0.31,0.68-0.98,0.52-1.92L268.11,362 c-0.19-1.14-1.17-1.96-2.33-1.96H246.22z"
    />
  </svg>
);

/**
 * A component that displays a message and an optional icon when there is no content to show.
 * It allows customization of title, message, icon, size, and additional CSS properties.
 * It can also accept children elements for additional actions or information.
 * This component is useful for displaying a friendly message when data is not available,
 * such as in empty states of lists, tables, or other content areas.
 *
 * @param {EmptyContentProps} props - The properties for the EmptyContent component.
 * @returns {JSX.Element} The rendered EmptyContent component.
 *
 * @example
 * ```jsx
 * <EmptyContent
 *   title="No Data Available"
 *   message="Please check back later."
 *   icon="empty"
 *   iconColor="tint-700"
 *   size="md"
 * >
 *   <Button onClick={() => console.log("Action clicked")}>Retry</Button>
 * </EmptyContent>
 * // Renders an empty content area with a title, message, icon, and a button for retrying the action.
 * ```
 *
 * @see {@link https://adarshpastakia.github.io/react-fabric/?path=/docs/core-components-emptycontent--docs} for more details.
 */
export const EmptyContent = ({
  children,
  title,
  message,
  icon,
  className,
  size,
  iconColor,
  ...test
}: EmptyContentProps) => {
  return (
    <div
      className={classNames(
        "p-6 flex flex-col items-center area-content",
        className,
      )}
      style={
        size && {
          fontSize: SizeMap[size],
        }
      }
      {...test}
    >
      <div
        className="leading-none"
        style={{ fontSize: "4em", color: getColor(iconColor ?? "tint-700") }}
      >
        {isString(icon) && <Icon icon={icon} />}
        {isValidElement(icon) && icon}
        {!icon && <DefaultIcon />}
      </div>
      {title && (
        <div
          className="font-medium text-center opacity-85"
          style={{ fontSize: "1.5em" }}
        >
          {title}
        </div>
      )}
      <div
        className="font-medium text-center opacity-65"
        style={{ fontSize: "0.875em" }}
      >
        {message}
      </div>
      <div className="flex gap-1 pt-6">{children}</div>
    </div>
  );
};
