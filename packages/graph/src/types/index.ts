/**
 * React Fabric
 * @version 1.0.0
 * @license MIT
 * @copyright 2024 Adarsh Pastakia
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

export interface NodeAttributes<N extends KeyValue = KeyValue> {
  data?: N;

  id: string;

  type?: string;
  label?: string;
  icon?: string;
  image?: string;

  color?: string;
  border?: number;
  borderColor?: string;

  segments?: string[] | number[] | { [color: string]: number };

  size?: number;
  shape?: "square" | "circle" | "folder" | "diamond" | "triangle" | "folderOpen";

  visible?: boolean;

  x?: number;
  y?: number;
  z?: number;
}

export interface EdgeAttributes<E extends KeyValue = KeyValue> {
  data?: E;

  id: string;
  source: string;
  target: string;

  type?: string;
  label?: string;
  count?: number;

  size?: number;
  color?: string;

  path?: "straight" | "curved" | "stepCurved" | "curvedS";
  style?: "solid" | "dashed" | "dotted";
  head?: "arrow";
  tail?: "arrow";

  visible?: boolean;

  /** Marks a link that was created as a clone during `groupNodes`. Used by `ungroupNodes` to drop clones and revert the originals. */
  groupEdge?: boolean;
}

export interface RawGraph<N extends KeyValue = KeyValue, E extends KeyValue = KeyValue> {
  nodes: NodeAttributes<N>[];
  edges: EdgeAttributes<E>[];
}

export interface InternalNode<N extends KeyValue = KeyValue> extends NodeAttributes<N> {
  group?: boolean;
  groupExpanded?: boolean;
  groupNodes?: string[];

  /** Back-reference to the group node that owns this (hidden) member. Empty for top-level nodes. */
  groupId?: string;

  locked?: boolean;

  /** Transient selection state, toggled by `selectNodes` / `unselectNodes`. */
  selected?: boolean;
  hilighted?: boolean;

  x?: number;
  y?: number;
  z?: number;

  fx?: number;
  fy?: number;
  fz?: number;

  pieSize?: number;
  slice_0?: number;
  slice_1?: number;
  slice_2?: number;
  slice_3?: number;
  slice_4?: number;
  slice_5?: number;
  slice_6?: number;
  slice_7?: number;
  slice_8?: number;
  slice_9?: number;
  slice_10?: number;
  slice_11?: number;
  color_0?: string;
  color_1?: string;
  color_2?: string;
  color_3?: string;
  color_4?: string;
  color_5?: string;
  color_6?: string;
  color_7?: string;
  color_8?: string;
  color_9?: string;
  color_10?: string;
  color_11?: string;
}

export interface InternalEdge<E extends KeyValue = KeyValue> extends EdgeAttributes<E> {
  group?: boolean;

  /** Curvature of a `path: "curved"` edge; 0 = straight. Assigned by `assignCurvature` for parallel edges. */
  curvature?: number;

  /** Dash length for `layerDashed`, in relative edge-length units. Assigned by `assignEdgeDash` from `shape`. */
  dashSize?: number;

  /** Dash gap length for `layerDashed`, in relative edge-length units. Assigned by `assignEdgeDash` from `shape`. */
  gapSize?: number;

  rotation?: number;

  /** Transient selection state. */
  selected?: boolean;

  /**
   * The endpoint before it was re-pointed onto a group / merge node. Captured by
   * `hydrateEdge` when the link is added; read back by `ungroupNode`.
   */
  originalSource?: string;
  originalTarget?: string;
}

/**
 * Public, listener-facing node: the node `id` merged with its `data` bag. This is
 * what every `nodes*` event emits — internal fields (positions, pins, group and
 * selection state) never leak to listeners.
 */
export type PublicNode<N extends KeyValue = KeyValue> = { id: string } & N;

/** Public, listener-facing link: the link `id` merged with its `data` bag. Emitted by `edges*` events. */
export type PublicEdge<E extends KeyValue = KeyValue> = { id: string } & E;
