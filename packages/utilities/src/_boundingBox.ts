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

import { isEmpty } from "./_isType";

const _getBox = (
  box: string | [number, number, number, number],
): [number, number, number, number] => {
  let boundingBox: any = box;
  if (isEmpty(box)) return [0, 0, 0, 0];
  if (typeof box === "string") {
    boundingBox = box.split(",");
  }
  if (Array.isArray(boundingBox)) {
    boundingBox = boundingBox.map((b) => parseInt(b, 10));
  }
  return boundingBox;
};

/**
 * box "x,y,w,h" | [x,y,w,h]
 * returns canvas box [x,y,w,h]
 */
export const getBox = (
  box: string | [number, number, number, number] = "0,0,0,0",
) => {
  const boundingBox = _getBox(box);

  let [x, y, w, h] = boundingBox;
  w = x < 0 ? w + x : w;
  h = y < 0 ? h + y : h;
  x = x > 0 ? x : 0;
  y = y > 0 ? y : 0;
  return [x, y, w, h] as [number, number, number, number];
};

/**
 * box "x1,y1,x2,y2" | [x1,y1,x2,y2]
 * returns canvas box [x,y,w,h]
 */
export const getBoundingBox = (
  box: string | [number, number, number, number] = "0,0,0,0",
) => {
  const boundingBox = _getBox(box);

  let [x1, y1, x2, y2] = boundingBox;
  const w = x2 - x1;
  const h = y2 - y1;
  x1 = x1 > 0 ? x1 : 0;
  y1 = y1 > 0 ? y1 : 0;
  return [x1, y1, w, h] as [number, number, number, number];
};
