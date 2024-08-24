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
  Button,
  ButtonGroup,
  Card,
  Col,
  Header,
  Row,
  Section,
  Skeleton,
  Text,
  Title,
  Viewport,
} from "@react-fabric/core";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Fragment, useCallback, useEffect, useRef, useState } from "react";
import { VirtualGallery, VirtualGalleryRef } from "../src";

const meta: Meta<typeof VirtualGallery> = {
  component: VirtualGallery,
  title: "@data/Virtual/Gallery",
  parameters: {
    layout: "fullscreen",
    controls: { exclude: "data" },
  },
};

export default meta;
type Story = StoryObj<typeof VirtualGallery>;

const count = 50;
const lorem = faker.lorem.paragraph();
export const Gallery: Story = {
  render: (args) => {
    const listRef = useRef<VirtualGalleryRef>();
    const [isLoading, setLoading] = useState(false);
    const [recordCount, setCount] = useState(50);

    const loadMore = useCallback(() => {
      setLoading(true);
      setTimeout(() => {
        setCount(count + recordCount);
        setLoading(false);
      }, 200);
    }, [recordCount, count]);
    return (
      <div className="min-h-[600px]">
        <Viewport>
          <Section>
            <Header flex bg="base" className="gap-2 p-2">
              <Button onClick={() => listRef.current?.scrollToItem(8)}>
                ScrollTo #9
              </Button>
              <Button onClick={() => listRef.current?.scrollToItem(12)}>
                ScrollTo #13
              </Button>
              <Button onClick={() => listRef.current?.hilight(1)}>
                Hilight #2
              </Button>
              <Button onClick={() => listRef.current?.hilight(2)}>
                Hilight #3
              </Button>
            </Header>
            <VirtualGallery
              {...args}
              galleryRef={listRef}
              defaultWidth={480}
              defaultHeight={176}
              items={new Array(recordCount).fill(true)}
              onLoadMore={loadMore}
              loading={isLoading}
            >
              {({ data, index }) =>
                data && (
                  <div className="w-[480px] flex flex-nowrap gap-1 py-2 px-4">
                    <Card bodyClassName="p-2 flex-1">
                      <Header>
                        <Title>List item {index + 1}</Title>
                      </Header>
                      <Row>
                        <Col flex="auto">
                          <img
                            loading="lazy"
                            className="border-4 bg-bw-500/50 border-bw-500 object-contain h-24 w-32"
                            src={`https://picsum.photos/id/${index}/192/108`}
                          />
                        </Col>
                        <Col flex="fill">
                          <Text clamp={3}>{lorem}</Text>
                        </Col>
                      </Row>
                    </Card>
                    <ButtonGroup vertical variant="link" className="self-start">
                      <Button
                        aria-label="plus"
                        variant="link"
                        icon="mdi mdi-plus"
                      />
                      <Button
                        aria-label="minus"
                        variant="link"
                        icon="mdi mdi-minus"
                      />
                    </ButtonGroup>
                  </div>
                )
              }
            </VirtualGallery>
          </Section>
        </Viewport>
      </div>
    );
  },
  args: {
    onScroll: fn(),
  },
};

export const LoadableList: Story = {
  render: (args) => {
    const listRef = useRef<VirtualGalleryRef>();
    const [isLoading, setLoading] = useState(false);
    const [items, setItems] = useState<AnyObject[]>([]);

    const loadMore = useCallback(
      (idx?: number) => {
        setLoading(true);
        setTimeout(() => {
          if (idx === undefined)
            setItems([...items, ...new Array(count).fill(true)]);

          if (idx !== undefined) {
            const page = Math.floor(idx / count);
            const nextpage = Math.ceil(idx / count);
            const newList = [...items];
            newList.splice(page * count, count, ...new Array(count).fill(true));
            if (newList[nextpage * count] === null)
              newList.splice(
                nextpage * count,
                count,
                ...new Array(count).fill(true),
              );
            setItems(newList);
          }
          setLoading(false);
        }, 200);
      },
      [items],
    );

    useEffect(() => {
      const items = new Array(150).fill(null);
      for (var idx = 100; idx < 150; idx++) items[idx] = true;
      setItems(items);
    }, []);

    return (
      <div className="min-h-[600px]">
        <Viewport>
          <Section>
            <Header flex bg="base" className="gap-2 p-2">
              <Button onClick={() => listRef.current?.scrollToItem(8)}>
                ScrollTo #9
              </Button>
              <Button onClick={() => listRef.current?.scrollToItem(12)}>
                ScrollTo #13
              </Button>
              <Button onClick={() => listRef.current?.hilight(1)}>
                Hilight #2
              </Button>
              <Button onClick={() => listRef.current?.hilight(2)}>
                Hilight #3
              </Button>
            </Header>
            <VirtualGallery
              {...args}
              galleryRef={listRef}
              defaultHeight={152}
              defaultWidth={608}
              loading={isLoading}
              items={items}
              initialScroll={100}
              onLoadMore={loadMore}
            >
              {({ data, index }) => (
                <div className="w-[620px] flex flex-nowrap gap-1 py-2 px-4">
                  {data && (
                    <Fragment>
                      <Card bodyClassName="p-2 flex-1">
                        <Header>
                          <Title>List item {index + 1}</Title>
                        </Header>
                        <Row>
                          <Col flex="auto">
                            <img
                              loading="lazy"
                              className="border-4 bg-bw-500/50 border-bw-500 object-contain h-24 w-32"
                              src={`https://picsum.photos/id/${index}/192/108`}
                            />
                          </Col>
                          <Col flex="fill">
                            <Text clamp={3}>{lorem}</Text>
                          </Col>
                        </Row>
                      </Card>
                      <ButtonGroup
                        vertical
                        variant="link"
                        className="self-start"
                      >
                        <Button
                          aria-label="plus"
                          variant="link"
                          icon="mdi mdi-plus"
                        />
                        <Button
                          aria-label="minus"
                          variant="link"
                          icon="mdi mdi-minus"
                        />
                      </ButtonGroup>
                    </Fragment>
                  )}
                  {!data && (
                    <div className="flex-1">
                      <Skeleton />
                    </div>
                  )}
                </div>
              )}
            </VirtualGallery>
          </Section>
        </Viewport>
      </div>
    );
  },
  args: {},
};
