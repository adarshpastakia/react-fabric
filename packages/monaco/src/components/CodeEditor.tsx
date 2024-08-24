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

import {
  Section,
  useDebounce,
  useIsDark,
  useResizeObserver,
} from "@react-fabric/core";
import { type RefProp } from "@react-fabric/core/dist/types/types";
import { isEmpty, isString } from "@react-fabric/utilities";
import classNames from "classnames";
import type monacoEditor from "monaco-editor";
import {
  useCallback,
  useDeferredValue,
  useImperativeHandle,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";
import MonacoEditor from "react-monaco-editor";
import classes from "./CodeEditor.module.css";

export interface MonacoEditorRef {
  validate: () => boolean;
  getValue: () => string | undefined;
}

export interface EditorProps {
  value?: string | AnyObject;

  required?: boolean;
  readOnly?: boolean;

  minimal?: boolean;

  schema?: Array<{ uri: string; schema: KeyValue }>;

  language?: "json" | "css" | "html" | "text" | "markdown";

  onChange?: (value: string) => void;
}

export const CodeEditor = ({
  ref,
  value,
  schema,
  required,
  readOnly,
  minimal,
  onChange,
  language = "json",
}: EditorProps & RefProp<MonacoEditorRef>) => {
  const [editorRef, setEditorRef] = useState<AnyObject>();
  const [monacoRef, setMonacoRef] = useState<typeof monacoEditor>();
  const isDark = useIsDark();

  /** ***************** watch theme change *******************/
  const [theme, setTheme] = useState("");
  useLayoutEffect(() => {
    editorRef && setTheme(isDark ? "vs-dark" : "light");
  }, [isDark, editorRef]);

  /** ***************** watch editor container resize *******************/
  const resizeHandler = useCallback(
    (size: AnyObject) => editorRef?.layout(size),
    [editorRef],
  );
  const containerRef = useResizeObserver(resizeHandler);

  /** ***************** defer value and pass to editor as defaultValue *******************/
  const deferredValue = useDeferredValue(value);
  const codeValue = useMemo(
    () =>
      isString(deferredValue)
        ? deferredValue
        : JSON.stringify(deferredValue, null, 4),
    [deferredValue],
  );

  const handleChange = useDebounce(
    (value: string) => {
      const model = editorRef?.getModel();
      if (model) {
        const markers = monacoRef?.editor.getModelMarkers({
          owner: model.getLanguageId(),
        });
        markers?.filter((m) => m.severity > 7).length === 0 &&
          onChange?.(value);
      }
    },
    [onChange, editorRef],
    1000,
  );

  useImperativeHandle(
    ref,
    () => ({
      getValue() {
        return editorRef?.getValue();
      },
      validate() {
        const model = editorRef?.getModel();
        if (model) {
          const markers = monacoRef?.editor.getModelMarkers({
            owner: model.getLanguageId(),
          });
          return markers?.filter((m) => m.severity > 8).length === 0;
        }
        try {
          let val = editorRef?.getValue();
          if (language === "json") val = JSON.parse(val);
          return required ? !isEmpty(val) : true;
        } catch {
          return false;
        }
      },
    }),
    [required, language],
  );

  const schemaUri = useCallback(
    (monaco: typeof monacoEditor) => {
      if (schema) {
        const [main, ...rest] = schema;
        // configure the JSON language support with schemas and schema associations
        monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
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
    },
    [schema],
  );

  const resetSchema = useCallback((_: unknown, monaco: typeof monacoEditor) => {
    monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
      validate: true,
      allowComments: false,
      schemas: [],
    });
  }, []);

  return (
    <Section>
      <div
        ref={containerRef}
        className={classNames(classes.codeEditor, "area-content")}
      >
        <MonacoEditor
          editorDidMount={(e, m) => [
            !!e && setEditorRef(e),
            !!m && setMonacoRef(m),
          ]}
          editorWillMount={schemaUri}
          editorWillUnmount={resetSchema}
          value={codeValue}
          language={language}
          onChange={handleChange}
          theme={theme}
          className={classes.editor}
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
    </Section>
  );
};
