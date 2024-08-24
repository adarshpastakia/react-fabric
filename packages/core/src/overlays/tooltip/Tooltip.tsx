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
import { isObject, isString, mergeRefs } from "@react-fabric/utilities";
import classNames from "classnames";
import {
  Fragment,
  cloneElement,
  isValidElement,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactElement,
} from "react";
import { Icon } from "../../components/icon/Icon";
import { useIsRtl } from "../../hooks/useIsRtl";
import { type RefProp, type TooltipType } from "../../types";
import { CoreIcons } from "../../types/icons";
import classes from "./Tooltip.module.css";

export interface TooltipProps extends TooltipType, RefProp {
  /**
   * force open
   */
  open?: boolean;
  /**
   * show copy action, pass string as copy content
   */
  copyContent?: boolean | string;
  disabled?: boolean;
  children: ReactElement;
}

export const getTooltipProps = (
  tooltip?: string | TooltipType,
  innerRef?: AnyObject,
): (TooltipType & { ref: AnyObject }) | undefined => {
  if (isString(tooltip) || isValidElement(tooltip)) {
    return { ref: innerRef, placement: "top", content: tooltip };
  }
  if (isObject(tooltip)) {
    return Object.assign({ ref: innerRef, placement: "top" }, tooltip);
  }
};

export const Tooltip = ({
  ref,
  children,
  color,
  content,
  open,
  copyContent,
  disabled,
  placement: _placement,
  ...rest
}: TooltipProps) => {
  const arrowRef = useRef(null);
  const isRtl = useIsRtl();
  const [isOpen, setIsOpen] = useState(open);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  const placement = useMemo<Placement>(() => {
    if (isRtl)
      return (
        _placement?.includes("left")
          ? _placement.replace("left", "right")
          : _placement?.replace("right", "left") ?? "top"
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
    restMs: 250,
    delay: { open: 1000 },
    handleClose: copyContent ? safePolygon({ buffer: 1 }) : undefined,
  });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    open ? undefined : hover,
  ]);

  useEffect(() => {
    context.update();
  }, [content]);

  const innerRef = useMemo(
    () => mergeRefs(ref, children.props.ref, refs.setReference),
    [ref, children.props.ref, refs.setReference],
  );

  const copyEl = useMemo(() => {
    if (copyContent) {
      const copyText: AnyObject = isString(copyContent) ? copyContent : content;
      const handler = () => {
        setIsOpen(false);
        void navigator.clipboard.writeText(copyText.toString());
      };
      return (
        <span
          role="none"
          className="ms-2 cursor-pointer text-invert flex-content opacity-75 hover:opacity-90 active:opacity-60"
          onClick={handler}
        >
          <Icon icon={CoreIcons.copy} />
        </span>
      );
    }
    return null;
  }, [copyContent, content]);

  return (
    <Fragment>
      {cloneElement(children, {
        ref: innerRef,
        ...(open ? {} : getReferenceProps(rest)),
      })}
      {isOpen && content && (
        <FloatingPortal>
          <dfn
            data-ref="tooltip"
            data-color={color}
            className={classNames(
              classes.tooltip,
              "select-none text-sm not-italic flex py-1 px-2 rounded shadow-md bg-current",
            )}
            ref={refs.setFloating}
            style={floatingStyles}
            {...getFloatingProps()}
          >
            <span
              className={classNames(
                "font-medium text-invert flex-1",
                isString(content) && "whitespace-pre-wrap",
              )}
            >
              {content}
            </span>
            {copyEl}
            <FloatingArrow ref={arrowRef} context={context} />
          </dfn>
        </FloatingPortal>
      )}
    </Fragment>
  );
};
