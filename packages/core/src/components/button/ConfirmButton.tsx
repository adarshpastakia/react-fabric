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
  FloatingFocusManager,
  FloatingPortal,
  arrow,
  autoUpdate,
  flip,
  offset,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  type Placement,
} from "@floating-ui/react";
import { cn, mergeRefs } from "@react-fabric/utilities";
import { Fragment, useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { type CallbackReturn } from "../../types";
import { Button, type ButtonProps } from "./Button";

interface ExtendedProps {
  /**
   * confirm message
   */
  message: string;
  /**
   * ok label
   */
  okLabel?: string;
  /**
   * ok label
   */
  cancelLabel?: string;
  /**
   * dropdown placement
   */
  placement?: Placement;
  /**
   * click handler, return Promise to autoset loading state
   */
  onClick?: (e: boolean) => CallbackReturn;
}

/**
 * A button that shows a confirmation dialog when clicked, allowing the user to confirm or cancel an action.
 * It supports custom messages, labels, and loading states.
 * This component is useful for actions that require user confirmation, such as deleting items or submitting forms.
 * It uses the Floating UI library to manage the positioning of the confirmation dialog, ensuring it appears correctly relative to the button.
 * It also supports custom placement of the dialog, and can display an action message when the action is completed.
 *
 * @example
 * ```jsx
 * <ConfirmButton
 *   message="Are you sure you want to delete this item?"
 *   onClick={(confirmed) => {
 *     if (confirmed) {
 *       // Perform action
 *     }
 *   }}
 * />
 * ```
 */
export const ConfirmButton = <Tag extends React.ElementType = "button">(props: ExtendedProps & ButtonProps<Tag>) => {
  const { as, ref, message, color, okLabel, cancelLabel, showActionDoneEvent, onClick, loading, placement = "bottom", ...buttonProps } = props;
  const { t } = useTranslation("core");
  const arrowRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [busy, setBusy] = useState(false);
  const [actionDone, setActionDone] = useState(false);

  const clickHandler = (e: boolean) => {
    setBusy(e);
    const ret = onClick?.(e);
    if (ret) {
      void Promise.resolve(ret).then((b) => {
        setBusy(false);
        if (b !== false && showActionDoneEvent === "click") {
          setActionDone(true);
        }
      });
    }
  };
  useEffect(() => {
    if (actionDone) {
      const timer = setTimeout(() => setActionDone(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [actionDone]);

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange(nextOpen, _, reason) {
      setIsOpen(nextOpen);
      if (reason === "escape-key") {
        clickHandler(false);
      }
    },
    strategy: "fixed",
    placement,
    whileElementsMounted: autoUpdate,
    middleware: [
      shift({ padding: 8 }),
      flip(),
      offset(9),
      arrow({
        element: arrowRef,
      }),
    ],
  });

  const click = useClick(context, {
    enabled: !props.disabled,
  });
  const dismiss = useDismiss(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([dismiss, click]);

  const innerRef = useMemo(() => mergeRefs(ref, refs.reference), [ref, refs.reference]);

  return (
    <Fragment>
      <Button
        as={as as Tag}
        {...(buttonProps as ButtonProps<Tag>)}
        color={color}
        loading={busy || loading}
        showActionDone={actionDone}
        showActionDoneEvent="manual"
        ref={innerRef}
        {...getReferenceProps()}
        data-dropdown-open={isOpen}
      />
      {isOpen && (
        <FloatingPortal root={refs.domReference.current?.closest<HTMLElement>(".theme-base") ?? undefined}>
          <FloatingFocusManager context={context}>
            <div
              data-color={color}
              className={cn("select-none not-italic rounded-capped shadow-lg outline outline-muted bg-default")}
              ref={(el) => refs.setFloating(el)}
              style={{
                zIndex: "var(--z-popover)",
                ...floatingStyles,
              }}
              {...getFloatingProps()}
            >
              <div className="font-medium ">
                <p className="py-2 px-4" data-ref="confirmMessage">
                  {message}
                </p>
                <div className="flex justify-end py-2 px-4 gap-2">
                  <Button size="sm" variant="link" data-ref="confirmCancel" color={color} onClick={() => [clickHandler(false), setIsOpen(false)]}>
                    {cancelLabel ?? t("action.cancel")}
                  </Button>
                  <Button
                    size="sm"
                    variant="solid"
                    color={color}
                    {...{ autoFocus: true }}
                    data-ref="confirmOk"
                    onClick={() => [clickHandler(true), setIsOpen(false)]}
                  >
                    {okLabel ?? t("action.ok")}
                  </Button>
                </div>
              </div>
              <FloatingArrow ref={arrowRef} context={context} strokeWidth={0.5} className="fill-default stroke-muted" />
            </div>
          </FloatingFocusManager>
        </FloatingPortal>
      )}
    </Fragment>
  );
};
