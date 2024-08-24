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

import { CodeHighlightNode, CodeNode } from "@lexical/code";
import { ListItemNode, ListNode } from "@lexical/list";
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { CheckListPlugin } from "@lexical/react/LexicalCheckListPlugin";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { TablePlugin } from "@lexical/react/LexicalTablePlugin";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { TableCellNode, TableNode, TableRowNode } from "@lexical/table";
import { ErrorBoundary, Header, ThemeProvider } from "@react-fabric/core";
import { debounce } from "@react-fabric/utilities";
import classNames from "classnames";
import { type LexicalEditor as LXE } from "lexical";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { StickyNode } from "../nodes/StickyNode";
import { DraggableBlockPlugin } from "../plugins/DraggableBlockPlugin";
import { StickyPlugin } from "../plugins/StickyPlugin";
import classes from "./Lexical.module.css";
import { LexicalTheme } from "./theme";
import { ToolbarPlugin } from "../plugins/ToolbarPlugin";

export interface EditorProps {
  value?: string | AnyObject;

  readOnly?: boolean;
  /**
   * publish mode removes all wrapping and renders plain lexical view for exporting to pdf using puppeteer
   */
  publishMode?: boolean;

  header?: string;
  footer?: string;

  onChange?: (value: KeyValue) => void;
  onDirty?: (isDirty: boolean) => void;
}

export const LexicalEditor = ({
  value,
  readOnly,
  publishMode,
  onChange,
  onDirty,
}: EditorProps) => {
  const editorRef = useRef<LXE>();
  const [editorContainer, setEditorContainer] = useState<HTMLDivElement | null>(
    null,
  );

  // Catch any errors that occur during Lexical updates and log them
  // or throw them as needed. If you don't throw them, Lexical will
  // try to recover gracefully without losing user data.
  const onError = (error: AnyObject) => {
    console.error("ERROR", error);
  };

  const initEditor = useCallback((editor: LXE) => {
    let dispose: AnyObject;
    editorRef.current = editor;
    const handler = debounce(({ editorState, dirtyElements, dirtyLeaves }) => {
      editorState.read(() => {
        if (dirtyElements.size > 0) {
          onDirty?.(true);
        }
        onChange?.(editorState.toJSON());
      });
    }, 500);
    const handle = editor.registerUpdateListener(handler);

    // const cb = mergeRegister(
    //   editor.registerCommand<DragEvent>(
    //     DRAGOVER_COMMAND,
    //     (event) => {
    //       return onDragover(event);
    //     },
    //     COMMAND_PRIORITY_LOW,
    //   ),
    //   editor.registerCommand<DragEvent>(
    //     DROP_COMMAND,
    //     (event) => {
    //       return onDrop(event, editor);
    //     },
    //     COMMAND_PRIORITY_HIGH,
    //   ),
    // );

    return () => {
      dispose?.();
      handle?.();
      // cb?.();
    };
  }, []);

  useEffect(() => {
    editorRef.current?.setEditorState(
      editorRef.current?.parseEditorState(value ?? ""),
    );
  }, [value]);

  useEffect(() => {
    editorRef.current?.registerRootListener((rootElement) => {
      rootElement &&
        setTimeout(
          () => (rootElement.contentEditable = `${!readOnly && !publishMode}`),
          100,
        );
    });
  }, [readOnly, publishMode]);

  const initialConfig = useMemo(
    () => ({
      editorState: initEditor,
      namespace: "MyEditor",
      editable: !readOnly && !publishMode,
      theme: LexicalTheme,
      nodes: [
        QuoteNode,
        HeadingNode,
        CodeHighlightNode,
        CodeNode,
        ListItemNode,
        ListNode,
        TableCellNode,
        TableNode,
        TableRowNode,
        StickyNode,
      ],
      onError,
    }),
    [],
  );

  const Wrapper = useCallback(
    ({ children }: KeyValue) => {
      return !publishMode ? (
        <div className="lexical-scroller area-content overflow-auto">
          <div
            className={classNames(classes.lexicalToolbar, "sticky top-0 z-1")}
          >
            <Header className="bg-base">
              <ToolbarPlugin />
            </Header>
          </div>
          {children}
        </div>
      ) : (
        children
      );
    },
    [publishMode],
  );

  return (
    <ErrorBoundary>
      <LexicalComposer initialConfig={initialConfig}>
        <Wrapper>
          <ThemeProvider colorScheme="light">
            <div
              role="none"
              className={classNames(
                classes.lexicalEditor,
                "lexical-container relative bg-white min-h-full mx-auto shadow-md print:shadow-none",
              )}
              onDragOver={(e) => e.stopPropagation()}
              onKeyDown={(e) => e.stopPropagation()}
              ref={setEditorContainer}
            >
              <RichTextPlugin
                contentEditable={
                  <ContentEditable className="lexical-editor px-[2cm] py-[1cm] min-h-screen" />
                }
                placeholder={
                  <div className="text-muted overflow-hidden absolute mt-6 top-[1cm] left-[2cm] select-none pointer-events-none">
                    Enter some text...
                  </div>
                }
                ErrorBoundary={LexicalErrorBoundary}
              />
              <ListPlugin />
              <CheckListPlugin />
              <TablePlugin />
              <HistoryPlugin />
              <StickyPlugin />
              <AutoFocusPlugin defaultSelection="rootStart" />
              {/** Custom plugins **/}
              {editorContainer && (
                <DraggableBlockPlugin anchorElem={editorContainer} />
              )}
            </div>
          </ThemeProvider>
        </Wrapper>
      </LexicalComposer>
    </ErrorBoundary>
  );
};
