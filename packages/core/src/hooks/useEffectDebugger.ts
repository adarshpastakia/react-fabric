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

/* istanbul ignore file */

import { useLogger } from "@react-fabric/utilities";
import {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  type DependencyList,
  type EffectCallback,
} from "react";

const loggerM = useLogger("useMemoDebugger");
const loggerE = useLogger("useEffectDebugger");
const loggerLE = useLogger("useLayoutEffectDebugger");

const compareInputs = (
  oldInputs: DependencyList,
  newInputs: DependencyList,
  prefix: string,
  logger: ReturnType<typeof useLogger>,
) => {
  if (
    process.env.NODE_ENV === "production" &&
    typeof window !== "undefined" &&
    // @ts-expect-error ignore
    window.DEBUG_HOOKS !== true
  )
    return;

  // Edge-case: different array lengths
  if (oldInputs.length !== newInputs.length) {
    // Not helpful to compare item by item, so just output the whole array
    logger.debug(
      "Deps have a different length",
      { process: prefix },
      oldInputs.length,
      newInputs.length,
    );
    return;
  }

  // Compare individual items
  oldInputs.forEach((oldInput: AnyObject, index) => {
    const newInput: AnyObject = newInputs[index];
    const diff = [];
    if (oldInput !== newInput) {
      diff.push(
        `Dep [${index}] has a different value`,
        oldInput?.type?.name ??
          oldInput?.tagName ??
          oldInput?.name ??
          oldInput?.substr?.(0, 24) ??
          oldInput,
        newInput?.type?.name ??
          newInput?.tagName ??
          newInput?.name ??
          newInput?.substr?.(0, 24) ??
          newInput,
        "\n\n",
      );
    }
    diff.length && logger.debug("Diff", { process: prefix }, ...diff);
  });
};

export const useMemoDebugger = <T>(
  func: () => T,
  inputs: DependencyList,
  prefix: string,
): T => {
  // Using a ref to hold the inputs from the previous run (or same run for initial run
  const oldInputsRef = useRef(inputs);
  return useMemo<T>(() => {
    // Get the old inputs
    const oldInputs = oldInputsRef.current;

    // Compare the old inputs to the current inputs
    compareInputs(oldInputs, inputs, prefix, loggerM);

    // Save the current inputs
    oldInputsRef.current = inputs;

    // Execute wrapped effect
    return func();
  }, inputs);
};

export const useEffectDebugger = (
  func: EffectCallback,
  inputs: DependencyList,
  prefix: string,
) => {
  // Using a ref to hold the inputs from the previous run (or same run for initial run
  const oldInputsRef = useRef(inputs);
  useEffect(() => {
    // Get the old inputs
    const oldInputs = oldInputsRef.current;

    // Compare the old inputs to the current inputs
    compareInputs(oldInputs, inputs, prefix, loggerE);

    // Save the current inputs
    oldInputsRef.current = inputs;

    // Execute wrapped effect
    return func();
  }, inputs);
};

export const useLayoutEffectDebugger = (
  func: EffectCallback,
  inputs: DependencyList,
  prefix: string,
) => {
  // Using a ref to hold the inputs from the previous run (or same run for initial run
  const oldInputsRef = useRef(inputs);
  useLayoutEffect(() => {
    // Get the old inputs
    const oldInputs = oldInputsRef.current;

    // Compare the old inputs to the current inputs
    compareInputs(oldInputs, inputs, prefix, loggerLE);

    // Save the current inputs
    oldInputsRef.current = inputs;

    // Execute wrapped effect
    return func();
  }, inputs);
};
