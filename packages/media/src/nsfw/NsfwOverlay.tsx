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

import { Icon } from "@react-fabric/core";
import { CoreIcons } from "@react-fabric/core/src/types/icons";
import { useState } from "react";

export const NsfwOverlay = ({ size }: { size?: "sm" | "md" }) => {
  const [hide, setHide] = useState(false);

  return hide ? null : (
    <div
      role="none"
      className="bg-base/80 backdrop-blur-xl absolute inset-0 grid place-content-center text-center shadow-base shadow-inset select-none"
      onClick={(e) => [setHide(true), e.stopPropagation(), e.preventDefault()]}
    >
      <div className={size === "sm" ? "text-sm" : "text-2xl"}>
        <div>Not Safe For Work</div>
        <Icon
          size={size === "sm" ? 32 : 64}
          color="danger"
          icon={CoreIcons.mediaNsfw}
        />
        <div>Click to view</div>
      </div>
    </div>
  );
};
