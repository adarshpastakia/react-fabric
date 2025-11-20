import type Graph from "graphology";
import type Sigma from "sigma";
import { type MouseCoords } from "sigma/types";
import { type EdgeAttributes, type NodeAttributes } from "../types";

export const attachMouseActions = (
  renderer: Sigma<NodeAttributes<any>, EdgeAttributes<any>>,
) => {
  let isDragging = false;
  let isDragged = false;
  let startPos = { x: 0, y: 0 };
  let draggedNode: AnyObject;

  const handleDrag =
    (renderer: Sigma<NodeAttributes<any>, EdgeAttributes<any>>) =>
    (e: MouseCoords) => {
      if (!isDragging || !draggedNode) return;

      isDragged = true;
      // Get new position of node
      const pos = renderer.viewportToGraph(e);
      const diff = { x: pos.x - startPos.x, y: pos.y - startPos.y };

      const graph = renderer.getGraph();
      Object.entries<KeyValue>(draggedNode).forEach(([node, xy]) => {
        graph.setNodeAttribute(node, "x", xy.x + diff.x);
        graph.setNodeAttribute(node, "y", xy.y + diff.y);
      });

      // Prevent sigma to move camera:
      e.preventSigmaDefault();
      e.original.preventDefault();
      e.original.stopPropagation();
    };

  const stopDragging = (graph: Graph) => {
    // if (draggedNode) {
    //   Object.entries<KeyValue>(draggedNode).forEach(([node, xy]) => {
    //     const atts = graph.getNodeAttributes(node);
    //     if (atts.isGroup) {
    //       const diff = { x: atts.x - xy.x, y: atts.y - xy.y };
    //       atts.nodes?.forEach((id: string) => {
    //         try {
    //           const { x, y } = graph.getNodeAttributes(id);
    //           graph.setNodeAttribute(id, "x", x + diff.x);
    //           graph.setNodeAttribute(id, "y", y + diff.y);
    //         } catch {
    //           //
    //         }
    //       });
    //     }
    //   });
    // }
    isDragging = false;
    draggedNode = undefined;
  };

  const enableDragging = (
    renderer: Sigma<NodeAttributes<any>, EdgeAttributes<any>>,
  ) => {
    renderer.on("downNode", (e) => {
      if ("button" in e.event.original && e.event.original.button === 0) {
        const graph = renderer.getGraph();
        isDragging = true;
        draggedNode = {};
        const { x = 0, y = 0 } = graph.getNodeAttributes(e.node);
        draggedNode[e.node] = { x, y };
        startPos = { x, y };
        graph.forEachNode((node, atts) => {
          if (atts.selected) {
            draggedNode[node] = { x: atts.x, y: atts.y };
          }
        });
      }
    });

    // On mouse move, if the drag mode is enabled, we change the position of the draggedNode
    renderer.getMouseCaptor().on("mousemovebody", handleDrag(renderer));

    // On mouse up, we reset the autoscale and the dragging mode
    renderer.getMouseCaptor().on("mouseup", (e) => {
      if (isDragging) {
        stopDragging(renderer.getGraph());
        e.original.preventDefault();
        e.preventSigmaDefault();
      }
    });

    // Disable the autoscale at the first down interaction
    renderer.getMouseCaptor().on("mousedown", () => {
      if (!renderer.getCustomBBox()) renderer.setCustomBBox(renderer.getBBox());
    });
  };

  const resetSelection = (graph: Graph) => {
    graph.forEachNode(
      (node, atts) =>
        atts.selected && graph.setNodeAttribute(node, "selected", false),
    );
    graph.forEachEdge(
      (node, atts) =>
        atts.selected && graph.setEdgeAttribute(node, "selected", false),
    );
  };

  const enableSelection = (
    renderer: Sigma<NodeAttributes<any>, EdgeAttributes<any>>,
  ) => {
    renderer.on("downNode", (e) => {
      if ("button" in e.event.original && e.event.original.button === 2) {
        const isSelected = renderer
          .getGraph()
          .getNodeAttribute(e.node, "selected");

        !isSelected && resetSelection(renderer.getGraph());
        !isSelected &&
          renderer.getGraph().setNodeAttribute(e.node, "selected", true);
      }
    });
    renderer.on("downEdge", (e) => {
      if ("button" in e.event.original && e.event.original.button === 2) {
        const isSelected = renderer
          .getGraph()
          .getEdgeAttribute(e.edge, "selected");

        !isSelected && resetSelection(renderer.getGraph());
        !isSelected &&
          renderer.getGraph().setEdgeAttribute(e.edge, "selected", true);
      }
    });
    renderer.on("clickNode", (e) => {
      if (
        !isDragged &&
        "button" in e.event.original &&
        e.event.original.button === 0
      ) {
        const isSelected = renderer
          .getGraph()
          .getNodeAttribute(e.node, "selected");

        !e.event.original.shiftKey && resetSelection(renderer.getGraph());
        renderer.getGraph().setNodeAttribute(e.node, "selected", !isSelected);
      }
      isDragged = false;
    });
    renderer.on("downStage", (e) => {
      resetSelection(renderer.getGraph());
    });
  };

  enableSelection(renderer);
  enableDragging(renderer);
};
