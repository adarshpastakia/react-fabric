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
