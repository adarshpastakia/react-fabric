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
import classNames from "classnames";

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

/**
 * MdxEditor component to edit and preview MDX content.
 * It uses the MDXEditor from @mdxeditor/editor to provide a rich text editing experience.
 * The component allows users to write MDX content, format it, and preview the rendered output.
 * It supports various plugins for headings, lists, quotes, tables, thematic breaks, links, code blocks, and directives.
 * The editor also includes a toolbar with options for formatting and inserting elements.
 * When the preview mode is active, it displays the rendered MDX content using the Mdx component.
 * The component is responsive and adapts to dark mode based on the user's preference.
 *
 * @param {MdxEditorProps} props - The properties for the MdxEditor component.
 * @returns {JSX.Element} The rendered MdxEditor component.
 *
 * @example
 * ```jsx
 * <MdxEditor
 *   value="## Hello World"
 *   onChange={(value) => console.log(value)}
 * />
 * ```
 *
 * @see {@link https://adarshpastakia.github.io/react-fabric/?path=/story/mdx-playground--playground}
 * @see {@link https://mdxeditor.dev/editor/docs/getting-started}
 */
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
      <Header flex justify="end" className="py-1 px-2 bg-base">
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
      className={classNames(
        "fabric-mdxEditor",
        "grid overflow-hidden area-content max-h-full h-full bg-base",
        isDark ? "dark-theme" : "light-theme",
      )}
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
