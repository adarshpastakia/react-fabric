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

import Graphology from "graphology";
import { random } from "graphology-layout";
import forceAtlas2 from "graphology-layout-forceatlas2";
import type { GraphEvents } from "graphology-types";
import type { EdgeAttributes, InternalEdge, InternalNode, NodeAttributes, RawGraph } from "../types";

interface ExtendedEvents<N extends KeyValue = KeyValue, E extends KeyValue = KeyValue> extends GraphEvents<InternalNode<N>, InternalEdge<E>> {
  nodesLoaded: (nodes: string[]) => void;
  nodesDropped: (nodes: string[]) => void;
  nodesSelected: (nodes: string[]) => void;
  layoutRunning: (isRunning: boolean) => void;
  layoutDone: () => void;
}

export class Graph<N extends KeyValue = KeyValue, E extends KeyValue = KeyValue> extends Graphology<NodeAttributes<N>, EdgeAttributes<E>> {
  constructor() {
    super({ multi: true });
  }

  importGraph(data: RawGraph<N, E>, applyLayout = true): this {
    super.clear();
    super.import(
      {
        nodes: data.nodes.map((n) => ({ key: n.id, attributes: this.enrichNodeAttributes(n) })),
        edges: data.edges.map((e) => ({
          key: e.id,
          source: e.source,
          target: e.target,
          attributes: e,
        })),
      },
      false,
    );
    setTimeout(() => {
      if (applyLayout) {
        random.assign(this);
        const settings = forceAtlas2.inferSettings(this);
        forceAtlas2.assign(this, {
          iterations: 500,
          settings,
        });
      }
      this.emit("layoutDone");
    }, 500);
    return this;
  }

  on<Event extends keyof ExtendedEvents<N, E>>(type: Event, listener: ExtendedEvents<N, E>[Event]) {
    return super.on(type as AnyObject, listener);
  }

  off<Event extends keyof ExtendedEvents<N, E>>(type: Event, listener: ExtendedEvents<N, E>[Event]) {
    return super.off(type as AnyObject, listener);
  }

  emit<Event extends keyof ExtendedEvents<N, E>>(type: Event, ...args: Parameters<ExtendedEvents<N, E>[Event]>) {
    return super.emit(type as AnyObject, ...args);
  }

  /**
   * @deprecated
   * use `importGraph` instead
   */
  override import(): this {
    throw new Error("Graphology import is deprecated, use `importGraph` instead");
    return this;
  }

  /**
   * @deprecated
   * use `exportGraph` instead
   */
  override export() {
    throw new Error("Graphology export is deprecated, use `exportGraph` instead");
    return { nodes: [], edges: [], attributes: {}, options: {} };
  }

  private enrichNodeAttributes(node: InternalNode<N>) {
    if (!node.x && !node.y) {
      node.x = 0;
      node.y = 0;
    }
    return node;
  }
}
