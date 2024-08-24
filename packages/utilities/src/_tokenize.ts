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

import { isArray, isEmpty } from "./_isType";

/**
 * split text into array of tokens by word boundaries
 * @param str
 * @param keywords
 * @internal
 */
export const tokenize = (str: string, keywords?: string | string[]) => {
  if (isEmpty(keywords)) {
    return [[str, ""]];
  }
  const keys = isArray(keywords) ? keywords : [keywords];
  const keyMap = keys.map((key) => {
    // escape regex control characters
    let escapedKey = key.replace(/([+*.?^$()[\]\\!&|\-=])/gm, "\\$1");
    // place token within word boundaries if start/end with alpha-numeric
    if (key.match(/^[a-z0-9]/i) != null) escapedKey = `\\b${escapedKey}`;
    if (key.match(/[a-z0-9]$/i) != null) escapedKey = `${escapedKey}\\b`;
    return escapedKey;
  });
  const regx = new RegExp(`(${keyMap.join("|")})`, "img");
  let match;
  let lastIndex = 0;
  const tokens = [];
  while ((match = regx.exec(str)) !== null) {
    tokens.push([
      str.substring(lastIndex, match.index),
      str.substring(match.index, regx.lastIndex),
    ]);
    lastIndex = regx.lastIndex;
  }
  tokens.push([str.substring(lastIndex), ""]);
  return tokens;
};

export const iconToken = (str: string) => {
  const split = str.trim().split(" ");
  const first = split[0];
  const last = split.length > 1 && split.pop();
  return (
    first && last
      ? `${first.charAt(0)}${last.charAt(0)}`
      : `${first.substring(0, 2)}`
  ).toUpperCase();
};
