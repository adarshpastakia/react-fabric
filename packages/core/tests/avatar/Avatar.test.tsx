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
import { composeStories } from "@storybook/react";
import { fireEvent, render } from "@testing-library/react";
import * as stories from "../../stories/components/avatar/Avatar.stories";
import { mdiAbacus } from "@mdi/js";

const { Tester } = composeStories(stories);

describe("Avatar", () => {
  it("should render avatar", () => {
    const fragment = render(
      <Tester name="Smeghead" bg="lilac" color="coral" size="md" />,
    );
    expect(document.body.innerHTML).toMatchSnapshot();
    fragment.unmount();
  });

  it("should render text avatar", () => {
    const fragment = render(
      <Tester variant="text" name="Smeg head" size="2rem" />,
    );
    expect(document.body.innerHTML).toMatchSnapshot();
    fragment.unmount();
  });

  it("should render fallback avatar", () => {
    const fragment = render(
      <Tester name="Smeg head" avatar="none" fallbackIcon={mdiAbacus} />,
    );
    fireEvent.error(fragment.container.querySelector("img") as HTMLElement);
    expect(document.body.innerHTML).toMatchSnapshot();
    fragment.unmount();
  });

  it("should render fallback icon font", () => {
    const fragment = render(
      <Tester name="Smeg head" fallbackIcon="mdi mdi-alien" />,
    );
    expect(document.body.innerHTML).toMatchSnapshot();
    fragment.unmount();
  });

  it("should render image avatar", () => {
    const fragment = render(
      <Tester
        rounded
        variant="text"
        name="Smeg head"
        avatar="https://avatars.githubusercontent.com/u/47371134"
      />,
    );
    fireEvent.load(fragment.container.querySelector("img") as HTMLElement);
    expect(document.body.innerHTML).toMatchSnapshot();
    fragment.unmount();
  });
});
