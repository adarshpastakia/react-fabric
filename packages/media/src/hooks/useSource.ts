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

import { EMPTY_ARRAY, getImageColorset } from "@react-fabric/utilities";
import React, { useEffect, useEffectEvent, useReducer } from "react";

interface SourceState {
  src?: string;
  sources?: string[];
  loaded: boolean;
  loading: boolean;
  errored: boolean;
  errorCode?: string;
  transparent: boolean;
  colorScheme: "auto" | "light" | "dark";
  colorset: string;
}

type SourceActions =
  | { type: "reset"; sources: string[]; poster?: string }
  | { type: "errored"; code?: string }
  | { type: "colorScheme" }
  | {
      type: "loaded";
      colorScheme: SourceState["colorScheme"];
      colorset: string;
    };

export const useSource = (opts: { src: string | string[]; onLoad?: () => void; onError?: () => void }) => {
  const [state, dispatch] = useReducer(
    (state: SourceState, action: SourceActions) => {
      if (action.type === "reset") {
        // reset to initial sources and start loading
        if (state.src !== action.sources[0]) {
          state = {
            ...state,
            sources: [...action.sources],
            loading: true,
            loaded: false,
            errored: false,
            transparent: false,
            colorScheme: "auto",
          };
          // set the first source to load
          state.src = state.sources?.shift();
          state.errored = !state.src;
        }
      }
      if (action.type === "errored") {
        // on error, try the next source if available
        state.src = state.sources?.shift();
        state.loading = !!state.src;
        state.errored = !state.src;
        state.errorCode = action.code;
      }
      if (action.type === "colorScheme") {
        // toggle color scheme between light and dark
        state.colorScheme = state.colorScheme === "light" ? "dark" : "light";
      }
      if (action.type === "loaded") {
        // on successful load, set loading to false and update color scheme
        state.loading = false;
        state.loaded = true;
        state.colorScheme = action.colorScheme;
        state.colorset = action.colorset;
      }
      if (state.errored) {
        state.loading = false;
        state.loaded = false;
        state.colorScheme = "auto";
      }
      return { ...state };
    },
    {},
    () =>
      ({
        loading: true,
        loaded: false,
        errored: false,
        transparent: false,
        colorScheme: "auto",
        colorset: "",
      }) as SourceState,
  );

  useEffect(() => {
    dispatch({
      type: "reset",
      sources: [opts.src ?? EMPTY_ARRAY].flat(),
    });
  }, [opts.src]);

  const fireLoadEvent = useEffectEvent(() => {
    opts.onLoad?.();
  });

  const fireErrorEvent = useEffectEvent(() => {
    opts.onError?.();
  });

  return {
    state,
    onLoad(e: React.SyntheticEvent) {
      let cs = "auto";
      let colorset = "";
      if (e.currentTarget instanceof HTMLImageElement) {
        cs = getImageColorset(e.currentTarget, true);
        colorset = getImageColorset(e.currentTarget);
      }
      fireLoadEvent();
      dispatch({
        type: "loaded",
        colorScheme: cs as SourceState["colorScheme"],
        colorset,
      });
    },
    onError(e: any) {
      if (e.name === "AbortError") return;
      fireErrorEvent();
      dispatch({ type: "errored", code: e.name });
    },
  };
};
