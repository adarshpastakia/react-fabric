/*
 * React Fabric
 * @version: 1.0.0
 *
 *
 * The MIT License (MIT)
 * Copyright (c) 2026 Adarsh Pastakia
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

import { Icon } from "@react-fabric/core";
import { useEffect, useEffectEvent, useMemo, useRef, useState } from "react";

export interface NsfwProps {
  /**
   * NSFW trigger type (default: click)
   */
  trigger?: "click" | "hover" | "none";
  /**
   * NSFW hide timeout in milliseconds (default: 2000)
   */
  timeout?: number;
  /**
   * NSFW message to display, can be a string or a function that returns a React element. The function receives an object with `hide` and `remove` functions to control the overlay visibility.
   */
  message?:
    | string
    | ((props: { hide: () => void; remove: () => void }) => React.ReactElement);
}

export const NsfwOverlay = ({
  message,
  trigger = "click",
  timeout = 2000,
}: NsfwProps) => {
  const [hide, setHide] = useState(false);

  const hideTimer = useRef<NodeJS.Timeout | null>(null);
  const clickHandler = useEffectEvent(() => {
    setHide(true);
    if (timeout > 0) {
      hideTimer.current && clearTimeout(hideTimer.current);
      hideTimer.current = setTimeout(() => setHide(false), timeout);
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
          className="fabric-nsfw-message bg-default rounded-capped shadow-xs p-4"
        >
          <E
            hide={() => {
              clickHandler();
            }}
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
          icon="icon-[mdi--shield-lock-outline]"
          className="fabric-nsfw-icon text-tint-900/50"
        />
        <div className="fabric-nsfw-message text-tint-900/80 font-medium">
          {message}
        </div>
      </>
    );
  }, [message]);
  return (
    !hide && (
      <div
        ref={nsfwRef}
        data-inner-clickable="true"
        className="absolute inset-0 backdrop-blur-2xl bg-tint-50/50 z-5 grid place-content-center place-items-center text-center fabric-nsfw-container"
      >
        {messageEl}
      </div>
    )
  );
};
