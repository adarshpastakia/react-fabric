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
 * Custom hook that returns a client-side API on the client and a server-side mock on the server.
 *
 * Useful for isomorphic components that need different behavior during SSR vs. CSR,
 * such as accessing browser APIs or window objects that are unavailable during server rendering.
 *
 * @param {any} clientApi - The client-side API object to return when running in the browser.
 * @param {any} serverMock - The mock API object to return when running on the server.
 * @returns The client API on the client, the server mock on the server, or `undefined` if neither is provided.
 *
 * @example
 * ```tsx
 * const clipboard = useClientService(
 *   { write: (text) => navigator.clipboard.writeText(text) },
 *   { write: () => Promise.resolve() }
 * );
 * ```
 */
// eslint-disable-next-line @eslint-react/no-unnecessary-use-prefix
export function useClientService<T extends AnyObject = AnyObject>(clientApi: T, serverMock?: T): T | undefined {
  return typeof window === "undefined" ? serverMock : clientApi;
}
