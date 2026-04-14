/*
 * React Fabric
 * @version: 1.0.0
 *
 *
 * The MIT License (MIT)
 * Copyright (c) 2026 Adarsh Pastakia
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

export async function getSvgAsDataUrl(svg: SVGElement) {
  const clone = svg.cloneNode(true) as SVGGraphicsElement;
  clone.setAttribute("encoding", 'UTF-8"');

  const fileReader = new FileReader();
  const imgs = Array.from(clone.querySelectorAll("image"));

  for (const img of imgs) {
    const src = img.getAttribute("xlink:href");
    if (src) {
      if (!src.startsWith("data:")) {
        const blob = await (await fetch(src)).blob();
        const base64 = await new Promise<string>((resolve, reject) => {
          fileReader.onload = () => resolve(fileReader.result as string);
          fileReader.onerror = () => reject(fileReader.error);
          fileReader.readAsDataURL(blob);
        });
        img.setAttribute("xlink:href", base64);
      }
    }
  }

  const svgStr = new XMLSerializer().serializeToString(clone);
  // NOTE: `unescape` works everywhere although deprecated
  const base64SVG = typeof window !== "undefined" ? window.btoa(unescape(encodeURIComponent(svgStr))) : "";
  return `data:image/svg+xml;base64,${base64SVG}`;
}
