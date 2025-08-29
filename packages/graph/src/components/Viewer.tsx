/*
 * React Fabric
 * @version: 1.0.0
 *
 *
 * The MIT License (MIT)
 * Copyright (c) 2025 Adarsh Pastakia
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

import { Section } from "@react-fabric/core";
import { GraphProps } from "../types";
import { GraphProvider, useGraph } from "./Context";
import { Tools } from "./Tools";
import { useEffect, useRef } from "react";
import { GraphContextMenu } from "./ContextMenu";

const Graph = () => {
  const { sigma, graph } = useGraph();
  const handlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // remove group handle if group node is dropped
    const handler = ({ key }: KeyValue) => {
      const handle = handlesRef.current?.querySelector(`[data-id="${key}"]`);
      handle?.remove();
    };
    graph.on("nodeDropped", handler);
    return () => {
      graph.off("nodeDropped", handler);
    };
  }, [graph]);

  return (
    <div className="area-content relative bg-base graph-viewer">
      <div dir="ltr" ref={sigma.containerRef} className="absolute inset-0" />
      <div
        ref={handlesRef}
        dir="ltr"
        onClick={(e) => {
          const key = (e.target as any).dataset.id;
          key && graph.toggleExpanded(key);
        }}
        className="absolute inset-0 overflow-hidden pointer-events-none sigma-groupHandles"
      />
    </div>
  );
};

export const SigmaGraph = <N = KeyValue, E = KeyValue>(
  props: GraphProps<N, E>,
) => {
  return (
    <Section className="relative">
      <GraphProvider {...props}>
        <Tools />
        <Graph />
        <GraphContextMenu />
      </GraphProvider>
    </Section>
  );
};
