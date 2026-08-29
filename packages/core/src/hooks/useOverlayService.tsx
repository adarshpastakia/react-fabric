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

import type { JSX } from "react";
import { useCallback, useRef, useState } from "react";
import type { ModalProps } from "../types";

type OverlayProps<P, T> = Partial<ModalProps<P, T>>;

/**
 * Hook to manage overlay components like modals or flyouts.
 * It provides a way to open an overlay with specified properties and handle its closure.
 * This hook returns the current overlay component and a function to open it with props.
 * It is useful for scenarios where you need to display overlays dynamically,
 * such as modals, flyouts, or any other overlay components in a React application.
 * The `openOverlay` function returns a promise that resolves with the result
 * of the overlay when it is closed, allowing you to handle the result in a controlled manner.
 *
 * @example
 * ```jsx
 * const [Overlay, openOverlay] = useOverlayService(MyModalComponent);
 * // To open the overlay:
 * const handleOpen = async () => {
 *   const result = await openOverlay({ title: "My Modal", content: "Hello World" });
 *   console.log(result); // Handle the result from the overlay
 * };
 * <button onClick={handleOpen}>Open Modal</button>
 * <Overlay />
 * ```
 */
export function useOverlayService<P extends AnyObject = AnyObject, T extends AnyObject = AnyObject>(
  OverlayComponent: React.FunctionComponent<ModalProps<P, T>>,
): [
  renderOverlay: (props?: OverlayProps<P, T>) => JSX.Element | null,
  openOverlay: (props?: OverlayProps<P, T>) => Promise<T | null>,
  closeOverlay: ((args: T | null) => void) | null,
] {
  const [isOpen, setIsOpen] = useState(false);
  const [modalProps, setModalProps] = useState<OverlayProps<P, T>>({} as OverlayProps<P, T>);
  const existingOpenPromiseRef = useRef<(args: T | null, onClose?: (args: T | null) => void) => void>(null);

  // Open modal and optionally pass dynamic props down to it
  const openOverlay = useCallback(async (props: OverlayProps<P, T> = {}) => {
    setModalProps(props);
    setIsOpen(true);
    return await new Promise<T | null>((resolve) => {
      existingOpenPromiseRef.current = (args: T | null) => {
        resolve(args);
        props?.onClose?.(args);
        setIsOpen(false);
        setModalProps({});
        existingOpenPromiseRef.current = null;
      };
    });
  }, []);

  const closeOverlay = useCallback((args: T | null) => {
    existingOpenPromiseRef.current?.(args);
  }, []);

  // A wrapper component that handles the Portal attachment safely
  const renderOverlay = useCallback(
    (props: OverlayProps<P, T> = {}) => {
      if (!isOpen) return null;
      return (
        // @ts-expect-error ignore
        <OverlayComponent
          {...props}
          {...modalProps}
          onClose={(args) => existingOpenPromiseRef.current?.(args, props.onClose)}
        />
      );
    },
    [OverlayComponent, isOpen, modalProps],
  );

  return [renderOverlay, openOverlay, closeOverlay];
}
