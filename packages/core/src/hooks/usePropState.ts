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

import { isEqual } from "@react-fabric/utilities";
import { useRef, useState } from "react";

export function usePropState<T>(value: T, callback?: (value: T) => void) {
  const currentRef = useRef(value);
  const [state, setState] = useState(() => value);

  if (!isEqual(currentRef.current, value)) {
    currentRef.current = value;
    setState(value);
    callback?.(value);
  }

  return [state, setState] as [T, React.Dispatch<React.SetStateAction<T>>];
}

export function usePropWatcher<T>(value: T, ...args: unknown[]) {
  const currentRef = useRef(args);
  const [state, setState] = useState(() => value);

  if (!isEqual(currentRef.current, args)) {
    currentRef.current = args;
    setState(value);
  }

  return [state, setState] as [T, React.Dispatch<React.SetStateAction<T>>];
}
