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

import { Icon, useControlledValue } from "@react-fabric/core";
import type { RefProp } from "@react-fabric/core/dist/types/types";
import { cn, FileUtil, Format, isArray, isEmpty, mergeRefs } from "@react-fabric/utilities";
import { Fragment, useCallback, useEffect, useId, useRef, useState } from "react";
import { InputWrapper } from "../internal/InputWrapper";
import type { InputProps, WrapperProps } from "../types";
import { getWrapperProps, useHandleEnter } from "../utils";

interface FileType {
  name: string;
  type?: string;
  size?: number;
}

export interface FileInputProps extends InputProps<FileType | FileType[]>, WrapperProps, RefProp<HTMLInputElement> {
  /**
   * allow selecting mutiple files
   */
  multiple?: boolean;
  /**
   * show selected file list
   */
  showList?: boolean;
  /**
   * acceptable file types
   */
  accept?: string;
}

function FileExists(prop: { name: string }) {
  const [kill, setKill] = useState(false);
  useEffect(() => {
    const tmr = setTimeout(() => {
      setKill(true);
    }, 2000);
    return () => {
      clearTimeout(tmr);
    };
  }, []);
  return kill ? null : (
    <div className="bg-danger-500 text-white px-2 rounded text-xs">File [{prop.name}] already added to list</div>
  );
}

/**
 * File input component that allows users to select files from their system.
 * It supports multiple file selection and displays a list of selected files.
 * The component also provides functionality to remove files from the list.
 * It handles file changes, invalid states, and read-only or disabled states.
 */
export function FileInput(props: FileInputProps) {
  const {
    ref,
    value,
    invalid,
    readOnly,
    disabled,
    placeholder,
    autoFocus,
    error,
    name,
    accept,
    showList = true,
    multiple,
    onChange,
    onEnterPressed,
  } = props;
  const listRef = useRef<File[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const [exists, setExists] = useState<string[]>(() => []);

  const id = useId();
  const { currentValue, updateValue } = useControlledValue(value, null);

  const handleEnterPressed = useHandleEnter(onEnterPressed);

  const handleChange = useCallback(
    (e?: React.ChangeEvent<HTMLInputElement>) => {
      setExists([]);
      if (multiple) {
        if (e?.target.files) {
          if (showList) {
            const exists: string[] = [];
            Array.from(e.target.files).forEach((file) => {
              if (listRef.current.find((ef) => ef.name === file.name)) exists.push(file.name);
              else listRef.current.push(file);
            });
            updateValue(listRef.current.slice());
            setExists(exists);
          }
          e.target.value = "";
          onChange?.(listRef.current);
        } else {
          listRef.current = [];
          updateValue(listRef.current);
          onChange?.(listRef.current);
        }
      } else {
        updateValue(e?.target.files?.item(0));
        onChange?.(e?.target.files?.item(0) ?? undefined);
        if (!e && inputRef.current) inputRef.current.value = "";
      }
    },
    [multiple, showList, onChange, updateValue],
  );

  const removeFile = useCallback(
    (idx: number) => {
      listRef.current.splice(idx, 1);
      updateValue(listRef.current);
      onChange?.(listRef.current);
    },
    [onChange, updateValue],
  );

  return (
    <InputWrapper
      id={id}
      showClear={!isEmpty(currentValue) && !disabled && !readOnly}
      onClear={handleChange}
      {...getWrapperProps(props)}
      listing={
        showList && (
          <Fragment>
            {isArray(currentValue) &&
              currentValue?.map?.((file, idx: number) => (
                // eslint-disable-next-line @eslint-react/no-array-index-key
                <div key={idx} className="flex gap-1 items-center text-sm text-dimmed py-1 px-2">
                  <div className="flex-1 truncate">
                    <div className="font-medium">{file.name}</div>
                    <span className="text-xs">{FileUtil.mime(file.type)}</span>
                  </div>
                  <span className="flex-content text-end w-24">{Format.bytes(file.size)}</span>
                  <button
                    type="button"
                    className={cn("size-fit leading-0 cursor-pointer")}
                    onClick={() => {
                      removeFile(idx);
                    }}
                  >
                    <Icon className="cursor-pointer opacity-30 hover:opacity-80" icon="icon-[mdi--close]" />
                  </button>
                </div>
              ))}
            {exists.map((name) => (
              <FileExists key={new Date().getTime()} name={name} />
            ))}
          </Fragment>
        )
      }
    >
      <input
        className={cn(
          "fabric-fileInput",
          "appearance-none bg-transparent py-1 px-2 flex-1 border-none outline-none ring-0 peer",
          isArray(currentValue) && currentValue?.length && "text-(--fabric-bg)",
        )}
        aria-invalid={invalid}
        aria-disabled={disabled}
        aria-readonly={readOnly}
        aria-errormessage={error}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
        size={1}
        type="file"
        multiple={multiple}
        data-testid={name}
        name={name}
        accept={accept}
        ref={mergeRefs(ref, inputRef)}
        autoComplete="off"
        {...{ autoFocus }}
        onChange={handleChange}
        onKeyDown={handleEnterPressed}
      />
    </InputWrapper>
  );
}
