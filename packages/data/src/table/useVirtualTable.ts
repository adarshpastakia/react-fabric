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

import { useVirtualizer } from "@tanstack/react-virtual";
import { useCallback, useRef } from "react";

export const useVirtualTable = (data: KeyValue[]) => {
  // TODO: refactor data into item list, apply grouping if groupColumn provided
  // TODO: when grouping maintain map of group with children, {___GROUP___:true, label, items, open}

  const scrollerRef = useRef<HTMLDivElement>(null);
  const virtualizer = useVirtualizer({
    count: data.length,
    getScrollElement: () => scrollerRef.current,
    estimateSize: () => 24,
  });

  const virtualItems = virtualizer.getVirtualItems();

  const getData = useCallback(
    (index: number) => {
      return data[index];
    },
    [data],
  );

  return {
    scrollerRef,
    items: virtualItems,
    getData,
    totalSize: virtualizer.getTotalSize,
    measureElement: virtualizer.measureElement,
  };
};
