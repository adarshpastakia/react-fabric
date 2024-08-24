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

/* istanbul ignore file */

/** ***************** get css style property value *******************/
export const getCssStyle = (element: HTMLElement, property: string) => {
  return getComputedStyle(element).getPropertyValue(property);
};

/** ***************** calculate full width for given element *******************/
export const calculateTextWidth = (
  element: HTMLElement,
  styleRoot?: HTMLElement,
) => {
  const clone = element.cloneNode(true) as HTMLElement;
  clone.style.font = getCssStyle(styleRoot ?? element, "font");
  clone.style.padding = getCssStyle(styleRoot ?? element, "padding");
  clone.style.letterSpacing = getCssStyle(
    styleRoot ?? element,
    "letter-spacing",
  );
  clone.style.position = "absolute";
  clone.style.top = "-10000%";
  document.body.appendChild(clone);
  const width = clone.offsetWidth;
  clone.remove();
  return width;
};

/** ***************** calculate full height for given element *******************/
export const calculateTextHeight = (
  element: HTMLElement,
  styleRoot?: HTMLElement,
) => {
  const clone = element.cloneNode(true) as HTMLElement;
  clone.style.font = getCssStyle(styleRoot ?? element, "font");
  clone.style.width = `${element.offsetWidth}px`;
  clone.style.padding = getCssStyle(styleRoot ?? element, "padding");
  clone.style.lineHeight = getCssStyle(styleRoot ?? element, "line-height");
  clone.style.letterSpacing = getCssStyle(
    styleRoot ?? element,
    "letter-spacing",
  );
  clone.style.webkitLineClamp = "unset";
  clone.style.position = "absolute";
  clone.style.left = "-10000%";
  document.body.appendChild(clone);
  const height = clone.offsetHeight;
  clone.remove();
  return height;
};
