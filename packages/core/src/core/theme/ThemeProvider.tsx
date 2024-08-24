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
import classes from "./Theme.module.css";

export interface ThemeProps {
  /**
   * light/dark color scheme
   */
  colorScheme?: "light" | "dark";
  /**
   * branding css className
   *
   * .branding {
   *  --primary: #color;
   *  --accent: #color;
   *  --tint: #color;
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
  rounding?: "minimal" | "normal" | "full";
}

/**
 * Theme override
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
  const styles = useMemo(() => {
    const ret: KeyValue = {};
    if (primaryColor && isColor(primaryColor)) {
      ret["--primary"] = primaryColor;
    }
    if (primaryColor && !isColor(primaryColor)) {
      ret["--primary"] = `var(--${primaryColor})`;
    }
    if (accentColor && isColor(accentColor)) {
      ret["--accent"] = accentColor;
    }
    if (accentColor && !isColor(accentColor)) {
      ret["--accent"] = `var(--${accentColor})`;
    }
    if (tintColor && isColor(tintColor)) {
      ret["--tint"] = tintColor;
    }
    if (tintColor && !isColor(tintColor)) {
      ret["--tint"] = `var(--${tintColor})`;
    }
    return ret;
  }, [primaryColor, accentColor, tintColor]);

  return (
    <div
      style={styles}
      data-color-scheme={colorScheme}
      data-rounding={rounding}
      className={classNames(
        classes.themeProvider,
        "contents theme-base",
        branding,
      )}
    >
      {children}
    </div>
  );
};
