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
import { Fragment, useCallback, useMemo } from "react";
import { useMemoDebugger } from "../hooks/useEffectDebugger";
import { Tooltip, getTooltipProps } from "../overlays/tooltip/Tooltip";
import {
  type ChildProp,
  type ColorType,
  type CssProp,
  type PaletteType,
} from "../types";
import { getColor } from "../utils";

interface AbbrTextProps {
  children: string;
  color?: string;
  tooltip?: string;
  content?: string;
}

const AbbrText = ({ color, children, tooltip, content }: AbbrTextProps) => {
  const TooltipWrapper = useMemo(
    () => (tooltip ? Tooltip : Fragment),
    [tooltip],
  );
  const tooltipProps = useMemo(() => {
    return tooltip ? { ...getTooltipProps(tooltip), copyContent: content } : {};
  }, [tooltip, content]);

  return (
    <TooltipWrapper {...tooltipProps}>
      <abbr
        className={classNames("fabric-abbr", "whitespace-nowrap")}
        style={
          color ? ({ "--abbr-color": getColor(color) } as AnyObject) : undefined
        }
      >
        {children}
      </abbr>
    </TooltipWrapper>
  );
};

export interface AbbrProps extends ChildProp<string>, CssProp {
  /**
   * content to copy using the tooltip copy action
   */
  copyContent?: "text" | "tooltip";
  /**
   * texts to match and abbreviate within
   *
   * [textPart, tooltip, color (class name or color string)]
   */
  abbr: Array<
    [
      textPart: string,
      tooltip: string,
      color?: ColorType | PaletteType | string,
    ]
  >;
  /**
   * renderer callback
   */
  renderer?: (part: string[]) => JSX.Element;
}

/**
 * Typography abbr component to wrap text parts in `abbr` with tooltip
 */
export const Abbr = ({
  children,
  abbr,
  className,
  renderer,
  copyContent = "text",
}: AbbrProps) => {
  /** ***************** abbr text renderer *******************/
  const abbrRender = useCallback(
    (text: string, tooltip: string, color = "") => {
      return (
        <AbbrText
          color={color}
          tooltip={tooltip}
          content={copyContent === "tooltip" ? tooltip : text}
        >
          {(renderer?.([text, tooltip, color]) ?? text) as string}
        </AbbrText>
      );
    },
    [renderer, copyContent],
  );

  /** ***************** tokenize text with abbr list *******************/
  const inner = useMemoDebugger(
    () => {
      if (isString(children)) {
        if (!isEmpty(abbr)) {
          const tokens = tokenize(
            children,
            abbr.map(([keyword]) => keyword),
          );
          const titles: KeyValue = abbr.reduce(
            (t, [a, tooltip = "", color = ""]) => ({
              ...t,
              [a.toLowerCase()]: {
                tooltip,
                color,
              },
            }),
            {},
          );
          return (
            <Fragment>
              {tokens.map(([start, text], i) => {
                const { tooltip = "", color = "" } =
                  titles[text.toLowerCase()] ?? {};
                return (
                  <Fragment key={i}>
                    {start}
                    {text ? abbrRender(text, tooltip, color) : null}
                  </Fragment>
                );
              })}
            </Fragment>
          );
        }
      }
      return children;
    },
    [children, abbr, abbrRender],
    "TextAbbr inner",
  );

  /** ***************** component *******************/
  return <span className={className}>{inner}</span>;
};
