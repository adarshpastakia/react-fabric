/*
 * React Fabric
 * @version: 1.0.0
 *
 *
 * The MIT License (MIT)
 * Copyright (c) 2025 Adarsh Pastakia
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
  Button,
  Card,
  CoreIcons,
  Dropdown,
  Header,
  Icon,
} from "@react-fabric/core";
import { Slider } from "@react-fabric/form";
import { TooltipButton } from "./TooltipButton";

export const Colorscape = ({
  disabled,
  colorscape,
  resetColor,
  adjustColor,
}: {
  disabled?: boolean;
  colorscape: {
    saturate: number;
    contrast: number;
    brightness: number;
    hue: number;
    invert: number;
  };
  adjustColor: (
    type: "saturate" | "contrast" | "brightness" | "hue" | "invert",
    value: number,
  ) => void;
  resetColor: () => void;
}) => {
  return (
    <Dropdown placement="top">
      <TooltipButton
        tooltip="Adjust colors"
        variant="link"
        disabled={disabled}
        aria-label="rotate-ccw"
        icon={CoreIcons.settings}
      />
      <Card bodyClassName="p-1" className="w-64">
        <Header flex justify="end">
          <Button size="xs" onClick={resetColor}>
            Reset
          </Button>
        </Header>
        <Slider
          min={0}
          max={10}
          step={0.1}
          showLabels
          value={colorscape.saturate}
          onSlide={(v) => adjustColor("saturate", v ?? 0)}
          onChange={(v) => adjustColor("saturate", v ?? 0)}
          minLabel={(<Icon icon={CoreIcons.mediaSaturate} />) as any}
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
          onSlide={(v) => adjustColor("contrast", v ?? 0)}
          onChange={(v) => adjustColor("contrast", v ?? 0)}
          minLabel={(<Icon icon={CoreIcons.mediaContrast} />) as any}
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
          onSlide={(v) => adjustColor("brightness", v ?? 0)}
          onChange={(v) => adjustColor("brightness", v ?? 0)}
          minLabel={(<Icon icon={CoreIcons.mediaLightness} />) as any}
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
          onSlide={(v) => adjustColor("hue", v ?? 0)}
          onChange={(v) => adjustColor("hue", v ?? 0)}
          minLabel={(<Icon icon={CoreIcons.mediaColor} />) as any}
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
          onSlide={(v) => adjustColor("invert", v ?? 0)}
          onChange={(v) => adjustColor("invert", v ?? 0)}
          minLabel={(<Icon icon={CoreIcons.mediaInvert} />) as any}
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
