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

import { Countries } from "../src";

describe("countries test", () => {
  it("should return country model", (done) => {
    expect(Countries.find("xx")).toBeUndefined();
    const model = Countries.find("ae");
    if (model) {
      expect(model.iso3).toBe("ARE");
      expect(model.alt).toBe("UAE");
    }
    done();
  });

  it("should convert iso2 to iso3", (done) => {
    expect(Countries.toIso3("xx")).toBeUndefined();
    expect(Countries.toIso3("ae")).toBe("ARE");
    done();
  });

  it("should convert iso3 to iso2", (done) => {
    expect(Countries.toIso2("xxx")).toBeUndefined();
    expect(Countries.toIso2("are")).toBe("AE");
    done();
  });

  it("should convert alternate code to iso2", (done) => {
    expect(Countries.toIso2("uae")).toBe("AE");
    done();
  });

  it("should receive flag emoji", (done) => {
    expect(Countries.emoji("xxx")).toBe("🏳️");
    expect(Countries.emoji("are")).toBe("🇦🇪");
    done();
  });

  it("should receive country name", (done) => {
    expect(Countries.name("xxx")).toBe("xxx");
    expect(Countries.name("are")).toBe("United Arab Emirates");
    done();
  });
});
