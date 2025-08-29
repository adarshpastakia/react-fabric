import { fitViewportToNodes } from "@sigma/utils";
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useImperativeHandle,
} from "react";
import { Graph } from "../graph";
import { useDragSelection } from "../hooks/sigmaDragSelect";
import { useGraphology } from "../hooks/useGraphology";
import { useSigma } from "../hooks/useSigma";
import { EdgeAttributes, GraphProps, NodeAttributes } from "../types";
import {
  SigmaEdgeEventPayload,
  SigmaNodeEventPayload,
  SigmaStageEventPayload,
} from "sigma/types";

interface Context<N = KeyValue, E = KeyValue> {
  sigma: ReturnType<typeof useSigma>;
  graph: Graph<NodeAttributes<N>, EdgeAttributes<E>>;
  selected: string[];
  dragSelector: ReturnType<typeof useDragSelection>;
  resetViewport: () => void;
}

const GraphContext = createContext<Context>({} as Context);

export const useGraph = <N = KeyValue, E = KeyValue>() =>
  useContext(GraphContext) as Context<N, E>;

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

  const resetViewport = () => {
    if (graph.size === 0) return this;
    sigma.instance &&
      fitViewportToNodes(sigma.instance, graph.nodes(), {
        animate: true,
      });
  };

  useEffect(() => {
    const resetHandler = () => {
      sigma.instance &&
        fitViewportToNodes(sigma.instance, graph.nodes(), {
          animate: true,
        });
    };
    graph.on("layoutDone", resetHandler);
    onSelectChange && graph.on("nodesSelected", onSelectChange);

    return () => {
      graph.off("layoutDone", resetHandler);
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
        { sigma, graph, selected, dragSelector, resetViewport } as AnyObject
      }
    >
      {children}
    </GraphContext.Provider>
  );
};
