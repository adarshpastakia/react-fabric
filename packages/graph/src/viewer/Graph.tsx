/**
 * React Fabric
 * @version 1.0.0
 * @license MIT
 * @copyright 2024 Adarsh Pastakia
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import { Layout, useIsDark } from "@react-fabric/core";
import { layerBorder } from "@sigma/node-border";
import { layerImage } from "@sigma/node-image";
import { layerPiechart } from "@sigma/node-piechart";
import { fitViewportToNodes } from "@sigma/utils";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Sigma } from "sigma";
import { extremityArrow, layerDashed, layerPlain, pathCurved, pathCurvedS, pathLine, pathStepCurved, sdfCircle, sdfDiamond, sdfSquare, sdfTriangle } from "sigma/rendering";
import { Provider } from "../context/context";
import type { Graph } from "../graph";
import type { EdgeAttributes, NodeAttributes } from "../types";
import { defaultEdgeStyles, edgeReducer } from "../utils/edge";
import { defaultNodeStyles, nodeReducer } from "../utils/node";
import { sdfFolder } from "../utils/sdfFolder";

interface GraphViewerProps<N extends KeyValue = KeyValue, E extends KeyValue = KeyValue> {
  data: Graph<N, E>;

  children?: React.ReactNode;
}

export function GraphViewer<N extends KeyValue = KeyValue, E extends KeyValue = KeyValue>({ data, children }: GraphViewerProps<N, E>) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isDark = useIsDark();

  const [sigma, setSigma] = useState<Sigma<NodeAttributes<N>, EdgeAttributes<E>>>();

  useEffect(() => {
    if (containerRef.current) {
      const sigma = new Sigma<NodeAttributes<N>, EdgeAttributes<E>>(data, containerRef.current, {
        settings: {
          autoRescale: false,
          autoRescaleContent: "nodes",
          stagePadding: 40,
          enableNodeDrag: true,
          enableEdgeEvents: true,
          renderEdgeLabels: true,
          cameraPanBoundaries: true,
        },
        edgeReducer: edgeReducer,
        nodeReducer: nodeReducer,
        styles: {
          edges: defaultEdgeStyles(isDark),
          nodes: defaultNodeStyles(isDark),
        },
        primitives: {
          edges: {
            paths: [pathLine(), pathCurved(), pathStepCurved(), pathCurvedS()],
            extremities: [extremityArrow()],
            label: {
              fontSizeMode: "fixed",
            },
            layers: [
              layerPlain({ color: { attribute: "color" } }),
              layerDashed({
                dashColor: { attribute: "dashColor" },
                dashSize: { attribute: "dashSize" },
                gapSize: { attribute: "gapSize" },
              }),
            ],
          },
          nodes: {
            shapes: [sdfCircle(), sdfSquare(), sdfTriangle(), sdfDiamond(), sdfFolder()],
            layers: [
              layerPiechart({
                slices: Array.from({ length: 12 })
                  .fill(0)
                  .map((_, i) => ({
                    color: { attribute: `color_${i}` },
                    value: { attribute: `slice_${i}` },
                  })),
              }),
              layerBorder({
                borders: [
                  { mode: "relative", size: 0, color: { attribute: "color" } },
                  {
                    size: { attribute: "border" },
                    color: { attribute: "borderColor" },
                  },
                  { mode: "pixels", size: 1, color: { attribute: "fillColor" } },
                  { size: { attribute: "pieSize", default: 0 }, color: "transparent", fill: false },
                  { mode: "pixels", size: 4, color: { attribute: "fillColor" } },
                  { color: { attribute: "color" }, fill: true },
                ],
              }),
              layerImage({ padding: 0.5 }),
            ],
          },
        },
      });
      setSigma(sigma);

      const fitToGraph = () => {
        requestAnimationFrame(() => {
          void fitViewportToNodes(sigma as never, data.nodes(), { animate: true }).then(() => {
            sigma.getCamera().setState({
              ratio: sigma.getCamera().ratio * 1.15, // Multiplier adds a proportional buffer from the canvas edge
            });
          });
        });
      };

      data.on("layoutDone", fitToGraph);

      return () => {
        if (sigma) {
          sigma.kill();
        }
      };
    }
    // eslint-disable-next-line @eslint-react/exhaustive-deps
  }, []);

  useLayoutEffect(() => {
    if (sigma) {
      // @ts-expect-error silent update graph styles without re-render
      sigma.stylesDeclaration = {
        edges: defaultEdgeStyles(isDark),
        nodes: defaultNodeStyles(isDark),
      };
      sigma.refresh();
    }
    // eslint-disable-next-line @eslint-react/exhaustive-deps
  }, [isDark]);

  return (
    <Provider value={{ data, sigma }}>
      <Layout>
        <div className="area-content overflow-hidden" ref={containerRef} />
        {children}
      </Layout>
    </Provider>
  );
}
