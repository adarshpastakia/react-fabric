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
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Fragment } from "react/jsx-runtime";
import {
  Badge,
  Button,
  ButtonGroup,
  Card,
  CardCover,
  Chip,
  Col,
  Dropdown,
  Footer,
  Header,
  Icon,
  Image,
  Menu,
  MenuItem,
  Row,
  Text,
  Title,
  Video,
} from "../../../src";
import video from "/assets/samples/small_video.mp4";

const meta: Meta = {
  component: Card,
  subcomponents: { CardCover } as AnyObject,
  title: "@core/components/Card",
  parameters: {
    layout: "centered",
    controls: { exclude: /^(on.*|children|as)/ },
    jest: ["core/tests/Card.test.tsx"],
  },
  decorators: [
    (Story) => (
      <div className="flex gap-2 items-start p-4">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type CardStory = StoryObj<typeof Card>;
type CardCoverStory = StoryObj<typeof CardCover>;

export const _Card: CardStory = {
  render: (args) => {
    return (
      <Fragment>
        <Badge value="Info Cards" placement="top">
          <Card {...args}>
            <Title as="h3">Card Title</Title>
            <Title className="text-dimmed">Card description goes here</Title>
            <Text clamp={4}>{faker.lorem.sentences(10)}</Text>
          </Card>
        </Badge>
      </Fragment>
    );
  },
  args: {
    className: "w-96",
    bodyClassName: "p-4",
  },
};

export const Clickable: CardStory = {
  render: (args) => {
    return (
      <Fragment>
        <Card {...args}>
          <Title as="h3">Card Title</Title>
          <Title className="text-dimmed">Card description goes here</Title>
          <Text clamp={4}>{faker.lorem.sentences(10)}</Text>
        </Card>
      </Fragment>
    );
  },
  args: {
    className: "w-96",
    bodyClassName: "p-4",
    onClick: fn(),
  },
};

export const HeadFoot: CardStory = {
  render: (args) => {
    return (
      <Fragment>
        <Card {...args}>
          <Header className="px-2 bg-dimmed" flex>
            <Title className="flex-1">Card heading</Title>
            <Dropdown closeOnClick showArrow placement="bottom-end">
              <Button
                rounded
                size="sm"
                variant="link"
                aria-label="Menu"
                icon="mdi mdi-dots-vertical"
              />
              <menu>
                <li className="px-2 py-1">Item 1</li>
                <li className="px-2 py-1">Item 2</li>
                <li className="px-2 py-1">Item 3</li>
              </menu>
            </Dropdown>
          </Header>
          <Title as="h3">Card Title</Title>
          <Title className="text-dimmed">Card description goes here</Title>
          <Row gutter="md" className="py-2" align="center">
            <Col>
              <Icon icon="mdi mdi-shield" className="text-danger-600" />
            </Col>
            <Col>
              <Icon icon="mdi mdi-information" className="text-muted" />
            </Col>
            <Col>
              <Chip>Label</Chip>
            </Col>
            <Col>
              <Chip color="info" onClick={() => undefined}>
                Label
              </Chip>
            </Col>
          </Row>
          <Text clamp={4}>{faker.lorem.sentences(10)}</Text>
          <Dropdown closeOnClick showArrow placement="bottom-end">
            <Button size="sm" variant="link" aria-label="Menu">
              Options
            </Button>
            <Menu>
              <MenuItem label="Item 1" />
              <MenuItem label="Item 2" />
              <MenuItem label="Item 3" />
            </Menu>
          </Dropdown>
          <Footer className="border-t border-muted">
            <ButtonGroup fullWidth variant="link" size="lg">
              <Button
                className="flex-1"
                icon="mdi mdi-share"
                aria-label="share"
              />
              <Button
                className="flex-1"
                icon="mdi mdi-download"
                aria-label="download"
              />
              <Button
                className="flex-1"
                icon="mdi mdi-content-save"
                aria-label="save"
              />
            </ButtonGroup>
          </Footer>
        </Card>
      </Fragment>
    );
  },
  args: {
    className: "w-96",
    bodyClassName: "p-4",
    onClick: fn(),
  },
};

export const _CardCover: CardCoverStory = {
  render: ({ autoPlay, playOnHover, ...args }: AnyObject) => {
    return (
      <Fragment>
        <Card className="w-96" bodyClassName="p-0">
          <CardCover className="p-4" height={240}>
            <Image src={faker.image.url()} />
            <Title as="h3">Card Title</Title>
            <Title>Card description</Title>
            <div className="absolute top-2 rounded-full leading-[0] end-2 bg-base/70">
              <Button
                rounded
                size="sm"
                variant="link"
                aria-label="Menu"
                icon="mdi mdi-dots-vertical"
              />
            </div>
          </CardCover>
          <div
            className="px-4 text-end z-2 relative"
            style={{
              marginTop: "-1rem",
            }}
          >
            <div className="inline-block" data-inner-clickable>
              <Button
                rounded
                icon="mdi mdi-thumb-up"
                color="accent"
                variant="solid"
                aria-label="Like"
              />
              <Button
                rounded
                icon="mdi mdi-thumb-down"
                color="danger"
                variant="solid"
                aria-label="Like"
              />
            </div>
          </div>
          <Text className="p-4" clamp={4}>
            {faker.lorem.sentences(10)}
          </Text>
          <Footer className="border-t border-muted">
            <ButtonGroup fullWidth variant="link" size="lg">
              <Button
                className="flex-1"
                icon="mdi mdi-share"
                aria-label="share"
              />
              <Button
                className="flex-1"
                icon="mdi mdi-download"
                aria-label="download"
              />
              <Button
                className="flex-1"
                icon="mdi mdi-content-save"
                aria-label="save"
              />
            </ButtonGroup>
          </Footer>
        </Card>
        <Card className="w-96" bodyClassName="p-0">
          <CardCover className="p-4" height={240} colorScheme="dark">
            <Video
              reel
              src={video}
              autoPlay={autoPlay}
              playOnHover={playOnHover}
              // "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            />
            <Title as="h3">Card Title</Title>
            <Title>Card description</Title>
          </CardCover>
          <div
            className="px-4 text-end z-2 relative"
            style={{
              marginTop: "-1rem",
            }}
          >
            <div className="inline-block" data-inner-clickable>
              <Button
                rounded
                icon="mdi mdi-thumb-up"
                color="accent"
                variant="solid"
                aria-label="Like"
              />
              <Button
                rounded
                icon="mdi mdi-thumb-down"
                color="danger"
                variant="solid"
                aria-label="Like"
              />
            </div>
          </div>
          <Text className="p-4" clamp={4}>
            {faker.lorem.sentences(10)}
          </Text>
          <Footer className="border-t border-muted">
            <ButtonGroup fullWidth variant="link" size="lg">
              <Button
                className="flex-1"
                icon="mdi mdi-share"
                aria-label="share"
              />
              <Button
                className="flex-1"
                icon="mdi mdi-download"
                aria-label="download"
              />
              <Button
                className="flex-1"
                icon="mdi mdi-content-save"
                aria-label="save"
              />
            </ButtonGroup>
          </Footer>
        </Card>
      </Fragment>
    );
  },
  args: {
    ...({ playOnHover: false, autoPlay: true } as AnyObject),
  },
};
