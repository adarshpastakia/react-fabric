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

import {
  createContext,
  memo,
  useCallback,
  useContext,
  useRef,
  type FC,
  type PropsWithChildren,
} from "react";
import { useEffectDebugger } from "../hooks/useEffectDebugger";
import { reduceHotKey } from "./commons";

/** @internal */
export const HotKeysContext = createContext<{
  addHotKey: (key: string, handler: () => void, global?: boolean) => void;
  removeHotKey: (key: string) => void;
}>({} as AnyObject);

export const useHotKeys = () => useContext(HotKeysContext);

export const HotKeyWrapper: FC<PropsWithChildren> = memo(
  ({ children }: PropsWithChildren) => {
    const refEl = useRef<HTMLDivElement>(null);
    const keyList = useRef<KeyValue[]>([]);

    const addHotKey = useCallback(
      (keyCombo: string, handler: () => void, global = false) =>
        (keyList.current = [
          ...keyList.current.filter(({ _key }) => _key !== keyCombo),
          reduceHotKey({ keyCombo, handler, global }),
        ]),
      [],
    );
    const removeHotKey = useCallback(
      (key: string) =>
        (keyList.current = [
          ...keyList.current.filter(({ _key }) => _key !== key),
        ]),
      [],
    );

    const handler = useCallback((items: KeyValue[], event: KeyboardEvent) => {
      if (items.length === 0) return;
      const { key: keyCode, code, altKey, ctrlKey, metaKey, shiftKey } = event;
      if (
        keyCode !== "Enter" &&
        keyCode !== "Esc" &&
        ["INPUT", "TEXTAREA", "SELECT"].includes(
          (event.target as HTMLElement).tagName,
        )
      )
        return;
      const find = items.find(
        ({ key, alt, ctrl, meta, shift }: KeyValue) =>
          (key.toLowerCase() === keyCode.toLowerCase() ||
            key.toLowerCase() === code.toLowerCase()) &&
          alt === altKey &&
          ctrl === ctrlKey &&
          meta === metaKey &&
          shift === shiftKey,
      );
      if (find?.handler) {
        find.handler();
        event.preventDefault();
        event.stopImmediatePropagation();
      }
    }, []);

    const handleGlobal = useCallback(
      (event: KeyboardEvent) => {
        handler(
          keyList.current.filter((i) => i.global),
          event,
        );
      },
      [handler],
    );
    const handleHotKey = useCallback(
      (event: KeyboardEvent) => {
        handler(
          keyList.current.filter((i) => !i.global),
          event,
        );
      },
      [handler],
    );

    useEffectDebugger(
      () => {
        const el: HTMLElement | null | undefined = refEl.current?.parentElement;
        if (el) {
          el.tabIndex = 0;
          el.addEventListener("keydown", handleHotKey);
          document.addEventListener("keydown", handleGlobal);
          return () => {
            el.removeEventListener("keydown", handleHotKey);
            document.removeEventListener("keydown", handleGlobal);
          };
        }
      },
      [handleGlobal, handleHotKey],
      "HotKeyWrapper attach handlers",
    );

    return (
      <HotKeysContext.Provider value={{ addHotKey, removeHotKey }}>
        <div ref={refEl} style={{ display: "contents" }}>
          {children}
        </div>
      </HotKeysContext.Provider>
    );
  },
);
HotKeyWrapper.displayName = "HotKeyProvider";
