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

import { Navigator } from "@/core/src";
import type { Meta, StoryObj } from "@storybook/react";
import { Fragment, useState } from "react";
import { fn } from "storybook/test";

const meta: Meta = {
  component: Navigator,
  tags: ["autodocs"],
  title: "@core/components/Navigator",
  parameters: {
    layout: "centered",
    jest: ["core/tests/components/Navigator.test.tsx"],
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-2xl p-4">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type NavigatorStory = StoryObj<typeof Navigator>;

export const _Navigator: NavigatorStory = {
  render: (args) => {
    const [current, setCurrent] = useState(0);
    return (
      <Navigator {...args} current={current} length={9} onNavigate={(dir) => setCurrent((prev) => prev + dir)}>
        <span>Item {current + 1}</span>
      </Navigator>
    );
  },
  args: {},
};

export const FiniteNavigation: NavigatorStory = {
  tags: ["autodocs"],
  render: () => {
    return (
      <Fragment>
        <div className="mb-4">
          <p className="mb-2 text-sm text-muted">First item (prev disabled)</p>
          <Navigator length={5} current={0} onNavigate={fn()}>
            <span>Item 1</span>
          </Navigator>
        </div>
        <div className="mb-4">
          <p className="mb-2 text-sm text-muted">Middle item (both enabled)</p>
          <Navigator length={5} current={2} onNavigate={fn()}>
            <span>Item 3</span>
          </Navigator>
        </div>
        <div className="mb-4">
          <p className="mb-2 text-sm text-muted">Last item (next disabled)</p>
          <Navigator length={5} current={4} onNavigate={fn()}>
            <span>Item 5</span>
          </Navigator>
        </div>
      </Fragment>
    );
  },
};

export const InfiniteNavigation: NavigatorStory = {
  tags: ["autodocs"],
  render: () => {
    const [current, setCurrent] = useState(0);
    return (
      <Navigator onNavigate={(dir) => setCurrent((prev) => Math.max(0, prev + dir))}>
        <span>Item {current + 1}</span>
      </Navigator>
    );
  },
};

export const DisabledKeyHandlers: NavigatorStory = {
  tags: ["autodocs"],
  render: (args) => {
    const [current, setCurrent] = useState(0);
    return (
      <Navigator
        {...args}
        length={10}
        current={current}
        disableKeyHandlers
        onNavigate={(dir) => setCurrent((prev) => prev + dir)}
      >
        <span>Item {current + 1} (keyboard disabled)</span>
      </Navigator>
    );
  },
  args: {},
};

export const DifferentColors: NavigatorStory = {
  tags: ["autodocs"],
  render: () => {
    return (
      <Fragment>
        <div className="mb-4">
          <p className="mb-2 text-sm text-muted">Primary</p>
          <Navigator length={5} current={2} color="primary" onNavigate={fn()}>
            <span>Item 3</span>
          </Navigator>
        </div>
        <div className="mb-4">
          <p className="mb-2 text-sm text-muted">Info</p>
          <Navigator length={5} current={2} color="info" onNavigate={fn()}>
            <span>Item 3</span>
          </Navigator>
        </div>
        <div className="mb-4">
          <p className="mb-2 text-sm text-muted">Success</p>
          <Navigator length={5} current={2} color="success" onNavigate={fn()}>
            <span>Item 3</span>
          </Navigator>
        </div>
        <div className="mb-4">
          <p className="mb-2 text-sm text-muted">Danger</p>
          <Navigator length={5} current={2} color="danger" onNavigate={fn()}>
            <span>Item 3</span>
          </Navigator>
        </div>
        <div className="mb-4">
          <p className="mb-2 text-sm text-muted">Warning</p>
          <Navigator length={5} current={2} color="warning" onNavigate={fn()}>
            <span>Item 3</span>
          </Navigator>
        </div>
      </Fragment>
    );
  },
};

export const Tester: NavigatorStory = {
  tags: ["!autodocs"],
  render: (args) => {
    const [current, setCurrent] = useState(0);
    return (
      <Navigator {...args} length={10} current={current} onNavigate={(dir) => setCurrent((prev) => prev + dir)}>
        <span>Item {current + 1}</span>
      </Navigator>
    );
  },
  args: {},
};
