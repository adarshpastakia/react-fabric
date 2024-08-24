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
import { Avatar, AvatarGroup } from "../../../src";

const meta: Meta = {
  component: AvatarGroup,
  title: "@core/components/Avatar",
  parameters: {
    layout: "centered",
    controls: { exclude: /^(on.*|children|as)/ },
    jest: ["core/tests/Avatar.test.tsx"],
  },
  decorators: [
    (Story) => (
      <div className="flex gap-md items-center p-md">
        <Story />
      </div>
    ),
  ],
};

const iconImg = faker.image.avatarGitHub();

export default meta;
type AvatarGroupStory = StoryObj<typeof AvatarGroup>;

export const _AvatarGroup: AvatarGroupStory = {
  render: (args) => {
    return (
      <AvatarGroup {...args}>
        <Avatar
          name="Hyacinth Bucket"
          tooltip="Hyacinth Bucket"
          variant="text"
        />
        <Avatar
          name="Hyacinth Bucket"
          tooltip="Hyacinth Bucket"
          fallbackIcon="mdi mdi-react"
        />
        <Avatar
          name="Hyacinth Bucket"
          tooltip="Hyacinth Bucket"
          avatar={iconImg}
        />
        <Avatar
          name="Hyacinth Bucket"
          tooltip="Hyacinth Bucket"
          variant="bauhaus"
        />
        <Avatar
          name="Hyacinth Bucket"
          tooltip="Hyacinth Bucket"
          variant="beam"
        />
        <Avatar
          name="Hyacinth Bucket"
          tooltip="Hyacinth Bucket"
          variant="pixel"
        />
      </AvatarGroup>
    );
  },
  args: { rounded: true, totalCount: 99, size: "2.5rem" },
};
