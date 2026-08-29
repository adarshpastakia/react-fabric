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

import { Format, cn } from "@react-fabric/utilities";
import { useMemoDebugger } from "../../hooks/useEffectDebugger";
import type { CssProp, CustomColors, TestProps } from "../../types";
import { getColor } from "../../utils";

export interface MeterProps extends CssProp, TestProps {
  /**
   * meter value (0-100)
   */
  value: number;
  /**
   * hide value label
   */
  hideLabel?: boolean;

  color?: CustomColors;
}

/**
 * A component that displays a visual representation of a value as a series of dots.
 * It is useful for showing progress or completion status in a compact form.
 * The meter consists of 6 dots, each representing approximately 16.67% of the total value.
 * The active dots are filled based on the value provided, and the remaining dots are empty.
 * The component can also display a label showing the percentage value.
 *
 * @example
 * ```jsx
 * <Meter value={75} />
 * // Renders a meter with 4 active dots and a label showing "75%"
 *
 * <Meter value={50} hideLabel />
 * // Renders a meter with 3 active dots and no label
 *
 * <Meter value={100} className="custom-meter" />
 * // Renders a meter with all 6 active dots and a custom class name
 * ```
 */
export function Meter({ value, hideLabel, color, className, ...props }: MeterProps) {
  /** ***************** calculate active meter dots *******************/
  const activeCount = useMemoDebugger(
    () => {
      return value / 16.67;
    },
    [value],
    "Meter activeCount",
  );

  return (
    <div
      className={cn("fabric-meter", className, color && "gradient", "flex flex-nowrap items-center gap-0.5")}
      style={{ color: getColor(color) }}
      {...props}
    >
      {[0, 1, 2, 3, 4, 5].map((step) => (
        <div
          key={step}
          className={cn(
            "fabric-meterBar",
            "first-of-type:rounded-s last-of-type:rounded-e bg-tint-100 relative outline -outline-offset-1 outline-muted overflow-hidden after:absolute after:inset-0",
          )}
          data-active={activeCount >= step}
          style={
            {
              "--width": `${Math.min((activeCount - step) * 100, 100)}%`,
            } as React.CSSProperties
          }
        />
      ))}
      {!hideLabel && (
        <span className="fabric-meterLabel inline-block text-muted w-[4em] px-1">{Format.percent(value / 100)}</span>
      )}
    </div>
  );
}
