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
import { CoreIcons } from "../../src";
import { HotKeyWrapper } from "../../src/hotkeys/HotKeyWrapper";
import * as stories from "../../stories/components/button/Button.stories";

const { Tester } = composeStories(stories);

describe("Button", () => {
  it("should render label only", () => {
    const fragment = render(<Tester>Click Me</Tester>);
    expect(
      fragment.container.querySelector("[data-ref='button'] > button"),
    ).not.toBeNull();
    expect(
      fragment.container.querySelector("[data-ref='button'] > button > dfn"),
    ).toBeNull();
    expect(
      fragment.container.querySelector("[data-ref='button'] > button > label")
        ?.innerHTML,
    ).toBe("Click Me");
    expect(document.body.innerHTML).toMatchSnapshot();
    fragment.unmount();
  });

  it("should render icon only", () => {
    const fragment = render(<Tester icon="mdi mdi-bell" />);
    expect(
      fragment.container.querySelector("[data-ref='button'] > button"),
    ).not.toBeNull();
    expect(
      fragment.container.querySelector("[data-ref='button'] > button > dfn"),
    ).not.toBeNull();
    expect(
      fragment.container.querySelector("[data-ref='button'] > button > label"),
    ).toBeNull();
    expect(document.body.innerHTML).toMatchSnapshot();
    fragment.unmount();
  });

  it("should render alt icon", () => {
    const fragment = render(
      <Tester
        icon="mdi mdi-bell"
        spinOnHover
        altIcon={CoreIcons.chevronDown}
      />,
    );
    expect(
      fragment.container.querySelector("[data-ref='button'] > button"),
    ).not.toBeNull();
    expect(
      fragment.container.querySelectorAll("[data-ref='button'] > button > dfn"),
    ).toHaveLength(2);
    expect(document.body.innerHTML).toMatchSnapshot();
    fragment.unmount();
  });

  it("should render rounded full-width", () => {
    const fragment = render(
      <Tester fullWidth rounded>
        Click Me!
      </Tester>,
    );
    expect(
      fragment.container.querySelector("[data-ref='button'] > button"),
    ).not.toBeNull();
    expect(document.body.innerHTML).toMatchSnapshot();
    fragment.unmount();
  });

  it("should handle click", () => {
    const fn = jest.fn();
    const fragment = render(<Tester onClick={fn} />);
    fireEvent.click(
      fragment.container.querySelector(
        "[data-ref='button'] > button",
      ) as HTMLElement,
    );
    expect(fn).toHaveBeenCalled();
    fragment.unmount();
  });

  it("should not handle click when disabled", () => {
    const fn = jest.fn();
    const fragment = render(<Tester disabled onClick={fn} />);
    fireEvent.click(
      fragment.container.querySelector(
        "[data-ref='button'] > button",
      ) as HTMLElement,
    );
    expect(fn).not.toHaveBeenCalled();
    fragment.unmount();
  });

  it("should handle hotkey", () => {
    const fn = jest.fn();
    const fragment = render(
      <HotKeyWrapper>
        <Tester onClick={fn} hotKey="shift+a" />
      </HotKeyWrapper>,
    );
    expect(
      fragment.container.querySelector<HTMLElement>(
        "[data-ref='button'] > button > kbd > span",
      )?.innerHTML,
    ).toBe("SHIFT A");
    fireEvent.keyDown(
      fragment.container.querySelector(
        "[data-ref='button'] > button",
      ) as HTMLElement,
      {
        key: "A",
        code: "KeyA",
        shiftKey: true,
        keyCode: 65,
        charCode: 0,
      },
    );
    expect(fn).toHaveBeenCalled();
    fragment.unmount();
  });

  it("should render with badge", () => {
    const fragment = render(<Tester badge={99}>Click Me</Tester>);
    expect(
      fragment.container.querySelector<HTMLElement>(
        "[data-ref='button'] > button [data-ref='badge'] > span",
      )?.innerHTML,
    ).toBe("99");
    expect(document.body.innerHTML).toMatchSnapshot();
    fragment.unmount();
  });

  it("should render action message", async () => {
    const fn = jest.fn(() => true);
    const fragment = render(
      <Tester onClick={fn} actionMessage="Action completed">
        Click Me
      </Tester>,
    );
    fireEvent.click(
      fragment.container.querySelector(
        "[data-ref='button'] > button",
      ) as HTMLElement,
    );
    await waitFor(() => {
      expect(
        fragment.container.querySelector("[data-ref='animated-indicator']"),
      ).not.toBeNull();
      expect(
        fragment.baseElement.querySelector("[data-ref='tooltip']"),
      ).not.toBeNull();
    });
    jest.runAllTimers();
    expect(document.body.innerHTML).toMatchSnapshot();
    fragment.unmount();
  });

  it("should render action message via prop", async () => {
    const fragment = render(
      <Tester
        actionMessage="Action completed"
        showActionDoneEvent="manual"
        showActionDone
        rounded
      >
        Click Me
      </Tester>,
    );
    await waitFor(() => {
      expect(
        fragment.container.querySelector("[data-ref='animated-indicator']"),
      ).not.toBeNull();
      expect(
        fragment.baseElement.querySelector("[data-ref='tooltip']"),
      ).not.toBeNull();
    });
    jest.runAllTimers();
    expect(document.body.innerHTML).toMatchSnapshot();
    fragment.unmount();
  });
});
