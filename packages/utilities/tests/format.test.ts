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

import { FileUtil, Format } from "../src";

describe("format test", () => {
  it("should format number", (done) => {
    expect(Format.number()).toBe("");
    expect(Format.number(9.9)).toBe("9.90");
    expect(Format.number(9990)).toBe("9.99k");
    expect(Format.number("-9.81")).toBe("-9.81");
    expect(Format.number("+9.24")).toBe("+9.24");
    done();
  });

  it("should format bytes", (done) => {
    expect(Format.bytes()).toBe("");
    expect(Format.bytes(1000)).toBe("1KB");
    expect(Format.bytes(1000 * 1000)).toBe("1MB");
    expect(Format.bytes(1000 * 1000 * 1000)).toBe("1GB");
    done();
  });

  it("should format percentage", (done) => {
    expect(Format.percent()).toBe("");
    expect(Format.percent(0.24)).toBe("24%");
    expect(Format.percent(0.2418)).toBe("24.18%");
    done();
  });

  it("should format date", (done) => {
    expect(Format.date()).toBe("");
    expect(Format.date("2020-01-01")).toBe("1-1-2020");
    expect(Format.date("2020-01-01", "dd-MMM-y")).toBe("01-Jan-2020");
    done();
  });

  it("should format duration", (done) => {
    expect(Format.duration()).toBe("00:00.000");
    expect(Format.duration("test")).toBe("00:00.000");
    expect(Format.duration(Infinity)).toBe("∞");
    expect(Format.duration(86400000 + 14400000 + 1740000 + 18000 + 189)).toBe(
      "1d:04:29:18.189",
    );
    expect(Format.duration(60 * 24 + 3 + 0.128, true)).toBe("24:03.128");
    done();
  });

  it("should format duration seconds", (done) => {
    expect(Format.durationSeconds()).toBe("00:00");
    expect(Format.durationSeconds("test")).toBe("00:00");
    expect(Format.durationSeconds(Infinity)).toBe("∞");
    expect(Format.durationSeconds(1000 * 60 * 24 + 3000 + 128)).toBe("24:03");
    expect(Format.durationSeconds(60 * 24 + 3 + 0.128, true)).toBe("24:03");
    done();
  });

  it("should format phone", (done) => {
    expect(Format.phone()).toBe(undefined);
    expect(Format.phone("99123")).toMatchSnapshot();
    expect(Format.phone("badphone")).toMatchSnapshot();
    expect(Format.phone("971502491824")).toMatchSnapshot();
    expect(Format.phone("00971502491824")).toMatchSnapshot();
    expect(Format.phone("00971502491824", "AE", true)).toMatchSnapshot();
    done();
  });

  it("get mime type", (done) => {
    expect(FileUtil.mime("application/pdf")).toBe("PDF");
    expect(FileUtil.mime("image/xyz")).toBe("image (xyz)");
    done();
  });
});
