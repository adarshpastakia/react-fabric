import { GraphOptions } from "graphology-types";
import { RefObject } from "react";
import { Graph } from "../graph";

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
   * label color
   */
  labelColor?: string;
  /**
   * stroke width
   */
  strokeColor?: string;
  /**
   * icon color
   */
  iconColor?: string;
  /**
   * fill color
   */
  color?: string;
  /**
   * stroke width
   */
  stroke?: number;
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
  fixed?: boolean;
  hidden?: boolean;

  data?: N;

  [key: string]: any;
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
   * stroke color
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
  edgeType?: string;
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

  hidden?: boolean;

  data?: E;
}

export interface RawGraph<N = KeyValue, E = KeyValue> {
  nodes: { key: string; attributes?: NodeAttributes<N> }[];
  edges: {
    key: string;
    source: string;
    target: string;
    attributes?: EdgeAttributes<E>;
  }[];
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
}
