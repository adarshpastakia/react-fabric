import { Icon } from "@react-fabric/core";
import { fitViewportToNodes } from "@sigma/utils";
import { type PropsWithChildren, useEffect, useImperativeHandle, useState } from "react";
import { type SigmaNodeEventPayload } from "sigma/types";
import { useDragSelection } from "../hooks/sigmaDragSelect";
import { useGraphology } from "../hooks/useGraphology";
import { useSigma } from "../hooks/useSigma";
import { type GraphProps } from "../types";
import { GraphContext } from "./context";

export const GraphProvider = <N = KeyValue, E = KeyValue>({
  ref,
  data,
  children,
  nodeReducer,
  edgeReducer,
  onSelectChange,
  onNodeDoubleClick,
  onContextMenu,
}: PropsWithChildren<GraphProps<N, E>>) => {
  const { graph, selected } = useGraphology<N, E>(data);
  const sigma = useSigma<N, E>(graph, nodeReducer, edgeReducer);

  const dragSelector = useDragSelection(sigma.instance);

  const [layoutRunning, setLayoutRunning] = useState(false);

  const resetViewport = () => {
    if (graph.size === 0) return;
    void (
      sigma.instance &&
      fitViewportToNodes(sigma.instance, graph.nodes(), {
        animate: true,
      })
    );
  };

  const zoomIn = () => {
    if (graph.size === 0) return;
    void sigma.instance?.getCamera().animatedZoom();
  };

  const zoomOut = () => {
    if (graph.size === 0) return;
    void sigma.instance?.getCamera().animatedUnzoom();
  };

  useEffect(() => {
    const resetHandler = () => {
      void (
        sigma.instance &&
        fitViewportToNodes(sigma.instance, graph.nodes(), {
          animate: true,
        })
      );
    };
    graph.on("layoutRunning", setLayoutRunning);
    graph.on("layoutDone", resetHandler);
    onSelectChange && graph.on("nodesSelected", onSelectChange);

    return () => {
      graph.off("layoutDone", resetHandler);
      graph.off("layoutRunning", setLayoutRunning);
      onSelectChange && graph.off("nodesSelected", onSelectChange);
    };
  }, [graph, sigma, onSelectChange]);

  useEffect(() => {
    const handleClick = (e: SigmaNodeEventPayload) => {
      onNodeDoubleClick?.(e.node, graph.getNodeAttributes(e.node));
      e.event.original.preventDefault();
      e.event.preventSigmaDefault();
      e.preventSigmaDefault();
      return false;
    };
    sigma.instance?.on("doubleClickNode", handleClick);

    return () => {
      sigma.instance?.off("doubleClickNode", handleClick);
    };
  }, [sigma, graph, onNodeDoubleClick]);

  useImperativeHandle(
    ref,
    () => ({
      graph,
      sigma,
    }),
    [graph, sigma],
  );

  return (
    <GraphContext.Provider
      value={
        {
          sigma,
          graph,
          selected,
          dragSelector,
          layoutRunning,
          resetViewport,
          zoomIn,
          zoomOut,
        } as AnyObject
      }
    >
      {children}

      {layoutRunning && (
        <div className="absolute top-0 end-0 p-1">
          <Icon icon="icon-[svg-spinners--eclipse]" />
        </div>
      )}
    </GraphContext.Provider>
  );
};
