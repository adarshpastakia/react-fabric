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
} from "@floating-ui/react";
import { mergeRefs } from "@react-fabric/utilities";
import classNames from "classnames";
import {
  Fragment,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useTranslation } from "react-i18next";
import {
  type CallbackReturn,
  type PolymorphicProps,
  type RefProp,
} from "../../types";
import { Button, type BaseProps, type ButtonProps } from "./Button";

interface ExtendedProps extends Omit<BaseProps, "onClick">, RefProp {
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
   * click handler, return Promise to autoset loading state
   */
  onClick?: (e: boolean) => CallbackReturn;
}

export type ConfirmButtonProps = ExtendedProps & ButtonProps;

/**
 * Button with confirmation dropdown
 */
export const ConfirmButton = <Tag extends React.ElementType = "button">({
  ref,
  message,
  color,
  okLabel,
  cancelLabel,
  onClick,
  loading,
  actionMessage,
  showActionDone,
  showActionDoneEvent = "click",
  ...props
}: ConfirmButtonProps & PolymorphicProps<Tag>) => {
  const { t } = useTranslation("core");
  const arrowRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [busy, setBusy] = useState(false);
  const [actionDone, setActionDone] = useState(false);

  const clickHandler = useCallback(
    (e: boolean) => {
      setBusy(e);
      const ret = onClick?.(e);
      if (e) {
        void Promise.resolve(ret).then((b) => {
          setBusy(false);
          if (b !== false && actionMessage && showActionDoneEvent === "click") {
            setActionDone(true);
          }
        });
      }
    },
    [onClick, actionMessage, showActionDoneEvent],
  );
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
    placement: "bottom",
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

  const { getReferenceProps, getFloatingProps } = useInteractions([
    dismiss,
    click,
  ]);

  const ButtonWrapper = useCallback(
    ({ ref, ...props }: AnyObject) => <Button ref={ref} {...props} />,
    [],
  );

  const innerRef = useMemo(
    () => mergeRefs(ref, refs.setReference),
    [ref, refs.setReference],
  );

  return (
    <Fragment>
      <ButtonWrapper
        {...props}
        color={color}
        loading={busy || loading}
        showActionDone={actionDone || showActionDone}
        showActionDoneEvent="manual"
        actionMessage={actionMessage}
        ref={innerRef}
        {...getReferenceProps()}
        data-dropdown-open={isOpen}
      />
      {isOpen && (
        <FloatingPortal>
          <FloatingFocusManager modal context={context}>
            <div
              data-color={color}
              className={classNames(
                "select-none not-italic rounded-capped shadow-lg outline outline-muted bg-base",
              )}
              ref={refs.setFloating}
              style={floatingStyles}
              {...getFloatingProps()}
            >
              <div className="font-medium ">
                <p className="py-2 px-4">{message}</p>
                <div className="flex justify-end py-2 px-4 gap-2">
                  <Button
                    size="sm"
                    variant="link"
                    color={color}
                    onClick={() => [clickHandler(false), setIsOpen(false)]}
                  >
                    {cancelLabel ?? t("action.cancel")}
                  </Button>
                  <Button
                    size="sm"
                    variant="solid"
                    color={color}
                    autoFocus
                    onClick={() => [clickHandler(true), setIsOpen(false)]}
                  >
                    {okLabel ?? t("action.ok")}
                  </Button>
                </div>
              </div>
              <FloatingArrow
                ref={arrowRef}
                context={context}
                strokeWidth={0.5}
                className="fill-base stroke-muted"
              />
            </div>
          </FloatingFocusManager>
        </FloatingPortal>
      )}
    </Fragment>
  );
};
