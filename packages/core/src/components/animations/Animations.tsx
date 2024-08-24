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
import { useMemo } from "react";
import { useMemoDebugger } from "../../hooks/useEffectDebugger";
import {
  type AriaProps,
  type ColorType,
  type CssProp,
  type PaletteType,
} from "../../types";
import { getColor, getColorClass } from "../../utils";
import classes from "./Animations.module.css";

export interface AnimationProps extends CssProp, AriaProps {
  type?: "info" | "check" | "cross" | "question" | "exclaim";
  /**
   * icon color
   */
  color?: ColorType | PaletteType;
  /**
   * icon mark color
   */
  strokeColor?: ColorType | PaletteType;
}

export const AnimationIndicator = ({
  className,
  color,
  strokeColor,
  type,
  ...aria
}: AnimationProps) => {
  const styles = useMemoDebugger(
    () => {
      const s: KeyValue = {};
      if (color) {
        s.color = getColor(color);
      }
      if (strokeColor) {
        s.stroke = getColor(strokeColor);
      }
      return s;
    },
    [color, strokeColor],
    "Animation styles",
  );
  const path = useMemo(() => {
    if (type === "check") return "M14.1 27.2l7.1 7.2 16.7-16.8";
    if (type === "cross") return "M14.1 14.1l23.8 23.8 m0,-23.8 l-23.8,23.8";
    if (type === "question")
      return "M18.949 17.621c0.426-0.787 1.354-1.6 2.108-2.223 1.279-0.984 3.87-1.778 5.805-1.778 3.837 0 6.189 2.689 6.189 6.034 0 2.23-1.193 4.214-3.751 6.346-2.886 2.361-3.497 3.362-3.497 5.788v0c0-2.263 0.689-3.509 3.476-5.772 2.689-2.23 3.772-3.968 3.772-6.362 0-3.772-2.492-6.034-6.789-6.034-2.132 0-3.903 0.722-5.28 1.804-0.82 0.623-1.476 1.377-2.033 2.197zM26 41.329v0-2.948z";
    if (type === "exclaim")
      return "M26.611 10.873c-0.002 1.015-0.002 2.071-0.002 3.086v11.777c0 3.086 0.002 2.232 0 3.288h-0.018c-0.001-1.056 0-0.202 0-3.288v-11.777c0-1.015 0-2.071-0.002-3.086zM26.59 37.472h0.018v3.655h-0.018z";
    return "M26 22L26 41M27 22L27 41M25 22L25 41M26 11L26 16M27 11L27 16M25 11L25 16Z";
  }, [type]);
  /** ***************** component *******************/
  return (
    <svg
      data-ref="animated-indicator"
      className={classNames(
        classes.checkAnimation,
        className,
        "inline-block rounded-full",
        color && getColorClass(color),
      )}
      style={styles}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 52 52"
      aria-hidden="true"
      {...aria}
    >
      <circle className={classes.circlePart} cx="26" cy="26" r="25" />
      <path
        className={classNames(
          classes.iconPart,
          getColorClass(strokeColor ?? "invert"),
        )}
        d={path}
      />
    </svg>
  );
};

export const AnimationBars = ({
  color = "tint-700",
  size = "2rem",
}: {
  color?: ColorType | string;
  size?: number | string;
}) => {
  return (
    <div
      className={classNames(
        "absolute inset-0 z-10 flex justify-center items-center cursor-wait",
      )}
    >
      <div
        className={classNames(
          "outline outline-tint-500/20 p-4 bg-base/50 backdrop-blur-sm rounded",
        )}
      >
        <div
          className={classNames(classes.bars, getColorClass(color + "-500/50"))}
          style={{ width: size }}
        />
      </div>
    </div>
  );
};

export const AnimationSpinner = ({
  color = "tint-700",
  size = "2rem",
}: {
  color?: ColorType | string;
  size?: number | string;
}) => {
  return (
    <div
      className={classNames(
        "absolute inset-0 z-10 flex justify-center items-center cursor-wait",
      )}
    >
      <div
        className={classNames(
          "outline outline-tint-500/20 p-4 bg-base/50 backdrop-blur-sm rounded",
        )}
      >
        <div
          className={classNames(classes.spinner, getColorClass(color))}
          style={{ width: size }}
        />
      </div>
    </div>
  );
};

export const Loading = () => {
  return (
    <div
      className={classNames(
        classes.loader,
        "area-[loader] relative overflow-x-clip",
      )}
    >
      <div className="absolute z-10 py-px inset-x-0 top-0 after:h-0.5 after:block after:bg-primary-500" />
    </div>
  );
};

export const Skeleton = () => {
  return (
    <div className={classNames("p-2 animate-pulse flex gap-2 max-w-lg")}>
      <div className="bg-tint-100 rounded aspect-square h-12" />
      <div className="flex-1 flex flex-col gap-2">
        <div className="bg-tint-100 h-3 rounded-full" />
        <div className="flex gap-2">
          <div className="bg-tint-100 h-2 rounded-full basis-[30%]" />
          <div className="bg-tint-100 h-2 rounded-full basis-[60%]" />
        </div>
        <div className="flex gap-2">
          <div className="bg-tint-100 h-2 rounded-full basis-[30%]" />
          <div className="bg-tint-100 h-2 rounded-full basis-[60%]" />
        </div>
      </div>
    </div>
  );
};
