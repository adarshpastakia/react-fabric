/*
 * React Fabric
 * @version: 1.0.0
 *
 *
 * The MIT License (MIT)
 * Copyright (c) 2026 Adarsh Pastakia
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

import { Content, EmptyContent, Section, useDebounce } from "@react-fabric/core";
import Konva from "konva";
import { useRef, useState } from "react";
import { useSource } from "../hooks/useSource";
import { chain } from "../uitls";
import { AnnotatorCanvas } from "./Canvas";
import { AnnotatorContext } from "./context";
import { FieldConfig } from "./FieldConfig";
import { AnnotatorProps } from "./types";

export const Annotator = ({ src, annotations, onLoad, onError }: AnnotatorProps) => {
  const source = useSource({ src, onLoad, onError });
  const imageRef = useRef<HTMLImageElement | null>(null);
  const canvasRef = useRef<Konva.Layer | null>(null);

  const [showForm, setShowForm] = useState(true);
  const [editingShape, setEditingShape] = useState<Konva.Node | null>(null);

  const [size, setSize] = useState({
    width: 0,
    height: 0,
    ratio: 1,
  });

  const handleResize = useDebounce(() => {
    const { naturalWidth = 1, offsetWidth = 1, offsetHeight = 1 } = imageRef.current || {};
    setSize({
      width: offsetWidth,
      height: offsetHeight,
      ratio: offsetWidth / naturalWidth,
    });
  }, []);

  return (
    <AnnotatorContext.Provider
      value={{
        source,
        imageRef,
        canvasRef,
        editingShape,
        setEditingShape,
        showForm,
        setShowForm,
        size,
      }}
    >
      <Section>
        <Content className="p-0 bg-dimmed" onResize={handleResize}>
          {source.state.errored && (
            <EmptyContent icon="icon-[mdi--image-off-outline]" iconColor="danger-500" message="Failed to load image" />
          )}
          <div className="flex justify-center relative">
            <img
              ref={imageRef}
              src={source.state.src}
              alt="Annotator"
              className="w-full"
              onLoad={chain(source.onLoad, handleResize)}
              onError={source.onError}
            />
            {source.state.loaded && <AnnotatorCanvas annotations={annotations} />}
            {source.state.loaded && <FieldConfig />}
          </div>
        </Content>
      </Section>
    </AnnotatorContext.Provider>
  );
};
