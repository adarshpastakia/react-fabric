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

import { isColor } from "@react-fabric/utilities";
import classNames from "classnames";
import { useMemo } from "react";
import { type ChildrenProp } from "../../types";
import { useApplicationContext } from "../../context/Global";

export interface ThemeProps {
  /**
   * light/dark color scheme
   */
  colorScheme?: "light" | "dark";
  /**
   * branding css className
   *
   * .branding {
   *  --color-primary: #color;
   *  --color-accent: #color;
   *  --color-tint: #color;
   * }
   */
  branding?: string;
  /**
   * primary color
   */
  primaryColor?: string;
  /**
   * accent color
   */
  accentColor?: string;
  /**
   * tint mix color
   */
  tintColor?: string;
  /**
   * component rounding
   */
  rounding?: "sm" | "md" | "full";
}

/**
 * This component provides a way to set the theme for the application.
 * It allows you to set the primary, accent, and tint colors, as well as the color scheme and rounding.
 * It uses CSS variables to apply the colors and styles.
 * It also applies the branding className to the root element.
 * The component uses the `useApplicationContext` hook to get the current color scheme from the application context.
 *
 * @example
 * ```jsx
 * <ThemeProvider
 *   branding="my-branding"
 *   primaryColor="#ff0000"
 *   accentColor="#00ff00"
 *   tintColor="#0000ff"
 *   colorScheme="dark"
 *   rounding="md"
 * >
 *   <div>Your content here</div>
 * </ThemeProvider>
 * ```
 *
 * @see {@link https://adarshpastakia.github.io/react-fabric/?path=/story/core-application--theme-provider} for more details.
 */
export const ThemeProvider = ({
  children,
  branding,
  primaryColor,
  accentColor,
  tintColor,
  colorScheme,
  rounding,
}: ThemeProps & ChildrenProp) => {
  const { currentColorScheme } = useApplicationContext();
  const styles = useMemo(() => {
    const ret: KeyValue = {};
    if (primaryColor && isColor(primaryColor)) {
      ret["--color-primary"] = primaryColor;
    }
    if (primaryColor && !isColor(primaryColor)) {
      ret["--color-primary"] = `var(--color-${primaryColor})`;
    }
    if (accentColor && isColor(accentColor)) {
      ret["--color-accent"] = accentColor;
    }
    if (accentColor && !isColor(accentColor)) {
      ret["--color-accent"] = `var(--color-${accentColor})`;
    }
    if (tintColor && isColor(tintColor)) {
      ret["--color-tint"] = tintColor;
    }
    if (tintColor && !isColor(tintColor)) {
      ret["--color-tint"] = `var(--color-${tintColor})`;
    }
    return ret;
  }, [primaryColor, accentColor, tintColor]);

  return (
    <div
      style={styles}
      data-color-scheme={colorScheme ?? currentColorScheme}
      data-rounding={rounding}
      className={classNames(
        "fabric-themeProvider",
        "contents theme-base",
        branding,
      )}
    >
      {children}
    </div>
  );
};
