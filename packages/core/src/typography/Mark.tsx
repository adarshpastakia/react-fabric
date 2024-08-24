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

import { isEmpty, isString, tokenize } from "@react-fabric/utilities";
import classNames from "classnames";
import { Fragment, useCallback } from "react";
import { useMemoDebugger } from "../hooks/useEffectDebugger";
import { type ChildProp, type ColorType } from "../types";
import { getBgClass, getColor } from "../utils";
import classes from "./Typography.module.css";

interface MarkTextProps {
  children: string;
  color?: string;
}

const MarkText = ({ color, children }: MarkTextProps) => {
  return (
    <mark
      className={classNames(
        classes.mark,
        "whitespace-nowrap",
        color && getBgClass(color),
      )}
      style={
        color ? ({ "--mark-color": getColor(color) } as AnyObject) : undefined
      }
    >
      {children}
    </mark>
  );
};

export interface MarkProps extends ChildProp<string> {
  /**
   * texts to match and abbreviate within
   *
   * [textPart, color (class name or color string)]
   */
  mark: Array<[textPart: string, color?: ColorType | string]>;
  /**
   * renderer callback
   */
  renderer?: (part: string[]) => JSX.Element;
}

/**
 * Typography mark component to wrap text parts in `mark`
 */
export const Mark = ({ children, mark, renderer }: MarkProps) => {
  /** ***************** abbr text renderer *******************/
  const abbrRender = useCallback(
    (text: string, color = "") => {
      return (
        <MarkText color={color}>
          {(renderer?.([text, color]) ?? text) as string}
        </MarkText>
      );
    },
    [renderer],
  );

  /** ***************** tokenize text with abbr list *******************/
  const inner = useMemoDebugger(
    () => {
      if (isString(children)) {
        if (!isEmpty(mark)) {
          const tokens = tokenize(
            children,
            mark.map(([keyword]) => keyword),
          );
          const titles: KeyValue = mark.reduce(
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
                  <Fragment key={i}>
                    {start}
                    {text ? abbrRender(text, color) : null}
                  </Fragment>
                );
              })}
            </Fragment>
          );
        }
      }
      return children;
    },
    [children, mark, abbrRender],
    "TextMark inner",
  );

  /** ***************** component *******************/
  return <span>{inner}</span>;
};
