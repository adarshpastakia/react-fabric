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

import chroma from "chroma-js";
import Konva from "konva";
import { useEffectEvent, useMemo, useRef, useState } from "react";
import { Group, Rect, Text } from "react-konva";
import { AnnotatorFieldType, BoxField, COLOR_MAP } from "./types";

export const Box = ({
  x,
  y,
  width,
  height,
  id,
  type = AnnotatorFieldType.Text,
  ratio,
  isSelected,
}: BoxField & { ratio: number; isSelected: boolean }) => {
  const textRef = useRef<Konva.Text>(null);
  const [hover, setHover] = useState(false);
  const color = useMemo(() => COLOR_MAP[type ?? "text"], [type]);

  const [state, setState] = useState({
    x,
    y,
    width,
    height,
  });

  const handleTransformEnd = useEffectEvent((e: Konva.KonvaEventObject<Event>) => {
    const node = e.currentTarget as Konva.Group;
    setState({
      x: node.x(),
      y: node.y(),
      width: node.width() * node.scaleX(),
      height: node.height() * node.scaleY(),
    });
    node.scaleX(1);
    node.scaleY(1);
  });

  return (
    <Group
      {...state}
      attrs={{ id, type }}
      draggable
      onMouseEnter={() => {
        document.body.style.cursor = "move";
        setHover(true);
      }}
      onMouseLeave={() => {
        document.body.style.cursor = "default";
        setHover(false);
      }}
      onTransformEnd={handleTransformEnd}
    >
      <Rect
        x={1}
        y={0}
        width={state.width - 2}
        height={state.height}
        strokeWidth={2}
        strokeScaleEnabled={false}
        stroke={color}
        fill={chroma(color).alpha(0.2).hex()}
      />
      <Rect
        x={0}
        y={-(textRef.current?.getHeight() ?? 12)}
        height={+(textRef.current?.getHeight() ?? 12)}
        width={state.width}
        fill={chroma(color).darken().alpha(0.9).hex()}
        visible={hover || isSelected}
      />
      <Text
        ref={textRef}
        x={0}
        y={-(textRef.current?.getHeight() ?? 12)}
        width={state.width}
        text={`(${type}) ${id}`}
        fontSize={12 / ratio}
        wrap="none"
        ellipsis
        fill="#fff"
        fontStyle="600"
        padding={2}
        visible={hover || isSelected}
      />
    </Group>
  );
};
