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

import { Button, Skeleton } from "@react-fabric/core";
import { cn } from "@react-fabric/utilities";
import { Fragment, useEffect, useEffectEvent, useLayoutEffect, useRef, useState } from "react";
import type { AiChatProps, ChatMessage } from "../types";
import { AnswerMessage } from "./AnswerMessage";
import { Chatbox } from "./Chatbox";
import { QuestionMessage } from "./QuestionMessage";

/**
 * Distance (px) from the newest message (bottom) before the "scroll to bottom"
 * affordance is shown.
 */
const AWAY_THRESHOLD = 64;

/**
 * Distance (px) above the top of the scroll view at which the infinite-scroll
 * sentinel is considered "visible" by the `IntersectionObserver` `rootMargin`.
 */
const LOAD_MORE_MARGIN = "100px";

/**
 * A reusable AI chat surface for consuming applications.
 *
 * The chat history is a flat, **newest-first** list (index `0` is the latest
 * message and is anchored to the bottom of the viewport). The scroller uses a
 * `flex-col-reverse` layout so that the newest message always sits at the bottom
 * without reversing the array in memory. Older history is fetched lazily via an
 * `IntersectionObserver` sentinel at the top, and a floating "scroll to bottom"
 * button re-anchors the view to the newest message.
 *
 * Each assistant {@link AnswerModel} is a list of {@link AnswerBlock}s. Blocks are
 * resolved in priority order: first any matching entry in `renderers` (keyed by
 * block `type`) — which lets a consuming app render platform-specific UI or
 * override a built-in — otherwise a built-in fallback (`answer`, `thinking`,
 * `tool`, `error`, `questionnaire`).
 *
 * @example
 * ```jsx
 * import { AiChat } from "@react-fabric/ai";
 *
 * <AiChat
 *   messages={messages} // newest-first; index 0 = bottom
 *   hasMore={hasMore}
 *   isLoadingMore={loading}
 *   onLoadMore={loadOlder}
 *   onSendMessage={send}
 *   renderers={{
 *     open_dashboard: (block, ctx) => (
 *       <Button as="a" href={`/dashboards/${block.data?.dashboardId}`}>Open dashboard</Button>
 *     ),
 *   }}
 * />
 * // Renders a sectioned chat: a reverse-scroll message pane (area-content) above
 * // a Chatbox input (area-footer), with infinite scroll and a scroll-to-bottom button.
 * ```
 */
export function AiChat({ messages, hasMore, isLoadingMore, isBusy, onLoadMore, onSendMessage, renderers, tools, attachments }: AiChatProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [awayFromBottom, setAwayFromBottom] = useState(false);

  // Always read the latest props inside the observer callback without re-creating
  // the observer on every render.
  const handleIntersect = useEffectEvent(() => {
    if (hasMore && !isLoadingMore) {
      onLoadMore();
    }
  });

  // Reverse infinite-scroll: observe the sentinel (last DOM child → visually at
  // the top). Skip the observer entirely when there is nothing more to load.
  useEffect(() => {
    const sentinel = sentinelRef.current;
    const root = scrollerRef.current;
    if (!sentinel || !root) {
      return;
    }
    if (typeof IntersectionObserver === "undefined") {
      return; // jsdom / SSR: no intersection support
    }
    if (!hasMore) {
      return; // nothing more to load → no fetch can be triggered
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          handleIntersect();
        }
      },
      { root, rootMargin: LOAD_MORE_MARGIN },
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
    // `handleIntersect` (from useEffectEvent) is intentionally stable and is not a
    // dependency; omit it to satisfy @eslint-react/use-effect-event.
  }, [hasMore]);

  // With `flex-col-reverse`, `scrollTop === 0` is the newest message (bottom).
  // Scrolling up increases `scrollTop`, so a positive offset means "away".
  const handleScroll = (e: React.UIEvent<HTMLElement>) => {
    setAwayFromBottom(e.currentTarget.scrollTop < e.currentTarget.scrollHeight - e.currentTarget.offsetHeight - AWAY_THRESHOLD);
  };

  const scrollToBottom = () => {
    scrollerRef.current?.scrollTo({ top: scrollerRef.current.scrollHeight, behavior: "smooth" });
    setAwayFromBottom(false);
  };

  /**
   * Render a single chat message by delegating to {@link QuestionMessage} for
   * user questions and {@link AnswerMessage} for assistant answers.
   */
  const renderMessage = (message: ChatMessage, isLatest: boolean) => {
    if (message.type === "question") {
      return <QuestionMessage message={message} />;
    }
    return <AnswerMessage message={message} isLatest={isLatest} renderers={renderers} onSendMessage={onSendMessage} />;
  };

  useLayoutEffect(() => {
    scrollerRef.current?.scrollTo({ top: scrollerRef.current.scrollHeight, behavior: "smooth" });
  }, []);

  return (
    <div className={cn("fabric-ai-chat sectioned relative area-content")} data-testid="ai-chat">
      {/* Reverse-scroll message pane (area-content). Index 0 (newest) anchors to the bottom. */}
      <section
        ref={scrollerRef}
        data-testid="ai-chat-scroller"
        aria-roledescription="chat-history"
        onScroll={handleScroll}
        className="area-content relative overflow-auto scrollbar-gutter-stable p-4"
      >
        <div className="max-w-6xl mx-auto">
          {isLoadingMore && (
            <div data-testid="ai-chat-loading">
              <Skeleton />
            </div>
          )}

          {/* Sentinel: last DOM child → visually at the top under flex-col-reverse. */}
          <div ref={sentinelRef} data-testid="ai-chat-sentinel" aria-hidden className="h-px w-full" />

          <div className="flex flex-col-reverse">
            {messages.map((message, index) => (
              <Fragment key={message.id}>{renderMessage(message, index === 0)}</Fragment>
            ))}
          </div>

          {isBusy && (
            <div data-testid="ai-chat-loading" className="-mt-8">
              <Skeleton />
            </div>
          )}
        </div>
      </section>

      {/* Chatbox input (area-footer) */}
      <footer data-testid="ai-chat-footer" className="area-footer px-4 py-2">
        <div className="max-w-6xl relative mx-auto">
          {/* Floating "scroll to bottom" affordance, shown when scrolled away from the newest message. */}
          {awayFromBottom && (
            <Button
              rounded
              size="sm"
              icon="icon-[mdi--arrow-down]"
              aria-label="Scroll to bottom"
              data-testid="ai-chat-scroll-to-bottom"
              className="absolute -top-4 right-4 z-10"
              onClick={scrollToBottom}
            />
          )}

          <Chatbox
            isBusy={isBusy}
            tools={tools}
            attachments={attachments}
            onSubmit={(text) => onSendMessage({ text })}
            onCancel={() => setAwayFromBottom(false)}
          />
        </div>
      </footer>
    </div>
  );
}
