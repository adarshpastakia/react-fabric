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
import { Button, Col, Icon, Row, Title } from "@react-fabric/core";
import type { Meta, StoryObj } from "@storybook/react";
import { Thumbnail } from "../src";

const meta: Meta = {
  title: "@media/NSFW Overlay",
  parameters: {
    layout: "centered",
    controls: { exclude: "children" },
  },
};

export default meta;
type Story = StoryObj<typeof Thumbnail>;

export const _NSFWOverlay: Story = {
  render: (args) => {
    return (
      <Row noWrap={false} justify="center">
        <Col flex="full">
          <Title align="center" as="h4" color="primary">
            NSFW Overlay Tester
          </Title>
        </Col>
        <Col>
          <p>Basic</p>
          <Thumbnail
            {...args}
            nsfw={{
              trigger: "none",
              message: "Sensitive Content",
            }}
            src={faker.image.url({ width: 256, height: 256 })}
          />
        </Col>
        <Col>
          <p>Hover trigger</p>
          <Thumbnail
            {...args}
            nsfw={{
              trigger: "hover",
              message: "Hover to reveal",
            }}
            src={faker.image.url({ width: 256, height: 256 })}
          />
        </Col>
        <Col>
          <p>Click trigger</p>
          <Thumbnail
            {...args}
            nsfw={{
              trigger: "click",
              message: "Click to reveal",
            }}
            src={faker.image.url({ width: 256, height: 256 })}
          />
        </Col>
        <Col>
          <p>Custom message</p>
          <Thumbnail
            {...args}
            nsfw={{
              message({ hide, remove }) {
                return (
                  <div>
                    <Icon icon="icon-[mdi--shield-lock]" className="text-[2em]" />
                    <p className="text-xs">Reveal for few moments, or hide</p>
                    <div className="flex gap-1 justify-center">
                      <Button size="xs" variant="soft" onClick={hide}>
                        Reveal
                      </Button>
                      <Button size="xs" variant="soft" onClick={remove}>
                        Show
                      </Button>
                    </div>
                  </div>
                );
              },
            }}
            src={faker.image.url({ width: 256, height: 256 })}
          />
        </Col>
      </Row>
    );
  },
  args: {
    nsfw: {
      message: "Sensitive Content",
    },
    width: "16rem",
    height: "16rem",
  },
};
