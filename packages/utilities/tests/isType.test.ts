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

import {
  isBoolean,
  isColor,
  isEmpty,
  isFalse,
  isNil,
  isNull,
  isNumber,
  isObject,
  isRtl,
  isString,
  isSvgPath,
  isTrue,
  isUndefined,
} from "../src";

describe("check type test", () => {
  it("should check nils", (done) => {
    expect(isUndefined(undefined)).toBeTruthy();
    expect(isUndefined(null)).toBeFalsy();
    expect(isNull(null)).toBeTruthy();
    expect(isNull(undefined)).toBeFalsy();
    expect(isNil(null)).toBeTruthy();
    expect(isNil(undefined)).toBeTruthy();
    done();
  });
  it("should check empty", (done) => {
    expect(isEmpty("test")).toBeFalsy();
    expect(isEmpty(9)).toBeFalsy();
    expect(isEmpty(true)).toBeFalsy();
    expect(isEmpty([1, 2])).toBeFalsy();
    expect(isEmpty({ a: 1, b: 2 })).toBeFalsy();
    expect(isEmpty(new Map([["a", "test"]]))).toBeFalsy();

    expect(isEmpty("")).toBeTruthy();
    expect(isEmpty([])).toBeTruthy();
    expect(isEmpty({})).toBeTruthy();
    expect(isEmpty(new Map())).toBeTruthy();
    done();
  });
  it("should check string", (done) => {
    expect(isString("test")).toBeTruthy();
    expect(isString(9)).toBeFalsy();
    done();
  });
  it("should check number", (done) => {
    expect(isNumber(9)).toBeTruthy();
    expect(isNumber("9")).toBeFalsy();
    done();
  });
  it("should check boolean", (done) => {
    expect(isBoolean(true)).toBeTruthy();
    expect(isBoolean("true")).toBeFalsy();
    done();
  });
  it("should check truthy", (done) => {
    expect(isTrue()).toBeFalsy();
    expect(isTrue(true)).toBeTruthy();
    expect(isTrue("true")).toBeTruthy();
    expect(isTrue("yes")).toBeTruthy();
    done();
  });
  it("should check falsy", (done) => {
    expect(isFalse()).toBeFalsy();
    expect(isFalse(false)).toBeTruthy();
    expect(isFalse("false")).toBeTruthy();
    expect(isFalse("no")).toBeTruthy();
    done();
  });
  it("should check object", (done) => {
    expect(isObject({ a: 1 })).toBeTruthy();
    expect(isObject("{a:1}")).toBeFalsy();
    done();
  });
  it("should check svg path", (done) => {
    expect(isSvgPath("M9 9z")).toBeTruthy();
    expect(isSvgPath("M9,56.8-89.12 9z")).toBeTruthy();
    expect(isSvgPath("1,1 45z")).toBeFalsy();
    done();
  });
  it("should check color", (done) => {
    expect(isColor("blue")).toBeFalsy();
    expect(isColor("#fc9832")).toBeTruthy();
    done();
  });
  it("should check rtl", (done) => {
    expect(isRtl()).toBeFalsy();
    done();
  });
});
