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

import { type ChildrenProp } from "@react-fabric/core/dist/types/types";
import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
} from "react";
import { useResizer } from "./useResizer";

interface Context {
  widths: Map<string, number>;
  startResize: (col: HTMLElement) => void;
}

const TableContext = createContext<Context>({} as Context);

export const TableProvider = ({ children }: ChildrenProp) => {
  const ghostRef = useRef<HTMLDivElement>(null);
  const [widths, setWidths] = useState<Map<string, number>>(new Map());
  const startResize = useCallback(
    (col: HTMLElement) => {
      if (col) {
        ghostRef.current != null &&
          useResizer(col, ghostRef.current, (width) => {
            setWidths(new Map(widths.set(col.dataset.id ?? "", width)));
          });
      }
    },
    [widths],
  );

  return (
    <TableContext.Provider value={{ startResize, widths }}>
      {children}

      <div
        className="absolute inset-0 hidden z-20 cursor-col-resize"
        ref={ghostRef}
      >
        <div className="absolute inset-y-0 bg-muted opacity-50 border-primary border-e-2" />
      </div>
    </TableContext.Provider>
  );
};

export const useTableContext = () => useContext(TableContext);
