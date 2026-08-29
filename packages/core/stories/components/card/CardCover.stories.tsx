/**
 * React Fabric
 * @version 1.0.0
 * @license MIT
 * @copyright 2024 Adarsh Pastakia
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import { Button, ButtonGroup, Card, CardCover, Content, Footer, Image, Text, Title, Video } from "@/core/src";
import { faker } from "@faker-js/faker";
import type { Meta, StoryObj } from "@storybook/react";
import { Fragment } from "react/jsx-runtime";
import video from "/assets/samples/small_video.mp4";

const meta: Meta = {
  component: CardCover,
  title: "@core/components/Card",
  parameters: {
    layout: "centered",
    jest: ["core/tests/components/CardCover.test.tsx"],
  },
  decorators: [
    (Story) => (
      <div className="flex justify-center gap-4">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type CardStory = StoryObj<typeof CardCover>;

const cover = faker.lorem.paragraph();
const image = faker.image.url();

export const _CardCover: CardStory = {
  render(args) {
    return (
      <Fragment>
        <Card title="Image Cover" width={480}>
          <CardCover {...args} title={<Title as="h3">Cover Title</Title>}>
            <Image src={image} alt="Card Image" />
          </CardCover>
          <Content>
            <Text>{cover}</Text>
          </Content>
          <Footer>
            <ButtonGroup className="w-full text-xl">
              <Button
                classNames={{ button: "py-2", icon: "text-jade-500" }}
                icon="icon-[mdi--whatsapp]"
                aria-label="Whatsapp"
              />
              <Button
                classNames={{ button: "py-2", icon: "text-coral-500" }}
                icon="icon-[mdi--instagram]"
                aria-label="Instagram"
              />
            </ButtonGroup>
          </Footer>
        </Card>
        <Card title="Video Cover (Hover to play)" width={480}>
          <CardCover
            {...args}
            title={
              <div>
                <Title as="h3">Cover Title</Title>
                <Title as="h6">Description</Title>
              </div>
            }
          >
            <Video reel src={video} playOnHover />
          </CardCover>
          <Content>
            <Text>{cover}</Text>
          </Content>
          <Footer>
            <ButtonGroup className="w-full text-xl">
              <Button classNames={{ button: "py-2" }} icon="icon-[mdi--download]" aria-label="Download" />
              <Button classNames={{ button: "py-2" }} icon="icon-[mdi--share-variant]" aria-label="Share" />
            </ButtonGroup>
          </Footer>
        </Card>
      </Fragment>
    );
  },
  args: {
    height: 320,
  },
};
