/*
 * React Fabric
 * @version: 1.0.0
 *
 *
 * The MIT License (MIT)
 * Copyright (c) 2024 Adarsh Pastakia
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 * and associated documentation files (the "Software"), to deal in the Software without restriction,
 * including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial
 * portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
 * TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

// REF: https://github.com/facebook/lexical/blob/main/packages/lexical-playground/src/nodes/StickyNode.tsx

import {
  $applyNodeReplacement,
  DecoratorNode,
  type DOMConversionMap,
  type DOMConversionOutput,
  type DOMExportOutput,
  type EditorConfig,
  type LexicalEditor,
  type LexicalNode,
  type NodeKey,
  type SerializedLexicalNode,
  type Spread,
} from "lexical";
import { lazy, Suspense } from "react";
import { createPortal } from "react-dom";

const StickyComponent = lazy(
  async () =>
    await import("../components/StickyComponent").then(
      ({ StickyComponent }) => ({
        default: StickyComponent,
      }),
    ),
);

type StickyNoteColor = "pink" | "yellow" | "green" | "blue";

interface StickyNodeType {
  xOffset: number;
  yOffset: number;
  user?: string;
  color?: StickyNoteColor;
  state?: AnyObject;
}
export type SerializedStickyNode = Spread<
  StickyNodeType,
  SerializedLexicalNode
>;

const convertStickyElement = (
  domNode: HTMLElement,
): null | DOMConversionOutput => {
  const sticky = domNode.getAttribute("data-lexical-sticky") === "true";
  if (sticky) {
    const node = $createStickyNode({
      xOffset: +(domNode.getAttribute("data-x") ?? "8"),
      yOffset: +(domNode.getAttribute("data-y") ?? "8"),
      user: domNode.getAttribute("data-user") ?? "",
      color: domNode.getAttribute("data-color") as AnyObject,
      state: domNode.getAttribute("data-state") ?? "",
    });
    return { node };
  }

  return null;
};

const colors: AnyObject = {
  yellow: "green",
  green: "blue",
  blue: "pink",
  pink: "yellow",
};

export class StickyNode extends DecoratorNode<JSX.Element> {
  __x: number;
  __y: number;
  __user: string;
  __state?: AnyObject;
  __color: StickyNoteColor;

  static getType(): string {
    return "sticky";
  }

  static clone(node: StickyNode): StickyNode {
    return new StickyNode(
      node.__x,
      node.__y,
      node.__user,
      node.__color,
      node.__state,
      node.__key,
    );
  }

  static importJSON(serializedNode: SerializedStickyNode): StickyNode {
    const stickyNode = new StickyNode(
      serializedNode.xOffset,
      serializedNode.yOffset,
      serializedNode.user,
      serializedNode.color,
      serializedNode.state,
    );

    return stickyNode;
  }

  static importDOM(): DOMConversionMap | null {
    return {
      div: (domNode: HTMLElement) => {
        if (!domNode.hasAttribute("data-lexical-sticky")) {
          return null;
        }
        return {
          conversion: convertStickyElement,
          priority: 2,
        };
      },
      span: (domNode: HTMLElement) => {
        if (!domNode.hasAttribute("data-lexical-sticky")) {
          return null;
        }
        return {
          conversion: convertStickyElement,
          priority: 1,
        };
      },
    };
  }

  constructor(
    x: number,
    y: number,
    user = "",
    color: StickyNoteColor = "yellow",
    state?: KeyValue,
    key?: NodeKey,
  ) {
    super(key);
    this.__x = x;
    this.__y = y;
    this.__user = user;
    this.__state = state;
    this.__color = color;
  }

  exportJSON(): SerializedStickyNode {
    return {
      state: this.__state,
      color: this.__color,
      user: this.__user,
      type: "sticky",
      version: 1,
      xOffset: this.__x,
      yOffset: this.__y,
    };
  }

  createDOM(config: EditorConfig): HTMLElement {
    const div = document.createElement("div");
    div.style.display = "contents";
    return div;
  }

  updateDOM(): false {
    return false;
  }

  exportDOM(): DOMExportOutput {
    const writable = this.getWritable();
    const element = document.createElement("div");
    element.setAttribute("data-lexical-sticky", "true");
    element.setAttribute("data-x", `${writable.__x}`);
    element.setAttribute("data-y", `${writable.__y}`);
    element.setAttribute("data-user", `${writable.__user}`);
    element.setAttribute("data-color", `${writable.__color}`);
    element.setAttribute("data-state", `${writable.__state}`);
    return { element };
  }

  setPosition(x: number, y: number): void {
    const writable = this.getWritable();
    writable.__x = x;
    writable.__y = y;
  }

  toggleColor(): void {
    const writable = this.getWritable();
    writable.__color = colors[writable.__color ?? "yellow"];
  }

  updateState(text: KeyValue): void {
    const writable = this.getWritable();
    writable.__state = text;
  }

  decorate(editor: LexicalEditor, config: EditorConfig): JSX.Element {
    return createPortal(
      <Suspense fallback={null}>
        <StickyComponent
          x={this.__x}
          y={this.__y}
          user={this.__user}
          state={this.__state}
          nodeKey={this.getKey()}
          color={this.__color as AnyObject}
        />
      </Suspense>,
      document.querySelector(".lexical-container") ?? document.body,
    );
  }

  isIsolated(): true {
    return true;
  }
}

export function $isStickyNode(
  node: LexicalNode | null | undefined,
): node is StickyNode {
  return node instanceof StickyNode;
}

export function $createStickyNode({
  xOffset = 650,
  yOffset = 32,
  user = "",
  color = "yellow",
  state,
}: StickyNodeType): StickyNode {
  const node = new StickyNode(xOffset, yOffset, user, color, state);
  return $applyNodeReplacement(node);
}
