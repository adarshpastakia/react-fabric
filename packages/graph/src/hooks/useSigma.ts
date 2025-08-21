import { useIsDark } from "@react-fabric/core";
import { useEffect, useState } from "react";
import Sigma from "sigma";
import { Graph } from "../graph";
import { EdgeCurveProgram } from "../programs/edge-curve";
import { EdgeLineProgram } from "../programs/edge-line";
import { NodeCircleProgram } from "../programs/node-circle";
import { NodeRectProgram } from "../programs/node-rect";
import {
  EdgeAttributes,
  InternalEdgeAttributes,
  InternalNodeAttributes,
  NodeAttributes,
} from "../types";
import { attachHighlighter } from "./sigmaHilighter";
import { attachMouseActions } from "./sigmaMouseActions";

export const useSigma = <N, E>(
  graph: Graph<N, E>,
  nodeReducer?: (node: NodeAttributes<N>) => NodeAttributes<N>,
  edgeReducer?: (edge: EdgeAttributes<E>) => EdgeAttributes<E>,
) => {
  const [containerRef, setContainerRef] = useState<HTMLDivElement | null>(null);
  const [componentsRef, setComponentsRef] = useState<HTMLDivElement | null>(
    null,
  );
  const isDark = useIsDark();

  const [sigma, updateSigma] =
    useState<Sigma<NodeAttributes<N>, EdgeAttributes<E>>>();

  useEffect(() => {
    if (containerRef) {
      const renderer = new Sigma<
        InternalNodeAttributes<N>,
        InternalEdgeAttributes<E>
      >(graph as any, containerRef, {
        allowInvalidContainer: true,
        enableEdgeEvents: true,
        renderEdgeLabels: true,
        renderLabels: true,
        labelSize: 14,
        defaultEdgeType: "line",
        defaultNodeType: "circle",
        edgeProgramClasses: {
          line: EdgeLineProgram,
          curved: EdgeCurveProgram,
        },
        // for some reason max ratio is min zoom and min ratio is max zoom
        maxCameraRatio: 10,
        minCameraRatio: 0.01,
        nodeProgramClasses: {
          rect: NodeRectProgram,
          circle: NodeCircleProgram,
        },
        nodeReducer(key, data) {
          const nodeData: InternalNodeAttributes<N> =
            nodeReducer?.(data) || data;
          // Ensure node size is at least 16 for visibility
          if (!nodeData.size && nodeData.weight) {
            nodeData.size = Math.max(16, nodeData.weight * 3);
          }
          if ((nodeData.size ?? 0) < 16) {
            nodeData.size = 16;
          }

          // ensure node label renderer is called in order to render selected border
          nodeData.label = nodeData.label || "";
          nodeData.id = key;
          return nodeData;
        },
        edgeReducer(key, data) {
          const edgeData: InternalEdgeAttributes<E> =
            edgeReducer?.(data) || data;
          // Ensure edge size is at least 0.5 for visibility
          if (!edgeData.size && edgeData.weight) {
            edgeData.size = Math.max(0.5, edgeData.weight * 6);
          }
          if ((edgeData.size ?? 0) < 0.5) {
            edgeData.size = 0.5;
          }
          edgeData.id = key;
          return edgeData;
        },
      });

      attachMouseActions(renderer);
      attachHighlighter(renderer);

      // containerRef?.insertBefore(
      //   componentsRef,
      //   renderer.getCanvases().mouse,
      // );

      // @ts-expect-error ignore
      window.sigma = renderer;
      updateSigma(renderer);

      return () => {
        renderer.kill();
      };
    }
  }, [graph, containerRef, componentsRef]);

  useEffect(() => {
    sigma?.setSettings({
      defaultNodeColor: isDark ? "#000" : "#fff",
      defaultEdgeColor: isDark ? "#fff" : "#000",
      labelColor: { color: isDark ? "#fff" : "#000", attribute: "labelColor" },
    });
  }, [isDark, sigma]);

  return {
    instance: sigma,
    containerRef: setContainerRef,
    componentsRef: setComponentsRef,
  };
};
