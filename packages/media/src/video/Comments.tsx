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
  Dropdown,
  DropdownDismiss,
  Footer,
  Icon,
  Panel,
  PanelStack,
  Tooltip,
} from "@react-fabric/core";
import { Textarea } from "@react-fabric/form";
import { useCallback, useState } from "react";
import { TooltipButton } from "../components/TooltipButton";

export const CommentTool = ({ onChange, onOpen }: KeyValue) => {
  const [value, setValue] = useState<string>();
  return (
    <Dropdown showArrow>
      <TooltipButton
        tooltip="Add comment"
        aria-label="comment-add"
        icon="icon-[mdi--comment-plus-outline]"
        onClick={onOpen}
      />
      <div>
        <div className="p-2 w-96 max-w-screen">
          <Textarea
            rows={5}
            autoFocus
            value={value}
            onChange={(v) => setValue(v ?? "")}
          />
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

export const CommentTag = ({
  time,
  duration,
  text,
  currentTime,
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
      <Tooltip
        disabled
        color="info"
        content={`${time}: ${text}`}
        open={currentTime >= time && currentTime <= time + 2}
      >
        <Dropdown showArrow>
          <Icon
            icon="icon-[mdi--comment-text]"
            className="hover:text-primary bg-tint-50/80"
          />
          <PanelStack onPanelChange={resetValue}>
            <Panel width={360} height={192} className="max-w-screen">
              <Content>{text}</Content>
              <Footer flex justify="between" className="p-1">
                <Button
                  size="sm"
                  variant="outline"
                  icon="icon-[mdi--lead-pencil]"
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
                <Textarea
                  autoFocus
                  rows={5}
                  value={value}
                  onChange={setValue}
                />
              </Content>
              <Footer flex justify="between" className="p-1">
                <DropdownDismiss>
                  <Button
                    size="sm"
                    variant="link"
                    icon="icon-[mdi--trash-can-outline]"
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
      </Tooltip>
    </div>
  );
};
