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

import { CoreIcons, Icon } from "@react-fabric/core";
import { type RefProp } from "@react-fabric/core/dist/types/types";
import {
  FileUtil,
  Format,
  isArray,
  isEmpty,
  mergeRefs,
} from "@react-fabric/utilities";
import classNames from "classnames";
import {
  Fragment,
  useCallback,
  useDeferredValue,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ChangeEvent,
} from "react";
import { InputWrapper } from "../internal/InputWrapper";
import { type InputProps } from "../types";
import { handleEnter } from "../utils";
import classes from "./File.module.css";

export interface FileInputProps
  extends InputProps<AnyObject>,
    RefProp<HTMLInputElement> {
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

const FileExists = (prop: AnyObject) => {
  const [kill, setKill] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setKill(true);
    }, 2000);
  });
  return kill ? null : (
    <div className="bg-danger-500 text-white px-2 rounded text-xs">
      File [{prop.name}] already added to list
    </div>
  );
};

export const FileInput = ({
  ref,
  value,
  invalid,
  readOnly,
  disabled,
  required,
  placeholder,
  autoFocus,
  error,
  name,
  accept,
  showList = true,
  multiple,
  onChange,
  onEnterPressed,
  ...rest
}: FileInputProps) => {
  const listRef = useRef<File[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const [exists, setExists] = useState<string[]>([]);
  const [actualValue, setActualValue] = useState<File | File[] | null>();
  const deferred = useDeferredValue(value);

  const handleEnterPressed = useMemo(
    () => handleEnter(onEnterPressed),
    [onEnterPressed],
  );

  useEffect(() => {
    setActualValue(deferred);
  }, [deferred]);

  const handleChange = useCallback(
    (e?: ChangeEvent<HTMLInputElement>) => {
      setExists([]);
      if (multiple) {
        if (e?.target.files) {
          if (showList) {
            const exists: string[] = [];
            Array.from(e.target.files).forEach((file) => {
              listRef.current.find((ef) => ef.name === file.name)
                ? exists.push(file.name)
                : listRef.current.push(file);
            });
            setActualValue(listRef.current.slice());
            setExists(exists);
          }
          e.target.value = "";
          onChange?.(listRef.current);
        } else {
          listRef.current = [];
          setActualValue(listRef.current);
          onChange?.(listRef.current);
        }
      } else {
        setActualValue(e?.target.files?.item(0));
        onChange?.(e?.target.files?.item(0) ?? undefined);
        if (!e && inputRef.current) inputRef.current.value = "";
      }
    },
    [onChange, multiple, showList],
  );

  const removeFile = useCallback(
    (idx: number) => {
      listRef.current.splice(idx, 1);
      setActualValue(listRef.current);
      onChange?.(listRef.current);
    },
    [onChange],
  );

  return (
    <InputWrapper
      showClear={!isEmpty(actualValue)}
      onClear={handleChange}
      invalid={invalid}
      readOnly={readOnly}
      disabled={disabled}
      required={required}
      error={error}
      listing={
        showList && (
          <Fragment>
            {isArray(actualValue) &&
              actualValue?.map?.((file: AnyObject, idx: number) => (
                <div
                  key={idx}
                  className="flex gap-1 items-center text-sm text-dimmed py-1 px-2"
                >
                  <div className="flex-1 truncate">
                    <div className="font-medium">{file.name}</div>
                    <span className="text-xs">{FileUtil.mime(file.type)}</span>
                  </div>
                  <span className="flex-content text-end w-24">
                    {Format.bytes(file.size)}
                  </span>
                  <Icon
                    className="cursor-pointer opacity-30 hover:opacity-80"
                    icon={CoreIcons.close}
                    onClick={() => {
                      removeFile(idx);
                    }}
                  />
                </div>
              ))}
            {exists.map((name) => (
              <FileExists key={new Date().getTime()} name={name} />
            ))}
          </Fragment>
        )
      }
      {...rest}
    >
      <input
        className={classNames(
          "appearance-none bg-transparent py-1 px-2 flex-1 border-none outline-none ring-0",
          classes.fileInput,
          isArray(actualValue) &&
            actualValue?.length &&
            "text-[var(--fabric-bg)]",
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
};
