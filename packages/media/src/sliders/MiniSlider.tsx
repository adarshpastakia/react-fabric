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

import { Button, Dropdown } from "@react-fabric/core";
import classNames from "classnames";
import { useRef } from "react";

export const MiniSlider = ({
  max,
  min = 0,
  icon,
  value,
  textIcon,
  disabled,
  onClick,
  onChange,
}: {
  textIcon?: boolean;
  min?: number;
  max: number;
  icon: string;
  value: number;
  disabled?: boolean;
  onClick: () => void;
  onChange: (value: number) => void;
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (delta: number) => {
    if (inputRef.current) {
      inputRef.current.valueAsNumber = Math.max(
        min,
        Math.min(
          max,
          inputRef.current.valueAsNumber + (delta < 0 ? -0.01 : 0.01),
        ),
      );
      onChange(inputRef.current.valueAsNumber);
    }
  };

  return (
    <Dropdown
      placement="top"
      dropdownEvent="hover"
      plainDropdown
      dropdownClassName="bg-tint-50/50 backdrop-blur h-28 w-8 relative rounded-none! overflow-visible"
    >
      <Button
        variant="link"
        aria-label="slider"
        disabled={disabled}
        className={classNames(textIcon && "fabric-btnTextIcon")}
        icon={icon}
        onClick={onClick}
        onWheel={(e) => {
          handleChange(e.deltaY);
          e.stopPropagation();
          return false;
        }}
      />
      <input
        type="range"
        dir="ltr"
        min={min}
        max={max}
        step={0.01}
        value={value}
        ref={inputRef}
        onChange={() => onChange(inputRef.current?.valueAsNumber ?? 0)}
        onWheel={(e) => {
          handleChange(e.deltaY);
          e.stopPropagation();
          return false;
        }}
        className={classNames(
          "fabric-media-slider",
          "w-24 absolute -bottom-2 left-4 origin-left -rotate-90",
        )}
      />
    </Dropdown>
  );
};
