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

import { Icon } from "@react-fabric/core";
import { getBox } from "@react-fabric/utilities";
import classNames from "classnames";
import { useCallback, useEffect, useMemo, useReducer } from "react";

export interface AnnotationItem<T = KeyValue> {
  box: string | [number, number, number, number];
  label?: string;
  color?: string;
  data?: T;
}

export interface AnnotationProps extends AnnotationItem {
  index: number;
  ratio: number;
  maxWidth: number;
  maxHeight: number;
  onChange: (box: [number, number, number, number]) => void;
  onRemove: () => void;
}

interface DragState {
  dragging: boolean;
  startPoint: [number, number];
  mode: "move" | "x" | "y" | "w" | "h" | "xy" | "xh" | "yw" | "wh";
  pos: { left: number; top: number; width: number; height: number };
  startPos: { left: number; top: number; width: number; height: number };
}

type DragAction =
  | {
      type: "dragstart";
      mode: DragState["mode"];
      startPoint: [number, number];
      defaultPos: DragState["pos"];
    }
  | { type: "dragend"; cancelled?: boolean }
  | { type: DragState["mode"]; point: [number, number] };

export const Annotation = ({
  box,
  label,
  index,
  ratio,
  maxWidth,
  maxHeight,
  onChange,
  onRemove,
  color = "var(--color-marigold)",
}: AnnotationProps) => {
  const defaultPos = useMemo(() => {
    const [left, top, width, height] = getBox(box);
    return {
      left: left * ratio,
      top: top * ratio,
      width: width * ratio,
      height: height * ratio,
    };
  }, [box, ratio]);

  const [state, dispatch] = useReducer(
    (state: DragState, action: DragAction) => {
      if (action.type === "dragstart") {
        state.dragging = true;
        state.mode = action.mode;
        state.pos = { ...action.defaultPos };
        state.startPos = { ...action.defaultPos };
        state.startPoint = action.startPoint;
      }
      if (action.type === "dragend") {
        state.dragging = false;
      }
      if (action.type === "move") {
        const diffX = action.point[0] - state.startPoint[0];
        const diffY = action.point[1] - state.startPoint[1];
        state.pos.top = state.startPos.top + diffY;
        state.pos.left = state.startPos.left + diffX;
      }
      if (action.type === "x" || action.type === "xh" || action.type === "xy") {
        const diffX = action.point[0] - state.startPoint[0];
        state.pos.left = state.startPos.left + diffX;
        state.pos.left >= 0 && (state.pos.width = state.startPos.width - diffX);
      }
      if (action.type === "y" || action.type === "xy" || action.type === "yw") {
        const diffY = action.point[1] - state.startPoint[1];
        state.pos.top = state.startPos.top + diffY;
        state.pos.top && (state.pos.height = state.startPos.height - diffY);
      }
      if (action.type === "w" || action.type === "yw" || action.type === "wh") {
        const diffX = action.point[0] - state.startPoint[0];
        state.pos.width = state.startPos.width + diffX;
      }
      if (action.type === "h" || action.type === "xh" || action.type === "wh") {
        const diffY = action.point[1] - state.startPoint[1];
        state.pos.height = state.startPos.height + diffY;
      }
      state.pos.top = Math.max(state.pos.top, 0);
      state.pos.left = Math.max(state.pos.left, 0);
      state.pos.width = Math.max(state.pos.width, 16);
      state.pos.height = Math.max(state.pos.height, 16);
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

  const pos = useMemo(
    () => (state.dragging ? state.pos : defaultPos),
    [state.dragging, state.pos, defaultPos],
  );

  const startDragging = useCallback(
    (mode: DragState["mode"], e: React.MouseEvent) => {
      e.stopPropagation();
      e.preventDefault();
      dispatch({
        type: "dragstart",
        mode,
        defaultPos,
        startPoint: [e.clientX, e.clientY],
      });
    },
    [defaultPos],
  );

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      dispatch({ type: state.mode, point: [e.clientX, e.clientY] });
    };
    const handleMouseUp = (e: MouseEvent) => {
      dispatch({ type: "dragend" });
      const { top, left, width, height } = state.pos;
      onChange?.([left, top, width, height]);
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
  }, [state.dragging, state.mode, onChange]);

  return (
    <div
      role="none"
      className={classNames(
        "outline-2 -outline-offset-1 outline-current absolute group cursor-move hover:z-10",
        "before:absolute before:inset-0 before:bg-current",
        state.dragging ? "before:opacity-30" : "before:opacity-10",
      )}
      style={{ ...pos, color }}
      onMouseDown={(e) => startDragging("move", e)}
    >
      <button
        className="bg-danger text-white cursor-pointer leading-none p-0.5 text-sm opacity-0 group-hover:opacity-60 hover:opacity-90 absolute top-0 right-0"
        onMouseDown={(e) => [e.stopPropagation(), onRemove()]}
      >
        <Icon icon="icon-[mdi--trash-can-outline]" />
      </button>
      <div
        className="absolute left-0 bottom-full max-w-full truncate select-none pointer-events-none text-xs bg-current font-medium leading-tight px-0.5"
        style={{
          color,
        }}
      >
        <span
          className="mix-blend-luminosity"
          style={{
            filter: "invert(1) grayscale(1) brightness(1.3) contrast(9000)",
          }}
        >
          {label ?? index}
        </span>
      </div>
      <div
        role="none"
        onMouseDown={(e) => startDragging("y", e)}
        className="absolute top-0 inset-x-0 h-2 cursor-ns-resize"
      />
      <div
        role="none"
        onMouseDown={(e) => startDragging("h", e)}
        className="absolute bottom-0 inset-x-0 h-2 cursor-ns-resize"
      />
      <div
        role="none"
        onMouseDown={(e) => startDragging("x", e)}
        className="absolute left-0 inset-y-0 w-2 cursor-ew-resize"
      />
      <div
        role="none"
        onMouseDown={(e) => startDragging("w", e)}
        className="absolute right-0 inset-y-0 w-2 cursor-ew-resize"
      />
      <div
        role="none"
        onMouseDown={(e) => startDragging("xy", e)}
        className="absolute top-0 left-0 size-2 cursor-nwse-resize border-t-2 border-l-2 border-black/90"
      />
      <div
        role="none"
        onMouseDown={(e) => startDragging("xh", e)}
        className="absolute bottom-0 left-0 size-2 cursor-nesw-resize border-b-2 border-l-2 border-black/90"
      />
      <div
        role="none"
        onMouseDown={(e) => startDragging("yw", e)}
        className="absolute top-0 right-0 size-2 cursor-nesw-resize border-t-2 border-r-2 border-black/90"
      />
      <div
        role="none"
        onMouseDown={(e) => startDragging("wh", e)}
        className="absolute bottom-0 right-0 size-2 cursor-nwse-resize border-b-2 border-r-2 border-black/90"
      />
    </div>
  );
};
