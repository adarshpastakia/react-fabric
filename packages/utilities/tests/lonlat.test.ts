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
  ascii,
  convertLatLng,
  getLatitudeLongitude,
  getLocationAsText,
} from "../src";

describe("lonlat converter test", () => {
  it("should convert lonlat to object", (done) => {
    expect(getLatitudeLongitude("24,54")).toEqual({
      latitude: 24,
      longitude: 54,
    });
    expect(getLatitudeLongitude([54, 24])).toEqual({
      latitude: 24,
      longitude: 54,
    });
    expect(() => getLatitudeLongitude("")).toThrow("Invalid geo coordinates");
    done();
  });

  it("should convert lonlat to array", (done) => {
    expect(convertLatLng("24,54")).toEqual([54, 24]);
    expect(convertLatLng(["54", "24", 0])).toEqual([54, 24]);
    expect(convertLatLng({ lat: 24, lon: 54 })).toEqual([54, 24]);
    expect(convertLatLng({ lat: 24, lng: 54 })).toEqual([54, 24]);
    expect(convertLatLng({ latitude: 24, longitude: 54 })).toEqual([54, 24]);
    expect(() => convertLatLng("badlat")).toThrow("Invalid geo coordinates");
    done();
  });

  it("should convert lonlat to display", (done) => {
    expect(getLocationAsText("24.1248,54.8124")).toEqual(
      "24˚7'29.28\"N, 54˚48'44.64\"E",
    );
    expect(getLocationAsText("-24.1248,-54.8124")).toEqual(
      "24˚7'29.28\"S, 54˚48'44.64\"W",
    );
    done();
  });
});
