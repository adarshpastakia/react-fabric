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

import { Button, Dropdown } from "@react-fabric/core";
import classNames from "classnames";
import { useRef, useState } from "react";

interface Props {
  icon: string;
  value: number;
  min?: number;
  max?: number;
  step?: number;
  className?: string;
  onClick?: () => void;
  onChange?: (value: number) => void;
}

export const FloatingSlider = ({ icon, value, className, onClick, onChange, min = 0, max = 1, step = 0.1 }: Props) => {
  const [toolbarRef, setToolbarRef] = useState<HTMLDivElement>();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleWheel = (delta: number) => {
    if (inputRef.current) {
      inputRef.current.valueAsNumber = Math.max(
        min,
        Math.min(max, inputRef.current.valueAsNumber + (delta < 0 ? -step : step)),
      );
      onChange?.(+inputRef.current.valueAsNumber.toFixed(2));
    }
  };

  return (
    <Dropdown trigger="hover" placement="top" root={toolbarRef}>
      <Button
        variant="link"
        color="primary"
        icon={icon}
        aria-label="Zoom"
        className={className}
        ref={((e: HTMLDivElement) => e && setToolbarRef(e.closest(".fabric-media-toolbar") as HTMLDivElement)) as any}
        onClick={onClick}
        onWheel={(e) => {
          handleWheel(e.deltaY);
          e.stopPropagation();
          return false;
        }}
      />
      <div className="bg-default relative h-24">
        <input
          type="range"
          dir="ltr"
          min={min}
          max={max}
          step={step}
          value={value}
          ref={inputRef}
          onChange={(e) => onChange?.(+(e.target.valueAsNumber ?? min).toFixed(2))}
          onWheel={(e) => {
            handleWheel(e.deltaY);
            e.stopPropagation();
            return false;
          }}
          className={classNames("fabric-media-slider", "w-24 absolute -bottom-2 left-4 origin-left -rotate-90")}
        />
      </div>
    </Dropdown>
  );
};
