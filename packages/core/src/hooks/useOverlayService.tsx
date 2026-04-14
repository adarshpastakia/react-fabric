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

import { useRef, useState } from "react";
import { type ModalProps } from "../types";
import { EMPTY_FC } from "@react-fabric/utilities";

/**
 * Hook to manage overlay components like modals or flyouts.
 * It provides a way to open an overlay with specified properties and handle its closure.
 * This hook returns the current overlay component and a function to open it with props.
 * It is useful for scenarios where you need to display overlays dynamically,
 * such as modals, flyouts, or any other overlay components in a React application.
 * The `openOverlay` function returns a promise that resolves with the result
 * of the overlay when it is closed, allowing you to handle the result in a controlled manner.
 *
 * @param ModalOrFlyout - The component to be used as an overlay.
 * @param toggleOpen - If true, calling `openOverlay` while an overlay is already open will close the existing one instead of opening a new one.
 * @returns An array containing the current overlay, a function to open it, and a boolean indicating if the overlay is open.
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
export const useOverlayService = <T extends AnyObject = AnyObject>(
  ModalOrFlyout: React.FunctionComponent<ModalProps<T>>,
): [
  Overlay: React.FunctionComponent<Partial<T>>,
  openOverlay: (props?: Partial<T>) => Promise<AnyObject>,
  closeOverlay: ((args?: AnyObject) => void) | null,
] => {
  const [Overlay, setOverlay] = useState<React.FunctionComponent<Partial<T>>>(EMPTY_FC);

  const existingOpenPromise = useRef<AnyObject | null>(null);
  const openOverlay = async ({ onClose, ...outerProps }: AnyObject = {}) => {
    if (existingOpenPromise.current) {
      return;
    }
    return await new Promise((resolve) => {
      existingOpenPromise.current = (args: AnyObject) => {
        setOverlay(EMPTY_FC);
        resolve(args);
        onClose?.(args);
        existingOpenPromise.current = null;
      };
      setOverlay(() => (overrideProps: Partial<T>) => (
        <ModalOrFlyout {...outerProps} {...(overrideProps as any)} onClose={existingOpenPromise.current} />
      ));
    });
  };

  return [Overlay, openOverlay, existingOpenPromise.current];
};
