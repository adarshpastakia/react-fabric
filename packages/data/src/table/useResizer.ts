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

export const useResizer = (
  colEl: HTMLElement,
  ghostEl: HTMLElement,
  callback: (width: number) => void,
) => {
  const placeholder = ghostEl.firstElementChild as HTMLElement;
  const isRtl = getComputedStyle(colEl).direction === "rtl";

  const onResize = (evt: MouseEvent) => {
    /** ***************** check if reverse enabled of RTL *******************/
    const box = colEl.getBoundingClientRect();
    const x = isRtl ? box.left - evt.clientX : evt.clientX - box.right;
    placeholder.style.width = `${colEl.offsetWidth + x}px`;
  };

  /** ***************** dettach handlers on mouseup *******************/
  const onResizeEnd = () => {
    callback(placeholder.offsetWidth);
    ghostEl.style.display = "none";
    document.removeEventListener("mousemove", onResize);
    document.removeEventListener("mouseup", onResizeEnd);
  };

  /** ***************** attach handlers *******************/
  const box = colEl.getBoundingClientRect();
  if (colEl.parentElement != null) {
    const parentBox = colEl.parentElement?.getBoundingClientRect();
    if (isRtl) {
      placeholder.style.left = "unset";
      placeholder.style.right = `${box.right - parentBox.right}px`;
    } else {
      placeholder.style.right = "unset";
      placeholder.style.left = `${box.left - parentBox.left}px`;
    }
  }
  placeholder.style.width = `${colEl.offsetWidth}px`;
  placeholder.style.minWidth = colEl.style.minWidth || "48px";
  placeholder.style.maxWidth = colEl.style.maxWidth || "75vw";
  ghostEl.style.display = "block";

  document.addEventListener("mousemove", onResize);
  document.addEventListener("mouseup", onResizeEnd);
};
