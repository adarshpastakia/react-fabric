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
import { Activity, useEffect, useLayoutEffect, useState } from "react";
import { useGlobals } from "../../context/context";
import { usePropToggle } from "../../hooks/usePropToggle";
import { useResize } from "../../hooks/useResize";
import type { ChildrenProp, CollapseProps, CssProp, HeightProps, TestProps } from "../../types";

interface BaseProps extends CssProp, ChildrenProp, TestProps, CollapseProps, HeightProps {
  flex?: boolean;
  align?: "start" | "end" | "center" | "stretch";
  justify?: "start" | "end" | "center" | "between";

  id?: string;
  hideCollapseHandle?: boolean;

  /**
   * resizable header/footer
   */
  resizeable?: boolean;

  /**
   * Resize event
   */
  onResize?: (height: number) => void;
}

type DefaultProps = { flex?: false; align?: never; justify?: never };
type FlexProps = {
  flex: true;
};

export type HeadFootProps = BaseProps & (DefaultProps | FlexProps);

const ALIGN_MAP = {
  start: "items-start",
  end: "items-end",
  center: "items-center",
  stretch: "items-stretch",
};

const JUSTIFY_MAP = {
  start: "justify-start",
  end: "justify-end",
  center: "justify-center",
  between: "justify-between",
};

function HeadFoot({
  as: E,
  id,
  children,
  className,
  flex,
  height: ht,
  maxHeight = "50vh",
  minHeight = "10px",
  collapsed: _collapsed,
  collapsable,
  resizeable,
  align = "center",
  justify = "start",
  hideCollapseHandle,
  onCollapse,
  onResize,
  ...props
}: HeadFootProps & { as: "header" | "footer" }) {
  const { registerArea, unregisterArea } = useGlobals();
  const [height, setHeight] = useState<number>();
  const [collapsed, onToggle] = usePropToggle(_collapsed, onCollapse);
  const { ref, isResizing, onMouseDown } = useResize(
    ({ y }) => {
      setHeight((h = 0) => h + y);
    },
    {
      isVertical: true,
      isReverse: E === "footer",
      onEnd() {
        const height = (ref.current?.previousElementSibling as HTMLElement)?.offsetHeight;
        setHeight(height);
        onResize?.(height ?? 0);
      },
    },
  );
  useLayoutEffect(() => {
    const height = (ref.current?.previousElementSibling as HTMLElement)?.offsetHeight;
    if (resizeable && height > 0) {
      const tmr = setTimeout(() => setHeight(height), 50);
      return () => clearTimeout(tmr);
    }
  }, [ref, resizeable]);

  useEffect(() => {
    if (id) {
      registerArea(id, (open) => {
        onToggle(open);
      });
      return () => unregisterArea(id);
    }
    // eslint-disable-next-line @eslint-react/exhaustive-deps
  }, [id]);

  return (
    <E
      {...props}
      aria-roledescription={E === "header" ? "header-pane" : "footer-pane"}
      className={cn(
        "fabric-headfoot relative flex z-1",
        E === "header" ? "area-header flex-col" : "area-footer flex-col-reverse",
      )}
    >
      <Activity mode={collapsed ? "hidden" : "visible"}>
        <div
          className={cn(
            className,
            flex && "flex flex-nowrap",
            align && `${ALIGN_MAP[align]}`,
            justify && `${JUSTIFY_MAP[justify]}`,
          )}
          style={{
            height: height ?? ht,
            minHeight,
            maxHeight,
          }}
        >
          {children}
        </div>
        <div
          ref={ref}
          role="none"
          data-ref="resize-handle"
          onMouseDown={onMouseDown}
          className={cn(
            "relative",
            "after:absolute after:transform-[width] after:border-dotted after:border-t-2 after:w-0 after:m-auto after:inset-0 after:border-t-tint-500",
            resizeable && "hover:after:duration-500 hover:after:w-full",
            isResizing && "after:w-full",
            collapsed && "pointer-events-none",
            resizeable
              ? "h-1 cursor-row-resize bg-tint-50 border-y border-tint-300/50 -my-px"
              : "h-0 border-0 pointer-events-none",
          )}
        />
      </Activity>
      {collapsable && !hideCollapseHandle && (
        <div
          role="none"
          className={cn(
            "absolute z-1 w-16 h-2 leading-0 mx-auto inset-x-0",
            "bg-dimmed text-dimmed outline outline-tint-200/50 text-center rounded-sm cursor-pointer pointer-events-auto",
            E === "header" ? "rounded-t-none -bottom-2" : "rounded-b-none -top-2",
            !collapsed && "opacity-70 hover:opacity-100",
          )}
          onMouseDown={(e) => e.stopPropagation()}
          onClick={() => onToggle()}
        >
          <i
            className={
              "-mt-1 inline-block " +
              ((collapsed && E === "header") || (!collapsed && E === "footer")
                ? "icon-[mdi--chevron-down]"
                : "icon-[mdi--chevron-up]")
            }
          />
        </div>
      )}
    </E>
  );
}

/**
 * Header component wrapping children in a header element. Delegates to HeadFoot with `as="header"`.
 */
export function Header(props: HeadFootProps) {
  return <HeadFoot as="header" data-ref="header" {...props} />;
}

/**
 * Footer component wrapping children in a footer element. Delegates to HeadFoot with `as="footer"`.
 */
export function Footer(props: HeadFootProps) {
  return <HeadFoot as="footer" data-ref="footer" {...props} />;
}
