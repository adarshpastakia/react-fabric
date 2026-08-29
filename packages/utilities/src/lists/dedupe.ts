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

import { isEmpty } from "../matchers/isEmpty";

/**
 * Remove duplicates from a list of objects based on a key or the entire object.
 * If a key is provided, it will deduplicate based on the value of that key.
 * If no key is provided, it will deduplicate based on the entire object.
 * This is useful for normalizing data structures that may have nested arrays or objects.
 *
 * @param list
 * @param key
 * @typedef {T} AnyObject - A generic type representing list items.
 * @returns {T[]} - A new array with duplicates removed.
 */
export function dedupe<T extends AnyObject>(list: T[], key?: keyof T) {
  const filtered = list.filter((i) => !isEmpty(i));
  if (!key) {
    return Array.from(new Set(filtered).values());
  }

  return Array.from(new Map(filtered.map((obj) => [(obj as KeyValue)[key], obj])).values());
}
