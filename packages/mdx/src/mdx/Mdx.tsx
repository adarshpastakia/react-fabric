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

import { type CssProp } from "@react-fabric/core/dist/types/types";
import { useCallback, useEffect, useState, type FC } from "react";
import { marked } from "../utils/marked";

export interface Props extends CssProp {
  text: string;
}

export const Mdx: FC<Props> = ({ text, className, ...rest }) => {
  const [mdtext, setMdtext] = useState("");

  const copySuccess = useCallback((el: HTMLElement) => {
    el.dataset.show = "true";
    setTimeout(() => (el.dataset.show = "false"), 1000);
  }, []);

  useEffect(() => {
    const parsed = !text ? "" : marked.parse(text.replaceAll(":::", "!!! "));
    void Promise.resolve(parsed).then(setMdtext);
  }, [text]);

  return (
    <div
      role="none"
      className={`markdown-body ${className ?? ""}`}
      dangerouslySetInnerHTML={{ __html: mdtext }}
      onClick={(e) => {
        const el = (e.target as HTMLElement)?.closest(".hljs-copy");
        if (el)
          void navigator.clipboard
            .writeText((el.previousElementSibling as HTMLElement).innerText)
            .then(() => copySuccess(el.nextElementSibling as HTMLElement));
      }}
    />
  );
};
