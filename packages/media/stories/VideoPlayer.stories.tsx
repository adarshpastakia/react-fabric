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

import { faker } from "@faker-js/faker";
import {
  Aside,
  Button,
  Callout,
  Content,
  Footer,
  Icon,
  Menu,
  MenuItem,
  Modal,
  ModalProps,
  Section,
  Tab,
  TabPanel,
  useContextMenu,
  useOverlayService,
  Viewport,
} from "@react-fabric/core";
import {
  ArrayInput,
  ColorInput,
  Controller,
  Form,
  Radio,
  RadioGroup,
  Select,
  Slider,
  Switch,
  Textarea,
} from "@react-fabric/form";
import type { Meta, StoryObj } from "@storybook/react";
import classNames from "classnames";
import { useMemo, useRef, useState } from "react";
import { fn } from "storybook/test";
import { VideoAnnotations, VideoAnnotationShape, VideoPlayer, VideoPlayerRef } from "../src";
import { textshape, videoshape } from "./workaround";
import largeVideo from "/assets/samples/large_video.mp4";
import sampleVideo from "/assets/samples/sample.mp4";
import vtt from "/assets/samples/sample.vtt";
import smallVideo from "/assets/samples/small_video.mp4";

const meta: Meta = {
  component: VideoPlayer,
  subcomponents: { VideoAnnotationShape: videoshape, TextShape: textshape },
  title: "@media/VideoPlayer",
  parameters: {
    layout: "fullscreen",
    controls: { exclude: "children" },
  },
};

export default meta;
type Story = StoryObj<typeof VideoPlayer>;

const ShapeEditor = ({
  width,
  height,
  value = {
    type: "rect",
    timestamps: [],
  } as VideoAnnotationShape,
  onClose,
}: ModalProps<{
  width: number;
  height: number;
  value: VideoAnnotationShape;
}>) => {
  return (
    <Modal onClose={onClose}>
      <Form defaultValues={value} onSubmit={(model) => onClose(model)}>
        <Content>
          <div className="flex flex-col flex-1">
            <Controller name={`type`}>
              <Select options={["rect", "ellipse"]} />
            </Controller>
            <Controller name={`fill`}>
              <ColorInput label="Shape Fill" allowClear />
            </Controller>
            <Controller name={`stroke`}>
              <ColorInput label="Shape Stroke" allowClear />
            </Controller>
            <Controller name={`strokeWidth`}>
              <Slider label="Shape Stroke" min={0} max={5} showValue />
            </Controller>
          </div>
        </Content>
        <Footer flex justify="end" className="px-2 py-1">
          <Button size="sm" variant="soft" color="primary" type="submit">
            Update
          </Button>
        </Footer>
      </Form>
    </Modal>
  );
};

const markers: [number, number][] = new Array(300).fill([]).map((_, i) => [Math.random() * 600.5, Math.random()]);

let x = 0;
const timestamps = faker.helpers.uniqueArray(
  () => ({
    x: faker.number.int({ min: 0, max: 100 }),
    y: faker.number.int({ min: 0, max: 100 }),
    width: faker.number.int({ min: 100, max: 250 }),
    height: faker.number.int({ min: 100, max: 250 }),
    time: x++ * 0.5,
  }),
  60,
);

export const Playground: Story = {
  render: (args) => {
    const videoRef = useRef<VideoPlayerRef>(null);
    const [src, setSrc] = useState(sampleVideo);
    const [nsfw, setNsfw] = useState(false);
    const [nsfwMessage, setNsfwMessage] = useState<string | null>("This video is marked as NSFW");
    const [nsfwTrigger, setNsfwTrigger] = useState<"hover" | "click">("hover");
    const [debugInfo, setDebugInfo] = useState<any>(null);

    const posterUrl = useMemo(() => faker.image.url({ width: 1080, height: 720 }), []);

    const [exportSrc, setExport] = useState<string | null>("");

    const [ContextMenu, onContextMenu] = useContextMenu(
      <Menu>
        <MenuItem label="Export Frame" onClick={() => setExport(videoRef.current?.export() ?? null)} />
        <MenuItem
          label="Export Crop"
          onClick={() => setExport(videoRef.current?.crop({ x: 10, y: 10, width: 100, height: 100 }) ?? null)}
        />
      </Menu>,
    );

    const [comments, setComments] = useState<AnyObject>([
      [2.49, "Testing"],
      [18.24, "Testing"],
    ]);

    const [annotate, setAnnotate] = useState(false);
    const [annotations, setAnnotations] = useState({
      fill: faker.color.rgb({ includeAlpha: true }),
      shapes: faker.helpers.uniqueArray(
        () => ({
          type: "rect",
          timestamps,
          fill: faker.color.rgb({ includeAlpha: true }),
          stroke: faker.color.rgb(),
          strokeWidth: faker.number.int({ min: 1, max: 5 }),
          textTop: {
            text: faker.word.sample(),
            fontSize: faker.number.int({ min: 12, max: 24 }),
            color: faker.color.rgb(),
            fill: faker.color.rgb(),
          },
          textBottom: {
            text: faker.word.sample(),
            fontSize: faker.number.int({ min: 12, max: 24 }),
            color: faker.color.rgb(),
            fill: faker.color.rgb(),
          },
        }),
        1,
      ),
    } as VideoAnnotations);

    const [ShapeEditorModal, openShapeEditor] = useOverlayService(ShapeEditor);

    return (
      <div className="min-h-150">
        <Viewport>
          <Section className="relative">
            <VideoPlayer
              src={src}
              ref={videoRef}
              vttText={vtt}
              poster={posterUrl}
              onDebug={setDebugInfo}
              onExport={setExport}
              onCrop={setExport}
              onCut={args.onCut}
              comments={comments}
              markers={markers}
              onCommentChange={setComments}
              onTimeChange={args.onTimeChange}
              nsfw={
                nsfw && {
                  message: nsfwMessage ?? "",
                  trigger: nsfwTrigger,
                }
              }
              annotations={annotate ? annotations : undefined}
              onContextMenu={onContextMenu}
            />

            {exportSrc && (
              <div
                className="bg-black/50 backdrop-blur-sm absolute inset-0 overflow-hidden p-8 grid grid-cols-1 grid-rows-1 place-items-center"
                onClick={() => setExport(null)}
              >
                <img
                  className="object-contain max-w-full max-h-full outline outline-tint-500 shadow-lg bg-black"
                  src={exportSrc}
                  alt="Exported"
                />
              </div>
            )}
            {ContextMenu}
          </Section>
          <Aside align="end">
            <TabPanel orientation="end" activeTab="basic">
              <Tab id="basic" icon="icon-[mdi--image]" tooltip="Basic options">
                <Section className="text-sm">
                  <Content>
                    <Callout legend="Video Source">
                      <p className="break-all">{src}</p>
                      <RadioGroup onChange={setSrc} name="src" value={src} vertical>
                        <Radio value={sampleVideo} label="Sample Video" />
                        <Radio value={smallVideo} label="Small Video" />
                        <Radio value={largeVideo} label="Large Video" />
                        <Radio
                          value="https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_640x360.m4v"
                          label="Big Bunny"
                        />
                      </RadioGroup>
                    </Callout>
                    <Callout legend="Toggle NSFW">
                      <Switch onChange={setNsfw} checked={nsfw} />
                      {nsfw && (
                        <>
                          <Textarea allowClear label="Message" value={nsfwMessage} onChange={setNsfwMessage} />
                          <RadioGroup value={nsfwTrigger} onChange={setNsfwTrigger}>
                            <Radio value="hover" label="Hover" />
                            <Radio value="click" label="Click" />
                          </RadioGroup>
                        </>
                      )}
                    </Callout>
                  </Content>
                  <Footer className="p-4">
                    <p>Debug Info</p>
                    <pre className="text-xs">{JSON.stringify(debugInfo, null, 2)}</pre>
                  </Footer>
                </Section>
              </Tab>
              <Tab id="annotate" icon="icon-[mdi--select-all]" tooltip="Annotate options">
                <Content className="flex flex-col gap-2">
                  <Switch onChange={setAnnotate} checked={annotate} label="Toggle Annotations" />
                  {annotate && (
                    <Form defaultValues={annotations} onChange={setAnnotations}>
                      <Controller name="fill">
                        <ColorInput label="Bg Fill" allowClear />
                      </Controller>

                      <ArrayInput<VideoAnnotationShape> name="shapes" label="Shapes" onAdd={() => openShapeEditor()}>
                        {({ item, index, onChange }) => (
                          <div className="flex gap-1 items-center flex-1">
                            <div
                              className={classNames(
                                "w-16 h-6 border-2 flex items-center justify-center group cursor-pointer",
                                item.type === "ellipse" ? "rounded-full" : "",
                              )}
                              style={{
                                backgroundColor: item.fill,
                                borderColor: item.stroke,
                              }}
                              onClick={() =>
                                openShapeEditor({
                                  value: item,
                                }).then(onChange)
                              }
                            >
                              <Icon icon="icon-[mdi--pencil]" className="hidden group-hover:inline-block" />
                            </div>
                            <span>Shape #{index + 1}</span>
                          </div>
                        )}
                      </ArrayInput>
                    </Form>
                  )}
                </Content>
              </Tab>
              <Tab id="editor" icon="icon-[mdi--draw]" tooltip="Editor options">
                <Content>Editor options</Content>
              </Tab>
            </TabPanel>
          </Aside>

          <ShapeEditorModal width={debugInfo?.originalSize[0]} height={debugInfo?.originalSize[1]} />
        </Viewport>
      </div>
    );
  },
  args: {
    onTimeChange: fn(),
    onCut: fn(),
  },
};
