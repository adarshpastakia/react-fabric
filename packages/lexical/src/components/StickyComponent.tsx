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

// REF: https://github.com/facebook/lexical/blob/main/packages/lexical-playground/src/nodes/StickyComponent.tsx

import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { LexicalNestedComposer } from "@lexical/react/LexicalNestedComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { mdiClose, mdiFormatColorFill } from "@mdi/js";
import { Icon } from "@react-fabric/core";
import { $getNodeByKey, createEditor, type NodeKey } from "lexical";
import { useEffect, useMemo, useRef } from "react";
import { $isStickyNode } from "../nodes/StickyNode";

interface Positioning {
  isDragging: boolean;
  offsetX: number;
  offsetY: number;
  rootElementRect: null | { left: number; top: number };
  x: number;
  y: number;
}

function positionSticky(
  stickyElem: HTMLElement,
  positioning: Positioning,
): void {
  const style = stickyElem.style;
  style.top = `${positioning.y}px`;
  style.left = `${positioning.x}px`;
}

export const StickyComponent = ({
  x = 0,
  y = 0,
  nodeKey,
  color,
  state,
  user,
}: {
  user: string;
  state?: AnyObject;
  color: "pink" | "yellow";
  nodeKey: NodeKey;
  x: number;
  y: number;
}) => {
  const [editor] = useLexicalComposerContext();
  const stickyContainerRef = useRef<null | HTMLDivElement>(null);
  const positioningRef = useRef<Positioning>({
    isDragging: false,
    offsetX: 0,
    offsetY: 0,
    rootElementRect: { left: 8, top: 8 },
    x: 8,
    y: 8,
  });

  useEffect(() => {
    const position = positioningRef.current;
    position.x = x;
    position.y = y;

    const stickyContainer = stickyContainerRef.current;
    if (stickyContainer !== null) {
      positioningRef.current.rootElementRect = {
        left: x,
        top: y,
      };
      positionSticky(stickyContainer, position);
    }
  }, [x, y]);

  useEffect(() => {
    const stickyContainer = stickyContainerRef.current;
    if (stickyContainer !== null) {
      // Delay adding transition so we don't trigger the
      // transition on load of the sticky.
      setTimeout(() => {
        stickyContainer.style.setProperty(
          "transition",
          "top 300ms ease 0s, left 300ms ease 0s",
        );
      }, 500);
    }
  }, []);

  const handlePointerMove = (event: PointerEvent) => {
    const stickyContainer = stickyContainerRef.current;
    const positioning = positioningRef.current;
    const rootElementRect = positioning.rootElementRect;
    if (
      stickyContainer !== null &&
      positioning.isDragging &&
      rootElementRect !== null
    ) {
      positioning.x =
        rootElementRect.left + (event.pageX - positioning.offsetX);
      positioning.y = rootElementRect.top + (event.pageY - positioning.offsetY);
      if (positioning.x < 0) positioning.x = 0;
      if (positioning.x > 642)
        positioning.x = 642 - stickyContainer.offsetWidth;
      if (positioning.y < 0) positioning.y = 0;
      positionSticky(stickyContainer, positioning);
    }
  };

  const handlePointerUp = (event: PointerEvent) => {
    const stickyContainer = stickyContainerRef.current;
    const positioning = positioningRef.current;
    if (stickyContainer !== null) {
      positioning.isDragging = false;
      stickyContainer.classList.remove("dragging");
      editor.update(() => {
        const node = $getNodeByKey(nodeKey);
        if ($isStickyNode(node)) {
          node.setPosition(positioning.x, positioning.y);
        }
      });
    }
    document.removeEventListener("pointermove", handlePointerMove);
    document.removeEventListener("pointerup", handlePointerUp);
  };

  const handleDelete = () => {
    editor.update(() => {
      const node = $getNodeByKey(nodeKey);
      if ($isStickyNode(node)) {
        node.remove();
      }
    });
  };

  const handleColorChange = () => {
    editor.update(() => {
      const node = $getNodeByKey(nodeKey);
      if ($isStickyNode(node)) {
        node.toggleColor();
      }
    });
  };

  const innerEditor = useMemo(() => {
    const editor = createEditor({ editable: true });
    if (state) {
      const editorState = editor.parseEditorState(state);
      editor.setEditorState(editorState);
    }
    return editor;
  }, []);

  useEffect(() => {
    if (innerEditor._editable) {
      const dispose = innerEditor.registerUpdateListener(({ editorState }) => {
        editor.update(() => {
          const node = $getNodeByKey(nodeKey);
          if ($isStickyNode(node)) {
            node.updateState(innerEditor.getEditorState().toJSON());
          }
        });
      });

      return () => {
        dispose();
      };
    }
  }, [innerEditor._editable]);

  return (
    <div ref={stickyContainerRef} className="sticky__container">
      <div
        className="sticky__handle"
        onPointerDown={(event) => {
          const stickyContainer = stickyContainerRef.current;
          if (
            stickyContainer == null ||
            event.button === 2 ||
            event.target !== stickyContainer.firstChild
          ) {
            // Right click or click on editor should not work
            return;
          }
          const stickContainer = stickyContainer;
          const positioning = positioningRef.current;
          if (stickContainer !== null) {
            positioning.offsetX = event.clientX;
            positioning.offsetY = event.clientY;
            positioning.rootElementRect = {
              left: positioning.x,
              top: positioning.y,
            };
            positioning.isDragging = true;
            stickContainer.classList.add("dragging");
            document.addEventListener("pointermove", handlePointerMove);
            document.addEventListener("pointerup", handlePointerUp);
            event.preventDefault();
          }
        }}
      />
      <div className={`sticky-note ${color}`}>
        <div className="sticky__tools">
          <button
            onClick={handleColorChange}
            className="sticky--color"
            aria-label="Change sticky note color"
            title="Color"
          >
            <Icon icon={mdiFormatColorFill} />
          </button>
          <button
            onClick={handleDelete}
            className="sticky--delete"
            aria-label="Delete sticky note"
            title="Delete"
          >
            <Icon icon={mdiClose} />
          </button>
        </div>
        <div className="text-sm font-semibold">{user}</div>
        <LexicalNestedComposer
          initialEditor={innerEditor}
          initialTheme={{
            paragraph: "sticky__paragraph",
            text: {
              bold: "editor-textBold",
              code: "editor-textCode",
              italic: "editor-textItalic",
              strikethrough: "editor-textStrikethrough",
              subscript: "editor-textSubscript",
              superscript: "editor-textSuperscript",
              underline: "editor-textUnderline",
              underlineStrikethrough: "editor-textUnderlineStrikethrough",
            },
          }}
        >
          <RichTextPlugin
            contentEditable={<ContentEditable className="sticky__editor" />}
            placeholder={
              <div className="sticky-placeholder">Sticky note...</div>
            }
            ErrorBoundary={LexicalErrorBoundary}
          />
          <AutoFocusPlugin />
        </LexicalNestedComposer>
      </div>
    </div>
  );
};
