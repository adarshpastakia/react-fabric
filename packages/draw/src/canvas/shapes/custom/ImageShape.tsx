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

import { Format } from "@react-fabric/utilities";
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

type ImageShape = TLBaseShape<
  "image-card",
  {
    w: number;
    h: number;
    src: string;
    fileName: string;
    fileSize: number;
  }
>;

export class ImageShapeUtil extends ShapeUtil<ImageShape> {
  static override type = "image-card" as const;

  onResize(
    shape: ImageShape,
    info: TLResizeInfo<ImageShape>,
  ):
    | Omit<
        {
          id: TLShapeId;
          meta?: Partial<JsonObject> | undefined;
          props?:
            | Partial<{
                w: number;
                h: number;
                src: string;
                fileName: string;
                fileSize: number;
              }>
            | undefined;
          type: "image-card";
        } & Partial<Omit<ImageShape, "props" | "type" | "id" | "meta">>,
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

  getDefaultProps(): ImageShape["props"] {
    return {
      src: "",
      fileName: "",
      fileSize: 0,
      w: 400,
      h: 300,
    };
  }

  getGeometry(shape: ImageShape) {
    return new Rectangle2d({
      width: shape.props.w,
      height: shape.props.h,
      isFilled: true,
    });
  }

  component(shape: ImageShape) {
    return (
      <HTMLContainer className="relative grid">
        <div
          data-shape-id={shape.id}
          className="bg-zinc-900 relative p-1 flex flex-col overflow-hidden"
        >
          <img
            src={shape.props.src}
            alt={shape.props.fileName}
            className="object-contain flex-1 pointer-events-none overflow-hidden"
          />
          <div className="bg-zinc-800/80 text-white items-center py-1 px-2 flex gap-1 text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={16}
              height={16}
            >
              <path d="M4,4H7L9,2H15L17,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9Z" />
            </svg>
            <div className="truncate flex-1">{shape.props.fileName}</div>
            <div>{Format.bytes(shape.props.fileSize ?? 0)}</div>
          </div>
        </div>
      </HTMLContainer>
    );
  }

  indicator(shape: ImageShape) {
    return <rect width={shape.props.w} height={shape.props.h} />;
  }

  async toSvg(shape: ImageShape) {
    const el = document.querySelector(`div[data-shape-id="${shape.id}"]`);
    if (!el) return <img src="" alt="svg" />;
    return await domtoimage.toPng(el).then(function (dataUrl) {
      return <img src={dataUrl} alt="svg" />;
    });
  }
}
