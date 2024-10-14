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

export class Idle extends StateNode {
  static override id = "idle";

  override onPointerDown: TLEventHandlers["onPointerDown"] = (info) => {
    this.parent.transition("pointing", info);
  };

  override onEnter = () => {
    this.editor.setCursor({ type: "cross", rotation: 0 });
  };

  override onCancel = () => {
    this.editor.setCurrentTool("select");
  };

  override onKeyUp: TLEventHandlers["onKeyUp"] = (info) => {
    if (info.key === "Enter") {
      if (this.editor.getInstanceState().isReadonly) return null;
      const onlySelectedShape = this.editor.getOnlySelectedShape();
      // If the only selected shape is editable, start editing it
      if (
        onlySelectedShape &&
        this.editor.getShapeUtil(onlySelectedShape).canEdit(onlySelectedShape)
      ) {
        this.editor.setCurrentTool("select");
        this.editor.setEditingShape(onlySelectedShape.id);
        // @ts-expect-error ignore
        this.editor.root.value?.transition("editing_shape", {
          ...info,
          target: "shape",
          shape: onlySelectedShape,
        });
      }
    }
  };
}
