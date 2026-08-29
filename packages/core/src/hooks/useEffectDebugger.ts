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

/* istanbul ignore file */

import { getLogger } from "@react-fabric/utilities";
import { useEffect, useLayoutEffect, useMemo, useRef } from "react";

const loggerM = getLogger("useMemoDebugger");
const loggerE = getLogger("useEffectDebugger");
const loggerLE = getLogger("useLayoutEffectDebugger");

const getValue = (value: unknown) => {
  if (typeof value === "string") return value.substr(0, 24);
  if (typeof value === "number" || typeof value === "boolean") return value;
  if (typeof value === "function") return "anonymous function";
  if (typeof value === "object" && value !== null) {
    if ("type" in value && typeof value.type === "object" && value.type && "name" in value.type && value.type.name)
      return value.type.name;
    if ("tagName" in value) return value.tagName;
    if ("name" in value) return value.name;
  }
  return value;
};

const compareInputs = (
  oldInputs: React.DependencyList,
  newInputs: React.DependencyList,
  prefix: string,
  logger: ReturnType<typeof getLogger>,
) => {
  if (
    typeof window !== "undefined" &&
    // @ts-expect-error ignore
    window.DEBUG_EFFECTS !== true
  )
    return;

  // Edge-case: different array lengths
  if (oldInputs.length !== newInputs.length) {
    // Not helpful to compare item by item, so just output the whole array
    logger.debug("Deps have a different length", { process: prefix }, oldInputs.length, newInputs.length);
    return;
  }

  // Compare individual items
  oldInputs.forEach((oldInput: AnyObject, index) => {
    const newInput: AnyObject = newInputs[index];
    const diff: unknown[] = [];
    if (oldInput !== newInput) {
      diff.push(`Dep [${index}] has a different value`, getValue(oldInput), "=>", getValue(newInput), "\n\n");
    }
    if (diff.length) logger.debug("Diff", { process: prefix }, ...diff);
  });
};

/**
 * Custom hook to debug useMemo hooks.
 * It compares the current and previous dependency arrays and logs any differences.
 * @param {() => T} func - The function to be memoized or executed in the effect.
 * @param {DependencyList} inputs - The dependency array for the hook.
 * @param {string} prefix - A prefix for the log messages to identify the hook.
 * @returns The result of the memoized function or the effect.
 *
 * @example
 * ```jsx
 * const value = useMemoDebugger(() => computeValue(), [dependency1, dependency2], "MyComponent");
 * ```
 */
export function useMemoDebugger<T>(func: () => T, inputs: React.DependencyList, prefix: string): T {
  // Ref holding inputs from the previous render (or current on first run)
  const oldInputsRef = useRef(inputs);
  return useMemo<T>(() => {
    const oldInputs = oldInputsRef.current;
    compareInputs(oldInputs, inputs, prefix, loggerM);
    oldInputsRef.current = inputs;
    return func();
    // eslint-disable-next-line @eslint-react/exhaustive-deps
  }, inputs);
}

/**
 * Custom hook to debug useEffect and useLayoutEffect hooks.
 * It compares the current and previous dependency arrays and logs any differences.
 * @param {EffectCallback} func - The effect function to be executed.
 * @param {DependencyList} inputs - The dependency array for the effect.
 * @param {string} prefix - A prefix for the log messages to identify the effect.
 * @returns A cleanup function if the effect returns one.
 *
 * @example
 * ```jsx
 * useEffectDebugger(() => {
 *   // Effect logic here
 *   return () => {
 *     // Cleanup logic here
 *   };
 * }, [dependency1, dependency2], "MyComponent");
 * ```
 */
export function useEffectDebugger(func: React.EffectCallback, inputs: React.DependencyList, prefix: string) {
  // Ref holding inputs from the previous render (or current on first run)
  const oldInputsRef = useRef(inputs);
  useEffect(() => {
    const oldInputs = oldInputsRef.current;

    compareInputs(oldInputs, inputs, prefix, loggerE);

    oldInputsRef.current = inputs;

    return func();
    // eslint-disable-next-line @eslint-react/exhaustive-deps
  }, inputs);
}

/**
 * Custom hook to debug useLayoutEffect hooks.
 * It compares the current and previous dependency arrays and logs any differences.
 * @param {EffectCallback} func - The layout effect function to be executed.
 * @param {DependencyList} inputs - The dependency array for the layout effect.
 * @param {string} prefix - A prefix for the log messages to identify the layout effect.
 * @returns A cleanup function if the layout effect returns one.
 *
 * @example
 * ```jsx
 *   // Layout effect logic here
 *     // Cleanup logic here
 *   };
 * ```
 */
export function useLayoutEffectDebugger(func: React.EffectCallback, inputs: React.DependencyList, prefix: string) {
  // Using a ref to hold the inputs from the previous run (or same run for initial run
  const oldInputsRef = useRef(inputs);
  useLayoutEffect(() => {
    const oldInputs = oldInputsRef.current;

    compareInputs(oldInputs, inputs, prefix, loggerLE);

    oldInputsRef.current = inputs;

    return func();
    // eslint-disable-next-line @eslint-react/exhaustive-deps
  }, inputs);
}
