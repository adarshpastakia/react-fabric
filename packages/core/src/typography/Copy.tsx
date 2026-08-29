/**
 * React Fabric
 * @version 1.0.0
 * @license MIT
 * @copyright 2024 Adarsh Pastakia
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import { cn } from "@react-fabric/utilities";
import { useTranslation } from "react-i18next";
import { Button } from "../components/button/Button";
import { Tooltip } from "../components/tooltip/Tooltip";
import type { CssProp, SizeType } from "../types";

/**
 * A component that provides a button to copy text to the clipboard.
 * It uses the Clipboard API to write the specified text to the clipboard.
 * The button displays a tooltip feedback when the text is successfully copied.
 *
 * @example
 * ```jsx
 * <Copy text="Text to copy" size="small" />
 * ```
 */
export interface CopyProps extends CssProp {
  text: string;
  /**
   * button size
   */
  size?: SizeType;
}

export function Copy({ text, size, className }: CopyProps) {
  const { t } = useTranslation("core");

  /** ***************** handle copy *******************/
  const doCopy = () => {
    void navigator.clipboard.writeText(text);
  };

  return (
    <Tooltip content={t("action.copy")}>
      <Button
        icon="icon-[mdi--content-copy]"
        aria-label="Copy text"
        variant="link"
        size={size}
        showActionDone
        className={cn(className, "align-bottom")}
        onClick={doCopy}
      />
    </Tooltip>
  );
}
