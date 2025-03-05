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
import { render } from "@testing-library/react";
import { Anchor, Icon } from "../../src";
import * as stories from "../../stories/components/breadcrumbs/Breadcrumbs.stories";

const { Tester } = composeStories(stories);

describe("Breadcrumbs", () => {
  it("should render breadcrumbs", () => {
    const fragment = render(
      <Tester>
        <Anchor>
          <Icon icon="mdi mdi-home" />
        </Anchor>
        <Anchor>Page 1</Anchor>
      </Tester>,
    );
    expect(
      fragment.container.querySelector<HTMLElement>(
        "[data-ref='breadcrumbs'] .mdi.mdi-home",
      ),
    ).not.toBeNull();
    expect(
      fragment.container.querySelector<HTMLElement>(
        "[data-ref='breadcrumbs'] li:last-child > a",
      )?.innerHTML,
    ).toBe("Page 1");
    expect(document.body.innerHTML).toMatchSnapshot();
    fragment.unmount();
  });

  it("should render breadcrumbs with overflow", () => {
    const fragment = render(
      <Tester variant="modern">
        <Anchor>
          <Icon icon="mdi mdi-home" />
        </Anchor>
        <Anchor>Page 1</Anchor>
        <Anchor>Page 2</Anchor>
        <Anchor>Page 3</Anchor>
        <Anchor>Page 4</Anchor>
        <Anchor>Page 5</Anchor>
        <Anchor>Page 6</Anchor>
        <Anchor>Page 7</Anchor>
        <Anchor>Page 8</Anchor>
        <Anchor>Page 9</Anchor>
      </Tester>,
    );
    expect(
      fragment.container.querySelector<HTMLElement>(
        "[data-ref='breadcrumbs'] .mdi.mdi-home",
      ),
    ).not.toBeNull();
    expect(
      fragment.container.querySelector<HTMLElement>(
        "[data-ref='breadcrumbOverflow']",
      ),
    ).not.toBeNull();
    expect(
      fragment.container.querySelector<HTMLElement>(
        "[data-ref='breadcrumbs'] li:last-child > a",
      )?.innerHTML,
    ).toBe("Page 9");
    expect(document.body.innerHTML).toMatchSnapshot();
    fragment.unmount();
  });
});
