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
import { fireEvent, render } from "@testing-library/react";
import * as stories from "../../stories/components/chip/Chip.stories";
import { HotKeyWrapper } from "../../src";

const { Tester } = composeStories(stories);

describe("Chips", () => {
  it("should render chip", () => {
    const fragment = render(
      <Tester size="sm" color="lilac" variant="outline">
        Chip
      </Tester>,
    );
    expect(
      fragment.container.querySelector("[data-ref='chipLabel'")?.innerHTML,
    ).toBe("Chip");
    expect(document.body.innerHTML).toMatchSnapshot();
    fragment.unmount();
  });

  it("should render chip with icon", () => {
    const fn = jest.fn();
    const fragment = render(
      <Tester
        icon="mdi mdi-alien"
        rounded
        size="2rem"
        color="coral"
        variant="solid"
      />,
    );
    expect(
      fragment.container.querySelector("[data-ref='chipIcon'] i")?.classList,
    ).toContain("mdi-alien");
    expect(document.body.innerHTML).toMatchSnapshot();
    fragment.unmount();
  });

  it("should render clickable chip", () => {
    const fn = jest.fn();
    const fragment = render(
      <Tester onClick={fn} stopPropagation>
        Chip
      </Tester>,
    );
    fireEvent.click(
      fragment.container.querySelector("[data-ref='chip']") as HTMLElement,
    );
    expect(fn).toHaveBeenCalled();
    expect(document.body.innerHTML).toMatchSnapshot();
    fragment.unmount();
  });

  it("should render disabled chip", () => {
    const fn = jest.fn();
    const fragment = render(
      <Tester onClick={fn} disabled>
        Chip
      </Tester>,
    );
    fireEvent.click(
      fragment.container.querySelector("[data-ref='chip']") as HTMLElement,
    );
    expect(fn).not.toHaveBeenCalled();
    expect(document.body.innerHTML).toMatchSnapshot();
    fragment.unmount();
  });

  it("should render removable chip", () => {
    const fn = jest.fn();
    const fragment = render(
      <Tester onRemove={fn} stopPropagation>
        Chip
      </Tester>,
    );
    fireEvent.click(
      fragment.container.querySelector(
        "[data-ref='chipRemove']",
      ) as HTMLElement,
    );
    expect(fn).toHaveBeenCalled();
    expect(document.body.innerHTML).toMatchSnapshot();
    fragment.unmount();
  });
});
