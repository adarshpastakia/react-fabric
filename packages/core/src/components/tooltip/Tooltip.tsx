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

import {
  FloatingArrow,
  FloatingPortal,
  arrow,
  autoUpdate,
  flip,
  offset,
  safePolygon,
  shift,
  useFloating,
  useHover,
  useInteractions,
  type Placement,
} from "@floating-ui/react";
import { cn, isString, mergeRefs } from "@react-fabric/utilities";
import { Fragment, cloneElement, isValidElement, useEffect, useMemo, useRef } from "react";
import { Icon } from "../../components/icon/Icon";
import { useIsRtl } from "../../hooks/useIsRtl";
import { usePropState } from "../../hooks/usePropState";
import type { ColorBase, CustomColors } from "../../types/colors";

export interface TooltipType {
  /**
   * tooltip content
   */
  content?: string | React.ReactElement;
  /**
   * tooltip color
   */
  color?: CustomColors<ColorBase>;
  /**
   * tooltip placement
   */
  placement?: Placement;
}

export interface TooltipProps extends TooltipType {
  /**
   * force open
   */
  open?: boolean;
  /**
   * show copy action, pass string as copy content
   */
  copyContent?: boolean | string;
  /**
   * disable tooltip
   */
  disabled?: boolean;

  children: React.ReactElement<KeyValue>;
}

const COLOR_MAP: Record<string, string> = {
  default: "bg-dimmed text-dimmed outline-default",
  primary: "bg-primary-50 text-primary-700 outline-primary-100",
  secondary: "bg-secondary-50 text-secondary-700 outline-secondary-100",
  info: "bg-info-50 text-info-700 outline-info-100",
  danger: "bg-danger-50 text-danger-700 outline-danger-100",
  success: "bg-success-50 text-success-700 outline-success-100",
  warning: "bg-warning-50 text-warning-700 outline-warning-100",
  scarlet: "bg-scarlet-50 text-scarlet-700 outline-scarlet-100",
  pumpkin: "bg-pumpkin-50 text-pumpkin-700 outline-pumpkin-100",
  marigold: "bg-marigold-50 text-marigold-700 outline-marigold-100",
  avacado: "bg-avacado-50 text-avacado-700 outline-avacado-100",
  jade: "bg-jade-50 text-jade-700 outline-jade-100",
  denim: "bg-denim-50 text-denim-700 outline-denim-100",
  iris: "bg-iris-50 text-iris-700 outline-iris-100",
  lilac: "bg-lilac-50 text-lilac-700 outline-lilac-100",
  coral: "bg-coral-50 text-coral-700 outline-coral-100",
  wood: "bg-wood-50 text-wood-700 outline-wood-100",
};

const ARROW_COLOR_MAP: Record<string, string> = {
  default: "fill-dimmed stroke-default",
  primary: "fill-primary-50 stroke-primary-100",
  secondary: "fill-secondary-50 stroke-secondary-100",
  info: "fill-info-50 stroke-info-100",
  danger: "fill-danger-50 stroke-danger-100",
  success: "fill-success-50 stroke-success-100",
  warning: "fill-warning-50 stroke-warning-100",
  scarlet: "fill-scarlet-50 stroke-scarlet-100",
  pumpkin: "fill-pumpkin-50 stroke-pumpkin-100",
  marigold: "fill-marigold-50 stroke-marigold-100",
  avacado: "fill-avacado-50 stroke-avacado-100",
  jade: "fill-jade-50 stroke-jade-100",
  denim: "fill-denim-50 stroke-denim-100",
  iris: "fill-iris-50 stroke-iris-100",
  lilac: "fill-lilac-50 stroke-lilac-100",
  coral: "fill-coral-50 stroke-coral-100",
  wood: "fill-wood-50 stroke-wood-100",
};

/**
 * Floating tooltip that displays content on hover.
 *
 * Renders a tooltip using Floating UI with an arrow, positioned relative
 * to its child element. Supports color theming, copy-to-clipboard action,
 * and RTL-aware placement flipping.
 *
 * @example
 * ```tsx
 * import { Tooltip } from "@react-fabric/core";
 *
 * <Tooltip content="Hello world">
 *   <button>Hover me</button>
 * </Tooltip>
 *
 * <Tooltip content="Copy me" copyContent="Copy me">
 *   <span>Copy this</span>
 * </Tooltip>
 * ```
 */
export function Tooltip({
  children,
  color,
  content,
  open,
  copyContent,
  disabled,
  placement: _placement,
  ...rest
}: TooltipProps) {
  const arrowRef = useRef(null);
  const isRtl = useIsRtl();
  const [isOpen, setIsOpen] = usePropState(open);

  const placement = useMemo<Placement>(() => {
    if (isRtl)
      return (
        _placement?.includes("left") ? _placement.replace("left", "right") : (_placement?.replace("right", "left") ?? "top")
      ) as Placement;

    return _placement ?? "top";
  }, [_placement, isRtl]);

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    strategy: "fixed",
    onOpenChange: !!open || disabled ? undefined : setIsOpen,
    whileElementsMounted: autoUpdate,
    placement,
    middleware: [
      shift({ padding: 8 }),
      flip(),
      offset(9),
      arrow({
        element: arrowRef,
      }),
    ],
  });

  const hover = useHover(context, {
    restMs: 500,
    delay: { open: 1000 },
    handleClose: copyContent ? safePolygon({ buffer: 1 }) : undefined,
  });

  const { getReferenceProps, getFloatingProps } = useInteractions([open ? undefined : hover]);

  useEffect(() => {
    context.update();
    // eslint-disable-next-line @eslint-react/exhaustive-deps
  }, [content]);

  const innerRef = useMemo(
    () => mergeRefs(children.props.ref, (el: HTMLElement) => refs.setReference(el)),
    [children.props.ref, refs],
  );

  const copyEl = useMemo(() => {
    if (copyContent) {
      const copyText: string = isString(copyContent) ? copyContent : isString(content) ? content : "";
      const handler = (e: React.MouseEvent) => {
        setIsOpen(false);
        e.stopPropagation();
        void navigator.clipboard.writeText(copyText);
      };
      return (
        <span
          role="none"
          className="ms-2 cursor-pointer text-dimmed flex-content opacity-75 hover:opacity-90 active:opacity-60"
          onClick={handler}
        >
          <Icon icon="icon-[mdi--content-copy]" />
        </span>
      );
    }
    return null;
    // eslint-disable-next-line @eslint-react/exhaustive-deps
  }, [copyContent, content]);

  return (
    <Fragment>
      {cloneElement(children, {
        ref: innerRef,
        ...(open ? {} : getReferenceProps(rest)),
      })}
      {isOpen && content && (
        <FloatingPortal root={refs.domReference.current?.closest<HTMLElement>(".theme-base") ?? undefined}>
          <dfn
            data-ref="tooltip"
            className={cn(
              "fabric-tooltip z-(--z-tooltip)",
              "select-none text-sm not-italic flex py-1 px-2 max-w-lg! rounded shadow-sm outline",
              COLOR_MAP[color as string] ?? COLOR_MAP.default,
            )}
            ref={(el) => refs.setFloating(el)}
            style={{
              ...floatingStyles,
            }}
            {...getFloatingProps()}
          >
            {isValidElement(content) && content}
            {isString(content) && (
              <span className={cn("font-medium flex-1 break-all whitespace-pre-wrap mixed-lang")}>{content}</span>
            )}
            {copyEl}
            <FloatingArrow
              ref={arrowRef}
              context={context}
              strokeWidth={0.5}
              className={cn(ARROW_COLOR_MAP[color as string] ?? ARROW_COLOR_MAP.default)}
            />
          </dfn>
        </FloatingPortal>
      )}
    </Fragment>
  );
}
