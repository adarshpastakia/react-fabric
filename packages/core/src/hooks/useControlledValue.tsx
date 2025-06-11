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

import { useDeferredValue, useState } from "react";
import { useEffectDebugger } from "./useEffectDebugger";

/**
 * Custom hook to manage a controlled value with a default fallback for inputs.
 * It updates the current value whenever the deferred value changes.
 * This is useful for scenarios where you want to control the value of a component
 * while also providing a default value if the controlled value is not set.
 * This hook is particularly useful for form inputs or components that require a controlled value
 * but also need to handle cases where the value might not be immediately available.
 *
 * @param value - The controlled value that may change.
 * @param defaultValue - The default value to use if the controlled value is not set.
 * @returns An object containing the current value and a function to update it.
 */
export const useControlledValue = <T extends AnyObject = string>(
  value: T,
  defaultValue: T,
) => {
  const [currentValue, updateValue] = useState<T>(defaultValue);
  const deferred = useDeferredValue(value);

  useEffectDebugger(
    () => {
      updateValue(deferred ?? defaultValue);
    },
    [deferred],
    "useControlledValue change",
  );

  return { currentValue, updateValue };
};
