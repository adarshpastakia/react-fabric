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
import { Avatar, AvatarGroup, Badge } from "../../../src";

const meta: Meta = {
  component: Avatar,
  title: "@core/components/Avatar",
  subcomponents: { AvatarGroup } as AnyObject,
  parameters: {
    layout: "centered",
    controls: { exclude: /^(on.*|children|as)/ },
    jest: ["core/tests/Avatar.test.tsx"],
  },
  decorators: [
    (Story) => (
      <div className="flex gap-2 items-center p-4">
        <Story />
      </div>
    ),
  ],
};

const iconImg = faker.image.avatarGitHub();

export default meta;
type AvatarStory = StoryObj<typeof Avatar>;

export const _Avatar: AvatarStory = {
  render: (args) => {
    return (
      <Fragment>
        <Avatar {...args} variant="text" />
        <Avatar {...args} fallbackIcon="mdi mdi-react" />
        <Avatar {...args} avatar={iconImg} />
        <Avatar {...args} variant="bauhaus" />
        <Avatar {...args} variant="beam" />
        <Avatar {...args} variant="pixel" />
        <Badge value={99} placement="top-end">
          <Avatar {...args} fallbackIcon="mdi mdi-react" />
        </Badge>
      </Fragment>
    );
  },
  args: {
    name: "Hyacinth Bucket",
    size: "2.5rem",
    onClick: fn(),
  },
};
