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

import { compareValues, isEqual, matchString } from "../src";

describe("isEqual test", () => {
  it("should check string", (done) => {
    expect(isEqual("test", "test")).toBeTruthy();
    expect(isEqual("TEST", "test")).toBeFalsy();
    done();
  });

  it("should check number", (done) => {
    expect(isEqual(9, 9)).toBeTruthy();
    expect(isEqual(9, "9")).toBeFalsy();
    done();
  });

  it("should check boolean", (done) => {
    expect(isEqual(true, true)).toBeTruthy();
    expect(isEqual(false, "false")).toBeFalsy();
    done();
  });

  it("should check array", (done) => {
    expect(isEqual([], [])).toBeTruthy();
    expect(isEqual([1, 2, 3], [1, 2, 3])).toBeTruthy();
    expect(isEqual([1, 2], [1])).toBeFalsy();
    expect(isEqual([1, 2], [1, 3])).toBeFalsy();
    expect(isEqual([1, 2], undefined)).toBeFalsy();
    done();
  });

  it("should check object", (done) => {
    expect(isEqual({}, {})).toBeTruthy();
    expect(isEqual({ a: 1 }, { a: 1 })).toBeTruthy();
    expect(isEqual({ a: 1 }, {})).toBeFalsy();
    expect(isEqual({ a: 1 }, { b: false })).toBeFalsy();
    done();
  });

  it("should check object array", (done) => {
    const obj = [
      {
        name: "First name",
        password: "Passwd!2#",
      },
      {
        isAuthenticated: true,
      },
    ];
    expect(isEqual(obj, [...obj])).toBeTruthy();
    expect(isEqual(obj, [...obj, { isAuthenticated: false }])).toBeFalsy();
    expect(
      isEqual({ ...obj, temp: [1, 2] }, { ...obj, temp: [1, 2] }),
    ).toBeTruthy();
    expect(
      isEqual({ ...obj, temp: [1, 2] }, { ...obj, temp: [1] }),
    ).toBeFalsy();
    done();
  });

  it("should match string", (done) => {
    expect(matchString("mañana", "anana")).toBeTruthy();
    expect(matchString("São Tomé", "tome")).toBeTruthy();
    expect(matchString("mañana", "manana", true)).toBeTruthy();
    expect(matchString("São Tomé", "sao tome", true)).toBeTruthy();
    expect(matchString("mañana", "man", "start")).toBeTruthy();
    expect(matchString("São Tomé", "sao", "start")).toBeTruthy();
    done();
  });

  it("should compare", (done) => {
    expect(compareValues()("testing", "testing")).toBe(0);
    expect(compareValues()("testing", "completed")).toBe(1);
    expect(compareValues()("abacus", "completed")).toBe(-1);
    expect(compareValues("desc")("testing", "completed")).toBe(-1);

    expect(compareValues()(9, 4)).toBe(1);
    expect(compareValues()(false, true)).toBe(1);
    expect(compareValues()(9, 24)).toBe(-1);
    expect(compareValues()(true, false)).toBe(-1);

    expect(
      compareValues("asc", "field")({ field: "a value" }, { field: "b value" }),
    ).toBe(-1);

    done();
  });
});
