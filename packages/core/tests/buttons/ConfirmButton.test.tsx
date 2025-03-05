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
import { fireEvent, render, waitFor } from "@testing-library/react";
import * as stories from "../../stories/components/button/ConfirmButton.stories";

const { Tester } = composeStories(stories);

describe("ConfirmButton", () => {
  it("should render confirm button", async () => {
    const fn = jest.fn();
    const fragment = render(
      <Tester message="Confirm?" onClick={fn}>
        Click Me
      </Tester>,
    );
    expect(
      fragment.container.querySelector("[data-ref='button'] > button"),
    ).not.toBeNull();
    expect(
      fragment.container.querySelector("[data-ref='button'] > button > label")
        ?.innerHTML,
    ).toBe("Click Me");

    fireEvent.click(
      fragment.container.querySelector(
        "[data-ref='button'] > button",
      ) as HTMLElement,
    );
    await waitFor(() => {
      expect(
        document.body.querySelector("[data-ref='confirmMessage']")?.innerHTML,
      ).toBe("Confirm?");
      fireEvent.click(
        document.body.querySelector(
          "[data-ref='confirmCancel'] > button",
        ) as HTMLElement,
      );
      expect(fn).toHaveBeenCalledWith(false);
    });
    jest.runAllTimers();

    fireEvent.click(
      fragment.container.querySelector(
        "[data-ref='button'] > button",
      ) as HTMLElement,
    );
    await waitFor(() => {
      expect(
        document.body.querySelector("[data-ref='confirmMessage']")?.innerHTML,
      ).toBe("Confirm?");
      fireEvent.click(
        document.body.querySelector(
          "[data-ref='confirmOk'] > button",
        ) as HTMLElement,
      );
      expect(fn).toHaveBeenCalledWith(true);
    });
    jest.runAllTimers();

    expect(document.body.innerHTML).toMatchSnapshot();
    fragment.unmount();
  });

  it("should render confirm button with action", async () => {
    const fragment = render(
      <Tester message="Confirm?" onClick={() => true} actionMessage="Done!">
        Click Me
      </Tester>,
    );
    expect(
      fragment.container.querySelector("[data-ref='button'] > button"),
    ).not.toBeNull();
    expect(
      fragment.container.querySelector("[data-ref='button'] > button > label")
        ?.innerHTML,
    ).toBe("Click Me");

    fireEvent.click(
      fragment.container.querySelector(
        "[data-ref='button'] > button",
      ) as HTMLElement,
    );
    await waitFor(() => {
      expect(
        document.body.querySelector("[data-ref='confirmMessage']")?.innerHTML,
      ).toBe("Confirm?");
      fireEvent.click(
        document.body.querySelector(
          "[data-ref='confirmOk'] > button",
        ) as HTMLElement,
      );
    });
    jest.runAllTimers();

    fireEvent.click(
      fragment.container.querySelector(
        "[data-ref='button'] > button",
      ) as HTMLElement,
    );
    await waitFor(() => {
      expect(
        document.body.querySelector("[data-ref='confirmMessage']")?.innerHTML,
      ).toBe("Confirm?");
      fireEvent.keyDown(
        document.body.querySelector(
          "[data-ref='confirmMessage']",
        ) as HTMLElement,
        {
          key: "Escape",
          code: "Escape",
          shiftKey: false,
          keyCode: 27,
          charCode: 0,
        },
      );
    });
    jest.runAllTimers();

    expect(document.body.innerHTML).toMatchSnapshot();
    fragment.unmount();
  });
});
