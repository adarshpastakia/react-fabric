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

import { Button, useLocalStorage } from "@react-fabric/core";
import classNames from "classnames";

interface Props {
  children: React.ReactNode;
  floating?: React.ReactNode;
  autoHideToolbar?: boolean;
  fullWidth?: boolean;
  hidePin?: boolean;
}

export const Toolbar = ({ children, floating, fullWidth, hidePin, autoHideToolbar }: Props) => {
  const [pinned, setPinned] = useLocalStorage("rf:toolbarPinned", !autoHideToolbar);
  return (
    <div className={classNames("flex flex-col items-center z-4 px-4 area-foot select-none py-1")}>
      {floating}
      <div
        className={classNames(
          "fabric-media-toolbar bg-content rounded shadow-sm flex items-center text-sm leading-0 z-1",
          fullWidth && "w-full",
          !hidePin &&
            !pinned &&
            "absolute bottom-2 translate-y-full hover:translate-y-0 transition-[translate,opacity] duration-300",
          !hidePin && !pinned && "opacity-0 hover:opacity-100",
        )}
      >
        {children}
        {!hidePin && (
          <Button
            icon={pinned ? "icon-[mdi--pin]" : "icon-[mdi--pin-outline]"}
            color={pinned ? "primary" : "default"}
            variant="link"
            data-checked={pinned}
            className={classNames(!pinned && "[&_.fabric-icon]:rotate-45")}
            aria-label={pinned ? "Unpin" : "Pin"}
            onClick={() => setPinned(!pinned)}
          />
        )}
      </div>
    </div>
  );
};
