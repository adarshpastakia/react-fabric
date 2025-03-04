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

import { composeStories } from "@storybook/react";
import { render } from "@testing-library/react";
import { Loading } from "../../src";
import * as stories from "../../stories/components/animations/Animations.stories";
import * as barStories from "../../stories/components/animations/Bars.stories";
import * as skeletonStories from "../../stories/components/animations/Skeleton.stories";
import * as spinnerStories from "../../stories/components/animations/Spinner.stories";

const { Tester } = composeStories(stories);
const { Tester: BarTester } = composeStories(barStories);
const { Tester: SkeletonTester } = composeStories(skeletonStories);
const { Tester: SpinnerTester } = composeStories(spinnerStories);

describe("Animations", () => {
  it("should render indicator", () => {
    const fragment = render(
      <div>
        <Tester />
        <Tester type="info" />
        <Tester type="check" />
        <Tester type="question" />
        <Tester type="cross" color="lilac" />
        <Tester type="exclaim" strokeColor="lilac" />
      </div>,
    );
    expect(document.body.innerHTML).toMatchSnapshot();
    fragment.unmount();
  });

  it("should render bars", () => {
    const fragment = render(
      <div>
        <BarTester />
      </div>,
    );
    expect(document.body.innerHTML).toMatchSnapshot();
    fragment.unmount();
  });

  it("should render skeleton", () => {
    const fragment = render(
      <div>
        <SkeletonTester />
      </div>,
    );
    expect(document.body.innerHTML).toMatchSnapshot();
    fragment.unmount();
  });

  it("should render spinner", () => {
    const fragment = render(
      <div>
        <SpinnerTester />
      </div>,
    );
    expect(document.body.innerHTML).toMatchSnapshot();
    fragment.unmount();
  });

  it("should render loader", () => {
    const fragment = render(
      <div className="relative">
        <Loading />
      </div>,
    );
    expect(document.body.innerHTML).toMatchSnapshot();
    fragment.unmount();
  });
});
