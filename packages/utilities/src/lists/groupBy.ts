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

/**
 * Group a list of objects by a specific property.
 * If the property is not present in an object, it will use the `missingKey` value as the key.
 * This is useful for organizing data into categories based on a specific property.
 *
 * @param list
 * @param prop
 * @param missingKey
 * @typedef {T} KeyValue - A generic type representing list items with key-value pairs.
 * @returns {KeyValue<T[]>} - An object mapping keys to arrays of items.
 */
export function groupBy<T extends KeyValue>(list: T[], prop: keyof T, missingKey?: string): KeyValue<T[]> {
  return list.reduce<KeyValue<T[]>>(
    (r, i) => {
      const key = (i[prop] as string) ?? missingKey;
      if (!r[key]) r[key] = [];
      r[key].push(i);
      return r;
    },
    {} as KeyValue<T[]>,
  );
}
