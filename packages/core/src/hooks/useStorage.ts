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

import { useState } from "react";
import { useClientService } from "./useClientService";
import { useEffectDebugger } from "./useEffectDebugger";

/**
 * Custom hook to manage local storage state.
 * This hook allows you to store and retrieve values from the browser's local storage,
 * and provides a way to update the stored value while keeping the state in sync with local storage.
 * It initializes the state with the value from local storage if it exists, or uses a default value if it does not.
 * The hook returns a tuple containing the current value and a function to update the value.
 * This is useful for persisting user preferences or application state across page reloads.
 *
 * @param key - The key under which the value is stored in local storage.
 * @param defaultValue - The default value to use if the key does not exist in local storage.
 * @returns A tuple containing the current value and a function to update the value.
 *
 * @example
 * ```jsx
 * const [settings, setSettings] = useLocalStorage("userSettings", { theme: "light" });
 * // This will initialize the settings state from local storage or use the default value.
 * ```
 */
export const useLocalStorage = <T>(
  key: string,
  defaultValue: T,
): [T, (value: T) => void] => {
  const service = useClientService(localStorage);
  const [value, setValue] = useState<T>(
    JSON.parse(service?.getItem(key) ?? "null") ?? defaultValue,
  );

  useEffectDebugger(
    () => {
      setValue(JSON.parse(service?.getItem(key) ?? "null") ?? defaultValue);
    },
    [],
    "useStorage initial value",
  );

  const changeValue = (value: T) => {
    service?.setItem(key, JSON.stringify(value));
    setValue(value);
  };

  return [value, changeValue];
};

/**
 * Custom hook to manage session storage state.
 * This hook allows you to store and retrieve values from the browser's session storage,
 * and provides a way to update the stored value while keeping the state in sync with session storage.
 * It initializes the state with the value from session storage if it exists, or uses a default value if it does not.
 * The hook returns a tuple containing the current value and a function to update the value.
 * This is useful for persisting user preferences or application state during a single session,
 * such as form data or temporary settings that should not persist across page reloads.
 * This hook is similar to `useLocalStorage`, but it uses session storage instead of local storage.
 *
 * @param key - The key under which the value is stored in session storage.
 * @param defaultValue - The default value to use if the key does not exist in session storage.
 * @returns A tuple containing the current value and a function to update the value.
 *
 * @example
 * ```jsx
 * const [user, setUser] = useSessionStorage("user", { name: "", age: 0 });
 * // This will initialize the user state from session storage or use the default value.
 * ```
 */
export const useSessionStorage = <T>(
  key: string,
  defaultValue: T,
): [T, (value: T) => void] => {
  const service = useClientService(sessionStorage);
  const [value, setValue] = useState<T>(
    JSON.parse(service?.getItem(key) ?? "null") ?? defaultValue,
  );

  useEffectDebugger(
    () => {
      setValue(JSON.parse(service?.getItem(key) ?? "null") ?? defaultValue);
    },
    [],
    "useStorage initial value",
  );

  const changeValue = (value: T) => {
    service?.setItem(key, JSON.stringify(value));
    setValue(value);
  };

  return [value, changeValue];
};
