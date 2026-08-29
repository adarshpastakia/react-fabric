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

import MonacoEditor from "@monaco-editor/react";
import { Layout, useDebounce, useResizeObserver } from "@react-fabric/core";
import { type RefProp } from "@react-fabric/core/dist/types/types";
import { cn, isEmpty, isString } from "@react-fabric/utilities";
import * as monacoEditor from "monaco-editor";
import {
  useCallback,
  useDeferredValue,
  useEffect,
  useImperativeHandle,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";

export interface MonacoEditorRef {
  focus: () => void;
  validate: () => boolean;
  getValue: () => string | undefined;

  addAction?: monacoEditor.editor.IStandaloneCodeEditor["addAction"];
  addCommand?: monacoEditor.editor.IStandaloneCodeEditor["addCommand"];
  executeCommand?: monacoEditor.editor.IStandaloneCodeEditor["executeCommand"];
  setModel?: monacoEditor.editor.IStandaloneCodeEditor["setModel"];
}

export interface BaseEditorProps {
  value?: string;

  required?: boolean;
  readOnly?: boolean;

  minimal?: boolean;

  onChange?: (value: string) => void;

  language?: "css" | "text" | "markdown" | "yaml" | "xml" | "json" | "html";
  schema?: Array<{ uri: string; schema: KeyValue }>;
  handlebarSuggestions?: Array<{ text: string; description?: string }>;
}

monacoEditor.editor.defineTheme("my-light", {
  base: "vs", // can also be 'vs' or 'hc-black'
  inherit: true, // set to false to completely replace the builtin rules
  rules: [],
  colors: {
    "minimap.background": "#8881",
  },
});
monacoEditor.editor.defineTheme("my-dark", {
  base: "vs-dark", // can also be 'vs' or 'hc-black'
  inherit: true, // set to false to completely replace the builtin rules
  rules: [],
  colors: {
    "minimap.background": "#8881",
  },
});

/**
 * CodeEditor component to render a code editor using Monaco Editor.
 * It supports JSON and HTML languages with optional schema validation and handlebar suggestions.
 * The editor can be configured to be read-only, minimal, and can handle changes in the code.
 * It provides a ref to access the editor's value and validation methods.
 *
 * @example
 * ```jsx
 * <CodeEditor
 *   value={initialValue}
 *   schema={[{ uri: "http://example.com/schema.json", schema: {} }]}
 *   handlebarSuggestions={[{ text: "example", description: "An example suggestion" }]}
 *   required={true}
 *   readOnly={false}
 *   minimal={false}
 *   onChange={(value) => console.log("Code changed:", value)}
 *   language="json"
 * />
 * ```
 *
 * @see {@link https://microsoft.github.io/monaco-editor/}
 */
export function CodeEditor({
  ref,
  value,
  schema,
  handlebarSuggestions,
  required,
  readOnly,
  minimal,
  onChange,
  language = "json",
}: BaseEditorProps & RefProp<MonacoEditorRef>) {
  const [editorRef, setEditorRef] = useState<monacoEditor.editor.IStandaloneCodeEditor>();
  const monacoRef = useRef<typeof monacoEditor>(null);

  /** ***************** watch theme change *******************/
  const [theme, setTheme] = useState("");
  useLayoutEffect(() => {
    if (editorRef) {
      const isDark = document.documentElement.dataset.colorScheme === "dark";
      // eslint-disable-next-line @eslint-react/set-state-in-effect
      setTheme(isDark ? "my-dark" : "my-light");
    }
  }, [editorRef]);

  /** ***************** watch editor container resize *******************/
  const resizeHandler = useCallback((size: monacoEditor.editor.IDimension) => editorRef?.layout(size), [editorRef]);
  const containerRef = useResizeObserver(resizeHandler);

  /** ***************** defer value and pass to editor as defaultValue *******************/
  const deferredValue = useDeferredValue(value);
  const codeValue = useMemo(
    () => (isString(deferredValue) ? deferredValue : JSON.stringify(deferredValue, null, 4)),
    [deferredValue],
  );

  const handleChange = useDebounce(
    (value: string) => {
      const model = editorRef?.getModel();
      if (model) {
        const markers = monacoRef.current?.editor.getModelMarkers({
          owner: model.getLanguageId(),
        });
        if (markers?.filter((m) => m.severity === monacoEditor.MarkerSeverity.Error).length === 0) onChange?.(value);
      }
    },
    [onChange, editorRef],
    1000,
  );

  useImperativeHandle(
    ref,
    () => ({
      addAction: editorRef?.addAction.bind(editorRef),
      addCommand: editorRef?.addCommand.bind(editorRef),
      executeCommand: editorRef?.executeCommand.bind(editorRef),
      setModel: editorRef?.setModel.bind(editorRef),
      focus() {
        editorRef?.focus();
      },
      getValue() {
        return editorRef?.getValue();
      },
      validate() {
        const model = editorRef?.getModel();
        if (model) {
          const markers = monacoRef.current?.editor.getModelMarkers({
            owner: model.getLanguageId(),
          });
          return markers?.filter((m) => m.severity === monacoEditor.MarkerSeverity.Error).length === 0;
        }
        try {
          let val = editorRef?.getValue();
          if (language === "json") val = JSON.parse(val ?? "{}") as never;
          return required ? !isEmpty(val) : true;
        } catch {
          return false;
        }
      },
    }),
    [editorRef, language, required],
  );

  const disposeRef = useRef<monacoEditor.IDisposable>(null);
  const schemaUri = useCallback(
    (monaco: typeof monacoEditor) => {
      if (language === "json" && schema) {
        const [main, ...rest] = schema as Array<{ uri: string; schema: KeyValue }>;
        // configure the JSON language support with schemas and schema associations
        monaco?.json?.jsonDefaults.setDiagnosticsOptions({
          validate: true,
          allowComments: false,
          schemas: [
            {
              fileMatch: ["*"], // associate with our model
              ...main,
            },
            ...rest,
          ],
        });
      }
      if (language === "html" && handlebarSuggestions) {
        disposeRef.current?.dispose?.();
        disposeRef.current = monaco.languages.registerCompletionItemProvider("html", {
          triggerCharacters: ["{{"],
          provideCompletionItems: function (model, position) {
            // find out if we are completing a property in the 'dependencies' object.
            const textUntilPosition = model.getValueInRange({
              startLineNumber: 1,
              startColumn: 1,
              endLineNumber: position.lineNumber,
              endColumn: position.column,
            });
            const match = textUntilPosition.match(/\{\{(.*)([^}])?$/);
            if (!match) {
              return { suggestions: [] };
            }
            const word = model.getWordUntilPosition(position);
            const range = {
              startLineNumber: position.lineNumber,
              endLineNumber: position.lineNumber,
              startColumn: word.startColumn,
              endColumn: word.endColumn,
            };
            return {
              suggestions: handlebarSuggestions.map((hs) => ({
                label: hs.text,
                kind: monaco.languages.CompletionItemKind.Text,
                documentation: hs.description,
                insertText: hs.text,
                range,
              })),
            };
          },
        });
      }
    },
    [language, schema, handlebarSuggestions],
  );

  useEffect(() => {
    monacoRef.current?.json?.jsonDefaults.setDiagnosticsOptions({
      validate: true,
      allowComments: false,
      schemas: [],
    });
  }, []);

  return (
    <Layout className="relative">
      <div ref={containerRef} data-ref="codeEditor" className={cn("fabric-codeEditor", "absolute inset-0")}>
        <MonacoEditor
          onMount={(e, m) => [!!e && setEditorRef(e), !!m && (monacoRef.current = m as typeof monacoEditor)]}
          beforeMount={schemaUri}
          value={codeValue}
          language={language}
          onChange={handleChange}
          theme={theme}
          className={"fabric-editor"}
          options={{
            readOnly,
            minimap: {
              enabled: !minimal,
            },
            scrollBeyondLastLine: false,
            folding: !minimal,
            lineNumbers: minimal ? "off" : undefined,
            wordWrap: "on",
            fontFamily: 'Menlo, Monaco, "Courier New", monospace',
          }}
        />
      </div>
    </Layout>
  );
}
