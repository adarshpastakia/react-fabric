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

import {
  HTMLContainer,
  type JsonObject,
  Rectangle2d,
  ShapeUtil,
  type TLBaseShape,
  type TLResizeInfo,
  type TLShapeId,
} from "@tldraw/tldraw";
import domtoimage from "dom-to-image";
import { useDrawContext } from "../../DrawContext";

type CardShape = TLBaseShape<
  "data-card",
  {
    w: number;
    h: number;
  } & KeyValue
>;

export class CardShapeUtil extends ShapeUtil<CardShape> {
  static override type = "data-card" as const;

  onResize(
    shape: CardShape,
    info: TLResizeInfo<CardShape>,
  ):
    | Omit<
        {
          id: TLShapeId;
          meta?: Partial<JsonObject> | undefined;
          props?: Partial<{ w: number; h: number } & KeyValue<any>> | undefined;
          type: "data-card";
        } & Partial<Omit<CardShape, "props" | "type" | "id" | "meta">>,
        "type" | "id"
      >
    | undefined {
    return {
      props: {
        w: Math.max(Math.min(info.initialBounds.w * info.scaleX, 1024), 128),
        h: Math.max(Math.min(info.initialBounds.h * info.scaleY, 768), 128),
      },
    };
  }

  getDefaultProps(): CardShape["props"] {
    return {
      w: 300,
      h: 200,
    };
  }

  getGeometry(shape: CardShape) {
    return new Rectangle2d({
      width: shape.props.w,
      height: shape.props.h,
      isFilled: true,
    });
  }

  component(shape: CardShape) {
    const { renderer } = useDrawContext();
    return (
      <HTMLContainer className="relative grid">
        <div className="relative grid" data-shape-id={shape.id}>
          {renderer?.(shape.props)}
        </div>
      </HTMLContainer>
    );
  }

  indicator(shape: CardShape) {
    return <rect width={shape.props.w} height={shape.props.h} />;
  }

  async toSvg(shape: CardShape) {
    const el = document.querySelector(`div[data-shape-id="${shape.id}"]`);
    if (!el) return <img src="" alt="svg" />;
    return await domtoimage.toPng(el).then(function (dataUrl) {
      return <img src={dataUrl} alt="svg" />;
    });
  }
}
