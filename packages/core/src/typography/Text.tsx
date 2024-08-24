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

import { isNumber } from "@react-fabric/utilities";
import classNames from "classnames";
import { useCallback, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  useLayoutEffectDebugger,
  useMemoDebugger,
} from "../hooks/useEffectDebugger";
import { usePropToggle } from "../hooks/usePropToggle";
import {
  type AriaProps,
  type ChildrenProp,
  type ColorWithGrays,
  type CssProp,
  type SizeType,
  type TestProps,
} from "../types";
import {
  calculateTextHeight,
  getBgClass,
  getColor,
  getColorClass,
} from "../utils";
import classes from "./Typography.module.css";
import { TextSizeMap } from "./types";

export interface TextProps extends ChildrenProp, CssProp, AriaProps, TestProps {
  /**
   * render text as inline span
   */
  inline?: boolean;
  /**
   * text background (CSS color / tailwind color)
   */
  bg?: ColorWithGrays | string;
  /**
   * text color (CSS color / tailwind color)
   */
  color?: ColorWithGrays | string;
  /**
   * text size
   */
  size?: SizeType | number | string;
  /**
   * font family
   */
  family?: "sans" | "serif" | "mono";
  /**
   * text align
   */
  align?: "start" | "end" | "center" | "justify";
  /**
   * text line clamp
   */
  clamp?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
}

/**
 * Typography text component
 */
export const Text = ({
  children,
  className,
  inline,
  bg,
  color,
  family,
  size,
  clamp,
  align,
  ...aria
}: TextProps) => {
  const { t } = useTranslation("core");
  const refContainer = useRef<HTMLDivElement>(null);
  const [clipped, setClipped] = useState(false);
  const [showMore, toggleShowMore, refShowMore] = usePropToggle(false);

  /** ***************** check text height if clip enabled *******************/
  const checkHeight = useCallback(() => {
    const el = refContainer.current as HTMLElement;
    if (el && isNumber(clamp) && clamp > 0 && !refShowMore.current) {
      setClipped(
        calculateTextHeight(el.firstElementChild as HTMLElement, el) >
          el.offsetHeight,
      );
    }
  }, [clamp]);

  /** ***************** observe element resize to recalculate height *******************/
  useLayoutEffectDebugger(
    () => {
      if (refContainer.current) {
        const ob = new ResizeObserver(checkHeight);
        ob.observe(refContainer.current as HTMLElement);
        checkHeight();
        return () => {
          ob.disconnect();
        };
      }
    },
    [children, checkHeight],
    "Text check height",
  );

  /** ***************** style map *******************/
  const styles = useMemoDebugger(
    () => {
      const s: KeyValue = {};
      if (bg) {
        s.backgroundColor = getColor(bg);
      }
      if (color) {
        s.color = getColor(color);
      }
      if (align) {
        s.textAlign = align;
      }
      if (size && !(size in TextSizeMap)) {
        s.fontSize = size;
      }
      if (size && size in TextSizeMap) {
        s.fontSize = TextSizeMap[size];
      }
      return s;
    },
    [bg, color, size, align, family],
    "Text styles",
  );

  return inline ? (
    <span className={className} style={styles} {...aria}>
      {children}
    </span>
  ) : (
    <article className={className}>
      <div
        ref={refContainer}
        style={
          { "--text-clamp": showMore ? "unset" : clamp ?? "unset" } as AnyObject
        }
      >
        <div
          className={classNames(
            classes.text,
            "text-reset mixed-lang px-[2px] whitespace-pre-wrap",
            family && `font-${family}`,
            bg && getBgClass(bg),
            color && getColorClass(color),
            clamp && "line-clamp-1",
          )}
          style={styles}
          {...aria}
        >
          {children}
        </div>
      </div>
      {clipped && (
        <div className={classes.moreLink}>
          <span
            role="link"
            tabIndex={0}
            data-inner-clickable
            onClick={(e) => [e.stopPropagation(), toggleShowMore()]}
          >
            ...{t(`action.${showMore ? "less" : "more"}`)}
          </span>
        </div>
      )}
    </article>
  );
};
