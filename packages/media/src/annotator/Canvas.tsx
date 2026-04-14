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

import Konva from "konva";
import { useEffect, useRef } from "react";
import { Layer, Stage, Transformer } from "react-konva";
import { Box } from "./Box";
import { useAnnotatorContext } from "./context";
import { AnnotatorProps } from "./types";

export const AnnotatorCanvas = ({ annotations }: Pick<AnnotatorProps, "annotations">) => {
  const { size, canvasRef, editingShape, setEditingShape, setShowForm } = useAnnotatorContext();
  const transformerRef = useRef<Konva.Transformer>(null);

  useEffect(() => {
    if (editingShape && transformerRef.current) {
      transformerRef.current.nodes([editingShape]);
    } else {
      transformerRef.current?.nodes([]);
    }
  }, [editingShape]);

  return (
    <Stage
      width={size.width}
      height={size.height}
      className="absolute inset-0 flex justify-center"
      onClick={(e) => {
        setEditingShape(e.target.parent instanceof Konva.Group ? e.target.parent : null);
      }}
    >
      <Layer scaleX={size.ratio} scaleY={size.ratio} ref={canvasRef}>
        {annotations.map((annotation) => (
          <Box key={annotation.id} {...annotation} ratio={size.ratio} isSelected={annotation.id === editingShape?.id()} />
        ))}
      </Layer>
      <Layer>
        <Transformer
          ref={transformerRef}
          keepRatio={false}
          onTransformStart={() => setShowForm(false)}
          onTransformEnd={() => setShowForm(true)}
          onDragStart={() => setShowForm(false)}
          onDragEnd={() => setShowForm(true)}
          boundBoxFunc={(oldBox, newBox) => {
            // Limit resize
            if (newBox.width < 16 || newBox.height < 16) {
              return oldBox;
            }
            return newBox;
          }}
        />
      </Layer>
    </Stage>
  );
};
