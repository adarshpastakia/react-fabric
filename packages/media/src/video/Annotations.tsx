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
  Button,
  Content,
  CoreIcons,
  Dropdown,
  DropdownDismiss,
  Footer,
  Icon,
  Panel,
  PanelStack,
} from "@react-fabric/core";
import { Textarea } from "@react-fabric/form";
import { useCallback, useState } from "react";

export const AnnotationTool = ({ onChange, onOpen }: KeyValue) => {
  const [value, setValue] = useState<string>();
  return (
    <Dropdown showArrow>
      <Button
        variant="link"
        aria-label="annotate"
        icon={CoreIcons.mediaCommentAdd}
        onClick={onOpen}
      />
      <div>
        <div className="p-2 w-96 max-w-screen">
          <Textarea rows={5} autoFocus value={value} onChange={setValue} />
        </div>
        <Footer flex justify="end" className="p-1">
          <DropdownDismiss>
            <Button
              size="sm"
              variant="solid"
              onClick={() => [onChange?.(value), setValue("")]}
            >
              Update
            </Button>
          </DropdownDismiss>
        </Footer>
      </div>
    </Dropdown>
  );
};

export const AnnotationTag = ({
  time,
  duration,
  text,
  onChange,
  onDelete,
  onPlay,
}: KeyValue) => {
  const [value, setValue] = useState(text);
  const resetValue = useCallback((id: string) => {
    id === "edit" && setValue(text);
  }, []);
  return (
    <div
      key={time}
      className="absolute hover:text-primary -top-5"
      style={{
        insetInlineStart: `${(time / duration) * 100}%`,
      }}
    >
      <Dropdown showArrow>
        <Icon icon={CoreIcons.mediaComment} className="hover:text-primary" />
        <PanelStack onPanelChange={resetValue}>
          <Panel width={360} height={192} className="max-w-screen">
            <Content>{text}</Content>
            <Footer flex justify="between" className="p-1">
              <Button
                size="sm"
                variant="outline"
                icon={CoreIcons.edit}
                data-panel="edit"
              >
                Edit
              </Button>
              <DropdownDismiss>
                <Button size="sm" variant="solid" onClick={onPlay}>
                  Play
                </Button>
              </DropdownDismiss>
            </Footer>
          </Panel>
          <Panel panelId="edit" width={360} className="max-w-screen">
            <Content className="p-1">
              <Textarea autoFocus rows={5} value={value} onChange={setValue} />
            </Content>
            <Footer flex justify="between" className="p-1">
              <DropdownDismiss>
                <Button
                  size="sm"
                  variant="link"
                  icon={CoreIcons.trash}
                  color="danger"
                  onClick={onDelete}
                >
                  Delete
                </Button>
              </DropdownDismiss>
              <DropdownDismiss>
                <Button
                  size="sm"
                  variant="solid"
                  onClick={() => onChange?.(value)}
                >
                  Update
                </Button>
              </DropdownDismiss>
            </Footer>
          </Panel>
        </PanelStack>
      </Dropdown>
    </div>
  );
};
