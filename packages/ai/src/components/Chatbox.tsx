/**
 * React Fabric
 * @version 1.0.0
 * @license MIT
 * @copyright 2024 Adarsh Pastakia
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import { Button, useControlledValue } from "@react-fabric/core";
import { Dictation } from "@react-fabric/media";
import { useEffect, useRef } from "react";

interface Props {
  text?: string;
  isBusy?: boolean;
  tools?: React.ReactNode;
  attachments?: React.ReactNode;
  onCancel?: () => void;
  onSubmit?: (text: string) => void;
}

export function Chatbox({ text, isBusy, attachments, tools, onSubmit, onCancel }: Props) {
  const { currentValue, updateValue } = useControlledValue(text, "");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) textareaRef.current.scrollTop = textareaRef.current.scrollHeight;
  }, [currentValue]);

  const handleSubmit = () => {
    if (currentValue) {
      onSubmit?.(currentValue);
      updateValue("");
    }
  };

  return (
    <div className="fabric-chatbox rounded-capped transition-colors duration-500" data-busy={isBusy}>
      <div className="flex flex-col rounded-capped relative overflow-hidden fabric-inputWrapper after:absolute after:bottom-0 after:h-px after:bg-primary-500 after:mx-auto">
        <div className="px-2 py-1 z-2 flex items-center gap-2">{attachments}</div>
        <textarea
          rows={2}
          ref={textareaRef}
          value={currentValue}
          onChange={(e) => updateValue(e.target.value)}
          onKeyDown={(e) => !e.shiftKey && e.key === "Enter" && (handleSubmit(), e.preventDefault())}
          className="appearance-none self-stretch bg-transparent py-1 px-4 flex-1 border-none outline-none ring-0 min-h-12 resize-none"
        />
        <div className="flex items-center gap-2 px-2 py-1">
          {tools}
          <div className="flex-1" />
          {!isBusy && (
            <div role="none" className="flex items-center gap-1" onMouseUpCapture={() => textareaRef.current?.focus()}>
              <Dictation size="sm" lang="tl-PH" onTranscribe={(s) => s && updateValue(s)} />
              <Button
                rounded
                size="sm"
                disabled={!currentValue}
                variant={currentValue ? "solid" : "default"}
                color={currentValue ? "primary" : "default"}
                icon="icon-[mdi--arrow-up]"
                aria-label="submit prompt"
                onClick={() => currentValue && handleSubmit()}
              />
            </div>
          )}
          {isBusy && <Button size="sm" rounded icon="icon-[mdi--stop]" aria-label="stop" onClick={() => onCancel?.()} />}
        </div>
      </div>
    </div>
  );
}
