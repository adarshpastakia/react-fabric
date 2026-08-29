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

import { cn, isEmpty, isString, tokenize } from "@react-fabric/utilities";
import { Fragment, useCallback } from "react";
import { useMemoDebugger } from "../hooks/useEffectDebugger";
import type { ChildProp, CustomColors } from "../types";
import { getColor } from "../utils";

interface MarkTextProps {
  children: string;
  color?: string;
}

function MarkText({ color, children }: MarkTextProps) {
  return (
    <mark
      className={cn("fabric-mark", "whitespace-nowrap")}
      style={color ? ({ "--mark-color": getColor(color) } as React.CSSProperties) : undefined}
    >
      {children}
    </mark>
  );
}

export interface MarkProps extends ChildProp<string> {
  /**
   * texts to match and highlight within
   *
   * [textPart, color (class name or color string)]
   */
  mark: Array<[textPart: string, color?: CustomColors]>;
  /**
   * renderer callback
   */
  renderer?: (part: string[]) => React.ReactElement;
}

/**
 * A component that highlights specific text parts with a mark element, allowing for custom rendering and color.
 * It tokenizes the children string based on the provided `mark` array,
 * which contains pairs of text parts and their corresponding colors.
 * The component can use a custom renderer to display the marked text,
 * allowing for greater flexibility in how the text is presented.
 *
 * @example
 * <Mark
 *   mark={[
 *     ["important", "red"],
 *     ["note", "blue"],
 *   ]}
 * >
 *   This is an important note that should be highlighted.
 * </Mark>
 */
export function Mark({ children, mark, renderer }: MarkProps) {
  /** ***************** mark text renderer *******************/
  const markRender = useCallback(
    (text: string, color = "") => {
      return <MarkText color={color}>{(renderer?.([text, color]) ?? text) as string}</MarkText>;
    },
    [renderer],
  );

  /** ***************** tokenize text with mark list *******************/
  const inner = useMemoDebugger(
    () => {
      if (isString(children)) {
        if (!isEmpty(mark)) {
          const tokens = tokenize(
            children,
            mark.map(([keyword]) => keyword),
          );
          const titles: KeyValue<{ color: string }> = mark.reduce<KeyValue<{ color: string }>>(
            (t, [a, color = ""]) => ({
              ...t,
              [a.toLowerCase()]: { color },
            }),
            {},
          );
          return (
            <Fragment>
              {tokens.map(([start, text], i) => {
                const { color = "" } = titles[text.toLowerCase()] ?? {};
                return (
                  // eslint-disable-next-line @eslint-react/no-array-index-key
                  <Fragment key={`${text}-${i}`}>
                    {start}
                    {text ? markRender(text, color) : null}
                  </Fragment>
                );
              })}
            </Fragment>
          );
        }
      }
      return children;
    },
    [children, mark, markRender],
    "TextMark inner",
  );

  /** ***************** component *******************/
  return <span className="mixed-lang whitespace-pre-wrap">{inner}</span>;
}
