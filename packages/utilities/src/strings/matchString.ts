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

import { ascii } from "./ascii";

/**
 * Match a string against another string with options for equality.
 * This function checks if the base string starts with, includes, or is equal to the match string,
 * based on the specified equality condition.
 * It normalizes both strings to lowercase and ASCII format before comparison.
 * This is useful for case-insensitive and ASCII-only comparisons,
 * such as when filtering or searching through text data.
 *
 * @param {string} base - The base string to match against.
 * @param {string} match - The string to match with the base string.
 * @param {("start" | boolean)} equality - The type of match to perform:
 *                   - "start": checks if the base string starts with the match string.
 *                   - true: checks for exact equality.
 *                   - false (default): checks if the base string includes the match string.
 * @returns {boolean} - Returns true if the base string matches the conditions specified by the match string and equality.
 */
export function matchString(base: string, match: string, equality: "start" | boolean = false) {
  const _base = ascii(base).toLowerCase();
  const _match = ascii(match).toLowerCase();

  return equality === true ? _base === _match : equality === "start" ? _base.startsWith(_match) : _base.includes(_match);
}
