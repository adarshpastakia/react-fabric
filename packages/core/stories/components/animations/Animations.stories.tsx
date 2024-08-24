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
import { useEffect, useState } from "react";
import { Fragment } from "react/jsx-runtime";
import {
  AnimationBars,
  AnimationIndicator,
  AnimationSpinner,
  Skeleton,
} from "../../../src";

const meta: Meta = {
  component: AnimationIndicator,
  subcomponents: { AnimationBars, AnimationSpinner } as AnyObject,
  title: "@core/components/Animations",
  parameters: {
    layout: "centered",
    controls: { exclude: /^(on.*|children|as)/ },
    jest: ["core/tests/Animations.test.tsx"],
  },
  decorators: [
    (Story) => (
      <div className="flex gap-2 items-center p-4 h-12">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type AnimationsStory = StoryObj<typeof AnimationIndicator>;

export const _Animations: AnimationsStory = {
  render: (args) => {
    const [state, setState] = useState(false);
    useEffect(() => {
      const tmr = setInterval(() => setState(!state), state ? 2000 : 200);
      return () => {
        clearInterval(tmr);
      };
    }, [state]);
    return (
      <Fragment>
        {state && (
          <Fragment>
            <AnimationIndicator type="check" {...args} />
            <AnimationIndicator type="cross" {...args} />
            <AnimationIndicator type="info" {...args} />
            <AnimationIndicator type="exclaim" {...args} />
            <AnimationIndicator type="question" {...args} />
          </Fragment>
        )}
      </Fragment>
    );
  },
  args: {},
};
