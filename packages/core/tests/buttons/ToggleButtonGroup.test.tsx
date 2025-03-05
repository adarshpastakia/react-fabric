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
import {
  fireEvent,
  getByTestId,
  render,
  waitFor,
} from "@testing-library/react";
import * as stories from "../../stories/components/button/ToggleButtonGroup.stories";
import { Button } from "../../src";

const { Tester } = composeStories(stories);

describe("ToggleButtonGroup", () => {
  it("should render toggle button group", async () => {
    const fn = jest.fn();
    const fragment = render(
      <Tester onChange={fn} fullWidth>
        <Button data-testid="one" value="1">
          First
        </Button>
        <Button data-testid="two" value="2">
          Second
        </Button>
        <Button data-testid="three" value="3">
          Third
        </Button>
      </Tester>,
    );

    fireEvent.click(getByTestId(fragment.container, "one") as HTMLElement);
    expect(fn).toHaveBeenCalledWith("1");
    expect(getByTestId(fragment.container, "one").dataset.checked).toBe("true");

    expect(document.body.innerHTML).toMatchSnapshot();
    fragment.unmount();
  });

  it("should render multiple toggle button group", async () => {
    const fn = jest.fn();
    const fragment = render(
      <Tester onChange={fn} vertical value={[]}>
        <Button data-testid="one" value="1">
          First
        </Button>
        <Button data-testid="two" value="2">
          Second
        </Button>
        <Button data-testid="three" value="3">
          Third
        </Button>
      </Tester>,
    );

    fireEvent.click(getByTestId(fragment.container, "one"));
    expect(fn).toHaveBeenCalledWith(["1"]);
    fireEvent.click(getByTestId(fragment.container, "two"));
    expect(fn).toHaveBeenCalledWith(["1", "2"]);
    expect(getByTestId(fragment.container, "one").dataset.checked).toBe("true");
    expect(getByTestId(fragment.container, "two").dataset.checked).toBe("true");
    fireEvent.click(getByTestId(fragment.container, "one"));
    expect(fn).toHaveBeenCalledWith(["2"]);

    expect(document.body.innerHTML).toMatchSnapshot();
    fragment.unmount();
  });
});
