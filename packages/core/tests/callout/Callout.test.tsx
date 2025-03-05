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
import { Title } from "../../src";
import * as stories from "../../stories/components/callout/Callout.stories";

const { Tester } = composeStories(stories);

describe("Callouts", () => {
  it("should render callout", () => {
    const fragment = render(
      <Tester title="Callout Title" icon="mdi mdi-alien">
        <p>Lorem ipsum</p>
      </Tester>,
    );
    expect(
      fragment.container.querySelector<HTMLElement>("[data-ref='calloutTitle']")
        ?.innerHTML,
    ).toBe("Callout Title");
    expect(
      fragment.container.querySelector<HTMLElement>("[data-ref='calloutIcon']"),
    ).not.toBeNull();
    expect(document.body.innerHTML).toMatchSnapshot();
    fragment.unmount();
  });

  it("should render callout with legend", () => {
    const fragment = render(
      <Tester
        title="Callout Title"
        legend="Test Legend"
        border="dashed"
        onClose={() => true}
      >
        <p>Lorem ipsum</p>
      </Tester>,
    );
    expect(
      fragment.container.querySelector<HTMLElement>(
        "[data-ref='calloutLegend']",
      )?.innerHTML,
    ).toBe("Test Legend");
    expect(document.body.innerHTML).toMatchSnapshot();
    fragment.unmount();
  });

  it("should render callout with close", () => {
    const fn = jest.fn();
    const fragment = render(
      <Tester title="Callout Title" border="dotted" onClose={fn}>
        <p>Lorem ipsum</p>
      </Tester>,
    );
    expect(
      fragment.container.querySelector<HTMLElement>(
        "[data-ref='calloutClose']",
      ),
    ).not.toBeNull();
    fireEvent.click(
      fragment.container.querySelector<HTMLElement>(
        "[data-ref='calloutClose']",
      ) as HTMLElement,
    );
    expect(fn).toHaveBeenCalled();
    expect(document.body.innerHTML).toMatchSnapshot();
    fragment.unmount();
  });
});
