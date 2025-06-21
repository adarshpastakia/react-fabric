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

import Color from "color";
import { DarkThemeBase } from "./darkBase";
import { LightThemeBase } from "./lightBase";
import { ChartPalette } from "./palettes";

const makePaletteSequence = (colors: string[]) => {
  return [...colors, ...[...colors.slice(1, -1)].reverse()];
};

export const registerTheme = (
  echarts: AnyObject,
  key: string,
  colors: string[],
  heatmap: string[],
) => {
  const base = colors[0];
  const handles = Color(base).mix(Color("#f1f5f9"), 0.15).hex();
  const window = Color(base).alpha(0.1).hexa();
  echarts.registerTheme(`${key}`, {
    ...LightThemeBase,
    dataZoom: {
      ...LightThemeBase.dataZoom,
      fillerColor: window,
      selectedDataBackground: {
        areaStyle: {
          color: base,
        },
        lineStyle: {
          color: Color(base).mix(Color("#0f172a"), 0.35).hex(),
        },
      },
      handleColor: base,
      moveHandleStyle: { color: base },
      emphasis: {
        handleColor: {
          color: handles,
        },
        moveHandleStyle: {
          color: handles,
        },
      },
    },
    visualMap: {
      textStyle: {
        color: "#666",
      },
      inRange: {
        color: heatmap,
      },
      outOfRange: {
        color: "#d9d9d9",
      },
    },
    color: makePaletteSequence(colors),
  });
  echarts.registerTheme(`${key}_dark`, {
    ...DarkThemeBase,
    dataZoom: {
      ...DarkThemeBase.dataZoom,
      fillerColor: window,
      selectedDataBackground: {
        areaStyle: {
          color: Color(base).mix(Color("#f1f5f9"), 0.35).hex(),
        },
        lineStyle: { color: base },
      },
      handleColor: base,
      moveHandleStyle: { color: base },
      emphasis: {
        handleColor: {
          color: handles,
        },
        moveHandleStyle: {
          color: handles,
        },
      },
    },
    visualMap: {
      textStyle: {
        color: "#eee",
      },
      inRange: {
        color: heatmap,
      },
      outOfRange: {
        color: "#363636",
      },
    },
    color: makePaletteSequence(colors),
  });
};

export const registerThemes = (echarts: AnyObject) => {
  echarts.registerTheme("default", {
    ...LightThemeBase,
    color: ChartPalette.Default,
  });
  echarts.registerTheme("default_dark", {
    ...DarkThemeBase,
    color: ChartPalette.Default,
  });

  registerTheme(echarts, "activity", ChartPalette.Activity, [
    ChartPalette.Activity[2],
    ChartPalette.Activity[0],
    ChartPalette.Activity[1],
  ]);
  registerTheme(echarts, "qualitative", ChartPalette.Qualitative, [
    ChartPalette.Qualitative[2],
    ChartPalette.Qualitative[1],
    ChartPalette.Qualitative[0],
  ]);
  registerTheme(echarts, "diverging", ChartPalette.Diverging, [
    ChartPalette.Diverging[0],
    ChartPalette.Diverging[4],
    ChartPalette.Diverging[10],
  ]);
  registerTheme(echarts, "sequential", ChartPalette.Sequential, [
    ChartPalette.Sequential[4],
    ChartPalette.Sequential[2],
    ChartPalette.Sequential[0],
  ]);
  registerTheme(echarts, "spectral", ChartPalette.Spectral, [
    ChartPalette.Spectral[9],
    ChartPalette.Spectral[5],
    ChartPalette.Spectral[1],
  ]);
  registerTheme(echarts, "uber", ChartPalette.UberPool, [
    ChartPalette.UberPool[1],
    ChartPalette.UberPool[4],
    ChartPalette.UberPool[8],
  ]);
  registerTheme(echarts, "fireice", ChartPalette.FireIce, [
    ChartPalette.FireIce[0],
    ChartPalette.FireIce[4],
    ChartPalette.FireIce[7],
  ]);
  registerTheme(echarts, "warming", ChartPalette.GlobalWarming, [
    ChartPalette.GlobalWarming[0],
    ChartPalette.GlobalWarming[3],
    ChartPalette.GlobalWarming[6],
  ]);
  registerTheme(echarts, "sunrise", ChartPalette.Sunrise, [
    ChartPalette.Sunrise[1],
    ChartPalette.Sunrise[4],
    ChartPalette.Sunrise[7],
  ]);
  registerTheme(echarts, "ocean", ChartPalette.Ocean, [
    ChartPalette.Ocean[1],
    ChartPalette.Ocean[3],
    ChartPalette.Ocean[5],
  ]);
  registerTheme(echarts, "wine", ChartPalette.Wine, [
    ChartPalette.Wine[1],
    ChartPalette.Wine[3],
    ChartPalette.Wine[5],
  ]);
  registerTheme(echarts, "blue", ChartPalette.GreenBlue.slice().reverse(), [
    ChartPalette.GreenBlue[6],
    ChartPalette.GreenBlue[3],
    ChartPalette.GreenBlue[0],
  ]);
  registerTheme(echarts, "green", ChartPalette.YellowGreen.slice().reverse(), [
    ChartPalette.YellowGreen[6],
    ChartPalette.YellowGreen[3],
    ChartPalette.YellowGreen[0],
  ]);
  registerTheme(echarts, "red", ChartPalette.OrangeRed.slice().reverse(), [
    ChartPalette.OrangeRed[6],
    ChartPalette.OrangeRed[3],
    ChartPalette.OrangeRed[0],
  ]);
};
