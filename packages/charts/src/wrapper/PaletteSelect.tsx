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

import { Button, Dropdown, Menu, MenuItem } from "@react-fabric/core";
import { ChartPalette } from "../theme/palettes";
import type { Theme } from "../types";

function PaletteMap({ colors = [], label = "" }: { label: string; colors: string[] }) {
  return (
    <div className="flex items-center">
      {colors.slice(0, 8).map((c: string) => (
        <div key={c} className="inline-block rounded-full outline w-3 h-3 mx-px" style={{ backgroundColor: c }} />
      ))}
      <div className="text-xs text-muted px-2">{label}</div>
    </div>
  );
}

export function PaletteSelect({
  onClick,
  theme = "default",
  defaultTheme = "default",
}: {
  theme?: Theme;
  defaultTheme?: Theme;
  onClick: (theme: Theme) => void;
}) {
  return (
    <Dropdown>
      <Button icon="icon-[mdi--palette-outline]" aria-label="palette" size="sm" variant="link" />
      <Menu onClick={(t) => onClick(t as Theme)}>
        <MenuItem
          id={defaultTheme}
          icon={theme === defaultTheme ? "◉" : "◯"}
          label="Default"
          labelRender={PaletteMap({ label: "Default", colors: ChartPalette.Default })}
        />
        <MenuItem
          id="qualitative"
          icon={theme === "qualitative" ? "◉" : "◯"}
          label="Qualitative"
          labelRender={PaletteMap({
            label: "Qualitative",
            colors: ChartPalette.Qualitative,
          })}
        />
        <MenuItem
          id="diverging"
          icon={theme === "diverging" ? "◉" : "◯"}
          label="Diverging"
          labelRender={PaletteMap({
            label: "Diverging",
            colors: ChartPalette.Diverging,
          })}
        />
        <MenuItem
          id="sequential"
          icon={theme === "sequential" ? "◉" : "◯"}
          label="Sequential"
          labelRender={PaletteMap({
            label: "Sequential",
            colors: ChartPalette.Sequential,
          })}
        />
        <MenuItem
          id="spectral"
          icon={theme === "spectral" ? "◉" : "◯"}
          label="Spectral"
          labelRender={PaletteMap({
            label: "Spectral",
            colors: ChartPalette.Spectral,
          })}
        />
        <MenuItem
          id="uber"
          icon={theme === "uber" ? "◉" : "◯"}
          label="Uber Pool"
          labelRender={PaletteMap({
            label: "Uber Pool",
            colors: ChartPalette.UberPool,
          })}
        />
        <MenuItem
          id="fireice"
          icon={theme === "fireice" ? "◉" : "◯"}
          label="Fire Ice"
          labelRender={PaletteMap({
            label: "Fire Ice",
            colors: ChartPalette.FireIce,
          })}
        />
        <MenuItem
          id="warming"
          icon={theme === "warming" ? "◉" : "◯"}
          label="Global Warming"
          labelRender={PaletteMap({
            label: "Global Warming",
            colors: ChartPalette.GlobalWarming,
          })}
        />
        <MenuItem
          id="sunrise"
          icon={theme === "sunrise" ? "◉" : "◯"}
          label="Sunrise"
          labelRender={PaletteMap({ label: "Sunrise", colors: ChartPalette.Sunrise })}
        />
        <MenuItem
          id="ocean"
          icon={theme === "ocean" ? "◉" : "◯"}
          label="Ocean"
          labelRender={PaletteMap({ label: "Ocean", colors: ChartPalette.Ocean })}
        />
        <MenuItem
          id="wine"
          icon={theme === "wine" ? "◉" : "◯"}
          label="Wine"
          labelRender={PaletteMap({ label: "Wine", colors: ChartPalette.Wine })}
        />
      </Menu>
    </Dropdown>
  );
}
