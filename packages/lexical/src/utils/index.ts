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
  isArray,
  isObject,
  isString,
  matchString,
} from "@react-fabric/utilities";

export function isHTMLElement(x: unknown): x is HTMLElement {
  return x instanceof HTMLElement;
}

export class Point {
  private readonly _x: number;
  private readonly _y: number;

  constructor(x: number, y: number) {
    this._x = x;
    this._y = y;
  }

  get x(): number {
    return this._x;
  }

  get y(): number {
    return this._y;
  }

  public equals({ x, y }: Point): boolean {
    return this.x === x && this.y === y;
  }

  public calcDeltaXTo({ x }: Point): number {
    return this.x - x;
  }

  public calcDeltaYTo({ y }: Point): number {
    return this.y - y;
  }

  public calcHorizontalDistanceTo(point: Point): number {
    return Math.abs(this.calcDeltaXTo(point));
  }

  public calcVerticalDistance(point: Point): number {
    return Math.abs(this.calcDeltaYTo(point));
  }

  public calcDistanceTo(point: Point): number {
    return Math.sqrt(
      Math.pow(this.calcDeltaXTo(point), 2) +
        Math.pow(this.calcDeltaYTo(point), 2),
    );
  }
}

export function isPoint(x: unknown): x is Point {
  return x instanceof Point;
}

interface ContainsPointReturn {
  result: boolean;
  reason: {
    isOnTopSide: boolean;
    isOnBottomSide: boolean;
    isOnLeftSide: boolean;
    isOnRightSide: boolean;
  };
}

export class Rect {
  private readonly _left: number;
  private readonly _top: number;
  private readonly _right: number;
  private readonly _bottom: number;

  constructor(left: number, top: number, right: number, bottom: number) {
    const [physicTop, physicBottom] =
      top <= bottom ? [top, bottom] : [bottom, top];

    const [physicLeft, physicRight] =
      left <= right ? [left, right] : [right, left];

    this._top = physicTop;
    this._right = physicRight;
    this._left = physicLeft;
    this._bottom = physicBottom;
  }

  get top(): number {
    return this._top;
  }

  get right(): number {
    return this._right;
  }

  get bottom(): number {
    return this._bottom;
  }

  get left(): number {
    return this._left;
  }

  get width(): number {
    return Math.abs(this._left - this._right);
  }

  get height(): number {
    return Math.abs(this._bottom - this._top);
  }

  public equals({ top, left, bottom, right }: Rect): boolean {
    return (
      top === this._top &&
      bottom === this._bottom &&
      left === this._left &&
      right === this._right
    );
  }

  public contains({ x, y }: Point): ContainsPointReturn;
  public contains({ top, left, bottom, right }: Rect): boolean;
  public contains(target: Point | Rect): boolean | ContainsPointReturn {
    if (isPoint(target)) {
      const { x, y } = target;

      const isOnTopSide = y < this._top;
      const isOnBottomSide = y > this._bottom;
      const isOnLeftSide = x < this._left;
      const isOnRightSide = x > this._right;

      const result =
        !isOnTopSide && !isOnBottomSide && !isOnLeftSide && !isOnRightSide;

      return {
        reason: {
          isOnBottomSide,
          isOnLeftSide,
          isOnRightSide,
          isOnTopSide,
        },
        result,
      };
    } else {
      const { top, left, bottom, right } = target;

      return (
        top >= this._top &&
        top <= this._bottom &&
        bottom >= this._top &&
        bottom <= this._bottom &&
        left >= this._left &&
        left <= this._right &&
        right >= this._left &&
        right <= this._right
      );
    }
  }

  public intersectsWith(rect: Rect): boolean {
    const { left: x1, top: y1, width: w1, height: h1 } = rect;
    const { left: x2, top: y2, width: w2, height: h2 } = this;
    const maxX = x1 + w1 >= x2 + w2 ? x1 + w1 : x2 + w2;
    const maxY = y1 + h1 >= y2 + h2 ? y1 + h1 : y2 + h2;
    const minX = x1 <= x2 ? x1 : x2;
    const minY = y1 <= y2 ? y1 : y2;
    return maxX - minX <= w1 + w2 && maxY - minY <= h1 + h2;
  }

  public generateNewRect({
    left = this.left,
    top = this.top,
    right = this.right,
    bottom = this.bottom,
  }): Rect {
    return new Rect(left, top, right, bottom);
  }

  static fromLTRB(
    left: number,
    top: number,
    right: number,
    bottom: number,
  ): Rect {
    return new Rect(left, top, right, bottom);
  }

  static fromLWTH(
    left: number,
    width: number,
    top: number,
    height: number,
  ): Rect {
    return new Rect(left, top, left + width, top + height);
  }

  static fromPoints(startPoint: Point, endPoint: Point): Rect {
    const { y: top, x: left } = startPoint;
    const { y: bottom, x: right } = endPoint;
    return Rect.fromLTRB(left, top, right, bottom);
  }

  static fromDOM(dom: HTMLElement): Rect {
    const { top, width, left, height } = dom.getBoundingClientRect();
    return Rect.fromLWTH(left, width, top, height);
  }
}

export const convertLatLng = (lonLat: AnyObject) => {
  if (
    (isArray(lonLat) && lonLat.length === 2) ||
    (isArray(lonLat) && lonLat.length === 3)
  ) {
    return [Number(lonLat[0]), Number(lonLat[1])];
  }

  if (isObject(lonLat)) {
    if ("longitude" in lonLat) {
      return [lonLat.longitude, lonLat.latitude];
    }
    return ["lon" in lonLat ? lonLat.lon : lonLat.lng, lonLat.lat];
  }

  if (isString(lonLat)) {
    const [lat, lon] = lonLat.split(",");
    return [+lon, +lat];
  }

  throw Error("Invalid geo cooredinates");
};

export const convertToDMS = (coord: number, isLat = false) => {
  const degree = Math.floor(coord);
  const hour = (coord - degree) * 60;
  const minute = (hour - Math.floor(hour)) * 60;

  return `${degree}˚${Math.floor(hour)}'${minute.toFixed(2)}"${
    coord < 0 ? (isLat ? "S" : "W") : isLat ? "N" : "E"
  }`;
};

export const getLocationAsText = (latlon: AnyObject) => {
  const [lon, lat] = convertLatLng(latlon);
  return `${convertToDMS(lat, true)}, ${convertToDMS(lon)}`;
};

export const getLocationUrl = (latlon: AnyObject) => {
  const [lon, lat] = convertLatLng(latlon);
  return `https://google.com/maps/?q=${lat},${lon}`;
};

export const bookmarksFilterHookMatcher = (
  bookmark: KeyValue,
  query: string,
) => {
  return (
    matchString(bookmark.subtype ?? bookmark.type, query) ||
    matchString(bookmark.fileName ?? bookmark.name, query) ||
    ("message" in bookmark && matchString(bookmark.message ?? "", query)) ||
    ("title" in bookmark && matchString(bookmark.title ?? "", query)) ||
    ("url" in bookmark && matchString(bookmark.url ?? "", query)) ||
    ("category" in bookmark && matchString(bookmark.category ?? "", query)) ||
    ("device" in bookmark && matchString(bookmark.device ?? "", query)) ||
    ("browser" in bookmark && matchString(bookmark.browser ?? "", query)) ||
    ("from" in bookmark &&
      bookmark.from.phone &&
      matchString(bookmark.from.phone ?? "", query)) ||
    ("from" in bookmark &&
      bookmark.from.name &&
      matchString(bookmark.from.name ?? "", query)) ||
    ("to" in bookmark &&
      bookmark.to.phone &&
      matchString(bookmark.to.phone ?? "", query)) ||
    ("to" in bookmark &&
      bookmark.to.name &&
      matchString(bookmark.to.name ?? "", query))
  );
};
