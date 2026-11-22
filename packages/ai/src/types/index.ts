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

/**
 * A user prompt / turn in the chat history.
 *
 * @example
 * ```ts
 * const q: QuestionModel = {
 *   id: "q1",
 *   type: "question",
 *   text: "What database should I use?",
 *   questionnaire: { "Preferred engine": "PostgreSQL" },
 * };
 * ```
 */
export interface QuestionModel {
  /**
   * Stable unique identifier for the message.
   */
  id: string;
  /**
   * Discriminant; always `"question"`.
   */
  type: "question";
  /**
   * The user's prompt text.
   */
  text: string;
  /**
   * Optional structured answers collected from a preceding questionnaire, keyed by
   * the original question text: `{ [question]: answer }`.
   */
  questionnaire?: Record<string, string>;
}

/**
 * The set of response block types the `AiChat` component knows how to render out
 * of the box. Consuming apps can supply additional, platform-specific block types
 * (e.g. `"open_dashboard"`, `"chart"`) via the `string & {}` widening on
 * {@link AnswerBlock#type} and a matching entry in {@link AiChatProps#renderers}.
 */
export type BuiltInBlockType = "answer" | "thinking" | "error" | "questionnaire" | "reading";

/**
 * A single block inside an {@link AnswerModel#response} list.
 *
 * The `TType` parameter widens the built-in union with `string & {}` so custom
 * block types are allowed without losing autocomplete for the built-ins. The
 * `TData` parameter carries an optional structured payload for platform-specific
 * blocks (e.g. `{ dashboardId: "123" }`).
 *
 * @example
 * ```ts
 * const block: AnswerBlock<"answer"> = {
 *   type: "answer",
 *   content: "Here is the answer in **markdown**.",
 * };
 *
 * // A custom platform block with a structured payload:
 * const dashboard: AnswerBlock<"open_dashboard", { dashboardId: string }> = {
 *   type: "open_dashboard",
 *   content: "Open the sales dashboard",
 *   data: { dashboardId: "123" },
 * };
 * ```
 */
export interface AnswerBlock<TType extends string = BuiltInBlockType | (string & {}), TData = unknown> {
  /**
   * The block type. Built-in types are {@link BuiltInBlockType}; custom types
   * are permitted via `string & {}`.
   */
  type: TType;
  /**
   * The block's textual content (markdown for `"answer"`, raw text otherwise).
   */
  content: string;
  /**
   * Optional structured payload for custom platform blocks, e.g. `{ dashboardId: "123" }`.
   */
  data?: TData;
  /**
   * Optional list of questionnaire definitions used when `type` is `"questionnaire"`.
   */
  questionnaire?: Array<{
    /**
     * The question prompt to display.
     */
    question: string;
    /**
     * The selectable options for the question.
     */
    options: string[];
    /**
     * Whether multiple options may be selected.
     */
    multiple?: boolean;
    /**
     * Whether a freeform (custom) answer is allowed alongside the options.
     */
    custom?: boolean;
  }>;
}

/**
 * An assistant turn in the chat history. Its `response` is an ordered list of
 * {@link AnswerBlock}s rendered top-to-bottom.
 *
 * @example
 * ```ts
 * const a: AnswerModel = {
 *   id: "a1",
 *   type: "answer",
 *   tokens: 128,
 *   duration: 850,
 *   response: [
 *     { type: "thinking", content: "Let me reason about this…" },
 *     { type: "answer", content: "The answer is 42." },
 *   ],
 * };
 * ```
 */
export interface AnswerModel {
  /**
   * Stable unique identifier for the message.
   */
  id: string;
  /**
   * Discriminant; always `"answer"`.
   */
  type: "answer";
  /**
   * Token count produced for this response.
   */
  tokens: number;
  /**
   * Wall-clock duration (ms) the response took to generate.
   */
  duration: number;
  /**
   * The ordered list of response blocks to render.
   */
  response: AnswerBlock[];
}

/**
 * A single chat message: either a user {@link QuestionModel} or an assistant
 * {@link AnswerModel}.
 */
export type ChatMessage = QuestionModel | AnswerModel;

/**
 * Context handed to a {@link BlockRenderer} for the block it is rendering.
 *
 * @example
 * ```ts
 * const renderer: BlockRenderer = (block, { isLatest, message }) => {
 *   return <div>{isLatest ? "latest" : "older"}: {block.content}</div>;
 * };
 * ```
 */
export interface RenderContext {
  /**
   * `true` only when the owning message is index `0` (the newest message at the
   * bottom of the chat).
   */
  isLatest: boolean;
  /**
   * The {@link AnswerModel} the block belongs to.
   */
  message: AnswerModel;
}

/**
 * A function that renders a single {@link AnswerBlock}. Consuming apps supply a
 * map of these (see {@link AiChatProps#renderers}) to render custom block types
 * or override the built-in fallbacks.
 *
 * @param block The block to render.
 * @param context The {@link RenderContext} for the block's owning message.
 * @returns A React node to render in place of the block.
 */
export type BlockRenderer<TBlock extends AnswerBlock = AnswerBlock> = (block: TBlock, context: RenderContext) => React.ReactNode;

/**
 * A map of {@link BlockRenderer}s keyed by {@link AnswerBlock#type}. The first
 * matching renderer (by `block.type`) wins, letting consuming apps render
 * platform-specific UI or override a built-in block type.
 *
 * The value type uses `any` deliberately: it lets a consuming app's renderer
 * accept its own concrete block type (and read `block.data` without a cast)
 * while remaining assignable from any renderer signature.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any -- see JSDoc above
export type BlockRendererMap = Record<string, BlockRenderer<any>>;

/**
 * A single questionnaire question definition.
 */
export interface QuestionnaireItem {
  /**
   * The question prompt to display.
   */
  question: string;
  /**
   * The selectable options for the question.
   */
  options: string[];
  /**
   * Whether multiple options may be selected.
   */
  multiple?: boolean;
  /**
   * Whether a freeform (custom) answer is allowed alongside the options.
   */
  custom?: boolean;
}

/**
 * Props for the {@link AiChat} component.
 *
 * @example
 * ```jsx
 * <AiChat
 *   messages={messages}              // newest-first; index 0 = bottom of chat
 *   hasMore={hasMore}
 *   isLoadingMore={isLoading}
 *   onLoadMore={loadOlder}
 *   onSendMessage={send}
 *   renderers={{
 *     open_dashboard: (block, ctx) => (
 *       <Button as="a" href={`/dashboards/${block.data?.dashboardId}`}>
 *         Open dashboard
 *       </Button>
 *     ),
 *   }}
 * />
 * ```
 */
export interface AiChatProps {
  /**
   * The chat history, ordered **newest-first** (index `0` is the latest message,
   * anchored to the bottom of the chat).
   */
  messages: ChatMessage[];
  /**
   * Whether more (older) history is available to load above the current window.
   */
  hasMore: boolean;
  /**
   * Whether a request is currently in flight. When `true`, the input's stop
   * button is shown in place of the send button.
   */
  isBusy?: boolean;
  /**
   * Application-provided toolbar actions rendered at the leading edge of the input
   * (e.g. an "attach file" or "run tool" action). The consuming app builds the
   * buttons and wires their own `onClick`; the value is forwarded verbatim to the
   * input's {@link Chatbox}.
   */
  tools?: React.ReactNode;
  /**
   * Application-provided context chips (e.g. attached files, linked entities)
   * rendered above the input. The consuming app builds the chips and may wire
   * their own `onRemove`; the value is forwarded verbatim to the input's
   * {@link Chatbox}.
   */
  attachments?: React.ReactNode;
  /**
   * Whether a `onLoadMore` fetch is currently in flight.
   */
  isLoadingMore?: boolean;
  /**
   * Invoked by the infinite-scroll sentinel when the user scrolls to the top of
   * the history and `hasMore` is `true`.
   */
  onLoadMore: () => void;
  /**
   * Invoked when the user submits a new message or completes a questionnaire.
   */
  onSendMessage: (payload: { text: string; questionnaire?: Record<string, string> }) => void;
  /**
   * Custom renderers mapped by {@link AnswerBlock#type}. Allows projects to render
   * platform-specific UI (e.g. an "Open Dashboard" action button) or override a
   * default block renderer.
   */
  renderers?: BlockRendererMap;
}
