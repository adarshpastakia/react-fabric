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

declare type Key = string | number | symbol;
declare type AnyObject = any;
declare type KeyValue<T = AnyObject> = Record<Key, T>;

declare module "*.md" {
  const content: any;
  export default content;
}
declare module "*.wav" {
  const content: any;
  export default content;
}
declare module "*.mp3" {
  const content: any;
  export default content;
}
declare module "*.mp4" {
  const content: any;
  export default content;
}
declare module "*.png" {
  const content: any;
  export default content;
}
declare module "*.svg" {
  const content: any;
  export default content;
}
declare module "*.html" {
  const content: any;
  export default content;
}
declare module "*.json" {
  const content: any;
  export default content;
}
declare module "*.css" {
  const content: any;
  export default content;
}

interface HDate extends Date {
  toGregorian: () => Date;
  ignoreTime: () => HDate;
  format: (mask: string, options?: { locale?: string }) => string;

  addDay: () => HDate;
  addDays: (d: number) => HDate;
  subtractDay: () => HDate;
  subtractDays: (d: number) => HDate;

  day: number;
  date: number;
  month: number;
  year: number;
}

declare interface Date {
  toHijri: () => HDate;
}
