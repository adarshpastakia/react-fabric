/*
 * React Fabric
 * @version: 1.0.0
 *
 *
 * The MIT License (MIT)
 * Copyright (c) 2026 Adarsh Pastakia
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

import { useEffect, useReducer, useRef } from "react";

interface OverlayState {
  hasOverlay: boolean;
  src?: string;
  loading: boolean;
  errored: boolean;
  opacity: number;
  orientation: "horizontal" | "vertical";
  size: number | string;
}

type OverlayActions =
  | { type: "reset"; src?: string }
  | { type: "toggleOrientation"; orientation: "horizontal" | "vertical" }
  | { type: "changeOpacity"; opacity: number }
  | { type: "changeSize"; size: number }
  | { type: "errored" }
  | { type: "loaded" };

export const useOverlayState = (src?: string) => {
  const [state, dispatch] = useReducer(
    (state: OverlayState, action: OverlayActions) => {
      if (action.type === "reset") {
        state = {
          ...state,
          src: action.src,
          hasOverlay: !!action.src,
          loading: true,
          errored: false,
          size: "50%",
        };
      }
      if (action.type === "toggleOrientation") {
        state.size = "50%";
        state.orientation = action.orientation;
      }
      if (action.type === "changeOpacity") {
        state.opacity = action.opacity;
      }
      if (action.type === "changeSize") {
        state.size = action.size;
      }
      return { ...state };
    },
    {},
    () =>
      ({
        src: "",
        hasOverlay: false,
        errored: false,
        loading: false,
        opacity: 1,
        orientation: "horizontal",
        size: "50%",
      }) as OverlayState,
  );

  useEffect(() => {
    dispatch({ type: "reset", src });
  }, [src]);

  const ref = useRef<HTMLImageElement | null>(null);

  return {
    ref,
    state,
    toggleOrientation(orientation: "horizontal" | "vertical") {
      dispatch({ type: "toggleOrientation", orientation });
    },
    changeOpacity(opacity: number) {
      dispatch({ type: "changeOpacity", opacity });
    },
    changeSize(size: number) {
      dispatch({ type: "changeSize", size });
    },
  };
};
