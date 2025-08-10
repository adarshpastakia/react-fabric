import { useEffect, useState } from "react";
import { Graph } from "../graph";
import { GraphProps } from "../types";

export const useGraphology = <N, E>(data: GraphProps<N, E>["data"]) => {
  const [graph, setGraph] = useState(new Graph<N, E>({ multi: true }));

  const [selected, setSelected] = useState<string[]>([]);

  useEffect(() => {
    if (data instanceof Graph) {
      setGraph(data);
      return;
    }
    graph.clear();
    data && graph.import(data, false);
  }, [data]);

  useEffect(() => {
    const handler = (nodes: string[]) => {
      setSelected(nodes);
    };
    graph.on("nodesSelected", handler);

    return () => {
      graph.off("nodesSelected", handler);
    };
  }, [graph]);

  return { graph, selected };
};
