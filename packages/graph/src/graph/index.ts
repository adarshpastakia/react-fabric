import { debounce } from "@react-fabric/utilities";
import {
  DEFAULT_EDGE_CURVATURE,
  indexParallelEdgesIndex,
} from "@sigma/edge-curve";
import ElkConstructor, { type ELK } from "elkjs/lib/elk.bundled";
// @ts-expect-error ignore
import ElkWorker from "../../../../node_modules/elkjs/lib/elk-worker?worker";
import Graphology from "graphology";
import { random } from "graphology-layout";
import { type GraphEvents, type GraphOptions } from "graphology-types";
import { animateNodes } from "sigma/utils";
import {
  type EdgeAttributes,
  type InternalNodeAttributes,
  type NodeAttributes,
  type RawGraph,
} from "../types";

interface ExtendedEvents extends GraphEvents {
  nodesLoaded: (nodes: string[]) => void;
  nodesDropped: (nodes: string[]) => void;
  nodesSelected: (nodes: string[]) => void;
  layoutRunning: (isRunning: boolean) => void;
  layoutDone: () => void;
}

export class Graph<N = KeyValue, E = KeyValue> extends Graphology<
  InternalNodeAttributes<N>,
  EdgeAttributes<E>,
  KeyValue
> {
  constructor(options?: GraphOptions) {
    super(options);

    const edgeHandler = debounce(() => this.checkParallelEdges());
    this.on("edgeAdded", edgeHandler);
    this.on("edgeDropped", edgeHandler);

    const fireNodeSelect = debounce(() => {
      this.emit(
        "nodesSelected",
        this.filterNodes((_, atts) => atts.selected),
      );
    });
    const nodeSelectHandler = ({ name }: KeyValue) => {
      if (name === "selected") {
        fireNodeSelect();
      }
    };
    this.on("nodeDropped", fireNodeSelect);
    this.on("nodeAttributesUpdated", nodeSelectHandler);
  }

  on<Event extends keyof ExtendedEvents>(
    type: Event,
    listener: ExtendedEvents[Event],
  ) {
    return super.on(type as AnyObject, listener);
  }

  off<Event extends keyof ExtendedEvents>(
    type: Event,
    listener: ExtendedEvents[Event],
  ) {
    return super.off(type as AnyObject, listener);
  }

  emit<Event extends keyof ExtendedEvents>(
    type: Event,
    ...args: Parameters<ExtendedEvents[Event]>
  ) {
    return super.emit(type as AnyObject, ...args);
  }

  mergeNodes(
    key: string,
    nodes: string[],
    attributesOrNodeReducer?:
      | NodeAttributes<N>
      | ((attributes: Array<NodeAttributes<N>>) => NodeAttributes<N>),
    edgeReducer?: (edges: RawGraph<N, E>["edges"]) => RawGraph<N, E>["edges"],
  ) {
    if (!nodes.length) return;
    let newNodeAttributes: NodeAttributes<N> = {};
    let edgeList: RawGraph<N, E>["edges"] = [];
    const attributeList: Array<NodeAttributes<N>> = [];
    nodes.forEach((n) => {
      const atts = this.getNodeAttributes(n);
      if (atts) {
        attributeList.push(atts);
      }
      const edges = this.edges(n);
      if (edges.length) {
        edges.forEach((e) => {
          const source = this.source(e);
          const target = this.target(e);
          const edge = this.getEdgeAttributes(e);
          if (edge) {
            edgeList.push({
              key: e,
              // move source to new node if source is old node
              source: source === n ? key : source,
              // move target to new node if target is old node
              target: target === n ? key : target,
              attributes: edge,
            });
          }
        });
      }
    });
    if (typeof attributesOrNodeReducer === "function") {
      newNodeAttributes = attributesOrNodeReducer(attributeList);
    } else if (typeof attributesOrNodeReducer === "object") {
      Object.assign(newNodeAttributes, attributesOrNodeReducer);
    }
    if (typeof edgeReducer === "function") {
      edgeList = edgeReducer(edgeList);
    }
    this.dropNodes(nodes);
    this.import(
      {
        nodes: [{ key, attributes: newNodeAttributes }],
        edges: edgeList,
      },
      true,
    );
    return this;
  }

  groupNodes(
    key: string,
    nodes: string[],
    attributesOrNodeReducer?:
      | NodeAttributes<N>
      | ((attributes: Array<NodeAttributes<N>>) => NodeAttributes<N>),
    edgeReducer?: (edges: RawGraph<N, E>["edges"]) => RawGraph<N, E>["edges"],
  ) {
    if (!nodes.length) return;
    let newNodeAttributes: NodeAttributes<N> = {
      nodeList: nodes,
      isGroup: true,
      expanded: false,
    } as any;
    let edgeList: RawGraph<N, E>["edges"] = [];
    const movedEdges: RawGraph<N, E>["edges"] = [];
    const attributeList: Array<NodeAttributes<N>> = [];
    nodes.forEach((n) => {
      const atts = this.getNodeAttributes(n);
      if (atts) {
        attributeList.push(atts);
      }
      const edges = this.edges(n);
      if (edges.length) {
        const nodeEdges = edges.map((e) => {
          const source = this.source(e);
          const target = this.target(e);
          const edge = this.getEdgeAttributes(e);
          if (edge) {
            movedEdges.push({
              key: e,
              // move source to group node if source is not old node
              source: source === n ? n : key,
              // move target to group node if target is not old node
              target: target === n ? n : key,
              attributes: edge,
            });
            // make new connection to neighboring node
            edgeList.push({
              key: `${key}-${e}`,
              source: source === n ? key : source,
              target: target === n ? key : target,
              attributes: edge,
            });
          }
          this.dropEdge(e);
          return {
            key: e,
            // move source to group node if source is not old node
            source,
            // move target to group node if target is not old node
            target,
            attributes: edge,
          };
        });
        this.setNodeAttribute(n, "hidden", true);
        this.setNodeAttribute(n, "selected", false);
        // store original edges for grouped node
        this.setNodeAttribute(n, "originalEdges", nodeEdges);
      }
    });
    if (typeof attributesOrNodeReducer === "function") {
      newNodeAttributes = Object.assign(
        newNodeAttributes,
        attributesOrNodeReducer(attributeList),
      );
    } else if (typeof attributesOrNodeReducer === "object") {
      Object.assign(newNodeAttributes, attributesOrNodeReducer);
    }
    if (typeof edgeReducer === "function") {
      edgeList = edgeReducer(edgeList);
    }
    this.import(
      {
        nodes: [{ key, attributes: newNodeAttributes }],
        edges: edgeList.concat(movedEdges),
      },
      true,
    );
    return this;
  }

  ungroupNode(node: string) {
    const atts = this.getNodeAttributes(node);
    if (!atts || !atts.isGroup) return;
    const nodes = atts.nodeList ?? [];
    nodes.forEach((n: string) => {
      const originalEdges = this.getNodeAttribute(n, "originalEdges");
      if (originalEdges && Array.isArray(originalEdges)) {
        originalEdges.forEach((e) => {
          this.addEdgeWithKey(e.key, e.source, e.target, e.attributes);
        });
      }
      this.setNodeAttribute(n, "hidden", false);
      this.removeNodeAttribute(n, "originalEdges");
    });
    this.dropNode(node);
    return this;
  }

  toggleExpanded(node: string, force?: boolean) {
    const expanded = force ?? !this.getNodeAttribute(node, "expanded");
    const nodes = this.getNodeAttribute(node, "nodeList");
    this.setNodeAttribute(node, "expanded", expanded);
    nodes?.forEach((n: string) => {
      this.setNodeAttribute(n, "hidden", !expanded);
    });
    return this;
  }

  // @ts-expect-error ignore
  import(data: RawGraph<N, E> | Graph<N, E>, merge?: boolean) {
    const newNodes = [];
    if (data instanceof Graph) {
      newNodes.push(...data.nodes());
    } else {
      newNodes.push(...data.nodes.map((n) => n.key));
    }
    super.import(data as any, merge);
    // fire events for nodes added
    this.emit("nodesLoaded", newNodes);
    // apply random positions for nodes
    const positions = random(this as any);
    animateNodes(
      this as any,
      positions,
      {
        duration: 200,
      },
      () => {
        // fire layout done event
        this.emit("layoutDone");
      },
    );
    return this;
  }

  // circularLayout() {
  //   if (this.size === 0) return this;
  //   const positions = circular(this as any);
  //   animateNodes(
  //     this as any,
  //     positions,
  //     {
  //       duration: 200,
  //     },
  //     () => {
  //       this.emit("layoutDone");
  //     },
  //   );
  //   return this;
  // }

  // private _timer: any;
  // private _worker?: forceAtlas2Worker;
  // forceLayout(settings: ForceAtlas2Settings = {}) {
  //   if (this.size === 0) return this;
  //   const sensibleSettings = forceAtlas2.inferSettings(this as any);
  //   if (this._worker?.isRunning()) {
  //     clearTimeout(this._timer);
  //   }
  //   this._worker?.kill();
  //   this._worker = new forceAtlas2Worker(this as any, {
  //     settings: {
  //       ...sensibleSettings,
  //       ...settings,
  //     },
  //   });
  //   this.emit("layoutRunning", true);
  //   this._worker.start();
  //   this._timer = setTimeout(
  //     () => {
  //       this._worker?.stop();
  //       this._worker?.kill();
  //       this.emit("layoutRunning", false);
  //       this.emit("layoutDone");
  //     },
  //     // @ts-expect-error ignore
  //     this.nodes().length * window.__GRAPH_LAYOUT_DURATION_MULTIPLIER__,
  //   );
  //   return this;
  // }

  // @ts-expect-error ignore
  private elk: ELK;
  async elkLayout(type: string) {
    if (!this.elk)
      this.elk = new ElkConstructor({
        workerFactory() {
          return new ElkWorker();
        },
      });
    this.emit("layoutRunning", true);
    this.elk
      .layout(
        {
          id: "root",
          width: 1600,
          height: 900,
          children: this.mapNodes((node, atts) => ({
            id: node,
            width: atts.size ?? Math.max(16, (atts.weight ?? 0) * 3),
            height: atts.size ?? Math.max(16, (atts.weight ?? 0) * 3),
          })),
          edges: this.mapEdges((edge, _, source, target) => ({
            id: edge,
            sources: [source],
            targets: [target],
          })),
        },
        {
          logging: true,
          measureExecutionTime: true,
          layoutOptions: { "elk.algorithm": type },
        },
      )
      .then((graph) => {
        const positions = Object.fromEntries(
          graph.children?.map((node) => [
            node.id,
            { x: node.x ?? 0, y: node.y ?? 0 },
          ]) ?? [],
        );
        animateNodes(
          this as any,
          positions,
          {
            duration: 200,
          },
          () => {
            setTimeout(() => {
              this.emit("layoutDone");
            }, 100);
          },
        );
      })
      .catch(console.error)
      .finally(() => {
        this.emit("layoutRunning", false);
      });
  }

  dropNodes(nodes: string[]) {
    if (!nodes.length) return;
    nodes.forEach((n) => this.dropNode(n));
  }

  /**
   * parallel edge check to be called after adding edges
   */
  private getCurvature(index: number, maxIndex: number = 0): number {
    if (maxIndex <= 0) throw new Error("Invalid maxIndex");
    if (index < 0) return -this.getCurvature(-index, maxIndex);
    const amplitude = 0.25;
    const maxCurvature =
      amplitude *
      (1 - Math.exp(-maxIndex / amplitude)) *
      DEFAULT_EDGE_CURVATURE;
    return (maxCurvature * index) / maxIndex;
  }

  private checkParallelEdges() {
    // Use dedicated helper to identify parallel edges:
    // @ts-expect-error ignore
    indexParallelEdgesIndex(this, {
      edgeIndexAttribute: "parallelIndex",
      edgeMinIndexAttribute: "parallelMinIndex",
      edgeMaxIndexAttribute: "parallelMaxIndex",
    });
    // Adapt types and curvature of parallel edges for rendering:
    this.forEachEdge(
      (
        edge: string,
        { parallelIndex, parallelMinIndex, parallelMaxIndex }: AnyObject,
      ) => {
        if (typeof parallelMinIndex === "number") {
          this.mergeEdgeAttributes(edge, {
            type: parallelIndex ? "curved" : "line",
            curvature: this.getCurvature(
              parallelIndex ?? 1,
              parallelMaxIndex ?? 1,
            ),
          } as AnyObject);
        } else if (typeof parallelIndex === "number") {
          this.mergeEdgeAttributes(edge, {
            type: "curved",
            curvature: this.getCurvature(
              parallelIndex ?? 1,
              parallelMaxIndex ?? 1,
            ),
          } as AnyObject);
        } else {
          this.setEdgeAttribute(edge, "type", "line" as AnyObject);
        }
      },
    );
  }
}
