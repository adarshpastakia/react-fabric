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
import classes from "./ErrorBoundary.module.css";

export const ErrorIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    className={classNames(classes.boundaryIcon, "size-6 m-2")}
  >
    <path
      fill="#808080"
      d="M64 32c0 17.673-14.327 32-32 32s-32-14.327-32-32 14.327-32 32-32 32 14.327 32 32z"
    />
    <path
      fill="#fff"
      d="M63.5 32c0 17.397-14.103 31.5-31.5 31.5s-31.5-14.103-31.5-31.5 14.103-31.5 31.5-31.5 31.5 14.103 31.5 31.5z"
    />
    <path
      fill="#f44336"
      d="M60 32c0 15.464-12.536 28-28 28s-28-12.536-28-28c0-15.464 12.536-28 28-28s28 12.536 28 28z"
    />
    <path
      fill="#fff"
      d="M50.667 35.733h-37.333c-1.031 0-1.867-0.835-1.867-1.867v-3.733c0-1.031 0.835-1.867 1.867-1.867h37.333c1.031 0 1.867 0.835 1.867 1.867v3.733c0 1.031-0.835 1.867-1.867 1.867z"
    />
  </svg>
);
