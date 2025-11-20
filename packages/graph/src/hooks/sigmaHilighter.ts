import { debounce } from "@react-fabric/utilities";
import type Graph from "graphology";
import type Sigma from "sigma";
import { type SigmaEdgeEventPayload, type SigmaNodeEventPayload } from "sigma/types";
import { type EdgeAttributes, type NodeAttributes } from "../types";

export const attachHighlighter = (
  renderer: Sigma<NodeAttributes<any>, EdgeAttributes<any>>,
) => {
  const handleEnterNode = (id: string, graph: Graph) => {
    try {
      const neighbors = graph.neighbors(id);
      graph.forEachNode((node) => {
        graph.setNodeAttribute(
          node,
          "opacity",
          node !== id && !neighbors.includes(node) ? 0.1 : 1,
        );
      });
      graph.forEachEdge((edge) => {
        graph.setEdgeAttribute(
          edge,
          "opacity",
          !graph.hasExtremity(edge, id) ? 0.1 : 1,
        );
      });
    } catch {
      //
    }
  };

  const handleLeaveNode = (graph: Graph) => {
    graph.forEachNode((node) => {
      graph.setNodeAttribute(node, "opacity", 1);
    });
    graph.forEachEdge((edge) => {
      graph.setEdgeAttribute(edge, "opacity", 1);
    });
  };

  const handleEnterEdge = (id: string, graph: Graph) => {
    try {
      const source = graph.source(id);
      const target = graph.target(id);

      graph.setEdgeAttribute(id, "zIndex", 2);
      graph.setNodeAttribute(source, "zIndex", 2);
      graph.setNodeAttribute(target, "zIndex", 2);

      graph.setEdgeAttribute(id, "highlight", true);
      graph.setNodeAttribute(source, "highlight", true);
      graph.setNodeAttribute(target, "highlight", true);

      graph.forEachNode((node) => {
        graph.setNodeAttribute(
          node,
          "opacity",
          node !== source && node !== target ? 0.1 : 1,
        );
      });
      graph.forEachEdge((edge) => {
        graph.setEdgeAttribute(edge, "opacity", edge !== id ? 0.1 : 1);
      });
    } catch {
      //
    }
  };

  const handleLeaveEdge = (id: string, graph: Graph) => {
    const source = graph.source(id);
    const target = graph.target(id);

    graph.setEdgeAttribute(id, "zIndex", 0);
    graph.setNodeAttribute(source, "zIndex", 0);
    graph.setNodeAttribute(target, "zIndex", 0);

    graph.setEdgeAttribute(id, "highlight", false);
    graph.setNodeAttribute(source, "highlight", false);
    graph.setNodeAttribute(target, "highlight", false);

    graph.forEachNode((node) => {
      graph.setNodeAttribute(node, "opacity", 1);
      graph.setNodeAttribute(node, "highlight", false);
    });
    graph.forEachEdge((edge) => {
      graph.setEdgeAttribute(edge, "opacity", 1);
      graph.setEdgeAttribute(edge, "highlight", false);
    });
  };

  const debouceNodeEnter = debounce((e: SigmaNodeEventPayload) => {
    handleEnterNode(e.node, renderer.getGraph());
  });
  const debouceEdgeEnter = debounce((e: SigmaEdgeEventPayload) => {
    handleEnterEdge(e.edge, renderer.getGraph());
  }, 100);
  renderer.on("enterNode", debouceNodeEnter);
  renderer.on("leaveNode", (e) => {
    debouceNodeEnter.cancel();
    handleLeaveNode(renderer.getGraph());
  });
  renderer.on("enterEdge", debouceEdgeEnter);
  renderer.on("leaveEdge", (e) => {
    debouceEdgeEnter.cancel();
    handleLeaveEdge(e.edge, renderer.getGraph());
  });
};
