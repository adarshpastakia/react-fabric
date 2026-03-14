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

import chroma from "chroma-js";
import {
  memo,
  startTransition,
  useCallback,
  useDeferredValue,
  useEffect,
  useState,
  type FC,
} from "react";
import { SketchPicker } from "react-color";

export interface ColorProps {
  /**
   * color swatches
   */
  swatches?: string[];
  /**
   * default color
   */
  defaultColor?: string;
  /**
   * hide alpha value
   */
  hideAlpha?: boolean;
  /**
   * color value
   */
  value?: string | null;
  /**
   * change handler
   */
  onChange?: (color?: string) => void;
}

const DEFAULT_SWATCHES = [
  chroma.mix("#d7323a", "#171a1c", 0.5, "lab").hex(),
  chroma.mix("#ff781c", "#171a1c", 0.5, "lab").hex(),
  chroma.mix("#f7b731", "#171a1c", 0.5, "lab").hex(),
  chroma.mix("#88ab1b", "#171a1c", 0.5, "lab").hex(),
  chroma.mix("#22aa85", "#171a1c", 0.5, "lab").hex(),
  chroma.mix("#399bec", "#171a1c", 0.5, "lab").hex(),
  chroma.mix("#4862c8", "#171a1c", 0.5, "lab").hex(),
  chroma.mix("#aa66cf", "#171a1c", 0.5, "lab").hex(),
  chroma.mix("#f43f7b", "#171a1c", 0.5, "lab").hex(),
  chroma.mix("#a37f4f", "#171a1c", 0.5, "lab").hex(),

  "#d7323a",
  "#ff781c",
  "#f7b731",
  "#88ab1b",
  "#22aa85",
  "#399bec",
  "#4862c8",
  "#aa66cf",
  "#f43f7b",
  "#a37f4f",

  chroma.mix("#d7323a", "#f1f3f4", 0.5, "lab").hex(),
  chroma.mix("#ff781c", "#f1f3f4", 0.5, "lab").hex(),
  chroma.mix("#f7b731", "#f1f3f4", 0.5, "lab").hex(),
  chroma.mix("#88ab1b", "#f1f3f4", 0.5, "lab").hex(),
  chroma.mix("#22aa85", "#f1f3f4", 0.5, "lab").hex(),
  chroma.mix("#399bec", "#f1f3f4", 0.5, "lab").hex(),
  chroma.mix("#4862c8", "#f1f3f4", 0.5, "lab").hex(),
  chroma.mix("#aa66cf", "#f1f3f4", 0.5, "lab").hex(),
  chroma.mix("#f43f7b", "#f1f3f4", 0.5, "lab").hex(),
  chroma.mix("#a37f4f", "#f1f3f4", 0.5, "lab").hex(),

  "#171a1c",
  "#2d3439",
  "#444e55",
  "#5b6971",
  "#71838e",
  "#86959e",
  "#9ca8b0",
  "#b8c1c6",
  "#d5dadd",
  "#f1f3f4",
];

/**
 * ColorPicker component allows users to select a color using a color picker UI.
 * It supports swatches, alpha transparency, and custom styles.
 * The component uses the `react-color` library for the color picker functionality.
 *
 * @param {ColorProps} props - The properties for the ColorPicker component.
 * @returns {React.ReactElement} The rendered ColorPicker component.
 *
 * @see {@link https://react-color.github.io/react-color/} for more details on the color picker library.
 */
export const ColorPicker: FC<ColorProps> = memo(
  ({
    value,
    onChange,
    hideAlpha,
    defaultColor = "#fff",
    swatches = DEFAULT_SWATCHES,
  }: ColorProps) => {
    const [actualValue, setActualValue] = useState("");
    const deferred = useDeferredValue(value ?? defaultColor);

    useEffect(() => {
      setActualValue(deferred ?? "");
    }, [deferred]);

    const handleChange = useCallback(
      (e: string) => {
        setActualValue(e ?? defaultColor);
        onChange != null && startTransition(() => onChange(e));
      },
      [onChange],
    );

    return (
      <div
        role="none"
        // prevent default on mouse down to avoid selection issues
        onMouseDown={(e) => e.preventDefault()}
      >
        <SketchPicker
          width="16rem"
          className={"fabric-colorPicker"}
          styles={
            {
              default: {
                hue: {
                  boxShadow: "0 0 1px 1px var(--color-shadow)",
                },
                alpha: {
                  backgroundColor: "var(--fabric-bg)",
                  boxShadow: "0 0 1px 1px var(--color-shadow)",
                },
                color: {
                  boxShadow: "0 0 1px 1px var(--color-shadow)",
                },
                saturation: {
                  boxShadow: "0 0 1px 1px var(--color-shadow)",
                },
                activeColor: {
                  boxShadow: "0 0 1px 1px var(--color-shadow)",
                },
                picker: {
                  backgroundColor: "var(--fabric-bg)",
                  boxShadow:
                    "0 0 0 1px var(--color-shadow), 0 0 8px var(--fabric-shadow)",
                },
                checkboard: {
                  white: "transparent",
                  black: "red",
                },
              },
            } as AnyObject
          }
          color={actualValue}
          presetColors={swatches}
          disableAlpha={hideAlpha}
          onChange={({ rgb: { a = 1, ...rgb } }) =>
            setActualValue(chroma(rgb).alpha(a).hex())
          }
          onChangeComplete={({ rgb: { a = 1, ...rgb } }) =>
            handleChange(chroma(rgb).alpha(a).hex())
          }
        />
      </div>
    );
  },
);
