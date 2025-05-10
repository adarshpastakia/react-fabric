/*
 * React Fabric
 * @version: 1.0.0
 *
 *
 * The MIT License (MIT)
 * Copyright (c) 2025 Adarsh Pastakia
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

import classNames from "classnames";
import { useCallback, useEffect, useReducer } from "react";

interface DragState {
  dragging: boolean;
  startPoint: [number, number];
  pos: { left: number; top: number; width: number; height: number };
}

type DragAction =
  | {
      type: "dragstart";
      startPoint: [number, number];
    }
  | { type: "dragend"; cancelled?: boolean }
  | { type: "drag"; point: [number, number] };

export const useMakeAnnotation = ({
  maxHeight,
  maxWidth,
  offset,
  onAdd,
}: {
  offset: [number, number];
  maxHeight: number;
  maxWidth: number;
  onAdd: (box: [number, number, number, number]) => void;
}) => {
  const [state, dispatch] = useReducer(
    (state: DragState, action: DragAction) => {
      if (action.type === "dragstart") {
        state.dragging = true;
        console.log(offset, action.startPoint);
        state.pos = {
          left: action.startPoint[0] - offset[0],
          top: action.startPoint[1] - offset[1],
          height: 1,
          width: 1,
        };
        state.startPoint = action.startPoint;
      }
      if (action.type === "dragend") {
        state.dragging = false;
      }
      if (action.type === "drag") {
        const diffX = action.point[0] - state.startPoint[0];
        const diffY = action.point[1] - state.startPoint[1];
        if (diffX > 0) state.pos.width = diffX;
        else {
          state.pos.left = action.point[0] - offset[0];
          state.pos.width = Math.abs(diffX);
        }
        if (diffX > 0) state.pos.height = diffY;
        else {
          state.pos.top = action.point[1] - offset[1];
          state.pos.height = Math.abs(diffY);
        }
      }
      state.pos.top = Math.max(state.pos.top, 0);
      state.pos.left = Math.max(state.pos.left, 0);
      state.pos.width = Math.max(state.pos.width, 1);
      state.pos.height = Math.max(state.pos.height, 1);
      if (state.pos.top + state.pos.height > maxHeight)
        state.pos.height = maxHeight - state.pos.top;
      if (state.pos.left + state.pos.width > maxWidth)
        state.pos.width = maxWidth - state.pos.left;
      return { ...state };
    },
    {
      dragging: false,
    } as any,
  );

  const startDragging = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch({
      type: "dragstart",
      startPoint: [e.clientX, e.clientY],
    });
  }, []);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      dispatch({ type: "drag", point: [e.clientX, e.clientY] });
    };
    const handleMouseUp = (e: MouseEvent) => {
      dispatch({ type: "dragend" });
      const { top, left, width, height } = state.pos;
      onAdd?.([left, top, Math.max(width, 16), Math.max(height, 16)]);
    };
    const handleEscape = (e: KeyboardEvent) => {
      e.code === "Escape" && dispatch({ type: "dragend", cancelled: true });
    };
    state.dragging && document.addEventListener("mousemove", handleMove);
    state.dragging && document.addEventListener("mouseup", handleMouseUp);
    state.dragging && document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [state.dragging]);

  return {
    startDragging,
    addPlaceholder: state.dragging && (
      <div
        className={classNames(
          "outline-2 -outline-offset-1 outline-dashed outline-current absolute group cursor-move hover:z-10",
          "before:absolute before:inset-0 before:bg-current",
          state.dragging ? "before:opacity-30" : "before:opacity-10",
        )}
        style={{ ...state.pos, color: "var(--color-marigold)" }}
      />
    ),
  };
};
