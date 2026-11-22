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

import { Button, Content, Footer, Navigator, Panel } from "@react-fabric/core";
import { Checkbox, Form, Input, Radio } from "@react-fabric/form";
import { useEffect, useMemo, useState } from "react";
import type { QuestionnaireItem } from "../types";

/**
 * Props for the {@link QuestionnaireWizard}.
 */
export interface QuestionnaireWizardProps {
  /**
   * The ordered list of questions to walk through, one per step.
   */
  questions: QuestionnaireItem[];
  /**
   * Invoked when the user finishes the last step, with the collected answers
   * keyed by question text: `{ [question]: answer }`.
   */
  onSubmit: (answers: Record<string, string>) => void;
  /**
   * Optional cancel handler, invoked when the user dismisses the wizard.
   */
  onCancel?: () => void;
}

/**
 * A compact, multi-step questionnaire form (one question per step) rendered
 * inside the latest AI answer, similar to a Copilot-style clarifying-questions
 * flow. Each step shows a single question with radio (single-select), checkbox
 * (multi-select), or freeform (custom) inputs.
 *
 * The wizard is a {@link Panel} whose titlebar carries a {@link Navigator}
 * (prev/next between steps, with a "Question N of M" label) and a footer
 * carrying a single "Next" button that becomes "Submit" on the last step.
 *
 * @example
 * ```jsx
 * <QuestionnaireWizard
 *   questions={[{ question: "Engine?", options: ["PostgreSQL", "MySQL"], custom: true }]}
 *   onSubmit={(answers) => console.log(answers)} // { "Engine?": "PostgreSQL" }
 * />
 * ```
 */
export function QuestionnaireWizard({ questions, onSubmit, onCancel }: QuestionnaireWizardProps) {
  const [step, setStep] = useState(0);
  // Every answer is stored as an array of selected values so single-select,
  // multi-select and freeform answers share one shape.
  const [answers, setAnswers] = useState<Record<string, string[]>>({});

  const question = useMemo(() => questions[step], [questions, step]);
  const isLast = step >= questions.length - 1;

  // Reset internal state if the question set changes (e.g. a new answer arrives).
  useEffect(() => {
    setStep(0);
    setAnswers({});
  }, [questions]);

  if (!question) {
    return null;
  }

  const current = answers[question.question] ?? [];
  const hasFreeform = question.custom && (current[current.length - 1] ?? "").length > 0;

  const setSingle = (value: string) => setAnswers((prev) => ({ ...prev, [question.question]: [value] }));
  const toggleMulti = (value: string) =>
    setAnswers((prev) => {
      const selected = prev[question.question] ?? [];
      const next = selected.includes(value) ? selected.filter((v) => v !== value) : [...selected, value];
      return { ...prev, [question.question]: next };
    });
  const setFreeform = (value?: string) =>
    setAnswers((prev) => {
      const selected = (prev[question.question] ?? []).slice(0, -1);
      return { ...prev, [question.question]: value ? [...selected, value] : selected };
    });

  const buildAnswers = () => Object.fromEntries(Object.entries(answers).map(([q, values]) => [q, values.filter(Boolean).join(", ")]));

  const handleNext = () => {
    if (isLast) {
      onSubmit(buildAnswers());
    } else {
      setStep((s) => Math.min(s + 1, questions.length - 1));
    }
  };

  return (
    <Panel
      data-testid="questionnaire-wizard"
      className="fabric-ai-questionnaire"
      title={question.question}
      icon="icon-[mdi--message-question-outline]"
      onClose={onCancel}
      actions={
        <Navigator
          className="self-center"
          length={questions.length}
          current={step}
          onNavigate={(dir) => setStep((s) => Math.min(Math.max(s + dir, 0), questions.length - 1))}
        >
          <span className="text-xs text-tint-500">{`Question ${step + 1} of ${questions.length}`}</span>
        </Navigator>
      }
    >
      <Form>
        <Content className="p-2">
          <div className="flex flex-col gap-3">
            {question.options?.length ? (
              <div className="bg-alternate flex flex-col gap-1" role={question.multiple ? "group" : "radiogroup"} aria-label={question.question}>
                {question.options.map((opt) =>
                  question.multiple ? (
                    <Checkbox
                      key={opt}
                      checked={current.includes(opt)}
                      onChange={() => toggleMulti(opt)}
                      label={<span className="text-sm text-dimmed whitespace-pre-line break-words leading-tight">{opt}</span>}
                    />
                  ) : (
                    <Radio
                      key={opt}
                      name={question.question}
                      value={opt}
                      onChange={() => setSingle(opt)}
                      label={<span className="text-sm text-dimmed whitespace-pre-line break-words leading-tight">{opt}</span>}
                    />
                  ),
                )}
              </div>
            ) : null}

            {question.custom && (
              <Input
                data-testid="questionnaire-freeform"
                placeholder="Type your own answer…"
                value={hasFreeform ? current[current.length - 1] : ""}
                onChange={setFreeform}
                onEnterPressed={handleNext}
              />
            )}
          </div>
        </Content>

        <Footer flex justify="end" className="px-2 py-1">
          <Button
            variant="solid"
            color="primary"
            size="sm"
            type="submit"
            icon={isLast ? "icon-[mdi--arrow-up]" : "icon-[mdi--chevron-right]"}
            aria-label={isLast ? "Submit answers" : "Next question"}
            onClick={handleNext}
          />
        </Footer>
      </Form>
    </Panel>
  );
}
