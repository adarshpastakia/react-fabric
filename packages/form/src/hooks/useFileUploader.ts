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

import { isArray, isObject, isString, uuid } from "@react-fabric/utilities";
import { type AxiosRequestConfig } from "axios";
import { useCallback, useReducer } from "react";

export type UploadHandler = (
  data: FormData,
  config: AxiosRequestConfig,
) => Promise<string>;

interface FileInfo {
  key: string;
  filename: string;
  size: number;
  mime: string;
  uploaded?: true;
  file?: File;
  path?: string;
  error?: string;
  progress?: number;
  abort?: AbortController["abort"];
}

interface UploaderState {
  files: Map<string, FileInfo>;
  list: FileInfo[];
  count: number;
}

type UploaderActions =
  | { type: "start"; key: string; file: FileInfo }
  | { type: "stop"; key: string; path: string }
  | { type: "error"; key: string; error: string }
  | { type: "progress"; key: string; progress: number }
  | { type: "remove"; key: string }
  | { type: "abort"; key: string };

export const useFileUploader = (
  uploader: UploadHandler,
  initialList?: string | FileInfo | FileInfo[],
  multiple = true,
) => {
  const [state, dispatch] = useReducer(
    (state: UploaderState, action: UploaderActions) => {
      if (action.type === "start") {
        if (!multiple) state.files.clear();
        state.files.set(action.key, action.file);
        state.count++;
      }
      if (action.type === "stop") {
        const fileObject = state.files.get(action.key);
        if (fileObject) {
          const { progress, abort, ...rest } = fileObject;
          state.files.set(action.key, {
            ...rest,
            path: action.path,
            uploaded: true,
          });
        }
        state.count--;
      }
      if (action.type === "error") {
        const fileObject = state.files.get(action.key);
        if (fileObject) {
          const { file, progress, abort, ...rest } = fileObject;
          state.files.set(action.key, { ...rest, error: action.error });
        }
        state.count--;
      }
      if (action.type === "progress") {
        const fileObject = state.files.get(action.key);
        if (fileObject) {
          fileObject.progress = action.progress;
          state.files.set(action.key, fileObject);
        }
        state.count--;
      }
      if (action.type === "abort") {
        state.files.delete(action.key);
      }
      if (action.type === "remove") {
        state.files.delete(action.key);
      }
      state.list = Array.from(state.files.values())
        .map((file) => {
          return (
            !file.progress &&
            !file.error && {
              key: file.key,
              path: file.path,
              mime: file.mime,
              size: file.size,
              uploaded: file.uploaded,
              filename: file.filename,
            }
          );
        })
        .filter(Boolean) as FileInfo[];
      return { ...state };
    },
    {
      files: new Map(),
      count: 0,
    } as UploaderState,
    (state: UploaderState) => {
      if (initialList) {
        if (isString(initialList)) {
          const key = uuid();
          state.files.set(key, {
            key,
            path: initialList,
            filename: "",
            size: 0,
            mime: "",
          });
        }
        if (isObject(initialList)) {
          const key = uuid();
          state.files.set(key, { ...(initialList as AnyObject), key });
        }
        if (isArray(initialList)) {
          initialList.forEach((file) => {
            const key = uuid();
            state.files.set(key, { ...file, key });
          });
        }
      }
      state.list = Array.from(state.files.values());
      return state;
    },
  );

  const doUpload = useCallback(async (key: string, file: File) => {
    const data = new FormData();
    data.append("file", file);
    const abort = new AbortController();
    dispatch({
      type: "start",
      key,
      file: {
        key,
        file,
        progress: 0.001,
        mime: file.type,
        filename: file.name,
        size: file.size,
        abort: () => abort.abort(),
      },
    });
    await uploader(data, {
      signal: abort.signal,
      onUploadProgress(progressEvent) {
        dispatch({
          type: "progress",
          key,
          progress: progressEvent.progress ?? 0,
        });
      },
    })
      .then((path) => {
        dispatch({ type: "stop", key, path });
      })
      .catch((error) => {
        if (error.code === "ERR_CANCELED" || error.name === "AbortError") {
          return dispatch({ type: "abort", key });
        }
        dispatch({
          type: "error",
          key,
          error: error?.message ?? "form:fileUploadFailed",
        });
      });
  }, []);

  const upload = useCallback(
    (files: FileList | null) => {
      if (!multiple) {
        Array.from(state.files.values())[0]?.abort?.();
      }
      Array.from(files ?? [])
        .slice(0, multiple ? undefined : 1)
        .forEach((file) => {
          void doUpload(uuid(), file);
        });
    },
    [multiple],
  );

  const retry = useCallback(
    (key: string) => {
      const fileObject = state.files.get(key);
      void (fileObject?.file && doUpload(key, fileObject.file));
    },
    [state],
  );

  const remove = useCallback(
    (key: string) => {
      dispatch({ type: "remove", key });
    },
    [state],
  );

  return {
    upload,
    remove,
    retry,
    pending: state.count,
    list: state.list,
    files: Array.from(state.files.values()),
  };
};
