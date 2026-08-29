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

import { cn, isNumber } from "@react-fabric/utilities";
import { useEffectEvent, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLayoutEffectDebugger } from "../hooks/useEffectDebugger";
import { usePropToggle } from "../hooks/usePropToggle";
import type { ChildrenProp, CssProp, TestProps } from "../types";
import { calculateTextHeight } from "../utils";

export interface TextProps extends ChildrenProp, CssProp, TestProps {
  /**
   * render text as inline span
   */
  inline?: boolean;
  /**
   * text line clamp
   */
  clamp?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
}

/**
 * A component that renders text with various styles, supports line clamping, and provides a "show more" link if the text is clipped.
 * The component uses a combination of CSS and JavaScript to achieve the desired effects, ensuring a smooth user experience.
 * It leverages the ResizeObserver API to detect changes in the text container's size and adjust the line clamping accordingly.
 *
 * @example
 * ```jsx
 * <Text
 *   inline={false}
 *   clamp={2}
 * >
 *   This is a sample text that demonstrates the Text component with various styles applied.
 * </Text>
 * ```
 */
export function Text({ children, className, inline, clamp, ...props }: TextProps) {
  const { t } = useTranslation("core");
  const containerRef = useRef<HTMLDivElement>(null);
  const [clipped, setClipped] = useState(false);
  const [showMore, toggleShowMore] = usePropToggle(false);

  /** ***************** check text height if clip enabled *******************/
  const checkHeight = useEffectEvent(() => {
    const el = containerRef.current as HTMLElement;
    if (el && isNumber(clamp) && clamp > 0 && !showMore) {
      setClipped(calculateTextHeight(el.firstElementChild as HTMLElement, el) > el.offsetHeight);
    }
  });

  /** ***************** observe element resize to recalculate height *******************/
  useLayoutEffectDebugger(
    () => {
      if (containerRef.current) {
        const ob = new ResizeObserver(checkHeight);
        ob.observe(containerRef.current);
        checkHeight();
        return () => {
          ob.disconnect();
        };
      }
    },
    [children, checkHeight],
    "Text check height",
  );

  return inline ? (
    <span className={className} {...props}>
      {children}
    </span>
  ) : (
    <article className={className}>
      <div
        ref={containerRef}
        style={
          {
            "--text-clamp": showMore ? "unset" : (clamp ?? "unset"),
          } as React.CSSProperties
        }
      >
        <div className={cn("fabric-text", "mixed-lang px-0.5 whitespace-pre-wrap", clamp && "line-clamp-1")} {...props}>
          {children}
        </div>
      </div>
      {clipped && (
        <div className="fabric-moreLink">
          <span
            role="link"
            tabIndex={0}
            data-inner-clickable
            onClick={(e) => [e.stopPropagation(), toggleShowMore()]}
            onKeyDown={() => toggleShowMore()}
          >
            ...{t(`action.${showMore ? "less" : "more"}`)}
          </span>
        </div>
      )}
    </article>
  );
}
