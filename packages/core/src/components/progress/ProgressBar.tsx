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
import type { CustomColors } from "../../types";
import { getColor } from "../../utils";

export interface ProgressProps {
  /**
   * progress value (0-1)
   */
  value: number;
  /**
   * size
   */
  size?: "xxs" | "xs" | "sm" | "md" | "lg" | "xl";
  /**
   * color
   */
  color?: CustomColors;
  /**
   * animate
   */
  animate?: boolean;
  /**
   * progress label
   */
  label?: string;
}

const SizeMap: KeyValue<string> = {
  "": "0.875rem",
  xxs: "3px",
  xs: "0.375rem",
  sm: "0.625rem",
  md: "1.125rem",
  lg: "1.5rem",
  xl: "2rem",
};

/**
 * A component that displays a progress bar indicating the completion percentage of a task or operation.
 * The progress bar is styled with a background color and a track that fills based on the value provided.
 * It can also display a label showing the percentage value.
 * The label can be customized or hidden based on the props provided.
 *
 * @example
 * ```jsx
 * <ProgressBar value={0.75} size="md" color="primary-500" label="Loading" animate />
 * // Renders a progress bar with 75% completion, medium size, primary color, and a label "Loading"
 *
 * <ProgressBar value={0.5} size="lg" color="success-500" />
 * // Renders a progress bar with 50% completion, large size, and success color without a label
 * ```
 */
export function ProgressBar({ value = 0, size, color = "primary-500", label = "", animate }: ProgressProps) {
  /** ***************** make sure value is between 0 and 100 *******************/
  const actualValue = useMemoDebugger(() => Math.min(Math.max(value, 0), 1), [value], "ProgressBar value");

  const progressVar = useMemoDebugger<KeyValue>(
    () => ({
      "--progress": actualValue * 100,
    }),
    [actualValue],
    "ProgressBar cssVar",
  );

  /** ***************** component *******************/
  return (
    <div
      className={cn("fabric-progressbar", "block bg-tint-50 relative rounded font-bold overflow-hidden whitespace-nowrap")}
      style={{
        ...progressVar,
        color: getColor(color),
        minHeight: SizeMap[size ?? ""],
        fontSize: SizeMap[size ?? ""],
      }}
      data-animate={animate}
      aria-hidden="true"
    >
      {!["xxs", "xs", "sm"].includes(size ?? "") && (
        <div className="absolute inset-0 text-center z-0 align-top">
          {label} {Format.percent(actualValue)}
        </div>
      )}
      <div
        className={cn(
          "fabric-progressTrack",
          animate && "fabric-progressAnimate",
          "h-full overflow-clip bg-current relative z-0",
        )}
      />
      {!["xxs", "xs", "sm"].includes(size ?? "") && (
        <div
          className={cn("h-full absolute inset-0 overflow-hidden z-1")}
          data-label={`${label} ${Format.percent(actualValue)}`}
        />
      )}
    </div>
  );
}
