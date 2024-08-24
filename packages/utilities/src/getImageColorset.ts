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

export const getImageColorset = (el: HTMLImageElement) => {
  // create canvas
  const canvas = document.createElement("canvas");
  canvas.width = Math.min(500, el.naturalWidth);
  canvas.height = Math.min(500, el.naturalHeight);

  const ctx = canvas.getContext("2d");
  if (ctx != null) {
    ctx.drawImage(
      el,
      0,
      0,
      el.naturalWidth,
      el.naturalHeight,
      0,
      0,
      canvas.width,
      canvas.height,
    );

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    let r, g, b;
    let dark = 0;
    let light = 0;
    let totalPixels = 0;
    let transparent = data?.[3] === 0;

    for (let x = 0, len = data.length; x < len; x += 4) {
      if (data[x + 3] === 0) {
        transparent = true;
        continue;
      }
      if (transparent && data[x - 1] === 1) {
        continue;
      }
      r = data[x];
      g = data[x + 1];
      b = data[x + 2];
      totalPixels++;
      0.2126 * r + 0.7152 * g + 0.0722 * b < 128 ? dark++ : light++;
    }

    const diff = light / totalPixels - dark / totalPixels;
    let ret = diff > 0 ? "light" : "dark";
    if (transparent) {
      ret += "_transparent";
    }
    return ret;
  }
  return "light";
};

if (typeof window !== "undefined")
  // @ts-expect-error ignore
  window.getImageColorset = getImageColorset;
