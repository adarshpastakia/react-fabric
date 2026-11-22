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

import { AiChat } from "@/ai/src";
import type { AnswerBlock, ChatMessage, QuestionModel } from "@/ai/src/types";
import { Button, Chip } from "@/core/src";
import type { Meta, StoryObj } from "@storybook/react";
import ollama from "ollama";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const meta: Meta = {
  component: AiChat,
  title: "@ai/ChatTest",
  parameters: {
    layout: "fullscreen",
    jest: ["ai/tests/Chat.test.tsx"],
  },
  decorators: [
    (Story) => (
      <div className="absolute inset-0 sectioned overflow-hidden">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type ChatTestStory = StoryObj;

async function postChat(text: string) {
  return await ollama.chat({
    model: "qwen3.8:27b-mlx",
    messages: [
      {
        role: "system",
        content: `
        You are an interactive assistant. 
        
        If a user's request is underspecified, ambiguous, or complex, DO NOT answer yet—call the "ask_clarifying_questions" tool to gather requirements first. 
        Once the user answers or if the request is already clear, reply directly in Markdown.
        `,
      },
      {
        role: "user",
        content: text,
      },
    ],
    tools: [
      {
        type: "function",
        function: {
          name: "ask_clarifying_questions",
          description: "Ask the user 1 to 9 clarifying questions before starting a complex or ambiguous task.",
          parameters: {
            type: "object",
            properties: {
              text: {
                type: "string",
                description: "One-sentence acknowledgment of the user's goal",
              },
              questions: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    prompt: { type: "string" },
                    options: {
                      type: "array",
                      items: { type: "string" },
                    },
                    multiple: { type: "boolean" },
                    custom: { type: "boolean" },
                    default: { type: "string" },
                  },
                  required: ["prompt", "options", "multiple", "custom", "default"],
                },
              },
            },
            required: ["text", "questions"],
          },
        },
      },
    ],
    stream: true,
  });
}

/**
 * The shape of the `ask_clarifying_questions` tool call emitted by ollama.
 */
interface ClarifyingArgs {
  text?: string;
  questions?: Array<{
    prompt: string;
    options?: string[];
    multiple?: boolean;
    custom?: boolean;
    default?: string;
  }>;
}

/**
 * A single application-provided context attachment rendered as a removable chip.
 */
interface AttachmentItem {
  id: string;
  label: string;
  icon?: string;
}

/**
 * Parse the (possibly partial) JSON `arguments` of a streamed tool call. Until the
 * full object has arrived, `JSON.parse` throws and we return `null`, so the wizard
 * is only rendered once the model has emitted the complete question set.
 */
function parseClarifyingArgs(value: unknown): ClarifyingArgs | null {
  try {
    return typeof value === "string" ? (JSON.parse(value) as ClarifyingArgs) : ((value ?? null) as ClarifyingArgs);
  } catch {
    return null;
  }
}

/**
 * Stateful wrapper that drives the {@link AiChat} against the local ollama backend.
 *
 * It owns the **newest-first** message history and, for each turn, streams the
 * assistant's reply from {@link postChat}, folding the model's `thinking`, answer
 * text, and `ask_clarifying_questions` tool call into the in-flight
 * {@link AnswerModel}'s response blocks. When the user answers a clarifying
 * questionnaire, a fresh turn is started that carries the original request plus the
 * collected answers so the model can proceed.
 */
function ChatConversation() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  // Mirror of `messages` so the send handler can read the latest history without
  // re-creating itself on every keystroke.
  const messagesRef = useRef<ChatMessage[]>([]);
  useEffect(() => {
    messagesRef.current = messages;
  }, [messages]);

  // One turn at a time; a monotonic counter keeps message ids unique.
  const busyRef = useRef(false);
  const [busy, setBusy] = useState(false);
  const seqRef = useRef(0);
  const nextId = (prefix: string) => `${prefix}-${seqRef.current++}`;

  /**
   * Overwrite the response blocks of the in-flight answer (located by `id`) with a
   * freshly rebuilt block list. No-op when the answer has already been removed.
   */
  const commitLive = (id: string, response: AnswerBlock[]) =>
    setMessages((prev) => {
      const index = prev.findIndex((m) => m.id === id);
      if (index < 0) return prev;
      const live = prev[index];
      if (live.type !== "answer") return prev;
      const next = [...prev];
      next[index] = { ...live, response };
      return next;
    });

  const handleSend = useCallback(async (payload: { text: string; questionnaire?: Record<string, string> }) => {
    if (busyRef.current) return; // serialise: one turn at a time
    busyRef.current = true;
    setBusy(true);

    // A wizard submission arrives as { text: "", questionnaire }; a plain prompt
    // arrives as { text }. Build the prompt sent to the model and the user bubble.
    const isWizard = !payload.text && !!payload.questionnaire;
    let prompt: string;
    let bubble: string;
    if (isWizard) {
      const answers = Object.entries(payload.questionnaire ?? {})
        .map(([question, answer]) => `- ${question}: ${answer}`)
        .join("\n");
      // Carry the original request forward so the model keeps full context.
      const original = [...messagesRef.current].reverse().find((m) => m.type === "question") as QuestionModel | undefined;
      prompt = `${original?.text ?? ""}\n\nAnswers to the clarifying questions:\n${answers}\n\nProceed with the task.`.trim();
      bubble = "Clarifying answers";
    } else {
      prompt = payload.text;
      bubble = payload.text;
    }

    // 1. Prepend the user's bubble, then the live answer the stream fills in.
    const answerId = nextId("a");
    const question: QuestionModel = {
      id: nextId("q"),
      type: "question",
      text: bubble,
      questionnaire: payload.questionnaire,
    };
    setMessages((prev) => [{ id: answerId, type: "answer", tokens: 0, duration: 0, response: [] }, question, ...prev]);

    const started = performance.now();
    let thinking = "";
    let answer = "";
    let questionnaireBlock: AnswerBlock | null = null;
    let tokens = 0;

    try {
      // 2. Stream the reply, accumulating thinking / answer / questionnaire blocks.
      const stream = await postChat(prompt);
      for await (const chunk of stream) {
        const message = chunk.message;
        if (message?.thinking) thinking += message.thinking;
        if (message?.content) answer += message.content;
        if (typeof chunk.eval_count === "number") tokens = chunk.eval_count;

        // A clarifying-questions tool call renders as a questionnaire block.
        const tool = message?.tool_calls?.at(-1);
        if (tool?.function?.name === "ask_clarifying_questions") {
          const parsed = parseClarifyingArgs(tool.function.arguments);
          if (parsed?.questions?.length) {
            questionnaireBlock = {
              type: "questionnaire",
              content: parsed.text ?? "",
              questionnaire: parsed.questions.map((q) => ({
                question: q.prompt,
                options: q.options ?? [],
                multiple: q.multiple,
                custom: q.custom,
              })),
            };
          }
        }

        // Rebuild the live answer's blocks from the accumulators each chunk.
        const response: AnswerBlock[] = [];
        if (thinking) response.push({ type: "thinking", content: thinking });
        if (answer) response.push({ type: "answer", content: answer });
        if (questionnaireBlock) response.push(questionnaireBlock);
        commitLive(answerId, response);
      }

      // 3. Stamp the finished answer with its wall-clock duration and token count.
      setMessages((prev) => {
        const index = prev.findIndex((m) => m.id === answerId);
        if (index < 0) return prev;
        const live = prev[index];
        if (live.type !== "answer") return prev;
        const next = [...prev];
        next[index] = { ...live, duration: Math.round(performance.now() - started), tokens };
        return next;
      });
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      commitLive(answerId, [{ type: "error", content: `The request failed: ${message}` }]);
    } finally {
      busyRef.current = false;
      setBusy(false);
    }
  }, []);

  // --- Application-provided context chips (attachments) and toolbar actions (tools) ---
  // The consuming app owns this list and renders each chip with its own `onRemove`.
  const [attachments, setAttachments] = useState<AttachmentItem[]>([]);

  const addAttachment = (item: AttachmentItem) => setAttachments((prev) => (prev.some((a) => a.id === item.id) ? prev : [...prev, item]));

  const removeAttachment = (id: string) => setAttachments((prev) => prev.filter((a) => a.id !== id));

  // Each attachment becomes a removable context chip.
  const attachmentsNode = useMemo(
    () =>
      attachments.length === 0 ? null : (
        <div className="flex flex-wrap gap-2" data-testid="chat-attachments">
          {attachments.map((a) => (
            <Chip key={a.id} size="sm" variant="soft" icon={a.icon} onRemove={() => removeAttachment(a.id)}>
              {a.label}
            </Chip>
          ))}
        </div>
      ),
    // `removeAttachment` is stable; the `attachmentsRef` mirror carries the latest
    // list, so the node only rebuilds when the app changes the attachment set.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [attachments],
  );

  // Each tool is an application action button at the leading edge of the input.
  // The "attach" tool demonstrates a tool that mutates the attachment set.
  const toolsNode = useMemo(
    () => (
      <div className="flex items-center gap-1" data-testid="chat-tools">
        <Button
          size="sm"
          variant="link"
          icon="icon-[mdi--paperclip]"
          aria-label="Attach sample file"
          onClick={() => addAttachment({ id: "invoice", label: "sample_invoice1.png", icon: "icon-[mdi--file-image-outline]" })}
        />
        <Button
          size="sm"
          variant="link"
          icon="icon-[mdi--code-tags]"
          aria-label="Insert code context"
          onClick={() => addAttachment({ id: "app", label: "src/app.tsx", icon: "icon-[mdi--code-tags]" })}
        />
      </div>
    ),
    // `addAttachment` is stable; the tools themselves carry no live dependencies.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return (
    <AiChat
      messages={messages}
      hasMore={false}
      isLoadingMore={false}
      onLoadMore={() => {}}
      onSendMessage={handleSend}
      isBusy={busy}
      tools={toolsNode}
      attachments={attachmentsNode}
    />
  );
}

export const _ChatTest: ChatTestStory = {
  render: () => <ChatConversation />,
  args: {},
};
