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
import {
  createContext,
  type PropsWithChildren,
  useCallback,
  useContext,
  useImperativeHandle,
  useRef,
} from "react";
import { CanvasProvider, type CanvasRef } from "../components/Canvas";
import { type ImageProps } from "./types";
import { useImageReducer } from "./useReducer";

interface ContextType extends ReturnType<typeof useImageReducer> {
  exportToBase64: () => string | null;
}

const Context = createContext<ContextType>({} as ContextType);

export const ImageProvider = ({
  children,
  ref,
  annotations,
  ...props
}: PropsWithChildren & RefProp<CanvasRef> & ImageProps<KeyValue>) => {
  const canvasImperativeRef = useRef<CanvasRef>(null);
  const { imageRef, canvasRef, state, toggleCropping, ...reducer } =
    useImageReducer(props);

  useImperativeHandle(
    ref,
    () =>
      ({
        ...canvasImperativeRef.current,
        toBase64: () => {
          return exportToBase64();
        },
      }) as any,
    [canvasImperativeRef],
  );

  const exportToBase64 = useCallback(() => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    if (context && imageRef.current) {
      const width = (canvas.width = imageRef.current.naturalWidth);
      const height = (canvas.height = imageRef.current.naturalHeight);
      if (state.rotate === 90) {
        canvas.width = height;
        canvas.height = width;
        context.translate(height, 0);
        context.rotate((90 * Math.PI) / 180);
      }
      if (state.rotate === 180) {
        context.translate(width, height);
        context.rotate((180 * Math.PI) / 180);
      }
      if (state.rotate === 270) {
        canvas.width = height;
        canvas.height = width;
        context.translate(0, width);
        context.rotate((270 * Math.PI) / 180);
      }
      context.save();
      context.filter = `
            brightness(${state.colorscape.brightness}) 
            contrast(${state.colorscape.contrast}) 
            saturate(${state.colorscape.saturate}) 
            hue-rotate(${state.colorscape.hue}deg)
            invert(${state.colorscape.invert})`;
      context.drawImage(imageRef.current, 0, 0);
      context.filter = "none";
      canvasRef.current &&
        context.drawImage(
          canvasRef.current,
          0,
          0,
          canvasRef.current.width,
          canvasRef.current.height,
          0,
          0,
          width,
          height,
        );
      context.save();
      try {
        return canvas.toDataURL("image/png");
      } catch {
        //
      }
    }
    return null;
  }, [state.colorscape, state.rotate, state.mediaWidth, state.mediaHeight]);

  return (
    <Context.Provider
      value={{
        imageRef,
        canvasRef,
        state,
        toggleCropping,
        exportToBase64,
        ...reducer,
      }}
    >
      <CanvasProvider
        annotations={annotations}
        mediaRef={imageRef}
        width={state.width}
        canvasRef={canvasRef}
        ref={canvasImperativeRef}
      >
        {children}
      </CanvasProvider>
    </Context.Provider>
  );
};

export const useImageContext = () => useContext(Context);
