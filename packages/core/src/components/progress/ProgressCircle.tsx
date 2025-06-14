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

import { Format } from "@react-fabric/utilities";
import classNames from "classnames";
import { useMemoDebugger } from "../../hooks/useEffectDebugger";
import { type PaletteType, type ColorType } from "../../types";
import { getColor } from "../../utils";

export interface ProgressProps {
  /**
   * progress value (0-1)
   */
  value: number;
  /**
   * size
   */
  size?: "sm" | "md" | "lg" | "xl";
  /**
   * color
   */
  color?: ColorType | PaletteType;
}

const SizeMap: KeyValue = {
  "": "1rem",
  sm: "0.875rem",
  md: "1.125rem",
  lg: "1.5rem",
  xl: "2rem",
};

/**
 * A circular progress indicator that visually represents a percentage of completion.
 * It displays a circular track with a stroke that fills based on the `value` prop.
 * The component is customizable with size and color props.
 *
 * @param {ProgressProps} props - The properties for the ProgressCircle component.
 * @returns {JSX.Element} - A circular progress indicator.
 *
 * @example
 * ```jsx
 * <ProgressCircle value={0.75} size="md" color="primary-500" />
 * // Renders a circular progress indicator with 75% completion, medium size, and primary color.
 *
 * <ProgressCircle value={0.5} size="lg" color="secondary-500" />
 * // Renders a circular progress indicator with 50% completion, large size, and secondary color.
 * ```
 *
 * @see {@link https://adarshpastakia.github.io/react-fabric/?path=/docs/core-components-progress--docs} for more details.
 */
export const ProgressCircle = ({
  value = 0,
  size = "sm",
  color = "primary-500",
}: ProgressProps) => {
  /** ***************** make sure value is between 0 and 100 *******************/
  const actualValue = useMemoDebugger(
    () => Math.min(Math.max(value, 0), 1),
    [value],
    "ProgressCirle value",
  );

  /** ***************** calculate stroke offset by actual value *******************/
  const strokeDashoffset = useMemoDebugger(
    () => {
      const circumfrence = Math.PI * 2 * 44;
      return circumfrence * (1 - actualValue);
    },
    [actualValue],
    "ProgressCirle dashOffset",
  );

  /** ***************** component *******************/
  return (
    <div
      className={classNames("inline-block w-[4em] h-[4em] text-lg relative")}
      aria-hidden="true"
      style={{ fontSize: SizeMap[size], color: getColor(color) }}
    >
      <svg
        viewBox="0 0 100 100"
        className={classNames("absolute inset-0 w-full h-full stroke-dimmed")}
      >
        <circle
          cx="50"
          cy="50"
          r="44"
          strokeWidth="12"
          strokeOpacity="0.25"
          fillOpacity="0"
        />
        <circle
          cx="50"
          cy="50"
          r="44"
          stroke="currentColor"
          strokeWidth="12"
          fillOpacity="0"
          style={{
            transform: "rotate(-90deg)",
            transformOrigin: "center",
            strokeDasharray: Math.PI * 2 * 44,
            strokeDashoffset,
            transition: "stroke-dashoffset 0.5s",
          }}
        />
      </svg>
      <span className="flex w-full h-full items-center justify-center select-none font-bold text-[0.625em]">
        {Format.percent(actualValue)}
      </span>
    </div>
  );
};
