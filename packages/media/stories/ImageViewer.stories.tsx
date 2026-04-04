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
import { useRef, useState } from "react";
import { ImageAnnotations, ImageAnnotationShape, ImageViewer, ImageViewerRef } from "../src";
import { imageshape, textshape } from "./workaround";

const meta: Meta = {
  component: ImageViewer,
  subcomponents: { ImageAnnotationShape: imageshape, TextShape: textshape },
  title: "@media/ImageViewer",
  parameters: {
    layout: "fullscreen",
    controls: { exclude: "children" },
  },
};

export default meta;
type Story = StoryObj<typeof ImageViewer>;

const ShapeEditor = ({
  width,
  height,
  value = {
    type: "rect",
    width: 100,
    height: 100,
    x: 0,
    y: 0,
  } as ImageAnnotationShape,
  onClose,
}: ModalProps<{
  width: number;
  height: number;
  value: ImageAnnotationShape;
}>) => {
  return (
    <Modal onClose={onClose}>
      <Form defaultValues={value} onSubmit={(model) => onClose(model)}>
        <Content>
          <div className="flex flex-col flex-1">
            <Controller name={`type`}>
              <Select options={["rect", "ellipse"]} />
            </Controller>
            <Controller name={`x`}>
              <Slider inline labelWidth="2rem" label="X" min={0} max={width} showValue />
            </Controller>
            <Controller name={`y`}>
              <Slider inline labelWidth="2rem" label="Y" min={0} max={height} showValue />
            </Controller>
            <Controller name={`width`}>
              <Slider inline labelWidth="2rem" label="Width" min={100} max={width} showValue />
            </Controller>
            <Controller name={`height`}>
              <Slider inline labelWidth="2rem" label="Height" min={100} max={height} showValue />
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

export const Playground: Story = {
  render: (args) => {
    const imageRef = useRef<ImageViewerRef>(null);
    const [src, setSrc] = useState(
      "https://fastly.picsum.photos/id/88/1265/896.jpg?hmac=kZSw_Rfdjsa7ZPOei0Votn89lvyD7lax3Uli_PegGYM",
      // faker.image.url({
      //   width: faker.number.int({ min: 800, max: 1800 }),
      //   height: faker.number.int({ min: 600, max: 1200 }),
      // }),
    );
    const [nsfw, setNsfw] = useState(false);
    const [nsfwMessage, setNsfwMessage] = useState<string | null>("This image is marked as NSFW");
    const [nsfwTrigger, setNsfwTrigger] = useState<"hover" | "click">("hover");
    const [debugInfo, setDebugInfo] = useState<any>(null);

    const [exportSrc, setExport] = useState<string | null>("");

    const [ContextMenu, onContextMenu] = useContextMenu(
      <Menu>
        <MenuItem label="Export Frame" onClick={() => setExport(imageRef.current?.export() ?? null)} />
        <MenuItem
          label="Export Crop"
          onClick={() => setExport(imageRef.current?.crop({ x: 10, y: 10, width: 100, height: 100 }) ?? null)}
        />
      </Menu>,
    );

    const [overlay, setOverlay] = useState(false);
    const [overlaySrc, setOverlaySrc] = useState(
      faker.image.url({
        width: faker.number.int({ min: 800, max: 1800 }),
        height: faker.number.int({ min: 600, max: 1200 }),
      }),
    );

    const [annotate, setAnnotate] = useState(false);
    const [annotations, setAnnotations] = useState({
      fill: faker.color.rgb({ includeAlpha: true }),
      shapes: faker.helpers.uniqueArray(
        () => ({
          type: "rect",
          x: faker.number.int({ min: 0, max: 100 }),
          y: faker.number.int({ min: 0, max: 100 }),
          width: faker.number.int({ min: 100, max: 250 }),
          height: faker.number.int({ min: 100, max: 250 }),
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
    } as ImageAnnotations);

    const [ShapeEditorModal, openShapeEditor] = useOverlayService(ShapeEditor);

    return (
      <div className="min-h-150">
        <Viewport>
          <Section className="relative">
            <ImageViewer
              src={src}
              ref={imageRef}
              compareWith={overlay ? overlaySrc : undefined}
              onDebug={setDebugInfo}
              onExport={setExport}
              onCrop={setExport}
              onContextMenu={onContextMenu}
              nsfw={
                nsfw && {
                  message: nsfwMessage ?? "",
                  trigger: nsfwTrigger,
                }
              }
              annotations={annotate ? annotations : undefined}
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
                    <Callout legend="Image Source">
                      <p className="break-all">{src}</p>
                      <div className="flex justify-end">
                        <Button
                          size="sm"
                          variant="soft"
                          color="primary"
                          onClick={() =>
                            setSrc(
                              faker.image.url({
                                width: faker.number.int({
                                  min: 800,
                                  max: 1800,
                                }),
                                height: faker.number.int({
                                  min: 600,
                                  max: 1200,
                                }),
                              }),
                            )
                          }
                        >
                          Refresh
                        </Button>
                      </div>
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
              <Tab id="overlay" icon="icon-[mdi--select-compare]" tooltip="Overlay options">
                <Content>
                  <Callout legend="Toggle Overlay">
                    <Switch onChange={setOverlay} checked={overlay} />
                    {overlay && (
                      <>
                        <p className="break-all">{overlaySrc}</p>
                        <div className="flex justify-end">
                          <Button
                            size="sm"
                            variant="soft"
                            color="primary"
                            onClick={() =>
                              setOverlaySrc(
                                faker.image.url({
                                  width: faker.number.int({
                                    min: 800,
                                    max: 1800,
                                  }),
                                  height: faker.number.int({
                                    min: 600,
                                    max: 1200,
                                  }),
                                }),
                              )
                            }
                          >
                            Refresh
                          </Button>
                        </div>
                      </>
                    )}
                  </Callout>
                </Content>
              </Tab>
              <Tab id="annotate" icon="icon-[mdi--select-all]" tooltip="Annotate options">
                <Content className="flex flex-col gap-2">
                  <Switch onChange={setAnnotate} checked={annotate} label="Toggle Annotations" />
                  {annotate && (
                    <Form defaultValues={annotations} onChange={setAnnotations}>
                      <Controller name="fill">
                        <ColorInput label="Bg Fill" allowClear />
                      </Controller>

                      <ArrayInput<ImageAnnotationShape> name="shapes" label="Shapes" onAdd={() => openShapeEditor()}>
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
  args: {},
};
