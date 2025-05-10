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

import {
  AnimationBars,
  CoreIcons,
  Icon,
  useResizeObserver,
} from "@react-fabric/core";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { Annotation, type AnnotationItem } from "./Annotation";
import { useMakeAnnotation } from "./useMakeAnnotation";

export interface AnnotatorProps<T> {
  /**
   * image source
   */
  src: string;
  /**
   * image annotations
   */
  annotations: Array<AnnotationItem<T>>;
  /**
   * image load handler
   */
  onLoad?: () => void;
  /**
   * image load error
   */
  onError?: () => void;
  /**
   * annotation added
   */
  onAdd?: () => string | undefined | Promise<string | undefined>;
  /**
   * annotations changed
   */
  onChange?: (annotations: Array<AnnotationItem<T>>) => void;
}

interface AnnotatorState {
  ratio: number;
  pos: {
    top: number;
    left: number;
    width: number;
    height: number;
  };
  offset: [number, number];
  isLoading: boolean;
  isLoaded: boolean;
  isErrored: boolean;
  annotations: AnnotationItem[];
}

type AnnotatorActions =
  | { type: "loading"; src: string }
  | { type: "change"; annotations: AnnotationItem[] }
  | { type: "add"; label?: string; box: [number, number, number, number] }
  | { type: "update"; index: number; box: [number, number, number, number] }
  | { type: "remove"; index: number }
  | { type: "loaded" }
  | { type: "resize" }
  | { type: "errored" };

interface Context extends AnnotatorState {
  handleLoad: () => void;
}

const AnnotatorContext = createContext<Context>({} as Context);

export const AnnotatorProvider = ({
  src,
  annotations,
  onChange,
  onError,
  onLoad,
  onAdd,
}: AnnotatorProps<KeyValue>) => {
  const imageRef = useResizeObserver<HTMLImageElement>(() => {
    dispatch({ type: "resize" });
  });

  const [state, dispatch] = useReducer(
    (state: AnnotatorState, action: AnnotatorActions) => {
      if (action.type === "loading") {
        state.isLoading = true;
        state.isLoaded = false;
        state.isErrored = false;
      }
      if (action.type === "loaded") {
        state.isLoading = false;
        state.isLoaded = true;
        if (imageRef.current) {
          state.pos = {
            top: imageRef.current.offsetTop,
            left: imageRef.current.offsetLeft,
            width: imageRef.current.offsetWidth,
            height: imageRef.current.offsetHeight,
          };
          state.offset = [
            imageRef.current.parentElement?.offsetLeft ?? 0,
            imageRef.current.parentElement?.offsetTop ?? 0,
          ];
          state.ratio =
            imageRef.current.offsetWidth / imageRef.current.naturalWidth;
        }
      }
      if (action.type === "errored") {
        state.isLoading = false;
        state.isLoaded = false;
        state.isErrored = true;
      }
      if (action.type === "resize") {
        if (imageRef.current) {
          state.pos = {
            top: imageRef.current.offsetTop,
            left: imageRef.current.offsetLeft,
            width: imageRef.current.offsetWidth,
            height: imageRef.current.offsetHeight,
          };
          state.offset = [
            imageRef.current.parentElement?.offsetLeft ?? 0,
            imageRef.current.parentElement?.offsetTop ?? 0,
          ];
          state.ratio =
            imageRef.current.offsetWidth / imageRef.current.naturalWidth;
        }
      }
      if (action.type === "change") {
        state.annotations = action.annotations;
      }
      if (action.type === "add") {
        state.annotations.push({
          box: action.box,
          label: action.label,
        });
        setTimeout(() => {
          onChange?.(state.annotations);
        }, 10);
      }
      if (action.type === "update") {
        const an = state.annotations[action.index];
        const [x, y, w, h] = action.box;
        an.box = [
          x / state.ratio,
          y / state.ratio,
          w / state.ratio,
          h / state.ratio,
        ];
        state.annotations.splice(action.index, 1, { ...an });
        setTimeout(() => {
          onChange?.(state.annotations);
        }, 10);
      }
      if (action.type === "remove") {
        state.annotations.splice(action.index, 1);
        setTimeout(() => {
          onChange?.(state.annotations);
        }, 10);
      }
      return { ...state };
    },
    {
      isLoaded: false,
      isLoading: false,
      isErrored: false,
      pos: {
        top: 0,
        left: 0,
        width: 0,
        height: 0,
      },
      offset: [0, 0],
      ratio: 0,
    } as AnnotatorState,
  );

  const { addPlaceholder, startDragging } = useMakeAnnotation({
    maxHeight: state.pos.height,
    maxWidth: state.pos.width,
    offset: state.offset,
    async onAdd(box) {
      const label = await Promise.resolve(onAdd?.());
      dispatch({ type: "add", box, label });
    },
  });

  useEffect(() => {
    dispatch({
      type: "loading",
      src,
    });
  }, [src]);

  useEffect(() => {
    dispatch({
      type: "change",
      annotations,
    });
  }, [annotations]);

  const handleLoad = useCallback(() => {
    dispatch({
      type: "loaded",
    });
    onLoad?.();
  }, [onLoad]);

  const handleError = useCallback(() => {
    dispatch({
      type: "errored",
    });
    onError?.();
  }, [onError]);

  const handleChange = useCallback(
    (index: number, box: [number, number, number, number]) => {
      dispatch({ type: "update", index, box });
    },
    [],
  );

  const handleRemove = useCallback((index: number) => {
    dispatch({ type: "remove", index });
  }, []);

  return (
    <AnnotatorContext.Provider value={{ ...state, handleLoad }}>
      <div className="relative">
        {src && (
          <img
            src={src}
            alt="annotate"
            ref={imageRef}
            className="max-w-full"
            onLoad={handleLoad}
            onError={handleError}
          />
        )}
        <div
          role="none"
          style={state.pos}
          className="absolute cursor-crosshair"
          onMouseDown={startDragging}
        >
          {state.isLoaded &&
            state.annotations.map((an, idx) => (
              <Annotation
                key={idx}
                {...an}
                index={idx}
                ratio={state.ratio}
                maxWidth={state.pos.width}
                maxHeight={state.pos.height}
                onRemove={() => handleRemove(idx)}
                onChange={(box) => handleChange(idx, box)}
              />
            ))}
          {addPlaceholder}
        </div>
      </div>
      {state.isErrored && <Icon icon={CoreIcons.mediaImageBroken} />}
      {state.isLoading && <AnimationBars />}
    </AnnotatorContext.Provider>
  );
};

export const useAnnotator = () => useContext(AnnotatorContext);
