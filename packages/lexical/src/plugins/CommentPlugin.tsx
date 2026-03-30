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

import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import {
  Badge,
  Button,
  Card,
  Content,
  Flyout,
  Footer,
  Icon,
  Modal,
  useOverlayService,
  type ModalProps,
} from "@react-fabric/core";
import { DateDuration } from "@react-fabric/date";
import { Textarea } from "@react-fabric/form";
import { compareValues } from "@react-fabric/utilities";
import classNames from "classnames";
import {
  $getNearestNodeFromDOMNode,
  $getNodeByKey,
  $getRoot,
  $getState,
  $isElementNode,
  $setState,
  createState,
  type LexicalEditor,
} from "lexical";
import { useEffect, useEffectEvent, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useTranslation } from "react-i18next";
import { Point, Rect, isHTMLElement } from "../utils";

const SPACE = 4;

const Downward = 1;
const Upward = -1;
const Indeterminate = 0;

let prevIndex = Infinity;

function getCurrentIndex(keysLength: number): number {
  if (keysLength === 0) {
    return Infinity;
  }
  if (prevIndex >= 0 && prevIndex < keysLength) {
    return prevIndex;
  }

  return Math.floor(keysLength / 2);
}

function getTopLevelNodeKeys(editor: LexicalEditor): string[] {
  return editor.getEditorState().read(() => $getRoot().getChildrenKeys());
}

function getBlockElement(
  anchorElem: HTMLElement,
  editor: LexicalEditor,
  event: MouseEvent,
): HTMLElement | null {
  const anchorElementRect = anchorElem.getBoundingClientRect();
  const topLevelNodeKeys = getTopLevelNodeKeys(editor);

  let blockElem: HTMLElement | null = null;

  editor.getEditorState().read(() => {
    let index = getCurrentIndex(topLevelNodeKeys.length);
    let direction = Indeterminate;

    while (index >= 0 && index < topLevelNodeKeys.length) {
      const key = topLevelNodeKeys[index];
      const elem = editor.getElementByKey(key);
      if (elem === null) {
        break;
      }
      const point = new Point(event.x, event.y);
      const domRect = Rect.fromDOM(elem);
      const { marginTop, marginBottom } = window.getComputedStyle(elem);

      const rect = domRect.generateNewRect({
        bottom: domRect.bottom + parseFloat(marginBottom),
        left: anchorElementRect.left,
        right: anchorElementRect.right,
        top: domRect.top - parseFloat(marginTop),
      });

      const {
        result,
        reason: { isOnTopSide, isOnBottomSide },
      } = rect.contains(point);

      if (result) {
        blockElem = elem;
        prevIndex = index;
        break;
      }

      if (direction === Indeterminate) {
        if (isOnTopSide) {
          direction = Upward;
        } else if (isOnBottomSide) {
          direction = Downward;
        } else {
          // stop search block element
          direction = Infinity;
        }
      }

      index += direction;
    }
  });

  return blockElem;
}

interface ICommentEntry {
  username: string;
  timestamp: string;
  comment: string;
}

interface IComment extends ICommentEntry {
  lastUpdate: string;
  replies: ICommentEntry[];
}

const commentState = createState<"comment", IComment>("comment", {
  parse: (v) =>
    typeof v === "string" ? JSON.parse(v) : typeof v === "object" ? v : null,
});

function setMenuPosition(
  targetElem: HTMLElement | null,
  floatingElem: HTMLElement,
  anchorElem: HTMLElement,
) {
  if (!targetElem) {
    floatingElem.style.opacity = "0";
    floatingElem.style.transform = "translate(-10000px, -10000px)";
    return;
  }

  const targetRect = targetElem.getBoundingClientRect();
  const targetStyle = window.getComputedStyle(targetElem);
  const floatingElemRect = floatingElem.getBoundingClientRect();
  const anchorElementRect = anchorElem.getBoundingClientRect();

  const top =
    targetRect.top +
    (parseInt(targetStyle.lineHeight, 10) - floatingElemRect.height) / 2 -
    anchorElementRect.top;

  const left = SPACE;

  floatingElem.style.opacity = "1";
  floatingElem.style.transform = `translate(-${left}px, ${top}px)`;
}

function useCommentMenu(
  editor: LexicalEditor,
  anchorElem: HTMLElement,
  username: string,
  openForm: (props: { sample: string }) => Promise<string>,
): React.ReactElement {
  const scrollerElem = anchorElem.parentElement;

  const menuRef = useRef<HTMLDivElement>(null);
  const [draggableBlockElem, setDraggableBlockElem] =
    useState<HTMLElement | null>(null);

  useEffect(() => {
    function onMouseMove(event: MouseEvent) {
      const target = event.target as HTMLElement;
      if (!isHTMLElement(target)) {
        setDraggableBlockElem(null);
        return;
      }

      const _draggableBlockElem = getBlockElement(anchorElem, editor, event);
      editor.update(() => {
        const node =
          _draggableBlockElem &&
          $getNearestNodeFromDOMNode(_draggableBlockElem);
        if (node) {
          const comment = $getState(node, commentState);
          setDraggableBlockElem(comment === null ? _draggableBlockElem : null);
        } else {
          setDraggableBlockElem(null);
        }
      });
    }

    function onMouseLeave() {
      setDraggableBlockElem(null);
    }

    scrollerElem?.addEventListener("mousemove", onMouseMove);
    scrollerElem?.addEventListener("mouseleave", onMouseLeave);

    return () => {
      scrollerElem?.removeEventListener("mousemove", onMouseMove);
      scrollerElem?.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [scrollerElem, anchorElem, editor]);

  useEffect(() => {
    if (menuRef.current) {
      setMenuPosition(draggableBlockElem, menuRef.current, anchorElem);
    }
  }, [anchorElem, draggableBlockElem]);

  const addComment = () => {
    editor.update(() => {
      const node =
        draggableBlockElem && $getNearestNodeFromDOMNode(draggableBlockElem);

      if (node && $isElementNode(node)) {
        draggableBlockElem.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
        void openForm({ sample: node.getTextContent().substring(0, 128) }).then(
          (comment) => {
            editor.update(() => {
              comment &&
                $setState(node, commentState, {
                  username,
                  comment,
                  timestamp: new Date().toISOString(),
                  lastUpdate: new Date().toISOString(),
                  replies: [],
                });
            });
            return true;
          },
        );
      }
    });
  };

  return createPortal(
    <>
      <div
        role="none"
        ref={menuRef}
        onClick={addComment}
        className="rounded px-0.5 py-px select-none opacity-0 absolute right-0 top-0 will-change-transform cursor-pointer hover:bg-primary-50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-4 h-4 opacity-30 pointer-events-none"
        >
          <title>comment-plus-outline</title>
          <path d="M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22V22H9M10,16V19.08L13.08,16H20V4H4V16H10M11,6H13V9H16V11H13V14H11V11H8V9H11V6Z" />
        </svg>
      </div>
    </>,
    anchorElem,
  );
}

const CommentCard = ({
  sample,
  nodeKey,
  comment,
  onSelect,
  onReply,
}: {
  sample: string;
  nodeKey: string;
  comment: IComment;
  onSelect: (key: string) => void;
  onReply: (key: string, reply: string) => void;
}) => {
  const { t } = useTranslation("lexical");
  const [reply, setReply] = useState<string | null>(null);
  return (
    <Card data-key={nodeKey} className="mb-2" onClick={() => onSelect(nodeKey)}>
      <div className="line-clamp-2 mb-4">{sample}</div>
      <div className="text-xs truncate mb-2 text-tint-500">
        <div className="font-medium">{comment.username}</div>
        <DateDuration date={comment.timestamp} />
      </div>
      <div className="text-sm">{comment.comment}</div>
      {comment.replies?.length > 0 && (
        <div className="bg-alternate ps-2 border-s-2 border-s-tint-200">
          {comment.replies.map((reply, idx) => (
            <div key={idx} className="px-2 py-1">
              <div className="text-xs truncate mb-2 text-tint-500">
                <div className="font-medium">{reply.username}</div>
                <DateDuration date={reply.timestamp} />
              </div>
              <div className="text-sm">{reply.comment}</div>
            </div>
          ))}
        </div>
      )}
      <Footer>
        <div className="p-px text-xs bg-default">
          <Textarea
            placeholder={t("reply") + "..."}
            rows={1}
            value={reply}
            onChange={setReply}
            onEnterPressed={() =>
              reply && (onReply(nodeKey, reply), setReply(null))
            }
            decorateEnd={
              <Button
                size="sm"
                variant="link"
                icon="icon-[mdi--send]"
                aria-label="reply"
                onClick={() =>
                  reply && (onReply(nodeKey, reply), setReply(null))
                }
              />
            }
          />
        </div>
      </Footer>
    </Card>
  );
};

const CommentFlyout = ({
  comments,
  activeKey,
  onClose,
  onSelect,
  onReply,
}: ModalProps<{
  activeKey?: string;
  onSelect: (key: string) => void;
  onReply: (key: string, reply: string) => void;
  comments: Array<{ sample: string; nodeKey: string; comment: IComment }>;
}>) => {
  const contentRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    activeKey &&
      setTimeout(() => {
        contentRef.current
          ?.querySelector(`[data-key="${activeKey}"]`)
          ?.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
      }, 100);
  }, [activeKey]);
  return (
    <Flyout
      onClose={onClose}
      title="Comments"
      icon="icon-[mdi--comment-text-multiple]"
      hideMask
      align="end"
      size="sm"
      headerClassName="border-b border-primary-500 text-sm font-medium"
    >
      <Content ref={contentRef}>
        {comments.map((props) => (
          <CommentCard
            key={props.nodeKey}
            {...props}
            onSelect={onSelect}
            onReply={onReply}
          />
        ))}
      </Content>
    </Flyout>
  );
};

const CommentForm = ({ onClose, sample }: ModalProps & { sample: string }) => {
  const { t } = useTranslation("lexical");
  const [comment, setComment] = useState<string | null>(null);
  return (
    <Modal onClose={onClose} size="sm" title={t("addComment")}>
      <Content className="p-px grid text-sm">
        <div className="px-2 py-1 line-clamp-2">{sample}</div>
        <Textarea
          placeholder={t("addComment") + "..."}
          rows={4}
          autoFocus
          value={comment}
          onChange={setComment}
          onEnterPressed={() => comment && onClose(comment)}
          decorateEnd={
            <Button
              size="sm"
              variant="link"
              icon="icon-[mdi--send]"
              aria-label="add comment"
              onClick={() => comment && onClose(comment)}
            />
          }
        />
      </Content>
    </Modal>
  );
};

const commentHandler = (
  editor: LexicalEditor,
  anchorElem: HTMLElement,
  username: string,
) => {
  const [comments, setComments] = useState<
    Array<{ sample: string; nodeKey: string; comment: IComment }>
  >([]);
  const [FlyoutEl, openFlyout, closeFlyout] = useOverlayService(CommentFlyout);
  const [ModalEl, openModal] = useOverlayService(CommentForm);

  const scrollIntoView = useEffectEvent((key: string) => {
    const el = editor.getElementByKey(key);
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      el.classList.add("editor-comment-hilight");
      setTimeout(() => {
        el.classList.remove("editor-comment-hilight");
      }, 1000);
    }
  });
  const addReply = useEffectEvent((key: string, reply: string) => {
    editor.update(() => {
      const node = $getNodeByKey(key);
      if (node) {
        const comment = $getState(node, commentState);
        if (comment) {
          comment.lastUpdate = new Date().toISOString();
          comment.replies.unshift({
            username,
            comment: reply,
            timestamp: new Date().toISOString(),
          });
          $setState(node, commentState, comment);
        }
      }
    });
  });
  const handleOpenFlyout = useEffectEvent((activeKey?: string) => {
    if (!activeKey && closeFlyout) {
      closeFlyout();
    }
    void openFlyout({ activeKey });
  });

  useEffect(() => {
    return editor.registerUpdateListener(({ editorState }) => {
      const comments: KeyValue[] = [];
      editorState.read(() => {
        $getRoot()
          .getChildren()
          .forEach((node) => {
            const comment = $getState(node, commentState);
            const element = editor.getElementByKey(node.getKey());
            element?.classList.remove("editor-has-comment");
            if (comment !== null) {
              element?.classList.add("editor-has-comment");
              element?.addEventListener("click", (e) => {
                if (e.offsetX < 0) {
                  handleOpenFlyout(node.getKey());
                }
              });
              comments.push({
                nodeKey: node.getKey(),
                sample: node.getTextContent().substring(0, 128),
                comment,
              });
            }
          });
      });
      setComments(
        comments.sort(compareValues("desc", "comment.lastUpdate")) as any,
      );
    });
  }, [editor]);
  return (
    <>
      {useCommentMenu(editor, anchorElem, username, openModal)}
      <div className="fixed inset-x-0 bottom-0 max-w-[21cm] mx-auto text-end">
        {comments.length > 0 && (
          <Badge
            value={comments.length}
            max={99}
            placement="top-end"
            className="-me-4"
          >
            <Icon
              rounded
              onClick={async () => handleOpenFlyout()}
              icon="icon-[mdi--comment-text-multiple]"
              className={classNames(
                "text-2xl outline p-2 -me-4",
                closeFlyout
                  ? "bg-primary-50 text-primary-500"
                  : "bg-dimmed text-muted hover:text-dimmed",
              )}
            />
          </Badge>
        )}
      </div>
      {
        <FlyoutEl
          comments={comments}
          onSelect={scrollIntoView}
          onReply={addReply}
        />
      }
      {<ModalEl />}
    </>
  );
};

export const CommentPlugin = ({
  anchorElem = document.body,
  isPublishMode = true,
  username,
}: {
  anchorElem?: HTMLElement;
  isPublishMode: boolean;
  username: string;
}): React.ReactElement => {
  const [editor] = useLexicalComposerContext();
  if (isPublishMode) return <></>;
  return commentHandler(editor, anchorElem, username);
};
