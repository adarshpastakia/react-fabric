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

import classNames from "classnames";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "../components/button/Button";
import { Tooltip } from "../overlays/tooltip/Tooltip";
import { type CssProp, type SizeType } from "../types";
import { CoreIcons } from "../types/icons";

/**
 * A component that provides a button to copy text to the clipboard.
 * It uses the Clipboard API to write the specified text to the clipboard.
 * The button displays a tooltip feedback when the text is successfully copied.
 *
 * @param {CopyProps} props - The properties for the Copy component.
 * @returns {JSX.Element} The rendered Copy component.
 *
 * @example
 * ```jsx
 * <Copy text="Text to copy" size="small" />
 * ```
 *
 * @see {@link https://adarshpastakia.github.io/react-fabric/?path=/story/core-typography--copy} for more details.
 */
export interface CopyProps extends CssProp {
  text: string;
  /**
   * button size
   */
  size?: SizeType;
}

export const Copy = ({ text, size, className }: CopyProps) => {
  const { t } = useTranslation("core");

  /** ***************** handle copy *******************/
  const doCopy = useCallback(() => {
    void navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <Tooltip content={t("action.copy")}>
      <Button
        icon={CoreIcons.copy}
        aria-label="Copy text"
        actionMessage={t("action.copied")}
        variant="link"
        size={size}
        className={classNames(className, "align-bottom")}
        onClick={doCopy}
      />
    </Tooltip>
  );
};
