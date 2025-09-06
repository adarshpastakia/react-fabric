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

import { Avatar, CoreIcons, Icon, ProgressBar } from "@react-fabric/core";
import { type RefProp } from "@react-fabric/core/dist/types/types";
import { useEffect, useState } from "react";
import { useFileUploader, type UploadHandler } from "../hooks/useFileUploader";
import { HiddenInput } from "./Hidden";

export interface Props extends RefProp {
  /**
   * field name
   */
  name?: string;
  /**
   * actual avatar storage path
   */
  value?: string;
  /**
   * default avatar image
   */
  defaultValue?: string;
  /**
   * avatar name
   */
  avatarName?: string;
  size?: string | number;
  /**
   * upload handler to store file in temp storage
   */
  uploadHandler: UploadHandler;
  /**
   * file stream path
   */
  fileUrl?: (path: string) => string;
  /**
   * change handler
   *
   * @param file
   * @param base64
   * @returns storage path
   */
  onChange?: (path: string) => void;
}

/**
 * Avatar input component for uploading and displaying user avatars.
 * It allows users to select an image file, upload it, and display the avatar.
 * It also provides a way to remove the uploaded file and shows upload progress.
 *
 * @param {Props} props - The properties for the AvatarInput component.
 * @returns {JSX.Element} - The rendered AvatarInput component.
 */
export const AvatarInput = ({
  size = "6rem",
  avatarName,
  value,
  defaultValue,
  fileUrl,
  uploadHandler,
  ...rest
}: Props) => {
  const { files, list, upload, remove } = useFileUploader(
    async (data, config) => await uploadHandler?.(data, config),
    value,
    false,
  );

  const [base64, setBase64] = useState("");
  useEffect(() => {
    if (list?.length) {
      const file = files?.[0]?.file;
      void (
        file &&
        new Response(file).blob().then((blob) => {
          const reader = new FileReader();
          reader.onload = () => {
            setBase64(reader.result as string);
          };
          reader.onerror = (e) => {
            console.error("ERROR", e);
          };
          reader.readAsDataURL(blob);
        })
      );
    } else {
      setBase64(fileUrl?.(defaultValue ?? "") ?? defaultValue ?? "");
    }
  }, [files, list, defaultValue]);

  useEffect(() => {
    !value &&
      defaultValue &&
      setBase64(fileUrl?.(defaultValue) ?? defaultValue);
    value && setBase64(fileUrl?.(value) ?? value);
  }, [value, defaultValue]);

  return (
    <div className="flex flex-nowrap items-end overflow-hidden">
      <div className="inline-block leading-none rounded-full relative outline overflow-hidden">
        <Avatar name={avatarName ?? "temp"} size={size} avatar={base64} />
        <div className="absolute inset-x-0 bottom-0 cursor-pointer bg-black/20 hover:bg-black/50 text-white text-xs text-center py-1">
          <span>Edit</span>
          <input
            type="file"
            accept="image/*"
            className="absolute inset-0 opacity-0 z-5 cursor-pointer"
            onChange={(e) => [upload(e.target.files), (e.target.value = "")]}
          />
        </div>
      </div>
      <HiddenInput hiddenValue={list?.[0]?.path ?? defaultValue} {...rest} />
      {files.map((file, idx) => (
        <div key={idx} className="px-2 py-1 flex-1 overflow-hidden">
          <div className="flex flex-nowrap gap-1 items-center">
            <div className="flex-initial truncate pe-2">{file.filename}</div>
            {file.error && (
              <div className="flex-1 truncate px-2">
                <span className="text-danger-600">{file.error}</span>
              </div>
            )}
            {file.progress && (
              <Icon
                icon={CoreIcons.stop}
                bg="danger"
                color="white"
                size="sm"
                className="p-[2px] flex-content"
                aria-label="abort"
                onClick={() => file.abort?.()}
              />
            )}
            {!file.progress && (
              <Icon
                icon={CoreIcons.trash}
                color="danger"
                size="sm"
                className="flex-content"
                aria-label="remove"
                onClick={() => remove(file.key)}
              />
            )}
          </div>
          {file.progress && (
            <ProgressBar animate value={file.progress * 100} size="xxs" />
          )}
        </div>
      ))}
    </div>
  );
};
