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

import { formatForDisplay } from "@tanstack/react-hotkeys";

/**
 * Renders a styled keyboard shortcut label from a key combination string.
 *
 * Parses the `keyCombo` string (e.g., `"Ctrl+S"`) and renders the modifier keys
 * and main key as uppercase text inside a `<kbd>` element. Arrow keys are rendered
 * as directional labels (LEFT, RIGHT, UP, DOWN).
 *
 * @example
 * ```tsx
 * <HotKeyLabel keys={['Ctrl', 'S']} />
 * // Renders: CTRL S
 * ```
 */
export function Kbd({ keys }: { keys: string | string[] }) {
  return [keys].flat().map((key, i) => (
    <kbd
      key={`${key}-${i.toString(16)}`}
      className="hotkey-label align-top inline-flex gap-1 select-none self-center font-sans items-center text-[0.625rem] leading-4 bg-tint-500/20 text-tint-900/65 whitespace-nowrap rounded px-2 mx-1"
    >
      {formatForDisplay(key, { useSymbols: true })}
    </kbd>
  ));
}
