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

import { groupBy } from "@react-fabric/utilities";
import { useEffect, useReducer } from "react";
import { type TableColumn } from "./types";

interface ColumnState {
  columns: TableColumn[];
  start: TableColumn[];
  end: TableColumn[];
  cols: TableColumn[];
}

type ColumnActions =
  | { type: "columns"; columns: TableColumn[] }
  | { type: "hide"; id: string };

export const useTableColumns = (columns: TableColumn[]) => {
  const [state, dispatch] = useReducer(
    (state: ColumnState, action: ColumnActions) => {
      if (action.type === "columns") {
        state.columns = action.columns;
      }
      if (action.type === "hide") {
        const col = state.columns.find((col) => col.id === action.id);
        col &&
          state.columns.splice(state.columns.indexOf(col), 1, {
            ...col,
            hidden: col.hidden !== true,
          });
      }
      const {
        start = [],
        end = [],
        cols = [],
      } = groupBy(
        state.columns.filter((col) => col.hidden !== true),
        "locked",
        "cols",
      );
      return {
        ...state,
        start,
        end,
        cols,
      };
    },
    {
      columns: [],
      start: [],
      end: [],
      cols: [],
    },
  );

  useEffect(() => {
    dispatch({ type: "columns", columns });
  }, [columns]);

  return {
    state,
    onHide: (id: string) => dispatch({ type: "hide", id }),
  };
};
