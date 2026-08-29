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

import { Avatar, Button, ButtonGroup, Card, Col, Header, Layout, Row, Skeleton, Text, Title, Viewport } from "@/core/src";
import { VirtualList, VirtualListRef } from "@/data/src";
import { Countries, Country, cn } from "@/utilities/src";
import { faker } from "@faker-js/faker";
import type { Meta, StoryObj } from "@storybook/react";
import { Fragment, useCallback, useEffect, useRef, useState } from "react";

const meta: Meta = {
  component: VirtualList,
  title: "@data/Virtual/List",
  parameters: {
    layout: "fullscreen",
    controls: { exclude: "items" },
  },
};

export default meta;
type Story = StoryObj<typeof VirtualList>;

export const List: Story = {
  render: (args) => {
    const listRef = useRef<VirtualListRef>(null);

    return (
      <div className="min-h-150">
        <Viewport>
          <Layout>
            <Header flex className="gap-2 p-2 bg-default">
              <Button onClick={() => listRef.current?.scrollToItem(8)}>ScrollTo #9</Button>
              <Button onClick={() => listRef.current?.scrollToItem(12)}>ScrollTo #13</Button>
              <Button onClick={() => listRef.current?.hilight(1)}>Hilight #2</Button>
              <Button onClick={() => listRef.current?.hilight(2)}>Hilight #3</Button>
            </Header>
            <VirtualList<Country> {...(args as any)} listRef={listRef} defaultHeight={152} defaultWidth={608}>
              {({ item, index, isLast }) => (
                <div className="flex flex-nowrap gap-4 p-2">
                  <div
                    className={cn(
                      "flex-content relative",
                      !isLast && "before:absolute before:w-px before:bg-tint-100 before:left-1/2 before:top-4 before:-bottom-4",
                    )}
                  >
                    <Avatar
                      rounded
                      name={item.cca3}
                      fallbackIcon={`iconify-color circle-flags--${item.iconCode}`}
                      size="3rem"
                    />
                  </div>
                  <Card classNames={{ body: "p-2 grid w-120 flex-1" }}>
                    <Row className="text-lg font-semibold" align="center">
                      <Col flex="fill">
                        <Text className="flex-1 px-2">
                          {index} {item.name.common}
                        </Text>
                      </Col>
                      <Col>
                        <Text>&nbsp;{item.flag}</Text>
                      </Col>
                    </Row>
                    <Row justify="between" align="center">
                      <Col>
                        <Text>{item.name.official}</Text>
                      </Col>
                      <Col>
                        <Text className="text-sm text-muted">{item.region}</Text>
                      </Col>
                    </Row>
                    <Row justify="between" align="center">
                      <Col>
                        <Text className="text-sm text-muted">{item.capital}</Text>
                      </Col>
                      <Col>
                        <Text className="text-sm text-muted">
                          {item.cca2}/{item.cca3}
                        </Text>
                      </Col>
                    </Row>
                    <Row justify="between" align="center">
                      <Col>
                        <Text className="text-sm text-muted">{item.phone}</Text>
                      </Col>
                      <Col>
                        <Text className="text-sm text-muted">{item.currency.name}</Text>
                      </Col>
                    </Row>
                  </Card>
                  <ButtonGroup vertical variant="link" className="self-start">
                    <Button aria-label="plus" variant="link" icon="mdi mdi-plus" />
                    <Button aria-label="minus" variant="link" icon="mdi mdi-minus" />
                  </ButtonGroup>
                </div>
              )}
            </VirtualList>
          </Layout>
        </Viewport>
      </div>
    );
  },
  args: {
    items: Countries.list,
  },
};

const count = 20;
const lorem = faker.lorem.paragraph();
export const LoadableList: Story = {
  render: (args) => {
    const listRef = useRef<VirtualListRef>(null);
    const [isLoading, setLoading] = useState(false);
    const [items, setItems] = useState<AnyObject[]>([]);

    const loadMore = useCallback(
      (idx?: number) => {
        setLoading(true);
        setTimeout(() => {
          if (idx === undefined) setItems([...items, ...new Array(count).fill(true)]);

          if (idx !== undefined) {
            const page = Math.floor(idx / count);
            const nextpage = Math.ceil(idx / count);
            const newList = [...items];
            newList.splice(page * count, count, ...new Array(count).fill(true));
            if (newList[nextpage * count] === null) newList.splice(nextpage * count, count, ...new Array(count).fill(true));
            setItems(newList);
          }
          setLoading(false);
        }, 2000);
      },
      [items],
    );

    useEffect(() => {
      const items = new Array(150).fill(null);
      for (var idx = 100; idx < 150; idx++) items[idx] = true;
      setItems(items);
    }, []);

    return (
      <div className="min-h-150">
        <Viewport>
          <Layout>
            <Header flex className="gap-2 p-2 bg-default">
              <Button onClick={() => listRef.current?.scrollToItem(8)}>ScrollTo #9</Button>
              <Button onClick={() => listRef.current?.scrollToItem(12)}>ScrollTo #13</Button>
              <Button onClick={() => listRef.current?.hilight(1)}>Hilight #2</Button>
              <Button onClick={() => listRef.current?.hilight(2)}>Hilight #3</Button>
            </Header>
            <VirtualList
              {...args}
              listRef={listRef}
              defaultHeight={152}
              defaultWidth={608}
              loading={isLoading}
              items={items}
              initialScroll={105}
              onLoadMore={loadMore}
            >
              {({ item, index }) => (
                <div className="w-155 flex flex-nowrap gap-1 p-1">
                  {item && (
                    <Fragment>
                      <Card classNames={{ body: "p-2 flex-1" }}>
                        <Header>
                          <Title>List item {index + 1}</Title>
                        </Header>
                        <Row>
                          <Col flex="content">
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
                        <Button aria-label="plus" variant="link" icon="mdi mdi-plus" />
                        <Button aria-label="minus" variant="link" icon="mdi mdi-minus" />
                      </ButtonGroup>
                    </Fragment>
                  )}
                  {!item && (
                    <div className="flex-1">
                      <Skeleton />
                    </div>
                  )}
                </div>
              )}
            </VirtualList>
          </Layout>
        </Viewport>
      </div>
    );
  },
  args: {
    total: 500,
  },
};
