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

import { Button, Collapsable, Copy, Text } from "@react-fabric/core";
import type { QuestionModel } from "../types";

export interface QuestionMessageProps {
  /**
   * The user question to render.
   */
  message: QuestionModel;
}

/**
 * Renders a user {@link QuestionModel} as a dashed-border {@link Callout}
 * (right-aligned like a chat bubble). When the question carries answered
 * `questionnaire` entries, they are listed inside a {@link Collapsable} whose
 * title is the question's own `text`.
 *
 * @example
 * ```jsx
 * <QuestionMessage
 *   message={{
 *     id: "q1",
 *     type: "question",
 *     text: "Which database should I use?",
 *     questionnaire: { "Primary workload": "OLAP" },
 *   }}
 * />
 * // Renders a dashed callout showing the question, with a collapsible of
 * // "Primary workload: OLAP".
 * ```
 */
export function QuestionMessage({ message: q }: QuestionMessageProps) {
  const answers = q.questionnaire ? Object.entries(q.questionnaire) : [];
  const hasAnswers = answers.length > 0;

  return (
    <div data-testid="ai-chat-question" className="fabric-ai-question group flex gap-4 justify-end">
      <div className="group-hover:block hidden pt-2">
        <Copy size="sm" text={q.text} />
        <Button size="sm" variant="link" aria-label="edit" icon="icon-[mdi--pencil]" />
      </div>
      <div className="w-8/12 px-4 outline outline-dashed bg-dimmed rounded-capped">
        {!hasAnswers && (
          <Text clamp={2} className="whitespace-pre-wrap py-2">
            {q.text}
          </Text>
        )}
        {hasAnswers && (
          <Collapsable iconAlign="end">
            <Text clamp={2} className="whitespace-pre-wrap font-medium">
              {q.text}
            </Text>
            <div className="flex flex-col gap-1 text-sm p-2 my-2 divide-y bg-muted rounded-capped">
              {answers.map(([question, answer]) => (
                <div key={question} className="mb-2">
                  <div className="font-bold">{question}</div>
                  <div>{answer}</div>
                </div>
              ))}
            </div>
          </Collapsable>
        )}
      </div>
    </div>
  );
}
