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
import "@testing-library/jest-dom";
import { getByTestId, render } from "@testing-library/react";
import { Button } from "../../src";
import * as stories from "../../stories/components/button/ButtonGroup.stories";

const { Tester } = composeStories(stories);

describe("ButtonGroup", () => {
  it("should render buttons", () => {
    const fragment = render(
      <Tester>
        <Button>First</Button>
        <Button>Second</Button>
      </Tester>,
    );
    expect(
      fragment.container.querySelector("[data-ref='buttonGroup']"),
    ).not.toBeNull();
    expect(
      fragment.container.querySelectorAll(
        "[data-ref='buttonGroup'] > [data-ref='button']",
      ),
    ).toHaveLength(2);
    expect(document.body.innerHTML).toMatchSnapshot();
    fragment.unmount();
  });

  it("should render full-width", () => {
    const fragment = render(
      <Tester fullWidth data-testid="btngrp">
        <Button>First</Button>
        <Button>Second</Button>
      </Tester>,
    );
    expect(
      fragment.container.querySelector("[data-ref='buttonGroup']"),
    ).not.toBeNull();
    expect(getByTestId(fragment.container, "btngrp")).toHaveClass("flex");
    expect(document.body.innerHTML).toMatchSnapshot();
    fragment.unmount();
  });

  it("should render vertical", () => {
    const fragment = render(
      <Tester vertical data-testid="btngrp">
        <Button>First</Button>
        <Button>Second</Button>
      </Tester>,
    );
    expect(
      fragment.container.querySelector("[data-ref='buttonGroup']"),
    ).not.toBeNull();
    expect(getByTestId(fragment.container, "btngrp")).toHaveClass("flex-col");
    expect(document.body.innerHTML).toMatchSnapshot();
    fragment.unmount();
  });
});
