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

import {
  backgroundColor,
  borderColor,
  colors,
  textColor,
} from "./tailwind/colors";
const plugin = require("tailwindcss/plugin");

module.exports = plugin(
  ({ addUtilities, matchUtilities, addBase, theme }) => {
    matchUtilities({
      area: (value) => ({
        gridArea: value,
      }),
    });
    addUtilities({
      ".z-1": { "z-index": 1 },
      ".z-2": { "z-index": 2 },
      ".z-3": { "z-index": 3 },
      ".z-4": { "z-index": 4 },
      ".z-5": { "z-index": 5 },
      ".area-content": { "grid-area": "content" },
      ".area-head": { "grid-area": "head" },
      ".area-foot": { "grid-area": "foot" },
      ".area-side-s": { "grid-area": "side-s" },
      ".area-side-e": { "grid-area": "side-e" },
      ".area-body": { "grid-area": "body" },
      ".overflow-wrap": {
        "overflow-wrap": "anywhere",
        "word-break": "normal",
        "text-wrap": "wrap",
      },
      ".fixed-numbers": {
        "font-variant-numeric": "tabular-nums",
      },
      ".mixed-lang": {},
      ".bg-alternate": {},
      ".scroll-thin": {},
      ".scroll-hide": {},
      ...Object.fromEntries(
        Object.entries(theme("spacing")).map(([key, size]) => [
          `.gap-${key}`,
          { gap: size, "--gutter": size },
        ]),
      ),
      ".span-1": { flex: "0 1 calc((1 / 12) * 100% - var(--gutter, 0px))" },
      ".span-2": { flex: "0 1 calc((2 / 12) * 100% - var(--gutter, 0px))" },
      ".span-3": { flex: "0 1 calc((3 / 12) * 100% - var(--gutter, 0px))" },
      ".span-4": { flex: "0 1 calc((4 / 12) * 100% - var(--gutter, 0px))" },
      ".span-5": { flex: "0 1 calc((5 / 12) * 100% - var(--gutter, 0px))" },
      ".span-6": { flex: "0 1 calc((6 / 12) * 100% - var(--gutter, 0px))" },
      ".span-7": { flex: "0 1 calc((7 / 12) * 100% - var(--gutter, 0px))" },
      ".span-8": { flex: "0 1 calc((8 / 12) * 100% - var(--gutter, 0px))" },
      ".span-9": { flex: "0 1 calc((9 / 12) * 100% - var(--gutter, 0px))" },
      ".span-10": { flex: "0 1 calc((10 / 12) * 100% - var(--gutter, 0px))" },
      ".span-11": { flex: "0 1 calc((11 / 12) * 100% - var(--gutter, 0px))" },
      ".span-12": { flex: "0 1 calc((12 / 12) * 100% - var(--gutter, 0px))" },
    });
  },
  {
    darkMode: ["selector", '[data-color-scheme="dark"]'],
    safelist: [
      "font-san",
      "font-serif",
      "font-mono",
      "object-fit",
      "object-cover",
      "object-contain",
      "self-start",
      "self-center",
      "self-end",
      "self-stretch",
      "items-start",
      "items-center",
      "items-end",
      "items-stretch",
      "justify-start",
      "justify-center",
      "justify-end",
      "justify-between",
      "animate-spin",
      "animate-pulse",
      "animate-bounce",
      "animate-progress",
      {
        pattern:
          /bg-(black|white|base|dimmed|muted|dark|light|invert|silver|steel|olive|sand|info|danger|success|warning|scarlet|pumpkin|marigold|avacado|jade|denim|iris|lilac|coral|wood|primary|accent|tint)(-\d*)?/,
      },
      {
        pattern:
          /text-(black|white|base|dimmed|muted|dark|light|invert|silver|steel|olive|sand|info|danger|success|warning|scarlet|pumpkin|marigold|avacado|jade|denim|iris|lilac|coral|wood|primary|accent|tint)(-\d*)?/,
      },
      {
        pattern:
          /ring-(info|danger|success|warning|primary|accent|tint)(-\d*)?/,
      },
      {
        pattern:
          /border-(black|white|base|dimmed|muted|dark|light|invert|silver|steel|olive|sand|info|danger|success|warning|scarlet|pumpkin|marigold|avacado|jade|denim|iris|lilac|coral|wood|primary|accent|tint)(-\d*)?/,
      },
    ],
    theme: {
      fontFamily: {
        sans: [
          "Avenir Next",
          "Avenir",
          "Noto Sans",
          "Roboto",
          "Helvetica Neue",
          "Segoe UI",
          "Arial",
          "sans-serif",
          "BlinkMacSystemFont",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
        serif: [
          "Noto Serif",
          "Georgia",
          "Cambria",
          "Times New Roman",
          "Times",
          "serif",
        ],
        mono: [
          "Noto Sans Mono",
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "Courier New",
          "monospace",
        ],
      },
      colors,
      gap: {},
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        reset: ["1rem", { lineHeight: "1.5rem" }],
        md: ["1.125rem", { lineHeight: "1.5rem" }],
        lg: ["1.25rem", { lineHeight: "1.75rem" }],
        xl: ["1.5rem", { lineHeight: "2rem" }],
        "2xl": ["1.75rem", { lineHeight: "2.25rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "5xl": ["3rem", { lineHeight: "1" }],
        "6xl": ["3.75rem", { lineHeight: "1" }],
        "7xl": ["4.5rem", { lineHeight: "1" }],
        "8xl": ["6rem", { lineHeight: "1" }],
        "9xl": ["8rem", { lineHeight: "1" }],
      },
      extend: {
        backgroundColor,
        borderColor,
        stroke: borderColor,
        outlineColor: borderColor,
        textColor,
        fill: backgroundColor,
        screens: {
          xs: "320px",
        },
        keyframes: {
          cardpulse: {
            "50%": { opacity: 0.5 },
          },
          progress: {
            "0%": {
              "background-position-x": 0,
            },
            "100%": {
              "background-position-x": "1rem",
            },
          },
        },
        animation: {
          pulse: "cardpulse 2s cubic-bezier(.4,0,.6,1) infinite",
          progress: "progress 750ms linear infinite",
        },
        aspectRatio: {
          screen: "4 / 3",
          portrait: "3 / 4",
        },
        flex: {
          full: "1 1 100%",
          content: "0 0 auto",
        },
        maxWidth: {
          screen: "100vw",
        },
        minWidth: {
          screen: "100vw",
        },
        borderRadius: {
          capped: "var(--rounding-cap)",
          DEFAULT: "var(--rounding)",
        },
        boxShadow: {
          1: "0 0 0 1px var(--tw-shadow-color)",
          xs: "0 1px 1px 0 var(--tw-shadow-color)",
          sm: "0 1px 2px 0 var(--tw-shadow-color)",
          DEFAULT:
            "0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color)",
          md: "0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color)",
          lg: "0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color)",
          xl: "0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color)",
          "2xl": "0 25px 50px -12px var(--tw-shadow-color)",
          inset: "inset 0 0 2px var(--tw-shadow-color)",
          inner: "inset 0 2px 4px 0 var(--tw-shadow-color)",
          paper: "0 1px 3px 0 var(--tw-shadow-color)",
          none: "none",
        },
        boxShadowColor: {
          ...borderColor,
          DEFAULT: "var(--fabric-shadow)",
          base: "var(--fabric-shadow)",
        },
        ringOffsetColor: {
          base: "var(--fabric-bg)",
        },
      },
    },
  },
);
