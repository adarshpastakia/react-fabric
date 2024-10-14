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

import { StateNode, type TLEventHandlers } from "@tldraw/editor";
import { createShapeId } from "@tldraw/tldraw";
import { type AvatarShape } from "./type";

export class Pointing extends StateNode {
  static override id = "pointing";

  shape?: AvatarShape;

  markId = "";

  override onPointerUp: TLEventHandlers["onPointerUp"] = () => {
    this.cancel();
  };

  override onCancel: TLEventHandlers["onCancel"] = () => {
    this.cancel();
  };

  override onComplete: TLEventHandlers["onComplete"] = () => {
    this.cancel();
  };

  override onInterrupt: TLEventHandlers["onInterrupt"] = () => {
    this.cancel();
  };

  override onPointerMove: TLEventHandlers["onPointerMove"] = (info) => {
    if (this.editor.inputs.isDragging) {
      const { originPagePoint } = this.editor.inputs;

      const id = createShapeId();

      this.markId = `creating:${id}`;

      this.editor.mark(this.markId);

      this.editor
        .createShapes<AvatarShape>([
          {
            id,
            type: "avatar",
            x: originPagePoint.x,
            y: originPagePoint.y,
            props: {
              color: "black",
              fill: "none",
              size: "m",
              font: "draw",
              text: "person",
            } as AnyObject,
          },
        ])
        .select(id)
        .setCurrentTool("select.resizing", {
          ...info,
          target: "selection",
          handle: "bottom_right",
          isCreating: true,
          creationCursorOffset: { x: 1, y: 1 },
          onInteractionEnd: "avatar",
        });
    }
  };

  cancel() {
    if (this.shape) {
      // the arrow might not have been created yet!
      this.editor.bailToMark(this.markId);
    }
    this.editor.setHintingShapes([]);
    this.parent.transition("idle", {});
  }
}
