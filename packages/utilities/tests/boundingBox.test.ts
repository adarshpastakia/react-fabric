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

import { getBoundingBox, getBox } from "../src";

describe("bounding box test", () => {
  it("should get bounding box", (done) => {
    expect(getBoundingBox()).toEqual([0, 0, 0, 0]);
    expect(getBoundingBox("")).toEqual([0, 0, 0, 0]);
    expect(getBoundingBox("10,10, 96,128")).toEqual([10, 10, 86, 118]);
    expect(getBoundingBox("-10,-10, 96,128")).toEqual([0, 0, 106, 138]);
    done();
  });

  it("should get box", (done) => {
    expect(getBox()).toEqual([0, 0, 0, 0]);
    expect(getBox("")).toEqual([0, 0, 0, 0]);
    expect(getBox("10,10, 96,128")).toEqual([10, 10, 96, 128]);
    expect(getBox("-10,-10, 96,128")).toEqual([0, 0, 86, 118]);
    done();
  });
});
