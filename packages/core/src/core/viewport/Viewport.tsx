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
import { type PropsWithChildren } from "react";

/**
 * This component is used to create a full-screen viewport
 * that can be used to display content in a grid layout.
 * It is typically used as a container for the main content of the application.
 * It is styled to take up the full width and height of the viewport,
 * and it uses absolute positioning to ensure it covers the entire screen.
 * The component accepts children as props, allowing you to nest other components inside it.
 *
 * @example
 * ```jsx
 * <Viewport>
 *   <YourContentComponent />
 * </Viewport>
 * ```
 *
 * @see {@link https://adarshpastakia.github.io/react-fabric/?path=/docs/core-application--viewport} for more details.
 */
export const Viewport = ({ children }: PropsWithChildren) => {
  return (
    <div
      data-ref="viewport"
      className={classNames(
        "fabric-viewport",
        "grid overflow-hidden absolute inset-0",
      )}
    >
      {children}
    </div>
  );
};
