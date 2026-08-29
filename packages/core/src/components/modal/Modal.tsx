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
  FloatingFocusManager,
  FloatingOverlay,
  FloatingPortal,
  useDismiss,
  useFloating,
  useInteractions,
  useRole,
} from "@floating-ui/react";
import { cn } from "@react-fabric/utilities";
import { Activity, use, useEffect, useId } from "react";
import { LoadingLine } from "../../components/animations/LoadingLine";
import { Icon } from "../../components/icon/Icon";
import { ModalContext } from "../../context/context";
import type { CallbackReturn, ChildrenProp, CssPropWithMap, TestProps } from "../../types";
import type { TitlebarProps } from "../titlebar/Titlebar";
import { Titlebar } from "../titlebar/Titlebar";

export interface ModalProps<T>
  extends
    TestProps,
    ChildrenProp,
    TitlebarProps,
    CssPropWithMap<{ root: string; body?: string; titlebar?: string; title?: string; icon?: string }> {
  /**
   * show loading indicator
   */
  loading?: boolean;
  /**
   * modal size
   */
  size?: "sm" | "md" | "lg" | "xl" | "screen";
  /**
   * height
   */
  height?: string | number;
  /**
   * width
   */
  width?: string | number;
  /**
   * minimum height
   */
  minHeight?: string | number;
  /**
   * minimum width
   */
  minWidth?: string | number;
  /**
   * portal root element
   */
  root?: HTMLElement;
  /**
   * hide mask background
   */
  hideMask?: boolean;
  closeOnEscape?: boolean;
  /**
   * close handler
   */
  onClose?: (args: T | null) => void;
  /**
   * before close handler, return false to prevent close
   */
  onBeforeClose?: (args: T | null) => CallbackReturn;
}

export function Modal<T extends AnyObject = AnyObject>({
  icon,
  className,
  classNames,
  title,
  actions,
  onClose,
  onBeforeClose,
  children,
  loading,
  root,
  size,
  hideMask,
  width,
  height,
  minHeight,
  minWidth,
  closeOnEscape,
  ...props
}: ModalProps<T>) {
  const id = useId();
  const { activeModal, registerModal, removeModal } = use(ModalContext);
  const { refs, context } = useFloating({
    open: true,
    onOpenChange: () => {
      if (id === activeModal) handleClose(null);
    },
  });
  const dismiss = useDismiss(context, {
    outsidePressEvent: "mousedown",
    escapeKey: closeOnEscape,
    enabled: id === activeModal,
  });
  const role = useRole(context);

  // Merge all the interactions into prop getters
  const { getFloatingProps } = useInteractions([dismiss, role]);

  const handleClose = (args: T | null) => {
    void Promise.resolve(onBeforeClose?.(args)).then((ret) => {
      if (ret !== false) {
        if (refs.floating.current) refs.floating.current.dataset.show = "false";
        setTimeout(() => {
          onClose?.(args);
        }, 250);
      }
      if (ret === false) setTimeout(() => refs.floating.current?.querySelector<HTMLElement>("[role='dialog']")?.focus(), 50);
    });
  };

  useEffect(() => {
    if (activeModal === id) {
      const tmr = setTimeout(() => {
        if (refs.floating.current) refs.floating.current.dataset.show = "true";
      }, 50);

      return () => {
        clearTimeout(tmr);
      };
    }
  }, [activeModal, id, refs.floating]);

  useEffect(() => {
    registerModal?.(id, () => onClose?.(null));

    return () => {
      removeModal?.(id);
    };
    // eslint-disable-next-line @eslint-react/exhaustive-deps
  }, [id]);

  return (
    <Activity mode={id === activeModal ? "visible" : "hidden"}>
      <FloatingPortal root={root}>
        <FloatingOverlay
          lockScroll
          style={{
            zIndex: "var(--z-overlay-mask)",
            position: "absolute",
            overflow: "hidden",
          }}
          className={cn("grid place-items-center p-16", !hideMask && "bg-tint-100/20 backdrop-blur-sm")}
        >
          <FloatingFocusManager context={context} modal>
            <dialog
              className={cn(
                "fabric-modal",
                className,
                classNames?.root,
                "rounded-capped relative overflow-hidden flex flex-col flex-nowrap",
                "ring-2 ring-offset-2 ring-tint-100 focus-within:ring-primary-300 shadow-xl",
                size === "sm" && "w-[20rem]",
                size === "md" && "w-160",
                size === "lg" && "w-[60vw]",
                size === "xl" && "w-[80vw]",
                size === "screen" && "w-screen h-screen",
              )}
              style={{
                width,
                height,
                minHeight,
                minWidth,
              }}
              ref={(el) => refs.setFloating(el)}
              {...getFloatingProps()}
              {...props}
            >
              <Titlebar
                title={title}
                icon={icon}
                actions={
                  <>
                    <div className="px-1 leading-none">{actions}</div>
                    <button className="size-fit cursor-pointer leading-none outline-none" onClick={() => handleClose(null)}>
                      <Icon
                        data-ref="panelClose"
                        className={cn("fabric-panelAction", "cursor-pointer p-1 text-xl self-center")}
                        icon="icon-[mdi--close]"
                      />
                    </button>
                  </>
                }
                className={cn(classNames?.titlebar)}
                classNames={classNames}
              />
              {loading && <LoadingLine />}
              <div role="dialog" className={cn("fabric-modalBody", classNames?.body, "flex-1 grid overflow-hidden")}>
                {children}
              </div>
            </dialog>
          </FloatingFocusManager>
        </FloatingOverlay>
      </FloatingPortal>
    </Activity>
  );
}
