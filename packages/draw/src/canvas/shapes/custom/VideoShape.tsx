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

/* eslint-disable jsx-a11y/media-has-caption */

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
import { useEffect, useRef } from "react";

type VideoShape = TLBaseShape<
  "video-card",
  {
    w: number;
    h: number;
    src: string;
    poster: string;
    fileName: string;
    fileSize: number;
  }
>;

export class VideoShapeUtil extends ShapeUtil<VideoShape> {
  static override type = "video-card" as const;
  containerRef?: HTMLElement;

  onResize(
    shape: VideoShape,
    info: TLResizeInfo<VideoShape>,
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
                poster: string;
                fileName: string;
                fileSize: number;
              }>
            | undefined;
          type: "video-card";
        } & Partial<Omit<VideoShape, "props" | "type" | "id" | "meta">>,
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

  getDefaultProps(): VideoShape["props"] {
    return {
      src: "",
      poster: "",
      fileName: "",
      fileSize: 0,
      w: 400,
      h: 300,
    };
  }

  getGeometry(shape: VideoShape) {
    return new Rectangle2d({
      width: shape.props.w,
      height: shape.props.h,
      isFilled: true,
    });
  }

  component(shape: VideoShape) {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
      const handler = () => {
        videoRef.current
          ?.closest(".tl-container")
          ?.querySelectorAll<HTMLMediaElement>("video,audio")
          .forEach((el) => {
            if (el !== videoRef.current) el.pause();
          });
      };
      videoRef.current?.addEventListener("play", handler);
    }, []);

    return (
      <HTMLContainer className="relative grid">
        <div
          data-shape-id={shape.id}
          className="bg-zinc-900 relative p-1 flex flex-col overflow-hidden"
        >
          <video
            controls
            ref={videoRef}
            src={shape.props.src}
            poster={shape.props.poster}
            className="object-contain flex-1 pointer-events-auto overflow-hidden"
          />
          <img
            src={shape.props.poster}
            alt={shape.props.fileName}
            className="object-contain flex-1 pointer-events-auto overflow-hidden hidden"
          />
          <div className="bg-zinc-800/80 text-white items-center py-1 px-2 flex gap-1 text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={16}
              height={16}
            >
              <path d="M17,10.5V7A1,1 0 0,0 16,6H4A1,1 0 0,0 3,7V17A1,1 0 0,0 4,18H16A1,1 0 0,0 17,17V13.5L21,17.5V6.5L17,10.5Z" />
            </svg>
            <div className="truncate flex-1">{shape.props.fileName}</div>
            <div>{Format.bytes(shape.props.fileSize ?? 0)}</div>
          </div>
        </div>
      </HTMLContainer>
    );
  }

  indicator(shape: VideoShape) {
    return <rect width={shape.props.w} height={shape.props.h} />;
  }

  async toSvg(shape: VideoShape) {
    const el = document.querySelector(`div[data-shape-id="${shape.id}"]`);
    if (!el) return <img src="" alt="svg" />;
    (el.childNodes.item(0) as HTMLElement).style.display = "none";
    (el.childNodes.item(1) as HTMLElement).style.display = "block";
    return await domtoimage.toPng(el).then(function (dataUrl) {
      (el.childNodes.item(0) as HTMLElement).style.display = "block";
      (el.childNodes.item(1) as HTMLElement).style.display = "none";
      return <img src={dataUrl} alt="svg" />;
    });
  }
}
