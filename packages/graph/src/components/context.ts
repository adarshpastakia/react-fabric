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

import { createContext, useContext } from "react";
import { Graph } from "../graph";
import { useDragSelection } from "../hooks/sigmaDragSelect";
import { useSigma } from "../hooks/useSigma";
import { EdgeAttributes, NodeAttributes } from "../types";

interface Context<N = KeyValue, E = KeyValue> {
  sigma: ReturnType<typeof useSigma>;
  graph: Graph<NodeAttributes<N>, EdgeAttributes<E>>;
  selected: string[];
  layoutRunning: boolean;
  dragSelector: ReturnType<typeof useDragSelection>;
  resetViewport: () => void;
  zoomIn: () => void;
  zoomOut: () => void;
}

export const GraphContext = createContext<Context>({} as Context);

export const useGraph = <N = KeyValue, E = KeyValue>() => useContext(GraphContext) as Context<N, E>;
