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

import type { PropsWithChildren } from "react";
import { use, useCallback, useState } from "react";
import { ModalContext } from "./context";

export function ModalManagerProvider({ children }: PropsWithChildren) {
  const [modalHistory, setModalHistory] = useState<string[]>([]);
  const [modalCallbacks, setModalCallbacks] = useState<KeyValue<() => void>>({});

  const registerModal = useCallback((id: string, callback: () => void) => {
    setModalHistory((prev) => [...prev, id]);
    setModalCallbacks((prev) => ({ ...prev, [id]: callback }));
  }, []);

  const removeModal = useCallback((id: string) => {
    setModalHistory((prev) => prev.slice(0, prev.indexOf(id)));
    setModalCallbacks((prev) => {
      delete prev[id];
      return prev;
    });
  }, []);

  const closeModal = (id: string) => {
    modalCallbacks[id]?.();
  };

  const closeAllModal = () => {
    Object.values(modalCallbacks).map((cb) => cb());
  };

  return (
    <ModalContext
      value={{ registerModal, removeModal, closeModal, closeAllModal, activeModal: modalHistory[modalHistory.length - 1] }}
    >
      {children}
    </ModalContext>
  );
}

export const useModalManager = () => {
  const { closeModal, closeAllModal } = use(ModalContext);

  return { closeModal, closeAllModal };
};
