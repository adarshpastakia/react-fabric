import { CoreIcons, Icon } from "@react-fabric/core";
import { fitViewportToNodes } from "@sigma/utils";
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import { SigmaNodeEventPayload } from "sigma/types";
import { Graph } from "../graph";
import { useDragSelection } from "../hooks/sigmaDragSelect";
import { useGraphology } from "../hooks/useGraphology";
import { useSigma } from "../hooks/useSigma";
import { EdgeAttributes, GraphProps, NodeAttributes } from "../types";

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

  const [layoutRunning, setLayoutRunning] = useState(false);

  const resetViewport = () => {
    if (graph.size === 0) return;
    sigma.instance &&
      fitViewportToNodes(sigma.instance, graph.nodes(), {
        animate: true,
      });
  };

  const zoomIn = () => {
    if (graph.size === 0) return;
    sigma.instance?.getCamera().animatedZoom();
  };

  const zoomOut = () => {
    if (graph.size === 0) return;
    sigma.instance?.getCamera().animatedUnzoom();
  };

  useEffect(() => {
    const resetHandler = () => {
      sigma.instance &&
        fitViewportToNodes(sigma.instance, graph.nodes(), {
          animate: true,
        });
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
          <Icon icon={CoreIcons.spinner} animate="spin" />
        </div>
      )}
    </GraphContext.Provider>
  );
};
