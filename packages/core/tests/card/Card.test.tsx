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
import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import { CardCover, Content, Footer, Header, Image, Title } from "../../src";
import * as stories from "../../stories/components/card/Card.stories";

const { Tester, FlipCardTester } = composeStories(stories);

describe("Cards", () => {
  it("should render card", () => {
    const fragment = render(
      <Tester selected selectedRibbon>
        <Header>Header</Header>
        <Content>Card</Content>
        <Footer>Footer</Footer>
      </Tester>,
    );
    expect(document.body.innerHTML).toMatchSnapshot();
    expect(
      fragment.container.querySelector(".fabric-card [data-ref='header']")
        ?.innerHTML,
    ).toBe("Header");
    expect(
      fragment.container.querySelector(".fabric-card [data-ref='footer']")
        ?.innerHTML,
    ).toBe("Footer");
    expect(
      fragment.container.querySelector(".fabric-cardBody [data-ref='content']")
        ?.innerHTML,
    ).toBe("Card");
    expect(fragment.container.querySelector(".fabric-cardWrapper")).toHaveClass(
      "selected",
      "outline-1",
    );
    fragment.unmount();
  });

  it("should render clickable card", () => {
    const fn = jest.fn();
    const fragment = render(<Tester onClick={fn}>Card</Tester>);
    expect(document.body.innerHTML).toMatchSnapshot();
    expect(
      fragment.container.querySelector(".fabric-cardBody")?.innerHTML,
    ).toBe("Card");
    fireEvent.click(
      fragment.container.querySelector(".fabric-cardBody") as HTMLElement,
    );
    expect(fn).toHaveBeenCalled();
    fragment.unmount();
  });

  it("should render card cover", () => {
    const fragment = render(
      <Tester>
        <CardCover className="p-4">
          <Image src={faker.image.url()} />
          <Title as="h3">Card Title</Title>
          <Title>Card description</Title>
        </CardCover>
      </Tester>,
    );
    expect(document.body.innerHTML).toMatchSnapshot();
    expect(
      fragment.container.querySelector(".fabric-cardCover h3.fabric-title")
        ?.innerHTML,
    ).toBe("Card Title");
    expect(
      fragment.container.querySelector(".fabric-cardCover p.fabric-title")
        ?.innerHTML,
    ).toBe("Card description");
    fragment.unmount();
  });

  it("should render card with flip content", () => {
    const fragment = render(<FlipCardTester />);
    expect(document.body.innerHTML).toMatchSnapshot();

    expect(
      fragment.container.querySelector(
        ".fabric-cardBody [data-card-flip='false']",
      ),
    ).not.toBeNull();
    fireEvent.click(fragment.getByTestId("flipToggle"));
    expect(
      fragment.container.querySelector(
        ".fabric-cardBody [data-card-flip='true']",
      ),
    ).not.toBeNull();

    fragment.unmount();
  });
});
