/*
 * React Fabric
 * @version: 1.0.0
 *
 *
 * The MIT License (MIT)
 * Copyright (c) 2026 Adarsh Pastakia
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

import { Button, Card, Dropdown, Icon } from "@react-fabric/core";
import { Slider } from "@react-fabric/form";
import { useState } from "react";
import { useViewState } from "../hooks/useViewState";
import { TooltipButton } from "./TooltipButton";

type ColorscapeType = ReturnType<typeof useViewState>["state"]["colorscape"];

export const ColorOptions = ({
  colorscape,
  onChange,
  onReset,
}: {
  colorscape: ColorscapeType;
  onReset: () => void;
  onChange: (key: keyof ColorscapeType, value: number) => void;
}) => {
  const [dropdownRoot, setDropdownRoot] = useState<HTMLDivElement>();

  return (
    <Dropdown root={dropdownRoot} showArrow>
      <TooltipButton
        tooltip="Options"
        variant="link"
        color="muted"
        icon="icon-[mdi--tune]"
        aria-label="Options"
        ref={(el) => setDropdownRoot(el?.parentElement as HTMLDivElement)}
      />
      <Card bodyClassName="p-2 text-sm w-2xs">
        <div className="flex justify-between items-center">
          <span>Options</span>
          <Button size="xs" variant="link" color="muted" onClick={onReset}>
            Reset
          </Button>
        </div>
        <Slider
          min={0}
          max={10}
          step={0.1}
          showLabels
          value={colorscape.saturate}
          onSlide={(v) => onChange("saturate", v ?? 0)}
          onChange={(v) => onChange("saturate", v ?? 0)}
          minLabel={
            (
              <Icon
                icon="icon-[mdi--circle-half-full]"
                {...{ title: "Saturate" }}
              />
            ) as any
          }
          maxLabel={
            (
              <div className="text-xs w-12">
                {colorscape.saturate.toFixed(2)}
              </div>
            ) as any
          }
        />
        <Slider
          min={0}
          max={10}
          step={0.1}
          showLabels
          value={colorscape.contrast}
          onSlide={(v) => onChange("contrast", v ?? 0)}
          onChange={(v) => onChange("contrast", v ?? 0)}
          minLabel={
            (
              <Icon
                icon="icon-[mdi--contrast-circle]"
                {...{ title: "Contrast" }}
              />
            ) as any
          }
          maxLabel={
            (
              <div className="text-xs w-12">
                {colorscape.contrast.toFixed(2)}
              </div>
            ) as any
          }
        />
        <Slider
          min={0}
          max={10}
          step={0.1}
          showLabels
          value={colorscape.brightness}
          onSlide={(v) => onChange("brightness", v ?? 0)}
          onChange={(v) => onChange("brightness", v ?? 0)}
          minLabel={
            (
              <Icon
                icon="icon-[mdi--brightness]"
                {...{ title: "Brightness" }}
              />
            ) as any
          }
          maxLabel={
            (
              <div className="text-xs w-12">
                {colorscape.brightness.toFixed(2)}
              </div>
            ) as any
          }
        />
        <Slider
          min={0}
          max={360}
          step={1}
          showLabels
          value={colorscape.hue}
          onSlide={(v) => onChange("hue", v ?? 0)}
          onChange={(v) => onChange("hue", v ?? 0)}
          minLabel={
            (
              <Icon
                icon="icon-[mdi--format-color-fill]"
                {...{ title: "Hue" }}
              />
            ) as any
          }
          maxLabel={
            (
              <div className="text-xs w-12">{colorscape.hue.toFixed(2)}</div>
            ) as any
          }
        />
        <Slider
          min={0}
          max={1}
          step={1}
          showLabels
          value={colorscape.invert}
          onSlide={(v) => onChange("invert", v ?? 0)}
          onChange={(v) => onChange("invert", v ?? 0)}
          minLabel={
            (
              <Icon icon="icon-[mdi--invert-colors]" {...{ title: "Invert" }} />
            ) as any
          }
          maxLabel={
            (
              <div className="text-xs w-12">{colorscape.invert.toFixed(2)}</div>
            ) as any
          }
        />
      </Card>
    </Dropdown>
  );
};
