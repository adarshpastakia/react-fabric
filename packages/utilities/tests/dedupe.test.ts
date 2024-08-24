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

import { dedupe, flattenAndDedupe, groupBy } from "../src";

describe("dedupe test", () => {
  it("should dedupe", (done) => {
    expect(dedupe(["test", "next", "text", "test"])).toEqual([
      "test",
      "next",
      "text",
    ]);
    done();
  });

  it("should flatten and dedupe", (done) => {
    expect(flattenAndDedupe()).toEqual([]);
    expect(
      flattenAndDedupe(
        [
          [
            {
              field: "test",
            },
          ],
          [
            {
              field: "text",
            },
            { field: "test" },
          ],
        ],
        "field",
      ),
    ).toEqual([
      {
        field: "test",
      },
      {
        field: "text",
      },
    ]);
    done();
  });

  it("should group", (done) => {
    expect(
      groupBy(
        [
          { key: "item1", value: "Item Value 1" },
          { key: "item1", value: "Item Value 2" },
          { key: "item2", value: "Item Value 3" },
          { key: "item2", value: "Item Value 4" },
          { value: "Item Value 5" },
          { value: "Item Value 6" },
        ],
        "key",
        "missing",
      ),
    ).toEqual({
      item1: [
        { key: "item1", value: "Item Value 1" },
        { key: "item1", value: "Item Value 2" },
      ],
      item2: [
        { key: "item2", value: "Item Value 3" },
        { key: "item2", value: "Item Value 4" },
      ],
      missing: [{ value: "Item Value 5" }, { value: "Item Value 6" }],
    });
    done();
  });
});
