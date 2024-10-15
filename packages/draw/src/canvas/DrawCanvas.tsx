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

import { Section, useIsDark } from "@react-fabric/core";
import { debounce } from "@react-fabric/utilities";
import { getAssetUrlsByMetaUrl } from "@tldraw/assets/urls";
import {
  getSnapshot,
  loadSnapshot,
  Tldraw,
  type Editor,
  type TLEditorSnapshot,
} from "@tldraw/tldraw";
import "@tldraw/tldraw/tldraw.css";
import {
  useCallback,
  useEffect,
  useImperativeHandle,
  useLayoutEffect,
  useMemo,
  useState,
  type DragEvent,
  type FC,
  type RefObject,
} from "react";
import { DrawContextProvider } from "./DrawContext";
import {
  AvatarShapeTool,
  AvatarShapeUtil,
} from "./shapes/avatar/AvatarShapeTool";
import { AudioShapeUtil } from "./shapes/custom/AudioShape";
import { CardShapeUtil } from "./shapes/custom/CardShape";
import { FileShapeUtil } from "./shapes/custom/FileShape";
import { ImageShapeUtil } from "./shapes/custom/ImageShape";
import { VideoShapeUtil } from "./shapes/custom/VideoShape";

export async function getSvgAsDataUrl(svg: SVGElement) {
  const clone = svg.cloneNode(true) as SVGGraphicsElement;
  clone.setAttribute("encoding", 'UTF-8"');

  const fileReader = new FileReader();
  const imgs = Array.from(clone.querySelectorAll("image"));

  for (const img of imgs) {
    const src = img.getAttribute("xlink:href");
    if (src) {
      if (!src.startsWith("data:")) {
        const blob = await (await fetch(src)).blob();
        const base64 = await new Promise<string>((resolve, reject) => {
          fileReader.onload = () => resolve(fileReader.result as string);
          fileReader.onerror = () => reject(fileReader.error);
          fileReader.readAsDataURL(blob);
        });
        img.setAttribute("xlink:href", base64);
      }
    }
  }

  const svgStr = new XMLSerializer().serializeToString(clone);
  // NOTE: `unescape` works everywhere although deprecated
  const base64SVG =
    typeof window !== "undefined"
      ? window.btoa(unescape(encodeURIComponent(svgStr)))
      : "";
  return `data:image/svg+xml;base64,${base64SVG}`;
}

export interface DrawProps {
  snapshot?: TLEditorSnapshot;
  onUpdate?: (snapshot: TLEditorSnapshot) => void;
  renderer?: (props: KeyValue) => AnyObject;
  canvasRef?: RefObject<{ exportPages: () => Promise<KeyValue[]> }>;
}

const TypeMap: KeyValue = {
  image: "image-card",
  video: "video-card",
  audio: "audio-card",
  file: "file-card",
  card: "data-card",
};

export const DrawCanvas: FC<DrawProps> = ({
  snapshot,
  renderer,
  onUpdate,
  canvasRef,
}) => {
  const [editorRef, setEditor] = useState<Editor>();
  const isDark = useIsDark();

  useEffect(() => {
    editorRef?.user.updateUserPreferences({
      colorScheme: isDark ? "dark" : "light",
    });
  }, [editorRef, isDark]);

  useEffect(() => {
    editorRef?.addListener(
      "update",
      debounce(() => onUpdate?.(getSnapshot(editorRef.store)), 500),
    );

    return () => {
      editorRef?.removeListener("update");
    };
  }, [editorRef]);

  useLayoutEffect(() => {
    setTimeout(() => {
      editorRef?.store && snapshot && loadSnapshot(editorRef.store, snapshot);
    }, 500);
  }, [editorRef, snapshot]);

  const handleDragOver = useCallback((e: DragEvent) => {
    if (!e.dataTransfer.getData("react-fabric/canvas")) {
      e.preventDefault();
      return false;
    }
    return true;
  }, []);

  const handleDrop = useCallback(
    (e: DragEvent) => {
      const data = e.dataTransfer.getData("react-fabric/canvas");
      if (!data) {
        e.preventDefault();
        return false;
      }
      const { type, ...props } = JSON.parse(data);
      if (type in TypeMap) {
        const { x = 0, y = 0 } =
          editorRef?.getContainer().getBoundingClientRect() ?? {};
        editorRef?.createShape({
          type: TypeMap[type],
          x: e.clientX - x,
          y: e.clientY - y,
          props,
        });
      }
      return true;
    },
    [editorRef],
  );

  useImperativeHandle(
    canvasRef,
    () => ({
      exportPages: async () => {
        const currentPage = editorRef?.getCurrentPageId();
        const pages = Object.keys(
          editorRef?.store.getSnapshot().store ?? {},
        ).filter((key) => key.startsWith("page:"));
        const pageSnapshots: KeyValue[] = [];
        while (pages.length) {
          const pg: AnyObject = pages.shift();
          await new Promise((resolve) => {
            editorRef?.addListener("change", () => {
              if (editorRef.getCurrentPageId() === pg) {
                editorRef.removeListener("change");
                resolve(0);
              }
            });
            editorRef?.setCurrentPage(pg);
          });
          const shapes: AnyObject = editorRef?.getCurrentPageShapeIds();
          const svg = await editorRef?.getSvg([...shapes], {
            scale: 1,
            background: true,
          });
          if (svg)
            pageSnapshots.push({
              id: pg,
              name: editorRef?.getCurrentPage().name,
              content: { image: await getSvgAsDataUrl(svg) },
            });
        }
        currentPage && editorRef?.setCurrentPage(currentPage);
        return pageSnapshots;
      },
    }),
    [editorRef],
  );

  const TLDraw = useMemo(
    () => (
      <Tldraw
        assetUrls={getAssetUrlsByMetaUrl()}
        shapeUtils={[
          AvatarShapeUtil,
          AudioShapeUtil,
          ImageShapeUtil,
          VideoShapeUtil,
          CardShapeUtil,
          FileShapeUtil,
        ]}
        tools={[AvatarShapeTool]}
        onMount={setEditor}
        overrides={{
          tools(editor, schema, helpers) {
            schema.avatar = {
              id: "avatar",
              label: "tool.avatar" as AnyObject,
              readonlyOk: false,
              icon: "avatar",
              onSelect() {
                editor.setCurrentTool("avatar");
              },
            };
            return schema;
          },
          actions(editor, schema, helpers) {
            schema["insert-embed"].kbd = "";
            schema["insert-media"].kbd = "";
            return schema;
          },
        }}
      />
    ),
    [],
  );

  return (
    <DrawContextProvider renderer={renderer}>
      <Section>
        <div
          className="absolute inset-0"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          {TLDraw}
        </div>
      </Section>
    </DrawContextProvider>
  );
};
