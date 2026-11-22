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

import { Button, Callout, Collapsable, Copy, Icon } from "@react-fabric/core";
import { Markdown } from "@react-fabric/markdown";
import type { AnswerBlock, AnswerModel, BlockRendererMap } from "../types";
import { QuestionnaireWizard } from "./QuestionnaireWizard";

export interface AnswerMessageProps {
  /**
   * The assistant answer to render.
   */
  message: AnswerModel;
  /**
   * Whether this is the latest (index 0) message. Gates which blocks — e.g. the
   * questionnaire wizard — are shown.
   */
  isLatest: boolean;
  /**
   * Custom renderers keyed by block `type`; a match overrides the built-in
   * fallback renderer for that block.
   */
  renderers?: BlockRendererMap;
  /**
   * Invoked when the latest answer's questionnaire wizard is submitted.
   */
  onSendMessage: (payload: { text: string; questionnaire?: Record<string, string> }) => void;
}

/**
 * Renders an assistant {@link AnswerModel} by mapping each of its response
 * {@link AnswerBlock}s to a React node. Each block is resolved in priority
 * order: first any matching entry in `renderers` (keyed by block `type`) —
 * which lets a consuming app render platform-specific UI or override a built-in
 * — otherwise a built-in fallback (`answer`, `thinking`, `tool`, `error`,
 * `questionnaire`).
 *
 * @example
 * ```jsx
 * <AnswerMessage
 *   message={{
 *     id: "a1",
 *     type: "answer",
 *     tokens: 96,
 *     duration: 600,
 *     response: [{ type: "answer", content: "The answer is 42." }],
 *   }}
 *   isLatest
 *   onSendMessage={send}
 *   renderers={{ open_dashboard: (b, ctx) => <Button>Open</Button> }}
 * />
 * // Renders the answer's markdown blocks and any custom-block renderers.
 * ```
 */
export function AnswerMessage({ message, isLatest, renderers, onSendMessage }: AnswerMessageProps) {
  /**
   * Resolve a single response block to a React node, honouring the custom
   * renderer first and falling back to the built-in renderer for its `type`.
   */
  const renderBlock = (block: AnswerBlock, isLast = false) => {
    // 1. Custom / override renderer keyed by block type
    const custom = renderers?.[block.type];
    if (custom) {
      return custom(block, { isLatest, message });
    }

    // 2. Built-in fallbacks
    switch (block.type) {
      case "thinking":
        return (
          <div className="fabric-ai-thinking rounded-capped text-sm text-muted bg-muted px-4 border-s-4">
            <Collapsable data-testid="ai-chat-thinking" iconAlign="end" open={isLast}>
              <div className="flex gap-2 items-center">
                <Icon icon="icon-[mdi--thought-bubble]" />
                <div>Thinking</div>
              </div>
              <Markdown className="whitespace-pre-wrap text-sm" text={block.content} />
            </Collapsable>
          </div>
        );
      case "reading":
        return (
          <div data-testid="ai-chat-tool" className="fabric-ai-tool rounded-capped text-sm text-muted bg-muted px-4">
            <Collapsable iconAlign="end" open={isLast}>
              <div className="flex gap-2 items-center">
                <Icon icon="icon-[mdi--book-open-outline]" />
                <div>Reading</div>
              </div>
              <div className="whitespace-pre-wrap pb-4">{block.content}</div>
            </Collapsable>
          </div>
        );
      case "answer":
        return <Markdown text={block.content} />;
      case "error":
        return (
          <Callout data-testid="ai-chat-error" color="danger" className="fabric-ai-error text-sm">
            <Icon icon="icon-[mdi--alert-decagram-outline]" className="me-2 pt-1" />
            <span>{block.content}</span>
          </Callout>
        );
      case "questionnaire":
        // Only render the wizard for the latest answer; once the user answers,
        // a QuestionModel is prepended (becoming index 0) and isLatest flips to
        // false, hiding the form.
        return isLatest && block.questionnaire ? (
          <QuestionnaireWizard questions={block.questionnaire} onSubmit={(answers) => onSendMessage({ text: "", questionnaire: answers })} />
        ) : null;
      default:
        // Unknown block type with no custom renderer — render its content as markdown.
        return <Markdown text={block.content} />;
    }
  };

  return (
    <div data-testid="ai-chat-answer" className="fabric-ai-answer my-8 max-w-10/12 group">
      {message.response.map((block, i) => (
        <div key={`${message.id}-${i}`} data-testid="ai-chat-block" data-block-type={block.type} className="mb-4">
          {renderBlock(block, i === message.response.length - 1)}
        </div>
      ))}
      <div className="invisible group-hover:visible flex justify-end items-center gap-1">
        <Copy size="sm" text={message.response.map((a) => (a.type === "answer" ? a.content : "")).join("\n")} />
        <Button size="sm" variant="link" icon="icon-[mdi--thumb-up-outline]" aria-label="positive" />
        <Button size="sm" variant="link" icon="icon-[mdi--thumb-down-outline]" aria-label="negative" />
      </div>
    </div>
  );
}
