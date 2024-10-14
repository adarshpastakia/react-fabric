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
  AdmonitionDirectiveDescriptor,
  BlockTypeSelect,
  BoldItalicUnderlineToggles,
  ChangeAdmonitionType,
  ChangeCodeMirrorLanguage,
  CodeMirrorEditor,
  CodeToggle,
  ConditionalContents,
  CreateLink,
  InsertAdmonition,
  InsertCodeBlock,
  InsertTable,
  InsertThematicBreak,
  ListsToggle,
  MDXEditor,
  Separator,
  UndoRedo,
  codeBlockPlugin,
  codeMirrorPlugin,
  directivesPlugin,
  headingsPlugin,
  linkDialogPlugin,
  linkPlugin,
  listsPlugin,
  quotePlugin,
  tablePlugin,
  thematicBreakPlugin,
  toolbarPlugin,
} from "@mdxeditor/editor";
import "@mdxeditor/editor/style.css";
import {
  Button,
  Content,
  Header,
  Section,
  useIsDark,
} from "@react-fabric/core";
import {
  useCallback,
  useDeferredValue,
  useEffect,
  useState,
  type FC,
} from "react";
import { Mdx } from "./Mdx";

export interface MdxEditorProps {
  /**
   * code string
   */
  value?: string;
  /**
   * onChange callback
   */
  onChange?: (value: string) => void;
}

export const MdxEditor: FC<MdxEditorProps> = ({ value: _value, onChange }) => {
  const isDark = useIsDark();
  const [showPreview, setShowPreview] = useState(false);
  const [actualValue, setActualValue] = useState(_value);
  const value = useDeferredValue(_value);
  useEffect(() => {
    setActualValue(value ?? "");
  }, [value]);

  const handleChange = useCallback(
    (val: string) => {
      setActualValue(val.replaceAll("\\:", ":"));
      onChange?.(val.replaceAll("\\:", ":"));
    },
    [onChange],
  );

  return showPreview ? (
    <Section>
      <Header className="py-1 px-2">
        <div className="flex-1" />
        <Button
          aria-label="close"
          icon="mdi mdi-close"
          className="self-center"
          onClick={() => setShowPreview(false)}
          variant="link"
          size="sm"
        />
      </Header>
      <Content>
        <Mdx text={actualValue ?? ""} />
      </Content>
    </Section>
  ) : (
    <MDXEditor
      className={`mdx-editor ${isDark ? "dark-theme" : "light-theme"}`}
      markdown={actualValue ?? ""}
      onChange={handleChange}
      contentEditableClassName="markdown-body"
      plugins={[
        headingsPlugin(),
        listsPlugin(),
        quotePlugin(),
        tablePlugin(),
        thematicBreakPlugin(),
        linkPlugin(),
        codeBlockPlugin(),
        linkDialogPlugin(),
        codeMirrorPlugin({
          codeBlockLanguages: {
            js: "JavaScript",
            ts: "TypeScript",
            tsx: "TypeScript (React)",
            jsx: "JavaScript (React)",
            css: "CSS",
            html: "HTML",
            bash: "Bash",
            json: "JSON",
            yaml: "YAML",
          },
        }),
        codeBlockPlugin({
          defaultCodeBlockLanguage: "js",
          codeBlockEditorDescriptors: [
            {
              match: () => true,
              priority: 0,
              Editor: CodeMirrorEditor,
            },
          ],
        }),
        directivesPlugin({
          directiveDescriptors: [AdmonitionDirectiveDescriptor],
        }),
        toolbarPlugin({
          toolbarContents: () => (
            <>
              <ConditionalContents
                options={[
                  {
                    when: (editor) => editor?.editorType === "codeblock",
                    contents: () => <ChangeCodeMirrorLanguage />,
                  },
                  {
                    fallback: () => (
                      <>
                        <UndoRedo />
                        <Separator />
                        <BoldItalicUnderlineToggles />
                        <CodeToggle />
                        <Separator />
                        <ListsToggle />
                        <Separator />
                        <BlockTypeSelect />
                        <Separator />
                        <CreateLink />
                        <InsertTable />
                        <InsertThematicBreak />
                        <Separator />
                        <InsertCodeBlock />
                        <ConditionalContents
                          options={[
                            {
                              when: (editor) =>
                                editor?.rootNode?.getType() === "directive" &&
                                [
                                  "note",
                                  "tip",
                                  "info",
                                  "danger",
                                  "caution",
                                ].includes(
                                  // @ts-expect-error ignore
                                  editor.rootNode?.getMdastNode?.().name,
                                ),
                              contents: () => <ChangeAdmonitionType />,
                            },
                            {
                              fallback: () => <InsertAdmonition />,
                            },
                          ]}
                        />
                      </>
                    ),
                  },
                ]}
              />
              <Button
                aria-label="preview"
                icon="mdi mdi-eye"
                className="m-0 self-center"
                onClick={() => setShowPreview(true)}
                variant="link"
                size="sm"
              />
            </>
          ),
        }),
      ]}
    />
  );
};
