/**
 * React Fabric
 * @version 1.0.0
 * @license MIT
 * @copyright 2024 Adarsh Pastakia
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import { cn, isColor, isString } from "@react-fabric/utilities";
import { useMemo } from "react";
import { useApplicationContext } from "../../context/context";
import type { ChildrenProp, CustomColors } from "../../types";

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
   *  --color-secondary: #color;
   *  --color-tint: #color;
   * }
   */
  branding?: string;
  /**
   * primary color
   */
  primaryColor?: CustomColors;
  /**
   * secondary color
   */
  secondaryColor?: CustomColors;
  /**
   * tint mix color
   */
  tintColor?: CustomColors;
  /**
   * component rounding
   */
  rounding?: "sm" | "md" | "full";
}

/**
 * Sets CSS custom properties for theme colors (primary, secondary, tint) and applies branding class.
 */
export function ThemeProvider({
  children,
  branding,
  primaryColor,
  secondaryColor,
  tintColor,
  colorScheme,
  rounding,
}: ThemeProps & ChildrenProp) {
  const { currentColorScheme } = useApplicationContext();
  const styles = useMemo(() => {
    const ret: KeyValue = {};
    if (isString(primaryColor)) {
      ret["--color-primary"] = isColor(primaryColor) ? primaryColor : `var(--color-${primaryColor})`;
    }
    if (isString(secondaryColor)) {
      ret["--color-secondary"] = isColor(secondaryColor) ? secondaryColor : `var(--color-${secondaryColor})`;
    }
    if (isString(tintColor)) {
      ret["--color-tint"] = isColor(tintColor) ? tintColor : `var(--color-${tintColor})`;
    }
    return ret;
  }, [primaryColor, secondaryColor, tintColor]);

  return (
    <div
      style={styles}
      data-color-scheme={colorScheme ?? currentColorScheme}
      data-rounding={rounding}
      className={cn("fabric-themeProvider", "contents theme-base", branding)}
    >
      {children}
    </div>
  );
}
