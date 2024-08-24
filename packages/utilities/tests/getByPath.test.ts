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

import { getByPath, getValue } from "../src";

describe("get values by JSON path", () => {
  const tester = {
    outer: {
      inner: {
        main: {
          name: "Test",
          age: 18,
        },
        "my.field": "yes",
        blank: undefined,
      },
      "some.field": "yes",
      "test.array": [
        { field: "string" },
        { field: "number" },
        { field: "boolean" },
      ],
    },
  };
  it("should get default values", (done) => {
    expect(getByPath({}, "prop", "default")).toBe("default");
    expect(getByPath({ props: "test" }, "prop", "default")).toBe("default");
    // will return empty array, reason: outer prop value is array type
    expect(
      getByPath(
        { props: [{ prop1: "temp" }, {}, "temp"] },
        "props.prop.type",
        "default",
      ),
    ).toStrictEqual([]);
    done();
  });

  it("should get inner path", (done) => {
    expect(getByPath(tester, "inner.blank")).toBe(undefined);
    expect(getByPath(tester, "outer.inner.main.name")).toBe("Test");
    expect(getByPath(tester, "outer.inner.main.age")).toBe(18);
    expect(getByPath(tester, "outer.inner.main.gender")).toBe(undefined);
    done();
  });

  it("should get inner path with . in name", (done) => {
    expect(getByPath(tester, "outer.some.field")).toBe("yes");
    expect(getByPath(tester, "outer.inner.my.field")).toBe("yes");
    expect(getByPath(tester, "outer.test.array.0")).toStrictEqual({
      field: "string",
    });
    expect(getByPath(tester, "outer.test.array.field")).toStrictEqual([
      "string",
      "number",
      "boolean",
    ]);
    done();
  });

  it("should get first no null value", (done) => {
    expect(getValue(undefined, "yes", null)).toBe("yes");
    expect(getValue(null, 0, undefined, "yes", null)).toBe(0);
    done();
  });
});
