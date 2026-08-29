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

import { Children, isValidElement } from "react";
import { Fragment } from "react/jsx-runtime";

/**
 * Flattens and clones React children, unwrapping `Fragment` wrappers.
 *
 * Recursively processes children to flatten nested `Fragment` elements,
 * returning a plain array of cloned React nodes. Useful when you need
 * to iterate over children without Fragment wrappers interfering.
 *
 * @param {React.ReactNode} children - The React children to flatten and clone.
 * @returns An array of cloned React nodes, or `undefined` if children is falsy.
 *
 * @example
 * ```tsx
 * const children = cloneChildren(<><div>A</div><Fragment><div>B</div></Fragment></>);
 * // Returns: [<div>A</div>, <div>B</div>]
 * ```
 */
export function cloneChildren(children: React.ReactNode): React.ReactNode[] | undefined {
  // eslint-disable-next-line @eslint-react/no-children-map
  return Children.map(children, (c: React.ReactNode) => {
    if (isValidElement(c)) {
      if (c.type === Fragment) {
        // just compare to `Fragment`
        return cloneChildren((c.props as KeyValue)?.children as React.ReactNode);
      }
      return c as React.ReactElement<KeyValue>;
    }
    return c;
  })
    ?.flat()
    .filter(Boolean);
}
