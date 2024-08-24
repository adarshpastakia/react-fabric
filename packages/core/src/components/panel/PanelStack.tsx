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
  Children,
  cloneElement,
  type MouseEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  useTransition,
} from "react";
import { type ChildrenProp, type CssProp } from "../../types";

export interface PanelStackProps extends CssProp, ChildrenProp {
  /**
   * active panel id
   */
  active?: string;
  /**
   * panel change event callback
   */
  onPanelChange?: (panelId: string) => void;
  /**
   * navigate to previous panel in history
   */
  onBack?: (panelId: string, nextPanelId: string) => boolean | undefined;
}

export const PanelStack = ({
  active,
  children,
  className,
  onPanelChange,
  onBack,
  ...rest
}: PanelStackProps) => {
  const stackRef = useRef<HTMLDivElement>(null);
  const [history, setHistory] = useState<string[]>([]);
  const [, startTransition] = useTransition();

  const panels = useMemo(
    () =>
      new Map(
        Children.toArray(children).map(
          (child: AnyObject) =>
            child.props && [child.props.panelId ?? "root", child],
        ),
      ),
    [children],
  );

  useEffect(() => {
    startTransition(() => {
      onPanelChange?.(history[0] ?? "root");
      stackRef.current?.dispatchEvent(
        new Event("updatePopper", { bubbles: true }),
      );
    });
  }, [onPanelChange, history]);

  const goBack = useCallback(() => {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-boolean-literal-compare
    if (onBack?.(history[0], history[1] ?? "root") !== false) {
      setHistory(history.slice(1));
    }
  }, [history, onBack]);

  const currentPanel = useMemo<AnyObject>(
    () => panels.get(history[0]) ?? panels.values().next().value,
    [history, panels],
  );

  const checkMenuClick = useCallback(
    (e: MouseEvent) => {
      const panelKey = (e.target as HTMLElement)?.dataset?.panel;
      if (panelKey) {
        if (panelKey === "back") {
          goBack();
        } else if (panelKey === "root") {
          // eslint-disable-next-line @typescript-eslint/no-unnecessary-boolean-literal-compare
          if (onBack?.(history[0], "root") !== false) {
            setHistory([]);
          }
        } else if (panels.has(panelKey)) {
          setHistory([panelKey, ...history]);
        }
        e.stopPropagation();
        e.preventDefault();
        return false;
      }
      return true;
    },
    [goBack, history, panels, onBack],
  );

  return (
    <div
      {...rest}
      role="none"
      ref={stackRef}
      className={className}
      onClickCapture={checkMenuClick}
    >
      {currentPanel &&
        cloneElement(currentPanel, {
          onBack: history.length > 0 ? goBack : undefined,
        })}
    </div>
  );
};
