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

import { useMemoDebugger } from "../hooks/useEffectDebugger";
import { reduceHotKey, type HotKeyProps } from "./commons";

export const HotKeyLabel = ({
  keyCombo,
}: Omit<HotKeyProps, "global" | "handler">) => {
  const label = useMemoDebugger(
    () => {
      const item = reduceHotKey({ keyCombo });

      const label = [];
      if (item.alt) label.push("ALT");
      if (item.ctrl) label.push("CTRL");
      if (item.meta) label.push("META");
      if (item.shift) label.push("SHIFT");
      if (item.key.toLowerCase() === "tab") label.push("TAB");
      else if (item.key.toLowerCase() === "space") label.push("SPC");
      else if (item.key.toLowerCase() === "arrowleft") label.push("LEFT");
      else if (item.key.toLowerCase() === "arrowright") label.push("RIGHT");
      else if (item.key.toLowerCase() === "arrowup") label.push("UP");
      else if (item.key.toLowerCase() === "arrowdown") label.push("DOWN");
      else if (item.key.toLowerCase() === "enter") label.push("ENTER");
      else if (item.key.toLowerCase() === "delete") label.push("DEL");
      else if (item.key.toLowerCase() === "escape") label.push("ESC");
      else if (item.key.toLowerCase() === "backspace") label.push("BKSPC");
      else label.push(item.key.toUpperCase());
      return [<span key="label">{label.join(" ")}</span>];
    },
    [keyCombo],
    "HotKey label",
  );

  return (
    <kbd className="hotkey-label inline-flex gap-1 select-none self-center font-mono items-center text-[0.625rem] leading-4 bg-tint-500/10 text-base/50 whitespace-nowrap rounded px-2 mx-1">
      {label}
    </kbd>
  );
};
