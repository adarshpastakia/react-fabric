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
import { Avatar } from "../../src";
import * as stories from "../../stories/components/badge/Badge.stories";

const { Tester } = composeStories(stories);

describe("Badge", () => {
  it("should render badge", () => {
    const fragment = render(
      <Tester value="Test" block>
        <Avatar name="Hyacinth Bucket" variant="text" />
      </Tester>,
    );
    expect(
      fragment.container.querySelector("[data-ref='badge'] span")?.innerHTML,
    ).toBe("Test");
    expect(document.body.innerHTML).toMatchSnapshot();
    fragment.unmount();
  });

  it("should render icon badge", () => {
    const fragment = render(
      <Tester icon="mdi mdi-alien" iconBg="lilac" iconColor="white">
        <Avatar name="Hyacinth Bucket" variant="text" />
      </Tester>,
    );
    expect(
      fragment.container.querySelector("[data-ref='badge'] [data-ref='icon']"),
    ).not.toBeNull();
    expect(document.body.innerHTML).toMatchSnapshot();
    fragment.unmount();
  });
});
