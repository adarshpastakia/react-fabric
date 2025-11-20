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
  Color("#d7323a").mix(Color("#171a1c"), 0.5).hex(),
  Color("#ff781c").mix(Color("#171a1c"), 0.5).hex(),
  Color("#f7b731").mix(Color("#171a1c"), 0.5).hex(),
  Color("#88ab1b").mix(Color("#171a1c"), 0.5).hex(),
  Color("#22aa85").mix(Color("#171a1c"), 0.5).hex(),
  Color("#399bec").mix(Color("#171a1c"), 0.5).hex(),
  Color("#4862c8").mix(Color("#171a1c"), 0.5).hex(),
  Color("#aa66cf").mix(Color("#171a1c"), 0.5).hex(),
  Color("#f43f7b").mix(Color("#171a1c"), 0.5).hex(),
  Color("#a37f4f").mix(Color("#171a1c"), 0.5).hex(),

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

  Color("#d7323a").mix(Color("#f1f3f4"), 0.5).hex(),
  Color("#ff781c").mix(Color("#f1f3f4"), 0.5).hex(),
  Color("#f7b731").mix(Color("#f1f3f4"), 0.5).hex(),
  Color("#88ab1b").mix(Color("#f1f3f4"), 0.5).hex(),
  Color("#22aa85").mix(Color("#f1f3f4"), 0.5).hex(),
  Color("#399bec").mix(Color("#f1f3f4"), 0.5).hex(),
  Color("#4862c8").mix(Color("#f1f3f4"), 0.5).hex(),
  Color("#aa66cf").mix(Color("#f1f3f4"), 0.5).hex(),
  Color("#f43f7b").mix(Color("#f1f3f4"), 0.5).hex(),
  Color("#a37f4f").mix(Color("#f1f3f4"), 0.5).hex(),

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
 * @returns {JSX.Element} The rendered ColorPicker component.
 *
 * @see {@link https://react-color.github.io/react-color/} for more details on the color picker library.
 */
// eslint-disable-next-line react/display-name
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
            setActualValue(Color(rgb).alpha(a)[a < 1 ? "hexa" : "hex"]())
          }
          onChangeComplete={({ rgb: { a = 1, ...rgb } }) =>
            handleChange(Color(rgb).alpha(a)[a < 1 ? "hexa" : "hex"]())
          }
        />
      </div>
    );
  },
);
