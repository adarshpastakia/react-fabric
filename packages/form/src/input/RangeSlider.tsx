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
import {
  Fragment,
  useCallback,
  useDeferredValue,
  useEffect,
  useMemo,
  useState,
} from "react";
import { InputWrapper } from "../internal/InputWrapper";
import { useRanger } from "../ranger";
import { type InputProps } from "../types";

export interface RangeProps
  extends Omit<
    InputProps<[number, number]>,
    "placeholder" | "allowClear" | "children"
  > {
  /**
   * min value
   */
  min?: number;
  /**
   * max value
   */
  max?: number;
  /**
   * increment step
   */
  step?: number;
  /**
   * Range color
   */
  color?: string;
  /**
   * Range height (only vertical)
   */
  height?: number;
  /**
   * vertical orientation
   */
  vertical?: boolean;
  /**
   * display value tooltip
   */
  showValue?: boolean;
  /**
   * display min/max labels
   */
  showLabels?: boolean;
  /**
   * custom min label
   */
  minLabel?: string;
  /**
   * custom max label
   */
  maxLabel?: string;
  /**
   * step ranges
   */
  ranges?: number[];
  /**
   * format value
   */
  format?: string;
  /**
   * slide event handler
   */
  onSlide?: (val: number) => void;
}

/**
 * RangeSlider component for rendering a range slider input.
 * It supports vertical orientation, custom colors, step increments,
 * min/max values, and display of labels and value tooltips.
 * The component uses the Ranger library for handling the slider functionality.
 * It also provides error handling and supports disabled and read-only states.
 * The component is designed to be flexible and customizable, allowing for various configurations.
 *
 * @param {RangeProps} props - The properties for the RangeSlider component.
 * @returns {JSX.Element} The rendered RangeSlider component.
 */
export const RangeSlider = ({
  error,
  name,
  value,
  step = 1,
  min = 0,
  max = 100,
  height = 192,
  color,
  vertical,
  showLabels,
  showValue,
  minLabel,
  maxLabel,
  ranges,
  format,
  autoFocus,
  disabled,
  readOnly,
  onBlur,
  onChange,
  onEnterPressed,
  onFocus,
  onSlide,
  invalid,
  ...rest
}: RangeProps) => {
  const [actualValue, setActualValue] = useState<[number, number]>([0, 0]);
  const [displayValue, setDisplayValue] = useState(false);
  const deferred = useDeferredValue(value);

  const minValue = useMemo(() => ranges?.[0] ?? min, [min, ranges]);
  const maxValue = useMemo(() => ranges?.slice(-1)[0] ?? max, [max, ranges]);

  useEffect(() => {
    setActualValue(deferred ?? [min, max]);
  }, [deferred, min, max]);
  useEffect(() => {
    setDisplayValue(!!showValue);
  }, [showValue]);

  const handleChange = useCallback(
    (val: [number, number]) => {
      setActualValue(val ?? [min, max]);
      onChange?.(val ?? null);
    },
    [onChange, min, max],
  );

  const minDisplay = useMemo(
    () => (
      <span className="text-sm text-dimmed px-2.5 py-px whitespace-nowrap overflow-hidden text-center">
        {minLabel ?? Format.number(min, format)}
      </span>
    ),
    [minLabel, min, format],
  );
  const maxDisplay = useMemo(
    () => (
      <span className="text-sm text-dimmed px-2.5 py-px whitespace-nowrap overflow-hidden text-center">
        {maxLabel ?? Format.number(max, format)}
      </span>
    ),
    [maxLabel, max, format],
  );

  const rangerInstance = useRanger({
    values: actualValue,
    min: minValue,
    max: maxValue,
    stepSize: step,
    steps: ranges,
    vertical,
    tickSize: Math.max((max - min) / 10, step),
    onDrag: (val) => onSlide?.(val[0]),
    onDragStart: () => setDisplayValue(true),
    onDragEnd: () => setDisplayValue(!!showValue),
    onChange: (values: readonly number[]) =>
      handleChange([values[0], values[1]]),
  });

  return (
    <InputWrapper
      {...rest}
      noOutline
      error={error}
      invalid={invalid}
      isDisabled={disabled}
      isReadOnly={readOnly}
      canClear={!!actualValue}
    >
      <div
        className={classNames(
          "flex-1 order-3 flex items-center select-none z-0",
          vertical && "flex-col w-8",
          invalid ? "text-danger-500" : "text-primary-600",
        )}
        data-vertical={!!vertical}
        style={invalid ? undefined : { color }}
      >
        {showLabels && (vertical ? maxDisplay : minDisplay)}
        <div
          ref={rangerInstance.trackElRef}
          className={classNames(
            "flex-1 relative flex items-center",
            vertical ? "my-2 w-8" : "mx-2 h-8",
          )}
          style={{ height: vertical ? height : undefined }}
        >
          {rangerInstance.ticks.map(({ value, key, styles }) => (
            <div
              key={key}
              className={classNames(
                "absolute inline-block h-1 w-1 rounded-sm bg-invert opacity-30 leading-[0] z-1",
                vertical && "left-1/2 -ml-0.5",
              )}
              style={styles}
            />
          ))}
          {rangerInstance.segments.map(({ key, styles, active }) => (
            <div
              key={key}
              className={classNames(
                "absolute",
                active
                  ? "bg-current z-1 opacity-90"
                  : "bg-invert opacity-5 z-0",
                vertical
                  ? "-bottom-1 left-1/2 -translate-x-1/2"
                  : "top-1/2 -translate-y-1/2",
                !vertical && (active ? "h-1" : "h-0.5"),
                vertical && (active ? "w-1" : "w-0.5"),
              )}
              style={styles}
            />
          ))}
          {rangerInstance.handles.map(
            ({ key, value, props, styles, valueStyles }) => (
              <Fragment key={key}>
                <button
                  type="button"
                  className={classNames(
                    "bg-current cursor-pointer appearance-none h-3 w-3 rounded-full z-1 absolute",
                    "focus:ring-2 focus:ring-offset-2",
                    vertical && "left-1/2 -ml-1.5",
                  )}
                  {...props}
                  style={styles}
                />
                {displayValue && (
                  <div
                    className={classNames(
                      "bg-invert text-invert py-px px-2 text-xs absolute rounded z-1 whitespace-nowrap",
                      "before:absolute before:h-1.5 before:w-1.5 before:z-[-1] before:bg-invert before:top-1/2 before:-translate-y-1/2 before:rotate-45",
                      vertical
                        ? "end-0 ltr:translate-x-full rtl:-translate-x-full translate-y-2"
                        : "top-1/2 -translate-y-1/2",
                      !vertical &&
                        (key === 0
                          ? "-ms-3 ltr:-translate-x-full rtl:translate-x-full ltr:before:translate-x-[0.125rem] rtl:before:-translate-x-[0.125rem] before:end-0"
                          : "ms-3 ltr:before:-translate-x-[0.125rem] rtl:before:translate-x-[0.125rem] before:start-0"),
                    )}
                    data-align={key === 0 ? "start" : "end"}
                    style={valueStyles}
                  >
                    {Format.number(value, format)}
                  </div>
                )}
              </Fragment>
            ),
          )}
        </div>
        {showLabels && (vertical ? minDisplay : maxDisplay)}
      </div>
    </InputWrapper>
  );
};
