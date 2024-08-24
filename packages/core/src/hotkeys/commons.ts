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

export interface HotKeyProps {
  /**
   * Hot key combination
   *
   * ctrl, shift, alt, meta
   * enter, space, escape, tab, backspace, delete
   * left, right, up, down
   */
  keyCombo: string;
  /**
   * Global hot key
   */
  global?: boolean;
  /**
   * Callback handler
   */
  handler?: () => void;
}

export const reduceHotKey = ({ keyCombo, global, handler }: HotKeyProps) => {
  const item = {
    key: "",
    meta: false,
    shift: false,
    ctrl: false,
    alt: false,
    _key: keyCombo,
    handler,
    global,
  };
  keyCombo.split("+").forEach((e) => {
    if (e.trim().toLowerCase() === "ctrl") {
      item.ctrl = true;
    } else if (e.trim().toLowerCase() === "alt") {
      item.alt = true;
    } else if (e.trim().toLowerCase() === "meta") {
      item.meta = true;
    } else if (e.trim().toLowerCase() === "shift") {
      item.shift = true;
    } else {
      if (e.trim().toLowerCase() === "left") item.key = "arrowleft";
      else if (e.trim().toLowerCase() === "right") item.key = "arrowright";
      else if (e.trim().toLowerCase() === "up") item.key = "arrowup";
      else if (e.trim().toLowerCase() === "down") item.key = "arrowdown";
      else if (e.trim().toLowerCase().startsWith("del")) item.key = "delete";
      else if (e.trim().toLowerCase().startsWith("esc")) item.key = "escape";
      else item.key = e.trim().toLowerCase();
    }
  });
  return item;
};
