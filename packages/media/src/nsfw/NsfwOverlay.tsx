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

import { CoreIcons, Icon } from "@react-fabric/core";
import classNames from "classnames";
import { useEffect, useEffectEvent, useMemo, useRef, useState } from "react";

export const NsfwOverlay = ({
  trigger = "click",
  timeout = 2000,
  message,
}: {
  trigger?: "click" | "hover" | "none";
  timeout?: number;
  message?:
    | string
    | ((props: { hide: () => void; remove: () => void }) => JSX.Element);
}) => {
  const [hide, setHide] = useState(false);

  const hideTimer = useRef<NodeJS.Timeout | null>(null);
  const clickHandler = useEffectEvent((e: React.MouseEvent) => {
    if (trigger === "click") {
      setHide(true);
      if (timeout > 0) {
        hideTimer.current && clearTimeout(hideTimer.current);
        hideTimer.current = setTimeout(() => setHide(false), timeout);
      }
    }
  });

  const mouseEnterHandler = useEffectEvent(() => {
    if (trigger === "hover") {
      setHide(true);
    }
  });

  const mouseLeaveHandler = useEffectEvent(() => {
    if (trigger === "hover") {
      setHide(false);
    }
  });

  const messageHandler = useEffectEvent(() => {
    setHide(true);
    if (timeout > 0) {
      hideTimer.current && clearTimeout(hideTimer.current);
      hideTimer.current = setTimeout(() => setHide(false), timeout);
    }
  });

  const nsfwRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const parentEl = nsfwRef.current?.parentElement;
    if (parentEl && trigger !== "none") {
      // attach show trigger events to parent el
      if (trigger === "click") {
        parentEl.addEventListener("click", clickHandler as any);
      } else if (trigger === "hover") {
        parentEl.addEventListener("mouseenter", mouseEnterHandler as any);
        parentEl.addEventListener("mouseleave", mouseLeaveHandler as any);
      }
    }
    return () => {
      parentEl?.removeEventListener("click", clickHandler as any);
      parentEl?.removeEventListener("mouseenter", mouseEnterHandler as any);
      parentEl?.removeEventListener("mouseleave", mouseLeaveHandler as any);
    };
  }, [trigger]);

  const messageEl = useMemo(() => {
    if (typeof message === "function") {
      const E = message;
      return (
        <div
          role="none"
          data-inner-clickable="true"
          className="bg-base rounded-capped shadow-xs p-4"
        >
          <E
            hide={messageHandler}
            remove={() => {
              setHide(true);
            }}
          />
        </div>
      );
    }

    return (
      <>
        <Icon
          icon={CoreIcons.eyeOff}
          className="media-nsfw-icon text-tint-700/50"
        />
        <div className="text-tint-700/50 text-sm font-medium">{message}</div>
      </>
    );
  }, [message]);

  return (
    <div
      role="none"
      className={classNames(
        "absolute inset-0 bg-transparent z-5",
        hide && "pointer-events-none",
      )}
      ref={nsfwRef}
    >
      {hide ? null : (
        <div
          role="none"
          data-inner-clickable="true"
          className="bg-tint-50/80 backdrop-blur-xl absolute inset-0 grid place-content-center place-items-center text-center shadow-inset select-none"
        >
          {messageEl}
        </div>
      )}
    </div>
  );
};
