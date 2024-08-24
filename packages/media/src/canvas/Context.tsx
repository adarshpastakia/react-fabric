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

import { type RefProp } from "@react-fabric/core/dist/types/types";
import { getBox } from "@react-fabric/utilities";
import {
  createContext,
  type PropsWithChildren,
  type RefObject,
  useCallback,
  useContext,
  useEffect,
  useImperativeHandle,
  useReducer,
  useRef,
} from "react";

interface ContextType {
  canvasRef: RefObject<HTMLCanvasElement>;
}

export interface CanvasRef {
  clear: () => void;
  unhilight: () => void;
  drawBox: (
    boundingBox: BoxObject["box"],
    options?: Omit<BoxObject, "box" | "polygon">,
  ) => void;
  drawPolygon: (
    boundingBox: BoxObject["polygon"],
    options?: Omit<BoxObject, "box" | "polygon">,
  ) => void;
  hilightBox: (boundingBox: BoxObject["box"]) => void;
  hilightPolygon: (boundingBox: BoxObject["polygon"]) => void;
}

interface BoxObject {
  box?: string | [number, number, number, number];
  polygon?: string[] | Array<[number, number, number, number]>;
  colorTop?: string;
  colorBottom?: string;
  labelTop?: string;
  labelBottom?: string;
  stroke?: string;
  fill?: string;
}

const Context = createContext<ContextType>({} as ContextType);

export const CanvasProvider = ({
  children,
  ref,
  mediaEl,
  width,
}: PropsWithChildren &
  RefProp<CanvasRef> & {
    width: number;
    mediaEl: RefObject<HTMLImageElement | HTMLVideoElement | null>;
  }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [state, dispatch] = useReducer(
    (state: BoxObject[], action: KeyValue) => {
      if (action.type === "clear") {
        return [];
      }
      if (action.type === "unhilight") {
        return [...state];
      }
      if (action.type === "drawBox") {
        return [...state, action.payload as BoxObject];
      }
      return state;
    },
    [] as BoxObject[],
  );

  useImperativeHandle(
    ref,
    () => {
      return {
        clear: () => {
          dispatch({ type: "clear" });
        },
        unhilight: () => {
          dispatch({ type: "unhilight" });
        },
        drawBox: (box, options = {}) => {
          dispatch({ type: "drawBox", payload: { box, ...options } });
        },
        drawPolygon: (polygon, options = {}) => {
          dispatch({ type: "drawBox", payload: { polygon, ...options } });
        },
        hilightBox: (box) => {
          dispatch({ type: "hilight", payload: box });
        },
        hilightPolygon: (polygon) => {
          dispatch({ type: "hilightPolygon", payload: polygon });
        },
      };
    },
    [canvasRef, dispatch],
  );

  const getRatio = useCallback(() => {
    const el = mediaEl.current;
    let ratio = 1;
    if (el instanceof HTMLImageElement) {
      ratio = Math.min(
        el.offsetWidth / el.naturalWidth,
        el.offsetHeight / el.naturalHeight,
      );
    }
    if (el instanceof HTMLVideoElement) {
      ratio = Math.min(
        el.offsetWidth / el.videoWidth,
        el.offsetHeight / el.videoHeight,
      );
    }
    return ratio;
  }, []);

  useEffect(() => {
    const context = canvasRef.current?.getContext("2d");
    context?.clearRect(0, 0, context.canvas.width, context.canvas.height);
    const ratio = getRatio();
    if (context != null) {
      state.forEach(({ box, polygon, ...options }) => {
        if (box) {
          let [x, y, w, h] = getBox(box);
          x *= ratio;
          y *= ratio;
          w *= ratio;
          h *= ratio;
          context.lineWidth = 2;
          context.strokeStyle = options?.stroke ?? "#fc0";
          context.strokeRect(x, y, w, h);
          if (options.labelTop) {
            const labelX = x - 1;
            let labelY = y - 18;
            if (labelY < 0) labelY += 18;
            context.fillStyle = options.colorTop ?? "rgb(0 0 0 / 0.5)";
            context.fillRect(labelX, labelY, w + 2, 18);
            context.fillStyle = "#ffffff";
            context.font = "13px sans-serif";
            context.globalCompositeOperation = "screen";
            context.fillText(
              `${options.labelTop}`,
              labelX + 2,
              labelY + 15,
              w - 4,
            );
          }
          context.globalCompositeOperation = "source-over";
          if (options.labelBottom) {
            const labelX = x - 1;
            let labelY = y + h;
            if (labelY > context.canvas.height) labelY -= 18;
            context.fillStyle = options.colorBottom ?? "rgb(0 0 0 / 0.5)";
            context.fillRect(labelX, labelY, w + 2, 18);
            context.fillStyle = "#ffffff";
            context.font = "13px sans-serif";
            context.globalCompositeOperation = "screen";
            context.fillText(
              `${options.labelBottom}`,
              labelX + 2,
              labelY + 15,
              w - 4,
            );
          }
          context.globalCompositeOperation = "source-over";
        }
        if (polygon != null) {
          context.lineWidth = 2;
          context.strokeStyle = options?.stroke ?? "#fc0";
          context.beginPath();
          polygon.forEach((box, i) => {
            const [x, y] = getBox(box);
            i === 0 && context.moveTo(x * ratio, y * ratio);
            i > 0 && context.lineTo(x * ratio, y * ratio);
          });
          context.closePath();
          context.stroke();
        }
      });
    }
  }, [state, width]);

  return <Context.Provider value={{ canvasRef }}>{children}</Context.Provider>;
};

export const useCanvasContext = () => useContext(Context);
