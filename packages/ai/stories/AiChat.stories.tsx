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
import type { AiChatProps, ChatMessage } from "@/ai/src/types";
import { Button } from "@/core/src";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof AiChat> = {
  component: AiChat,
  title: "@ai/AiChat",
  parameters: {
    layout: "fullscreen",
    jest: ["ai/tests/AiChat.test.tsx"],
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

type AiChatStory = StoryObj<typeof AiChat>;

// A newest-first history (index 0 = latest, anchored to the bottom of the chat).
const sampleMessages: ChatMessage[] = [
  {
    id: "a-latest",
    type: "answer",
    tokens: 128,
    duration: 850,
    response: [
      {
        type: "thinking",
        content: "The user is asking which database to use. I should clarify the requirements first.",
      },
      {
        type: "questionnaire",
        content: "Need clarifications for the work to be done.",
        questionnaire: [
          { question: "What is the primary workload?", options: ["OLTP", "OLAP", "Mixed"], multiple: false },
          {
            question: "Which features do you need?",
            options: [
              "Do you want to use a mix of Full-text and JSON, trying to make this a long option label.\ntesting a new line",
              "JSON support",
              "Time-series",
            ],
            multiple: true,
          },
        ],
      },
    ],
  },
  {
    id: "q-1",
    type: "question",
    text: "Which database should I use for my analytics app?",
    questionnaire: { "Primary workload": "OLAP", Features: "Full-text search, JSON support" },
  },
  {
    id: "a-1",
    type: "answer",
    tokens: 96,
    duration: 600,
    response: [
      { type: "reading", content: "queried product-catalog schema (12 tables)" },
      { type: "answer", content: "For an **analytics** app, a columnar database like **ClickHouse** or **DuckDB** is a strong fit." },
      { type: "open_dashboard", content: "Open the sales dashboard", data: { dashboardId: "123" } },
      { type: "error", content: "Note: the pricing endpoint timed out." },
    ],
  },
  {
    id: "q-0",
    type: "question",
    text: "Hello! Can you help me choose a database?",
  },
];

// Custom renderer demonstrating a platform-specific block type.
const sampleRenderers = {
  open_dashboard: (block: { content: string; data?: { dashboardId?: string } }) => (
    <Button variant="outlined" icon="icon-[mdi--chart-line]" color="primary">
      {block.content}
    </Button>
  ),
};

const baseArgs: Partial<AiChatProps> = {
  messages: sampleMessages,
  hasMore: false,
  isLoadingMore: false,
  onLoadMore: () => console.log("load more"),
  onSendMessage: (payload) => console.log("send", payload),
  renderers: sampleRenderers,
};

// The `Tester` story is the bridge to the jest behavior tests: it renders the
// component with exactly the props passed as `args` and nothing else.
export const Tester: AiChatStory = {
  tags: ["!autodocs"],
  render: (args) => <AiChat {...args} />,
  args: baseArgs,
};

export const Default: AiChatStory = {
  render: (args) => <AiChat {...args} />,
  args: baseArgs,
};

export const WithInfiniteScroll: AiChatStory = {
  render: (args) => <AiChat {...args} />,
  args: { ...baseArgs, hasMore: true, isLoadingMore: false },
};
