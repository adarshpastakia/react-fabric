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
import {
  DefaultToolbar,
  DefaultToolbarContent,
  getSnapshot,
  loadSnapshot,
  Tldraw,
  TldrawUiMenuItem,
  useIsToolSelected,
  useTools,
  type Editor,
  type TLEditorSnapshot,
  type TLUiAssetUrlOverrides,
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
  type Ref,
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

const customAssetUrls: TLUiAssetUrlOverrides = {
  icons: {
    avatar:
      "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiPgo8cGF0aCBkPSJNMjIuOCAyMi44di0yLjRjMC0xLjY1Ni0wLjY3My0zLjE1OC0xLjc1Ny00LjI0M3MtMi41ODctMS43NTctNC4yNDMtMS43NTdoLTkuNmMtMS42NTYgMC0zLjE1OCAwLjY3My00LjI0MyAxLjc1N3MtMS43NTcgMi41ODctMS43NTcgNC4yNDN2Mi40YzAgMC42NjIgMC41MzggMS4yIDEuMiAxLjJzMS4yLTAuNTM4IDEuMi0xLjJ2LTIuNGMwLTAuOTk1IDAuNDAyLTEuODkyIDEuMDU1LTIuNTQ1czEuNTUtMS4wNTUgMi41NDUtMS4wNTVoOS42YzAuOTk1IDAgMS44OTIgMC40MDIgMi41NDUgMS4wNTVzMS4wNTUgMS41NSAxLjA1NSAyLjU0NXYyLjRjMCAwLjY2MiAwLjUzOCAxLjIgMS4yIDEuMnMxLjItMC41MzggMS4yLTEuMnpNMTggNmMwLTEuNjU2LTAuNjczLTMuMTU4LTEuNzU3LTQuMjQzcy0yLjU4Ny0xLjc1Ny00LjI0My0xLjc1Ny0zLjE1OCAwLjY3My00LjI0MyAxLjc1Ny0xLjc1NyAyLjU4Ny0xLjc1NyA0LjI0MyAwLjY3MyAzLjE1OCAxLjc1NyA0LjI0MyAyLjU4NyAxLjc1NyA0LjI0MyAxLjc1NyAzLjE1OC0wLjY3MyA0LjI0My0xLjc1NyAxLjc1Ny0yLjU4NyAxLjc1Ny00LjI0M3pNMTUuNiA2YzAgMC45OTUtMC40MDIgMS44OTItMS4wNTUgMi41NDVzLTEuNTUgMS4wNTUtMi41NDUgMS4wNTUtMS44OTItMC40MDItMi41NDUtMS4wNTUtMS4wNTUtMS41NS0xLjA1NS0yLjU0NSAwLjQwMi0xLjg5MiAxLjA1NS0yLjU0NSAxLjU1LTEuMDU1IDIuNTQ1LTEuMDU1IDEuODkyIDAuNDAyIDIuNTQ1IDEuMDU1IDEuMDU1IDEuNTUgMS4wNTUgMi41NDV6Ij48L3BhdGg+Cjwvc3ZnPgo=",
  },
};

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
  canvasRef?: Ref<{ exportPages: () => Promise<KeyValue[]> }>;
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
    const handler = debounce(() => {
      editorRef && onUpdate?.(getSnapshot(editorRef.store));
    }, 500);
    editorRef?.sideEffects.registerAfterChangeHandler("shape", handler);
    editorRef?.sideEffects.registerAfterCreateHandler("shape", handler);
    editorRef?.sideEffects.registerAfterDeleteHandler("shape", handler);

    return () => {
      //
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
        assetUrls={customAssetUrls}
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
        components={{
          Toolbar: (props) => {
            const tools = useTools();
            const isAvatarSelected = useIsToolSelected(tools.avatar);
            return (
              <DefaultToolbar {...props}>
                <DefaultToolbarContent />
                <TldrawUiMenuItem
                  {...tools.avatar}
                  isSelected={isAvatarSelected}
                />
              </DefaultToolbar>
            );
          },
        }}
        overrides={{
          translations: {
            en: {
              "tool.avatar": "Avatar",
            },
          },
          tools(editor, schema) {
            schema.avatar = {
              id: "avatar",
              label: "tool.avatar" as AnyObject,
              readonlyOk: false,
              icon: "avatar",
              onSelect() {
                editor.setCurrentTool("avatar");
              },
            };
            return { ...schema };
          },
          actions(editor, schema) {
            delete schema["insert-embed"];
            delete schema["insert-media"];
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
          data-ref="drawCanvas"
        >
          {TLDraw}
        </div>
      </Section>
    </DrawContextProvider>
  );
};
