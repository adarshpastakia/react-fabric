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

/* istanbul ignore file */

import { isEmpty } from "./_isType";

/** ***************** latin-ascii conversions *******************/
const conversions = {
  AE: "Æ|Ǽ",
  Ae: "Ä",
  ae: "ä|æ|ǽ",
  OE: "Œ",
  Oe: "Ö",
  oe: "ö|œ",
  Ue: "Ü",
  ue: "ü",
  IJ: "Ĳ",
  ij: "ĳ",
  ss: "ß",
  A: "À|Á|Â|Ã|Ä|Å|Ǻ|Ā|Ă|Ą|Ǎ",
  a: "à|á|â|ã|å|ǻ|ā|ă|ą|ǎ|ª",
  C: "Ç|Ć|Ĉ|Ċ|Č",
  c: "ç|ć|ĉ|ċ|č",
  D: "Ð|Ď|Đ",
  d: "ð|ď|đ",
  E: "È|É|Ê|Ë|Ē|Ĕ|Ė|Ę|Ě",
  e: "è|é|ê|ë|ē|ĕ|ė|ę|ě",
  G: "Ĝ|Ğ|Ġ|Ģ",
  g: "ĝ|ğ|ġ|ģ",
  H: "Ĥ|Ħ",
  h: "ĥ|ħ",
  I: "Ì|Í|Î|Ï|Ĩ|Ī|Ĭ|Ǐ|Į|İ",
  i: "ì|í|î|ï|ĩ|ī|ĭ|ǐ|į|ı",
  J: "Ĵ",
  j: "ĵ",
  K: "Ķ",
  k: "ķ",
  L: "Ĺ|Ļ|Ľ|Ŀ|Ł",
  l: "ĺ|ļ|ľ|ŀ|ł",
  N: "Ñ|Ń|Ņ|Ň",
  n: "ñ|ń|ņ|ň|ŉ",
  O: "Ò|Ó|Ô|Õ|Ō|Ŏ|Ǒ|Ő|Ơ|Ø|Ǿ",
  o: "ò|ó|ô|õ|ō|ŏ|ǒ|ő|ơ|ø|ǿ|º",
  R: "Ŕ|Ŗ|Ř",
  r: "ŕ|ŗ|ř",
  S: "Ś|Ŝ|Ş|Š",
  s: "ś|ŝ|ş|š|ſ",
  T: "Ţ|Ť|Ŧ",
  t: "ţ|ť|ŧ",
  U: "Ù|Ú|Û|Ũ|Ū|Ŭ|Ů|Ű|Ų|Ư|Ǔ|Ǖ|Ǘ|Ǚ|Ǜ",
  u: "ù|ú|û|ũ|ū|ŭ|ů|ű|ų|ư|ǔ|ǖ|ǘ|ǚ|ǜ",
  Y: "Ý|Ÿ|Ŷ",
  y: "ý|ÿ|ŷ",
  W: "Ŵ",
  w: "ŵ",
  Z: "Ź|Ż|Ž",
  z: "ź|ż|ž",
  f: "ƒ",
};

/**
 * Converts a string to its ASCII representation by replacing
 * special characters with their ASCII equivalents.
 * This function is useful for normalizing strings for search or display purposes.
 * It replaces characters like "Ä" with "Ae", "ß" with "ss", etc.
 *
 * @param {string} str - The input string to be converted.
 * @returns {string} - The ASCII representation of the input string.
 */
export const ascii = (str: string) => {
  if (isEmpty(str)) return "";
  Object.entries(conversions).forEach((entry) => {
    const re = new RegExp(entry[1], "g");
    str = `${str}`.replace(re, entry[0]);
  });
  return str;
};
