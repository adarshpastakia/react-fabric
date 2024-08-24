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

const COlORS = {
  silver: "#989da5",
  steel: "#7c99af",
  olive: "#769b8d",
  sand: "#9b9789",
  info: "#00bfff",
  danger: "#f24c3d",
  success: "#44bc69",
  warning: "#edaa00",
  scarlet: "#e5484d",
  pumpkin: "#f76a15",
  marigold: "#ffc100",
  avacado: "#46a758",
  jade: "#29a383",
  denim: "#0190ff",
  iris: "#5b5bd6",
  lilac: "#8e4ec6",
  coral: "#e93d82",
  wood: "#ad7f58",
};

const colorMix = (color: string, shader: string, percent: number) =>
  `color-mix(in lab, ${applyAlpha(color)} ${percent}%,  ${applyAlpha(shader)})`;

const applyAlpha = (color: string) =>
  `color(from ${color} srgb r g b / <alpha-value>)`;

export const colors = {
  black: "#191a1b",
  white: "#fefdfc",
  bg: `${applyAlpha("var(--fabric-bg)")}`,
  text: `${applyAlpha("var(--fabric-text)")}`,
  primary: {
    DEFAULT: "var(--primary)",
    50: colorMix("var(--primary)", "var(--fabric-bg)", 10),
    100: colorMix("var(--primary)", "var(--fabric-bg)", 27),
    200: colorMix("var(--primary)", "var(--fabric-bg)", 45),
    300: colorMix("var(--primary)", "var(--fabric-bg)", 62),
    400: colorMix("var(--primary)", "var(--fabric-bg)", 80),
    500: applyAlpha("var(--primary)"),
    600: colorMix("var(--primary)", "var(--fabric-text)", 80),
    700: colorMix("var(--primary)", "var(--fabric-text)", 62),
    800: colorMix("var(--primary)", "var(--fabric-text)", 45),
    900: colorMix("var(--primary)", "var(--fabric-text)", 27),
    950: colorMix("var(--primary)", "var(--fabric-text)", 10),
  },
  accent: {
    DEFAULT: "var(--accent)",
    50: colorMix("var(--accent)", "var(--fabric-bg)", 10),
    100: colorMix("var(--accent)", "var(--fabric-bg)", 27),
    200: colorMix("var(--accent)", "var(--fabric-bg)", 45),
    300: colorMix("var(--accent)", "var(--fabric-bg)", 62),
    400: colorMix("var(--accent)", "var(--fabric-bg)", 80),
    500: applyAlpha("var(--accent)"),
    600: colorMix("var(--accent)", "var(--fabric-text)", 80),
    700: colorMix("var(--accent)", "var(--fabric-text)", 62),
    800: colorMix("var(--accent)", "var(--fabric-text)", 45),
    900: colorMix("var(--accent)", "var(--fabric-text)", 27),
    950: colorMix("var(--accent)", "var(--fabric-text)", 10),
  },
  tint: {
    DEFAULT: "var(--tint)",
    50: colorMix("var(--tint)", "var(--fabric-bg)", 10),
    100: colorMix("var(--tint)", "var(--fabric-bg)", 27),
    200: colorMix("var(--tint)", "var(--fabric-bg)", 45),
    300: colorMix("var(--tint)", "var(--fabric-bg)", 62),
    400: colorMix("var(--tint)", "var(--fabric-bg)", 80),
    500: applyAlpha("var(--tint)"),
    600: colorMix("var(--tint)", "var(--fabric-text)", 80),
    700: colorMix("var(--tint)", "var(--fabric-text)", 62),
    800: colorMix("var(--tint)", "var(--fabric-text)", 45),
    900: colorMix("var(--tint)", "var(--fabric-text)", 27),
    950: colorMix("var(--tint)", "var(--fabric-text)", 10),
  },
  ...Object.entries(COlORS).reduce(
    (ret, [key, color]) => ({
      ...ret,
      [key]: {
        DEFAULT: color,
        50: colorMix(color, "var(--fabric-bg)", 10),
        100: colorMix(color, "var(--fabric-bg)", 27),
        200: colorMix(color, "var(--fabric-bg)", 45),
        300: colorMix(color, "var(--fabric-bg)", 62),
        400: colorMix(color, "var(--fabric-bg)", 80),
        500: applyAlpha(color),
        600: colorMix(color, "var(--fabric-text)", 80),
        700: colorMix(color, "var(--fabric-text)", 62),
        800: colorMix(color, "var(--fabric-text)", 45),
        900: colorMix(color, "var(--fabric-text)", 27),
        950: colorMix(color, "var(--fabric-text)", 10),
      },
    }),
    {},
  ),
};

export const backgroundColor = {
  inherit: "inherit",
  current: "currentColor",
  transparent: "transparent",
  DEFAULT: colorMix("var(--fabric-bg)", "var(--tint)", 99),
  base: colorMix("var(--fabric-bg)", "var(--tint)", 99),
  dimmed: colorMix("var(--fabric-bg)", "var(--tint)", 90),
  muted: colorMix("var(--fabric-bg)", "var(--tint)", 80),
  gray: colorMix("var(--fabric-bg)", "var(--tint)", 50),
  dark: colorMix("var(--black)", "var(--tint)", 90),
  light: colorMix("var(--white)", "var(--tint)", 90),
  invert: colorMix("var(--fabric-bg)", "var(--fabric-text)", 5),
};
export const textColor = {
  inherit: "inherit",
  current: "currentColor",
  transparent: "transparent",
  DEFAULT: colorMix("var(--fabric-text)", "var(--tint)", 95),
  base: colorMix("var(--fabric-text)", "var(--tint)", 95),
  dimmed: colorMix("var(--fabric-text)", "var(--tint)", 65),
  muted: colorMix("var(--fabric-text)", "var(--tint)", 45),
  gray: colorMix("var(--fabric-text)", "var(--tint)", 50),
  dark: colorMix("var(--black)", "var(--tint)", 75),
  light: colorMix("var(--white)", "var(--tint)", 75),
  invert: colorMix("var(--fabric-text)", "var(--fabric-bg)", 5),
};
export const borderColor = {
  inherit: "inherit",
  current: "currentColor",
  transparent: "transparent",
  DEFAULT: colorMix("var(--fabric-bg)", "var(--tint)", 65),
  base: colorMix("var(--fabric-bg)", "var(--tint)", 65),
  dimmed: colorMix("var(--fabric-bg)", "var(--tint)", 72),
  muted: colorMix("var(--fabric-bg)", "var(--tint)", 80),
  gray: applyAlpha("var(--tint)"),
  dark: colorMix("var(--black)", "var(--tint)", 75),
  light: colorMix("var(--white)", "var(--tint)", 75),
};
