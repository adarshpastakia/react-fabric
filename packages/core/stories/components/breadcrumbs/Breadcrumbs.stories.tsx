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

import type { Meta, StoryObj } from "@storybook/react";
import { Fragment } from "react";
import { Breadcrumbs, Icon, Link, Title } from "../../../src";

const meta: Meta = {
  component: Breadcrumbs,
  title: "@core/components/Breadcrumbs",
  parameters: {
    layout: "centered",
    controls: { exclude: /^(on.*|children|as)/ },
    jest: ["core/tests/Breadcrumbs.test.tsx"],
  },
  decorators: [
    (Story) => (
      <div className="p-4">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type BreadcrumbsStory = StoryObj<typeof Breadcrumbs>;

export const _Breadcrumbs: BreadcrumbsStory = {
  render: (args) => {
    return (
      <Breadcrumbs {...args}>
        <Link>
          <Icon icon="mdi mdi-home" />
        </Link>
        <Link>Page 1</Link>
        <Link>Page 2</Link>
        <Link>Page 3</Link>
        <Link>Page 4</Link>
        <Link>Page 5</Link>
        <Link>Page 6</Link>
        <Link>Page 7</Link>
        <Link>Page 8</Link>
        <Link>Page 9</Link>
        <Link>Page 10</Link>
        <Link>Page 11</Link>
        <Link>Page 12</Link>
      </Breadcrumbs>
    );
  },
  args: {},
};

export const Styles: BreadcrumbsStory = {
  render: (args) => {
    return (
      <Fragment>
        <Title>Classic</Title>
        <Breadcrumbs {...args} variant="classic">
          <Link>
            <Icon icon="mdi mdi-home" />
          </Link>
          <Link>Page 1</Link>
          <Link>Page 2</Link>
          <Link>Page 3</Link>
          <Link>Page 4</Link>
          <Link>Page 5</Link>
          <Link>Page 6</Link>
          <Link>Page 7</Link>
          <Link>Page 8</Link>
          <Link>Page 9</Link>
          <Link>Page 10</Link>
          <Link>Page 11</Link>
          <Link>Page 12</Link>
        </Breadcrumbs>
        <Title className="mt-6">Modern</Title>
        <Breadcrumbs {...args} variant="modern">
          <Link>
            <Icon icon="mdi mdi-home" />
          </Link>
          <Link>Page 1</Link>
          <Link>Page 2</Link>
          <Link>Page 3</Link>
          <Link>Page 4</Link>
          <Link>Page 5</Link>
          <Link>Page 6</Link>
          <Link>Page 7</Link>
          <Link>Page 8</Link>
          <Link>Page 9</Link>
          <Link>Page 10</Link>
          <Link>Page 11</Link>
          <Link>Page 12</Link>
        </Breadcrumbs>
      </Fragment>
    );
  },
  args: {},
};
