import { type GraphOptions } from "graphology-types";
import { type RefObject } from "react";
import { type Graph } from "../graph";

interface NodeBadge {
  position:
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right"
    | "top"
    | "left"
    | "right";
  type?: "star" | "exclaim" | "thumbUp" | "thumbDown";
  path?: string;
  /**
   * icon color
   */
  iconColor?: string;
  /**
   * fill color
   */
  color?: string;
}
export interface NodeAttributes<N = KeyValue> {
  /**
   * node label
   */
  label?: string;
  /**
   * node shape
   */
  type?: "circle" | "rect";
  /**
   * node size
   */
  size?: number;
  /**
   * node weight to apply proportional size
   */
  weight?: number;
  /**
   * label color
   */
  labelColor?: string;
  /**
   * border color
   */
  borderColor?: string;
  /**
   * icon color
   */
  iconColor?: string;
  /**
   * fill color
   */
  color?: string;
  /**
   * border width
   */
  border?: number;
  /**
   * hover color
   */
  hoverColor?: string;
  /**
   * highlighted color
   */
  highlightColor?: string;
  /**
   * define node type
   */
  nodeType?: string;
  /**
   * pie colors
   */
  pie?: string[];
  /**
   * svg path
   */
  path?: string;
  /**
   * avatar/image url
   */
  image?: string;
  /**
   * selected state
   */
  selected?: boolean;
  /**
   * highlighted state
   */
  highlight?: boolean;

  badge?: NodeBadge[];

  x?: number;
  y?: number;
  hidden?: boolean;

  data?: N;
}

export interface EdgeAttributes<E = KeyValue> {
  /**
   * edge shape
   */
  type?: "line" | "curved";
  /**
   * edge label
   */
  label?: string;
  /**
   * edge size
   */
  size?: number;
  /**
   * edge weight to apply proportional size
   */
  weight?: number;
  /**
   * edge color
   */
  color?: string;
  /**
   * hover color
   */
  hoverColor?: string;
  /**
   * highlighted color
   */
  highlightColor?: string;
  /**
   * define edge type
   */
  edgeType?: "curved" | "line";
  /**
   * edge arrow head
   */
  arrow?: "source" | "target" | "both";
  /**
   * edge count
   */
  count?: number;

  /**
   * selected state
   */
  selected?: boolean;
  /**
   * highlighted state
   */
  highlight?: boolean;

  data?: E;
}

export interface InternalNodeAttributes<N = KeyValue>
  extends NodeAttributes<N> {
  groupId?: string;
  isGroup?: boolean;
  expanded?: boolean;
  nodeList?: string[];
  opacity?: number;
  id?: string;
  fixed?: boolean;
  originalEdges?: Array<{
    key: string;
    source: string;
    target: string;
    attributes?: KeyValue;
  }>;
}
export interface InternalEdgeAttributes<E = KeyValue>
  extends EdgeAttributes<E> {
  opacity?: number;
  curvature?: number;
  id?: string;
}

export interface RawGraph<N = KeyValue, E = KeyValue> {
  nodes: Array<{ key: string; attributes?: NodeAttributes<N> }>;
  edges: Array<{
    key: string;
    source: string;
    target: string;
    attributes?: EdgeAttributes<E>;
  }>;
  attributes?: KeyValue;
  options?: GraphOptions;
}

export interface GraphRef<N = KeyValue, E = KeyValue> {
  graph: Graph<N, E>;
}

export interface GraphProps<N = KeyValue, E = KeyValue> {
  ref?: RefObject<GraphRef<N, E> | null>;
  data: RawGraph<N, E> | Graph<N, E>;
  nodeReducer?: (node: NodeAttributes<N>) => NodeAttributes<N>;
  edgeReducer?: (edge: EdgeAttributes<E>) => EdgeAttributes<E>;

  onSelectChange?: (selected: string[]) => void;

  onNodeDoubleClick?: (node: string, attributes: NodeAttributes<N>) => void;
  onContextMenu?: (
    type: "canvas" | "node" | "edge",
    nodesOrEdge?: string | string[],
  ) => void;
}
