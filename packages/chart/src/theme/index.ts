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

import { DarkThemeBase } from "./darkBase";
import { LightThemeBase } from "./lightBase";
import { ChartPalette } from "./palettes";
import Color from "color";

const makePaletteSequence = (colors: string[]) => {
  return [...colors, ...[...colors.slice(1, -1)].reverse()];
};

export const registerTheme = (
  echarts: AnyObject,
  key: string,
  colors: string[],
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

  echarts.registerTheme("activity", {
    ...LightThemeBase,
    color: ChartPalette.Activity,
  });
  echarts.registerTheme("activity_dark", {
    ...DarkThemeBase,
    color: ChartPalette.Activity,
  });

  registerTheme(echarts, "qualitative", ChartPalette.Qualitative);
  registerTheme(echarts, "diverging", ChartPalette.Diverging);
  registerTheme(echarts, "sequential", ChartPalette.Sequential);
  registerTheme(echarts, "spectral", ChartPalette.Spectral);
  registerTheme(echarts, "uber", ChartPalette.UberPool);
  registerTheme(echarts, "fireice", ChartPalette.FireIce);
  registerTheme(echarts, "warming", ChartPalette.GlobalWarming);
  registerTheme(echarts, "sunrise", ChartPalette.Sunrise);
  registerTheme(echarts, "ocean", ChartPalette.Ocean);
  registerTheme(echarts, "wine", ChartPalette.Wine);
};
