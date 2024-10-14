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
  Rectangle2d,
  ShapeUtil,
  type TLBaseShape,
} from "@tldraw/tldraw";
import domtoimage from "dom-to-image";

type FileShape = TLBaseShape<
  "file-card",
  {
    icon: string;
    fileType: string;
    fileName: string;
    fileSize: number;
  }
>;

export class FileShapeUtil extends ShapeUtil<FileShape> {
  static override type = "file-card" as const;
  containerRef?: HTMLElement;

  canResize = () => false;

  getDefaultProps(): FileShape["props"] {
    return {
      icon: "",
      fileType: "",
      fileName: "",
      fileSize: 0,
    };
  }

  getGeometry(shape: FileShape) {
    return new Rectangle2d({
      width: 320,
      height: 72,
      isFilled: true,
    });
  }

  component(shape: FileShape) {
    return (
      <HTMLContainer className="relative grid">
        <div
          data-shape-id={shape.id}
          className="relative p-1 flex border rounded m-1 overflow-hidden"
        >
          <img
            src={shape.props.icon}
            alt={shape.props.fileType}
            className="object-contain pointer-events-none overflow-hidden w-12 h-12"
          />
          <div className="flex-1 overflow-hidden text-sm py-1 px-2">
            <div className="items-center flex gap-1">
              <div className="truncate flex-1">{shape.props.fileName}</div>
              <div>{Format.bytes(shape.props.fileSize ?? 0)}</div>
            </div>
            <div>{shape.props.fileType}</div>
          </div>
        </div>
      </HTMLContainer>
    );
  }

  indicator(shape: FileShape) {
    return <rect />;
  }

  async toSvg(shape: FileShape) {
    const el = document.querySelector(`div[data-shape-id="${shape.id}"]`);
    if (!el) return <img src="" alt="svg" />;
    return await domtoimage.toPng(el).then(function (dataUrl) {
      return <img src={dataUrl} alt="svg" />;
    });
  }
}
